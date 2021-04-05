(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-users-module"],{

/***/ "./src/app/pages/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/pages/users/users.component.ts");





const routes = [{
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"],
        data: {
            title: 'Users'
        }
    }];
class UsersRoutingModule {
}
UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@calls/components/base/base.component */ "./src/@calls/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/core */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/loader/loader */ "./src/app/shared/components/loader/loader.ts");











function UsersComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", r_r46.data.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r46.data.type);
} }
function UsersComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function UsersComponent_div_15_Template_dx_button_onClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const r_r47 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.deleteItem(r_r47.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function UsersComponent_div_15_Template_dx_button_onClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const r_r47 = ctx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.updateItem(r_r47.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_select_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reception");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", !ctx_r42.add);
} }
function UsersComponent_select_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reception");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_div_42_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r52.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52.label);
} }
function UsersComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_div_42_option_4_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.departments);
} }
function UsersComponent_app_loader_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
const _c0 = function () { return [5, 10, 25, 50, 100]; };
class UsersComponent extends _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.isLoading = false;
        this.departmentSelected = false;
        this.add = true;
        this.userId = '';
        this.type = '';
        this.userForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            login_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            dep_id: ['']
        });
    }
    ngOnInit() {
        this.getUsers();
        this.getDepartments();
    }
    ngAfterViewInit() {
        this.changeSelected();
    }
    deleteItem(item) {
        console.log(item);
        this.isLoading = true;
        this.userService.removeUser(item.user_id).subscribe((res) => {
            console.log(res);
            this.getUsers();
            this.utilService.showDeletedSuccessfullyToast();
            this.isLoading = false;
        }, (err) => {
            console.log(err);
            this.isLoading = false;
            this.utilService.showConnectionErrorToast();
        });
    }
    getUsers() {
        this.userService.getUsers().subscribe((res) => {
            this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1___default.a(res.content.data);
        });
    }
    resetForm() {
        const j = {
            login_id: '',
            username: '',
            email: '',
            password: '',
            type: '',
            dep_id: '',
        };
        this.userForm.setValue(j);
        this.add = true;
        this.departmentSelected = false;
        setTimeout(() => {
            this.changeSelected();
        }, 1000);
    }
    updateItem(data) {
        this.add = false;
        const j = {
            username: data.username,
            login_id: data.login_id,
            email: data.email,
            password: data.password,
            type: data.type,
            dep_id: data['dep_id'] ? data['dep_id'] : ''
        };
        this.departmentSelected = !!data['dep_id'];
        this.userId = data.id;
        this.type = data.type;
        console.log(data);
        // this.dep_id = data.id;
        this.userForm.setValue(j);
    }
    changeSelected() {
        document.getElementById('my-type').addEventListener('change', (evt) => {
            console.log('You selected: ', evt.target.selectedIndex);
            this.departmentSelected = +evt.target.selectedIndex === 0;
        });
    }
    addUser(form, f) {
        this.isLoading = true;
        form['company_id'] = this.authService.currentUser.company_id;
        form['name'] = form.first_name + ' ' + form.last_name;
        if (this.add) {
            this.authService.register(form).subscribe((res) => {
                console.log(res);
                this.isLoading = false;
                f.resetForm();
                this.getUsers();
                document.getElementById('close').click();
                this.utilService.showAddedSuccessfullyToast();
            }, (err) => {
                this.isLoading = false;
                console.log(err);
                this.utilService.showConnectionErrorToast();
            });
        }
        else {
            form['id'] = this.userId;
            form['location'] = this.type;
            this.userService.updateUser(form).subscribe((res) => {
                console.log(res);
                this.isLoading = false;
                f.resetForm();
                this.getUsers();
                document.getElementById('close').click();
                this.utilService.showAddedSuccessfullyToast();
            }, (err) => {
                this.isLoading = false;
                console.log(err);
                this.utilService.showConnectionErrorToast();
            });
        }
    }
    getDepartments() {
        this.departmentService.getDepartments().subscribe((res) => {
            this.isLoading = false;
            this.departments = res.content.data;
        }, (err) => {
            this.isLoading = false;
            console.log(err);
            this.utilService.showConnectionErrorToast();
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 48, vars: 22, consts: [[1, "row", "header-row"], [1, "col-9", "row"], [1, "col-3", "float-end"], ["data-toggle", "modal", "data-target", "#side-modal-r", "icon", "add", "stylingMode", "text", "text", " Add New User", "type", "normal", 1, "add-btn", 3, "onClick"], [1, "datagrid", 3, "dataSource", "showBorders", "showRowLines"], [3, "groupPaging"], [3, "showPageSizeSelector", "allowedPageSizes"], ["mode", "multiple"], ["dataField", "username", "caption", "Username", "alignment", "center", 3, "allowSorting"], ["dataField", "login_id", "caption", "User ID", "alignment", "center", 3, "allowSorting"], ["dataField", "type", "caption", "User Type", "alignment", "center", "cellTemplate", "typeTemplate", 3, "allowSorting"], ["dataField", "actions", "caption", "Actions", "alignment", "center", "cellTemplate", "actionTemplate", 3, "allowSorting", "width"], ["class", "cellTemplate", 4, "dxTemplate", "dxTemplateOf"], [4, "dxTemplate", "dxTemplateOf"], ["id", "side-modal-r", 1, "modal", "slide-in-right", "modal-right", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "side-modal-wrapper"], [1, "vertical-align"], [1, "table-cell"], [1, "pdd-horizon-15"], [1, "mrg-btm-15", "font-size-13"], [3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["formControlName", "username", "type", "text", "placeholder", "Username", 1, "form-control"], ["formControlName", "login_id", "type", "text", "placeholder", "Login ID", 1, "form-control"], ["formControlName", "email", "type", "text", "placeholder", "Email", 1, "form-control"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], ["id", "my-type", "formControlName", "type", "class", "form-control", "placeholder", "Type", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-info", "btn-md"], ["id", "close", "href", "", "data-dismiss", "modal", 1, "btn", "btn-info", 2, "visibility", "hidden"], [4, "ngIf"], [1, "cellTemplate"], [3, "ngClass"], ["icon", "minus", 1, "remove-btn", 3, "onClick"], ["icon", "edit", "data-toggle", "modal", "data-target", "#side-modal-r", 1, "update-btn", 3, "onClick"], ["id", "my-type", "formControlName", "type", "placeholder", "Type", 1, "form-control"], ["value", "reception"], ["value", "customer"], ["formControlName", "dep_id", "placeholder", "Type", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dx-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function UsersComponent_Template_dx_button_onClick_3_listener($event) { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UsersComponent_div_14_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersComponent_div_15_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UsersComponent_Template_form_ngSubmit_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.userForm.valid && ctx.addUser(ctx.userForm.value, _r41); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Choose Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UsersComponent_select_40_Template, 5, 1, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, UsersComponent_select_41_Template, 5, 0, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UsersComponent_div_42_Template, 5, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Close!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, UsersComponent_app_loader_47_Template, 1, 0, "app-loader", 33);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("showBorders", true)("showRowLines", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "typeTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.add ? "Create" : "Update", " User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enter this details to ", ctx.add ? "Create a new" : "Update", " user for your company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.departmentSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.add ? "Add" : "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxButtonComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoRemoteOperationsComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoSortingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoFilterRowComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoHeaderFilterComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__["DxTemplateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]], styles: [".add-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  color: white;\n  background: #20b7f6;\n  margin: 2% auto 1%;\n}\n\n.float-end[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 0;\n}\n\n.datagrid[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.remove-btn[_ngcontent-%COMP%] {\n  background-color: #f62832 !important;\n}\n\n.cellTemplate[_ngcontent-%COMP%] {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.reception[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: #23b7f5;\n  text-align: center;\n  border-radius: 30px;\n  padding-right: 2%;\n  padding-left: 2%;\n  color: white;\n}\n\n.customer[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: #7ce4ae;\n  text-align: center;\n  border-radius: 30px;\n  padding-right: 2%;\n  padding-left: 2%;\n  color: white;\n}\n\n.update-btn[_ngcontent-%COMP%] {\n  background-color: #01b8b8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvRTpcXFByb2plY3RzXFxhbmd1bGFyXFxyZWNlcHRpb25za3l3YXktZGFzaGJvYXJkL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1idG4ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMyMGI3ZjY7XHJcbiAgbWFyZ2luOiAyJSBhdXRvIDElO1xyXG59XHJcblxyXG4uZmxvYXQtZW5kIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmRhdGFncmlkIHtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG5cclxuLnJlbW92ZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjI4MzIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNlbGxUZW1wbGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZWNlcHRpb24ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kOiAjMjNiN2Y1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tZXIge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kOiAjN2NlNGFlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udXBkYXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjhiOCAhaW1wb3J0YW50O1xyXG59IiwiLmFkZC1idG4ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjBiN2Y2O1xuICBtYXJnaW46IDIlIGF1dG8gMSU7XG59XG5cbi5mbG9hdC1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kYXRhZ3JpZCB7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuLnJlbW92ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjYyODMyICFpbXBvcnRhbnQ7XG59XG5cbi5jZWxsVGVtcGxhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVjZXB0aW9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kOiAjMjNiN2Y1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b21lciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZDogIzdjZTRhZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXBkYXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWI4YjggIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/pages/users/users-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "./src/app/pages/users/users.component.ts");






class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-users-users-module-es2015.js.map