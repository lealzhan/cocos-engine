// clang-format off

/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (http://www.swig.org).
 * Version 4.1.0
 *
 * This file is not intended to be easily readable and contains a number of
 * coding conventions designed to improve portability and efficiency. Do not make
 * changes to this file unless you know what you are doing--modify the SWIG
 * interface file instead.
 * ----------------------------------------------------------------------------- */

/****************************************************************************
 Copyright (c) 2022 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
****************************************************************************/

#pragma once
#include "bindings/jswrapper/SeApi.h"
#include "bindings/manual/jsb_conversions.h"
#include "core/data/Object.h"
#include "core/data/JSBNativeDataHolder.h"
#include "platform/interfaces/modules/canvas/CanvasRenderingContext2D.h"
#include "platform/interfaces/modules/Device.h"
#include "platform/interfaces/modules/ISystemWindow.h"
#include "platform/interfaces/modules/ISystemWindowManager.h"
#include "platform/FileUtils.h"
#include "platform/SAXParser.h"
#include "math/Vec2.h"
#include "math/Vec3.h"
#include "math/Vec4.h"
#include "math/Mat3.h"
#include "math/Mat4.h"
#include "math/Quaternion.h"
#include "math/Color.h"
#include "profiler/DebugRenderer.h"



bool register_all_engine(se::Object* obj);


JSB_REGISTER_OBJECT_TYPE(cc::Vec2);
extern se::Object *__jsb_cc_Vec2_proto; // NOLINT
extern se::Class * __jsb_cc_Vec2_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::Color);
extern se::Object *__jsb_cc_Color_proto; // NOLINT
extern se::Class * __jsb_cc_Color_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::Vec3);
extern se::Object *__jsb_cc_Vec3_proto; // NOLINT
extern se::Class * __jsb_cc_Vec3_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::Vec4);
extern se::Object *__jsb_cc_Vec4_proto; // NOLINT
extern se::Class * __jsb_cc_Vec4_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::Mat3);
extern se::Object *__jsb_cc_Mat3_proto; // NOLINT
extern se::Class * __jsb_cc_Mat3_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::Mat4);
extern se::Object *__jsb_cc_Mat4_proto; // NOLINT
extern se::Class * __jsb_cc_Mat4_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::Quaternion);
extern se::Object *__jsb_cc_Quaternion_proto; // NOLINT
extern se::Class * __jsb_cc_Quaternion_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::CCObject);
extern se::Object *__jsb_cc_CCObject_proto; // NOLINT
extern se::Class * __jsb_cc_CCObject_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::JSBNativeDataHolder);
extern se::Object *__jsb_cc_JSBNativeDataHolder_proto; // NOLINT
extern se::Class * __jsb_cc_JSBNativeDataHolder_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::ICanvasGradient);
extern se::Object *__jsb_cc_ICanvasGradient_proto; // NOLINT
extern se::Class * __jsb_cc_ICanvasGradient_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::ICanvasRenderingContext2D);
extern se::Object *__jsb_cc_ICanvasRenderingContext2D_proto; // NOLINT
extern se::Class * __jsb_cc_ICanvasRenderingContext2D_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::CanvasGradient);
extern se::Object *__jsb_cc_CanvasGradient_proto; // NOLINT
extern se::Class * __jsb_cc_CanvasGradient_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::CanvasRenderingContext2D);
extern se::Object *__jsb_cc_CanvasRenderingContext2D_proto; // NOLINT
extern se::Class * __jsb_cc_CanvasRenderingContext2D_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::Device);
extern se::Object *__jsb_cc_Device_proto; // NOLINT
extern se::Class * __jsb_cc_Device_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::ISystemWindow);
extern se::Object *__jsb_cc_ISystemWindow_proto; // NOLINT
extern se::Class * __jsb_cc_ISystemWindow_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::ISystemWindowInfo);
extern se::Object *__jsb_cc_ISystemWindowInfo_proto; // NOLINT
extern se::Class * __jsb_cc_ISystemWindowInfo_class; // NOLINT


template<>
bool sevalue_to_native(const se::Value &from, cc::ISystemWindowInfo * to, se::Object *ctx);


JSB_REGISTER_OBJECT_TYPE(cc::ISystemWindowManager);
extern se::Object *__jsb_cc_ISystemWindowManager_proto; // NOLINT
extern se::Class * __jsb_cc_ISystemWindowManager_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::FileUtils);
extern se::Object *__jsb_cc_FileUtils_proto; // NOLINT
extern se::Class * __jsb_cc_FileUtils_class; // NOLINT


JSB_REGISTER_OBJECT_TYPE(cc::SAXParser);
extern se::Object *__jsb_cc_SAXParser_proto; // NOLINT
extern se::Class * __jsb_cc_SAXParser_class; // NOLINT

#if CC_USE_DEBUG_RENDERER

JSB_REGISTER_OBJECT_TYPE(cc::DebugTextInfo);
extern se::Object *__jsb_cc_DebugTextInfo_proto; // NOLINT
extern se::Class * __jsb_cc_DebugTextInfo_class; // NOLINT


template<>
bool sevalue_to_native(const se::Value &from, cc::DebugTextInfo * to, se::Object *ctx);

#endif // CC_USE_DEBUG_RENDERER
#if CC_USE_DEBUG_RENDERER

JSB_REGISTER_OBJECT_TYPE(cc::DebugRenderer);
extern se::Object *__jsb_cc_DebugRenderer_proto; // NOLINT
extern se::Class * __jsb_cc_DebugRenderer_class; // NOLINT

#endif // CC_USE_DEBUG_RENDERER
// clang-format on
