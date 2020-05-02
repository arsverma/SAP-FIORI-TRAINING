/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"apps/emp/training/session3/employeedet/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"apps/emp/training/session3/employeedet/test/integration/pages/S1",
	"apps/emp/training/session3/employeedet/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "apps.emp.training.session3.employeedet.view.",
		autoWait: true
	});
});