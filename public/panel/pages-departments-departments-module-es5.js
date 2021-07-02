function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-departments-departments-module"], {
  /***/
  "./src/app/pages/departments/departments-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/departments/departments-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DepartmentsRoutingModule */

  /***/
  function srcAppPagesDepartmentsDepartmentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentsRoutingModule", function () {
      return DepartmentsRoutingModule;
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


    var _departments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./departments.component */
    "./src/app/pages/departments/departments.component.ts");

    var routes = [{
      path: '',
      component: _departments_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentsComponent"],
      data: {
        title: 'Department'
      }
    }];

    var DepartmentsRoutingModule = function DepartmentsRoutingModule() {
      _classCallCheck(this, DepartmentsRoutingModule);
    };

    DepartmentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DepartmentsRoutingModule
    });
    DepartmentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DepartmentsRoutingModule_Factory(t) {
        return new (t || DepartmentsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepartmentsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsRoutingModule, [{
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
  "./src/app/pages/departments/departments.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/departments/departments.component.ts ***!
    \************************************************************/

  /*! exports provided: DepartmentsComponent */

  /***/
  function srcAppPagesDepartmentsDepartmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function () {
      return DepartmentsComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! devextreme-angular */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");
    /* harmony import */


    var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! devextreme-angular/ui/nested */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-ui-nested.js");
    /* harmony import */


    var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! devextreme-angular/core */
    "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular-core.js");
    /* harmony import */


    var _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/components/loader/loader */
    "./src/app/shared/components/loader/loader.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function DepartmentsComponent_dx_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dx-button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DepartmentsComponent_dx_button_3_Template_dx_button_onClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.resetForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("text", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "departments.addDepartment"), "");
      }
    }

    function DepartmentsComponent_dxi_column_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dxi-column", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "departments.companyName"))("allowSorting", true);
      }
    }

    function DepartmentsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dx-button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DepartmentsComponent_div_20_Template_dx_button_onClick_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var r_r19 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.updateItem(r_r19.data);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dx-button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DepartmentsComponent_div_20_Template_dx_button_onClick_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var r_r19 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.deleteItem(r_r19.data);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DepartmentsComponent_app_loader_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader");
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25, 50, 100];
    };

    var DepartmentsComponent =
    /*#__PURE__*/
    function (_calls_components_bas) {
      _inherits(DepartmentsComponent, _calls_components_bas);

      function DepartmentsComponent(injector) {
        var _this;

        _classCallCheck(this, DepartmentsComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(DepartmentsComponent).call(this, injector));
        _this.isLoading = false;
        _this.add = true;
        _this.dep_id = '';
        _this.departmentForm = _this.fb.group({
          label: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
          number: ['+18654128481', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
        return _this;
      }

      _createClass(DepartmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDepartments();
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

                        _this2.departmentService.removeDepartment(item.id).subscribe(function (res) {
                          _this2.getDepartments();

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
        key: "resetForm",
        value: function resetForm() {
          var j = {
            label: '',
            number: '+18654128481'
          };
          this.departmentForm.setValue(j);
          this.add = true;
        }
      }, {
        key: "getDepartments",
        value: function getDepartments() {
          var _this3 = this;

          this.departmentService.getDepartments().subscribe(function (res) {
            _this3.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_2___default.a(res.content.data);
          });
        }
      }, {
        key: "updateItem",
        value: function updateItem(data) {
          this.add = false;
          var j = {
            label: data.label,
            number: data.number
          };
          this.dep_id = data.id;
          this.departmentForm.setValue(j);
        }
      }, {
        key: "addDepartment",
        value: function addDepartment(form, f) {
          var _this4 = this;

          this.isLoading = true;
          form['company_id'] = this.authService.currentUser.company_id;

          if (this.add) {
            this.departmentService.addDepartment(form).subscribe(function (res) {
              _this4.isLoading = false;
              f.resetForm();

              _this4.getDepartments();

              document.getElementById('close').click();

              _this4.utilService.showAddedSuccessfullyToast();
            }, function (err) {
              _this4.isLoading = false;
              console.log(err);

              _this4.utilService.showConnectionErrorToast();
            });
          } else {
            form['id'] = this.dep_id;
            this.departmentService.updateDepartment(form).subscribe(function (res) {
              _this4.isLoading = false;
              f.resetForm();

              _this4.getDepartments();

              document.getElementById('close').click();

              _this4.utilService.showAddedSuccessfullyToast();
            }, function (err) {
              _this4.isLoading = false;
              console.log(err);

              _this4.utilService.showConnectionErrorToast();
            });
          }
        }
      }]);

      return DepartmentsComponent;
    }(_calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

    DepartmentsComponent.ɵfac = function DepartmentsComponent_Factory(t) {
      return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
    };

    DepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DepartmentsComponent,
      selectors: [["app-departments"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 43,
      vars: 35,
      consts: [[1, "row", "header-row"], [1, "col-9", "row"], [1, "col-3", "float-end"], ["data-toggle", "modal", "data-target", "#side-modal-r", "class", "add-btn", "icon", "add", "stylingMode", "text", "type", "normal", 3, "text", "onClick", 4, "ngIf"], [1, "datagrid", 3, "dataSource", "showBorders", "noDataText", "showRowLines"], [3, "text", "enabled"], [3, "groupPaging"], [3, "showPageSizeSelector", "allowedPageSizes"], ["mode", "multiple"], ["dataField", "label", "alignment", "center", 3, "caption", "allowSorting"], ["dataField", "number", "alignment", "center", 3, "caption", "allowSorting"], ["dataField", "company.companyName", "alignment", "center", 3, "caption", "allowSorting", 4, "ngIf"], ["dataField", "actions", "alignment", "center", "cellTemplate", "actionTemplate", 3, "width", "caption", "allowSorting"], [4, "dxTemplate", "dxTemplateOf"], ["id", "side-modal-r", 1, "modal", "slide-in-right", "modal-right", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "side-modal-wrapper"], [1, "vertical-align"], [1, "table-cell"], [1, "pdd-horizon-15"], [1, "mrg-btm-15", "font-size-13"], [3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["formControlName", "label", "type", "text", "placeholder", "Name", 1, "form-control"], ["disabled", "", "formControlName", "number", "type", "tel", "placeholder", "Call Number", 1, "form-control"], ["type", "submit", 1, "btn", "btn-info", "btn-sm"], ["id", "close", "href", "", "data-dismiss", "modal", 1, "btn", "btn-info", 2, "visibility", "hidden"], [4, "ngIf"], ["data-toggle", "modal", "data-target", "#side-modal-r", "icon", "add", "stylingMode", "text", "type", "normal", 1, "add-btn", 3, "text", "onClick"], ["dataField", "company.companyName", "alignment", "center", 3, "caption", "allowSorting"], ["icon", "edit", "data-toggle", "modal", "data-target", "#side-modal-r", 1, "update-btn", 3, "onClick"], ["icon", "trash", 1, "remove-btn", 3, "onClick"]],
      template: function DepartmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DepartmentsComponent_dx_button_3_Template, 2, 3, "dx-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "dx-data-grid", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dxo-load-panel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dxo-remote-operations", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dxo-pager", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dxo-sorting", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dxo-filter-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "dxo-header-filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "dxi-column", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "dxi-column", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DepartmentsComponent_dxi_column_17_Template, 2, 4, "dxi-column", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "dxi-column", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DepartmentsComponent_div_20_Template, 3, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "form", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DepartmentsComponent_Template_form_ngSubmit_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);

            return ctx.departmentForm.valid && ctx.addDepartment(ctx.departmentForm.value, _r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Close!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, DepartmentsComponent_app_loader_42_Template, 1, 0, "app-loader", 29);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.currentUser.type === "admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("showBorders", true)("noDataText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 24, "menu.noData"))("showRowLines", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 26, "menu.loading"))("enabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupPaging", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 28, "departments.label"))("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 30, "departments.number"))("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.currentUser.type === "super_admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100)("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 32, "departments.action"))("allowSorting", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.add ? "Add" : "Update", "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Enter this details to ", ctx.add ? "Add" : "Update", " department");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.departmentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.add ? "Add" : "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__["DxoLoadPanelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__["DxoRemoteOperationsComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__["DxoSortingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__["DxoFilterRowComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__["DxoHeaderFilterComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__["DxTemplateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxButtonComponent"], _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: [".add-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  color: white;\n  background: #20b7f6;\n  margin: 2% auto 1%;\n}\n\n.float-end[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 0;\n}\n\n.datagrid[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.remove-btn[_ngcontent-%COMP%] {\n  background: #f62832;\n  background: linear-gradient(143deg, #f62832 0%, #ff6f76 100%);\n  background-position: 0 -30;\n  border-radius: 50%;\n  -webkit-transition: all 1s linear;\n  transition: all 1s linear;\n}\n\n.update-btn[_ngcontent-%COMP%] {\n  background: #20b7f6;\n  background: linear-gradient(143deg, #20b7f6 0%, #01b8b8 100%);\n  background-position: 0 -30;\n  border-radius: 50%;\n  -webkit-transition: all 1s linear;\n  transition: all 1s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVwYXJ0bWVudHMvRjpcXHByb2plY3RzXFxhbmd1bGFyXFxyZWNlcHRpb25za3l3YXktZGFzaGJvYXJkL3NyY1xcYXBwXFxwYWdlc1xcZGVwYXJ0bWVudHNcXGRlcGFydG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXBhcnRtZW50cy9kZXBhcnRtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsNkRBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSw2REFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXBhcnRtZW50cy9kZXBhcnRtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYnRuIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMjBiN2Y2O1xyXG4gIG1hcmdpbjogMiUgYXV0byAxJTtcclxufVxyXG5cclxuLmZsb2F0LWVuZCB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5kYXRhZ3JpZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuXHJcblxyXG4ucmVtb3ZlLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0NiwgNDAsIDUwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzZGVnLCByZ2JhKDI0NiwgNDAsIDUwLCAxKSAwJSwgcmdiYSgyNTUsIDExMSwgMTE4LCAxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcclxufVxyXG5cclxuLnVwZGF0ZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzMiwxODMsMjQ2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzZGVnLCByZ2JhKDMyLDE4MywyNDYsMSkgMCUsIHJnYmEoMSwxODQsMTg0LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTMwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgbGluZWFyO1xyXG59XHJcbiIsIi5hZGQtYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzIwYjdmNjtcbiAgbWFyZ2luOiAyJSBhdXRvIDElO1xufVxuXG4uZmxvYXQtZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGF0YWdyaWQge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5yZW1vdmUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2Y2MjgzMjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0M2RlZywgI2Y2MjgzMiAwJSwgI2ZmNmY3NiAxMDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcbn1cblxuLnVwZGF0ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMjBiN2Y2O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzZGVnLCAjMjBiN2Y2IDAlLCAjMDFiOGI4IDEwMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgbGluZWFyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DepartmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-departments',
          templateUrl: './departments.component.html',
          styleUrls: ['./departments.component.scss']
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
  "./src/app/pages/departments/departments.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/departments/departments.module.ts ***!
    \*********************************************************/

  /*! exports provided: DepartmentsModule */

  /***/
  function srcAppPagesDepartmentsDepartmentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentsModule", function () {
      return DepartmentsModule;
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


    var _departments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./departments-routing.module */
    "./src/app/pages/departments/departments-routing.module.ts");
    /* harmony import */


    var _departments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./departments.component */
    "./src/app/pages/departments/departments.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var DepartmentsModule = function DepartmentsModule() {
      _classCallCheck(this, DepartmentsModule);
    };

    DepartmentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DepartmentsModule
    });
    DepartmentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DepartmentsModule_Factory(t) {
        return new (t || DepartmentsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _departments_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepartmentsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepartmentsModule, {
        declarations: [_departments_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _departments_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepartmentsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_departments_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _departments_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepartmentsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-departments-departments-module-es5.js.map