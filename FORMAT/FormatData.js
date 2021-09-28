/* Global Location */
sap.ui.define([
	"serhatmercan/controller/BaseController",
	"serhatmercan/FORMAT/formatter"
], function (BaseController, formatter) {
	"use strict";

	return BaseController.extend("serhatmercan.FORMAT.FormatData", {

		formatter: formatter,

		onDateFormat: function (oEvent) {
			var sDate = new Date(),
				sTime = new Date(),
				sNo = "1",
				sData = "Serhat";

			var sLocalDate = formatter.getLocalDate(sDate),
				sLocalTime = formatter.getLocalTime(sTime),
				sFormattedNo = formatter.padLeftAlphaNum(sNo, 10),
				sRemovedZeroNo = formatter.removeLeading(sNo),
				sEnglishWords = formatter.convertToEnglishLocalizedUpperCase(sNo),
				sUID = formatter._createUuidX16(),
				sConvertedData = formatter._convertToEnglishLocalizedData(sData);
		}

	});

});