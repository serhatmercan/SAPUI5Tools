sap.ui.define([
	"com/serhatmercan/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.serhatmercan.Controller", {

		onInit: function () {
			const oModel = new JSONModel({
				Value: ""
			});

			this.setModel(oModel, "model");

			this.getRouter().getRoute("main").attachPatternMatched(this._onViewMatched, this);
		},

		bindDialog: function () {
			const oCreateEntry = this.getModel().createEntry("/...Set");

			sap.ui.core.Fragment.byId(this.getView().getId(), "idSmartForm").bindElement(oCreateEntry.getPath());
			this.getModel().setProperty(oCreateEntry.getPath() + "/Value", "X");

			// From Smart Table To Smart Form
			const oTable = this.byId("idSmartTable").getTable();
			const iSelectedIndex = oTable.getSelectedIndex();
			const oBindElement = oTable.getContextByIndex(iSelectedIndex).getPath();

			this.onOpenDialog("idDialog", "serhatmercan.SmartForm").then((oDialog) => {
				oDialog.bindElement(oBindElement);
			});
		},

		check: function () {
			if (this.byId("idSmartField").check().length) {
				return;
			}
		},

		_onViewMatched: function (oEvent) {
			this.getOwnerComponent().getModel().metadataLoaded().then(function () {
				const sPath = this.getModel().createEntry("/ValueSet").getPath();

				this.byId("idSmartForm").bindElement(sPath);
				this.getModel().setProperty(sPath + "/Value", "X");
			}.bind(this));
		},

		_getData: function () {
			const oSFData = this.byId("idSmartForm").getBindingContext().getProperty();
		},

		_setData: function () {

		},

	});

});