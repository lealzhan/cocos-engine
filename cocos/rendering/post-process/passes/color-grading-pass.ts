import { Vec4 } from '../../../core';
import { ClearFlagBit, Format } from '../../../gfx';
import { Camera } from '../../../render-scene/scene';
import { Pipeline } from '../../custom';
import { getCameraUniqueID } from '../../custom/define';
import { passContext } from '../utils/pass-context';

import { getSetting, SettingPass } from './setting-pass';
import { ColorGrading } from '../components';

export class ColorGradingPass extends SettingPass {
    get setting () { return getSetting(ColorGrading); }

    name = 'ColorGradingPass'
    effectName = 'pipeline/post-process/color-grading';
    outputNames = ['ColorGrading']

    public render (camera: Camera, ppl: Pipeline): void {
        const cameraID = getCameraUniqueID(camera);

        passContext.clearFlag = ClearFlagBit.COLOR;
        Vec4.set(passContext.clearColor, 0, 0, 0, 1);

        passContext.material = this.material;

        const setting = this.setting;
        this.material.setProperty('colorGradingMap', setting.colorGradingMap);
        this.material.setProperty('contribute', setting.contribute);

        const input = this.lastPass!.slotName(camera, 0);
        const slot = this.slotName(camera, 0);
        const isSquareMap = setting.colorGradingMap && setting.colorGradingMap.width === setting.colorGradingMap.height;
        const passName = isSquareMap ? 'color-grading-8x8' : 'color-grading-32';
        const passIndx = isSquareMap ? 1 : 0;
        passContext
            .updatePassViewPort()
            .addRasterPass(passName, `color-grading${cameraID}`)
            .setPassInput(input, 'sceneColorMap')
            .addRasterView(slot, Format.RGBA8)
            .blitScreen(passIndx)
            .version();
    }
}
