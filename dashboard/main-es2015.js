(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/@calls/components/base/base.component.ts":
/*!******************************************************!*\
  !*** ./src/@calls/components/base/base.component.ts ***!
  \******************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _app_shared_services_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/services/department.service */ "./src/app/shared/services/department.service.ts");
/* harmony import */ var _app_shared_services_calls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app/shared/services/calls.service */ "./src/app/shared/services/calls.service.ts");
/* harmony import */ var _app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var _app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");









class BaseComponent {
    constructor(injector) {
        this.injector = injector;
        this.router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]);
        this.fb = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]);
        this.authService = this.injector.get(_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationsService"]);
        this.utilService = this.injector.get(_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]);
        this.departmentService = this.injector.get(_app_shared_services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]);
        this.callsService = this.injector.get(_app_shared_services_calls_service__WEBPACK_IMPORTED_MODULE_5__["CallsService"]);
        this.dashboardService = this.injector.get(_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]);
        this.companyService = this.injector.get(_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"]);
        this.userService = this.injector.get(_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]);
    }
}


/***/ }),

/***/ "./src/@calls/config/api.ts":
/*!**********************************!*\
  !*** ./src/@calls/config/api.ts ***!
  \**********************************/
/*! exports provided: baseUrl, api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");

const baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].globalServerURL;
const api = {
    addDepartment: baseUrl + 'department/add',
    updateDepartment: baseUrl + 'department/updateAll',
    removeDepartment: baseUrl + 'department/remove',
    dashboard: baseUrl + 'dashboard',
    getDepartmentsAdmin: baseUrl + 'department/getAll',
    getDepartmentsCompany: baseUrl + 'department/getAllForCompany',
    getCalls: baseUrl + 'calls/getAll',
    getCallsForCompany: baseUrl + 'calls/getAllForCompany',
    addCall: baseUrl + 'calls/add',
    getTypes: baseUrl + 'placesType/getAll',
    addType: baseUrl + 'placesType/add',
    removeCall: baseUrl + 'calls/remove',
    getCompanies: baseUrl + 'company/getAll',
    removeCompany: baseUrl + 'company/remove',
    updateSelfie: baseUrl + 'company/updateSelfie',
    adminDashboard: baseUrl + 'adminDashboard',
    getAllUsersForCompany: baseUrl + 'users/getAllForCompany',
    removeUsersForCompany: baseUrl + 'users/remove',
    updateUser: baseUrl + 'users/update',
};


/***/ }),

/***/ "./src/@calls/services/http.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/@calls/services/http.interceptor.ts ***!
  \*************************************************/
/*! exports provided: CampHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampHttpInterceptor", function() { return CampHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










class CampHttpInterceptor {
    constructor(utilService, authService, router) {
        this.utilService = utilService;
        this.authService = authService;
        this.router = router;
    }
    // Intercept each http request globally
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                /*              const errMsg = event.body.error;
                              if (errMsg) {
                                  if (errMsg === 'You should login first!') {
                                      // debugger;
                                      this.authService.destroy_session();
                                      this.router.navigate(['/auth/login']);
                                      this.utilService.showErrorToast('You need to login first !');
                                      // this.messageService.displayToast(errMsg);
                                  } else if (errMsg === 'Access token is incorrect !!') {
                                      // dismiss
                                  } else {
                                      // this.messageService.displayToast(errMsg);
                                  }
                              }*/
            }
        }, (err) => {
            if (err.status === 401) {
                this.authService.destroy_session();
                this.router.navigate(['/auth/login']).then();
                this.utilService.showErrorToast('You need to login first !');
            }
            else if (err.status === 500) {
                // this.messageService.displayToast(err.error.msg);
            }
        }));
    }
}
CampHttpInterceptor.ɵfac = function CampHttpInterceptor_Factory(t) { return new (t || CampHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CampHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CampHttpInterceptor, factory: CampHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }, { type: _app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/@calls/services/http.service.ts":
/*!*********************************************!*\
  !*** ./src/@calls/services/http.service.ts ***!
  \*********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class HttpService {
    constructor(http) {
        this.http = http;
    }
    delete(url, options) {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.delete(url, options);
    }
    get(url, options) {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.get(url, options);
    }
    head(url, options) {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.head(url, options);
    }
    jsonp(url, callbackParam) {
        return this.http.jsonp(url, callbackParam);
    }
    options(url, options) {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.options(url, options);
    }
    patch(url, body, options) {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.patch(url, body, options);
    }
    post(url, body, options) {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        options.headers['content-type'] = 'application/json';
        /*        options.headers['Content-Type'] = 'multipart/form-data';*/
        return this.http.post(url, body, options);
    }
    put(url, body, options) {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.put(url, body, options);
    }
    getToken() {
        if (localStorage.getItem('currentUserCallsAdmin')) {
            this.token = 'Bearer ' + JSON.parse(localStorage.getItem('currentUserCallsAdmin')).token;
            return this.token;
        }
        return '';
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/@calls/static-data/sideMenu.ts":
/*!********************************************!*\
  !*** ./src/@calls/static-data/sideMenu.ts ***!
  \********************************************/
/*! exports provided: sideMenu, sideMenuAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideMenu", function() { return sideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideMenuAdmin", function() { return sideMenuAdmin; });
const sideMenu = [{
        id: 0,
        title: 'Home',
        url: '/pages/dashboard',
        icon: 'ti-home',
        active: true
    }, {
        id: 1,
        title: 'Users',
        url: '/pages/users',
        icon: 'ti-user',
        active: false
    }, {
        id: 2,
        title: 'Departments',
        url: '/pages/department',
        icon: 'ti-tag',
        active: false
    }, {
        id: 3,
        title: 'Calls',
        url: '/pages/calls',
        icon: 'ti-mobile',
        active: false
    }, {
        id: 4,
        title: 'Settings',
        url: '/pages/settings',
        icon: 'ti-settings',
        active: false
    }
];
const sideMenuAdmin = [{
        id: 0,
        title: 'Home',
        url: '/pages/dashboard',
        icon: 'ti-home',
        active: true
    }, {
        id: 1,
        title: 'Companies',
        url: '/pages/companies',
        icon: 'ti-wallet',
        active: false
    }, {
        id: 2,
        title: 'Departments',
        url: '/pages/department',
        icon: 'ti-tag',
        active: false
    }, {
        id: 3,
        title: 'Calls',
        url: '/pages/calls',
        icon: 'ti-mobile',
        active: false
    }];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.initRoutes();
    }
    initRoutes() {
        if (!this.authService.currentUser) {
            this.router.navigateByUrl('auth/login').then();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], function () { return [{ type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_template_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/template/template.module */ "./src/app/pages/template/template.module.ts");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/template.service */ "./src/app/shared/services/template.service.ts");
/* harmony import */ var _pages_common_common_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/common/common-layout.component */ "./src/app/pages/common/common-layout.component.ts");
/* harmony import */ var _pages_common_authentication_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/common/authentication-layout.component */ "./src/app/pages/common/authentication-layout.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _calls_services_http_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@calls/services/http.interceptor */ "./src/@calls/services/http.interceptor.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _shared_services_department_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/department.service */ "./src/app/shared/services/department.service.ts");
/* harmony import */ var _shared_services_calls_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/calls.service */ "./src/app/shared/services/calls.service.ts");
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var _shared_services_company_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");






// Layout Component


// Routing Module

// App Component













// @ts-ignore
// @ts-ignore
// @ts-ignore
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _shared_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"],
        _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationsService"],
        _shared_services_department_service__WEBPACK_IMPORTED_MODULE_14__["DepartmentService"],
        _shared_services_calls_service__WEBPACK_IMPORTED_MODULE_15__["CallsService"],
        _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_16__["DashboardService"],
        _shared_services_company_service__WEBPACK_IMPORTED_MODULE_17__["CompanyService"],
        _shared_services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _calls_services_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["CampHttpInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutes"], { useHash: true }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _pages_template_template_module__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _pages_common_common_layout_component__WEBPACK_IMPORTED_MODULE_6__["CommonLayoutComponent"],
        _pages_common_authentication_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticationLayoutComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _pages_template_template_module__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutes"], { useHash: true }),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _pages_template_template_module__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _pages_common_common_layout_component__WEBPACK_IMPORTED_MODULE_6__["CommonLayoutComponent"],
                    _pages_common_authentication_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticationLayoutComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                    _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"]
                ],
                providers: [
                    _shared_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"],
                    _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationsService"],
                    _shared_services_department_service__WEBPACK_IMPORTED_MODULE_14__["DepartmentService"],
                    _shared_services_calls_service__WEBPACK_IMPORTED_MODULE_15__["CallsService"],
                    _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_16__["DashboardService"],
                    _shared_services_company_service__WEBPACK_IMPORTED_MODULE_17__["CompanyService"],
                    _shared_services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _calls_services_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["CampHttpInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _pages_common_common_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/common/common-layout.component */ "./src/app/pages/common/common-layout.component.ts");
/* harmony import */ var _pages_common_authentication_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/common/authentication-layout.component */ "./src/app/pages/common/authentication-layout.component.ts");
// Layouts


const AppRoutes = [
    {
        path: '',
        redirectTo: '/pages/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'pages',
        component: _pages_common_common_layout_component__WEBPACK_IMPORTED_MODULE_0__["CommonLayoutComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            {
                path: 'department',
                loadChildren: () => Promise.all(/*! import() | pages-departments-departments-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-departments-departments-module")]).then(__webpack_require__.bind(null, /*! ./pages/departments/departments.module */ "./src/app/pages/departments/departments.module.ts")).then(m => m.DepartmentsModule)
            },
            {
                path: 'calls',
                loadChildren: () => Promise.all(/*! import() | pages-calls-calls-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-calls-calls-module")]).then(__webpack_require__.bind(null, /*! ./pages/calls/calls.module */ "./src/app/pages/calls/calls.module.ts")).then(m => m.CallsModule)
            }, {
                path: 'add-company',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-companies-add-company-add-company-module */ "pages-companies-add-company-add-company-module").then(__webpack_require__.bind(null, /*! ./pages/companies/add-company/add-company.module */ "./src/app/pages/companies/add-company/add-company.module.ts")).then(m => m.AddCompanyModule)
            }, {
                path: 'companies',
                loadChildren: () => Promise.all(/*! import() | pages-companies-companies-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-companies-companies-module")]).then(__webpack_require__.bind(null, /*! ./pages/companies/companies.module */ "./src/app/pages/companies/companies.module.ts")).then(m => m.CompaniesModule)
            }, {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() | pages-users-users-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-users-users-module")]).then(__webpack_require__.bind(null, /*! ./pages/users/users.module */ "./src/app/pages/users/users.module.ts")).then(m => m.UsersModule)
            }, {
                path: 'add-users',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-users-add-users-add-users-module */ "pages-users-add-users-add-users-module").then(__webpack_require__.bind(null, /*! ./pages/users/add-users/add-users.module */ "./src/app/pages/users/add-users/add-users.module.ts")).then(m => m.AddUsersModule)
            }, {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(m => m.SettingsModule)
            },
            {
                path: 'element',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-ui-elements-ui-elements-modules */ "pages-ui-elements-ui-elements-modules").then(__webpack_require__.bind(null, /*! ./pages/ui-elements/ui-elements.modules */ "./src/app/pages/ui-elements/ui-elements.modules.ts")).then(m => m.UiElementsModule)
            }
        ]
    },
    {
        path: '',
        component: _pages_common_authentication_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticationLayoutComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(m => m.AuthModule)
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@calls/components/base/base.component */ "./src/@calls/components/base/base.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/loader/loader */ "./src/app/shared/components/loader/loader.ts");







function LoginComponent_app_loader_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class LoginComponent extends _calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.isLoading = false;
    }
    ngOnInit() {
        this.initComponent();
    }
    initComponent() {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    login(loginForm) {
        this.isLoading = true;
        this.authService.login(loginForm).subscribe(res => {
            this.isLoading = false;
            if (res.body.result === 'success' && this.checkType(res.body.content[0].user)) {
                const token = res.body.content[0].token;
                const user = res.body.content[0].user;
                this.authService.start_session(token, user).then(() => {
                    this.router.navigate(['/pages/dashboard']).then();
                });
                this.utilService.showInfoToast('Welcome to Call Center !');
            }
            else {
                if (res.body.result === 'error') {
                    this.utilService.showErrorToast('Wrong Email or Password !');
                }
            }
        }, (err) => {
            this.isLoading = false;
            this.utilService.showConnectionErrorToast();
        });
    }
    checkType(user) {
        return (user.type === 'admin' || user.type === 'super_admin');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 2, consts: [[1, "authentication"], [1, "sign-in-2"], [1, "container-fluid", "no-pdd-horizon", "bg", 2, "background-image", "url('assets/images/others/img-30.jpg')"], [1, "row"], [1, "col-md-10", "mr-auto", "ml-auto"], [1, "mr-auto", "ml-auto", "full-height", "height-100", "d-flex", "align-items-center"], [1, "vertical-align", "full-height"], [1, "table-cell"], [1, "card"], [1, "card-body"], [1, "pdd-horizon-30", "pdd-vertical-30"], [1, "mrg-btm-30"], ["src", "assets/images/logo/logo.png", "alt", "", 1, "img-responsive", "inline-block"], [1, "inline-block", "pull-right", "no-mrg-vertical", "pdd-top-15"], [1, "mrg-btm-15", "font-size-13"], [1, "ng-pristine", "ng-valid", 3, "formGroup", "ngSubmit"], ["loginNgForm", "ngForm"], [1, "form-group"], ["formControlName", "email", "type", "email", "placeholder", "User name", 1, "form-control"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], [1, "checkbox", "font-size-13", "inline-block", "no-mrg-vertical", "no-pdd-vertical"], ["id", "agreement", "name", "agreement", "type", "checkbox"], ["for", "agreement"], [1, "pull-right"], ["href", ""], [1, "mrg-top-20", "text-right"], ["type", "submit", 1, "btn", "btn-info"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Please enter your Email and password to login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener($event) { return ctx.form.valid && ctx.login(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Keep Me Signed In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_app_loader_34_Template, 1, 0, "app-loader", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/common/authentication-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/common/authentication-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationLayoutComponent", function() { return AuthenticationLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthenticationLayoutComponent {
    constructor() {
    }
    ngOnInit() { }
}
AuthenticationLayoutComponent.ɵfac = function AuthenticationLayoutComponent_Factory(t) { return new (t || AuthenticationLayoutComponent)(); };
AuthenticationLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticationLayoutComponent, selectors: [["app-dashboard"]], decls: 1, vars: 0, template: function AuthenticationLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                template: '<router-outlet></router-outlet>',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/common/common-layout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/common/common-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: CommonLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayoutComponent", function() { return CommonLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/template.service */ "./src/app/shared/services/template.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template/side-nav/side-nav.component */ "./src/app/pages/template/side-nav/side-nav.component.ts");
/* harmony import */ var _template_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template/header/header.component */ "./src/app/pages/template/header/header.component.ts");
/* harmony import */ var _template_side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../template/side-panel/side-panel.component */ "./src/app/pages/template/side-panel/side-panel.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










function CommonLayoutComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonLayoutComponent_div_18_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const headerTheme_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeHeader(headerTheme_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headerTheme_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("theme-colors ", headerTheme_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", headerTheme_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", headerTheme_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", headerTheme_r4);
} }
function CommonLayoutComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonLayoutComponent_div_22_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const sidenavTheme_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeSidenav(sidenavTheme_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidenavTheme_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("theme-colors ", sidenavTheme_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", sidenavTheme_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", sidenavTheme_r7);
} }
const _c0 = function (a0, a1) { return { "is-collapsed": a0, "rtl": a1 }; };
const _c1 = function (a0) { return { "theme-config-open": a0 }; };
class CommonLayoutComponent {
    constructor(tplSvc) {
        this.tplSvc = tplSvc;
        this.headerThemes = ['header-default', 'header-primary', 'header-info', 'header-success', 'header-danger', 'header-dark'];
        this.sidenavThemes = ['sidenav-default', 'side-nav-dark'];
        this.rtlActived = false;
        this.themeConfigOpen = false;
    }
    ngOnInit() {
        this.tplSvc.isSideNavCollapseChanges.subscribe(isCollapse => this.isCollapse = isCollapse);
    }
    changeHeader(headerTheme) {
        this.headerSelected = headerTheme;
    }
    changeSidenav(sidenavTheme) {
        this.sidenavSelected = sidenavTheme;
    }
    toggleThemeConfig() {
        this.themeConfigOpen = !this.themeConfigOpen;
    }
}
CommonLayoutComponent.ɵfac = function CommonLayoutComponent_Factory(t) { return new (t || CommonLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"])); };
CommonLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonLayoutComponent, selectors: [["app-dashboard"]], decls: 31, vars: 12, consts: [[1, "app", 3, "ngClass"], [1, "layout", 3, "ngClass"], [3, "ngClass"], [1, "page-container"], [1, "theme-configurator", 3, "ngClass"], [1, "configurator-wrapper"], [1, "config-header"], [1, "config-title"], [1, "config-close", 3, "click"], [1, "ti-close"], [1, "config-body"], [1, "mrg-btm-30"], [1, "lead", "font-weight-normal"], [3, "class", 4, "ngFor", "ngForOf"], [1, "lead", "font-weight-normal", "no-mrg-btm"], [1, "toggle-checkbox", "checkbox-inline", "toggle-sm", "mrg-top-10"], ["type", "checkbox", "name", "rtl-toogle", "id", "rtl-toogle", 3, "ngModel", "ngModelChange"], ["for", "rtl-toogle"], [1, "main-content"], ["type", "radio", "name", "theme", 3, "id", "value", "click"], [3, "for"], ["type", "radio", "name", "sidenav", 3, "id", "click"]], template: function CommonLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-side-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Config Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonLayoutComponent_Template_button_click_12_listener($event) { return ctx.toggleThemeConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Header Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CommonLayoutComponent_div_18_Template, 3, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sidebar Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CommonLayoutComponent_div_22_Template, 3, 5, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommonLayoutComponent_Template_input_ngModelChange_27_listener($event) { return ctx.rtlActived = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.isCollapse, ctx.rtlActived));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.headerSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sidenavSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.themeConfigOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headerThemes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidenavThemes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rtlActived);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"], _template_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _template_side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__["SidePanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './common-layout.component.html'
            }]
    }], function () { return [{ type: _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@calls/components/base/base.component */ "./src/@calls/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/loader/loader */ "./src/app/shared/components/loader/loader.ts");






function SettingsComponent_app_loader_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class SettingsComponent extends src_calls_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.selectedId = false;
        this.isLoading = false;
        this.message = '';
    }
    ngOnInit() {
        const checkbox = document.getElementById('toggle');
        checkbox.checked = +this.authService.currentUser.request_selfie === 1;
        if (this.authService.currentUser.selfie_message === 'We Would love if you can take a selfie') {
            this.authService.currentUser.selfie_message = '訪問記録のため、写真撮影にご協力ください お顔と名刺が枠内に収まるように撮影をお願いいたします';
        }
        this.message = this.authService.currentUser.selfie_message ? this.authService.currentUser.selfie_message : 'We Would love if you can take a selfie';
        checkbox.addEventListener('change', () => {
            this.updateSelfie(checkbox.checked);
        });
    }
    updateSelfie(value = null) {
        this.isLoading = true;
        if (!value) {
            const checkbox = document.getElementById('toggle');
            value = checkbox.checked;
        }
        const data = {
            id: this.authService.currentUser['company_id'],
            request_selfie: value ? '1' : '0',
            selfie_message: this.message
        };
        this.companyService.updateSelfie(data).subscribe((res) => {
            this.isLoading = false;
            this.utilService.showSavedSuccessfullyToast();
            this.authService.currentUser.request_selfie = data.request_selfie;
            this.authService.currentUser.selfie_message = data.selfie_message;
            localStorage.setItem('currentUserCallsAdmin', JSON.stringify(this.authService.currentUser));
        }, (err) => {
            this.isLoading = false;
            this.utilService.showConnectionErrorToast();
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 2, consts: [[2, "margin-left", "2%"], [1, "items"], [1, "card-title"], [1, "row", "mrg-top-25"], [1, "col-md-5"], [1, "toggle-checkbox", "checkbox-inline"], ["type", "checkbox", "name", "toggle2", "id", "toggle"], ["for", "toggle"], [1, "col-md-8"], [1, "form-group", "col-md-12", 2, "padding-left", "0"], ["type", "text", "placeholder", "Message", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mrg-top-20", "width-100"], [1, "btn", "btn-info", 3, "click"], [4, "ngIf"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Take Selfie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ask User to take a selfie before the call finished.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Selfie Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ask User to take a selfie before the call finished.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_21_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_23_listener($event) { return ctx.updateSelfie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SettingsComponent_app_loader_25_Template, 1, 0, "app-loader", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_loader_loader__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]], styles: [".items[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvRTpcXFByb2plY3RzXFxhbmd1bGFyXFxjYWxscy1kYXNoYm9hcmQvc3JjXFxhcHBcXHBhZ2VzXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59IiwiLml0ZW1zIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/template/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/template/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/template/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/template/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/template.service */ "./src/app/shared/services/template.service.ts");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







class HeaderComponent {
    constructor(tplSvc, authService) {
        this.tplSvc = tplSvc;
        this.authService = authService;
        this.searchActived = false;
    }
    ngOnInit() {
        this.tplSvc.isSideNavCollapseChanges.subscribe(isCollapse => this.isCollapse = isCollapse);
        this.tplSvc.isSidePanelOpenChanges.subscribe(isOpen => this.isOpen = isOpen);
    }
    toggleSideNavCollapse() {
        this.isCollapse = !this.isCollapse;
        this.tplSvc.toggleSideNavCollapse(this.isCollapse);
    }
    toggleSidePanelOpen() {
        this.isOpen = !this.isOpen;
        this.tplSvc.toggleSidePanelOpen(this.isOpen);
    }
    toggleSearch() {
        this.searchActived = !this.searchActived;
        console.log(this.searchActived);
    }
    getRole() {
        if (this.authService.currentUser) {
            const type = this.authService.currentUser.type;
            switch (type) {
                case 'super_admin':
                    return 'Super Admin';
                case 'admin':
                    return 'Admin';
            }
        }
        else {
            return '';
        }
    }
    logout() {
        this.authService.destroy_session();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationsService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 1, consts: [[1, "header", "navbar"], [1, "header-container"], [1, "nav-left"], ["href", "javascript:void(0);", 1, "side-nav-toggle", 3, "click"], [1, "ti-view-grid"], [1, "nav-right"], [1, "user-profile", "dropdown"], ["href", "", "data-toggle", "dropdown", 1, "dropdown-toggle"], ["src", "assets/images/profile.png", 1, "profile-img", "img-fluid"], [1, "user-info"], [1, "name", "pdd-right-5"], [1, "ti-angle-down", "font-size-10"], [1, "dropdown-menu"], ["role", "separator", 1, "divider"], ["href", "", 3, "click"], [1, "ti-power-off", "pdd-right-10"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener($event) { return ctx.toggleSideNavCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener($event) { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authService.currentUser == null ? null : ctx.authService.currentUser.username);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html'
            }]
    }], function () { return [{ type: _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"] }, { type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/template/side-nav/side-nav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/template/side-nav/side-nav.component.ts ***!
  \***************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/template.service */ "./src/app/shared/services/template.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/side-nav.directive */ "./src/app/shared/directives/side-nav.directive.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function (a0) { return [a0]; };
function SideNavComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.active ? "active-item" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
const _c1 = function () { return ["/dashboard"]; };
class SideNavComponent {
    constructor(tplSvc, router, authService) {
        this.tplSvc = tplSvc;
        this.router = router;
        this.authService = authService;
        this.menuItems = this.authService.sideMenu;
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (window.innerWidth < 992) {
                    this.tplSvc.toggleSideNavCollapse(false);
                }
            }
        });
    }
    ngOnInit() {
        this.tplSvc.isSideNavCollapseChanges.subscribe(isCollapse => this.isCollapse = isCollapse);
    }
    toggleSideNavCollapse() {
        this.isCollapse = !this.isCollapse;
        this.tplSvc.toggleSideNavCollapse(this.isCollapse);
    }
    goToPage(page) {
        this.router.navigateByUrl(page.url).then(() => {
            this.menuItems.forEach((item) => {
                item.active = false;
            });
            page.active = true;
        });
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationsService"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 11, vars: 3, consts: [["sideBar", "", 1, "side-nav"], [1, "side-nav-inner"], [1, "side-nav-logo"], ["href", "", 3, "routerLink"], [1, "logo", "logo-dark", 2, "background-image", "url('assets/images/logo/logo.png')"], [1, "logo", "logo-white", 2, "background-image", "url('assets/images/logo/logo-white.png')"], [1, "mobile-toggle", "side-nav-toggle"], ["href", "javascript:void(0);", 3, "click"], [1, "ti-arrow-circle-left"], [1, "side-nav-menu", "scrollable", 3, "perfectScrollbar"], ["class", "nav-item", "routerLinkActive", "active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "nav-item", 3, "ngClass"], ["href", "", 1, "mrg-top-15", 3, "routerLink"], [1, "icon-holder"], [1, "title"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_a_click_7_listener($event) { return ctx.toggleSideNavCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SideNavComponent_li_10_Template, 6, 7, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_4__["sidebarDropdown"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav',
                templateUrl: './side-nav.component.html'
            }]
    }], function () { return [{ type: _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/template/side-panel/side-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/template/side-panel/side-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidePanelComponent", function() { return SidePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/template.service */ "./src/app/shared/services/template.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "side-panel-open": a0 }; };
class SidePanelComponent {
    constructor(tplSvc) {
        this.tplSvc = tplSvc;
    }
    ngOnInit() {
        this.tplSvc.isSidePanelOpenChanges.subscribe(isOpen => this.isOpen = isOpen);
    }
    toggleSidePanelOpen() {
        this.isOpen = !this.isOpen;
        this.tplSvc.toggleSidePanelOpen(this.isOpen);
    }
}
SidePanelComponent.ɵfac = function SidePanelComponent_Factory(t) { return new (t || SidePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"])); };
SidePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidePanelComponent, selectors: [["app-side-panel"]], decls: 316, vars: 3, consts: [[1, "side-panel", 3, "ngClass"], [1, "side-panel-wrapper", "bg-white"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item", "active"], ["href", "#chat", "role", "tab", "data-toggle", "tab", 1, "nav-link"], [1, "nav-item"], ["href", "#profile", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["href", "#todo-list", "role", "tab", "data-toggle", "tab", 1, "nav-link"], [1, "panel-close"], ["href", "javascript:void(0);", 1, "side-panel-toggle", 3, "click"], [1, "ti-close"], [1, "tab-content"], ["id", "chat", "role", "tabpanel", 1, "tab-pane", "fade", "in", "active"], [1, "chat"], [1, "chat-user-list", "scrollable"], [1, "chat-section"], [1, "chat-title"], ["href", "javascript:void(0);", 1, "chat-user", "chat-toggle"], ["src", "assets/images/avatars/thumb-1.jpg", "alt", "", 1, "thumb-img"], [1, "user-info"], [1, "user-name"], [1, "prev-chat"], [1, "status", "online"], ["src", "assets/images/avatars/thumb-2.jpg", "alt", "", 1, "thumb-img"], [1, "status", "no-disturb"], ["src", "assets/images/avatars/thumb-3.jpg", "alt", "", 1, "thumb-img"], [1, "status", "away"], ["src", "assets/images/avatars/thumb-6.jpg", "alt", "", 1, "thumb-img"], ["src", "assets/images/avatars/thumb-4.jpg", "alt", "", 1, "thumb-img"], [1, "user-name", "pdd-top-5"], [1, "status"], ["src", "assets/images/avatars/thumb-5.jpg", "alt", "", 1, "thumb-img"], ["src", "assets/images/avatars/thumb-10.jpg", "alt", "", 1, "thumb-img"], ["src", "assets/images/avatars/thumb-11.jpg", "alt", "", 1, "thumb-img"], ["src", "assets/images/avatars/thumb-9.jpg", "alt", "", 1, "thumb-img"], [1, "conversation"], [1, "conversation-wrapper"], [1, "conversation-header"], ["href", "javascript:void(0);", 1, "back", "chat-toggle"], [1, "ti-arrow-circle-left"], [1, "conversation-body"], [1, "msg"], [1, "bubble", "me"], [1, "bubble", "friend"], [1, "conversation-footer"], [1, "upload-btn"], [1, "ti-camera"], ["type", "text", "placeholder", "Type a message...", 1, "chat-input"], [1, "sent-btn"], [1, "fa", "fa-send-o"], ["id", "profile", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "profile", "scrollable"], [1, "pdd-horizon-20", "pdd-top-20"], [1, "border", "bottom"], [1, "text-center", "mrg-top-20"], [1, "row"], [1, "col-md-6", "ml-auto", "mr-auto", "text-center"], ["src", "assets/images/avatars/user-1.jpg", 1, "img-fluid", "border-radius-round"], [1, "mrg-top-20"], [1, ""], [1, "row", "text-center", "pdd-vertical-20"], [1, "col-sm-12"], [1, "col-sm-4", "col-xs-4", "border", "right"], [1, "pdd-vertical-10"], [1, "font-size-18", "text-dark", "d-block"], [1, "col-sm-4", "col-xs-4"], [1, "text-dark", "mrg-btm-20"], [1, "list-unstyled", "list-link", "font-size-16", "pdd-btm-20"], ["href", ""], [1, "ti-user", "pdd-right-10"], [1, "label", "label-info", "mrg-left-5"], [1, "ti-book", "pdd-right-10"], [1, "label", "label-warning", "mrg-left-5"], [1, "ti-settings", "pdd-right-10"], [1, "padding-20"], [1, "list-unstyled", "list-info"], [1, "info"], [1, "title"], [1, "sub-title"], [1, "float-object"], [1, "thumb-img", "bg-info", "text-center", "font-size-25", "font-secondary"], [1, "text-white"], ["id", "todo-list", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "todo-wrapper"], [1, "todo-category-wrapper"], [1, "row", "mrg-btm-15"], [1, "col-md-12"], [1, "no-mrg-top"], ["href", "javascript:void(0);", 1, "todo-toggle"], [1, "todo-category"], [1, "amount"], [1, "category"], [1, "create-category"], [1, "amount", "fa", "fa-plus-circle"], [1, "todolist-wrapper"], [1, "todolist-header"], ["href", "javascript:void(0);", 1, "back", "todo-toggle"], ["href", "", 1, "add"], [1, "todolist-body"], [1, "checkbox"], [1, "delete"], ["id", "task1", "name", "task1", "type", "checkbox"], ["for", "task1"], ["id", "task2", "name", "task2", "type", "checkbox"], ["for", "task2"], ["id", "task3", "name", "task3", "type", "checkbox"], ["for", "task3"], ["id", "task4", "name", "task4", "type", "checkbox"], ["for", "task4"], ["id", "task5", "name", "task5", "type", "checkbox"], ["for", "task5"], [1, "pdd-btm-5", "mrg-btm-15", "border", "bottom"], [1, "mrg-btm-5"], ["id", "completed-1", "name", "completed-1", "type", "checkbox", "checked", ""], ["for", "completed-1"], ["id", "completed-2", "name", "completed-2", "type", "checkbox", "checked", ""], ["for", "completed-2"], ["id", "completed-3", "name", "completed-3", "type", "checkbox", "checked", ""], ["for", "completed-3"]], template: function SidePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidePanelComponent_Template_a_click_16_listener($event) { return ctx.toggleSidePanelOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Jordan Hurst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "What good's a reward if...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Harriet Douglas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Don't talk to me, stranger...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Victoria Clayton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Well, the Force is what...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Michael Birch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Good. Use your aggressive...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Samuel Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Jennifer Watkins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Michael Birch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Renee Edwards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Kathy White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Daryl Ellis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Jordan Hurst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Feeling all right, sir?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Just like new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "How about you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Right now I feel I could take on the whole Empire myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "All right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Nate Leong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "@Frontend Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "1,362");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "362");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h5", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Quick Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "ul", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Friend Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h5", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "ul", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Jordan Hurst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "have send you a request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "8m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Samuel Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "have send you a request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "7d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Espire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Welcome on Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "7d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "h3", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Todo List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "New Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h3", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "label", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "I hope the old man got that tractor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "input", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Come on, come on!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "label", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "it was dangerous here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "input", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "label", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "I hope the old man got that tractor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "input", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Artoo! Artoo, quickly!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "input", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "I hope the old man got that tractor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "label", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Come on, come on!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "label", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "it was dangerous here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-panel',
                templateUrl: './side-panel.component.html'
            }]
    }], function () { return [{ type: _shared_services_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/template/template.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/template/template.module.ts ***!
  \***************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/pages/template/header/header.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/pages/template/side-nav/side-nav.component.ts");
/* harmony import */ var _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-panel/side-panel.component */ "./src/app/pages/template/side-panel/side-panel.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/pages/template/footer/footer.component.ts");
/* harmony import */ var _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/side-nav.directive */ "./src/app/shared/directives/side-nav.directive.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");











class TemplateModule {
}
TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TemplateModule_Factory(t) { return new (t || TemplateModule)(); }, providers: [], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"],
        _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__["SidePanelComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__["sidebarDropdown"], _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__["sidebarToggler"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"],
        _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__["SidePanelComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__["sidebarDropdown"], _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__["sidebarToggler"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"],
                    _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__["SidePanelComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__["Sidebar_Directives"]
                ],
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"],
                    _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_5__["SidePanelComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _shared_directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__["Sidebar_Directives"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/loader/loader.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/components/loader/loader.ts ***!
  \****************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 11, vars: 0, consts: [[1, "loader"], [1, "noItems", 2, "top", "46vh"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "200px", "height", "200px", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 2, "margin", "auto", "display", "block"], ["cx", "50", "cy", "50", "r", "0", "fill", "none", "stroke", "#1d3f72", "stroke-width", "2"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1s", "values", "0;40", "keyTimes", "0;1", "keySplines", "0 0.2 0.8 1", "calcMode", "spline", "begin", "-0.5s"], ["attributeName", "opacity", "repeatCount", "indefinite", "dur", "1s", "values", "1;0", "keyTimes", "0;1", "keySplines", "0.2 0 0.8 1", "calcMode", "spline", "begin", "-0.5s"], ["cx", "50", "cy", "50", "r", "0", "fill", "none", "stroke", "#5699d2", "stroke-width", "2"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1s", "values", "0;40", "keyTimes", "0;1", "keySplines", "0 0.2 0.8 1", "calcMode", "spline"], ["attributeName", "opacity", "repeatCount", "indefinite", "dur", "1s", "values", "1;0", "keyTimes", "0;1", "keySplines", "0.2 0 0.8 1", "calcMode", "spline"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "animate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "animate", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "animate", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "animate", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Loading, Please wait ..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #d4d0d0a1;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 10000;\n}\n\nsvg[_ngcontent-%COMP%] {\n  width: 36%;\n  height: 20%;\n}\n\n.noItems[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  position: absolute;\n  top: 50vh;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 2%;\n}\n\n.noItems[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 42vw;\n}\n\n.noItems[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2vw !important;\n  font-weight: 600;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0U6XFxQcm9qZWN0c1xcYW5ndWxhclxcY2FsbHMtZGFzaGJvYXJkL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMGQwYTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cblxuc3ZnIHtcbiAgd2lkdGg6IDM2JTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5ub0l0ZW1zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHZoO1xuICBsZWZ0OiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDIlO1xuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiA0MnZ3O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjJ2dyAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCIubG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDBkMGExO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDA7XG59XG5cbnN2ZyB7XG4gIHdpZHRoOiAzNiU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4ubm9JdGVtcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTB2aDtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiAyJTtcbn1cbi5ub0l0ZW1zIGltZyB7XG4gIG1heC13aWR0aDogNDJ2dztcbn1cbi5ub0l0ZW1zIHAge1xuICBmb250LXNpemU6IDEuMnZ3ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: 'loader.html',
                styleUrls: ['./loader.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/directives/side-nav.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/side-nav.directive.ts ***!
  \*********************************************************/
/*! exports provided: sidebarToggler, sidebarDropdown, Sidebar_Directives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarToggler", function() { return sidebarToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarDropdown", function() { return sidebarDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar_Directives", function() { return Sidebar_Directives; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


//sidebar toggler
class sidebarToggler {
    constructor() {
    }
    toggleOpen($event) {
        $event.preventDefault();
        document.querySelector('.app').classList.toggle('is-collapsed');
    }
}
sidebarToggler.ɵfac = function sidebarToggler_Factory(t) { return new (t || sidebarToggler)(); };
sidebarToggler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: sidebarToggler, selectors: [["", "sidebarToggler", ""]], hostBindings: function sidebarToggler_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function sidebarToggler_click_HostBindingHandler($event) { return ctx.toggleOpen($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](sidebarToggler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[sidebarToggler]'
            }]
    }], function () { return []; }, { toggleOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();
//sidebar dropdown
class sidebarDropdown {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        $('.side-nav .side-nav-menu li a').click(function (event) {
            if ($(this).parent().hasClass("open")) {
                $(this).parent().children('.dropdown-menu').slideUp(200, function () {
                    $(this).parent().removeClass("open");
                });
            }
            else {
                $(this).parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
                $(this).parent().parent().children('li.open').children('a').removeClass('open');
                $(this).parent().parent().children('li.open').removeClass("open");
                $(this).parent().children('.dropdown-menu').slideDown(200, function () {
                    $(this).parent().addClass("open");
                });
            }
        });
    }
}
sidebarDropdown.ɵfac = function sidebarDropdown_Factory(t) { return new (t || sidebarDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
sidebarDropdown.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: sidebarDropdown, selectors: [["", "sideBar", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](sidebarDropdown, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[sideBar]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
const Sidebar_Directives = [
    sidebarDropdown,
    sidebarToggler
];


/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationsService", function() { return AuthenticationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _calls_static_data_sideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@calls/static-data/sideMenu */ "./src/@calls/static-data/sideMenu.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calls_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@calls/services/http.service */ "./src/@calls/services/http.service.ts");











class AuthenticationsService {
    constructor(http, https, router) {
        this.http = http;
        this.https = https;
        this.router = router;
        this.sideMenu = _calls_static_data_sideMenu__WEBPACK_IMPORTED_MODULE_4__["sideMenuAdmin"];
        if (localStorage.getItem('currentUserCallsAdmin')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUserCallsAdmin'));
            if (this.currentUser.type === 'admin') {
                this.sideMenu = _calls_static_data_sideMenu__WEBPACK_IMPORTED_MODULE_4__["sideMenu"];
            }
        }
    }
    start_session(token, user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            user['token'] = token;
            localStorage.setItem('currentUserCallsAdmin', JSON.stringify(user));
            localStorage.setItem('loginDateCallsAdmin', new Date() + '');
            this.currentUser = user;
            if (this.currentUser.type === 'admin') {
                this.sideMenu = _calls_static_data_sideMenu__WEBPACK_IMPORTED_MODULE_4__["sideMenu"];
            }
        });
    }
    destroy_session() {
        localStorage.removeItem('currentUserCallsAdmin');
        localStorage.removeItem('loginDateCallsAdmin');
        this.currentUser = null;
        this.router.navigateByUrl('auth/login').then();
    }
    login(data) {
        const body = JSON.stringify(data);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        const url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].globalServerURL + 'login';
        return this.http.post(url, data, { headers, observe: 'response' });
    }
    getToken() {
        if (this.currentUser && this.currentUser.token) {
            return this.currentUser.token;
        }
        return '';
    }
    isAuthenticated() {
        return !!this.getToken();
    }
    register(data) {
        const url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].globalServerURL + 'register';
        return this.http.post(url, data);
    }
    updateCompany(data) {
        const url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].globalServerURL + 'company/updateRegister';
        return this.https.post(url, data);
    }
    isLoggedIn() {
        if (!this.currentUser) {
            return false;
        }
        if (!localStorage.getItem('loginDateCallsAdmin')) {
            return false;
        }
        /*
            const loginDate: Date = new Date(localStorage.getItem('loginDateAmanProject' + environment.systemId));
            const diff = (new Date().getTime()) - loginDate.getTime();
            return !(diff > environment.tokenLifeTime);*/
    }
}
AuthenticationsService.ɵfac = function AuthenticationsService_Factory(t) { return new (t || AuthenticationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_calls_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthenticationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationsService, factory: AuthenticationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _calls_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/calls.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/calls.service.ts ***!
  \**************************************************/
/*! exports provided: CallsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsService", function() { return CallsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@calls/services/http.service */ "./src/@calls/services/http.service.ts");
/* harmony import */ var _calls_config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@calls/config/api */ "./src/@calls/config/api.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/shared/services/authentication.service.ts");







class CallsService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    getCalls(page, itemCount) {
        ++page;
        let url = '';
        if (this.authService.currentUser.type === 'super_admin') {
            url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].getCalls + '?page=' + page + '&itemsCount=' + itemCount;
        }
        else {
            url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].getCallsForCompany + '?id=' + this.authService.currentUser.company_id + '&page=' + page + '&itemsCount=' + itemCount;
        }
        return this.http.get(url);
    }
    removeCall(id) {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].removeCall + '?id=' + id;
        return this.http.get(url);
    }
}
CallsService.ɵfac = function CallsService_Factory(t) { return new (t || CallsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationsService"])); };
CallsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CallsService, factory: CallsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/company.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/company.service.ts ***!
  \****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@calls/services/http.service */ "./src/@calls/services/http.service.ts");
/* harmony import */ var _calls_config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@calls/config/api */ "./src/@calls/config/api.ts");





class CompanyService {
    constructor(http) {
        this.http = http;
    }
    getCompanies() {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].getCompanies;
        return this.http.get(url);
    }
    removeCompany(id) {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].removeCompany + '?id=' + id;
        return this.http.get(url);
    }
    updateSelfie(data) {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].updateSelfie;
        return this.http.post(url, data);
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/dashboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@calls/services/http.service */ "./src/@calls/services/http.service.ts");
/* harmony import */ var _calls_config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@calls/config/api */ "./src/@calls/config/api.ts");





class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getDetails(id) {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].dashboard + '?id=' + id;
        return this.http.get(url);
    }
    getAdminDetails() {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].adminDashboard;
        return this.http.get(url);
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/department.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/department.service.ts ***!
  \*******************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@calls/services/http.service */ "./src/@calls/services/http.service.ts");
/* harmony import */ var _calls_config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@calls/config/api */ "./src/@calls/config/api.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/shared/services/authentication.service.ts");







class DepartmentService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    addDepartment(form) {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].addDepartment;
        return this.http.post(url, form);
    }
    updateDepartment(form) {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].updateDepartment;
        return this.http.post(url, form);
    }
    getDepartments() {
        let url = '';
        if (this.authService.currentUser.type === 'super_admin') {
            url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].getDepartmentsAdmin;
        }
        else {
            url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].getDepartmentsCompany + '?id=' + this.authService.currentUser.company_id;
        }
        // const url = this.authService.currentUser.type === 'super_admin' ? api.getDepartmentsAdmin : api.getDepartmentsCompany;
        return this.http.get(url);
    }
    removeDepartment(id) {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].removeDepartment + '?id=' + id;
        return this.http.get(url);
    }
}
DepartmentService.ɵfac = function DepartmentService_Factory(t) { return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationsService"])); };
DepartmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DepartmentService, factory: DepartmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/template.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/template.service.ts ***!
  \*****************************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class TemplateService {
    constructor() {
        this.isSideNavCollapse = false;
        this.isSidePanelOpen = false;
        this.rtlActived = false;
        this.isSideNavCollapseActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isSideNavCollapse);
        this.isSideNavCollapseChanges = this.isSideNavCollapseActived.asObservable();
        this.isSidePanelOpenActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isSidePanelOpen);
        this.isSidePanelOpenChanges = this.isSidePanelOpenActived.asObservable();
    }
    toggleSideNavCollapse(isCollapse) {
        this.isSideNavCollapseActived.next(isCollapse);
    }
    toggleSidePanelOpen(isOpen) {
        this.isSidePanelOpenActived.next(isOpen);
    }
}
TemplateService.ɵfac = function TemplateService_Factory(t) { return new (t || TemplateService)(); };
TemplateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TemplateService, factory: TemplateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@calls/services/http.service */ "./src/@calls/services/http.service.ts");
/* harmony import */ var _calls_config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@calls/config/api */ "./src/@calls/config/api.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/shared/services/authentication.service.ts");







class UserService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    getUsers() {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].getAllUsersForCompany + '?id=' + this.authService.currentUser.company_id;
        return this.http.get(url);
    }
    removeUser(id) {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].removeUsersForCompany + '?id=' + id;
        return this.http.get(url);
    }
    updateUser(data) {
        const url = _calls_config_api__WEBPACK_IMPORTED_MODULE_2__["api"].updateUser;
        return this.http.post(url, data);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationsService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _calls_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/utils.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/utils.service.ts ***!
  \**************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/ui/dialog */ "./node_modules/devextreme/ui/dialog.js");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/ui/notify */ "./node_modules/devextreme/ui/notify.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3__);





class UtilsService {
    constructor() {
    }
    confirmationDialog(title, message) {
        const dialog = Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_1__["custom"])({
            title,
            message,
            buttons: [{
                    text: 'Ok',
                    onClick: () => {
                        return true;
                    }
                }, {
                    text: 'Cancel',
                    onClick: () => {
                        return false;
                    }
                }
            ],
            showTitle: true
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(dialog.show());
    }
    showServerErrorToast() {
        this.showErrorToast('serverError');
    }
    showConnectionErrorToast() {
        this.showErrorToast('Something went Wrong, Please try again later !');
    }
    showSavedSuccessfullyToast() {
        this.showSuccessToast('Saved Successfully');
    }
    showAddedSuccessfullyToast() {
        this.showSuccessToast('Success, Added Successfully');
    }
    showUpdatedSuccessfullyToast() {
        this.showSuccessToast('Updated Successfully');
    }
    showMergedSuccessfullyToast() {
        this.showSuccessToast('mergedSuccessfully');
    }
    showDeletedSuccessfullyToast() {
        this.showSuccessToast('Deleted Successfully');
    }
    showSuccessToast(message) {
        devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default()({
            message,
            type: 'success',
            displayTime: 600,
            width: 500
        });
    }
    showErrorToast(message) {
        devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default()({
            message,
            type: 'error',
            displayTime: 600,
            width: 500
        });
    }
    showInfoToast(message) {
        devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3___default()({
            message,
            type: 'info',
            displayTime: 600,
            width: 500
        });
    }
    nestedLookupValueAdapter(value) {
        value = (value || '').trim();
        if (!value) {
            return [];
        }
        const terms = value.split(new RegExp(',(?=(((?!\\)).)*\\()|[^\\(\\)]*$)', 'g'));
        return terms.map((term, idx) => {
            if (idx % 3 !== 0) {
                return null;
            }
            if (term.indexOf('(') >= 0) {
                return ({
                    value: +term.substring(0, term.indexOf('(')),
                    items: this.nestedLookupValueAdapter(term.substring(term.indexOf('(') + 1, term.lastIndexOf(')')))
                });
            }
            else {
                return ({
                    value: +term,
                    items: []
                });
            }
        }).filter(item => item !== null);
    }
    formatDate(date) {
        let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_loader_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loader/loader */ "./src/app/shared/components/loader/loader.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm2015/devextreme-angular.js");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxAccordionModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxChartModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxCheckBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDateBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFileUploaderModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFormModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxListModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxLookupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxNumberBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxPopupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxRadioGroupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSchedulerModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxScrollViewModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSelectBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSliderModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabPanelModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabsModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextAreaModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTooltipModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTreeViewModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidationSummaryModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidatorModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownButtonModule"]
        ],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxAccordionModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxChartModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxCheckBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDateBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFileUploaderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFormModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxListModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxLookupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxNumberBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxRadioGroupModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSchedulerModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSliderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabPanelModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabsModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextAreaModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTooltipModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTreeViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidationSummaryModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonGroupModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_loader_loader__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxAccordionModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxChartModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxCheckBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDateBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFileUploaderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFormModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxListModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxLookupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxNumberBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxRadioGroupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSchedulerModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSliderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabPanelModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabsModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextAreaModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTooltipModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTreeViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidationSummaryModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownButtonModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _components_loader_loader__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxAccordionModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxChartModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxCheckBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDateBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFileUploaderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFormModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxListModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxLookupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxNumberBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxRadioGroupModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSchedulerModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSliderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabPanelModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabsModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextAreaModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTooltipModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTreeViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidationSummaryModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonGroupModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _components_loader_loader__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxAccordionModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxChartModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxCheckBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDataGridModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDateBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFileUploaderModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFormModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxListModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxLookupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxNumberBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxPopupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxRadioGroupModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSchedulerModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxScrollViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSelectBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSliderModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabPanelModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabsModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextAreaModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTooltipModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTreeViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidationSummaryModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidatorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownButtonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonGroupModule"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxAccordionModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxButtonModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxChartModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxCheckBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDataGridModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDateBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFileUploaderModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxFormModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxListModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxLookupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxNumberBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxPopupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxRadioGroupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSchedulerModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxScrollViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSelectBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxSliderModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabPanelModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTabsModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextAreaModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTextBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTooltipModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxTreeViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidationSummaryModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxValidatorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDropDownButtonModule"]
                ],
                declarations: [_components_loader_loader__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    // globalServerURL: 'http://tac-board.com/backend2/tac/public/api/'
    globalServerURL: 'https://visitter.net/api/'
    // globalServerURL: 'http://127.0.0.1:8000/api/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\angular\calls-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map