(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-companies-add-company-add-company-module"],{

/***/ "./src/app/pages/companies/add-company/add-company-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/companies/add-company/add-company-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AddCompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyRoutingModule", function() { return AddCompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-company.component */ "./src/app/pages/companies/add-company/add-company.component.ts");





const routes = [{
        path: '',
        component: _add_company_component__WEBPACK_IMPORTED_MODULE_2__["AddCompanyComponent"],
        data: {
            title: 'Add Company'
        }
    }];
class AddCompanyRoutingModule {
}
AddCompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddCompanyRoutingModule });
AddCompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddCompanyRoutingModule_Factory(t) { return new (t || AddCompanyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddCompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCompanyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/add-company/add-company.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/companies/add-company/add-company.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@calls/components/base/base.component */ "./src/@calls/components/base/base.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loader/loader */ "./src/app/shared/components/loader/loader.ts");








const _c0 = ["ngForm"];
function AddCompanyComponent_div_16_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35);
} }
function AddCompanyComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Errors:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddCompanyComponent_div_16_p_3_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.errors);
} }
function AddCompanyComponent_app_loader_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class AddCompanyComponent extends _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.isLoading = false;
        this.isEdit = false;
        this.errors = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.data = this.router.getCurrentNavigation().extras.state.data;
            this.isEdit = true;
        }
    }
    ngOnInit() {
        this.initComponent();
    }
    initComponent() {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            login_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['admin', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        if (this.isEdit) {
            const j = {
                email: this.data.email,
                password: this.data.password,
                username: this.data.username,
                login_id: this.data.login_id,
                type: 'admin',
                companyName: this.data.companyName
            };
            // this.dep_id = data.id;
            this.form.setValue(j);
        }
    }
    register(form, ngForm) {
        console.log(form);
        this.errors = [];
        this.isLoading = true;
        if (this.isEdit) {
            form['id'] = this.data.id;
            form['user_id'] = this.data.user_id;
            this.authService.updateCompany(form).subscribe((res) => {
                console.log(res);
                if (res.result === 'success') {
                    this.isLoading = false;
                    /* ngForm.resetForm();
                    this.form.onReset(); */
                    this.mytemplateForm.reset();
                    this.utilService.showAddedSuccessfullyToast();
                    this.router.navigateByUrl('pages/companies').then();
                }
                else {
                    const error = res.error_description;
                    let key;
                    this.isLoading = false;
                    for (key in error) {
                        console.log('Key: ' + key);
                        console.log('Value: ' + error[key]);
                        console.log(typeof error[key]);
                        if (typeof error[key] === 'string') {
                            if (error[key] !== 'error') {
                                this.errors.push(error[key]);
                            }
                        }
                        else if (typeof error[key] === 'object') {
                            if (error[0] === 'error') {
                                this.errors.push('LoginID already exist !');
                            }
                            else {
                                this.errors.push(error[key][0]);
                            }
                        }
                        else {
                            this.errors.push('LoginID already exist !');
                        }
                    }
                }
            }, (err) => {
                console.log(err);
                this.isLoading = false;
                this.utilService.showConnectionErrorToast();
            });
        }
        else {
            this.authService.register(form).subscribe((res) => {
                if (res.result === 'success') {
                    console.log(res);
                    this.isLoading = false;
                    /* ngForm.resetForm();
                    this.form.onReset(); */
                    this.mytemplateForm.reset();
                    this.utilService.showAddedSuccessfullyToast();
                    this.router.navigateByUrl('pages/companies');
                }
                else {
                    const error = res.error_description;
                    let key;
                    this.isLoading = false;
                    for (key in error) {
                        console.log('Key: ' + key);
                        console.log('Value: ' + error[key]);
                        console.log(typeof error[key]);
                        if (typeof error[key] === 'string') {
                            if (error[key] !== 'error') {
                                this.errors.push(error[key]);
                            }
                        }
                        else if (typeof error[key] === 'object') {
                            if (error[0] === 'error') {
                                this.errors.push('LoginID already exist !');
                            }
                            else {
                                this.errors.push(error[key][0]);
                            }
                        }
                        else {
                            this.errors.push('LoginID already exist !');
                        }
                    }
                }
            }, (err) => {
                console.log(err);
                this.isLoading = false;
                this.utilService.showConnectionErrorToast();
            });
        }
    }
}
AddCompanyComponent.ɵfac = function AddCompanyComponent_Factory(t) { return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
AddCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCompanyComponent, selectors: [["app-add-company"]], viewQuery: function AddCompanyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mytemplateForm = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 4, consts: [[1, "ng-pristine", "ng-valid", "row", 3, "formGroup", "ngSubmit"], ["ngForm", "ngForm"], [1, "form-group", "col-md-6"], ["formControlName", "username", "type", "text", "placeholder", "Username", 1, "form-control"], ["formControlName", "login_id", "type", "text", "placeholder", "Login ID", 1, "form-control"], [1, "form-group", "col-md-12"], ["formControlName", "companyName", "type", "text", "placeholder", "Company Name", 1, "form-control"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], [1, "mrg-top-20", "width-100", "text-right"], ["type", "submit", 1, "btn", "btn-info"], ["class", "errors", 4, "ngIf"], [4, "ngIf"], [1, "errors"], ["class", "error", 4, "ngFor", "ngForOf"], [1, "error"]], template: function AddCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCompanyComponent_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.form.valid && ctx.register(ctx.form.value, _r31); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddCompanyComponent_div_16_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddCompanyComponent_app_loader_17_Template, 1, 0, "app-loader", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEdit ? "Update Company" : "Create Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]], styles: [".row[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-top: 2%;\n}\n\n.errors[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL2FkZC1jb21wYW55L0U6XFxQcm9qZWN0c1xcYW5ndWxhclxcY2FsbHMtZGFzaGJvYXJkL3NyY1xcYXBwXFxwYWdlc1xcY29tcGFuaWVzXFxhZGQtY29tcGFueVxcYWRkLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uZXJyb3JzIHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4iLCIucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmVycm9ycyB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLXRvcDogMiU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-company',
                templateUrl: './add-company.component.html',
                styleUrls: ['./add-company.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { mytemplateForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ngForm']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/add-company/add-company.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/companies/add-company/add-company.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddCompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyModule", function() { return AddCompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-company-routing.module */ "./src/app/pages/companies/add-company/add-company-routing.module.ts");
/* harmony import */ var _add_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-company.component */ "./src/app/pages/companies/add-company/add-company.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class AddCompanyModule {
}
AddCompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddCompanyModule });
AddCompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddCompanyModule_Factory(t) { return new (t || AddCompanyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddCompanyRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddCompanyModule, { declarations: [_add_company_component__WEBPACK_IMPORTED_MODULE_3__["AddCompanyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddCompanyRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_company_component__WEBPACK_IMPORTED_MODULE_3__["AddCompanyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddCompanyRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-companies-add-company-add-company-module-es2015.js.map