/*
 Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Vec3 } from '../../../core';
import { PhysicsSystem } from '../../framework';
import { BoxCharacterController } from '../../framework/components/character-controllers/box-character-controller';
import { IBoxCharacterController } from '../../spec/i-character-controller';
import { PX, _trans } from '../physx-adapter';
import { PhysXCharacterController } from './physx-character-controller';
import { PhysXInstance } from '../physx-instance';
import { PhysXWorld } from '../physx-world';
import { degreesToRadians } from '../../../core/utils/misc';

const v3_0 = new Vec3(0, 0, 0);
export class PhysXBoxCharacterController extends PhysXCharacterController implements IBoxCharacterController {
    get component (): BoxCharacterController {
        return this._comp as BoxCharacterController;
    }

    onComponentSet (): void {
        this.component.node.getWorldPosition(v3_0);
        const upDir = new Vec3(0, 1, 0);//temp
        const pxMtl = PhysXInstance.physics.createMaterial(0.5, 0.5, 0.5);//temp
        //const mat = collider.material;//PhysXInstance.physics.createMaterial(0.5, 0.5, 0.5);//temp
        const physxWorld = (PhysicsSystem.instance.physicsWorld as PhysXWorld);

        const controllerDesc = new PX.PxBoxControllerDesc();
        controllerDesc.halfHeight = this.component.halfHeight;
        controllerDesc.halfSideExtent = this.component.halfSideExtent;
        controllerDesc.halfForwardExtent = this.component.halfForwardExtent;
        controllerDesc.density = 10.0;
        controllerDesc.scaleCoeff = 0.8;
        controllerDesc.volumeGrowth = 1.5;
        controllerDesc.contactOffset = this.component.contactOffset;
        controllerDesc.stepOffset = this.component.stepOffset;
        controllerDesc.slopeLimit = Math.cos(degreesToRadians(this.component.slopeLimit));
        controllerDesc.upDirection = upDir;//this.component._upDirection;
        controllerDesc.position = { x: v3_0.x, y: v3_0.y, z: v3_0.z };//PxExtendedVec3
        controllerDesc.setMaterial(pxMtl);
        controllerDesc.setReportCallback(PX.PxUserControllerHitReport.implement(physxWorld.callback.controllerHitReportCB));
        this._impl = PX.createBoxCharacterController(physxWorld.controllerManager, controllerDesc);

        if (this._impl.$$) PX.IMPL_PTR[this._impl.$$.ptr] = this;
    }

    setHalfHeight (value: number): void {
        this._impl.setHalfHeight(value);
    }

    setHalfSideExtent (value: number): void {
        this._impl.setHalfSideExtent(value);
    }

    setHalfForwardExtent (value: number): void {
        this._impl.setHalfForwardExtent(value);
    }
}