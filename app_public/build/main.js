(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [content]=\"pageContent.header\"></app-page-header>\n<div class=\"row\">\n  <div class=\"col-12 col-lg-8\" [innerHTML]=\"pageContent.content | htmlLineBreaks\"></div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.pageContent = {
            header: {
                title: 'About Loc8r',
                strapline: ''
            },
            content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sitamet, consectetur adipiscing elit.jkjlsjh jkfdshjkdhj \nLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias incidunt molestiae debitis provident explicabo veniam dolor saepe repudiandae pariatur nesciunt ab voluptate delectus a reprehenderit quaerat consectetur porro aspernatur facilis, eaque mollitia blanditiis. Ipsum, velit facere quos, suscipit itaque porro sunt odit sapiente sed inventore quis, deserunt eos libero. Amet consectetur minus ipsam blanditiis harum?\n\nAliquam est deserunt dolore similique dicta voluptatem facilis eos commodi aspernatur! Dolorum sint sed quia hic sunt commodi eum esse neque provident, perspiciatis fuga nobis dolorem expedita doloremque eius error minima consequuntur amet, architecto non autem facilis? Est fugiat blanditiis saepe! Quae, quidem. Consectetur facilis mollitia perspiciatis aliquid doloribus iste sint veniam?\nUllam a quibusdam saepe cupiditate, quidem dolor temporibus nostrum sit minus animi quos neque consectetur ab sapiente repellat natus quam odio fugiat'
        };
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");









var routes = [
    {
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }, {
        path: 'location/:locationid',
        component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_6__["DetailsPageComponent"]
    }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
        path: '**',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-list/home-list.component */ "./src/app/home-list/home-list.component.ts");
/* harmony import */ var _distance_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./distance.pipe */ "./src/app/distance.pipe.ts");
/* harmony import */ var _framework_framework_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework/framework.component */ "./src/app/framework/framework.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/page-header/page-header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./html-line-breaks.pipe */ "./src/app/html-line-breaks.pipe.ts");
/* harmony import */ var _rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rating-stars/rating-stars.component */ "./src/app/rating-stars/rating-stars.component.ts");
/* harmony import */ var _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./location-details/location-details.component */ "./src/app/location-details/location-details.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _most_recent_first_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./most-recent-first.pipe */ "./src/app/most-recent-first.pipe.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");





// App Routing (Connecting Routes to Contollers/Components) 















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_6__["HomeListComponent"],
                _distance_pipe__WEBPACK_IMPORTED_MODULE_7__["DistancePipe"],
                _framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
                _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__["PageHeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_13__["HtmlLineBreaksPipe"],
                _rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_14__["RatingStarsComponent"],
                _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_15__["LocationDetailsComponent"],
                _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_16__["DetailsPageComponent"],
                _most_recent_first_pipe__WEBPACK_IMPORTED_MODULE_17__["MostRecentFirstPipe"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/app/storage.ts");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loc8r-data.service */ "./src/app/loc8r-data.service.ts");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(storage, loc8rDataService) {
        this.storage = storage;
        this.loc8rDataService = loc8rDataService;
    }
    AuthenticationService.prototype.getToken = function () {
        return this.storage.getItem('loc8r-token');
    };
    AuthenticationService.prototype.saveToken = function (token) {
        this.storage.setItem('loc8r-token', token);
    };
    AuthenticationService.prototype.logout = function () {
        this.storage.removeItem('loc8r-token');
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        return this.loc8rDataService.login(user)
            .then(function (authResp) { return _this.saveToken(authResp.token); });
    };
    AuthenticationService.prototype.register = function (user) {
        var _this = this;
        return this.loc8rDataService.register(user)
            .then(function (authResp) { return _this.saveToken(authResp.token); });
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        if (token) {
            var payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > (Date.now() / 1000);
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (this.isLoggedIn) {
            var token = this.getToken();
            var _a = JSON.parse(atob(token.split('.')[1])), email = _a.email, name_1 = _a.name;
            return { email: email, name: name_1 };
        }
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Storage,
            _loc8r_data_service__WEBPACK_IMPORTED_MODULE_3__["Loc8rDataService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/details-page/details-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/details-page/details-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtcGFnZS9kZXRhaWxzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/details-page/details-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/details-page/details-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [content]=\"pageContent.header\"></app-page-header>\n<div class=\"row\">\n  <div class=\"col-12 col-md-8\">\n    <app-location-details *ngIf=\"newLocation\" [location]=\"newLocation\"></app-location-details>\n  </div>\n  <app-sidebar class=\"col-12 col-md-4\" [content]=\"pageContent.sidebar\"></app-sidebar>\n</div>"

/***/ }),

/***/ "./src/app/details-page/details-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details-page/details-page.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loc8r-data.service */ "./src/app/loc8r-data.service.ts");





var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(loc8rDataService, route) {
        this.loc8rDataService = loc8rDataService;
        this.route = route;
        this.pageContent = {
            header: {
                title: '',
                strapline: ''
            },
            sidebar: ''
        };
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            var id = params.get('locationid');
            return _this.loc8rDataService.getLocationById(id);
        }))
            .subscribe(function (newLocation) {
            _this.newLocation = newLocation;
            _this.pageContent.header.title = newLocation.name;
            _this.pageContent.sidebar = newLocation.name + " is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.\n\nIf you have been, and you like it - or you don't, please leave a review to help other people just like you.";
        });
    };
    DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.css */ "./src/app/details-page/details-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loc8r_data_service__WEBPACK_IMPORTED_MODULE_4__["Loc8rDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/distance.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/distance.pipe.ts ***!
  \**********************************/
/*! exports provided: DistancePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistancePipe", function() { return DistancePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DistancePipe = /** @class */ (function () {
    function DistancePipe() {
    }
    DistancePipe.prototype.transform = function (distance) {
        var isNumeric = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        if (distance && isNumeric(distance)) {
            var thisDistance = '0';
            var unit = 'm';
            if (distance > 1000) {
                thisDistance = (distance / 1000).toFixed(1);
                unit = 'km';
            }
            else {
                thisDistance = Math.floor(distance).toString();
            }
            return thisDistance + unit;
        }
        else {
            return '?';
        }
    };
    DistancePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'distance'
        })
    ], DistancePipe);
    return DistancePipe;
}());



/***/ }),

/***/ "./src/app/framework/framework.component.css":
/*!***************************************************!*\
  !*** ./src/app/framework/framework.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyYW1ld29yay9mcmFtZXdvcmsuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/framework/framework.component.html":
/*!****************************************************!*\
  !*** ./src/app/framework/framework.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-md navbar-light\">\n  <div class=\"container\">\n    <a routerLink=\"\" class=\"navbar-brand\">Loc8r</a>\n    <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMain\" class=\"navbar-toggler\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbarMain\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a routerLink=\"about\" routerLinkActive=\"active\" class=\"nav-link\">About</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav justify-content-end\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a routerLink=\"login\" class=\"nav-link\" *ngIf=\"!isLoggedIn()\">Sign in</a>\n        </li>\n        <li class=\"nav-item dropdown\" routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\">\n          <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">\n            {{ getUsername() }}\n          </a>\n          <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\" (click)=\"doLogout()\">Logout</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container content\">\n\n  <router-outlet></router-outlet>\n\n  <footer>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <small class=\"footer\">&copy; Loc8r - Ife Jeremiah&nbsp;&nbsp;2021</small>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/framework/framework.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framework/framework.component.ts ***!
  \**************************************************/
/*! exports provided: FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function() { return FrameworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");




var FrameworkComponent = /** @class */ (function () {
    function FrameworkComponent(authenticationService, historyService) {
        this.authenticationService = authenticationService;
        this.historyService = historyService;
    }
    FrameworkComponent.prototype.ngOnInit = function () {
    };
    FrameworkComponent.prototype.doLogout = function () {
        this.authenticationService.logout();
    };
    FrameworkComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    FrameworkComponent.prototype.getUsername = function () {
        var user = this.authenticationService.getCurrentUser();
        return user ? user.name : 'Guest';
    };
    FrameworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-framework',
            template: __webpack_require__(/*! ./framework.component.html */ "./src/app/framework/framework.component.html"),
            styles: [__webpack_require__(/*! ./framework.component.css */ "./src/app/framework/framework.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"]])
    ], FrameworkComponent);
    return FrameworkComponent;
}());



/***/ }),

/***/ "./src/app/geolocation.service.ts":
/*!****************************************!*\
  !*** ./src/app/geolocation.service.ts ***!
  \****************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeolocationService = /** @class */ (function () {
    function GeolocationService() {
    }
    GeolocationService.prototype.getPosition = function (cbSuccess, cbError, cbNoGeo) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
        }
        else {
            cbNoGeo();
        }
    };
    ;
    GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeolocationService);
    return GeolocationService;
}());



/***/ }),

/***/ "./src/app/history.service.ts":
/*!************************************!*\
  !*** ./src/app/history.service.ts ***!
  \************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var HistoryService = /** @class */ (function () {
    function HistoryService(router) {
        var _this = this;
        this.router = router;
        this.urls = [];
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (routerEvent) { return routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (routerEvent) {
            var url = routerEvent.urlAfterRedirects;
            _this.urls = _this.urls.concat([url]); //UPGRADE TSLIB TO USE SYNTAX
        });
    }
    HistoryService.prototype.getPreviousUrl = function () {
        var length = this.urls.length;
        return length > 1 ? this.urls[length - 2] : '/';
    };
    HistoryService.prototype.getLastNonLoginUrl = function () {
        var exclude = ['/register', '/login'];
        var filtered = this.urls.filter(function (url) { return !exclude.includes(url); });
        var length = filtered.length;
        return length > 1 ? filtered[length - 1] : '/';
    };
    HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ }),

/***/ "./src/app/home-list/home-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-list/home-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtbGlzdC9ob21lLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-list/home-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-list/home-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error\">{{message}}</div>\n<div class=\"card\" *ngFor=\"let location of locations\">\n  <div class=\"card-block\">\n    <h4>\n      <a routerLink=\"/location/{{location._id}}\">{{location.name | titlecase}}</a>\n      <small>&nbsp;\n        <i class=\"fa{{location.rating < 1 ? 'r' : 's'}} fa-star\"></i>\n        <i class=\"fa{{location.rating < 2 ? 'r' : 's'}} fa-star\"></i>\n        <i class=\"fa{{location.rating < 3 ? 'r' : 's'}} fa-star\"></i>\n        <i class=\"fa{{location.rating < 4 ? 'r' : 's'}} fa-star\"></i>\n        <i class=\"fa{{location.rating < 5 ? 'r' : 's'}} fa-star\"></i>\n      </small><span class=\"badge badge-pill badge-default float-right\">{{location.distance | distance}}</span>\n    </h4>\n    <p class=\"address\">{{location.address}}</p>\n    <div class=\"facilities\">\n      <span *ngFor=\"let facility of location.facilities\" class=\"badge badge-warning\">{{facility}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-list/home-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-list/home-list.component.ts ***!
  \**************************************************/
/*! exports provided: HomeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeListComponent", function() { return HomeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loc8r-data.service */ "./src/app/loc8r-data.service.ts");
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geolocation.service */ "./src/app/geolocation.service.ts");




var HomeListComponent = /** @class */ (function () {
    function HomeListComponent(loc8rDataService, geolocationService) {
        this.loc8rDataService = loc8rDataService;
        this.geolocationService = geolocationService;
    }
    HomeListComponent.prototype.getLocations = function (position) {
        var _this = this;
        this.message = 'Searching for nearby places...';
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        this.loc8rDataService
            .getLocations(lat, lng)
            .then(function (foundLocations) {
            _this.message = foundLocations.length > 0 ? '' : 'No places found nearby.';
            _this.locations = foundLocations;
        });
    };
    ;
    HomeListComponent.prototype.showError = function (error) {
        if (error.code === 1) {
            this.message = 'Allow location access to work properly...';
        }
        else if (error.code === 2) {
            this.message = 'No internet. Connect to the internet...';
        }
        else {
            this.message = error.message;
        }
    };
    HomeListComponent.prototype.noGeo = function () {
        this.message = 'Geolocation not supported by this browser.';
    };
    HomeListComponent.prototype.getPosition = function () {
        this.message = 'Getting your location...';
        this.geolocationService.getPosition(this.getLocations.bind(this), this.showError.bind(this), this.noGeo.bind(this));
    };
    HomeListComponent.prototype.ngOnInit = function () {
        this.getPosition();
    };
    HomeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-list',
            template: __webpack_require__(/*! ./home-list.component.html */ "./src/app/home-list/home-list.component.html"),
            styles: [__webpack_require__(/*! ./home-list.component.css */ "./src/app/home-list/home-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__["Loc8rDataService"],
            _geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"]])
    ], HomeListComponent);
    return HomeListComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [content]=\"pageContent.header\"></app-page-header>\n<div class=\"row\">\n  <div class=\"col-12 col-md-8\">\n    <app-home-list></app-home-list>\n  </div>\n  <app-sidebar class=\"col-12 col-md-4\" [content]=\"pageContent.sidebar\"></app-sidebar>\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.pageContent = {
            header: {
                title: 'Loc8r',
                strapline: 'Find places to work with wifi near you!'
            },
            sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perharps with coffee, cake or a pint? Let Loc8r help you find the place you are looking for.'
        };
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/html-line-breaks.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/html-line-breaks.pipe.ts ***!
  \******************************************/
/*! exports provided: HtmlLineBreaksPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLineBreaksPipe", function() { return HtmlLineBreaksPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HtmlLineBreaksPipe = /** @class */ (function () {
    function HtmlLineBreaksPipe() {
    }
    HtmlLineBreaksPipe.prototype.transform = function (text) {
        return text.replace(/\n/g, '<br/>');
    };
    HtmlLineBreaksPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'htmlLineBreaks'
        })
    ], HtmlLineBreaksPipe);
    return HtmlLineBreaksPipe;
}());



/***/ }),

/***/ "./src/app/loc8r-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/loc8r-data.service.ts ***!
  \***************************************/
/*! exports provided: Loc8rDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loc8rDataService", function() { return Loc8rDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/app/storage.ts");





var Loc8rDataService = /** @class */ (function () {
    function Loc8rDataService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
    }
    Loc8rDataService.prototype.handleError = function (error) {
        console.error('Something has gone wrong', error);
        return Promise.reject(error);
    };
    Loc8rDataService.prototype.getLocations = function (lat, lng) {
        var maxDistance = 2000000;
        var url = this.apiBaseUrl + "/locations?lng=" + lng + "&lat=" + lat + "&maxdistance=" + maxDistance;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    Loc8rDataService.prototype.getLocationById = function (locationid) {
        var url = this.apiBaseUrl + "/locations/" + locationid;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    Loc8rDataService.prototype.addReviewByLocationId = function (locationid, formData) {
        var url = this.apiBaseUrl + "/locations/" + locationid + "/reviews";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': "Bearer " + this.storage.getItem('loc8r-token')
            })
        };
        return this.http
            .post(url, formData, httpOptions)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    Loc8rDataService.prototype.login = function (user) {
        return this.makeAuthApiCall('login', user);
    };
    Loc8rDataService.prototype.register = function (user) {
        return this.makeAuthApiCall('register', user);
    };
    Loc8rDataService.prototype.makeAuthApiCall = function (urlPath, user) {
        var url = this.apiBaseUrl + "/" + urlPath;
        return this.http
            .post(url, user)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    Loc8rDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_storage__WEBPACK_IMPORTED_MODULE_4__["BROWSER_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            Storage])
    ], Loc8rDataService);
    return Loc8rDataService;
}());



/***/ }),

/***/ "./src/app/location-details/location-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/location-details/location-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLWRldGFpbHMvbG9jYXRpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/location-details/location-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/location-details/location-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-md-6\">\n    <app-rating-stars [rating]=\"location.rating\"></app-rating-stars>\n    <p>{{location.address}}</p>\n    <div class=\"card card-primary\">\n      <div class=\"card-block\">\n        <h2 class=\"card-title\">Opening Hours</h2>\n        <p class=\"card-text\" *ngFor=\"let time of location.openingTimes\" [ngSwitch]=\"time.closed\">\n          {{time.days}} :\n          <span *ngSwitchCase=\"true\">Closed</span>\n          <span *ngSwitchDefault>{{time.opening+\"-\"+time.closing}}</span>\n        </p>\n      </div>\n    </div>\n    <div class=\"card card-primary\">\n      <div class=\"card-block\">\n        <h2 class=\"card-title\">Facilities</h2>\n        <span *ngFor=\"let facility of location.facilities\" class=\"badge badge-warning\">\n          <i class=\"fa fa-check\"></i>\n          {{facility}}\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 col-md-6 location-map\">\n    <div class=\"card card-primary\">\n      <div class=\"card-block\">\n        <h2 class=\"card-title\">Location Map</h2>\n        <img src=\"../../assets/images/Screenshot 2022-01-05 090523.png\" class=\"img-fluid rounded\">\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-primary review-card\">\n\n      <div class=\"card-block\" [ngSwitch]=\"isLoggedIn()\">\n        <button (click)=\"formVisible=true\" class=\"btn btn-primary float-right\" *ngSwitchCase=\"true\">Add review</button>\n        <a routerLink=\"/login\" class=\"btn btn-primary float-right\" *ngSwitchDefault>Login to add review</a>\n        <h2 class=\"card-title\">Customer reviews</h2>\n\n        <!-- FORMS -->\n        <div *ngIf=\"formVisible\">\n          <form (ngSubmit)=\"onReviewSubmit()\">\n            <hr>\n            <h4>Add your review</h4>\n            <div *ngIf=\"formError\" class=\"alert alert-danger\" role=\"alert\">\n              {{formError}}\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-10 col-sm-2 col-form-label\" for=\"rating\">Rating</label>\n              <div class=\"col-12 col-sm-2\">\n                <select [(ngModel)]=\"newReview.rating\" class=\"form-control\" id=\"rating\" name=\"rating\">\n                  <option [ngValue]=\"5\">5</option>\n                  <option [ngValue]=\"4\">4</option>\n                  <option [ngValue]=\"3\">3</option>\n                  <option [ngValue]=\"2\">2</option>\n                  <option [ngValue]=\"1\">1</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\" for=\"review\">Review</label>\n              <div class=\"col-sm-10\">\n                <textarea [(ngModel)]=\"newReview.reviewText\" class=\"form-control\" id=\"review\" name=\"review\"\n                  rows=\"5\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-12\">\n                <button class=\"btn btn-primary float-right\" style=\"margin-left: 18px;\" type=\"submit\">Submit\n                  review</button>\n                <button (click)=\"formVisible=false\" class=\"btn btn-default float-right\">Cancel</button>\n              </div>\n            </div>\n            <hr>\n          </form>\n        </div>\n\n\n        <div *ngFor=\"let review of location.reviews | mostRecentFirst\" class=\"row review\">\n          <div class=\"col-12 no-gutters review-header\">\n            <app-rating-stars [rating]=\"review.rating\"></app-rating-stars> &nbsp;&nbsp;\n            <span class=\"reviewAuthor\">{{review.author}}</span>&nbsp;&nbsp;&nbsp;\n            <small class=\"reviewTimestamp\">{{review.createdOn | date:'d MMMM yyy'}}</small>\n          </div>\n          <div class=\"col-12\">\n            <p [innerHTML]=\"review.reviewText | htmlLineBreaks\"></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/location-details/location-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/location-details/location-details.component.ts ***!
  \****************************************************************/
/*! exports provided: LocationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailsComponent", function() { return LocationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../location */ "./src/app/location.ts");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loc8r-data.service */ "./src/app/loc8r-data.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");





var LocationDetailsComponent = /** @class */ (function () {
    function LocationDetailsComponent(loc8rDataService, authenticationService) {
        this.loc8rDataService = loc8rDataService;
        this.authenticationService = authenticationService;
        this.googleAPIKey = '<Put Your Google Maps API Key Here>';
        this.newReview = {
            author: '',
            rating: 5,
            reviewText: ''
        };
        this.formVisible = false;
    }
    LocationDetailsComponent.prototype.ngOnInit = function () {
    };
    LocationDetailsComponent.prototype.formIsValid = function () {
        if (this.newReview.author && this.newReview.rating && this.newReview.reviewText && !(this.newReview.reviewText === ' ')) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    LocationDetailsComponent.prototype.resetAndHideReviewForm = function () {
        this.formVisible = false;
        this.newReview.author = '';
        this.newReview.rating = 5;
        this.newReview.reviewText = '';
    };
    ;
    LocationDetailsComponent.prototype.onReviewSubmit = function () {
        var _this = this;
        this.formError = '';
        this.newReview.author = this.getUsername();
        if (this.formIsValid()) {
            this.loc8rDataService.addReviewByLocationId(this.location._id, this.newReview)
                .then(function (review) {
                var reviews = _this.location.reviews.slice(0);
                reviews.unshift(review);
                _this.location.reviews = reviews;
                _this.resetAndHideReviewForm();
            });
        }
        else {
            this.formError = 'Please leave a review.';
        }
    };
    ;
    LocationDetailsComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    LocationDetailsComponent.prototype.getUsername = function () {
        var name = this.authenticationService.getCurrentUser().name;
        return name ? name : 'Guest';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _location__WEBPACK_IMPORTED_MODULE_2__["Location"])
    ], LocationDetailsComponent.prototype, "location", void 0);
    LocationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-details',
            template: __webpack_require__(/*! ./location-details.component.html */ "./src/app/location-details/location-details.component.html"),
            styles: [__webpack_require__(/*! ./location-details.component.css */ "./src/app/location-details/location-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loc8r_data_service__WEBPACK_IMPORTED_MODULE_3__["Loc8rDataService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LocationDetailsComponent);
    return LocationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/location.ts":
/*!*****************************!*\
  !*** ./src/app/location.ts ***!
  \*****************************/
/*! exports provided: Review, Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
var OpeningTimes = /** @class */ (function () {
    function OpeningTimes() {
    }
    return OpeningTimes;
}());
var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());

var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [content]=\"pageContent.header\"></app-page-header>\n<div class=\"row\">\n  <div class=\"col-12 col-md-8\">\n    <p class=\"lead\">Not a member? Please <a routerLink=\"/register\">register</a> first.</p>\n    <form (submit)=\"onLoginSubmit()\">\n      <div role=\"alert\" *ngIf=\"formError\" class=\"alert alert-danger\">\n        {{formError}}\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email address</label>\n        <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email address\"\n          [(ngModel)]=\"credentials.email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"e.g 12+ alphanumerics\"\n          [(ngModel)]=\"credentials.password\">\n      </div>\n      <button type=\"submit\" role=\"button\" class=\"btn btn-primary\">Sign in!</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router, historyService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.historyService = historyService;
        this.formError = '';
        this.credentials = {
            email: '',
            password: '',
            name: ''
        };
        this.pageContent = {
            header: {
                title: 'Sign in to Loc8r',
                strapline: ''
            },
            sidebar: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        this.formError = '';
        if (!this.credentials.email || !this.credentials.password) {
            this.formError = 'All fields are required, please try again.';
        }
        else {
            this.doLogin();
        }
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.authenticationService.login(this.credentials)
            .then(function () { return _this.router.navigateByUrl(_this.historyService.getLastNonLoginUrl()); })
            .catch(function (message) {
            _this.formError = message.error.message;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _history_service__WEBPACK_IMPORTED_MODULE_4__["HistoryService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/most-recent-first.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/most-recent-first.pipe.ts ***!
  \*******************************************/
/*! exports provided: MostRecentFirstPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostRecentFirstPipe", function() { return MostRecentFirstPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MostRecentFirstPipe = /** @class */ (function () {
    function MostRecentFirstPipe() {
    }
    MostRecentFirstPipe.prototype.compare = function (a, b) {
        var createdOnA = a.createdOn;
        var createdOnB = b.createdOn;
        var comparison = 1;
        if (createdOnA > createdOnB) {
            comparison = -1;
        }
        return comparison;
    };
    MostRecentFirstPipe.prototype.transform = function (reviews) {
        if (reviews && reviews.length > 0) {
            return reviews.sort(this.compare);
        }
        return null;
    };
    MostRecentFirstPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mostRecentFirst'
        })
    ], MostRecentFirstPipe);
    return MostRecentFirstPipe;
}());



/***/ }),

/***/ "./src/app/page-header/page-header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/page-header/page-header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-header/page-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-header/page-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row banner\">\n  <div class=\"col-12\">\n    <h1>{{content.title}}<small>&nbsp;&nbsp;{{content.strapline}}</small> </h1>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page-header/page-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-header/page-header.component.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageHeaderComponent.prototype, "content", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.css */ "./src/app/page-header/page-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/rating-stars/rating-stars.component.css":
/*!*********************************************************!*\
  !*** ./src/app/rating-stars/rating-stars.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZy1zdGFycy9yYXRpbmctc3RhcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rating-stars/rating-stars.component.html":
/*!**********************************************************!*\
  !*** ./src/app/rating-stars/rating-stars.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<small>&nbsp;\n  <i class=\"fa{{rating < 1 ? 'r' : 's'}} fa-star\"></i>\n  <i class=\"fa{{rating < 2 ? 'r' : 's'}} fa-star\"></i>\n  <i class=\"fa{{rating < 3 ? 'r' : 's'}} fa-star\"></i>\n  <i class=\"fa{{rating < 4 ? 'r' : 's'}} fa-star\"></i>\n  <i class=\"fa{{rating < 5 ? 'r' : 's'}} fa-star\"></i>\n</small>"

/***/ }),

/***/ "./src/app/rating-stars/rating-stars.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rating-stars/rating-stars.component.ts ***!
  \********************************************************/
/*! exports provided: RatingStarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingStarsComponent", function() { return RatingStarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingStarsComponent = /** @class */ (function () {
    function RatingStarsComponent() {
    }
    RatingStarsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RatingStarsComponent.prototype, "rating", void 0);
    RatingStarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating-stars',
            template: __webpack_require__(/*! ./rating-stars.component.html */ "./src/app/rating-stars/rating-stars.component.html"),
            styles: [__webpack_require__(/*! ./rating-stars.component.css */ "./src/app/rating-stars/rating-stars.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatingStarsComponent);
    return RatingStarsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [content]=\"pageContent.header\"></app-page-header>\n<div class=\"row\">\n  <div class=\"col-12 col-md-8\">\n    <p class=\"lead\">Already a member? Please <a routerLink=\"/login\">log in</a> instead</p>\n    <form (submit)=\"onRegisterSubmit()\">\n      <div role=\"alert\" *ngIf=\"formError\" class=\"alert alert-danger\">\n        {{formError}}\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Full name</label>\n        <input id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email address</label>\n        <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email address\"\n          [(ngModel)]=\"credentials.email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"e.g 12+ alphanumerics\"\n          [(ngModel)]=\"credentials.password\">\n      </div>\n      <button type=\"submit\" role=\"button\" class=\"btn btn-primary\">Register!</button>\n    </form>\n  </div>\n  <app-sidebar [content]=\"pageContent.sidebar\" class=\"col-12 col-md-4\"></app-sidebar>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authenticationService, historyService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.historyService = historyService;
        this.formError = '';
        this.credentials = {
            name: '',
            email: '',
            password: ''
        };
        this.pageContent = {
            header: {
                title: 'Create new account',
                strapLine: ''
            },
            sidebar: ''
        };
    }
    RegisterComponent.prototype.onRegisterSubmit = function () {
        this.formError = '';
        if (!this.credentials.name || !this.credentials.email || !this.credentials.password) {
            this.formError = 'All fields are required, please try again.';
        }
        else
            this.doRegister();
    };
    RegisterComponent.prototype.doRegister = function () {
        var _this = this;
        this.authenticationService.register(this.credentials)
            .then(function () { return _this.router.navigateByUrl(_this.historyService.getLastNonLoginUrl()); })
            .catch(function (message) { return _this.formError = message.error.msg; });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _history_service__WEBPACK_IMPORTED_MODULE_4__["HistoryService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"lead\" [innerHTML]=\"content | htmlLineBreaks\"></p>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarComponent.prototype, "content", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/storage.ts":
/*!****************************!*\
  !*** ./src/app/storage.ts ***!
  \****************************/
/*! exports provided: BROWSER_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_STORAGE", function() { return BROWSER_STORAGE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BROWSER_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Browser Storage', {
    providedIn: 'root',
    factory: function () { return localStorage; }
});


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
var environment = {
    apiBaseUrl: 'http://localhost:8000/api',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ifejeremiah/Code/web/full-stack/loc8r/app_public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map