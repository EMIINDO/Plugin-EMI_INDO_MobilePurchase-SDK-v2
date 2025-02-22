"use strict";
// Porting BY EMI INDO with c3addon-ide-plus
{
    const SDK = globalThis.SDK;

    const PLUGIN_ID = "EMI_INDO_MobilePurchase";
    // callMap Deprecated const PLUGIN_VERSION = "1.0.0.2";
    const PLUGIN_CATEGORY = "monetisation";

    const PLUGIN_CLASS = SDK.Plugins.EMI_INDO_MobilePurchase = class MobilePurchasePlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("EMI_INDO");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);
            this._info.SetCanBeBundled(true);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([

            ]);

            this._info.AddCordovaPluginReference(
                {
                    id: "emi-indo-cordova-plugin-iap",
                    version: "0.0.7"
                });

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}