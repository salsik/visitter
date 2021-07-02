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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! devextreme/data/data_source */
    "./node_modules/devextreme/data/data_source.js");
    /* harmony import */


    var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../@calls/components/base/base.component */
    "./src/@calls/components/base/base.component.ts");
    /* harmony import */


    var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! devextreme-angular */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! devextreme-angular/ui/nested */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
    /* harmony import */


    var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! devextreme-angular/core */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/components/loader/loader */
    "./src/app/shared/components/loader/loader.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CompaniesComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dx-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CompaniesComponent_div_24_Template_dx_button_onClick_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var r_r44 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r45.updateItem(r_r44.data);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dx-button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CompaniesComponent_div_24_Template_dx_button_onClick_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var r_r44 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r47.deleteItem(r_r44.data);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CompaniesComponent_app_loader_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader");
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.utilService.confirmationDialog(this.translateService.instant('app.warning'), this.translateService.instant('app.removeCaution'));

                  case 2:
                    result = _context.sent;
                    result.subscribe(function (res) {
                      if (res) {
                        _this2.isLoading = true;

                        _this2.companyService.removeCompany(item.id).subscribe(function (res) {
                          _this2.getCompanies();

                          _this2.utilService.showDeletedSuccessfullyToast();

                          _this2.isLoading = false;
                        }, function (err) {
                          console.log(err);
                          _this2.isLoading = false;

                          _this2.utilService.showConnectionErrorToast();
                        });
                      }
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getCompanies",
        value: function getCompanies() {
          var _this3 = this;

          this.companyService.getCompanies().subscribe(function (res) {
            _this3.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2___default.a(res.content.data);
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
    }(_calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

    CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) {
      return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
    };

    CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CompaniesComponent,
      selectors: [["app-companies"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 26,
      vars: 40,
      consts: [[1, "row", "header-row"], [1, "col-9", "row"], [1, "col-3", "float-end"], ["data-toggle", "modal", "data-target", "#side-modal-r", "icon", "add", "routerLink", "/pages/add-company", "stylingMode", "text", "type", "normal", 1, "add-btn", 3, "text"], [1, "datagrid", 3, "dataSource", "showBorders", "noDataText", "showRowLines"], [3, "text", "enabled"], [3, "groupPaging"], [3, "showPageSizeSelector", "allowedPageSizes"], ["mode", "multiple"], ["dataField", "username", "alignment", "center", 3, "caption", "allowSorting"], ["dataField", "email", "alignment", "center", 3, "caption", "allowSorting"], ["dataField", "login_id", "alignment", "center", 3, "caption", "allowSorting"], ["dataField", "companyName", "alignment", "center", 3, "caption", "allowSorting"], ["dataField", "actions", "alignment", "center", "cellTemplate", "actionTemplate", 3, "caption", "allowSorting", "width"], [4, "dxTemplate", "dxTemplateOf"], [4, "ngIf"], ["icon", "edit", "data-toggle", "modal", "data-target", "#side-modal-r", 1, "update-btn", 3, "onClick"], ["icon", "trash", 1, "remove-btn", 3, "onClick"]],
      template: function CompaniesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dx-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "dx-data-grid", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dxo-load-panel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dxo-remote-operations", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dxo-pager", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dxo-sorting", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "dxo-filter-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "dxo-header-filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dxi-column", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "dxi-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "dxi-column", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "dxi-column", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "dxi-column", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CompaniesComponent_div_24_Template, 3, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CompaniesComponent_app_loader_25_Template, 1, 0, "app-loader", 15);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("text", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 23, "companies.addNewCompany"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("showBorders", true)("noDataText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 25, "menu.noData"))("showRowLines", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 27, "menu.loading"))("enabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupPaging", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 29, "companies.username"))("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 31, "companies.email"))("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 33, "companies.loginId"))("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 35, "companies.companyName"))("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 37, "companies.action"))("allowSorting", true)("width", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoLoadPanelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoRemoteOperationsComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoSortingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoFilterRowComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxoHeaderFilterComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: [".add-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  color: white;\n  background: #1591b8;\n  margin: 2% auto 1%;\n}\n\n.float-end[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 0;\n}\n\n.datagrid[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.remove-btn[_ngcontent-%COMP%] {\n  background: #f62832;\n  background: linear-gradient(143deg, #f62832 0%, #ff6f76 100%);\n  background-position: 0 -30;\n  border-radius: 50%;\n  -webkit-transition: all 1s linear;\n  transition: all 1s linear;\n}\n\n.update-btn[_ngcontent-%COMP%] {\n  background: #20b7f6;\n  background: linear-gradient(143deg, #20b7f6 0%, #01b8b8 100%);\n  background-position: 0 -30;\n  border-radius: 50%;\n  -webkit-transition: all 1s linear;\n  transition: all 1s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL0Y6XFxwcm9qZWN0c1xcYW5ndWxhclxccmVjZXB0aW9uc2t5d2F5LWRhc2hib2FyZC9zcmNcXGFwcFxccGFnZXNcXGNvbXBhbmllc1xcY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWJ0biB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzE1OTFiODtcclxuICBtYXJnaW46IDIlIGF1dG8gMSU7XHJcbn1cclxuXHJcbi5mbG9hdC1lbmQge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZGF0YWdyaWQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcblxyXG4ucmVtb3ZlLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0NiwgNDAsIDUwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzZGVnLCByZ2JhKDI0NiwgNDAsIDUwLCAxKSAwJSwgcmdiYSgyNTUsIDExMSwgMTE4LCAxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcclxufVxyXG5cclxuLnVwZGF0ZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzMiwxODMsMjQ2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzZGVnLCByZ2JhKDMyLDE4MywyNDYsMSkgMCUsIHJnYmEoMSwxODQsMTg0LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTMwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgbGluZWFyO1xyXG59XHJcbiIsIi5hZGQtYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzE1OTFiODtcbiAgbWFyZ2luOiAyJSBhdXRvIDElO1xufVxuXG4uZmxvYXQtZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGF0YWdyaWQge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5yZW1vdmUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2Y2MjgzMjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0M2RlZywgI2Y2MjgzMiAwJSwgI2ZmNmY3NiAxMDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcbn1cblxuLnVwZGF0ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMjBiN2Y2O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzZGVnLCAjMjBiN2Y2IDAlLCAjMDFiOGI4IDEwMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgbGluZWFyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompaniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-companies',
          templateUrl: './companies.component.html',
          styleUrls: ['./companies.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
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