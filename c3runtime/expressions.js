"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_MobilePurchase.Exps = {
        SuccessResponse()
        {
            return this.successResponse;
        },

        ErrorResponse()
        {
            return this.errorResponse;
        },

        ResponseCode()
        {
            return this.responseCode;
        },

        ProductDetail()
        {
            return this._resPositionProductDetail;
        },

        PurchaseHistory()
        {
            return this._resPositionPurchaseHistory;
        },

        RestorePurchase()
        {
            return this._resPositionRestorePurchase;
        },

        PackageName()
        {
            return this._packageName;
        },

        ProductsId()
        {
            return this._productsId;
        },

        PurchaseTime()
        {
            return this._purchaseTime;
        },

        OrderId()
        {
            return this._orderId;
        },

        PurchaseToken()
        {
            return this._purchaseToken;
        },

        Signature()
        {
            return this._signature;
        },

        PurchaseState()
        {
            return this._purchaseState;
        },

        OriginalJson()
        {
            return this._originalJson;
        },

        Quantity()
        {
            return this._quantity;
        },

        IsAcknowledged()
        {
            return this._isAcknowledged;
        },

        Accountidentifiers()
        {
            return this._accountIdentifiers;
        },

        DeveloperPayload()
        {
            return this._developerPayload;
        }
    };
}