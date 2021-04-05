function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-companies-companies-module"], {
  /***/
  "./src/app/pages/companies/companies-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/companies/companies-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CompaniesRoutingModule */

  /***/
  function srcAppPagesCompaniesCompaniesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesRoutingModule", function () {
      return CompaniesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./companies.component */
    "./src/app/pages/companies/companies.component.ts");

    var routes = [{
      path: '',
      component: _companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"],
      data: {
        title: 'Companies'
      }
    }];

    var CompaniesRoutingModule = function CompaniesRoutingModule() {
      _classCallCheck(this, CompaniesRoutingModule);
    };

    CompaniesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CompaniesRoutingModule
    });
    CompaniesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CompaniesRoutingModule_Factory(t) {
        return new (t || CompaniesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompaniesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/companies/companies.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/companies/companies.component.ts ***!
    \********************************************************/

  /*! exports provided: CompaniesComponent */

  /***/
  function srcAppPagesCompaniesCompaniesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function () {
      return CompaniesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! devextreme/data/data_source */
    "./node_modules/devextreme/data/data_source.js");
    /* harmony import */


    var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../@calls/components/base/base.component */
    "./src/@calls/components/base/base.component.ts");
    /* harmony import */


    var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! devextreme-angular */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! devextreme-angular/ui/nested */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
    /* harmony import */


    var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! devextreme-angular/core */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");

    function CompaniesComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function CompaniesComponent_div_15_Template_dx_button_onClick_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var r_r35 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.deleteItem(r_r35.data);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function CompaniesComponent_div_15_Template_dx_button_onClick_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var r_r35 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.updateItem(r_r35.data);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25, 50, 100];
    };

    var CompaniesComponent =
    /*#__PURE__*/
    function (_calls_components_bas) {
      _inherits(CompaniesComponent, _calls_components_bas);

      function CompaniesComponent(injector) {
        var _this;

        _classCallCheck(this, CompaniesComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CompaniesComponent).call(this, injector));
        _this.isLoading = false;
        return _this;
      }

      _createClass(CompaniesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCompanies();
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          var _this2 = this;

          console.log(item);
          this.isLoading = true;
          this.companyService.removeCompany(item.id).subscribe(function (res) {
            console.log(res);

            _this2.getCompanies();

            _this2.utilService.showDeletedSuccessfullyToast();

            _this2.isLoading = false;
          }, function (err) {
            console.log(err);
            _this2.isLoading = false;

            _this2.utilService.showConnectionErrorToast();
          });
        }
      }, {
        key: "getCompanies",
        value: function getCompanies() {
          var _this3 = this;

          this.companyService.getCompanies().subscribe(function (res) {
            _this3.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1___default.a(res.content.data);
          });
        }
      }, {
        key: "updateItem",
        value: function updateItem(data) {
          this.router.navigateByUrl('/pages/add-company', {
            state: {
              edit: true,
              data: data
            }
          }).then();
        }
      }]);

      return CompaniesComponent;
    }(_calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) {
      return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompaniesComponent,
      selectors: [["app-companies"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 16,
      vars: 14,
      consts: [[1, "row", "header-row"], [1, "col-9", "row"], [1, "col-3", "float-end"], ["data-toggle", "modal", "data-target", "#side-modal-r", "icon", "add", "routerLink", "/pages/add-company", "stylingMode", "text", "text", " Add New Company", "type", "normal", 1, "add-btn"], [1, "datagrid", 3, "dataSource", "showBorders", "showRowLines"], [3, "groupPaging"], [3, "showPageSizeSelector", "allowedPageSizes"], ["mode", "multiple"], ["dataField", "username", "caption", "Username", "alignment", "center", 3, "allowSorting"], ["dataField", "email", "caption", "Email", "alignment", "center", 3, "allowSorting"], ["dataField", "login_id", "caption", "Login ID", "alignment", "center", 3, "allowSorting"], ["dataField", "companyName", "caption", "Company Name", "alignment", "center", 3, "allowSorting"], ["dataField", "actions", "caption", "Actions", "alignment", "center", "cellTemplate", "actionTemplate", 3, "allowSorting", "width"], [4, "dxTemplate", "dxTemplateOf"], ["icon", "minus", 1, "remove-btn", 3, "onClick"], ["icon", "edit", "data-toggle", "modal", "data-target", "#side-modal-r", 1, "update-btn", 3, "onClick"]],
      template: function CompaniesComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoRemoteOperationsComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoSortingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoFilterRowComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxoHeaderFilterComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__["DxTemplateDirective"]],
      styles: [".add-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  color: white;\n  background: #1591b8;\n  margin: 2% auto 1%;\n}\n\n.float-end[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 0;\n}\n\n.datagrid[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.remove-btn[_ngcontent-%COMP%] {\n  background-color: #b80101 !important;\n}\n\n.update-btn[_ngcontent-%COMP%] {\n  background-color: #01b8b8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL0U6XFxQcm9qZWN0c1xcYW5ndWxhclxccmVjZXB0aW9uc2t5d2F5LWRhc2hib2FyZC9zcmNcXGFwcFxccGFnZXNcXGNvbXBhbmllc1xcY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURDQTtFQUNFLG9DQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1idG4ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMxNTkxYjg7XHJcbiAgbWFyZ2luOiAyJSBhdXRvIDElO1xyXG59XHJcblxyXG4uZmxvYXQtZW5kIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmRhdGFncmlkIHtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG5cclxuLnJlbW92ZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiODAxMDEgIWltcG9ydGFudDtcclxufVxyXG4udXBkYXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjhiOCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5hZGQtYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzE1OTFiODtcbiAgbWFyZ2luOiAyJSBhdXRvIDElO1xufVxuXG4uZmxvYXQtZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGF0YWdyaWQge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5yZW1vdmUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4MDEwMSAhaW1wb3J0YW50O1xufVxuXG4udXBkYXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWI4YjggIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-companies',
          templateUrl: './companies.component.html',
          styleUrls: ['./companies.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/companies/companies.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/companies/companies.module.ts ***!
    \*****************************************************/

  /*! exports provided: CompaniesModule */

  /***/
  function srcAppPagesCompaniesCompaniesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesModule", function () {
      return CompaniesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./companies-routing.module */
    "./src/app/pages/companies/companies-routing.module.ts");
    /* harmony import */


    var _companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./companies.component */
    "./src/app/pages/companies/companies.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CompaniesModule = function CompaniesModule() {
      _classCallCheck(this, CompaniesModule);
    };

    CompaniesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CompaniesModule
    });
    CompaniesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CompaniesModule_Factory(t) {
        return new (t || CompaniesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompaniesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompaniesModule, {
        declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompaniesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _companies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompaniesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-companies-companies-module-es5.js.map