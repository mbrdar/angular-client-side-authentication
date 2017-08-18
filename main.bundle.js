webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__["a" /* DashboardModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-todos></app-todos>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_module__ = __webpack_require__("../../../../../src/app/shared/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/dashboard/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todos_todo_service__ = __webpack_require__("../../../../../src/app/dashboard/todos/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todos_todos_component__ = __webpack_require__("../../../../../src/app/dashboard/todos/todos.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_routing__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_module__["a" /* AuthModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_7__todos_todos_component__["a" /* TodosComponent */], __WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* DashboardComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__todos_todo_service__["a" /* TodoService */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_logged_in_guard__ = __webpack_require__("../../../../../src/app/shared/auth/logged-in.guard.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_logged_in_guard__["a" /* LoggedInGuard */]] }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"\">Dashboard</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <app-logout></app-logout>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/dashboard/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/todos/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TodoService = (function () {
    function TodoService(http, authToken) {
        this.http = http;
        this.authToken = authToken;
    }
    TodoService.prototype.getAll = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', localStorage.getItem(this.authToken));
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
        requestOptions.headers = headers;
        return this.http.get('https://your-app.com/todos', requestOptions)
            .map(function (res) { return res.json(); });
    };
    return TodoService;
}());
TodoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('AUTH_TOKEN')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, String])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/todos/todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/todos/todos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h2>Those todo resources are protected</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"card-columns\">\n\n      <!-- Card 1 -->\n      <div class=\"card\" *ngFor=\"let todo of todos$ | async\">\n        <div class=\"card-header\">{{todo.title}}</div>\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{todo.content}}</p>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/todos/todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/dashboard/todos/todo.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosComponent = (function () {
    function TodosComponent(todoService) {
        this.todoService = todoService;
        this.todos$ = this.todoService.getAll();
    }
    TodosComponent.prototype.ngOnInit = function () {
    };
    return TodosComponent;
}());
TodosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-todos',
        template: __webpack_require__("../../../../../src/app/dashboard/todos/todos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/todos/todos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === "function" && _a || Object])
], TodosComponent);

var _a;
//# sourceMappingURL=todos.component.js.map

/***/ }),

/***/ "../../../../../src/app/mock-backend/mock-backend-factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = mockBackendFactory;

/**
 * This class is used instead real Angular Http service from @angular/http package.
 * Main purpose of this class is to act like real backend and return fake http responses.
 * Do NOT use this class in production code, instead use real Angular Http service.
 */
function mockBackendFactory(backend, options) {
    backend.connections.subscribe(function (connection) {
        if (connection.request.url.endsWith('/login') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post) {
            var body = JSON.parse(connection.request.getBody());
            checkCredentials(body, connection);
        }
        else if (connection.request.url.endsWith('/todos') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Get) {
            if (connection.request.headers.get('Authorization') === 'fakeToken') {
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 200, body: generateJsonResponseBody() })));
            }
            else {
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 401 })));
            }
        }
        else {
            connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 404 })));
        }
    });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */](backend, options);
}
function checkCredentials(body, connection) {
    if (body.email === 'test@test.com' && body.password === 'password') {
        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](generateMockResponseOptions()));
    }
    else {
        connection.mockError(new Error('Wrong credentials'));
    }
}
// generate fake response options
function generateMockResponseOptions() {
    var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
    headers.append('Content-Type', 'application/json');
    headers.append('Set-Authorization', 'fakeToken');
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({
        headers: headers,
        status: 200,
        url: 'your-app.com/login',
        body: "{\"firstName\": \"John\", \"lastName\": \"Doe\"}"
    });
}
function generateJsonResponseBody() {
    return "[\n    {\"title\":\"Todo 1\", \"content\": \"This is test content 1\"},\n    {\"title\":\"Todo 2\", \"content\": \"This is test content 2\"},\n    {\"title\":\"Todo 3\", \"content\": \"This is test content 3\"},\n    {\"title\":\"Todo 4\", \"content\": \"This is test content 4\"},\n    {\"title\":\"Todo 5\", \"content\": \"This is test content 5\"},\n    {\"title\":\"Todo 6\", \"content\": \"This is test content 6\"},\n    {\"title\":\"Todo 7\", \"content\": \"This is test content 7\"},\n    {\"title\":\"Todo 8\", \"content\": \"This is test content 8\"},\n    {\"title\":\"Todo 9\", \"content\": \"This is test content 9\"}\n  ]";
}
//# sourceMappingURL=mock-backend-factory.js.map

/***/ }),

/***/ "../../../../../src/app/mock-backend/mock-backend.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mock_backend_factory__ = __webpack_require__("../../../../../src/app/mock-backend/mock-backend-factory.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockBackendModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MockBackendModule = (function () {
    function MockBackendModule() {
    }
    return MockBackendModule;
}());
MockBackendModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http_testing__["a" /* MockBackend */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* BaseRequestOptions */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */],
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http_testing__["a" /* MockBackend */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* BaseRequestOptions */]],
                useFactory: __WEBPACK_IMPORTED_MODULE_4__mock_backend_factory__["a" /* mockBackendFactory */]
            }
        ]
    })
], MockBackendModule);

//# sourceMappingURL=mock-backend.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/shared/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__ = __webpack_require__("../../../../../src/app/shared/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_routing__ = __webpack_require__("../../../../../src/app/shared/auth/auth.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logged_in_guard__ = __webpack_require__("../../../../../src/app/shared/auth/logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mock_backend_mock_backend_module__ = __webpack_require__("../../../../../src/app/mock-backend/mock-backend.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__auth_routing__["a" /* AuthRoutingModule */],
            // HttpModule <- use this in real implementation
            __WEBPACK_IMPORTED_MODULE_8__mock_backend_mock_backend_module__["a" /* MockBackendModule */] // <- provide fake Http service, do not use in production!
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__["a" /* LogoutComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__logged_in_guard__["a" /* LoggedInGuard */],
            { provide: 'AUTH_TOKEN', useValue: 'token' },
            { provide: 'AUTH_USER', useValue: 'user' }
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_5__logout_logout_component__["a" /* LogoutComponent */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/shared/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());
AuthRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AuthRoutingModule);

//# sourceMappingURL=auth.routing.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("../../../../../src/app/shared/auth/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AuthService = (function () {
    // Implementation of Http service comes from mock-backend module,
    // in production use real Http service from Angular HttpModule
    function AuthService(http, authToken, authUser) {
        this.http = http;
        this.authToken = authToken;
        this.authUser = authUser;
        this.loggedId$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.getToken() !== null ? true : false);
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.http.post('http://your-app-url.com/login', { email: email, password: password })
            .subscribe(function (response) {
            localStorage.setItem(_this.authUser, response.text());
            localStorage.setItem(_this.authToken, response.headers.get('Set-Authorization'));
            _this.loggedId$.next(true);
        }, function () {
            _this.loggedId$.next(false);
        });
    };
    AuthService.prototype.getUser = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */](JSON.parse(localStorage.getItem(this.authUser)));
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem(this.authToken);
    };
    AuthService.prototype.isLoggedId = function () {
        return this.loggedId$;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.authToken);
        localStorage.removeItem(this.authUser);
        this.loggedId$.next(false);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('AUTH_TOKEN')),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])('AUTH_USER')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _a || Object, String, String])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.loggedIn = false;
        this.authService.isLoggedId().subscribe(function (loggedId) {
            _this.loggedIn = loggedId;
        });
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        if (!this.loggedIn) {
            this.router.navigateByUrl('/login');
        }
        return this.loggedIn;
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoggedInGuard);

var _a, _b;
//# sourceMappingURL=logged-in.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #loginForm=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"login(loginForm)\">\n    <div class=\"alert alert-primary\" role=\"alert\">\n      <p>\n        Email: <b>test@test.com</b>\n      </p>\n      <p>\n        Password: <b>password</b>\n      </p>\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showErrorMessage && loginForm.submitted\">\n      Wrong credentials!\n    </div>\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" name=\"email\" required autofocus\n           ngModel>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" name=\"password\" required\n           ngModel>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.showErrorMessage = false;
        this.authService.isLoggedId().subscribe(function (loggedIn) {
            _this.showErrorMessage = !loggedIn;
            if (loggedIn) {
                _this.router.navigateByUrl('');
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (loginForm) {
        this.authService.login(loginForm.value.email, loginForm.value.password);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/shared/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/auth/login/login.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/auth/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <label class=\"mr-sm-2\">{{user.firstName}} {{user.lastName}}</label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"logout()\">Logout</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/shared/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = authService.getUser();
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('login');
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/shared/auth/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/auth/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(user) {
        this.firstName = user && user.firstName || null;
        this.lastName = user && user.lastName || null;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map