"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_MobilePurchase.Acts = {
        async Initialize()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
            else
            {
                await this._initializeActs()
            };

        },

        async GetProductDetails(productType, productId, position)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
            else
            {
                await this._getProductDetailActs(productType, productId, position)
            };

        },

        async PurchaseProducts(productType, productId, isConsumable, title, description)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
            else
            {
                await this._purchaseProductsActs(productType, productId, isConsumable, title, description)
            };

        },

        async GetPurchaseHistory(productType, position)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
            else
            {
                await this._getPurchaseHistoryActs(productType, position)
            };

        },

        async RestorePurchases(productType, position)
        {

            if (typeof cordova == 'undefined')
            {
                return;
            }
            else
            {
                await this._restorePurchasesActs(productType, position)
            };


        }
    };
}