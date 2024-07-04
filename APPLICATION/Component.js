sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"xxx/model/models"
], (UIComponent, Device, models) => {
	"use strict";

	return UIComponent.extend("xxx.Component", {

		metadata: {
			manifest: "json"
		},

		init() {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			this.setModel(models.createDeviceModel(), "device");
		},

		getContentDensityClass() {
			if (this.sContentDensityClass === undefined) {
				const bodyClassList = document.body.classList;

				if (bodyClassList.contains("sapUiSizeCozy") || bodyClassList.contains("sapUiSizeCompact")) {
					this.sContentDensityClass = "";
				} else if (!Device.support.touch) {
					this.sContentDensityClass = "sapUiSizeCompact";
				} else {
					this.sContentDensityClass = "sapUiSizeCozy";
				}
			}

			return this.sContentDensityClass;
		}
	});
});