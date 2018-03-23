webpackJsonp([19],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/playMusic/playMusic.module": [
		284,
		18
	],
	"../pages/account/account.module": [
		285,
		17
	],
	"../pages/discoverMusic/children/music/allMusicType/allMusicType.module": [
		286,
		16
	],
	"../pages/discoverMusic/children/music/everyDayRecommendMusic/everyDayRecommendMusic.module": [
		287,
		15
	],
	"../pages/discoverMusic/children/music/highqualityMusicList/highqualityMusic.module": [
		288,
		0
	],
	"../pages/discoverMusic/children/music/moreMusicList/moreMusicList.module": [
		289,
		14
	],
	"../pages/discoverMusic/children/music/moreSinglePlay/moreSinglePlay.module": [
		290,
		13
	],
	"../pages/discoverMusic/children/music/music.module": [
		292,
		12
	],
	"../pages/discoverMusic/children/music/personalFm/personalFm.module": [
		291,
		11
	],
	"../pages/discoverMusic/children/music/rankingList/rankingList.module": [
		293,
		10
	],
	"../pages/discoverMusic/children/music/rankingListDetail/rankingListDetail.module": [
		294,
		9
	],
	"../pages/discoverMusic/children/music/recommendMusicListDetail/recommendMusicListDetail.module": [
		295,
		8
	],
	"../pages/discoverMusic/children/videos/videos.module": [
		297,
		7
	],
	"../pages/discoverMusic/discoverMusic.module": [
		296,
		6
	],
	"../pages/discoverMusic/search/search.module": [
		298,
		5
	],
	"../pages/login/login.module": [
		299,
		4
	],
	"../pages/login/telLogin/telLogin.module": [
		301,
		3
	],
	"../pages/myMusic/myMusic.module": [
		302,
		2
	],
	"../pages/tabs/tabs.module": [
		300,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(254);
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



var apifiex = "http://192.168.10.198:8101/";
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

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_pipes__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_audioPlayer_audioPlayer__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_headerSearch_headerSearch__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipes_pipes__["b" /* SplitThousandPipe */], __WEBPACK_IMPORTED_MODULE_1__pipes_pipes__["a" /* SafeHtmlPipe */], __WEBPACK_IMPORTED_MODULE_2__components_audioPlayer_audioPlayer__["a" /* AudioPlayerComponent */], __WEBPACK_IMPORTED_MODULE_3__components_headerSearch_headerSearch__["a" /* HeaderSearchComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipes_pipes__["b" /* SplitThousandPipe */], __WEBPACK_IMPORTED_MODULE_1__pipes_pipes__["a" /* SafeHtmlPipe */], __WEBPACK_IMPORTED_MODULE_2__components_audioPlayer_audioPlayer__["a" /* AudioPlayerComponent */], __WEBPACK_IMPORTED_MODULE_3__components_headerSearch_headerSearch__["a" /* HeaderSearchComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */]]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

//# sourceMappingURL=sharedModule.js.map

/***/ }),

/***/ 201:
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
        this.globalRootViewCover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    RootViewCoverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RootViewCoverService);
    return RootViewCoverService;
}());

//# sourceMappingURL=eventEmitService.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_discoverMusic_provider_eventEmitService__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_authService__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sharedModule_sharedModule__ = __webpack_require__(200);
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
                __WEBPACK_IMPORTED_MODULE_4__app__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__sharedModule_sharedModule__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/playMusic/playMusic.module#PlayMusicModule', name: 'play-music-page', segment: 'playMusic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#MusicModule', name: 'account-page', segment: 'account-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discoverMusic/children/music/allMusicType/allMusicType.module#AllMusicTypeModule', name: 'all-music-type-page', segment: 'allMusicType', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discoverMusic/children/music/everyDayRecommendMusic/everyDayRecommendMusic.module#EveryDayRecommendMusicModule', name: 'day-rcmd-music-page', segment: 'everyDayRecommendMusic', priority: 'low', defaultHistory: ['discover-music-page'] },
                        { loadChildren: '../pages/discoverMusic/children/music/highqualityMusicList/highqualityMusic.module#HighqualityMusicModule', name: 'highquality-music-page', segment: 'highqualityMusic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discoverMusic/children/music/moreMusicList/moreMusicList.module#MoreMusicListPageModule', name: 'more-music-list', segment: 'more-music-list', priority: 'low', defaultHistory: ['discover-music-page', 'd-music-page'] },
                        { loadChildren: '../pages/discoverMusic/children/music/moreSinglePlay/moreSinglePlay.module#MoreSinglePlayModule', name: 'more-single-play-page', segment: 'moreSinglePlay', priority: 'low', defaultHistory: ['discover-music-page'] },
                        { loadChildren: '../pages/discoverMusic/children/music/personalFm/personalFm.module#PersonalFmModule', name: 'personal-fm-page', segment: 'personalFm', priority: 'low', defaultHistory: ['discover-music-page'] },
                        { loadChildren: '../pages/discoverMusic/children/music/music.module#MusicModule', name: 'd-music-page', segment: 'd-music-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discoverMusic/children/music/rankingList/rankingList.module#RankingListModule', name: 'ranking-list-page', segment: 'ranking-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discoverMusic/children/music/rankingListDetail/rankingListDetail.module#RankingListDetailModule', name: 'ranking-list-detail-page', segment: 'ranking-list-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discoverMusic/children/music/recommendMusicListDetail/recommendMusicListDetail.module#RecommendMusicListDetailModule', name: 'recd-music-list-page', segment: 'recommendMusicListDetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discoverMusic/discoverMusic.module#DiscoverMusicModule', name: 'discover-music-page', segment: 'discover-music-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discoverMusic/children/videos/videos.module#VideosModule', name: 'videos-page', segment: 'videos-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/discoverMusic/search/search.module#SearchModule', name: 'search-page', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'login-page', segment: 'login-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsModule', name: 'tabs-page', segment: 'tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/telLogin/telLogin.module#TelLoginModule', name: 'tel-login', segment: 'telLogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myMusic/myMusic.module#MyMusicModule', name: 'my-music', segment: 'myMusic', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__pages_discoverMusic_provider_eventEmitService__["a" /* RootViewCoverService */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__providers_authService__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_9__sharedModule_sharedModule__["a" /* SharedModule */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SplitThousandPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
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

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerComponent; });
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

var AudioPlayerComponent = (function () {
    function AudioPlayerComponent(cdRef) {
        this.cdRef = cdRef;
        this.switchMusic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.changePlayStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.playProgress = 0;
        this.isPlaying = false;
        this.setMusicTime = function (time) {
            if (isNaN(time))
                return;
            time = Math.floor(time);
            var minutePart, secondPart;
            if (time >= 60) {
                var m = Math.floor(time / 60); /*取出分钟数*/
                var s = time % 60;
                m >= 10 ? minutePart = m : minutePart = '0' + m;
                s >= 10 ? secondPart = s : secondPart = '0' + s;
            }
            else {
                minutePart = '00';
                time >= 10 ? secondPart = minutePart : secondPart = '0' + minutePart;
            }
            this.musicTotalTime = minutePart + ":" + secondPart;
        };
        this.setPlayProgress = this.setPlayProgress.bind(this); /*这样待会才能移除事件监听*/
    }
    AudioPlayerComponent.prototype.ngOnInit = function () {
    };
    AudioPlayerComponent.prototype.ngAfterViewInit = function () {
        this.cdRef.detectChanges();
    };
    AudioPlayerComponent.prototype.ngOnChanges = function (SimpleChanges) {
        var mediaUrlPreviousValue = SimpleChanges.mediaUrl.previousValue;
        var mediaUrlCurrentValue = SimpleChanges.mediaUrl.currentValue;
        if (mediaUrlCurrentValue != mediaUrlPreviousValue) {
            this.setMediaConfig(mediaUrlCurrentValue);
        }
    };
    AudioPlayerComponent.prototype.setMediaConfig = function (mediaUrl) {
        var _this = this;
        var _audioEle = this.audioEle.nativeElement;
        _audioEle.src = mediaUrl;
        _audioEle.load();
        _audioEle.play();
        this.duration = _audioEle.duration;
        _audioEle.addEventListener('canplay', function () {
            _this.duration = _audioEle.duration;
            _this.setMusicTime(_this.duration);
        });
        this.audioEle.nativeElement.addEventListener('timeupdate', this.setPlayProgress, false);
        _audioEle.addEventListener('canplaythrough', function () {
            _this.isPlaying = true;
            _this.changePlayStatus.emit(true); /*通知父组件更改播放状态*/
        });
        _audioEle.addEventListener('ended', function () {
            _this.isPlaying = false;
            _this.changePlayStatus.emit(false);
            _this.switchMusic.emit('next'); /*切换音乐下首*/
        }); /*播放结束*/
    };
    AudioPlayerComponent.prototype.setPlayProgress = function () {
        var _audioEle = this.audioEle.nativeElement;
        var currentTime = _audioEle.currentTime; /*当前已播放的时间,单位秒*/
        var d = (currentTime / this.duration); /*当前播放时常占总时常的百分比*/
        this.playProgress = Math.floor(d * 100);
        this.setPlayedTime(currentTime);
    };
    AudioPlayerComponent.prototype.setPlayedTime = function (time) {
        if (isNaN(time))
            return;
        time = Math.floor(time);
        var minutePart, secondPart;
        if (time >= 60) {
            var m = Math.floor(time / 60); /*大于60s取出分钟数*/
            var s = time % 60; /*取出秒*/
            m >= 10 ? minutePart = m : minutePart = '0' + m;
            s >= 10 ? secondPart = s : secondPart = '0' + s;
        }
        else {
            minutePart = '00';
            time >= 10 ? secondPart = time : secondPart = '0' + time;
        }
        this.playedTime = minutePart + ":" + secondPart;
    };
    AudioPlayerComponent.prototype.rangeFocused = function (e) {
        this.audioEle.nativeElement.removeEventListener('timeupdate', this.setPlayProgress, false);
    }; /*当按下进度滚轮时去掉音乐播放时间的监听*/
    AudioPlayerComponent.prototype.rangeBlurred = function (e) {
        this.audioEle.nativeElement.currentTime = Math.ceil((this.playProgress / 100) * this.duration);
        this.audioEle.nativeElement.addEventListener('timeupdate', this.setPlayProgress, false);
    };
    AudioPlayerComponent.prototype.switchPlayStatue = function () {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
            this.audioEle.nativeElement.play();
        }
        else {
            this.audioEle.nativeElement.pause();
        }
        this.changePlayStatus.emit(this.isPlaying);
    };
    AudioPlayerComponent.prototype.changeMusic = function (type) {
        this.isPlaying = false;
        this.changePlayStatus.emit(false);
        this.switchMusic.emit(type); /*切换音乐上下首*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AudioPlayerComponent.prototype, "mediaUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('audioEle'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AudioPlayerComponent.prototype, "audioEle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AudioPlayerComponent.prototype, "switchMusic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AudioPlayerComponent.prototype, "changePlayStatus", void 0);
    AudioPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'audio-player',template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/components/audioPlayer/audioPlayer.html"*/'<div class="audio-container">\n    <audio #audioEle></audio>\n    <!--<div class="progress-line">\n        <div class="played-time">{{playedTime || \'00:00\'}}</div>\n        <div class="play-line-container">\n            <div class="play-line" #playLine id="playLine"></div>\n            <div class="played-length-line" #playedLine></div>\n            <div class="play-handle-dot" #playHandleDot >\n                <span class="dot"></span>\n            </div>\n        </div>\n        <div class="total-time">{{musicTotalTime}}</div>\n    </div>-->\n    <ion-range (ionBlur)="rangeBlurred($event)" (ionFocus)="rangeFocused($event)" [(ngModel)]="playProgress" color="danger" pin="true">\n        <ion-label range-left style="color: #ffffff;">{{playedTime || \'00:00\'}}</ion-label>\n        <ion-label range-right style="color: #ffffff;opacity: 0.6">{{musicTotalTime}}</ion-label>\n    </ion-range>\n    <div class="handle-panel">\n        <ion-icon name="ios-skip-backward-outline" (click)="changeMusic(\'previous\')"></ion-icon>\n        <div class="play-or-pause" (click)="switchPlayStatue()">\n            <ion-icon name="ios-play-outline" class="pause-icon" *ngIf="!isPlaying"></ion-icon>\n            <ion-icon name="ios-pause-outline" *ngIf="isPlaying"></ion-icon>\n        </div>\n        <ion-icon name="ios-skip-forward-outline" (click)="changeMusic(\'next\')"></ion-icon>\n    </div>\n</div>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/components/audioPlayer/audioPlayer.html"*/,
            styleUrls: ['/audioPlayer.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], AudioPlayerComponent);
    return AudioPlayerComponent;
}());

//# sourceMappingURL=audioPlayer.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderSearchComponent = (function () {
    function HeaderSearchComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HeaderSearchComponent.prototype.searchMusic = function () {
        this.navCtrl.push('search-page');
    };
    HeaderSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[header-search]',template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/components/headerSearch/headerSearch.html"*/'<ion-toolbar>\n    <ion-buttons left>\n        <button ion-button icon-only>\n            <ion-icon name="ios-microphone-outline" style="font-size: 30px;color: #ffffff;"></ion-icon>\n        </button>\n    </ion-buttons>\n    <div center\n         style="background: #ffffff;text-align: center;flex:1;border-radius: 15px;color:#969696;margin: 0 15px;padding: 6px 0"\n         (click)="searchMusic()">\n        <ion-icon name="search" style="font-size: 18px"></ion-icon>\n        <span>搜索音乐, 视频, 电台</span>\n    </div>\n    <ion-buttons right>\n        <button ion-button icon-only color="royal">\n            <ion-icon style="font-size: 35px;color: #ffffff;" name="list"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-toolbar>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/components/headerSearch/headerSearch.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HeaderSearchComponent);
    return HeaderSearchComponent;
}());

//# sourceMappingURL=headerSearch.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_httpService__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authService__ = __webpack_require__(99);
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
    function MyApp(platform, statusBar, splashScreen, http, authService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.authService = authService;
        this.rootPage = '';
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.login();
        });
    };
    MyApp.prototype.login = function () {
        var isLogin = this.authService.getLoginState();
        if (isLogin) {
            this.rootPage = 'tabs-page';
        }
        else {
            this.rootPage = 'login-page';
        }
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/luwenwe/githubProjects/cloudMusic/src/app/app.html"*/'<!--<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>-->\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/luwenwe/githubProjects/cloudMusic/src/app/app.html"*/,
            styleUrls: ['/app.scss'],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_httpService__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_httpService__["a" /* HttpService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_authService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_authService__["a" /* AuthService */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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

var AuthService = (function () {
    function AuthService() {
        this.isLogin = false;
    }
    AuthService.prototype.setLoginState = function (userMessage) {
        window.localStorage.setItem('cloudMusic', JSON.stringify(userMessage));
    };
    AuthService.prototype.getLoginState = function () {
        var _userMessage = JSON.parse(window.localStorage.getItem('cloudMusic') || '{}');
        _userMessage.isLogin ? this.isLogin = true : false;
        return this.isLogin;
    };
    AuthService.prototype.getUserMessage = function () {
        return JSON.parse(window.localStorage.getItem('cloudMusic') || '{}');
    };
    AuthService.prototype.logout = function () {
        window.localStorage.removeItem('cloudMusic');
        this.isLogin = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])() //标识一个类可以被注入器实例化
        ,
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authService.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map