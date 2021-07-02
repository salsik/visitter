(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calls-calls-module"],{

/***/ "./src/app/pages/calls/calls-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/calls/calls-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CallsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsRoutingModule", function() { return CallsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calls.component */ "./src/app/pages/calls/calls.component.ts");





const routes = [{
        path: '',
        component: _calls_component__WEBPACK_IMPORTED_MODULE_2__["CallsComponent"],
        data: {
            title: 'Calls'
        }
    }];
class CallsRoutingModule {
}
CallsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CallsRoutingModule });
CallsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CallsRoutingModule_Factory(t) { return new (t || CallsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/calls/calls.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/calls/calls.component.ts ***!
  \************************************************/
/*! exports provided: CallsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsComponent", function() { return CallsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@calls/components/base/base.component */ "./src/@calls/components/base/base.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/core */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");
/* harmony import */ var _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/loader/loader */ "./src/app/shared/components/loader/loader.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











function CallsComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CallsComponent_div_2_div_4_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const item_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.setSelectedCompany(item_r29.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r28.selectedId === item_r29.id && "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r29.companyName);
} }
function CallsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CallsComponent_div_2_div_4_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "calls.companies"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r24.companies);
} }
function CallsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dx-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CallsComponent_div_19_Template_dx_button_onClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const r_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.deleteItem(r_r32.data, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CallsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r35 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r26.getDate(r_r35.data == null ? null : r_r35.data.created_at), " / ", ctx_r26.getTime(r_r35.data == null ? null : r_r35.data.created_at), "");
} }
function CallsComponent_app_loader_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader");
} }
const _c0 = function () { return [5, 10]; };
class CallsComponent extends _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(injector) {
        var _a;
        super(injector);
        this.isLoading = false;
        this.page = 0;
        this.itemsCount = 10;
        this.rate = [];
        this.companies = [];
        this.selectedId = (_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.company_id;
    }
    ngOnInit() {
        // this.getCalls();
        if (this.authService.currentUser.type === 'super_admin') {
            this.getCompanies();
        }
        else {
            this.getCalls();
        }
    }
    deleteItem(item, ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ev.event.stopPropagation();
            const result = yield this.utilService.confirmationDialog(this.translateService.instant('app.warning'), this.translateService.instant('app.removeCaution'));
            result.subscribe((res) => {
                if (res) {
                    this.isLoading = true;
                    this.callsService.removeCall(item.id).subscribe((res) => {
                        this.getCalls();
                        this.isLoading = false;
                    }, (err) => {
                        console.log(err);
                        this.isLoading = false;
                        this.utilService.showConnectionErrorToast();
                    });
                }
            });
        });
    }
    getCalls() {
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2___default.a({
            key: 'id',
            load: (loadOptions) => this.callsService.getCalls(this.page, this.itemsCount, this.selectedId).toPromise()
                .then(result => {
                this.isLoading = false;
                return {
                    data: result.content.data.data,
                    totalCount: result.content.data.total,
                    groupCount: result.content.data.per_page
                };
            })
        });
    }
    viewDetails(item) {
        this.selected = item.data;
        this.rate = Array.from({ length: +this.selected.rate }, (v, k) => k);
        document.getElementById('showModal').click();
    }
    getDate(date) {
        const d = new Date(date);
        return d.toISOString().substring(0, 10);
    }
    getTime(date) {
        const d = new Date(date);
        const p = d.toISOString().split('T');
        const three = p[1].substring(0, 5);
        return three.toString();
    }
    getCompanies() {
        this.isLoading = true;
        this.callsService.getCompanies().subscribe((res) => {
            this.companies = res.content.data;
            this.selectedId = this.companies[0].id;
            this.getCalls();
        }, (err) => {
            console.log(err);
        });
    }
    setSelectedCompany(id) {
        this.selectedId = id;
        this.page = 0;
        this.itemsCount = 10;
        this.getCalls();
    }
}
CallsComponent.ɵfac = function CallsComponent_Factory(t) { return new (t || CallsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
CallsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CallsComponent, selectors: [["app-calls"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 46, vars: 36, consts: [[1, "no-scroll"], [1, "row"], ["class", "col-md-2 col-sm-12 company-list", 4, "ngIf"], [1, "col-sm-12", 3, "ngClass"], [1, "datagrid", 3, "dataSource", "showBorders", "hoverStateEnabled", "noDataText", "showRowLines", "onRowClick"], [3, "text", "enabled"], [3, "groupPaging"], [3, "pageIndex", "pageSize", "pageIndexChange", "pageSizeChange"], [3, "showPageSizeSelector", "allowedPageSizes"], ["mode", "multiple"], ["dataField", "department.label", "alignment", "center", 3, "caption", "allowSorting"], ["dataField", "date", "cellTemplate", "dateTemplate", "alignment", "center", 3, "caption", "allowSorting"], ["dataField", "actions", "caption", "Actions", "alignment", "center", "cellTemplate", "actionTemplate", 3, "width", "allowSorting"], [4, "dxTemplate", "dxTemplateOf"], [4, "ngIf"], ["id", "showModal", "data-toggle", "modal", "data-target", "#default-modal", 2, "visibility", "hidden"], ["id", "default-modal", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-body"], [2, "width", "65%", "height", "277px", "object-fit", "contain", 3, "src"], [1, "modal-footer", "no-border"], [1, "text-right"], ["data-dismiss", "modal", 1, "btn", "btn-primary", "btn-md"], [1, "col-md-2", "col-sm-12", "company-list"], ["class", "company-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "company-item", 3, "ngClass", "click"], ["icon", "trash", 1, "remove-btn", 3, "onClick"]], template: function CallsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CallsComponent_div_2_Template, 5, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "dx-data-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRowClick", function CallsComponent_Template_dx_data_grid_onRowClick_4_listener($event) { return ctx.viewDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dxo-load-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dxo-remote-operations", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "dxo-paging", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageIndexChange", function CallsComponent_Template_dxo_paging_pageIndexChange_9_listener($event) { return ctx.page = $event; })("pageSizeChange", function CallsComponent_Template_dxo_paging_pageSizeChange_9_listener($event) { return ctx.itemsCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dxo-pager", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dxo-sorting", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "dxo-filter-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "dxo-header-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "dxi-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CallsComponent_div_19_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CallsComponent_div_20_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CallsComponent_app_loader_21_Template, 1, 0, "app-loader", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Call Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Date / Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Selfie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.currentUser.type === "super_admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authService.currentUser.type === "super_admin" ? "col-md-10" : "col-md-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("showBorders", true)("hoverStateEnabled", true)("noDataText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 27, "menu.noData"))("showRowLines", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 29, "menu.loading"))("enabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageIndex", ctx.page)("pageSize", ctx.itemsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 31, "calls.department"))("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 33, "calls.date"))("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 150)("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "dateTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selected == null ? null : ctx.selected.department == null ? null : ctx.selected.department.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.getDate(ctx.selected == null ? null : ctx.selected.created_at), " / ", ctx.getTime(ctx.selected == null ? null : ctx.selected.created_at), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.selected == null ? null : ctx.selected.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoLoadPanelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoRemoteOperationsComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoPagingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoSortingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoFilterRowComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoHeaderFilterComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxButtonComponent"], _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".add-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  color: white;\n  background: #1591b8;\n  margin: 2% auto 1%;\n}\n\n.float-end[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 0;\n}\n\n.datagrid[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.remove-btn[_ngcontent-%COMP%] {\n  background: #f62832;\n  background: linear-gradient(143deg, #f62832 0%, #ff6f76 100%);\n  background-position: 0 -30;\n  border-radius: 50%;\n  -webkit-transition: all 1s linear;\n  transition: all 1s linear;\n}\n\n.clip-star[_ngcontent-%COMP%] {\n  background: gold;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n}\n\n.company-list[_ngcontent-%COMP%] {\n  scrollbar-width: 2px;\n  height: 90vh;\n  overflow-y: auto;\n}\n\n.company-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  padding-left: 5%;\n  margin-bottom: 6%;\n}\n\n.company-list[_ngcontent-%COMP%]   .company-item[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #ffffff;\n  padding: 6%;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  border-radius: 12px;\n  margin-left: 6%;\n  border: 1px solid #1cb4f5;\n  cursor: pointer;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.company-list[_ngcontent-%COMP%]   .company-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.company-list[_ngcontent-%COMP%]   .company-item[_ngcontent-%COMP%]:hover {\n  background: #1591b8;\n  color: white;\n}\n\n.company-list[_ngcontent-%COMP%]   .company-item[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.company-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #1591b8;\n  background: linear-gradient(143deg, #1591b8 0%, #8ae9b8 100%);\n}\n\n.company-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsbHMvRjpcXHByb2plY3RzXFxhbmd1bGFyXFxyZWNlcHRpb25za3l3YXktZGFzaGJvYXJkL3NyY1xcYXBwXFxwYWdlc1xcY2FsbHNcXGNhbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYWxscy9jYWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsNkRBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrSEFBQTtVQUFBLDBHQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFSTtFQUNFLG9CQUFBO0FDQU47O0FESUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURJSTtFQUNFLFlBQUE7QUNGTjs7QURNRTtFQUNFLG1CQUFBO0VBQ0EsNkRBQUE7QUNKSjs7QURNSTtFQUNFLFlBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGxzL2NhbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1idG4ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMxNTkxYjg7XHJcbiAgbWFyZ2luOiAyJSBhdXRvIDElO1xyXG59XHJcblxyXG4uZmxvYXQtZW5kIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmRhdGFncmlkIHtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG5cclxuLnJlbW92ZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDYsIDQwLCA1MCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0M2RlZywgcmdiYSgyNDYsIDQwLCA1MCwgMSkgMCUsIHJnYmEoMjU1LCAxMTEsIDExOCwgMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5jbGlwLXN0YXIge1xyXG4gIGJhY2tncm91bmQ6IGdvbGQ7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgNjElIDM1JSwgOTglIDM1JSwgNjglIDU3JSwgNzklIDkxJSwgNTAlIDcwJSwgMjElIDkxJSwgMzIlIDU3JSwgMiUgMzUlLCAzOSUgMzUlKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uY29tcGFueS1saXN0IHtcclxuICBzY3JvbGxiYXItd2lkdGg6IDJweDtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbiAgfVxyXG5cclxuICAuY29tcGFueS1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFjYjRmNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbXBhbnktaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTU5MWI4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMSwgMTQ1LCAxODQpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0M2RlZywgcmdiYSgyMSwgMTQ1LCAxODQsIDEpIDAlLCByZ2JhKDEzOCwgMjMzLCAxODQsIDEpIDEwMCUpO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzE1OTFiODtcbiAgbWFyZ2luOiAyJSBhdXRvIDElO1xufVxuXG4uZmxvYXQtZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGF0YWdyaWQge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5yZW1vdmUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2Y2MjgzMjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0M2RlZywgI2Y2MjgzMiAwJSwgI2ZmNmY3NiAxMDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcbn1cblxuLmNsaXAtc3RhciB7XG4gIGJhY2tncm91bmQ6IGdvbGQ7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDYxJSAzNSUsIDk4JSAzNSUsIDY4JSA1NyUsIDc5JSA5MSUsIDUwJSA3MCUsIDIxJSA5MSUsIDMyJSA1NyUsIDIlIDM1JSwgMzklIDM1JSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmNvbXBhbnktbGlzdCB7XG4gIHNjcm9sbGJhci13aWR0aDogMnB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY29tcGFueS1saXN0IGgyIHtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDYlO1xufVxuLmNvbXBhbnktbGlzdCAuY29tcGFueS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDYlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNiU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxY2I0ZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLmNvbXBhbnktbGlzdCAuY29tcGFueS1pdGVtIHAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5jb21wYW55LWxpc3QgLmNvbXBhbnktaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxNTkxYjg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb21wYW55LWxpc3QgLmNvbXBhbnktaXRlbTpob3ZlciBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbXBhbnktbGlzdCAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzE1OTFiODtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0M2RlZywgIzE1OTFiOCAwJSwgIzhhZTliOCAxMDAlKTtcbn1cbi5jb21wYW55LWxpc3QgLmFjdGl2ZSBwIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-calls',
                templateUrl: './calls.component.html',
                styleUrls: ['./calls.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/calls/calls.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/calls/calls.module.ts ***!
  \*********************************************/
/*! exports provided: CallsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsModule", function() { return CallsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _calls_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calls-routing.module */ "./src/app/pages/calls/calls-routing.module.ts");
/* harmony import */ var _calls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calls.component */ "./src/app/pages/calls/calls.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class CallsModule {
}
CallsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CallsModule });
CallsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CallsModule_Factory(t) { return new (t || CallsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _calls_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallsModule, { declarations: [_calls_component__WEBPACK_IMPORTED_MODULE_3__["CallsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _calls_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_calls_component__WEBPACK_IMPORTED_MODULE_3__["CallsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _calls_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-calls-calls-module-es2015.js.map