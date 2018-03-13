webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootViewCoverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootViewCoverService = (function () {
    function RootViewCoverService() {
        this.rootViewCover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    RootViewCoverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RootViewCoverService);
    return RootViewCoverService;
}());

//# sourceMappingURL=eventEmitService.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__discoverMusic_discoverMusic_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myMusic_myMusic_component__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by luwenwei on 18/3/10.
 */



var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__discoverMusic_discoverMusic_component__["a" /* DiscoverMusicPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__myMusic_myMusic_component__["a" /* MyMusicPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tabMain',template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/tabs/tabs.html"*/'<ion-tabs name="rootTabs">\n    <ion-tab [root]="tab1Root" tabTitle="发现音乐" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="我的音乐" tabIcon="ios-musical-notes-outline"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverMusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_httpService__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_eventEmitService__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by luwenwei on 18/3/10.
 */





var DiscoverMusicPage = (function () {
    function DiscoverMusicPage(http, rootViewCoverService) {
        this.http = http;
        this.rootViewCoverService = rootViewCoverService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__root__["a" /* DiscoverRootPage */];
        this.http = http;
    }
    DiscoverMusicPage.prototype.ngOnInit = function () {
        var _this = this;
        this.rootViewCoverService.rootViewCover.subscribe(function (component) {
            _this.currentViewFade(component);
        }); /*订阅覆盖当前组件事件，该服务必须是单例*/
        var loginPromise = this.http.getData({ url: "login/cellphone/", params: { phone: "18649685236", password: "1314520ZY" } });
        loginPromise.then(function () { }).catch(function (e) { console.error(e); });
    };
    DiscoverMusicPage.prototype.currentViewFade = function (component) {
        this.nav.push(component); /*component组件会覆盖当前跟组件*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('discoverMusicNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */])
    ], DiscoverMusicPage.prototype, "nav", void 0);
    DiscoverMusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'discover-music',template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/discoverMusic.html"*/'<ion-nav #discoverMusicNav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/discoverMusic.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_httpService__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_httpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__provider_eventEmitService__["a" /* RootViewCoverService */]])
    ], DiscoverMusicPage);
    return DiscoverMusicPage;
}());

//# sourceMappingURL=discoverMusic.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverRootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_music_music_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_radio_radio_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_videos_videos_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_httpService__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by luwenwei on 18/3/12.
 */






var DiscoverRootPage = (function () {
    function DiscoverRootPage(nav, http) {
        this.nav = nav;
        this.http = http;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.musicTab = __WEBPACK_IMPORTED_MODULE_1__tabs_music_music_component__["a" /* MusicPage */];
        this.hobbyTab = __WEBPACK_IMPORTED_MODULE_3__tabs_videos_videos_component__["a" /* VideosPage */];
        this.radioTab = __WEBPACK_IMPORTED_MODULE_2__tabs_radio_radio_component__["a" /* RadioPage */];
        this.http = http;
    }
    DiscoverRootPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/root.html"*/'<ion-header>\n    <div class="header" style="height: 65px;padding: 25px 10px 10px;box-sizing:border-box;background: #d43c33;width: 100%;display: flex;justify-content: space-between;align-items:center">\n        <div>\n            <ion-icon style="font-size: 30px;color: #ffffff;" text-left name="ios-microphone-outline"></ion-icon>\n        </div>\n        <div style="background: #ffffff;text-align: center;flex:1;border-radius: 15px;color:#969696;margin: 0 15px;padding: 7px 0">\n            <ion-icon name="search" style="font-size: 18px"></ion-icon>\n            <span>搜索音乐, 视频, 电台</span>\n        </div>\n        <div>\n            <ion-icon style="font-size: 35px;color: #ffffff;" name="list"></ion-icon>\n        </div>\n    </div>\n</ion-header>\n<ion-content>\n    <ion-tabs tabsPlacement="top" name="discoverMusicTabs">\n        <ion-tab [root]="musicTab" tabTitle="音乐"></ion-tab>\n        <ion-tab [root]="hobbyTab" tabTitle="视频"></ion-tab>\n        <ion-tab [root]="radioTab" tabTitle="电台"></ion-tab>\n    </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/root.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_httpService__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_httpService__["a" /* HttpService */]])
    ], DiscoverRootPage);
    return DiscoverRootPage;
}());

//# sourceMappingURL=root.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_httpService__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__moreMusicList_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_eventEmitService__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by luwenwei on 18/3/10.
 */





var MusicPage = (function () {
    function MusicPage(nav, appCtrl, viewCtrl, http, rootViewCoverService) {
        this.nav = nav;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.rootViewCoverService = rootViewCoverService;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.banners = [];
        this.introMusicList = [];
        this.singlePlayList = [];
        this.http = http;
    }
    MusicPage.prototype.ngOnInit = function () {
        var bannersPromise = this.http.getData({ url: "banner" });
        bannersPromise.then(function (res) {
            this.banners = res.banners;
        }.bind(this)).catch(function (e) { console.error(e); });
        var recommendPromise = this.http.getData({ url: "recommend/resource" });
        recommendPromise.then(function (res) {
            this.introMusicList = res.recommend;
        }.bind(this)).catch(function (e) { console.error(e); });
        var singlePlayPromise = this.http.getData({ url: "personalized/privatecontent" });
        singlePlayPromise.then(function (res) {
            this.singlePlayList = res.result;
        }.bind(this)).catch(function (e) { console.error(e); });
    };
    MusicPage.prototype.checkMoreMusicList = function () {
        this.rootViewCoverService.rootViewCover.emit(__WEBPACK_IMPORTED_MODULE_3__moreMusicList_component__["a" /* MoreMusicListPage */]);
    };
    MusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'music',template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/tabs/music/music.html"*/'<ion-content class="custom-view">\n    <ion-slides loop="true" pager autoplay="2000" style="width:100%;height:130px" *ngIf="banners.length">\n        <ion-slide style="width:100%;height:130px" *ngFor="let banner of banners">\n            <img [src]="banner.pic" style="width: 100%;height: 130px;"/>\n        </ion-slide>\n    </ion-slides>\n    <div class="intro-list">\n        <div class="intro-item">\n            <span class="intro-icon">\n                <ion-icon name="md-radio"></ion-icon>\n            </span>\n            <span class="intro-text">私人FM</span>\n        </div>\n        <div class="intro-item">\n            <span class="intro-icon">\n                <ion-icon name="md-calendar"></ion-icon>\n            </span>\n            <span class="intro-text">每日推荐</span>\n        </div>\n        <div class="intro-item">\n            <span class="intro-icon">\n                <ion-icon name="ios-musical-notes-outline"></ion-icon>\n            </span>\n            <span class="intro-text">歌单</span>\n        </div>\n        <div class="intro-item">\n            <span class="intro-icon">\n                <ion-icon name="list"></ion-icon>\n            </span>\n            <span class="intro-text">排行榜</span>\n        </div>\n    </div>\n    <div class="intro-music-list">\n        <header class="block-header" (click)="checkMoreMusicList()">\n            <span class="l-red"></span>\n            <span class="block-title">推荐歌单</span>\n            <span class="left-direct"></span>\n        </header>\n        <section class="music-list-content">\n            <div *ngFor="let list of introMusicList;let $index=index" class="square-list-item" [ngClass]="{\'noMarginRight\': ($index+1) % 2 == 0}" style="width: calc((100% - 4px) / 2);">\n                <img [src]="list.picUrl" style="width: 100%;height: 100%;"/>\n                <span class="square-list-item-des">{{list.name}}</span>\n                <div class="play-count">\n                    <ion-icon name="ios-headset-outline"></ion-icon>\n                    <span>{{list.playcount | splitThousand}}</span>\n                </div>\n            </div>\n        </section>\n    </div>\n    <div class="intro-music-list">\n        <header class="block-header">\n            <span class="l-red"></span>\n            <span class="block-title">独家放送</span>\n            <span class="left-direct"></span>\n        </header>\n        <section class="music-list-content">\n            <div class="square-list-item" *ngFor="let list of singlePlayList;let $index=index" [ngClass]="{\'noMarginRight\': ($index+1) % 2 == 0}" style="width: calc((100% - 4px) / 2);">\n                <ng-container *ngIf="$index < 2">\n                    <img [src]="list.sPicUrl" style="width: 100%;height: 100%;"/>\n                    <span class="square-list-item-des">{{list.name}}</span>\n                </ng-container>\n            </div>\n            <div *ngFor="let list of singlePlayList;let $index=index">\n                <ng-container *ngIf="$index == 2">\n                    <img [src]="list.picUrl" style="width: 100%;"/>\n                    <span class="square-list-item-des">{{list.name}}</span>\n                </ng-container>\n            </div>\n        </section>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/tabs/music/music.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_httpService__["a" /* HttpService */]],
            styleUrls: ['/music.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__provider_eventEmitService__["a" /* RootViewCoverService */]])
    ], MusicPage);
    return MusicPage;
}());

//# sourceMappingURL=music.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreMusicListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_httpService__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoreMusicListPage = (function () {
    function MoreMusicListPage(loadingCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.introMusicList = [];
        this.allMusicList = [];
        this.currentPage = 0;
        this.btnTitle = "全部歌单";
    }
    MoreMusicListPage.prototype.ngOnInit = function () {
        this.musicListNav.setBackButtonText("");
        this.loadMusicList();
    };
    MoreMusicListPage.prototype.changeMusicType = function (type) {
        this.btnTitle = type;
    };
    MoreMusicListPage.prototype.loadMusicList = function () {
        var loading = this.loadingCtrl.create({
            content: '正在加载歌单...',
            duration: 10000,
        });
        loading.present();
        var musicListPromise = this.http.getData({ url: "personalized", params: { limit: "100" } });
        musicListPromise.then(function (res) {
            this.allMusicList = res.result;
            this.getPage(this.currentPage);
            loading.dismiss();
        }.bind(this));
    };
    MoreMusicListPage.prototype.getPage = function (page) {
        if (page === void 0) { page = 0; }
        var start = page, end;
        if (page !== 0) {
            start += 1;
        }
        end = start + 10;
        if (page === 9)
            return this.infiniteScroll.enable(false);
        this.introMusicList = this.introMusicList.concat(this.allMusicList.slice(start, end));
        if (this.infiniteScroll)
            this.infiniteScroll.complete();
        if (page === 9)
            this.infiniteScroll.enable(false);
    };
    MoreMusicListPage.prototype.loadMoreMusicList = function (infiniteScroll) {
        var _this = this;
        if (this.currentPage === 9)
            return;
        if (!this.infiniteScroll)
            this.infiniteScroll = infiniteScroll;
        ++this.currentPage;
        setTimeout(function () {
            _this.getPage(_this.currentPage);
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('musicListNav'),
        __metadata("design:type", Object)
    ], MoreMusicListPage.prototype, "musicListNav", void 0);
    MoreMusicListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/tabs/music/moreMusicList.html"*/'<ion-header style="border-bottom: none" class="more-music-list-header">\n    <ion-navbar #musicListNav>\n        <ion-title>\n            歌单\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="openModal()">\n                <ion-icon name="list" style="font-size: 35px;color: #ffffff;"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="high-quality-music-list">\n        <div class="img">\n            <img src="http://p3.music.126.net/24fqC-mF6U_ZA3KQWiusqA==/3265549538017736.jpg" />\n        </div>\n        <div class="description">\n            <p class="title">\n                精品歌单\n                <ion-icon name="ios-arrow-forward-outline" style="color: #ffffff;opacity: 0.5;vertical-align: text-bottom"></ion-icon>\n            </p>\n            <p class="desc-p">【再见乌托邦】中国大陆摇滚的崛起之路</p>\n            <p class="sm-title">中国大陆2000年之前发表的摇滚经典大盘点</p>\n        </div>\n    </div>\n    <div class="all-music-list">\n        <div class="all-btn">\n            <button class="check-all-list">\n                <span style="margin-right: 5px;font-size: 14px">{{btnTitle}}</span>\n                <ion-icon name="ios-arrow-forward-outline" style="color: #969696;font-size: 16px;vertical-align: text-bottom"></ion-icon>\n            </button>\n        </div>\n        <div class="title-select">\n            <span (click)="changeMusicType(\'欧美\')">欧美</span>\n            <span (click)="changeMusicType(\'影视原生\')">影视原生</span>\n            <span (click)="changeMusicType(\'轻音乐\')">轻音乐</span>\n        </div>\n    </div>\n    <section class="music-list-content">\n        <div *ngFor="let list of introMusicList;let $index=index" class="square-list-item" [ngClass]="{\'noMarginRight\': ($index+1) % 2 == 0}" style="width: calc((100% - 4px) / 2);">\n            <img [src]="list.picUrl" style="width: 100%;height: 100%;"/>\n            <span class="square-list-item-des">{{list.name}}</span>\n            <div class="play-count">\n                <ion-icon name="ios-headset-outline"></ion-icon>\n                <span>{{list.playCount | splitThousand}}</span>\n            </div>\n        </div>\n    </section>\n    <ion-infinite-scroll (ionInfinite)="loadMoreMusicList($event)">\n        <ion-infinite-scroll-content loadingText="加载中..." threshold="10px">\n\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/tabs/music/moreMusicList.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_httpService__["a" /* HttpService */]) === "function" && _b || Object])
    ], MoreMusicListPage);
    return MoreMusicListPage;
    var _a, _b;
}());

//# sourceMappingURL=moreMusicList.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by luwenwei on 18/3/10.
 */

var RadioPage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function RadioPage() {
    }
    RadioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'radio',template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/tabs/radio/radio.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content padding>\n    <h3>radio</h3>\n</ion-content>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/tabs/radio/radio.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RadioPage);
    return RadioPage;
}());

//# sourceMappingURL=radio.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by luwenwei on 18/3/10.
 */

var VideosPage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function VideosPage() {
    }
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'videos',template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/tabs/videos/videos.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content padding>\n    <h3>{{12345 | splitThousand}}</h3>\n</ion-content>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/discoverMusic/tabs/videos/videos.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyMusicPage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function MyMusicPage() {
    }
    MyMusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'myMusic',template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/myMusic/myMusic.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content padding>\n    <h3>radio</h3>\n</ion-content>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/pages/myMusic/myMusic.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyMusicPage);
    return MyMusicPage;
}());

//# sourceMappingURL=myMusic.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_pipes__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipes_pipes__["a" /* SplitThousandPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipes_pipes__["a" /* SplitThousandPipe */]]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=sharedModule.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs_module__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs_module__["a" /* TabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs_component__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs_component__["a" /* TabsPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/app/app.html"*/'<!--<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>-->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_discoverMusic_discoverMusic_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myMusic_myMusic_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_component__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__pages_discoverMusic_discoverMusic_module__["a" /* DiscoverMusicModule */], __WEBPACK_IMPORTED_MODULE_3__pages_myMusic_myMusic_module__["a" /* MyMusicModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__tabs_component__["a" /* TabsPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__tabs_component__["a" /* TabsPage */]] /*入口组件*/
        })
    ], TabsModule);
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverMusicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_music_music_module__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_radio_radio_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_videos_video_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discoverMusic_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__provider_eventEmitService__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DiscoverMusicModule = (function () {
    function DiscoverMusicModule() {
    }
    DiscoverMusicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__discoverMusic_component__["a" /* DiscoverMusicPage */], __WEBPACK_IMPORTED_MODULE_5__root__["a" /* DiscoverRootPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__discoverMusic_component__["a" /* DiscoverMusicPage */], __WEBPACK_IMPORTED_MODULE_5__root__["a" /* DiscoverRootPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__tabs_music_music_module__["a" /* MusicModule */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__tabs_radio_radio_module__["a" /* RadioModule */], __WEBPACK_IMPORTED_MODULE_3__tabs_videos_video_module__["a" /* VideoModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__provider_eventEmitService__["a" /* RootViewCoverService */]] /*让服务成为单例模式，服务于本模块下的所有组件*/
        })
    ], DiscoverMusicModule);
    return DiscoverMusicModule;
}());

//# sourceMappingURL=discoverMusic.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedModule_sharedModule__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__moreMusicList_component__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MusicModule = (function () {
    function MusicModule() {
    }
    MusicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__music_component__["a" /* MusicPage */], __WEBPACK_IMPORTED_MODULE_4__moreMusicList_component__["a" /* MoreMusicListPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__music_component__["a" /* MusicPage */], __WEBPACK_IMPORTED_MODULE_4__moreMusicList_component__["a" /* MoreMusicListPage */]] /*入口组件*/,
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_1__sharedModule_sharedModule__["a" /* SharedModule */]]
        })
    ], MusicModule);
    return MusicModule;
}());

//# sourceMappingURL=music.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitThousandPipe; });
/* unused harmony export SafeHtmlPipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by luwenwe on 2017/7/19.
 */


// 管道装师符 ， name就是管道名称
var SplitThousandPipe = (function () {
    function SplitThousandPipe() {
    }
    // value : 就是传入的值
    // ...args : 参数集合(用了...拓展符),会把数组内的值依次作为参数传入
    // ...args可以改成我们常规的写法(value:any,start:number,end:number)
    SplitThousandPipe.prototype.transform = function (input) {
        return Math.ceil(input / 10000) + "万";
    };
    SplitThousandPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'splitThousand'
        })
    ], SplitThousandPipe);
    return SplitThousandPipe;
}());

var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__radio_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { SplitThousandPipe } from '../../../../pipes/pipes';


var RadioModule = (function () {
    function RadioModule() {
    }
    RadioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__radio_component__["a" /* RadioPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__radio_component__["a" /* RadioPage */]] /*入口组件*/,
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]]
        })
    ], RadioModule);
    return RadioModule;
}());

//# sourceMappingURL=radio.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedModule_sharedModule__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VideoModule = (function () {
    function VideoModule() {
    }
    VideoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__videos_component__["a" /* VideosPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__videos_component__["a" /* VideosPage */]] /*入口组件*/,
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_1__sharedModule_sharedModule__["a" /* SharedModule */]]
        })
    ], VideoModule);
    return VideoModule;
}());

//# sourceMappingURL=video.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMusicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myMusic_component__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyMusicModule = (function () {
    function MyMusicModule() {
    }
    MyMusicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__myMusic_component__["a" /* MyMusicPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__myMusic_component__["a" /* MyMusicPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]]
        })
    ], MyMusicModule);
    return MyMusicModule;
}());

//# sourceMappingURL=myMusic.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by luwenwei on 18/3/11.
 */



var apifiex = "http://192.168.10.181:8101/";
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getData = function (options) {
        return this.http.get(apifiex + options.url, { params: options.params, withCredentials: true }).toPromise();
    };
    HttpService.prototype.postData = function (options) {
        return this.http.post(apifiex + options.url, { data: options.data }).toPromise();
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])() //标识一个类可以被注入器实例化
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=httpService.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map