"use strict";
{


    globalThis.C3.Plugins.EMI_INDO_MobilePurchase.Instance = class MobilePurchaseInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }


            if (typeof cordova == 'undefined') {
                return;
            }
            else { };

            this._Candition = globalThis.C3.Plugins.EMI_INDO_MobilePurchase.Cnds;
            this._initPurchase = cordova.plugins.emiInAppPurchase;

            this.successResponse = "";
            this.errorResponse = "";

            this.responseCode = null;

            this.isPurchaseSuccess = false;

            this.verificationProductId = "";
            this.verificationId = "";

            this._packageName = "";
            this._productsId = "";
            this._purchaseTime = "";
            this._orderId = "";
            this._purchaseToken = "";
            this._signature = "";
            this._purchaseState = "";
            this._originalJson = "";
            this._quantity = "";
            this._isAcknowledged = "";
            this._isAutoRenewing = "";
            this._accountIdentifiers = "";
            this._developerPayload = "";


            this._resPositionProductDetail = "";
            this._resPositionPurchaseHistory = "";
            this._resPositionRestorePurchase = "";

            this._resProductType = null;

            this.verificationProductIdSub = "";

            const self = this;

            let _initializeActs = () => {

                const self = this;

                this._initPurchase.initialize(

                    (success) => {

                        if (success === 0) {

                            self.successResponse = ("On initialize");
                            self._trigger(self._Candition.OnInitialize);

                        }
                        else {

                            self.errorResponse = ("On initialize error: " + error);
                            self._trigger(self._Candition.OnInitializeError);

                        }

                    }, (error) => {
                        self.successResponse = ("On initialize");
                        self._trigger(self._Candition.OnInitialize);
                    });

            };



            let _purchaseProductsActs = (productType, productId, isConsumable, title, description) => {

                const self = this;

                this._initPurchase.purchaseProducts(
                    this.setProductType(productType), productId, this.setIsConsumable(isConsumable), title, description,

                    (success) => {

                        this.verificationProductId = productId;

                        self._packageName = success.packageName;
                        self._productsId = success.productsId;
                        self._purchaseTime = success.purchaseTime;
                        self._orderId = success.orderId;
                        self._purchaseToken = success.purchaseToken;
                        self._signature = success.signature;
                        self._purchaseState = success.purchaseState;
                        self._originalJson = success.originalJson;
                        self._quantity = success.quantity;
                        self._isAcknowledged = success.isAcknowledged;
                        self._isAutoRenewing = success.isAutoRenewing;
                        self._accountIdentifiers = success.accountIdentifiers;
                        self._developerPayload = success.developerPayload;

                        this.isPurchaseSuccess = true;
                        self.responseCode = 0;
                        self._trigger(self._Candition.OnPurchaseCompleted);


                    }, (error) => {

                        switch (error) {

                            case 1:
                                self.responseCode = 1;
                                self.successResponse = ("On User Canceled productId: " + productId);
                                self._trigger(self._Candition.OnUserCanceled);
                                break
                            case 2:
                                self.responseCode = 2;
                                self.successResponse = ("On Service Unavailable: " + productId);
                                self._trigger(self._Candition.OnServiceUnavailable);
                                break
                            case 3:
                                self.responseCode = 3;
                                self.successResponse = ("On Billing Unavailable: " + productId);
                                self._trigger(self._Candition.OnBillingUnavailable);
                                break
                            case 4:
                                self.responseCode = 4;
                                self.successResponse = ("On Item Unavailable: " + productId);
                                self._trigger(self._Candition.OnItemUnavailable);
                                break
                            case 5:
                                self.responseCode = 5;
                                self.successResponse = ("On Developer Error: " + productId);
                                self._trigger(self._Candition.OnDeveloperError);
                                break
                            case 6:
                                if (this.isPurchaseSuccess === true) {
                                    self.responseCode = 6;
                                    self.isPurchaseSuccess = true;
                                    self.successResponse = ("On Purchase Success but error: (This is a fatal error that indicates an internal problem with Google Play itself.)")
                                    self._trigger(self._Candition.OnError);
                                }
                                else if (this.isPurchaseSuccess === false) {
                                    self.responseCode = 6;
                                    self.isPurchaseSuccess = false;
                                    self.successResponse = ("On Error: (This is a fatal error that indicates an internal problem with Google Play itself.)")
                                    self._trigger(self._Candition.OnError);
                                }
                                break
                            case 7:
                                this.verificationProductId = productId;
                                self.responseCode = 7;
                                self.successResponse = ("On Item Already Owned:" + productId)
                                self._trigger(self._Candition.OnItemAlreadyOwned);
                                break
                            case 8:
                                self.responseCode = 8;
                                self.successResponse = ("On Item Not Owned: " + productId);
                                self._trigger(self._Candition.OnItemNotOwned);
                                break
                            case -1:
                                self.responseCode = -1;
                                self.successResponse = ("On Service Disconnected: " + productId);
                                self._trigger(self._Candition.OnServiceDisconnected);
                                break
                            case -2:
                                self.responseCode = -2;
                                self.successResponse = ("On Feature Not Supported: " + productId);
                                self._trigger(self._Candition.OnFeatureNotSupported);
                                break
                            case 12:
                                self.responseCode = 12;
                                self.successResponse = ("On Network Error: " + productId);
                                self._trigger(self._Candition.OnNetworkError);
                                break
                        }

                    }

                )

            };




            let _getProductDetailActs = (productType, productId, position) => {

                const self = this;

                this._initPurchase.getProductDetail(
                    this.setProductType(productType), productId, this.setPositionPurchase(position),

                    (result) => {

                        self._resPositionProductDetail = (result);
                        self.successResponse = (result);

                        self._trigger(self._Candition.OnGetProductDetail);

                    }, (error) => {

                        self.errorResponse = ("On Get Product Detail Error:" + error)
                        self._trigger(self._Candition.OnGetProductDetailError);

                    });

            };



            let _getPurchaseHistoryActs = (productType, position) => {

                const self = this;

                this._initPurchase.getPurchaseHistory(
                    this.setProductType(productType), this.setPositionHistory(position),

                    (result) => {

                        self._resPositionPurchaseHistory = (result);
                        self.successResponse = (result);
                        self._trigger(self._Candition.OnGetPurchaseHistory);

                    }, (error) => {

                        self.errorResponse = ("On Get Purchase History Error:" + error)
                        self._trigger(self._Candition.OnGetPurchaseHistoryError);

                    });

            };


            let _restorePurchasesActs = (productType, position) => {

                const self = this;

                this._initPurchase.restorePurchases(
                    this.setProductType(productType), this.setPositionRestore(position),

                    (result) => {


                        self._resPositionRestorePurchase = (result);
                        self.successResponse = (result);
                        self._trigger(self._Candition.OnRestore);

                    }, (error) => {

                        self.errorResponse = ("On Restore Error:" + error)
                        self._trigger(self._Candition.OnRestoreError);

                    });

            };

            this._initializeActs = _initializeActs;
            this._purchaseProductsActs = _purchaseProductsActs;
            this._getProductDetailActs = _getProductDetailActs;
            this._getPurchaseHistoryActs = _getPurchaseHistoryActs;
            this._restorePurchasesActs = _restorePurchasesActs;


        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }


        setProductType(_index) {
            switch (_index) {
                case 0:

                    this._resProductType = 0;
                    return "Non-consumable";

                case 1:
                    this._resProductType = 1;
                    return "Subscriptions";

            }
        };


        setIsConsumable(_index) {
            switch (_index) {
                case 0:
                    return true;
                case 1:
                    return false;
            }
        };


        setPositionPurchase(_index) {
            switch (_index) {
                case 0:
                    return "ProductId";
                case 1:
                    return "Title";
                case 2:
                    return "Description";
                case 3:
                    return "Item_Price";
                case 4:
                    return "Any";
                default:
                    return "ProductId";
            }
        };


        setPositionHistory(_index) {
            switch (_index) {
                case 0:
                    return "Purchase_Token";
                case 1:
                    return "Original_Json";
                case 2:
                    return "Quantity";
                case 3:
                    return "Signature";
                case 4:
                    return "Developer_Payload";
                case 5:
                    return "Products";
                case 6:
                    return "Purchase_Time";
                case 7:
                    return "Any";
                default:
                    return "ProductId";
            }
        };



        setPositionRestore(_index) {
            switch (_index) {
                case 0:
                    return "OrderId";
                case 1:
                    return "Purchase_Token";
                case 2:
                    return "Package_Name";
                case 3:
                    return "Purchase_Time";
                case 4:
                    return "Purchase_State";
                case 5:
                    return "Quantity";
                case 6:
                    return "Signature";
                case 7:
                    return "Original_Json";
                case 8:
                    return "ProductId";
                case 9:
                    return "Any";
                default:
                    return "ProductId";
            }
        };


    };
}