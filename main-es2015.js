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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");







class AppComponent {
    constructor() {
        this.title = 'personal-web';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 35, vars: 0, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width"], ["name", "description", "content", "personal website, resume"], ["name", "keywords", "content", "personal website, resume"], ["name", "author", "content", "ManmeetKalra"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/icon?family=Material+Icons"], [1, "header"], ["id", "myContainer", 1, "container"], [1, "menu-toggle"], [1, "material-icons", 2, "color", "white"], [1, "current"], ["href", "#"], ["href", "#work"], ["href", "#projects"], ["href", "#resume"], ["href", "#contact"], ["id", "home"], ["id", "work"], ["id", "projects"], ["id", "resume"], ["id", "contact"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "view_headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "WORK EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-home", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-work", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-projects", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-resume", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-contact", 20);
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]], styles: ["head[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\n    margin: 0;\n    padding: 0;\n    \n  }\nnav[_ngcontent-%COMP%] {\n    z-index: 10;;\n  }\n.header[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n.container[_ngcontent-%COMP%]{\n      width:80%;\n      margin:auto;\n      overflow:hidden;\n      \n    }\n.container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n      display: none;\n    }\nul[_ngcontent-%COMP%]{\n      margin:0;\n      padding:0;\n      float: right;\n      margin-top:5px;\n    }\n.header[_ngcontent-%COMP%]{\n      background:black;\n      color:#ffffff;\n      padding-top:20px;\n      min-height:70px;\n      display: flex;\n      position: fixed;\n      width: 100%;\n      z-index: 50;\n    }\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      color:#cccccc;\n      text-decoration:none;\n      text-transform: uppercase;\n      font-size: 1rem;\n      font-family: 'PT Sans', Arial, Helvetica, 'Nimbus Sans L', sans-serif;\n      line-height: 20px;\n      font-weight: 400;\n      font-style: normal;\n    }\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n      display:inline;\n      padding: 0 20px 0 20px;\n    }\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n      color:#ffffff;\n    }\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n      transition: background-color .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out;\n  }\n.material-icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0lBQ0ksU0FBUztJQUNULFVBQVU7O0VBRVo7QUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNBO01BQ0ksU0FBUztNQUNULFdBQVc7TUFDWCxlQUFlOztJQUVqQjtBQUNBO01BQ0UsYUFBYTtJQUNmO0FBQ0E7TUFDRSxRQUFRO01BQ1IsU0FBUztNQUNULFlBQVk7TUFDWixjQUFjO0lBQ2hCO0FBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsYUFBYTtNQUNiLGVBQWU7TUFDZixXQUFXO01BQ1gsV0FBVztJQUNiO0FBRUE7TUFDRSxhQUFhO01BQ2Isb0JBQW9CO01BQ3BCLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YscUVBQXFFO01BQ3JFLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsa0JBQWtCO0lBQ3BCO0FBRUE7TUFDRSxjQUFjO01BQ2Qsc0JBQXNCO0lBQ3hCO0FBRUE7TUFDRSxhQUFhO0lBQ2Y7QUFFQTtNQUNFLGlHQUFpRztFQUNyRztBQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE0QkkiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qR2xvYmFsKi9cbmhlYWQsYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBcbiAgfVxuICBuYXYge1xuICAgIHotaW5kZXg6IDEwOztcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuY29udGFpbmVye1xuICAgICAgd2lkdGg6ODAlO1xuICAgICAgbWFyZ2luOmF1dG87XG4gICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICBcbiAgICB9XG4gICAgLmNvbnRhaW5lciAuaWNvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICB1bHtcbiAgICAgIG1hcmdpbjowO1xuICAgICAgcGFkZGluZzowO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkZXJ7XG4gICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgICBtaW4taGVpZ2h0OjcwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiA1MDtcbiAgICB9XG4gICAgXG4gICAgLmhlYWRlciBhe1xuICAgICAgY29sb3I6I2NjY2NjYztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsICdOaW1idXMgU2FucyBMJywgc2Fucy1zZXJpZjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG4gICAgXG4gICAgLmhlYWRlciBsaXtcbiAgICAgIGRpc3BsYXk6aW5saW5lO1xuICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmhlYWRlciBhOmhvdmVye1xuICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICB9XG4gIFxuICAgIC5oZWFkZXIgbmF2PnVsPmxpPmEge1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGNvbG9yIC4zcyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLypcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE2NXB4KSB7XG4gICAgICAuY29udGFpbmVyIGxpIHtkaXNwbGF5OiBub25lO31cbiAgICAgIC5tZW51LXRvZ2dsZSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXIgbGk6YWN0aXZle1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIFxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTY1cHgpIHtcbiAgICAgIC5jb250YWluZXIucmVzcG9uc2l2ZSB7cG9zaXRpb246IHJlbGF0aXZlO31cbiAgICAgIC5jb250YWluZXIucmVzcG9uc2l2ZSAuaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXIucmVzcG9uc2l2ZSBhIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH0qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 18, vars: 0, consts: [[1, "contact"], [1, "heading"], ["height", "10", "width", "300"], ["x1", "0", "y1", "0", "x2", "500", "y2", "0", 2, "stroke", "rgb(255, 255, 255)", "stroke-width", "5"], [1, "container"], [1, "left-margin"], [1, "images"], ["href", "https://www.linkedin.com/in/manmeetskalra/", 2, "margin-right", "3rem"], ["src", "assets/images/linkedin.png", "alt", "linkedinicon", 1, "lady1", "fade", 2, "border-radius", "10%"], ["href", "https://www.instagram.com/manmeetskalra/?hl=en", 2, "margin-right", "3rem"], ["src", "assets/images/instagram.png", "alt", "instaicon", 1, "lady1", "fade", 2, "border-radius", "10%"], ["href", "https://www.facebook.com/manmeet.kalra.583/", 2, "margin-right", "3rem"], ["src", "assets/images/facebook.png", "alt", "fbicon", 1, "lady1", "fade"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "line", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact[_ngcontent-%COMP%] {\n    padding-top: 5rem;\n    background-color: black;\n    padding-bottom: 5rem;\n}\n.heading[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: \"PT Sans\";\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-size: 350%;\n    line-height: 35px;\n}\n.container[_ngcontent-%COMP%] {\n    height: 100%; \n    display: grid;\n    grid-template-columns:1fr 2fr 2fr 2fr 1fr;\n    padding-top: 10rem;\n\n}\n.lady1[_ngcontent-%COMP%] {\n    width: 50%;\n    position: relative;\n    z-index: 0;\n}\n.images[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    max-width: none;\n    transition: none 0s ease 0s;\n    text-align: center;\n}\n.main-text[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    font-family: \"PT Serif\";\n    text-align: center;\n    line-height: normal;    \n}\n.home-text1[_ngcontent-%COMP%] {\n\n    z-index: 9;\n    white-space: normal;\n    font-size: 150%;\n    line-height: normal;\n    font-weight: 400;\n    color: rgb(255, 255, 255);\n    letter-spacing: 0px;\n    font-family: \"PT Sans\";\n    visibility: inherit;\n    transition: none 0s ease 0s;\n    text-align: inherit;\n    border-width: 0px;\n    margin: 0px;\n    padding:0rem;\n    min-height: 0px;\n    max-height: none;\n    opacity: 1;\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform-origin: 50% 50% 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLG1FQUFtRTtJQUNuRSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0IHtcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbn1cbi5oZWFkaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiAzNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMmZyIDJmciAyZnIgMWZyO1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcblxufVxuLmxhZHkxIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuLmltYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4tdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBmb250LWZhbWlseTogXCJQVCBTZXJpZlwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsOyAgICBcbn1cbi5ob21lLXRleHQxIHtcblxuICAgIHotaW5kZXg6IDk7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCI7XG4gICAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOjByZW07XG4gICAgbWluLWhlaWdodDogMHB4O1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 0, consts: [[1, "container", "main-home"], [1, "left-margin"], [1, "images"], ["src", "assets/images/bitmoji.png", "alt", "bitmoji", 1, "lady1", "mySlides", "fade"], [1, "main-text"], [2, "color", "white"], [1, "home-text1"], [1, "home-text3", 2, "padding-bottom", "1rem"], ["height", "10", "width", "400"], ["x1", "0", "y1", "0", "x2", "2000", "y2", "0", 2, "stroke", "rgb(255,255,255)", "stroke-width", "5"], [1, "home-text2", 2, "padding-top", "3rem"], [1, "home-text2"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hey, I'm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Manmeet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Former Software Engineer Intern @ SmartOwn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BSc Software Systems @ SFU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home-text1[_ngcontent-%COMP%] {\n\n    z-index: 9;\n    min-width: 483px;\n    max-width: 483px;\n    white-space: normal;\n    font-size: 200%;\n    line-height: 53px;\n    font-weight: 400;\n    color: rgb(255, 255, 255);\n    letter-spacing: 0px;\n    font-family: \"PT Sans\";\n    visibility: inherit;\n    transition: none 0s ease 0s;\n    text-align: inherit;\n    border-width: 0px;\n    margin: 0px;\n    padding-bottom:0rem;\n    min-height: 0px;\n    max-height: none;\n    opacity: 1;\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform-origin: 50% 50% 0px;\n}\n\n.home-text3[_ngcontent-%COMP%] {\n\n    z-index: 9;\n    min-width: 483px;\n    max-width: 483px;\n    white-space: normal;\n    font-size: 500%;\n    line-height: 53px;\n    font-weight: 400;\n    color: rgb(255, 255, 255);\n    letter-spacing: 0px;\n    font-family: \"PT Sans\";\n    visibility: inherit;\n    transition: none 0s ease 0s;\n    text-align: inherit;\n    border-width: 0px;\n    min-height: 0px;\n    max-height: none;\n    opacity: 1;\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform-origin: 50% 50% 0px;\n}\n\n.home-text2[_ngcontent-%COMP%] {\n\n    z-index: 10;\n    min-width: 482px;\n    max-width: 482px;\n    white-space: normal;\n    font-size: 200%;\n    line-height: 1em;\n    font-weight: 400;\n    color: rgb(255, 255, 255);\n    letter-spacing: 0px;\n    font-family: \"PT Sans\";\n    visibility: inherit;\n    transition: none 0s ease 0s;\n    text-align: inherit;\n    border-width: 0px;\n    margin-bottom: 1em;\n    padding-bottom: 0px;\n    min-height: 0px;\n    max-height: none;\n    opacity: 1;\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform-origin: 50% 50% 0px;\n\n}\n\n.container[_ngcontent-%COMP%] {\n    height: 100%; \n    display: grid;\n    grid-template-columns: 1fr 2fr 3fr ;\n    padding-top: 10rem;\n\n}\n\n.main-home[_ngcontent-%COMP%] {\n    background-color: black;\n    margin-bottom: 5rem;\n}\n\n.main-text[_ngcontent-%COMP%] {\n    margin-top: 7rem;\n    margin-bottom: 3rem;\n    font-family: \"PT Serif\";\n    width: 26vw;\n    text-align: center;\n    line-height: normal;\n    \n}\n\n.img-res[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 200px;\n    height: auto;\n}\n\n.app-link[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n}\n\n.images[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    max-width: none;\n    transition: none 0s ease 0s;\n}\n\n.lady1[_ngcontent-%COMP%] {\n    width: 70%;\n    position: relative;\n    z-index: 0;\n}\n\n.sub-page[_ngcontent-%COMP%] {\n    background-color: #f6e6e7;\n    text-align: center;\n    line-height: normal;\n    font-family: 'PT Serif', Arial, Helvetica, 'Nimbus Sans L', sans-serif;\n    font-weight: 300;\n    padding-top: 100px;\n    padding-bottom: 100px;\n    \n}\n\n.button[_ngcontent-%COMP%] {\n    background: transparent;\n    border-style: solid;\n    border-width: 1px;\n    color: black;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    font-weight: 300;\n    font-family: 'PT Serif', Arial, Helvetica, 'Nimbus Sans L', sans-serif;;\n}\n\n.mobile-screen[_ngcontent-%COMP%] {\n   display: none;\n   margin: 0;\n   padding: 0;\n }\n\n#sub-page-text[_ngcontent-%COMP%] {\n    opacity: 0;\n    -webkit-animation-name: bounceIn;\n            animation-name: bounceIn;\n    -webkit-animation-duration: 700ms;\n            animation-duration: 700ms;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes bounceIn{\n    0%{\n      opacity: 0;\n      transform: scale(0.3) translate3d(0,0,0);\n    }\n    50%{\n      opacity: 0.9;\n      transform: scale(1.1);\n    }\n    80%{\n      opacity: 1;\n      transform: scale(0.89);\n    }\n    100%{\n      opacity: 1;\n      transform: scale(1) translate3d(0,0,0);\n    }\n  }\n\n@keyframes bounceIn{\n    0%{\n      opacity: 0;\n      transform: scale(0.3) translate3d(0,0,0);\n    }\n    50%{\n      opacity: 0.9;\n      transform: scale(1.1);\n    }\n    80%{\n      opacity: 1;\n      transform: scale(0.89);\n    }\n    100%{\n      opacity: 1;\n      transform: scale(1) translate3d(0,0,0);\n    }\n  }\n\n@media screen and (max-width: 420px) {\n  .mobile-screen[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: none;\n    margin-right: none;\n  }\n}\n\n@media screen and (max-width: 800px) {\n    \n    .main-text[_ngcontent-%COMP%] {\n        margin-top: 5rem;\n        margin-bottom: 3rem;\n        font-family: \"PT Serif\";\n        text-align: center;\n        margin-left: 2rem;\n        margin-right: 2rem;\n        grid-column: 2/2;\n        width: 90%;\n        text-align: center;\n        \n    }\n    .app-link[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n        display: inline-block;\n        \n    }\n    .home-text1[_ngcontent-%COMP%] {\n      font-size: 30px;\n      line-height: 40px;\n      text-align: center;\n      margin-top: 20px;\n      color: #fff;\n    }\n    .home-text2[_ngcontent-%COMP%] {\n      text-align: center;\n      margin: 20px auto;\n      font-size: 16px;\n      color: #fff;\n    }\n    .img-res[_ngcontent-%COMP%]{\n        display: block;\n        margin: 0 auto 20px;\n    }\n      .fade[_ngcontent-%COMP%] {\n        -webkit-animation-name: fade;\n        -webkit-animation-duration: 1.5s;\n        animation-name: fade;\n        animation-duration: 1.5s;\n      }\n      \n      @-webkit-keyframes fade {\n        from {opacity: .4} \n        to {opacity: 1}\n      }\n      \n      @keyframes fade {\n        from {opacity: .4} \n        to {opacity: 1}\n      }\n      \n      \n      .active[_ngcontent-%COMP%] {\n        background-color: #717171;\n      }\n      .mobile-screen[_ngcontent-%COMP%]{\n        display: block;\n      }\n      \n}\n\n\n\n@media screen and (max-width: 1000px) {\n  .main-text[_ngcontent-%COMP%] {\n      margin-top: 5rem;\n      margin-bottom: 3rem;\n      font-family: \"PT Serif\";\n      text-align: center;\n      margin-left: 2rem;\n      margin-right: 2rem;\n      grid-column: 2/2;\n      width: auto;\n      text-align: center;\n  }\n  .images1[_ngcontent-%COMP%]{\n    display: flex;\n    width: auto; \n    height: auto; \n    text-align:center; \n    padding-right: 1rem;\n    padding-left: 1rem;\n    z-index: -10;\n    grid-column: 1/2;\n  }\n  .main-home[_ngcontent-%COMP%] {\n    background-color: black;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtRUFBbUU7SUFDbkUsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUVBQW1FO0lBQ25FLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUVBQW1FO0lBQ25FLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzRUFBc0U7SUFDdEUsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7O0FBRXpCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0VBQXNFO0FBQzFFOztBQUNDO0dBQ0UsYUFBYTtHQUNiLFNBQVM7R0FDVCxVQUFVO0NBQ1o7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJO01BQ0UsVUFBVTtNQUNWLHdDQUF3QztJQUMxQztJQUNBO01BQ0UsWUFBWTtNQUNaLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UsVUFBVTtNQUNWLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0UsVUFBVTtNQUNWLHNDQUFzQztJQUN4QztFQUNGOztBQWpCRjtJQUNJO01BQ0UsVUFBVTtNQUNWLHdDQUF3QztJQUMxQztJQUNBO01BQ0UsWUFBWTtNQUNaLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UsVUFBVTtNQUNWLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0UsVUFBVTtNQUNWLHNDQUFzQztJQUN4QztFQUNGOztBQUlGO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBOztJQUVJO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixrQkFBa0I7O0lBRXRCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIscUJBQXFCOztJQUV6QjtJQUNBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLFdBQVc7SUFDYjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsV0FBVztJQUNiO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCO01BQ0U7UUFDRSw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLG9CQUFvQjtRQUNwQix3QkFBd0I7TUFDMUI7O01BRUE7UUFDRSxNQUFNLFdBQVc7UUFDakIsSUFBSSxVQUFVO01BQ2hCOztNQUVBO1FBQ0UsTUFBTSxXQUFXO1FBQ2pCLElBQUksVUFBVTtNQUNoQjs7O01BR0E7UUFDRSx5QkFBeUI7TUFDM0I7TUFDQTtRQUNFLGNBQWM7TUFDaEI7O0FBRU47O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFO01BQ0ksZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxrQkFBa0I7RUFDdEI7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ob21lLXRleHQxIHtcblxuICAgIHotaW5kZXg6IDk7XG4gICAgbWluLXdpZHRoOiA0ODNweDtcbiAgICBtYXgtd2lkdGg6IDQ4M3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiA1M3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIjtcbiAgICB2aXNpYmlsaXR5OiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcztcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjByZW07XG4gICAgbWluLWhlaWdodDogMHB4O1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMHB4O1xufVxuXG4uaG9tZS10ZXh0MyB7XG5cbiAgICB6LWluZGV4OiA5O1xuICAgIG1pbi13aWR0aDogNDgzcHg7XG4gICAgbWF4LXdpZHRoOiA0ODNweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogNTAwJTtcbiAgICBsaW5lLWhlaWdodDogNTNweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCI7XG4gICAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwcHg7XG59XG5cbi5ob21lLXRleHQyIHtcblxuICAgIHotaW5kZXg6IDEwO1xuICAgIG1pbi13aWR0aDogNDgycHg7XG4gICAgbWF4LXdpZHRoOiA0ODJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIjtcbiAgICB2aXNpYmlsaXR5OiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcztcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDBweDtcblxufVxuXG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDNmciA7XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xuXG59XG5cbi5tYWluLWhvbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbi5tYWluLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBmb250LWZhbWlseTogXCJQVCBTZXJpZlwiO1xuICAgIHdpZHRoOiAyNnZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIFxufVxuLmltZy1yZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLmFwcC1saW5rIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLmltYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xufVxuLmxhZHkxIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4uc3ViLXBhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmU2ZTc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1mYW1pbHk6ICdQVCBTZXJpZicsIEFyaWFsLCBIZWx2ZXRpY2EsICdOaW1idXMgU2FucyBMJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgXG59XG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LWZhbWlseTogJ1BUIFNlcmlmJywgQXJpYWwsIEhlbHZldGljYSwgJ05pbWJ1cyBTYW5zIEwnLCBzYW5zLXNlcmlmOztcbn1cbiAubW9iaWxlLXNjcmVlbiB7XG4gICBkaXNwbGF5OiBub25lO1xuICAgbWFyZ2luOiAwO1xuICAgcGFkZGluZzogMDtcbiB9XG5cbiNzdWItcGFnZS10ZXh0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDcwMG1zO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgYm91bmNlSW57XG4gICAgMCV7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICB9XG4gICAgNTAle1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgICA4MCV7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg5KTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICB9XG4gIH1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5tb2JpbGUtc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBcbiAgICAubWFpbi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUFQgU2VyaWZcIjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICBncmlkLWNvbHVtbjogMi8yO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIFxuICAgIH1cbiAgICAuYXBwLWxpbmsge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIFxuICAgIH1cbiAgICAuaG9tZS10ZXh0MSB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmhvbWUtdGV4dDIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmltZy1yZXN7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICAgIH1cbiAgICAgIC5mYWRlIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgQGtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxuICAgICAgICB0byB7b3BhY2l0eTogMX1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICAuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3MTtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtc2NyZWVue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiB0byBiZSBmaXhlZCBtb3JlICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLm1haW4tdGV4dCB7XG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNlcmlmXCI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgIGdyaWQtY29sdW1uOiAyLzI7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaW1hZ2VzMXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBhdXRvOyBcbiAgICBoZWlnaHQ6IGF1dG87IFxuICAgIHRleHQtYWxpZ246Y2VudGVyOyBcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgfVxuICAubWFpbi1ob21lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 28, vars: 0, consts: [[1, "projects"], [1, "heading"], ["href", "https://github.com/manmeetskalra"], ["src", "assets/images/github.png", "alt", "githubicon", 1, "lady1", "fade", 2, "border-radius", "10%", "width", "2.5%"], ["height", "10", "width", "350"], ["x1", "0", "y1", "0", "x2", "500", "y2", "0", 2, "stroke", "rgb(255, 255, 255)", "stroke-width", "5"], [1, "container"], [1, "left-margin"], [1, "images"], ["src", "assets/images/boston-housing.png", "alt", "smartownicon", 1, "lady1", "fade"], [1, "main-text"], [2, "color", "black"], [1, "home-text1"], ["src", "assets/images/Puck-puzzle.png", "alt", "smartownicon", 1, "lady1", "fade", 2, "height", "500px"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "I was able to develop and evaluate performance and predictive power of supervised regressor model using Python libraries like NumPy, Panda, Scikit-Learn, Matplotlib to help real estate agents to predict value for houses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "I was able to develop a mathematical game in group 3, using Html, CSS and JavaScript to give game attractive and user-friendly experience. I was also responsible for testing all possible input combination and implement direct buttons to solve complex states.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".projects[_ngcontent-%COMP%] {\n    padding-top: 5rem;\n    background-color: black;\n    padding-bottom: 5rem;\n}\n.heading[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: \"PT Sans\";\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-size: 350%;\n    line-height: 35px;\n}\n.container[_ngcontent-%COMP%] {\n    height: 100%; \n    display: grid;\n    grid-template-columns:1fr 3fr 3fr 0.5fr;\n    padding-top: 10rem;\n\n}\n.lady1[_ngcontent-%COMP%] {\n    width: 70%;\n    position: relative;\n    z-index: 0;\n}\n.images[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    max-width: none;\n    transition: none 0s ease 0s;\n    text-align: center;\n}\n.main-text[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    font-family: \"PT Serif\";\n    text-align: center;\n    line-height: normal;    \n}\n.home-text1[_ngcontent-%COMP%] {\n\n    z-index: 9;\n    white-space: normal;\n    font-size: 150%;\n    line-height: normal;\n    font-weight: 400;\n    color: rgb(255, 255, 255);\n    letter-spacing: 0px;\n    font-family: \"PT Sans\";\n    visibility: inherit;\n    transition: none 0s ease 0s;\n    text-align: inherit;\n    border-width: 0px;\n    margin: 0px;\n    padding:0rem;\n    min-height: 0px;\n    max-height: none;\n    opacity: 1;\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform-origin: 50% 50% 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUVBQW1FO0lBQ25FLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHMge1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xufVxuLmhlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IDM1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAzZnIgM2ZyIDAuNWZyO1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcblxufVxuLmxhZHkxIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuLmltYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4tdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBmb250LWZhbWlseTogXCJQVCBTZXJpZlwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsOyAgICBcbn1cbi5ob21lLXRleHQxIHtcblxuICAgIHotaW5kZXg6IDk7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCI7XG4gICAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOjByZW07XG4gICAgbWluLWhlaWdodDogMHB4O1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 11, vars: 0, consts: [[1, "resume"], [1, "heading"], ["height", "10", "width", "300"], ["x1", "0", "y1", "0", "x2", "500", "y2", "0", 2, "stroke", "rgb(0,0,0)", "stroke-width", "5"], [1, "container"], [1, "left-margin"], [1, "images"], ["src", "assets/images/resume.png", "alt", "smartownicon", 1, "lady1", "fade"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "line", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".resume[_ngcontent-%COMP%] {\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n\n}\n.heading[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: \"PT Sans\";\n    color: #000;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-size: 350%;\n    line-height: 35px;\n}\n.container[_ngcontent-%COMP%] {\n    height: 100%; \n    display: grid;\n    grid-template-columns:1fr 3fr 1fr;\n    padding-top: 5vw;\n    padding-bottom: 5vw;\n\n}\n.lady1[_ngcontent-%COMP%] {\n    width: 70%;\n    position: relative;\n    z-index: 0;\n    box-shadow: 2px 2px 2px 2px;\n}\n.images[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    max-width: none;\n    transition: none 0s ease 0s;\n    text-align: center;\n    \n}\n.main-text[_ngcontent-%COMP%] {\n    margin-bottom: 3rem;\n    font-family: \"PT Serif\";\n    text-align: center;\n    line-height: normal;\n    margin-right: 10rem;\n    \n}\n.home-text1[_ngcontent-%COMP%] {\n\n    z-index: 9;\n    white-space: normal;\n    font-size: 150%;\n    line-height: normal;\n    font-weight: 400;\n    color: rgb(0, 0, 0);\n    letter-spacing: 0px;\n    font-family: \"PT Sans\";\n    visibility: inherit;\n    transition: none 0s ease 0s;\n    text-align: inherit;\n    border-width: 0px;\n    margin: 0px;\n    padding:0rem;\n    min-height: 0px;\n    max-height: none;\n    opacity: 1;\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform-origin: 50% 50% 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjs7QUFFeEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isa0JBQWtCOztBQUV0QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjs7QUFFdkI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLG1FQUFtRTtJQUNuRSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcblxufVxuLmhlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCI7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMzUwJTtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbn1cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDNmciAxZnI7XG4gICAgcGFkZGluZy10b3A6IDV2dztcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xuXG59XG4ubGFkeTEge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4O1xufVxuLmltYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cblxuLm1haW4tdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBmb250LWZhbWlseTogXCJQVCBTZXJpZlwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbi1yaWdodDogMTByZW07XG4gICAgXG59XG4uaG9tZS10ZXh0MSB7XG5cbiAgICB6LWluZGV4OiA5O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiO1xuICAgIHZpc2liaWxpdHk6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzowcmVtO1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 16, vars: 0, consts: [[1, "work-experience"], [1, "heading"], ["height", "10", "width", "500"], ["x1", "0", "y1", "0", "x2", "2000", "y2", "0", 2, "stroke", "rgb(0,0,0)", "stroke-width", "5"], [1, "container"], [1, "left-margin"], [1, "main-text"], [2, "color", "black"], [1, "home-text1"], [1, "images"], ["src", "assets/images/smartownicon.jpg", "alt", "smartownicon", 1, "lady1", "fade"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "line", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "As a Software Engineer Intern at SmartOwn, I gained exposure to the Agile Software Development Lifecycle and contributing extensively at design, development, testing and deployment stages. In addition to maintaining and improving the health of existing production code, I developed 3 new user-facing features that are responsive for all platforms and ensured the technical feasibility of UI/UX designs using Sass, Bootstrap and Angular. These features bind data to specific views and synchronize data with server using HTTP Service calls. Along with building high-quality reusable code, I used Amazon Elastic Load Balancer to increase capacity and reliability of application. I also gained hands on experience in containerized application deployment in cloud using Docker technology.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".heading[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: \"PT Sans\";\n    color: #000;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-size: 350%;\n    line-height: 35px;\n}\n.container[_ngcontent-%COMP%] {\n    height: 100%; \n    display: grid;\n    grid-template-columns:1fr 3fr 2fr 0.5fr;\n    padding-top: 10rem;\n    padding-bottom: 5vw;\n\n}\n.lady1[_ngcontent-%COMP%] {\n    width: 70%;\n    position: relative;\n    z-index: 0;\n}\n.images[_ngcontent-%COMP%] {\n    margin-top: 0rem;\n    max-width: none;\n    transition: none 0s ease 0s;\n}\nimg[_ngcontent-%COMP%] {\n    border-radius: 50%;\n}\n.main-text[_ngcontent-%COMP%] {\n    margin-bottom: 3rem;\n    font-family: \"PT Serif\";\n    text-align: center;\n    line-height: normal;\n    margin-right: 10rem;\n    \n}\n.home-text1[_ngcontent-%COMP%] {\n\n    z-index: 9;\n    white-space: normal;\n    font-size: 150%;\n    line-height: normal;\n    font-weight: 400;\n    color: rgb(0, 0, 0);\n    letter-spacing: 0px;\n    font-family: \"PT Sans\";\n    visibility: inherit;\n    transition: none 0s ease 0s;\n    text-align: inherit;\n    border-width: 0px;\n    margin: 0px;\n    padding:0rem;\n    min-height: 0px;\n    max-height: none;\n    opacity: 1;\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    transform-origin: 50% 50% 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjs7QUFFdkI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLG1FQUFtRTtJQUNuRSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IDM1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAzZnIgMmZyIDAuNWZyO1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xuXG59XG4ubGFkeTEge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG4uaW1hZ2VzIHtcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7XG59XG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluLXRleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUFQgU2VyaWZcIjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcmVtO1xuICAgIFxufVxuLmhvbWUtdGV4dDEge1xuXG4gICAgei1pbmRleDogOTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIjtcbiAgICB2aXNpYmlsaXR5OiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcztcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6MHJlbTtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css']
            }]
    }], function () { return []; }, null); })();


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

module.exports = __webpack_require__(/*! /Users/manme/manmeetskalra.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map