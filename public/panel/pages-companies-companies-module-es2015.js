(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-companies-companies-module"],{

/***/ "./src/app/pages/companies/companies-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/companies/companies-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesRoutingModule", function() { return CompaniesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.component */ "./src/app/pages/companies/companies.component.ts");





const routes = [{
        path: '',
        component: _companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"],
        data: {
            title: 'Companies'
        }
    }];
class CompaniesRoutingModule {
}
CompaniesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompaniesRoutingModule });
CompaniesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompaniesRoutingModule_Factory(t) { return new (t || CompaniesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompaniesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/companies.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/companies/companies.component.ts ***!
  \********************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@calls/components/base/base.component */ "./src/@calls/components/base/base.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/core */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");








function CompaniesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function CompaniesComponent_div_15_Template_dx_button_onClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const r_r38 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.deleteItem(r_r38.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function CompaniesComponent_div_15_Template_dx_button_onClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const r_r38 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.updateItem(r_r38.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25, 50, 100]; };
class CompaniesComponent extends _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.isLoading = false;
    }
    ngOnInit() {
        this.getCompanies();
    }
    deleteItem(item) {
        console.log(item);
        this.isLoading = true;
        this.companyService.removeCompany(item.id).subscribe((res) => {
            console.log(res);
            this.getCompanies();
            this.utilService.showDeletedSuccessfullyToast();
            this.isLoading = false;
        }, (err) => {
            console.log(err);
            this.isLoading = false;
            this.utilService.showConnectionErrorToast();
        });
    }
    getCompanies() {
        this.companyService.getCompanies().subscribe((res) => {
            this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1___default.a(res.content.data);
        });
    }
    updateItem(data) {
        this.router.navigateByUrl('/pages/add-company', { state: { edit: true, data } }).then();
    }
}
CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) { return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompaniesComponent, selectors: [["app-companies"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 14, consts: [[1, "row", "header-row"], [1, "col-9", "row"], [1, "col-3", "float-end"], ["data-toggle", "modal", "data-target", "#side-modal-r", "icon", "add", "routerLink", "/pages/add-company", "stylingMode", "text", "text", " Add New Company", "type", "normal", 1, "add-btn"], [1, "datagrid", 3, "dataSource", "showBorders", "showRowLines"], [3, "groupPaging"], [3, "showPageSizeSelector", "allowedPageSizes"], ["mode", "multiple"], ["dataField", "username", "caption", "Username", "alignment", "center", 3, "allowSorting"], ["dataField", "email", "caption", "Email", "alignment", "center", 3, "allowSorting"], ["dataField", "login_id", "caption", "Login ID", "alignment", "center", 3, "allowSorting"], ["dataField", "companyName", "caption", "Company Name", "alignment", "center", 3, "allowSorting"], ["dataField", "actions", "caption", "Actions", "alignment", "center", "cellTemplate", "actionTemplate", 3, "allowSorting", "width"], [4, "dxTemplate", "dxTemplateOf"], ["icon", "minus", 1, "remove-btn", 3, "onClick"], ["icon", "edit", "data-toggle", "modal", "data-target", "#side-modal-r", 1, "update-btn", 3, "onClick"]], template: function CompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dx-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dx-data-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dxo-remote-operations", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxo-pager", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dxo-sorting", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dxo-filter-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dxo-header-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dxi-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dxi-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dxi-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CompaniesComponent_div_15_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("showBorders", true)("showRowLines", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoRemoteOperationsComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoSortingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoFilterRowComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoHeaderFilterComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__["DxTemplateDirective"]], styles: [".add-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  color: white;\n  background: #1591b8;\n  margin: 2% auto 1%;\n}\n\n.float-end[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 0;\n}\n\n.datagrid[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.remove-btn[_ngcontent-%COMP%] {\n  background-color: #b80101 !important;\n}\n\n.update-btn[_ngcontent-%COMP%] {\n  background-color: #01b8b8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL0U6XFxQcm9qZWN0c1xcYW5ndWxhclxcY2FsbHMtZGFzaGJvYXJkL3NyY1xcYXBwXFxwYWdlc1xcY29tcGFuaWVzXFxjb21wYW5pZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usb0NBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWJ0biB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzE1OTFiODtcclxuICBtYXJnaW46IDIlIGF1dG8gMSU7XHJcbn1cclxuXHJcbi5mbG9hdC1lbmQge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZGF0YWdyaWQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcblxyXG4ucmVtb3ZlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4MDEwMSAhaW1wb3J0YW50O1xyXG59XHJcbi51cGRhdGUtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFiOGI4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmFkZC1idG4ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMTU5MWI4O1xuICBtYXJnaW46IDIlIGF1dG8gMSU7XG59XG5cbi5mbG9hdC1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kYXRhZ3JpZCB7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuLnJlbW92ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgwMTAxICFpbXBvcnRhbnQ7XG59XG5cbi51cGRhdGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjhiOCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-companies',
                templateUrl: './companies.component.html',
                styleUrls: ['./companies.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/companies/companies.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/companies/companies.module.ts ***!
  \*****************************************************/
/*! exports provided: CompaniesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesModule", function() { return CompaniesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies-routing.module */ "./src/app/pages/companies/companies-routing.module.ts");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies.component */ "./src/app/pages/companies/companies.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class CompaniesModule {
}
CompaniesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompaniesModule });
CompaniesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompaniesModule_Factory(t) { return new (t || CompaniesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompaniesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompaniesModule, { declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompaniesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompaniesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-companies-companies-module-es2015.js.map