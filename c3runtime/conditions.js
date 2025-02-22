"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_MobilePurchase.Cnds = {
        OnInitialize()
        {
            return true;
        },

        OnInitializeError()
        {
            return true;
        },

        OnPurchaseCompleted(productId)
        {
            const self = this;

            if (this.verificationProductId === productId)
            {

                self.successResponse = ("On Purchase Completed productId: " + productId)
                self.responseCode = 0;
                self.isPurchaseSuccess = false;
                return true;
            }
        },

        OnUserCanceled()
        {
            return true;
        },

        OnServiceUnavailable()
        {
            return true;
        },

        OnBillingUnavailable()
        {
            return true;
        },

        OnItemUnavailable()
        {
            return true;
        },

        OnDeveloperError()
        {
            return true;
        },

        OnError()
        {
            return true;
        },

        OnItemAlreadyOwned(productType)
        {
            if (this._resProductType === productType)
            {
                return true;
            }
        },

        OnItemNotOwned()
        {
            return true;
        },

        OnServiceDisconnected()
        {
            return true;
        },

        OnFeatureNotSupported()
        {
            return true;
        },

        OnNetworkError()
        {
            return true;
        },

        OnGetProductDetail(productType, productId)
        {

            if (productType === 0)
            {
                return true;
            }
            else if (productType === 1)
            {
                return true;
            }

        },

        OnGetProductDetailError()
        {
            return true;
        },

        OnGetPurchaseHistory(productType)
        {
            if (this._resProductType === productType)
            {
                return true;
            }
        },

        OnGetPurchaseHistoryError()
        {
            return true;
        },

        OnRestore(productType)
        {
            if (this._resProductType === productType)
            {
                return true;
            }


        },

        OnRestoreError()
        {
            return true;
        }
    };
}