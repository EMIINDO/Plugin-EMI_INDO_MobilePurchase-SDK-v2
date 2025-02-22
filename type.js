"use strict";
{
    const SDK = globalThis.SDK;

    const PLUGIN_CLASS = SDK.Plugins.EMI_INDO_MobilePurchase;

    PLUGIN_CLASS.Type = class MobilePurchaseType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}