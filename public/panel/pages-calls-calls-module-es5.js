function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calls-calls-module"], {
  /***/
  "./src/app/pages/calls/calls-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/calls/calls-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CallsRoutingModule */

  /***/
  function srcAppPagesCallsCallsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallsRoutingModule", function () {
      return CallsRoutingModule;
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


    var _calls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calls.component */
    "./src/app/pages/calls/calls.component.ts");

    var routes = [{
      path: '',
      component: _calls_component__WEBPACK_IMPORTED_MODULE_2__["CallsComponent"],
      data: {
        title: 'Calls'
      }
    }];

    var CallsRoutingModule = function CallsRoutingModule() {
      _classCallCheck(this, CallsRoutingModule);
    };

    CallsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CallsRoutingModule
    });
    CallsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CallsRoutingModule_Factory(t) {
        return new (t || CallsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallsRoutingModule, [{
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
  "./src/app/pages/calls/calls.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/calls/calls.component.ts ***!
    \************************************************/

  /*! exports provided: CallsComponent */

  /***/
  function srcAppPagesCallsCallsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallsComponent", function () {
      return CallsComponent;
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


    var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! devextreme-angular/ui/nested */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! devextreme-angular/core */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");
    /* harmony import */


    var _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/loader/loader */
    "./src/app/shared/components/loader/loader.ts");

    function CallsComponent_dxi_column_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dxi-column", 24);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);
      }
    }

    function CallsComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function CallsComponent_div_14_Template_dx_button_onClick_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var r_r28 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.deleteItem(r_r28.data);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CallsComponent_app_loader_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
      }
    }

    function CallsComponent_ng_container_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.selected == null ? null : ctx_r27.selected.company == null ? null : ctx_r27.selected.company.companyName);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25, 50, 100];
    };

    var CallsComponent =
    /*#__PURE__*/
    function (_calls_components_bas) {
      _inherits(CallsComponent, _calls_components_bas);

      function CallsComponent(injector) {
        var _this;

        _classCallCheck(this, CallsComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CallsComponent).call(this, injector));
        _this.isLoading = false;
        _this.page = 0;
        _this.itemsCount = 10;
        _this.rate = [];
        return _this;
      }

      _createClass(CallsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCalls();
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          var _this2 = this;

          console.log(item);
          this.isLoading = true;
          this.callsService.removeCall(item.id).subscribe(function (res) {
            console.log(res);

            _this2.getCalls();

            _this2.isLoading = false;
          }, function (err) {
            console.log(err);
            _this2.isLoading = false;

            _this2.utilService.showConnectionErrorToast();
          });
        }
      }, {
        key: "getCalls",
        value: function getCalls() {
          var _this3 = this;

          this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_1___default.a({
            key: 'id',
            load: function load(loadOptions) {
              return _this3.callsService.getCalls(_this3.page, _this3.itemsCount).toPromise().then(function (result) {
                return {
                  data: result.content.data.data,
                  totalCount: result.content.data.total,
                  groupCount: result.content.data.per_page
                };
              });
            }
          });
        }
      }, {
        key: "viewDetails",
        value: function viewDetails(item) {
          console.log(item.data);
          this.selected = item.data;
          this.rate = Array.from({
            length: +this.selected.rate
          }, function (v, k) {
            return k;
          });
          document.getElementById('showModal').click();
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          var d = new Date(date);
          return d.toISOString().substring(0, 10);
        }
      }, {
        key: "getTime",
        value: function getTime(date) {
          var d = new Date(date);
          var p = d.toISOString().split('T');
          var three = p[1].substring(0, 5);
          return three.toString();
        }
      }]);

      return CallsComponent;
    }(_calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    CallsComponent.ɵfac = function CallsComponent_Factory(t) {
      return new (t || CallsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    CallsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CallsComponent,
      selectors: [["app-calls"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 41,
      vars: 22,
      consts: [[1, "row", "header-row"], [1, "col-9", "row"], [1, "col-3", "float-end"], [1, "datagrid", 3, "dataSource", "showBorders", "hoverStateEnabled", "showRowLines", "onRowClick"], [3, "groupPaging"], [3, "pageIndex", "pageSize", "pageIndexChange", "pageSizeChange"], [3, "showPageSizeSelector", "allowedPageSizes"], ["mode", "multiple"], ["dataField", "note", "caption", "Name", "alignment", "center", 3, "allowSorting"], ["dataField", "company.companyName", "caption", "Company Name", "alignment", "center", 3, "allowSorting", 4, "ngIf"], ["dataField", "department.label", "caption", "Department", "alignment", "center", 3, "allowSorting"], ["dataField", "actions", "caption", "Actions", "alignment", "center", "cellTemplate", "actionTemplate", 3, "width", "allowSorting"], [4, "dxTemplate", "dxTemplateOf"], [4, "ngIf"], ["id", "showModal", "data-toggle", "modal", "data-target", "#default-modal", 2, "visibility", "hidden"], ["id", "default-modal", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-body"], [2, "width", "65%", "transform", "rotate(90deg)", "height", "277px", "object-fit", "contain", 3, "src"], [1, "modal-footer", "no-border"], [1, "text-right"], ["data-dismiss", "modal", 1, "btn", "btn-primary", "btn-md"], ["dataField", "company.companyName", "caption", "Company Name", "alignment", "center", 3, "allowSorting"], ["icon", "minus", 1, "remove-btn", 3, "onClick"]],
      template: function CallsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dx-data-grid", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRowClick", function CallsComponent_Template_dx_data_grid_onRowClick_3_listener($event) {
            return ctx.viewDetails($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dxo-remote-operations", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dxo-paging", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageIndexChange", function CallsComponent_Template_dxo_paging_pageIndexChange_5_listener($event) {
            return ctx.page = $event;
          })("pageSizeChange", function CallsComponent_Template_dxo_paging_pageSizeChange_5_listener($event) {
            return ctx.itemsCount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxo-pager", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dxo-sorting", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dxo-filter-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dxo-header-filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dxi-column", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CallsComponent_dxi_column_11_Template, 1, 1, "dxi-column", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dxi-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dxi-column", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CallsComponent_div_14_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CallsComponent_app_loader_15_Template, 1, 0, "app-loader", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Call Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CallsComponent_ng_container_29_Template, 5, 1, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Date / Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Selfie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("showBorders", true)("hoverStateEnabled", true)("showRowLines", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupPaging", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.page)("pageSize", ctx.itemsCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.currentUser == null ? null : ctx.authService.currentUser.type) === "super_admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150)("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selected == null ? null : ctx.selected.department == null ? null : ctx.selected.department.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.currentUser == null ? null : ctx.authService.currentUser.type) === "super_admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.getDate(ctx.selected == null ? null : ctx.selected.created_at), " / ", ctx.getTime(ctx.selected == null ? null : ctx.selected.created_at), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selected == null ? null : ctx.selected.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoRemoteOperationsComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoPagingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoSortingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoFilterRowComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxoHeaderFilterComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__["DxiColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__["DxTemplateDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxButtonComponent"], _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]],
      styles: [".add-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  color: white;\n  background: #1591b8;\n  margin: 2% auto 1%;\n}\n\n.float-end[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 0;\n}\n\n.datagrid[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.remove-btn[_ngcontent-%COMP%] {\n  background-color: #f62832 !important;\n}\n\n.clip-star[_ngcontent-%COMP%] {\n  background: gold;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsbHMvRTpcXFByb2plY3RzXFxhbmd1bGFyXFxyZWNlcHRpb25za3l3YXktZGFzaGJvYXJkL3NyY1xcYXBwXFxwYWdlc1xcY2FsbHNcXGNhbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYWxscy9jYWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtIQUFBO1VBQUEsMEdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxscy9jYWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYnRuIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMTU5MWI4O1xyXG4gIG1hcmdpbjogMiUgYXV0byAxJTtcclxufVxyXG5cclxuLmZsb2F0LWVuZCB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5kYXRhZ3JpZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuXHJcbi5yZW1vdmUtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjYyODMyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbGlwLXN0YXIge1xyXG4gIGJhY2tncm91bmQ6IGdvbGQ7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgNjElIDM1JSwgOTglIDM1JSwgNjglIDU3JSwgNzklIDkxJSwgNTAlIDcwJSwgMjElIDkxJSwgMzIlIDU3JSwgMiUgMzUlLCAzOSUgMzUlKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbiIsIi5hZGQtYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzE1OTFiODtcbiAgbWFyZ2luOiAyJSBhdXRvIDElO1xufVxuXG4uZmxvYXQtZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGF0YWdyaWQge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5yZW1vdmUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2MjgzMiAhaW1wb3J0YW50O1xufVxuXG4uY2xpcC1zdGFyIHtcbiAgYmFja2dyb3VuZDogZ29sZDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgNjElIDM1JSwgOTglIDM1JSwgNjglIDU3JSwgNzklIDkxJSwgNTAlIDcwJSwgMjElIDkxJSwgMzIlIDU3JSwgMiUgMzUlLCAzOSUgMzUlKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calls',
          templateUrl: './calls.component.html',
          styleUrls: ['./calls.component.scss']
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
  "./src/app/pages/calls/calls.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/calls/calls.module.ts ***!
    \*********************************************/

  /*! exports provided: CallsModule */

  /***/
  function srcAppPagesCallsCallsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallsModule", function () {
      return CallsModule;
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


    var _calls_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calls-routing.module */
    "./src/app/pages/calls/calls-routing.module.ts");
    /* harmony import */


    var _calls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calls.component */
    "./src/app/pages/calls/calls.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CallsModule = function CallsModule() {
      _classCallCheck(this, CallsModule);
    };

    CallsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CallsModule
    });
    CallsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CallsModule_Factory(t) {
        return new (t || CallsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _calls_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallsModule, {
        declarations: [_calls_component__WEBPACK_IMPORTED_MODULE_3__["CallsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _calls_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_calls_component__WEBPACK_IMPORTED_MODULE_3__["CallsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _calls_routing_module__WEBPACK_IMPORTED_MODULE_2__["CallsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-calls-calls-module-es5.js.map