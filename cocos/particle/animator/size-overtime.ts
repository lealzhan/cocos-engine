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

import { ccclass, tooltip, displayOrder, type, serializable, range, visible } from 'cc.decorator';
import { pseudoRandom, Vec3 } from '../../core';
import { Particle, ParticleModuleBase, PARTICLE_MODULE_NAME } from '../particle';
import CurveRange from './curve-range';
import { ModuleRandSeed } from '../enum';
import { isCurveTwoValues } from '../particle-general-function';

const SIZE_OVERTIME_RAND_OFFSET = ModuleRandSeed.SIZE;

@ccclass('cc.SizeOvertimeModule')
export default class SizeOvertimeModule extends ParticleModuleBase {
    @serializable
    _enable = false;
    /**
     * @zh 是否启用。
     */
    @displayOrder(0)
    public get enable () {
        return this._enable;
    }

    public set enable (val) {
        if (this._enable === val) return;
        this._enable = val;
        if (!this.target) return;
        this.target.enableModule(this.name, val, this);
    }

    /**
     * @zh 决定是否在每个轴上独立控制粒子大小。
     */
    @serializable
    @displayOrder(1)
    @tooltip('i18n:sizeOvertimeModule.separateAxes')
    public separateAxes = false;

    /**
     * @zh 定义一条曲线来决定粒子在其生命周期中的大小变化。
     */
    @type(CurveRange)
    @serializable
    @range([0, Number.POSITIVE_INFINITY])
    @displayOrder(2)
    @tooltip('i18n:sizeOvertimeModule.size')
    @visible(function (this: SizeOvertimeModule): boolean { return !this.separateAxes; })
    public size = new CurveRange();

    /**
     * @zh 定义一条曲线来决定粒子在其生命周期中 X 轴方向上的大小变化。
     */
    @type(CurveRange)
    @serializable
    @range([0, Number.POSITIVE_INFINITY])
    @displayOrder(3)
    @tooltip('i18n:sizeOvertimeModule.x')
    @visible(function (this: SizeOvertimeModule): boolean { return this.separateAxes; })
    public x = new CurveRange();

    /**
     * @zh 定义一条曲线来决定粒子在其生命周期中 Y 轴方向上的大小变化。
     */
    @type(CurveRange)
    @serializable
    @range([0, Number.POSITIVE_INFINITY])
    @displayOrder(4)
    @tooltip('i18n:sizeOvertimeModule.y')
    @visible(function (this: SizeOvertimeModule): boolean { return this.separateAxes; })
    public y = new CurveRange();

    /**
     * @zh 定义一条曲线来决定粒子在其生命周期中 Z 轴方向上的大小变化。
     */
    @type(CurveRange)
    @serializable
    @range([0, Number.POSITIVE_INFINITY])
    @displayOrder(5)
    @tooltip('i18n:sizeOvertimeModule.z')
    @visible(function (this: SizeOvertimeModule): boolean { return this.separateAxes; })
    public z = new CurveRange();

    public name = PARTICLE_MODULE_NAME.SIZE;

    public animate (particle: Particle, dt: number) {
        if (!this.separateAxes) {
            const rand = isCurveTwoValues(this.size) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
            Vec3.multiplyScalar(particle.size, particle.startSize,
                this.size.evaluate(1 - particle.remainingLifetime / particle.startLifetime, rand)!);
        } else {
            const currLifetime = 1 - particle.remainingLifetime / particle.startLifetime;
            const randX = isCurveTwoValues(this.x) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
            const randY = isCurveTwoValues(this.y) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
            const randZ = isCurveTwoValues(this.z) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
            particle.size.x = particle.startSize.x * this.x.evaluate(currLifetime, randX)!;
            particle.size.y = particle.startSize.y * this.y.evaluate(currLifetime, randY)!;
            particle.size.z = particle.startSize.z * this.z.evaluate(currLifetime, randZ)!;
        }
    }
}
