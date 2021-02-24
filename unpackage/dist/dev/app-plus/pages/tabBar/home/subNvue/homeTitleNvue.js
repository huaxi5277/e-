"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************************************************!*\
  !*** D:/2021毕设/e闲置/main.js?{"page":"pages%2FtabBar%2Fhome%2FsubNvue%2FhomeTitleNvue"} ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_tabBar_home_subNvue_homeTitleNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tabBar/home/subNvue/homeTitleNvue.nvue?mpType=page */ 8);

        
        
        
        _pages_tabBar_home_subNvue_homeTitleNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_tabBar_home_subNvue_homeTitleNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/tabBar/home/subNvue/homeTitleNvue'
        _pages_tabBar_home_subNvue_homeTitleNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_tabBar_home_subNvue_homeTitleNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 3).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 4).default || __webpack_require__(/*! uni-stat-config */ 4);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-26420200313001","_inBundle":false,"_integrity":"sha512-7dPuazTiDmUyRcw+WW+UlWGKH0eeCUB+p0P4pJVKEHjpdXnXgvDQCSdJk764NH99TfsUycnuxecP5oHckVa88g==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26420200313001.tgz","_shasum":"a006e329e033cd412accfa635f8933dbb822a9c3","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"b1fdbafab5dd4673cff64188a5203d0c947e4f50","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-26420200313001"};

/***/ }),
/* 3 */
/*!*************************************************!*\
  !*** D:/2021毕设/e闲置/pages.json?{"type":"style"} ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 4 */
/*!************************************************!*\
  !*** D:/2021毕设/e闲置/pages.json?{"type":"stat"} ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":""});

/***/ }),
/* 5 */
/*!*************************************************!*\
  !*** D:/2021毕设/e闲置/main.js?{"type":"appStyle"} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 6 */
/*!*************************************************************!*\
  !*** D:/2021毕设/e闲置/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/2021毕设/e闲置/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "src": "url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')"
    },
    {
      "fontFamily": "uniicons",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url('~@/common/uni.ttf') format('truetype')"
    }
  ],
  "iconfont": {
    "fontFamily": "\"iconfont\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  },
  "iconback": {
    "content:before": "\"\\e6ef\""
  },
  "iconless": {
    "content:before": "\"\\e6f2\""
  },
  "iconmoreunfold": {
    "content:before": "\"\\e6f4\""
  },
  "iconmore1": {
    "content:before": "\"\\e6f5\""
  },
  "iconkefufenxiermaikefu": {
    "content:before": "\"\\e88d\""
  },
  "iconkefuerji": {
    "content:before": "\"\\e6f6\""
  },
  "iconkefu2": {
    "content:before": "\"\\e6f7\""
  },
  "icongouwuche2": {
    "content:before": "\"\\e6eb\""
  },
  "icongouwuche6": {
    "content:before": "\"\\e6f0\""
  },
  "iconqunfengyouhuiquan": {
    "content:before": "\"\\e7cc\""
  },
  "iconqunfengzuji": {
    "content:before": "\"\\e7fd\""
  },
  "iconhuo": {
    "content:before": "\"\\e6c8\""
  },
  "icondingdan1": {
    "content:before": "\"\\e6ce\""
  },
  "iconyouhuiquan-xuanzhong": {
    "content:before": "\"\\e6cf\""
  },
  "icontubiaozhizuomoban": {
    "content:before": "\"\\e6d0\""
  },
  "iconflag": {
    "content:before": "\"\\e7a6\""
  },
  "iconguanggaotongji": {
    "content:before": "\"\\e954\""
  },
  "iconxiadan": {
    "content:before": "\"\\e6d1\""
  },
  "iconlijixiadan": {
    "content:before": "\"\\e6d2\""
  },
  "iconkefu1": {
    "content:before": "\"\\e6dc\""
  },
  "iconzhiding": {
    "content:before": "\"\\e6dd\""
  },
  "icontuan": {
    "content:before": "\"\\e6df\""
  },
  "icongouwuche1": {
    "content:before": "\"\\e6e0\""
  },
  "iconyouhuiquan-sousuo": {
    "content:before": "\"\\e6e1\""
  },
  "iconHOT-copy": {
    "content:before": "\"\\e88a\""
  },
  "iconweixinzhifu3": {
    "content:before": "\"\\e6e2\""
  },
  "iconsaoma11": {
    "content:before": "\"\\e6e6\""
  },
  "iconloading1": {
    "content:before": "\"\\e891\""
  },
  "icongouwuchex": {
    "content:before": "\"\\e6e7\""
  },
  "icongouwuchetubiao": {
    "content:before": "\"\\e6e8\""
  },
  "iconremen": {
    "content:before": "\"\\e8c9\""
  },
  "icongouwuche4": {
    "content:before": "\"\\e6e9\""
  },
  "icongouwuche5": {
    "content:before": "\"\\e6ea\""
  },
  "iconyouhuiquan_xuanzhong": {
    "content:before": "\"\\e70a\""
  },
  "iconchexiao1": {
    "content:before": "\"\\e6aa\""
  },
  "iconcuowu": {
    "content:before": "\"\\e6ab\""
  },
  "iconzhengque": {
    "content:before": "\"\\e6ad\""
  },
  "iconsuoding": {
    "content:before": "\"\\e6ae\""
  },
  "iconkaishi": {
    "content:before": "\"\\e6b1\""
  },
  "iconwode1": {
    "content:before": "\"\\e6b3\""
  },
  "icontianjia": {
    "content:before": "\"\\e6b5\""
  },
  "iconguanzhu1": {
    "content:before": "\"\\e6b6\""
  },
  "iconzhuyi": {
    "content:before": "\"\\e6ba\""
  },
  "iconjine": {
    "content:before": "\"\\e6be\""
  },
  "iconyiwen": {
    "content:before": "\"\\e6c1\""
  },
  "iconzanting": {
    "content:before": "\"\\e6c4\""
  },
  "iconsaoma1": {
    "content:before": "\"\\e6c6\""
  },
  "iconfenlei1": {
    "content:before": "\"\\e6c7\""
  },
  "iconicon_shakehands": {
    "content:before": "\"\\ebc7\""
  },
  "iconicon_video": {
    "content:before": "\"\\ebc8\""
  },
  "iconicon_task_done": {
    "content:before": "\"\\ebc9\""
  },
  "iconicon_synergy": {
    "content:before": "\"\\ebca\""
  },
  "iconicon_workfile_line": {
    "content:before": "\"\\ebcb\""
  },
  "iconicon_addresslist_fil": {
    "content:before": "\"\\ebcc\""
  },
  "iconicon_addressbook_fil": {
    "content:before": "\"\\ebcd\""
  },
  "iconicon_calendar_fill": {
    "content:before": "\"\\ebce\""
  },
  "iconicon_delete_fill": {
    "content:before": "\"\\ebcf\""
  },
  "iconicon_doc_fill": {
    "content:before": "\"\\ebd0\""
  },
  "iconicon_camera_fill": {
    "content:before": "\"\\ebd1\""
  },
  "iconicon_certification_f": {
    "content:before": "\"\\ebd2\""
  },
  "iconicon_likegood_fill": {
    "content:before": "\"\\ebd3\""
  },
  "iconicon_gift_fill": {
    "content:before": "\"\\ebd4\""
  },
  "iconicon_message_fill": {
    "content:before": "\"\\ebd5\""
  },
  "iconicon_newapplication_": {
    "content:before": "\"\\ebd6\""
  },
  "iconicon_people_fill": {
    "content:before": "\"\\ebd7\""
  },
  "iconicon_photo_fill": {
    "content:before": "\"\\ebd8\""
  },
  "iconicon_roundreduce_fil": {
    "content:before": "\"\\ebd9\""
  },
  "iconicon_redpacket_fill": {
    "content:before": "\"\\ebda\""
  },
  "iconicon_replieslist": {
    "content:before": "\"\\ebdb\""
  },
  "iconicon_roundadd_fill": {
    "content:before": "\"\\ebdc\""
  },
  "iconicon_study_fill": {
    "content:before": "\"\\ebdd\""
  },
  "iconicon_setting_fill": {
    "content:before": "\"\\ebde\""
  },
  "iconicon_shakehands_fill": {
    "content:before": "\"\\ebdf\""
  },
  "iconicon_work_fill": {
    "content:before": "\"\\ebe0\""
  },
  "iconicon_trashcan": {
    "content:before": "\"\\ebe1\""
  },
  "iconicon_roundclose_fill": {
    "content:before": "\"\\ebe2\""
  },
  "iconicon_add": {
    "content:before": "\"\\eb8f\""
  },
  "iconicon_addmessage": {
    "content:before": "\"\\eb90\""
  },
  "iconicon_addresslist": {
    "content:before": "\"\\eb91\""
  },
  "iconicon_affiliations_li": {
    "content:before": "\"\\eb92\""
  },
  "iconicon_addperson": {
    "content:before": "\"\\eb93\""
  },
  "iconicon_boss": {
    "content:before": "\"\\eb94\""
  },
  "iconicon_addressbook": {
    "content:before": "\"\\eb95\""
  },
  "iconicon_calendar": {
    "content:before": "\"\\eb96\""
  },
  "iconicon_attestation": {
    "content:before": "\"\\eb97\""
  },
  "iconicon_camera": {
    "content:before": "\"\\eb98\""
  },
  "iconicon_certificate_fil": {
    "content:before": "\"\\eb99\""
  },
  "iconicon_coinpurse_line": {
    "content:before": "\"\\eb9a\""
  },
  "iconicon_collect": {
    "content:before": "\"\\eb9b\""
  },
  "iconicon_compile": {
    "content:before": "\"\\eb9c\""
  },
  "iconicon_details": {
    "content:before": "\"\\eb9d\""
  },
  "iconicon_community_line": {
    "content:before": "\"\\eb9e\""
  },
  "iconicon_discovery": {
    "content:before": "\"\\eb9f\""
  },
  "iconicon_delete": {
    "content:before": "\"\\eba0\""
  },
  "iconicon_dispose": {
    "content:before": "\"\\eba1\""
  },
  "iconicon_doc": {
    "content:before": "\"\\eba2\""
  },
  "iconicon_gift": {
    "content:before": "\"\\eba3\""
  },
  "iconicon_file": {
    "content:before": "\"\\eba4\""
  },
  "iconicon_GPS": {
    "content:before": "\"\\eba5\""
  },
  "iconicon_im_more": {
    "content:before": "\"\\eba6\""
  },
  "iconicon_horn": {
    "content:before": "\"\\eba7\""
  },
  "iconicon_im_face": {
    "content:before": "\"\\eba8\""
  },
  "iconicon_invite": {
    "content:before": "\"\\eba9\""
  },
  "iconicon_likegood": {
    "content:before": "\"\\ebaa\""
  },
  "iconicon_index_line": {
    "content:before": "\"\\ebab\""
  },
  "iconicon_link": {
    "content:before": "\"\\ebac\""
  },
  "iconicon_mobilephone": {
    "content:before": "\"\\ebad\""
  },
  "iconicon_dmail": {
    "content:before": "\"\\ebae\""
  },
  "iconicon_message": {
    "content:before": "\"\\ebaf\""
  },
  "iconicon_more": {
    "content:before": "\"\\ebb0\""
  },
  "iconicon_notice": {
    "content:before": "\"\\ebb1\""
  },
  "iconicon_photo": {
    "content:before": "\"\\ebb2\""
  },
  "iconicon_medal": {
    "content:before": "\"\\ebb3\""
  },
  "iconicon_roundclose": {
    "content:before": "\"\\ebb4\""
  },
  "iconicon_roundreduce": {
    "content:before": "\"\\ebb5\""
  },
  "iconicon_QRcode": {
    "content:before": "\"\\ebb6\""
  },
  "iconicon_roundadd": {
    "content:before": "\"\\ebb7\""
  },
  "iconicon_refresh": {
    "content:before": "\"\\ebb8\""
  },
  "iconicon_search": {
    "content:before": "\"\\ebb9\""
  },
  "iconicon_scan": {
    "content:before": "\"\\ebba\""
  },
  "iconicon_secret": {
    "content:before": "\"\\ebbb\""
  },
  "iconicon_share": {
    "content:before": "\"\\ebbc\""
  },
  "iconicon_task": {
    "content:before": "\"\\ebbd\""
  },
  "iconicon_threeline_fill": {
    "content:before": "\"\\ebbe\""
  },
  "iconicon_study": {
    "content:before": "\"\\ebbf\""
  },
  "iconicon_wechat": {
    "content:before": "\"\\ebc0\""
  },
  "iconicon_sport": {
    "content:before": "\"\\ebc1\""
  },
  "iconicon_work": {
    "content:before": "\"\\ebc2\""
  },
  "iconicon_workmore": {
    "content:before": "\"\\ebc3\""
  },
  "iconicon_safety": {
    "content:before": "\"\\ebc4\""
  },
  "iconicon_workset": {
    "content:before": "\"\\ebc5\""
  },
  "iconicon_shield": {
    "content:before": "\"\\ebc6\""
  },
  "iconjiahao": {
    "content:before": "\"\\e72b\""
  },
  "iconjiahao1": {
    "content:before": "\"\\e72c\""
  },
  "iconjiahao2fill": {
    "content:before": "\"\\e72d\""
  },
  "iconjianhao": {
    "content:before": "\"\\e72e\""
  },
  "icontishifill": {
    "content:before": "\"\\e72f\""
  },
  "icontishi": {
    "content:before": "\"\\e734\""
  },
  "iconwenhaofill": {
    "content:before": "\"\\e737\""
  },
  "iconwenhao": {
    "content:before": "\"\\e739\""
  },
  "iconxuanze": {
    "content:before": "\"\\e73b\""
  },
  "iconyuanxingweixuanzhong": {
    "content:before": "\"\\e73e\""
  },
  "iconyuanxingxuanzhongfill": {
    "content:before": "\"\\e73f\""
  },
  "iconyuanxingxuanzhong": {
    "content:before": "\"\\e742\""
  },
  "iconbiaoxingfill": {
    "content:before": "\"\\e743\""
  },
  "iconbiaoxing": {
    "content:before": "\"\\e744\""
  },
  "iconchexiao": {
    "content:before": "\"\\e745\""
  },
  "icondianpufill": {
    "content:before": "\"\\e746\""
  },
  "icondianpu": {
    "content:before": "\"\\e747\""
  },
  "icondingdan": {
    "content:before": "\"\\e748\""
  },
  "iconfankui": {
    "content:before": "\"\\e749\""
  },
  "iconfenxiang3": {
    "content:before": "\"\\e74b\""
  },
  "icongengduo2": {
    "content:before": "\"\\e74c\""
  },
  "icongonglve": {
    "content:before": "\"\\e74d\""
  },
  "icongouwuchefill": {
    "content:before": "\"\\e74e\""
  },
  "icongouwuche": {
    "content:before": "\"\\e754\""
  },
  "icongouwudai": {
    "content:before": "\"\\e755\""
  },
  "iconqiapianxingshi": {
    "content:before": "\"\\e756\""
  },
  "iconkefufill": {
    "content:before": "\"\\e75a\""
  },
  "iconkefu": {
    "content:before": "\"\\e75c\""
  },
  "iconliebiaoxingshi": {
    "content:before": "\"\\e75e\""
  },
  "iconliuyanfill": {
    "content:before": "\"\\e75f\""
  },
  "iconliuyan": {
    "content:before": "\"\\e760\""
  },
  "iconpengyoufill": {
    "content:before": "\"\\e761\""
  },
  "iconpengyou": {
    "content:before": "\"\\e762\""
  },
  "iconqingchu": {
    "content:before": "\"\\e764\""
  },
  "iconquan": {
    "content:before": "\"\\e765\""
  },
  "iconsaoma": {
    "content:before": "\"\\e766\""
  },
  "iconshaixuan": {
    "content:before": "\"\\e769\""
  },
  "iconshanchu": {
    "content:before": "\"\\e76a\""
  },
  "iconshezhi": {
    "content:before": "\"\\e76b\""
  },
  "iconshizhongfill": {
    "content:before": "\"\\e76c\""
  },
  "iconshizhong": {
    "content:before": "\"\\e76d\""
  },
  "iconshouyefill": {
    "content:before": "\"\\e76e\""
  },
  "iconshouye": {
    "content:before": "\"\\e76f\""
  },
  "iconsousuo1": {
    "content:before": "\"\\e770\""
  },
  "iconsousuoleimufill": {
    "content:before": "\"\\e771\""
  },
  "iconsousuoleimu": {
    "content:before": "\"\\e772\""
  },
  "icontongzhifill": {
    "content:before": "\"\\e773\""
  },
  "icontongzhi": {
    "content:before": "\"\\e774\""
  },
  "icontuikuan": {
    "content:before": "\"\\e77a\""
  },
  "iconwodefill": {
    "content:before": "\"\\e77b\""
  },
  "iconwode": {
    "content:before": "\"\\e77e\""
  },
  "iconxihuanfill": {
    "content:before": "\"\\e77f\""
  },
  "iconxihuan": {
    "content:before": "\"\\e780\""
  },
  "iconxinxifill": {
    "content:before": "\"\\e781\""
  },
  "iconxinxi": {
    "content:before": "\"\\e782\""
  },
  "iconzuji": {
    "content:before": "\"\\e783\""
  },
  "iconzuobiaofill": {
    "content:before": "\"\\e784\""
  },
  "iconzuobiao": {
    "content:before": "\"\\e785\""
  },
  "icondibu": {
    "content:before": "\"\\e786\""
  },
  "icondingbu": {
    "content:before": "\"\\e787\""
  },
  "iconxiangshang1": {
    "content:before": "\"\\e788\""
  },
  "iconxiangshang2": {
    "content:before": "\"\\e789\""
  },
  "iconxiangshang3": {
    "content:before": "\"\\e78a\""
  },
  "iconxiangshang5": {
    "content:before": "\"\\e78d\""
  },
  "iconxiangxia1": {
    "content:before": "\"\\e78e\""
  },
  "iconxiangxia2": {
    "content:before": "\"\\e78f\""
  },
  "iconxiangxia3": {
    "content:before": "\"\\e790\""
  },
  "iconxiangxia5": {
    "content:before": "\"\\e792\""
  },
  "iconxiangyou2": {
    "content:before": "\"\\e793\""
  },
  "iconxiangyou3fill": {
    "content:before": "\"\\e794\""
  },
  "iconxiangyou3": {
    "content:before": "\"\\e795\""
  },
  "iconxiangzuo1": {
    "content:before": "\"\\e796\""
  },
  "iconxiangzuo2": {
    "content:before": "\"\\e797\""
  },
  "iconxiangji1fill": {
    "content:before": "\"\\e798\""
  },
  "iconxiangji1": {
    "content:before": "\"\\e799\""
  },
  "iconjiazai": {
    "content:before": "\"\\e79a\""
  },
  "iconshuaxin1": {
    "content:before": "\"\\e79b\""
  },
  "iconsalefill": {
    "content:before": "\"\\e79c\""
  },
  "iconsale": {
    "content:before": "\"\\e79d\""
  },
  "iconandroidgengduo": {
    "content:before": "\"\\e79e\""
  },
  "iconleimu": {
    "content:before": "\"\\e79f\""
  },
  "iconbangzhuzhongxin": {
    "content:before": "\"\\e7a0\""
  },
  "iconcaidan": {
    "content:before": "\"\\e7a1\""
  },
  "iconzantongfill": {
    "content:before": "\"\\e7a2\""
  },
  "iconzantong": {
    "content:before": "\"\\e7a3\""
  },
  "iconxiangshang4": {
    "content:before": "\"\\e7a4\""
  },
  "iconxiangxia4": {
    "content:before": "\"\\e7a5\""
  },
  "icondanpin": {
    "content:before": "\"\\e7ab\""
  },
  "iconpinpai": {
    "content:before": "\"\\e7b8\""
  },
  "iconxiangbao": {
    "content:before": "\"\\e7ba\""
  },
  "iconyishouchu": {
    "content:before": "\"\\e7bb\""
  },
  "iconothers": {
    "content:before": "\"\\e7bc\""
  },
  "icondanxuanfill": {
    "content:before": "\"\\e71e\""
  },
  "icondanxuan": {
    "content:before": "\"\\e723\""
  },
  "iconfangxingweixuanzhong": {
    "content:before": "\"\\e724\""
  },
  "iconfangxingxuanzhongfill": {
    "content:before": "\"\\e725\""
  },
  "iconfangxingxuanzhong": {
    "content:before": "\"\\e726\""
  },
  "iconguanbi1": {
    "content:before": "\"\\e727\""
  },
  "iconguanbi2fill": {
    "content:before": "\"\\e728\""
  },
  "iconguanbi2": {
    "content:before": "\"\\e72a\""
  },
  "iconfavor": {
    "content:before": "\"\\e67b\""
  },
  "iconloading": {
    "content:before": "\"\\e67c\""
  },
  "iconlocationfill": {
    "content:before": "\"\\e67d\""
  },
  "iconroundcheckfill": {
    "content:before": "\"\\e67e\""
  },
  "iconroundcheck": {
    "content:before": "\"\\e67f\""
  },
  "iconroundclosefill": {
    "content:before": "\"\\e680\""
  },
  "iconroundclose": {
    "content:before": "\"\\e681\""
  },
  "iconroundrightfill": {
    "content:before": "\"\\e682\""
  },
  "iconroundright": {
    "content:before": "\"\\e683\""
  },
  "iconsearch1": {
    "content:before": "\"\\e684\""
  },
  "icontimefill": {
    "content:before": "\"\\e685\""
  },
  "icontime": {
    "content:before": "\"\\e686\""
  },
  "iconunfold": {
    "content:before": "\"\\e687\""
  },
  "iconwarnfill": {
    "content:before": "\"\\e688\""
  },
  "iconwarn": {
    "content:before": "\"\\e689\""
  },
  "iconcamerafill": {
    "content:before": "\"\\e68a\""
  },
  "iconcamera1": {
    "content:before": "\"\\e68b\""
  },
  "iconcommentfill": {
    "content:before": "\"\\e68c\""
  },
  "iconcomment": {
    "content:before": "\"\\e68d\""
  },
  "iconlikefill": {
    "content:before": "\"\\e68e\""
  },
  "iconlike": {
    "content:before": "\"\\e68f\""
  },
  "iconnotificationfill": {
    "content:before": "\"\\e690\""
  },
  "iconnotification": {
    "content:before": "\"\\e691\""
  },
  "iconorder": {
    "content:before": "\"\\e692\""
  },
  "icondeliver": {
    "content:before": "\"\\e693\""
  },
  "iconevaluate": {
    "content:before": "\"\\e694\""
  },
  "iconpay": {
    "content:before": "\"\\e695\""
  },
  "iconsend": {
    "content:before": "\"\\e696\""
  },
  "iconshop": {
    "content:before": "\"\\e697\""
  },
  "iconticket": {
    "content:before": "\"\\e698\""
  },
  "iconcascades": {
    "content:before": "\"\\e699\""
  },
  "iconlist": {
    "content:before": "\"\\e69a\""
  },
  "iconmore": {
    "content:before": "\"\\e69b\""
  },
  "iconscan": {
    "content:before": "\"\\e69c\""
  },
  "iconsettings": {
    "content:before": "\"\\e69d\""
  },
  "iconquestionfill": {
    "content:before": "\"\\e69e\""
  },
  "iconquestion": {
    "content:before": "\"\\e69f\""
  },
  "iconshopfill": {
    "content:before": "\"\\e6a0\""
  },
  "iconform": {
    "content:before": "\"\\e6a1\""
  },
  "iconpic": {
    "content:before": "\"\\e6a2\""
  },
  "iconfootprint": {
    "content:before": "\"\\e6a3\""
  },
  "icontop": {
    "content:before": "\"\\e6a4\""
  },
  "iconpulldown": {
    "content:before": "\"\\e6a5\""
  },
  "iconpullup": {
    "content:before": "\"\\e6a6\""
  },
  "iconrefresh": {
    "content:before": "\"\\e6a7\""
  },
  "iconmoreandroid": {
    "content:before": "\"\\e6a8\""
  },
  "icondeletefill": {
    "content:before": "\"\\e6a9\""
  },
  "iconrefund": {
    "content:before": "\"\\e6ac\""
  },
  "iconcart1": {
    "content:before": "\"\\e6af\""
  },
  "iconqrcode": {
    "content:before": "\"\\e6b0\""
  },
  "iconremind": {
    "content:before": "\"\\e6b2\""
  },
  "icondelete": {
    "content:before": "\"\\e6b4\""
  },
  "iconprofile": {
    "content:before": "\"\\e6b7\""
  },
  "iconhome1": {
    "content:before": "\"\\e6b8\""
  },
  "iconcartfill": {
    "content:before": "\"\\e6b9\""
  },
  "iconhomefill": {
    "content:before": "\"\\e6bb\""
  },
  "iconmessage": {
    "content:before": "\"\\e6bc\""
  },
  "iconaddressbook": {
    "content:before": "\"\\e6bd\""
  },
  "iconlink": {
    "content:before": "\"\\e6bf\""
  },
  "iconlock": {
    "content:before": "\"\\e6c0\""
  },
  "iconunlock": {
    "content:before": "\"\\e6c2\""
  },
  "iconvip": {
    "content:before": "\"\\e6c3\""
  },
  "iconactivity": {
    "content:before": "\"\\e6c5\""
  },
  "iconfriendaddfill": {
    "content:before": "\"\\e6c9\""
  },
  "iconfriendadd": {
    "content:before": "\"\\e6ca\""
  },
  "iconfriendfamous": {
    "content:before": "\"\\e6cb\""
  },
  "iconfriend": {
    "content:before": "\"\\e6cc\""
  },
  "icongoods": {
    "content:before": "\"\\e6cd\""
  },
  "iconpresent": {
    "content:before": "\"\\e6d3\""
  },
  "iconsquarecheckfill": {
    "content:before": "\"\\e6d4\""
  },
  "iconsquare": {
    "content:before": "\"\\e6d5\""
  },
  "iconsquarecheck": {
    "content:before": "\"\\e6d6\""
  },
  "iconround": {
    "content:before": "\"\\e6d7\""
  },
  "iconroundaddfill": {
    "content:before": "\"\\e6d8\""
  },
  "iconroundadd": {
    "content:before": "\"\\e6d9\""
  },
  "iconadd": {
    "content:before": "\"\\e6da\""
  },
  "iconnotificationforbidfill": {
    "content:before": "\"\\e6db\""
  },
  "iconfold": {
    "content:before": "\"\\e6de\""
  },
  "iconappreciatefill": {
    "content:before": "\"\\e6e3\""
  },
  "iconinfofill": {
    "content:before": "\"\\e6e4\""
  },
  "iconinfo": {
    "content:before": "\"\\e6e5\""
  },
  "iconrechargefill": {
    "content:before": "\"\\e6ec\""
  },
  "iconrecharge": {
    "content:before": "\"\\e6ed\""
  },
  "iconvipcard": {
    "content:before": "\"\\e6ee\""
  },
  "iconfriendfavor": {
    "content:before": "\"\\e6f1\""
  },
  "iconshare": {
    "content:before": "\"\\e6f3\""
  },
  "iconservice": {
    "content:before": "\"\\e6ff\""
  },
  "icondown": {
    "content:before": "\"\\e703\""
  },
  "iconcopy": {
    "content:before": "\"\\e706\""
  },
  "iconchoicenessfill": {
    "content:before": "\"\\e714\""
  },
  "iconchoiceness": {
    "content:before": "\"\\e715\""
  },
  "iconpullleft": {
    "content:before": "\"\\e71f\""
  },
  "iconpullright": {
    "content:before": "\"\\e720\""
  },
  "iconrankfill": {
    "content:before": "\"\\e721\""
  },
  "iconrank": {
    "content:before": "\"\\e722\""
  },
  "iconapps": {
    "content:before": "\"\\e729\""
  },
  "iconmarkfill": {
    "content:before": "\"\\e730\""
  },
  "iconmark": {
    "content:before": "\"\\e731\""
  },
  "iconpresentfill": {
    "content:before": "\"\\e732\""
  },
  "iconrepeal": {
    "content:before": "\"\\e733\""
  },
  "iconpeoplefill": {
    "content:before": "\"\\e735\""
  },
  "iconpeople": {
    "content:before": "\"\\e736\""
  },
  "iconrepair": {
    "content:before": "\"\\e738\""
  },
  "iconrepairfill": {
    "content:before": "\"\\e73a\""
  },
  "iconattentionfill": {
    "content:before": "\"\\e73c\""
  },
  "iconattention": {
    "content:before": "\"\\e73d\""
  },
  "iconcommunityfill": {
    "content:before": "\"\\e740\""
  },
  "iconcommunity": {
    "content:before": "\"\\e741\""
  },
  "iconcalendar": {
    "content:before": "\"\\e74a\""
  },
  "iconplayfill": {
    "content:before": "\"\\e74f\""
  },
  "iconstop": {
    "content:before": "\"\\e750\""
  },
  "icontagfill": {
    "content:before": "\"\\e751\""
  },
  "icontag": {
    "content:before": "\"\\e752\""
  },
  "icongroup": {
    "content:before": "\"\\e753\""
  },
  "iconhotfill": {
    "content:before": "\"\\e757\""
  },
  "iconhot": {
    "content:before": "\"\\e758\""
  },
  "iconpost": {
    "content:before": "\"\\e759\""
  },
  "iconradiobox": {
    "content:before": "\"\\e75b\""
  },
  "iconupload": {
    "content:before": "\"\\e75d\""
  },
  "iconradioboxfill": {
    "content:before": "\"\\e763\""
  },
  "iconadd1": {
    "content:before": "\"\\e767\""
  },
  "iconmove": {
    "content:before": "\"\\e768\""
  },
  "iconactivityfill": {
    "content:before": "\"\\e775\""
  },
  "iconcrownfill": {
    "content:before": "\"\\e776\""
  },
  "iconcrown": {
    "content:before": "\"\\e777\""
  },
  "icongoodsfill": {
    "content:before": "\"\\e778\""
  },
  "iconmessagefill": {
    "content:before": "\"\\e779\""
  },
  "iconsponsorfill": {
    "content:before": "\"\\e77c\""
  },
  "iconsponsor": {
    "content:before": "\"\\e77d\""
  },
  "iconmy": {
    "content:before": "\"\\e78b\""
  },
  "iconmyfill": {
    "content:before": "\"\\e78c\""
  },
  "icontext": {
    "content:before": "\"\\e791\""
  },
  "iconroundaddlight": {
    "content:before": "\"\\e7a7\""
  },
  "iconattentionforbid": {
    "content:before": "\"\\e7b2\""
  },
  "iconattentionforbidfill": {
    "content:before": "\"\\e7b3\""
  },
  "iconmail": {
    "content:before": "\"\\e7bd\""
  },
  "iconpeoplelist": {
    "content:before": "\"\\e7be\""
  },
  "iconnewshotfill": {
    "content:before": "\"\\e7c4\""
  },
  "iconnewshot": {
    "content:before": "\"\\e7c5\""
  },
  "iconvideofill": {
    "content:before": "\"\\e7c7\""
  },
  "iconvideo": {
    "content:before": "\"\\e7c8\""
  },
  "iconaskfill": {
    "content:before": "\"\\e7c9\""
  },
  "iconask": {
    "content:before": "\"\\e7ca\""
  },
  "iconexit": {
    "content:before": "\"\\e7cb\""
  },
  "iconmoneybagfill": {
    "content:before": "\"\\e7ce\""
  },
  "iconredpacket_fill": {
    "content:before": "\"\\e7d3\""
  },
  "iconhome_light": {
    "content:before": "\"\\e7d4\""
  },
  "iconmy_light": {
    "content:before": "\"\\e7d5\""
  },
  "iconcommunity_light": {
    "content:before": "\"\\e7d6\""
  },
  "iconcart_light": {
    "content:before": "\"\\e7d7\""
  },
  "iconwe_light": {
    "content:before": "\"\\e7d8\""
  },
  "iconhome_fill_light": {
    "content:before": "\"\\e7d9\""
  },
  "iconcart_fill_light": {
    "content:before": "\"\\e7da\""
  },
  "iconcommunity_fill_light": {
    "content:before": "\"\\e7db\""
  },
  "iconmy_fill_light": {
    "content:before": "\"\\e7dc\""
  },
  "iconwe_fill_light": {
    "content:before": "\"\\e7dd\""
  },
  "iconsearch_light": {
    "content:before": "\"\\e7de\""
  },
  "iconscan_light": {
    "content:before": "\"\\e7df\""
  },
  "iconpeople_list_light": {
    "content:before": "\"\\e7e0\""
  },
  "iconmessage_light": {
    "content:before": "\"\\e7e1\""
  },
  "iconclose_light": {
    "content:before": "\"\\e7e2\""
  },
  "iconadd_light": {
    "content:before": "\"\\e7e3\""
  },
  "iconprofile_light": {
    "content:before": "\"\\e7e4\""
  },
  "iconservice_light": {
    "content:before": "\"\\e7e5\""
  },
  "iconfriend_add_light": {
    "content:before": "\"\\e7e6\""
  },
  "iconedit_light": {
    "content:before": "\"\\e7e7\""
  },
  "iconcamera_light": {
    "content:before": "\"\\e7e8\""
  },
  "iconshare_light": {
    "content:before": "\"\\e7e9\""
  },
  "iconcomment_light": {
    "content:before": "\"\\e7ea\""
  },
  "iconappreciate_light": {
    "content:before": "\"\\e7eb\""
  },
  "iconappreciate_fill_light": {
    "content:before": "\"\\e7ec\""
  },
  "iconcomment_fill_light": {
    "content:before": "\"\\e7ed\""
  },
  "iconmore_android_light": {
    "content:before": "\"\\e7ee\""
  },
  "iconfriend_light": {
    "content:before": "\"\\e7ef\""
  },
  "iconmore_light": {
    "content:before": "\"\\e7f0\""
  },
  "icongoods_favor_light": {
    "content:before": "\"\\e7f1\""
  },
  "icongoods_new_fill_light": {
    "content:before": "\"\\e7f2\""
  },
  "icongoods_new_light": {
    "content:before": "\"\\e7f3\""
  },
  "icongoods_light": {
    "content:before": "\"\\e7f4\""
  },
  "iconfavor_fill_light": {
    "content:before": "\"\\e7f5\""
  },
  "icondelete_light": {
    "content:before": "\"\\e7f6\""
  },
  "iconback_android": {
    "content:before": "\"\\e7f7\""
  },
  "iconback_android_light": {
    "content:before": "\"\\e7f8\""
  },
  "icondown_light": {
    "content:before": "\"\\e7f9\""
  },
  "iconround_close_light": {
    "content:before": "\"\\e7fa\""
  },
  "iconround_close_fill_light": {
    "content:before": "\"\\e7fb\""
  },
  "iconqr_code_light": {
    "content:before": "\"\\e7fc\""
  },
  "iconfriend_settings_light": {
    "content:before": "\"\\e7fe\""
  },
  "iconround_list_light": {
    "content:before": "\"\\e800\""
  },
  "iconround_friend_fill": {
    "content:before": "\"\\e80a\""
  },
  "iconround_crown_fill": {
    "content:before": "\"\\e80b\""
  },
  "iconround_link_fill": {
    "content:before": "\"\\e80c\""
  },
  "iconround_light_fill": {
    "content:before": "\"\\e80d\""
  },
  "iconround_favor_fill": {
    "content:before": "\"\\e80e\""
  },
  "iconround_menu_fill": {
    "content:before": "\"\\e80f\""
  },
  "iconround_location_fill": {
    "content:before": "\"\\e810\""
  },
  "iconround_pay_fill": {
    "content:before": "\"\\e811\""
  },
  "iconround_like_fill": {
    "content:before": "\"\\e812\""
  },
  "iconround_people_fill": {
    "content:before": "\"\\e813\""
  },
  "iconround_pay": {
    "content:before": "\"\\e814\""
  },
  "iconround_rank_fill": {
    "content:before": "\"\\e815\""
  },
  "iconround_redpacket_fill": {
    "content:before": "\"\\e816\""
  },
  "iconround_skin_fill": {
    "content:before": "\"\\e817\""
  },
  "iconround_record_fill": {
    "content:before": "\"\\e818\""
  },
  "iconround_ticket_fill": {
    "content:before": "\"\\e819\""
  },
  "iconround_text_fill": {
    "content:before": "\"\\e81a\""
  },
  "iconround_transfer_fill": {
    "content:before": "\"\\e81b\""
  },
  "iconround_transfer": {
    "content:before": "\"\\e81c\""
  },
  "iconarrow_left_fill": {
    "content:before": "\"\\e81d\""
  },
  "iconarrow_up_fill": {
    "content:before": "\"\\e81e\""
  },
  "iconreturn": {
    "content:before": "\"\\e81f\""
  },
  "iconbroadcast_fill": {
    "content:before": "\"\\e820\""
  },
  "iconappreciate": {
    "content:before": "\"\\e675\""
  },
  "iconcheck": {
    "content:before": "\"\\e676\""
  },
  "iconclose": {
    "content:before": "\"\\e677\""
  },
  "iconedit": {
    "content:before": "\"\\e678\""
  },
  "iconemoji": {
    "content:before": "\"\\e679\""
  },
  "iconfavorfill": {
    "content:before": "\"\\e67a\""
  },
  "iconliebiaomoshi2": {
    "content:before": "\"\\e61b\""
  },
  "icondaifahuo": {
    "content:before": "\"\\e61c\""
  },
  "icondaifukuan": {
    "content:before": "\"\\e61d\""
  },
  "iconpaixing": {
    "content:before": "\"\\e61e\""
  },
  "iconzanxuanzhong": {
    "content:before": "\"\\e61f\""
  },
  "iconfenxiang1": {
    "content:before": "\"\\e620\""
  },
  "iconfenxiang2": {
    "content:before": "\"\\e621\""
  },
  "icongengduo1": {
    "content:before": "\"\\e622\""
  },
  "iconcart": {
    "content:before": "\"\\e623\""
  },
  "iconhome": {
    "content:before": "\"\\e624\""
  },
  "iconhome2": {
    "content:before": "\"\\e625\""
  },
  "iconcamera": {
    "content:before": "\"\\e626\""
  },
  "iconcamera2": {
    "content:before": "\"\\e627\""
  },
  "iconsearch": {
    "content:before": "\"\\e628\""
  },
  "iconshuaxin": {
    "content:before": "\"\\e629\""
  },
  "iconmine": {
    "content:before": "\"\\e62a\""
  },
  "iconmine2": {
    "content:before": "\"\\e62b\""
  },
  "icontabulation": {
    "content:before": "\"\\e62c\""
  },
  "iconliebiao2": {
    "content:before": "\"\\e62d\""
  },
  "iconiconfontscan": {
    "content:before": "\"\\e62e\""
  },
  "iconquanbudingdan1": {
    "content:before": "\"\\e62f\""
  },
  "icon31shoucangxuanzhong": {
    "content:before": "\"\\e630\""
  },
  "icon31shoucang": {
    "content:before": "\"\\e631\""
  },
  "icon31guanbi": {
    "content:before": "\"\\e632\""
  },
  "icon31xuanze": {
    "content:before": "\"\\e633\""
  },
  "icon31guanzhudianpu": {
    "content:before": "\"\\e634\""
  },
  "icon31xuanzhong": {
    "content:before": "\"\\e635\""
  },
  "icon31yiguanzhudianpu": {
    "content:before": "\"\\e636\""
  },
  "icon31dianzan": {
    "content:before": "\"\\e637\""
  },
  "icon31dianpu": {
    "content:before": "\"\\e638\""
  },
  "icon31fenxiang": {
    "content:before": "\"\\e639\""
  },
  "icon31zhuanfa": {
    "content:before": "\"\\e63a\""
  },
  "icon31daifahuo": {
    "content:before": "\"\\e63b\""
  },
  "icon31daifukuan": {
    "content:before": "\"\\e63c\""
  },
  "icon31daishouhuo": {
    "content:before": "\"\\e63d\""
  },
  "icon31daipingjia": {
    "content:before": "\"\\e63e\""
  },
  "icontuikuantuihuo": {
    "content:before": "\"\\e63f\""
  },
  "icon31huiyuanqia": {
    "content:before": "\"\\e640\""
  },
  "icon31jifen": {
    "content:before": "\"\\e641\""
  },
  "icon31youhuiquan": {
    "content:before": "\"\\e642\""
  },
  "icon31tianmaobao": {
    "content:before": "\"\\e643\""
  },
  "icon31hongbao": {
    "content:before": "\"\\e644\""
  },
  "icon31fanerxuanzhong": {
    "content:before": "\"\\e645\""
  },
  "icon31faner": {
    "content:before": "\"\\e646\""
  },
  "icon31gouwuchexuanzhong": {
    "content:before": "\"\\e647\""
  },
  "icon31gouwuche": {
    "content:before": "\"\\e648\""
  },
  "icon31shouyexuanzhong": {
    "content:before": "\"\\e649\""
  },
  "icon31shouye": {
    "content:before": "\"\\e64a\""
  },
  "icon31wodexuanzhong": {
    "content:before": "\"\\e64b\""
  },
  "icon31wode": {
    "content:before": "\"\\e64c\""
  },
  "iconliwuhuodong": {
    "content:before": "\"\\e64d\""
  },
  "iconliebiaomoshi": {
    "content:before": "\"\\e64e\""
  },
  "iconzhongtumoshi": {
    "content:before": "\"\\e64f\""
  },
  "iconchakan": {
    "content:before": "\"\\e650\""
  },
  "iconguanbi": {
    "content:before": "\"\\e651\""
  },
  "iconguanzhu": {
    "content:before": "\"\\e652\""
  },
  "iconlaba": {
    "content:before": "\"\\e653\""
  },
  "icon31paishexuanzhong": {
    "content:before": "\"\\e654\""
  },
  "icon31paishe": {
    "content:before": "\"\\e655\""
  },
  "icon31rexiao": {
    "content:before": "\"\\e656\""
  },
  "icon31saoma": {
    "content:before": "\"\\e657\""
  },
  "icon31shangxin": {
    "content:before": "\"\\e658\""
  },
  "icon31shuaxin": {
    "content:before": "\"\\e659\""
  },
  "icon31sousuo": {
    "content:before": "\"\\e65a\""
  },
  "icon31tishi": {
    "content:before": "\"\\e65b\""
  },
  "icon31xiaoxi": {
    "content:before": "\"\\e65c\""
  },
  "icon31yiwen": {
    "content:before": "\"\\e65d\""
  },
  "icon31dingdan": {
    "content:before": "\"\\e65e\""
  },
  "icon31guanzhu1xuanzhong": {
    "content:before": "\"\\e65f\""
  },
  "icon31guanzhu1": {
    "content:before": "\"\\e660\""
  },
  "icon31huidaodingbu": {
    "content:before": "\"\\e661\""
  },
  "icon31zuji": {
    "content:before": "\"\\e662\""
  },
  "icon31leimu": {
    "content:before": "\"\\e663\""
  },
  "icon31liebiao": {
    "content:before": "\"\\e664\""
  },
  "icon31chiping": {
    "content:before": "\"\\e665\""
  },
  "icon31erweima": {
    "content:before": "\"\\e666\""
  },
  "iconbianji": {
    "content:before": "\"\\e667\""
  },
  "icon31fanhui": {
    "content:before": "\"\\e668\""
  },
  "icon31huiyuan": {
    "content:before": "\"\\e669\""
  },
  "icon31pinglun": {
    "content:before": "\"\\e66a\""
  },
  "icon31qiandao": {
    "content:before": "\"\\e66b\""
  },
  "icon31quanbushangpin": {
    "content:before": "\"\\e66c\""
  },
  "icon31shangsheng": {
    "content:before": "\"\\e66d\""
  },
  "icon31shezhi": {
    "content:before": "\"\\e66e\""
  },
  "icon31shijian": {
    "content:before": "\"\\e66f\""
  },
  "icon31shouqi": {
    "content:before": "\"\\e670\""
  },
  "icon31xiajiang": {
    "content:before": "\"\\e671\""
  },
  "icon31xiala": {
    "content:before": "\"\\e672\""
  },
  "icon31tishi1": {
    "content:before": "\"\\e673\""
  },
  "icon31haoyou": {
    "content:before": "\"\\e674\""
  },
  "iconsaoyisao": {
    "content:before": "\"\\e600\""
  },
  "iconsousuo": {
    "content:before": "\"\\e601\""
  },
  "iconfenxiang": {
    "content:before": "\"\\e602\""
  },
  "iconfenlei": {
    "content:before": "\"\\e603\""
  },
  "iconhuanyipi": {
    "content:before": "\"\\e604\""
  },
  "iconxiugaioryijian": {
    "content:before": "\"\\e605\""
  },
  "iconweixin": {
    "content:before": "\"\\e606\""
  },
  "iconshangsheng": {
    "content:before": "\"\\e607\""
  },
  "iconerweima": {
    "content:before": "\"\\e608\""
  },
  "iconlianjie": {
    "content:before": "\"\\e609\""
  },
  "icondianzan": {
    "content:before": "\"\\e60a\""
  },
  "iconfanhui8": {
    "content:before": "\"\\e60b\""
  },
  "iconfanhui7": {
    "content:before": "\"\\e60c\""
  },
  "iconfanhui6": {
    "content:before": "\"\\e60d\""
  },
  "iconfanhui5": {
    "content:before": "\"\\e60e\""
  },
  "icongengduo": {
    "content:before": "\"\\e60f\""
  },
  "iconshoucangxuanzhong": {
    "content:before": "\"\\e610\""
  },
  "iconshoucang": {
    "content:before": "\"\\e611\""
  },
  "iconfanhui1": {
    "content:before": "\"\\e612\""
  },
  "iconfanhui2": {
    "content:before": "\"\\e613\""
  },
  "iconfanhui3": {
    "content:before": "\"\\e614\""
  },
  "iconfanhui4": {
    "content:before": "\"\\e615\""
  },
  "iconhuidaodingbu": {
    "content:before": "\"\\e616\""
  },
  "icongouwuchexuanzhong": {
    "content:before": "\"\\e617\""
  },
  "iconwodexuanzhong": {
    "content:before": "\"\\e618\""
  },
  "iconquanbudingdan": {
    "content:before": "\"\\e619\""
  },
  "icondaishouhuo": {
    "content:before": "\"\\e61a\""
  },
  "uni-flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "uni-flex-item": {
    "flex": 1
  },
  "uni-row": {
    "flexDirection": "row"
  },
  "uni-column": {
    "flexDirection": "column"
  },
  "uni-link": {
    "color": "#576B95",
    "fontSize": "26upx"
  },
  "uni-center": {
    "textAlign": "center"
  },
  "uni-inline-item": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-page-head": {
    "paddingTop": "35upx",
    "paddingRight": "35upx",
    "paddingBottom": "35upx",
    "paddingLeft": "35upx",
    "textAlign": "center"
  },
  "uni-page-head-title": {
    "display": "inline-block",
    "paddingTop": 0,
    "paddingRight": "40upx",
    "paddingBottom": 0,
    "paddingLeft": "40upx",
    "fontSize": "30upx",
    "height": "88upx",
    "lineHeight": "88upx",
    "color": "#BEBEBE",
    "boxSizing": "border-box",
    "borderBottom": "2upx solid #D8D8D8"
  },
  "uni-page-body": {
    "width": 100,
    "flexGrow": 1,
    "overflowX": "hidden"
  },
  "uni-padding-wrap": {
    "width": "690upx",
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx"
  },
  "uni-word": {
    "textAlign": "center",
    "paddingTop": "200upx",
    "paddingRight": "100upx",
    "paddingBottom": "200upx",
    "paddingLeft": "100upx"
  },
  "uni-title": {
    "fontSize": "30upx",
    "fontWeight": "500",
    "paddingTop": "20upx",
    "paddingRight": 0,
    "paddingBottom": "20upx",
    "paddingLeft": 0,
    "lineHeight": 1.5
  },
  "uni-text": {
    "fontSize": "28upx"
  },
  "uni-text-gray": {
    "color": "#cccccc"
  },
  "uni-text-small": {
    "fontSize": "24upx"
  },
  "uni-common-mb": {
    "marginBottom": "30upx"
  },
  "uni-common-pb": {
    "paddingBottom": "30upx"
  },
  "uni-common-pl": {
    "paddingLeft": "30upx"
  },
  "uni-common-mt": {
    "marginTop": "30upx"
  },
  "uni-bg-red": {
    "background": "#F76260",
    "color": "#FFFFFF"
  },
  "uni-bg-green": {
    "background": "#09BB07",
    "color": "#FFFFFF"
  },
  "uni-bg-blue": {
    "background": "#007AFF",
    "color": "#FFFFFF"
  },
  "uni-h1": {
    "fontSize": "80upx",
    "fontWeight": "700"
  },
  "uni-h2": {
    "fontSize": "60upx",
    "fontWeight": "700"
  },
  "uni-h3": {
    "fontSize": "48upx",
    "fontWeight": "700"
  },
  "uni-h4": {
    "fontSize": "36upx",
    "fontWeight": "700"
  },
  "uni-h5": {
    "fontSize": "28upx",
    "color": "#8f8f94"
  },
  "uni-h6": {
    "fontSize": "24upx",
    "color": "#8f8f94"
  },
  "uni-bold": {
    "fontWeight": "bold"
  },
  "uni-ellipsis": {
    "overflow": "hidden",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "uni-btn-v": {
    "paddingTop": "10upx",
    "paddingRight": 0,
    "paddingBottom": "10upx",
    "paddingLeft": 0
  },
  "uni-form-item": {
    "display": "flex",
    "width": 100,
    "paddingTop": "10upx",
    "paddingRight": 0,
    "paddingBottom": "10upx",
    "paddingLeft": 0
  },
  "uni-label": {
    "width": "210upx",
    "wordWrap": "break-word",
    "wordBreak": "break-all",
    "textIndent": "20upx"
  },
  "uni-input": {
    "height": "50upx",
    "paddingTop": "15upx",
    "paddingRight": "25upx",
    "paddingBottom": "15upx",
    "paddingLeft": "25upx",
    "lineHeight": "50upx",
    "fontSize": "28upx",
    "background": "#FFF",
    "flex": 1
  },
  "uni-loadmore": {
    "height": "80upx",
    "lineHeight": "80upx",
    "textAlign": "center",
    "paddingBottom": "30upx"
  },
  "uni-badge": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-default": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-primary": {
    "color": "#ffffff",
    "backgroundColor": "#007aff"
  },
  "uni-badge-green": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-success": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-warning": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-yellow": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-danger": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-red": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-purple": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-badge-royal": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-collapse-content": {
    "height": 0,
    "width": 100,
    "overflow": "hidden"
  },
  "uni-card": {
    "background": "#fff",
    "borderRadius": "8upx",
    "marginTop": "20upx",
    "marginRight": 0,
    "marginBottom": "20upx",
    "marginLeft": 0,
    "position": "relative",
    "boxShadow": "0 2upx 4upx rgba(0, 0, 0, .3)"
  },
  "uni-card-content": {
    "fontSize": "30upx"
  },
  "uni-card-content-inner": {
    "position": "relative",
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx"
  },
  "uni-card-footer": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50upx",
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": "20upx",
    "paddingLeft": "30upx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "color": "#6d6d72",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2upx",
    "content:before": "''",
    "WebkitTransform:before": "scaleY(.5)",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc"
  },
  "uni-card-header": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50upx",
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": "20upx",
    "paddingLeft": "30upx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "fontSize": "36upx",
    "position:before:after": "absolute",
    "top:before:after": 0,
    "right:before:after": 0,
    "left:before:after": 0,
    "height:before:after": "2upx",
    "content:before:after": "''",
    "WebkitTransform:before:after": "scaleY(.5)",
    "transform:before:after": "scaleY(.5)",
    "backgroundColor:before:after": "#c8c7cc",
    "bottom:after": 0
  },
  "uni-card-media": {
    "justifyContent": "flex-start"
  },
  "uni-card-media-logo": {
    "height": "84upx",
    "width": "84upx",
    "marginRight": "20upx"
  },
  "uni-card-media-body": {
    "height": "84upx",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  "uni-card-media-text-top": {
    "lineHeight": "36upx",
    "fontSize": "34upx"
  },
  "uni-card-media-text-bottom": {
    "lineHeight": "30upx",
    "fontSize": "28upx",
    "color": "#8f8f94"
  },
  "uni-card-link": {
    "color": "#007AFF"
  },
  "uni-list": {
    "backgroundColor": "#FFFFFF",
    "position": "relative",
    "width": 100,
    "display": "flex",
    "flexDirection": "column",
    "position:after": "absolute",
    "zIndex:after": 10,
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "1upx",
    "content:after": "''",
    "WebkitTransform:after": "scaleY(.5)",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc",
    "position:before": "absolute",
    "zIndex:before": 10,
    "right:before": 0,
    "top:before": 0,
    "left:before": 0,
    "height:before": "1upx",
    "content:before": "''",
    "WebkitTransform:before": "scaleY(.5)",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc"
  },
  "uni-list-cell": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "position:after": "absolute",
    "zIndex:after": 3,
    "right:after": 0,
    "bottom:after": 0,
    "left:after": "30upx",
    "height:after": "1upx",
    "content:after": "''",
    "WebkitTransform:after": "scaleY(.5)",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "uni-list-cell-hover": {
    "backgroundColor": "#eeeeee"
  },
  "uni-list-cell-pd": {
    "paddingTop": "22upx",
    "paddingRight": "30upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx"
  },
  "uni-list-cell-left": {
    "fontSize": "28upx",
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx"
  },
  "uni-list-cell-db": {
    "flex": 1
  },
  "uni-list-cell-right": {
    "flex": 1
  },
  "uni-list-cell-divider": {
    "position": "relative",
    "display": "flex",
    "color": "#999999",
    "backgroundColor": "#f7f7f7",
    "paddingTop": "15upx",
    "paddingRight": "20upx",
    "paddingBottom": "15upx",
    "paddingLeft": "20upx",
    "position:before": "absolute",
    "right:before": 0,
    "top:before": 0,
    "left:before": "0upx",
    "height:before": "1upx",
    "content:before": "''",
    "WebkitTransform:before": "scaleY(.5)",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc",
    "position:after": "absolute",
    "right:after": 0,
    "bottom:after": 0,
    "left:after": "0upx",
    "height:after": "1upx",
    "content:after": "''",
    "WebkitTransform:after": "scaleY(.5)",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "uni-list-cell-navigate": {
    "fontSize": "30upx",
    "paddingTop": "22upx",
    "paddingRight": "36upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx",
    "lineHeight": "48upx",
    "position": "relative",
    "display": "flex",
    "boxSizing": "border-box",
    "width": 100,
    "flex": 1,
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "uni-navigate-badge": {
    "paddingRight": "50upx"
  },
  "uni-triplex-row": {
    "display": "flex",
    "flex": 1,
    "width": 100,
    "boxSizing": "border-box",
    "flexDirection": "row",
    "paddingTop": "22upx",
    "paddingRight": "30upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx"
  },
  "uni-triplex-right": {
    "display": "flex",
    "flexDirection": "column",
    "width": 16,
    "textAlign": "right"
  },
  "uni-triplex-left": {
    "display": "flex",
    "flexDirection": "column",
    "width": 84
  },
  "uni-media-list": {
    "paddingTop": "22upx",
    "paddingRight": "30upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx",
    "boxSizing": "border-box",
    "display": "flex",
    "width": 100,
    "flexDirection": "row"
  },
  "uni-pull-right": {
    "flexDirection": "row-reverse"
  },
  "uni-media-list-logo": {
    "height": "84upx",
    "width": "84upx",
    "marginRight": "20upx"
  },
  "uni-media-list-body": {
    "height": "84upx",
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "overflow": "hidden"
  },
  "uni-media-list-text-top": {
    "width": 100,
    "lineHeight": "36upx",
    "fontSize": "30upx"
  },
  "uni-media-list-text-bottom": {
    "width": 100,
    "lineHeight": "30upx",
    "fontSize": "26upx",
    "color": "#8f8f94"
  },
  "uni-grid-9": {
    "background": "#f2f2f2",
    "width": "750upx",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "borderTop": "2upx solid #eee"
  },
  "uni-grid-9-item": {
    "width": "250upx",
    "height": "200upx",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottom": "2upx solid",
    "borderRight": "2upx solid",
    "borderColor": "#eeeeee",
    "boxSizing": "border-box"
  },
  "no-border-right": {
    "borderRight": "none"
  },
  "uni-grid-9-image": {
    "width": "100upx",
    "height": "100upx"
  },
  "uni-grid-9-text": {
    "width": "250upx",
    "lineHeight": "4upx",
    "height": "40upx",
    "textAlign": "center",
    "fontSize": "30upx"
  },
  "uni-grid-9-item-hover": {
    "background": "rgba(0, 0, 0, 0.1)"
  },
  "uni-uploader": {
    "flex": 1,
    "flexDirection": "column"
  },
  "uni-uploader-head": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "uni-uploader-info": {
    "color": "#B2B2B2"
  },
  "uni-uploader-body": {
    "marginTop": "16upx"
  },
  "uni-uploader__files": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "uni-uploader__file": {
    "marginTop": "10upx",
    "marginRight": "10upx",
    "marginBottom": "10upx",
    "marginLeft": "10upx",
    "width": "210upx",
    "height": "210upx"
  },
  "uni-uploader__img": {
    "display": "block",
    "width": "210upx",
    "height": "210upx"
  },
  "uni-uploader__input-box": {
    "position": "relative",
    "marginTop": "10upx",
    "marginRight": "10upx",
    "marginBottom": "10upx",
    "marginLeft": "10upx",
    "width": "208upx",
    "height": "208upx",
    "border": "2upx solid #D9D9D9",
    "content:before": "\" \"",
    "position:before": "absolute",
    "top:before": 50,
    "left:before": 50,
    "WebkitTransform:before": "translate(-50%, -50%)",
    "transform:before": "translate(-50%, -50%)",
    "backgroundColor:before": "#D9D9D9",
    "content:before:after": "\" \"",
    "position:before:after": "absolute",
    "top:before:after": 50,
    "left:before:after": 50,
    "WebkitTransform:before:after": "translate(-50%, -50%)",
    "transform:before:after": "translate(-50%, -50%)",
    "backgroundColor:before:after": "#D9D9D9",
    "width:before": "4upx",
    "height:before": "79upx",
    "width:after": "79upx",
    "height:after": "4upx",
    "borderColor:active": "#999999",
    "backgroundColor:active:before": "#999999",
    "backgroundColor:active:before:active:after": "#999999"
  },
  "uni-uploader__input": {
    "position": "absolute",
    "zIndex": 1,
    "top": 0,
    "left": 0,
    "width": 100,
    "height": 100,
    "opacity": 0
  },
  "feedback-title": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20upx",
    "paddingRight": "20upx",
    "paddingBottom": "20upx",
    "paddingLeft": "20upx",
    "color": "#8f8f94",
    "fontSize": "28upx"
  },
  "feedback-quick": {
    "position": "relative",
    "paddingRight": "40upx",
    "fontFamily:after": "uniicons",
    "fontSize:after": "40upx",
    "content:after": "'\\e581'",
    "position:after": "absolute",
    "right:after": 0,
    "top:after": 50,
    "color:after": "#bbbbbb",
    "WebkitTransform:after": "translateY(-50%)",
    "transform:after": "translateY(-50%)"
  },
  "feedback-body": {
    "background": "#fff"
  },
  "feedback-textare": {
    "height": "200upx",
    "fontSize": "34upx",
    "lineHeight": "50upx",
    "width": 100,
    "boxSizing": "border-box",
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx"
  },
  "feedback-input": {
    "fontSize": "34upx",
    "height": "50upx",
    "minHeight": "50upx",
    "paddingTop": "15upx",
    "paddingRight": "20upx",
    "paddingBottom": "15upx",
    "paddingLeft": "20upx",
    "lineHeight": "50upx"
  },
  "feedback-uploader": {
    "paddingTop": "22upx",
    "paddingRight": "20upx",
    "paddingBottom": "22upx",
    "paddingLeft": "20upx"
  },
  "feedback-star": {
    "fontFamily": "uniicons",
    "fontSize": "40upx",
    "marginLeft": "6upx",
    "content:after": "'\\e408'"
  },
  "feedback-star-view": {
    "marginLeft": "20upx"
  },
  "feedback-submit": {
    "background": "#007AFF",
    "color": "#FFFFFF",
    "marginTop": "20upx",
    "marginRight": "20upx",
    "marginBottom": "20upx",
    "marginLeft": "20upx"
  },
  "uni-input-group": {
    "position": "relative",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "border": 0,
    "backgroundColor": "#ffffff",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2upx",
    "content:before": "''",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc",
    "position:after": "absolute",
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "2upx",
    "content:after": "''",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "margin": {
    "marginTop": "20upx",
    "marginRight": "20upx",
    "marginBottom": "20upx",
    "marginLeft": "20upx"
  },
  "margin-height": {
    "marginBottom": "20upx",
    "marginTop": "20upx"
  },
  "margin-width": {
    "marginLeft": "20upx",
    "marginRight": "20upx"
  },
  "uni-input-row": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "fontSize": "28upx",
    "paddingTop": "22upx",
    "paddingRight": "30upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx",
    "justifyContent": "space-between"
  },
  "uni-textarea": {
    "width": 100,
    "background": "#FFF"
  },
  "uni-tab-bar": {
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden",
    "height": 100
  },
  "uni-swiper-tab": {
    "width": 100,
    "whiteSpace": "nowrap",
    "lineHeight": "100upx",
    "height": "100upx",
    "borderBottom": "1px solid #c8c7cc"
  },
  "swiper-tab-list": {
    "fontSize": "30upx",
    "width": "150upx",
    "display": "inline-block",
    "textAlign": "center",
    "color": "#555555"
  },
  "uni-tab-bar-loading": {
    "paddingTop": "20upx",
    "paddingRight": 0,
    "paddingBottom": "20upx",
    "paddingLeft": 0
  },
  "uni-steps": {
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": "20upx",
    "paddingLeft": "30upx",
    "flexGrow": 1,
    "display": "flex",
    "flexWrap": "wrap"
  },
  "uni-comment": {
    "paddingTop": "5upx",
    "paddingRight": 0,
    "paddingBottom": "5upx",
    "paddingLeft": 0,
    "display": "flex",
    "flexGrow": 1,
    "flexDirection": "column"
  },
  "uni-comment-list": {
    "flexWrap": "nowrap",
    "paddingTop": "10upx",
    "paddingRight": 0,
    "paddingBottom": "10upx",
    "paddingLeft": 0,
    "marginTop": "10upx",
    "marginRight": 0,
    "marginBottom": "10upx",
    "marginLeft": 0,
    "width": 100,
    "display": "flex"
  },
  "uni-comment-face": {
    "width": "70upx",
    "height": "70upx",
    "borderRadius": 100,
    "marginRight": "20upx",
    "flexShrink": 0,
    "overflow": "hidden"
  },
  "uni-comment-body": {
    "width": 100
  },
  "uni-comment-top": {
    "lineHeight": 1.5,
    "justifyContent": "space-between"
  },
  "uni-comment-date": {
    "lineHeight": "38upx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "display": "flex",
    "flexGrow": 1
  },
  "uni-comment-content": {
    "lineHeight": 1.6,
    "fontSize": "28upx",
    "paddingTop": "8upx",
    "paddingRight": 0,
    "paddingBottom": "8upx",
    "paddingLeft": 0
  },
  "uni-comment-replay-btn": {
    "background": "#FFF",
    "fontSize": "24upx",
    "lineHeight": "28upx",
    "paddingTop": "5upx",
    "paddingRight": "20upx",
    "paddingBottom": "5upx",
    "paddingLeft": "20upx",
    "borderRadius": "30upx",
    "color": "#333333",
    "marginTop": 0,
    "marginRight": "10upx",
    "marginBottom": 0,
    "marginLeft": "10upx"
  },
  "uni-swiper-msg": {
    "width": 100,
    "paddingTop": "12upx",
    "paddingRight": 0,
    "paddingBottom": "12upx",
    "paddingLeft": 0,
    "flexWrap": "nowrap",
    "display": "flex"
  },
  "uni-swiper-msg-icon": {
    "width": "50upx",
    "marginRight": "20upx"
  },
  "uni-product-list": {
    "display": "flex",
    "width": 100,
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "uni-product": {
    "paddingTop": "20upx",
    "paddingRight": "20upx",
    "paddingBottom": "20upx",
    "paddingLeft": "20upx",
    "display": "flex",
    "flexDirection": "column"
  },
  "image-view": {
    "height": "330upx",
    "width": "330upx",
    "marginTop": "12upx",
    "marginRight": 0,
    "marginBottom": "12upx",
    "marginLeft": 0
  },
  "uni-product-image": {
    "height": "330upx",
    "width": "330upx"
  },
  "uni-product-title": {
    "width": "300upx",
    "wordBreak": "break-all",
    "display": "-webkit-box",
    "overflow": "hidden",
    "lineHeight": 1.5,
    "textOverflow": "ellipsis",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2
  },
  "uni-product-price": {
    "marginTop": "10upx",
    "fontSize": "28upx",
    "lineHeight": 1.5,
    "position": "relative"
  },
  "uni-product-price-original": {
    "color": "#e80080"
  },
  "uni-product-price-favour": {
    "color": "#888888",
    "textDecoration": "line-through",
    "marginLeft": "10upx"
  },
  "uni-product-tip": {
    "position": "absolute",
    "right": "10upx",
    "backgroundColor": "#ff3333",
    "color": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "10upx",
    "paddingBottom": 0,
    "paddingLeft": "10upx",
    "borderRadius": "5upx"
  },
  "uni-timeline": {
    "marginTop": "35upx",
    "marginRight": 0,
    "marginBottom": "35upx",
    "marginLeft": 0,
    "display": "flex",
    "flexDirection": "column",
    "position": "relative"
  },
  "uni-timeline-item": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "paddingBottom": "20upx",
    "boxSizing": "border-box",
    "overflow": "hidden"
  },
  "uni-timeline-item-divider": {
    "position::before": "absolute",
    "left::before": "15upx",
    "width::before": "1upx",
    "height::before": 100,
    "content::before": "''",
    "background::before": "inherit",
    "position::before::after": "absolute",
    "left::before::after": "15upx",
    "width::before::after": "1upx",
    "height::before::after": 100,
    "content::before::after": "''",
    "background::before::after": "inherit",
    "bottom::before": 100,
    "top::after": 100
  },
  "uni-icon": {
    "fontFamily": "uniicons",
    "fontSize": "24",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "display": "inline-block",
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "uni-icon-contact": {
    "content:before": "'\\e100'"
  },
  "uni-icon-person": {
    "content:before": "'\\e101'"
  },
  "uni-icon-personadd": {
    "content:before": "'\\e102'"
  },
  "uni-icon-contact-filled": {
    "content:before": "'\\e130'"
  },
  "uni-icon-person-filled": {
    "content:before": "'\\e131'"
  },
  "uni-icon-personadd-filled": {
    "content:before": "'\\e132'"
  },
  "uni-icon-phone": {
    "content:before": "'\\e200'"
  },
  "uni-icon-email": {
    "content:before": "'\\e201'"
  },
  "uni-icon-chatbubble": {
    "content:before": "'\\e202'"
  },
  "uni-icon-chatboxes": {
    "content:before": "'\\e203'"
  },
  "uni-icon-phone-filled": {
    "content:before": "'\\e230'"
  },
  "uni-icon-email-filled": {
    "content:before": "'\\e231'"
  },
  "uni-icon-chatbubble-filled": {
    "content:before": "'\\e232'"
  },
  "uni-icon-chatboxes-filled": {
    "content:before": "'\\e233'"
  },
  "uni-icon-weibo": {
    "content:before": "'\\e260'"
  },
  "uni-icon-weixin": {
    "content:before": "'\\e261'"
  },
  "uni-icon-pengyouquan": {
    "content:before": "'\\e262'"
  },
  "uni-icon-chat": {
    "content:before": "'\\e263'"
  },
  "uni-icon-qq": {
    "content:before": "'\\e264'"
  },
  "uni-icon-videocam": {
    "content:before": "'\\e300'"
  },
  "uni-icon-camera": {
    "content:before": "'\\e301'"
  },
  "uni-icon-mic": {
    "content:before": "'\\e302'"
  },
  "uni-icon-location": {
    "content:before": "'\\e303'"
  },
  "uni-icon-mic-filled": {
    "content:before": "'\\e332'"
  },
  "uni-icon-speech": {
    "content:before:before": "'\\e332'"
  },
  "uni-icon-location-filled": {
    "content:before": "'\\e333'"
  },
  "uni-icon-micoff": {
    "content:before": "'\\e360'"
  },
  "uni-icon-image": {
    "content:before": "'\\e363'"
  },
  "uni-icon-map": {
    "content:before": "'\\e364'"
  },
  "uni-icon-compose": {
    "content:before": "'\\e400'"
  },
  "uni-icon-trash": {
    "content:before": "'\\e401'"
  },
  "uni-icon-upload": {
    "content:before": "'\\e402'"
  },
  "uni-icon-download": {
    "content:before": "'\\e403'"
  },
  "uni-icon-close": {
    "content:before": "'\\e404'"
  },
  "uni-icon-redo": {
    "content:before": "'\\e405'"
  },
  "uni-icon-undo": {
    "content:before": "'\\e406'"
  },
  "uni-icon-refresh": {
    "content:before": "'\\e407'"
  },
  "uni-icon-star": {
    "content:before": "'\\e408'"
  },
  "uni-icon-plus": {
    "content:before": "'\\e409'"
  },
  "uni-icon-minus": {
    "content:before": "'\\e410'"
  },
  "uni-icon-circle": {
    "content:before": "'\\e411'"
  },
  "uni-icon-checkbox": {
    "content:before:before": "'\\e411'"
  },
  "uni-icon-close-filled": {
    "content:before": "'\\e434'"
  },
  "uni-icon-clear": {
    "content:before:before": "'\\e434'"
  },
  "uni-icon-refresh-filled": {
    "content:before": "'\\e437'"
  },
  "uni-icon-star-filled": {
    "content:before": "'\\e438'"
  },
  "uni-icon-plus-filled": {
    "content:before": "'\\e439'"
  },
  "uni-icon-minus-filled": {
    "content:before": "'\\e440'"
  },
  "uni-icon-circle-filled": {
    "content:before": "'\\e441'"
  },
  "uni-icon-checkbox-filled": {
    "content:before": "'\\e442'"
  },
  "uni-icon-closeempty": {
    "content:before": "'\\e460'"
  },
  "uni-icon-refreshempty": {
    "content:before": "'\\e461'"
  },
  "uni-icon-reload": {
    "content:before": "'\\e462'"
  },
  "uni-icon-starhalf": {
    "content:before": "'\\e463'"
  },
  "uni-icon-spinner": {
    "content:before": "'\\e464'"
  },
  "uni-icon-spinner-cycle": {
    "content:before": "'\\e465'"
  },
  "uni-icon-search": {
    "content:before": "'\\e466'"
  },
  "uni-icon-plusempty": {
    "content:before": "'\\e468'"
  },
  "uni-icon-forward": {
    "content:before": "'\\e470'"
  },
  "uni-icon-back": {
    "content:before": "'\\e471'"
  },
  "uni-icon-left-nav": {
    "content:before:before": "'\\e471'"
  },
  "uni-icon-checkmarkempty": {
    "content:before": "'\\e472'"
  },
  "uni-icon-home": {
    "content:before": "'\\e500'"
  },
  "uni-icon-navigate": {
    "content:before": "'\\e501'"
  },
  "uni-icon-gear": {
    "content:before": "'\\e502'"
  },
  "uni-icon-paperplane": {
    "content:before": "'\\e503'"
  },
  "uni-icon-info": {
    "content:before": "'\\e504'"
  },
  "uni-icon-help": {
    "content:before": "'\\e505'"
  },
  "uni-icon-locked": {
    "content:before": "'\\e506'"
  },
  "uni-icon-more": {
    "content:before": "'\\e507'"
  },
  "uni-icon-flag": {
    "content:before": "'\\e508'"
  },
  "uni-icon-home-filled": {
    "content:before": "'\\e530'"
  },
  "uni-icon-gear-filled": {
    "content:before": "'\\e532'"
  },
  "uni-icon-info-filled": {
    "content:before": "'\\e534'"
  },
  "uni-icon-help-filled": {
    "content:before": "'\\e535'"
  },
  "uni-icon-more-filled": {
    "content:before": "'\\e537'"
  },
  "uni-icon-settings": {
    "content:before": "'\\e560'"
  },
  "uni-icon-list": {
    "content:before": "'\\e562'"
  },
  "uni-icon-bars": {
    "content:before": "'\\e563'"
  },
  "uni-icon-loop": {
    "content:before": "'\\e565'"
  },
  "uni-icon-paperclip": {
    "content:before": "'\\e567'"
  },
  "uni-icon-eye": {
    "content:before": "'\\e568'"
  },
  "uni-icon-arrowup": {
    "content:before": "'\\e580'"
  },
  "uni-icon-arrowdown": {
    "content:before": "'\\e581'"
  },
  "uni-icon-arrowleft": {
    "content:before": "'\\e582'"
  },
  "uni-icon-arrowright": {
    "content:before": "'\\e583'"
  },
  "uni-icon-arrowthinup": {
    "content:before": "'\\e584'"
  },
  "uni-icon-arrowthindown": {
    "content:before": "'\\e585'"
  },
  "uni-icon-arrowthinleft": {
    "content:before": "'\\e586'"
  },
  "uni-icon-arrowthinright": {
    "content:before": "'\\e587'"
  },
  "uni-icon-pulldown": {
    "content:before": "'\\e588'"
  },
  "uni-icon-scan": {
    "content:before": "\"\\e612\""
  }
}

/***/ }),
/* 8 */
/*!******************************************************************************!*\
  !*** D:/2021毕设/e闲置/pages/tabBar/home/subNvue/homeTitleNvue.nvue?mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeTitleNvue_nvue_vue_type_template_id_472f8d67_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTitleNvue.nvue?vue&type=template&id=472f8d67&mpType=page */ 9);
/* harmony import */ var _homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTitleNvue.nvue?vue&type=script&lang=js&mpType=page */ 11);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./homeTitleNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 14).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./homeTitleNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 14).default)
            }

}

/* normalize component */

var component = Object(_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _homeTitleNvue_nvue_vue_type_template_id_472f8d67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _homeTitleNvue_nvue_vue_type_template_id_472f8d67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "6214d8d7",
  false,
  _homeTitleNvue_nvue_vue_type_template_id_472f8d67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "2021毕设/e闲置/pages/tabBar/home/subNvue/homeTitleNvue.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/*!************************************************************************************************************!*\
  !*** D:/2021毕设/e闲置/pages/tabBar/home/subNvue/homeTitleNvue.nvue?vue&type=template&id=472f8d67&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_template_id_472f8d67_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./homeTitleNvue.nvue?vue&type=template&id=472f8d67&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_template_id_472f8d67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_template_id_472f8d67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_template_id_472f8d67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_template_id_472f8d67_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/2021毕设/e闲置/pages/tabBar/home/subNvue/homeTitleNvue.nvue?vue&type=template&id=472f8d67&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: ["content"],
      style: { height: _vm.statusBarHeight + 44 + "wx" }
    },
    [
      _c("div", {
        staticClass: ["status-bar"],
        style: { height: _vm.statusBarHeight + "wx" }
      }),
      _c("div", { staticClass: ["nav"] }, [
        _c("u-text", { staticClass: ["icon", "location"] }, [
          _vm._v(_vm._s(_vm.iconLocation))
        ]),
        _c("u-text", { staticClass: ["location-city-text"] }, [
          _vm._v(_vm._s(_vm.city))
        ]),
        _c(
          "div",
          { staticClass: ["input-box"] },
          [
            _c("u-input", {
              staticClass: ["input-box-input"],
              attrs: { placeholder: "默认关键字" },
              on: { focus: _vm.inputfocus }
            }),
            _c("u-text", { staticClass: ["icon", "search"] }, [
              _vm._v(_vm._s(_vm.iconSearch))
            ])
          ],
          1
        ),
        _c("u-text", { staticClass: ["icon", "yuyin"] }, [
          _vm._v(_vm._s(_vm.iconYuyin))
        ]),
        _c(
          "u-text",
          { staticClass: ["icon", "tongzhi"], on: { click: _vm.toMsg } },
          [_vm._v(_vm._s(_vm.iconTongzhi))]
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!******************************************************************************************************!*\
  !*** D:/2021毕设/e闲置/pages/tabBar/home/subNvue/homeTitleNvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./homeTitleNvue.nvue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony import */ var _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/2021毕设/e闲置/pages/tabBar/home/subNvue/homeTitleNvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_getCurrentSubNVue) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      city: '北京',
      subNVue: __webpack_provided_uni_dot_getCurrentSubNVue(),
      iconSearch: "\uE628",
      iconLocation: "\uE611",
      iconYuyin: "\uE64E",
      iconTongzhi: "\uE729",
      statusBarHeight: 20 };

  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      fontFamily: 'iconfont',
      src: "url('https://at.alicdn.com/t/font_1087442_fe5vigfwr5m.ttf')" });

  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    toMsg: function toMsg() {
      uni.navigateTo({
        url: '../../msg/msg' });

    },
    init: function init() {var _this = this;
      uni.getSystemInfo({
        success: function success(res) {
          _this.statusBarHeight = res.statusBarHeight;
        } });

      this.nVueTitle = __webpack_provided_uni_dot_getCurrentSubNVue();
      this.nVueTitle.onMessage(function (res) {
        var type = res.data.type;
        switch (type) {
          case 'location':
            _this.setCity(res.data.city);
            break;
          default:
            break;}

      });
    },
    setCity: function setCity(city) {
      this.city = city;
    },
    inputfocus: function inputfocus() {
      this.subNVue.postMessage({
        type: 'focus' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/get-current-sub-nvue.js */ 13)["default"]))

/***/ }),
/* 13 */
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/get-current-sub-nvue.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getCurrentSubNVue;function getCurrentSubNVue() {
  return uni.getSubNVueById(plus.webview.currentWebview().id);
}

/***/ }),
/* 14 */
/*!**************************************************************************************************************!*\
  !*** D:/2021毕设/e闲置/pages/tabBar/home/subNvue/homeTitleNvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../hbx/HBuilderX.2.6.5.20200314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./homeTitleNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 15);
/* harmony import */ var _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_hbx_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_homeTitleNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/2021毕设/e闲置/pages/tabBar/home/subNvue/homeTitleNvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "icon": {
    "fontFamily": "iconfont",
    "fontSize": "42"
  },
  "content": {
    "backgroundColor": "#ffffff",
    "flexDirection": "column"
  },
  "status-bar": {
    "flex": 1
  },
  "nav": {
    "width": "750",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "position": "relative",
    "height": "88",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "location": {
    "width": "60",
    "height": "88",
    "textAlign": "center",
    "lineHeight": "88",
    "color": "#ffc50a"
  },
  "yuyin": {
    "width": "60",
    "height": "88",
    "textAlign": "center",
    "lineHeight": "88",
    "color": "#000000"
  },
  "tongzhi": {
    "width": "60",
    "height": "88",
    "textAlign": "center",
    "lineHeight": "88",
    "color": "#000000"
  },
  "location-city-text": {
    "width": "60",
    "height": "88",
    "lineHeight": "88",
    "fontSize": "26",
    "color": "#000000"
  },
  "input-box": {
    "width": "465",
    "marginLeft": "5",
    "height": "60upx",
    "borderRadius": "60",
    "backgroundColor": "#f5f5f5",
    "position": "relative",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "input-box-input": {
    "width": "330",
    "height": "60",
    "fontSize": "28",
    "marginLeft": "30",
    "placeholderColor": "#c0c0c0"
  },
  "search": {
    "width": "60",
    "fontSize": "34",
    "paddingRight": "30",
    "color": "#c0c0c0"
  }
}

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9EOi8yMDIx5q+V6K6+L2Xpl7Lnva4vbWFpbi5qcz9iYmY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9EOi8yMDIx5q+V6K6+L2Xpl7Lnva4vcGFnZXMuanNvbj81OTI4Iiwid2VicGFjazovLy9EOi8yMDIx5q+V6K6+L2Xpl7Lnva4vcGFnZXMuanNvbj9hYmUwIiwid2VicGFjazovLy9EOi8yMDIx5q+V6K6+L2Xpl7Lnva4vbWFpbi5qcz8wNGE3Iiwid2VicGFjazovLy9EOi8yMDIx5q+V6K6+L2Xpl7Lnva4vQXBwLnZ1ZT9mYWFkIiwid2VicGFjazovLy9EOi8yMDIx5q+V6K6+L2Xpl7Lnva4vQXBwLnZ1ZT84ODI5Iiwid2VicGFjazovLy9EOi8yMDIx5q+V6K6+L2Xpl7Lnva4vcGFnZXMvdGFiQmFyL2hvbWUvc3ViTnZ1ZS9ob21lVGl0bGVOdnVlLm52dWU/MWM3MCIsIndlYnBhY2s6Ly8vRDovMjAyMeavleiuvi9l6Zey572uL3BhZ2VzL3RhYkJhci9ob21lL3N1Yk52dWUvaG9tZVRpdGxlTnZ1ZS5udnVlP2E1NDUiLCJ3ZWJwYWNrOi8vL0Q6LzIwMjHmr5Xorr4vZemXsue9ri9wYWdlcy90YWJCYXIvaG9tZS9zdWJOdnVlL2hvbWVUaXRsZU52dWUubnZ1ZT9lZWE3Iiwid2VicGFjazovLy9EOi8yMDIx5q+V6K6+L2Xpl7Lnva4vcGFnZXMvdGFiQmFyL2hvbWUvc3ViTnZ1ZS9ob21lVGl0bGVOdnVlLm52dWU/YzYwYyIsInVuaS1hcHA6Ly8vcGFnZXMvdGFiQmFyL2hvbWUvc3ViTnZ1ZS9ob21lVGl0bGVOdnVlLm52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUvZGlzdC9nZXQtY3VycmVudC1zdWItbnZ1ZS5qcz8wMDI2Iiwid2VicGFjazovLy9EOi8yMDIx5q+V6K6+L2Xpl7Lnva4vcGFnZXMvdGFiQmFyL2hvbWUvc3ViTnZ1ZS9ob21lVGl0bGVOdnVlLm52dWU/ODUzNSIsIndlYnBhY2s6Ly8vRDovMjAyMeavleiuvi9l6Zey572uL3BhZ2VzL3RhYkJhci9ob21lL3N1Yk52dWUvaG9tZVRpdGxlTnZ1ZS5udnVlPzgyOTYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiXSwibmFtZXMiOlsiU1RBVF9WRVJTSU9OIiwidmVyc2lvbiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsInJ1bnRpbWUiLCJnZXREQ2xvdWRJZCIsImUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsIk9iamVjdCIsImtleXMiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwiaSIsInNpZ24iLCJvcHRpb25zIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0U3BsaWNpbmciLCJkYXRhIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwicHJvY2VzcyIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImdldExhc3RWaXNpdFRpbWUiLCJQQUdFX1JFU0lERU5DRV9USU1FIiwiRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsIkxhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsInNldFBhZ2VSZXNpZGVuY2VUaW1lIiwiZ2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJUT1RBTF9fVklTSVRfX0NPVU5UIiwiZ2V0VG90YWxWaXNpdENvdW50IiwiY291bnQiLCJHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zIiwicHJvcCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNldF9fRmlyc3RfX1RpbWUiLCJTZXRfX0xhc3RfX1RpbWUiLCJnZXRGaXJzdFRpbWUiLCJnZXRMYXN0VGltZSIsImdldFJlc2lkZW5jZVRpbWUiLCJ0eXBlIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiJG9wdGlvbnMiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwiY29uZmlnIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwidiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJyZXBsYWNlIiwibXBzZGsiLCJTREtWZXJzaW9uIiwibXB2IiwibGFuZyIsImxhbmd1YWdlIiwicHIiLCJwaXhlbFJhdGlvIiwid3ciLCJ3aW5kb3dXaWR0aCIsIndoIiwid2luZG93SGVpZ2h0Iiwic3ciLCJzY3JlZW5XaWR0aCIsInNoIiwic2NyZWVuSGVpZ2h0IiwicGF0aCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsInVybCIsIl9zZW5kRXZlbnRSZXF1ZXN0Iiwia2V5IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwicmVxdWVzdCIsInZhbHVlIiwiZV9uIiwiZV92IiwidG9TdHJpbmciLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJ0dG4iLCJ0dHBqIiwidHRjIiwicmVxdWVzdERhdGEiLCJwdXNoIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJmb3JFYWNoIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImFyZ3MiLCJjb21wbGV0ZSIsIl9sb2dpbiIsIl9zaGFyZSIsIl9wYXltZW50IiwiX3BhZ2VTaG93IiwiX2FwcGxpY2F0aW9uU2hvdyIsIl9wYWdlSGlkZSIsIl9hcHBsaWNhdGlvbkhpZGUiLCJlbSIsImluZm8iLCJlbVZhbCIsIm1lc3NhZ2UiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwiY2FsbCIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiIsImdldEN1cnJlbnRTdWJOVnVlIiwiZ2V0U3ViTlZ1ZUJ5SWQiLCJ3ZWJ2aWV3IiwiY3VycmVudFdlYnZpZXciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxjQUFjO0FBQy9ELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUM3NEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0k7QUFDdEk7QUFDNkU7QUFDTDtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFD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SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGFnZXMvdGFiQmFyL2hvbWUvc3ViTnZ1ZS9ob21lVGl0bGVOdnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdGFiQmFyL2hvbWUvc3ViTnZ1ZS9ob21lVGl0bGVOdnVlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3RhYkJhci9ob21lL3N1Yk52dWUvaG9tZVRpdGxlTnZ1ZSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJcIn0iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIkBGT05ULUZBQ0VcIjogW1xuICAgIHtcbiAgICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCIsXG4gICAgICBcInNyY1wiOiBcInVybCgnZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtd29mZjI7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R01nQUJBQUFBQU9Ma0FBc0FBQUFDSnZnQUFPS1NBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUhFSUdWZ0RDRkFxSHJ4aUY2akFCTmdJa0E1Rk1DNGhvQUFRZ0JZUnRCN2xVVzJLL2tVRzA4eTlxR3RpK3JRbzg5TzhKUDVsdTdwVGVMQ0hHZjZFckttUm5EK054Z0VLK1RQYi8vLy8vQzVMRkdQUCtnQU9BTjYxV3JWeVdOY2prVWxGWVV4TXl1c2xEdzcyaVN4VWRaZkxtVUs3R0Q1aFJaS2NKZmVIaktKcVRQVTF1ZEQ2anB0TjR4NExlOFZOeHNWN2lpM3RBdmVKbTI0eFI3UWlvQ2YzV2VXYjN4Mm84d0ttNG9qNHd6T2tQejgxTkRSaGNWUEh1cjVsdDZKbTBmaWlrdkhNcSs0bTY2SzVvUTlFK29uZXVlQzFlUTJZemtja0tscFZkRlcxNTBaeit2aVg3c0ZsQkZ3Vi9iVjdwSE9jYzRhaGdpUXF5Z2lRalNCRGtIclJ0Ni9ZMmUzcGZlcjBlN091R2xtQmxDNTcwK0U4L1VDSkxLTWQybEdob3FUT1ArK1NmN3dmZCtlK3VIYk9hb1JRakNGMG9jbE5VbzNaSlV1cjdnZWIyNzJKMXZRYldvSVRVQ0NNWllkUjNwRFlUck1ERVpvU1J6T3BoSThiQUtKQ0JHRDJzZ0ZrTlJzRVgrMmR1dDBPc1RoS3RRVnY4aUZrb3ZLT0V6V3VGZ2hpajdYdXoxRlR4UjBVVG9SRUtLZEFpTXhjQXcvTno2LzMvVi9VM0dQU0NTSFZzdE1UWVJ2U0lqWlpSb3d4QUpDd0dnbXlLaW9VYkJnTVRNRkN4QUdYV25aNmc2Sm1uQ0ZkNmVpZWlubDRZOURsNjRuLzZwdzcyNysxcHFrMmtpVVVZYVV6NS82bnJQUU5hMEJOM3hDVGxVVWdnOHNMRy9GdW5VSDRYalp2U1pXdWZmcjlmai9yK2RJWmsxb2dxVWErZ0sxcUNhRU5LV1VMYXpTSjJCSldoY3kwSzFKL3BjaFVKOUV0eU5reGpPMjNHQ1BHaHBCQXZEemtFVkdVcXY1eFMyQ0pBaFdPRXZGY1dRTUNnbnIzZlFJVUdvOTc2UGlOSHRvbXVFeEt4dVAyMUlPb2pjMXYvb1JOcXVyaHd6UFRCdUxrakJyK1o5cEluUHBCbTdPeDdZN3RIR0xyckkwcHl5S2xnb2JDN3BtdlRsTWcvMHEvMFBnWDJlQ0V3NWtCaElid0hTVXBrZUFqTHB2WDY3QXVEVURmZDI3M1VwSkJBZTJFbW5mOS9idlprWnI2UmJhaEd3QU9oSGtHczZ1KzlHeXRGcWpLZURaeS9JNXZ0TjltTGVHZ2hYWXJETUdhWXhVZmdnelQ2dW5GcGQ0NkZHSVlZOHZ2QWRtUHZTUHhmVHF1cU43ZXF6dUlIeVo1aFEyQUI4U1l3aEdTbjQ1bDJCOTFjRitrcVh5M0xNTU5HZVJDVFJicHRCaWpJZ1FWeVVKTTlBRzhWVFFFWW1RZEFGZHgrSUVvZ2NieHR2amJyZzlPK0I3dGVRcEwvUGRMeVRhUnRSYlV2Y0lWclVSQm9uUUZ2ODBuU051SnRKU3UzM1ZkYjlBVko3QnpBM0UyM1I1amRMZHB0ai85N25yQ1ZXTVNSUEQ2QThQZW1XcVhkc3FDMEJwVEdjTmJjYWM1U2EzemxkMzZOVGRJTG92ZC93L1R2QmloMGc0UUlnT0FJaEhnREVETGRBR2NHSUVnZGFNUWhKTzBzYUVaRHJiVEcrbTZDMUhRVG82bHVRZ1lnMXpRazNSYXBkZFE2ZTg3NTZPb2lwN3NrMmlDOEpKekxidFBzZ3ZEQ0MrTDhxUCs0Y1o1b3RnRDI3TThKV0ZmTG1tVnJQc3BZZml4dkZJVXlqM3lIUEdaN2UydXZyMnNJdVdsU0d2S1N3dHcrWVE2eUMxSHV1WHVIWm9WR2V2NitWTE1ybWlRa3pZeURaaHlqTnNYRGhaeTBNUjdYMTczdERmLzkveHY4LzNkUWR3T2t1NXRCRFpDVUFZWVJHZ3dDU0VuZElFaDFnNkJNY2poVGxPejFTdU1vYjVLejdFMERrQlBJaVpRMng4dE5ucE5Edk56MmN0UjQ0M0ZQeDRVYW9xVUduVktxRmdFdWIzOVAzaXdwVEs2MExkVnJZUWxCUWhBUkVSa2t6SmE3eDNPSHNWbUgzaTV5ZFp1RllqUWdiZFRuLzdHWlBWSld2UFcwVVNEQmRBWVkrK09idXovWnJCL3V1aWJmdTFQZDN5STFyRWdnZ1lpKzBQMkpiWDArMEkzbUVFWVdrSkJJQlFUSkdZY3lmcDhDZXBZcDRBbmZ6bDFVVHM4QmNBT3RJRWpjTXpRSUFZZnJreDBBWjl6N3RJR3c4UU0rdVBrQklTREE3OXdsRG9odE5SQ2lpN3VHVC96UlB4L01IaUhBQUErRGE4MlBFZjA5VEsraFk4VDYxK2JadHQrNklEN2RGUWpBSzNBQnVHWjBZM2RqaHYwaXI4Z1R2WTg5enVzRTRJMGVEdHovUDJmTG0rdWIyNXRuaHhVNTRxU3p6cjhjZTNuNzViY0wvK3ZhMFBKV2R2bFZhcy9uN3I4Z056NnhwMHV1UDYzcTVmZjBqOSsyWEpNL2V0ZjdEeGhIZTlPb3g4THB5T3M3WUoyd2J2UzJiM05GQnlKeGttWTJML2U0WlZVM2JkY3Zsc05xdmRudTlvZno0NGtUUUFBUkpsVFZkTU8wYk1mMWZJVU53aWhPMGl3dnlxcHUycTRmeG1sZTFtMC96dXQrM2cvRW91YVIxYlAzbkgzdHlYTUNKM0lTSjNNS0YrVHk4T0hseTQ4Ly9xWFNKZ2lqM3V6L24xOWUzOTY5dE5rZFRwZmI0L1dCV05ROHNucjJubVVqTm1ZT08yTVRObVV1SStheEdRUGp6R2R6SnNxcWJnWWE3VkNuSDQwdEpwWlRnOVdzblZzdmxpdWI5Y1oydTdQYjJ6dkF4ZVhoNmhybm0xUDB6ZTNkL2NQeng2Y1hqT0NsVUNTV3ZucjlSaVpYd1ArUHFWWGN0Ky9lWStpRDBVZGpqb25wcDg5ZjFGOERVMkVVSjZiMUJxUEpuSHJocDFtTDlWcXp2Q2pUVnFwME5SdnFOamFhMm14cXRXMjJSVHQxQ0JRR1IrUTVLRFNtTURVOU15dkE0YXZ6QytLR3BDa2xVNmkwbG9yQmJLOXEyUnd1ank4UWlzUVM2Zi82eHVhV1U5Wm9YTGM3ZSs3OGhhSGhrWXVYUmszQWxUL3hobURra1QrVlJtY3dXV3dPbDhjWENFVmlDVlllZWV3SkJyYWZCRHVlbWZUOFdVeTUxTmFIY3ViYXgzbmR6L3Y5QUFqQkNJcmhCRW5SRE12eGdpakppcXJweHRnSWhxUHhaQXJvbUMrV3EvVm11OXNmanFmejVYcTdQNTZ2OStmN1UwQlpIQ05JaW1aWWpoZEVTVlpVVFRkTXkvNHRTMnNZRmtDTzErb2NrU0JLc3FKaW9qZWNPWTdyK1VFWWJiWnhZMU9qQUpCWTFEeXlldlllUUlRSlpWeklpblMvWGVBblNRSzlWMEt5L1MvMG10YUN1eWFLOFJCaVBJVVpMeEZHSllaUmkyVTA0aGl0ZUVZbmdkRkxaQXlTR0cvSmpJOFVwcGxVcHJrMHhsYzY0eWVEOFJkbEFtUXlMV1F4Z1pveFFab3p3YktaRUMyWVVDMFpvMVpNbU5aTXVEWlFyaTA0dFlNSzdhRlNEcHlUQzFYeTRMeDh1S0FEWE5RUkx1a0VsM1dHSzdyQVZWM2htbTV3WFhlNG9RZmMxQk5jem9OcTU0UFFCWEJMQWR6V0MrNG9oTHVLNEo3ZWNGOGZlS0F2UE5RUEh1a1BqdzJBSndiQ1V4ZENqVUZRYXpDNERZRm5oc0p6eGZEQ01IaXBCRjRwaGRmSzRJM2g4TllJZUdja3ZEY0tQaGdOSDQyQlQ4YkNaK1BnaS9GUVp3TFVtd2hmbGNNM2srQzd5ZkRERlBocEt2eFNBYjlWd2gvVDRLL3AwR0FHTkpvSi81c0YvOHlHSm5NWWlJc1l4RndHVmNWZzVqRzQrUXpQQW9adklTT3dpQkdxWmtRV000UWxER2twUTFuRzBKWXpqSXNaMWlVTTUxSkc3REpHWWdVanRaS1JXY1hJWGM0b3JHYVVyb0JUMXNCcGErR01kVkJxUFpTNUVzNjZpaFM0bW53QlhFTytCSzRsWHdFYnlOZEFEZmtHMkVpK0JUYVI3NERyeVBmQVp2S0RMZVJIMTVPZmJDVS9xeVcvcUNPL3VvSDg1a2J5dTIza0R6ZVJQOTFNL25JTCtkdDI4bzlieWI5dUkvKzVuZnp2RG9DNEV4QTdBSFVYWU9vQjF3QThPNEh2YmhDNFp4blpYZ0NSKzRDd0MwaU5RTmtOdEQzQXVCOVlEd0RuUVJCN0NDUWVCcWxIUUdZdnlPMGp1N09mN01Ham9QQVkyWlBIeVY0OEFVb0h3TU9UWkcrZUFrOVBrMzA0Q0Y2ZUlmdnlMTm1QNTBEbGVWQjdBVFFPa2YwNURGcEhRT2RGMEh1SkhNQlJNR2dDYnkrVEEza0ZmTHdLemJ4R0R1SjFhTzUzNUdCK1R3N2hEYklTdkFtKy9nQiszZ0oveHlEQWNXamhiYklLdkVOV2d4TmtEWGlYck9jOXNvRS9RcUQzSWNnSEVPeERDUEVSaFBvWWpENkJNSCtDY0o5Q2hNL0lSazZTVFh3T2tVNlJ6WndtVy9nejJjcGZ5SGIrQ2kzOURWcjVPN1QyQmRtQkw4bE8vSVBzekZlenFkZEFkdVdmWkNuNEY3VHhEYlIxQnRyNWxnRE9rbVhnTzJqdmV6TGdCK2pnMzJRQitKRXNCRCtSeGVBL1pBazRCeDJMUUtmaUlLb2tzcHVhZ2FubUVGMTc4aUVvQjJMS2hkanlJSzU4NkZ3SDhoR29JL2tZMUlsOEF1cE1QZ1YxSVorQnVwTFBRZDJnUzkySm9CN2swSHFTd3pxUEhONzU1SWd1SUVkV0FGM3JCZDBxaE80VlFZOTZrNlBxQXozckM3M3FSNDZ1UC9SdUFEbW1nZkJmRjVKakd3UjlHZ3ptaHBEakdrcU9yeGppR3dZSmxaQVRLaVVuVmtaT2FqZzV1UkhrbEVhU1V4dEZUbXMwT2IweGtOaFlja2JqeUptTkoyYzFnWnpkUkVpcUhKS2JCQ2xOaHI1TmdYNU5KZWRVUWM2dGtwelhOT2pmZEJqUURCallUSEorc3o0R2xWelFuSWUzaThpRnpTVVhWVVV1Ymg2NXBQbmswaFljOHhVQ3VheEY1UEtxeVJVdFBqZ3FnUU1xQlhKbHk4aFZMU2RYZHpHNXBrdkl0VjFLcnVzeWNuMHJ5QTJ0SkRlMml0elU1ZVRtVnBOYnVnS0d0Z2JTV2d2cHJZTmhyWWZoWFVsdTdTcHlXMWZEaUs2QmtWMUxibThEdWFNYWNtY2J5VjF0SW5kM0hibW56ZVRldHBEN3VwN2MzMWJ5UUxYa3dlcklRNkFieU1PZ0czZnNhNFBsUVp1QVBBSzZtVHdLdW9VOEJ0cE9IZ2ZkQ3FPNmpUd0J1cDA4Q2JxRFBBVzZrendOMmtHZUFkMUZuZ1hWaytkQURlUjUwRTd5QXVodThpTG9IdklTNkY3eU11Zys4Z3BvRjNrVjFFaGVBKzBtcjRQMmtEZEE5NU0zUVErUXQwQVBrcmRCRDVHMWVoaEd0NSs4QTNvS3h2UTBqTzE1OGk3b0VIa1BkSmk4RHpwQ1BnQzlDT042Q2NiM0drem9kWmpZN3lHak4yQlNiOExrL2dCVGVndW1kb3dzaDk2R2FmMFJwdmMrWlBZQnpPaERtTmxITUt1UFlYYWZ3SnorQkhQN0ZPYjFHV1IxRXF4OUR0bWRncHhPUTI1L2hyeitBdlA3S3l6b2I3Q3d2OE9pdm9ERmZRbEwrZ2NzN1N0WTF0ZXd2SC9DaXY0RitYMER0czdBeXI2RlZaMkYxWDBIYS9vZTF2WURyT3Zmc0w0ZllVTS93Y2IrZy9pQy9VYTRQNGoyRi9FYWtLd1I2ZjduWG1EL2tBWElJMUJFb294Q0ZZMDZCazBzMmpoMGlkRW53WkFVWXpKTXlUR253SklTYXg3WThzU2VGNDVVT0ZQalNvTTdMWjUwZU5QamE4a2RSOHVCZTRCVzNxM3RNbkRmbjRRTFlrb1FqZ1RqYUFpT2hlSjRHRTZFNDJRRVRrWGlkQlRPUk9Oc0RNN0Y0bndjTHNUallnSXVKZUp5RXE0azQyb0tycVhpZWhwdXBPTm1CbTVsNG5ZVzdtVGpiZzd1NWVKK0hoN2s0MkVCSGhYaWNSR2VGT05wQ1o2VjRubEZ2Q2pEeTBwNFZSbXZxK0JOVmJ5dGhuZlY4YjRHUHRURXgxcjRWQnVmNitCTFhYeXRoMi8xOGIwQmZtaUlueHJobDhick5RRk1hNG9aelRDck9lYTB3THlXV05BS2kxcGpTUnNzYTRzVjdiQ3FQZFowd0xxTzJOQUptenBqU3hkc2Q4V3VidGpkSFh0NllHOVA3T3VGL2IxeG9BOTIrdUpnUHh6cS84ZGhCaWNZUGhqNzVjL3ZmL25yRGxtZTJtR2ViZ2Irei9JRHlVRmRZSTY0eTRMbDJxNGdYODJ2UUpDaU1yaTdrTXhDMGcyc2RnOUl1TmVDNkFwZTRCL29pNW9YSmprUGVBTXIzQlBxQ2pNY1BrQTZMRVBMaUNxcnVWRHRnRUIyZHd3QzRZYWtIemg0R3hvRWJSbnA4aENrd09vandvVUQxM2lzZ1F1UXdLdmRieDltUUR4QlFtWmY2Njd1am5IWThWUm1nTFNoSHBnQjVxRWVKa0NIcGxDNEtIYWhEaStxYXNNUkxmUTIzOU5zWHdMd0UxejR1QXVXY1dsek4xUkc4aGdPTGpDTDczaUJjRnc3alRRTG9CajZySTRNUVZzNVUrNk9tNUZMT1FiSzB3aDR5aUlqKy9YMTQ3Wm5yS01JWThSQkFEckJDQXBFeHllV0VQckluNHFWYTRSUHZFaWdqaTBCd2tsV0g0VlhlZ2ZlUGxOckJWRnVrb3MyZDRKNFRlSFdDdXFCRzJ3Z0NpS3NVVjUvUnVsemlvdEpvaFdKM3VYeTJHd05tRWUwUjl4WHFvamdFZWhzemxQTXhsZ2xDU2pJS1E5WTc4MDhTMGM1QzQ0SmlCWkRIb3NIUGRCWkN3NEcxeTFMaG5yZW53UVFJZ054YTBQcHdDUDNBb0NZblhrRXRuRWhHTGZiRERVMWRVTlVnNmp0eHRGdlF6N0lJU0toOURDUE9aVDlPb0RSY0RrTVB3VFdRdytCTVFHRUhndE9nWENFTkVKNDFXY1pHd1cyaHd2SExZV3RVS2FZQUFwTm9Vb0hhVjFYRGRRVTRnZllleklHQUFjVHNCMytyWWFwRG1YM3djN29DVlgxL1ptUDJkL0M3enMvVkZuQndkOVdxUThVSEQwcDRYZktrZk1HY2pwSzdmWnhMQ2JRZ2VYY0MrWERyb0FhbTUxTEtnYkMwSnUvUEJ5c01TSWtBcWF0d3ZjbjhWVEtLbmM3RGw1VkpJUVJBaU1XWC9lUWs0YUUxZ21BMHVKNFFPeSt0OEFKbGxzcjVXMVhCR24wYVd4RXRDSUs5R0FVS0pmZ2x1M3JGQU5pRzFLV2dMb1luUk84c2lXZ2l3RmNIamR1SG9jQncvYTZnaEFBelcvWGNlQkFHU1VJT0FiUFcvWFRpOUlJY3NpSldubUhYbTIzWWNna0hnMXBzdXZMRlcyZk5oMEhiQVV4aVBCb3NPUTZRczhTL2ZNekpDQ3RaOTE0UjZpYklNNjJiUWQ2QjcxZFZSL1pBM2U5eDA5Uzc5UFJXSjZCSGM4QVUwQVdaVUZMWnlwWVltR0FJSDUzRzRPQUxZbkRjd1JRR0FBQnlnN2wxc0FLbit6QWpucm9nRG1rbFBKcWRTNzhTYVNpYVExZ1VlcVFvRnNJQ3d2WWUzWTQ4UGlzMlNiRmpwNkZXb0VVNTR4YTcyZkVrUk96dXpDTFFyWGFtbENtUkh1bGxqbFBQT1pBVEdjeHpEdW5ZNUlxZ014UjlJajVoam5tVU12azVpeXhTTXd3T3MwWFl2dkpTR1hnZ0pFOTI2Q0ovcytyRTVFamJNNlA0eW14RnR5L2xwUUxCOUdScUJpQUI3NEZIalhmNDBKa2w1WUpVSFdwRDd0TWViWnJhZUlVaVRieEZpK082MHluSWhabmtCMG8xYmkrVVExL1p1eHc5QW9POGFnVUR4VElsdXNEU2JZUUJwU2Ixb3huTTdBTFBnaGU5TWlscW5HbFdpWGt2TGgyYVBUUHA2SS9UdmRpT0MydzBLRGtrRFFIQUF1UGM1OXpsdTRWaGoyNjd2YS9qZ05JbzFxdnU5ZVBqK1NUU2oydFU2QXZMeTQvV3oxV3hydDdCYUNvc29LTEl1VWNpQTUyRk9MNDkySE1HTGlTKzYzNklkdmxWMXBkaE5jSlZKYnZqejRGUVYwZTEwd3Vsc2srQzRMSGRnaU04Z2s0N1B5OXRZbnBMQkRMcll4Zys3aXlyY0tSUE1ubjJ5cnMxUUE5RmlMRVF0OWJwQlZ5bTNvOGgvdTlzM1NEUGc4OVRLUUFjdjVnVXo0MXduY0N3UGg1UjZzMWJuSFl3Mkl4TGxVd29FV000Z1dISGlkUUcvd0p1Q2hjRjZwZmx3NEJIZVNjcDhCbUVUWVZqeTNIeWhGd1hnZkNiU1h1cHpROVY1cmdIUFB4MER2bUFrYi91TkZ4QTN5akZJVGRaOURBU2E4UWs5TlJIOVpxVnhTaGpRR0x5SEpMRGJZN0ZmSFYzdmRtL1NDbXMybWl4STZXS1pIQis1UjR1OWVld3oxeVNBQ0xUdFhuejhxMEVPUHdBVXZRY2dXd2NTMnpLSWsyOFRGb0pPSTRIWUhyalFRRXRCRnFGSWxRUkZaV3JVRWp3RjV5UXp0S3N6WkJHU2xGaFIyTjJqb2lWL1FmNUYvTVVKL1ZvenNMVG9xUGtPWUFhQlVOMkV3UXgzbUJrWmJmWnQ1MDByVWorZ2cvTmZrOEZINGU5YUdxRTg4Wjk1Qjd4TUp6WjZRMVVUSjJ2R2g2aStMdk8xQXpvQTBLQXhCZm5BUGdjT2JOcjNFOGsrdmU4eHlLaUtUbm9RaUVFY0ZnM2U5MGlycmRHYVF0RUhYZnlxVlVTaGJpbGlpZEkxcE0wUGN5SnRLbHA5NDNONm8yVFVkVWM1VHJQdXpQSUd0MXNHcmpkRXkxNFdXeFlzeWt5K1dCczFYM1FYOENGVVB5eVpOZWlFOWFFL3JqN0NkVHJvK3N6WnFMZWtOc3dLbklHQWlrSFF1c243ai9CWmowU25CbW1CQWpmdWpYUlJabkVzcXl1eFNQRDUweGxJVkNLaE1RdWNhRmRxTXhuQXBKZjJNNnl4aysrNm9qOEt5WWU4dStoU0FReXh2dmhTYm1RMXZIcmI4SzFydjVOMTIyZWg1TmVYQUdtcDM0SWdmYnU5MlByaUthb3BYRzA4SkZFMld6RzA2U0dTd2N0UWFiMlhWY1dvQVg1N2ZpYnZrSXo5SGNVZjJrWEw2a1Q5OGF3aGlIWDNUb09HT0V2NkVaTUU3bWVMdFFpNU16UEQ1RjAzTXl1ekFpc25hVDRyTy96YStJYUNhbDEwMStLb3NzWGl4RTF1MWVOZ3dpa2ZUaUQ4T1hzYVpnOUlVdW8yeWQ0WExOU1J4R3BKbFZwVnZrR0hQSkFoZldieWw0OTBob3NxdTA4a0RJMTU1T04veXd3RjFVUUZQQ2JpKzZMRU5aT0FoZ2dNVDgvelM2WkxNU3hieEE4R0k3cURXQUJSS0dJSkIrSm9yV0ZXaUNDdlVrZENIM3lvZVNoWktqRExsTFJTYnRzaXFJSmFwVE44L2N2NXdBY1pNVk8veTZzd0x1RmxLMjlzUkFNZjYxUzRPWVROMXZmeEQydEJ2MjRuNlVPZ281TENYb2hnV0dVRmU3OWNkbnZxbDJjaFVMMnZZaGFNVG1lY0NRYll1eVUvZmx6czRWQm9tYlcycW45NkFNK1pJWWNLaVk1UDVFR1RXYVF2SjBUdFVON2FmYzB5ZjAyVitzVEQzOWUvZG9IdnpRL0dRTC9mYzJ1Y0F5VXpFVG9BMHhQQVlhRXorSmpJbllXd1NYN1gwL01nQ3VJSGFFN3JCdldVdFlld3dkTFhCYVJFQzRHa0lNVUJrQnJITkJ3VXd1MEZBQm9yN1NOOVBxRnFQZWJqNHdvWllGZVJOZzBTRDV2M1lkMERxc05IZ1hldDR0VEtrelhBUk93b2RNdmNHSFBqazJUUnNiZ0JpN0tJMTd0MEtUU0VYK1ZhMWo2NGE5K2hycmEzVytjaXVRdExMTVp4TzdKWlc4Rk5ySW9UQy9WWkdQY1RDK0pjZzc4cndvUkIvQndUVTVyM2wyUXUzVjcxUldiRlhTSjlSN1dEd3RieUVUK0ZaUDBucDRVdEd0NTNNcUllaFRuZGN4QWhQdDdqTytRaXFnckE5MWk3V2RqSUJ0TXRqSzJGOEx5QTJpenVTREk5N0JReFljak1tZmY0N3p3MGxSQ3RPTVYzU2VLUFB3Q05EdVJOanQ1UUs5M2hOMXV2WXl0Vmd2QkVVdUxRamU2VGxrSjlSemRjOUl4cWY3NmNUeW5ieWsvcDJTclZ1aE9iVlJLdmVvbmR5bTFMbzY4cXRWeEF6Y2U4dzljbHBZcFl5akRtd1pwaWdyRUxRRTFzMDJLS0UwNEg1SHd4VUp6OG41RWVjdWJqTUVUck9aT3dwREtmTkR6M3R4aFhOZ2JlbGZYdnc2VzFnN2x0SE9hZnUvaGp2YjlxeU94b2ZneHU0RDNDdkh5clJ3MlZhQUROUUN6L3pjYVNvRGFyMlVtTlB1MVJlMThlbEpwTDJvVDZISkpkek45UXBUV2JuNzlmeDJWMVRYT251eUtPWFNURlI3dGxxK1YwcTIxdmtLZ3RnbEFZYmtzeVQxaERDQ2VId1lYczAwbThhZWphTHh2RHNkaGdNL1ZLMTcwUlgwaEliWWpnV2JzeW1sVHBxZEF1bHpyS2E3ekhPdlZ1aDc3N3hoZTNJZzFwb1FhMW1tMWxsRmpkZFdORzF0MjF6TzBJTDN5aC91KzRNbGdBbmg0R2lsV2xhc1JkZnRqb3NmNkhHTnhLT1o2SU9FYzhLd2JyUXVZazcxV0VOcW9jYmxxbE10TklBWUJaSENQYlp3TXRuSXBCaHVRSnlDcXBSdG5LcjNZWkF4RzBHOGV5WThERkE1MUdEVCtvbHlmNzNhcTVmL1RHQ0ExTnJpU1RHZTAyV205aXMvSEJwdnhhRmpIZmJJMldEY202ZFJQKzZGNnJITnMrUDBNR0NqSHhvNGwycVNCemE2Yjl2RzNUbVByTTFoNE9VL3BTTG92N2Ezd3NrMDYvcitUZDExNE8zclhMaTliSlpKNk1zMWF3UElvVjc1SWt4TEo2ZkM3bzdrWHFXUVE1ZXU2SGxMWHVQTTI4MFFIZGFDRzNiSmFMeWFUNGRDV2VEdjZJYzdJdVVFK2VKbms1MmhkcnZkVzF4cmVNSitlMGxwYTVablFMUHpFeldaWCtZOW51VWRodUMvL0grVEdUQWM3bHp1U1FSaEc3ZGxRNUtFZTl2Mlo3NHdZV0RBRlhYbXkvby8xVjA5azYwNWp4dWsvN2ZzdkNYbDlKNHNlWTdidzgrYm1VY0cvMEZlRXNQU0hobytyV05UWWlqS0d2Ymo3U0pGQmdsaVcxazQwMi9oOU1yYUc3ZXhWOUVGdWNXTmdTNUM2QlJhTnVrdHl0YUZ1d0JwRW9DbDRUNTh5K09TdjU5dkRpUmZlUDZqOHlRMnAvMHA1QkJ6VnRwRnlyMHpERTNOYlJTY2c2WFdBb0tvLzlnTUNUZHBzMmxNVlcweFgyeWYyZUtvVWduRVVDbzZGYkxXeDVzQ2JjcVJtYUczbUlmU201TllIWmpyYy80Wi9LS1VDOFlsdlFIK2xqNDI0V3ErS3R3TlQrV2ZKa2NLbEN0bmlKaEZtcldYNHFVUnNSS1hKd2Y1RVQzeWVqT1hKUlZ2OEV2QUMzcXRybzY0TlN3ZzJtZkZDbE0yQUtMUGJURXdSSVdLRXZRZU5wcnRMaWYwdUJUNWU5MXkyWmRSUm1UWjBHbkxRTWE2R3E2d3JlVW9XVnl1alV5aUl6VGJ1dkdEZlc5bXdEL0l1bEN5enJPdndTTE5pQ2lqc0JkeExtNkxaYzE3RTJKa2RCU0N5OXdXUUJWOGNpUWFBK0cyYzNCdWt5YU4yWmRTQmlHcFlkcElQMi9jYWNwZjhuUnNkdW5WT0cwMUtERUVLZXN1UjhjZlRrZXVxR3ZzdzRjZmo5QzNib1BHWVZveDRpQ2JFNTF6MHNwSU9ranhreUtCM05KQWkwTzk4YURncFdKM2VOTmtRNmc3N0E4di9WUEl4YTI5TjdlN0Q2eXpURG9uOHZ5dGxLR0RSSU90dzR6MFVSVnNuSGIrNEV6enFTT0l1MUdTdUQwWHRKZGxHTG5GMDQzTFVtUGZUdi9XTVF1RTIzbTFZR3VLNkFqdUVXc2JDY3NZTFJBTndmMnlUVXNSQUNKVHlBd1lZakxqVUZKLy8vRHh1VmhoY29OTElicHk0OVJvWmdYVUxXUVhzeXp6SUtzcEo3MHpIOHZxZnpaaVEzdWQvT1FWdUFoUWNQdVI1Unc4N3V4RmlNZU9zajhIYU5WQlkxUE5XUXdqRFhyMFl1a1lZdUttNmVPSUFTUk9PdDdCODlhOGJZWGVsMERvU3ZuNURJTXNySTJVc2FMZEVlSDFES2FDZGFZMFhYSFdGYTFpK1JKOGNwdWNTcXU4VFE4VjUzSlk1M1ZKVmhicWtUd3BZZnNFcDBUdTc0clBicDdkRWdQSUNuT1kvNGpRVmxaaXhFU3pFWFBXblM1ei9tTVhqT2RFcEtvOW1OQWk5T1c0Y2J3YUFTSUlncVQwbnhyK21ZZFVCdnRzam1BeUE2aUVySWF6bFRiUUY1UGIvckJwNXJEWnQvWStBeDVLOHIyandTWC9ZTHpFemIydWdSN1pHRCtUVTF2V2ZPREx1L01tVWh6eUk4TFNrdmM0YjNPaDBidy8xQlhScXI3akp5Z1BYVVgzcFkvZzNkM280bXRSUWlKZzRBRFZKalFBS01IWG1WUndiNUExZ1doaWloNFNBN0Nxd2hVWEdSVmRlSGI3a0pLREQ5b002QnVuZWEwOG9XQnp0TDVUcTV1ZTZxNVZ6RURsMkpVOTdRbkJGV2crOHphZFlTS1MvTTRjR2t0ZUs3ekdxOUNXRmVHRENhQ25CeE5QcWd6bWMzTjR5ZVdkVTAwbStKb2M5cUhrYU9ZdlloM2puMWdDN0dVM0tmR2YrVFM0ZCsybUhPN2M1bWsrT1diZXZGUGRTOHhHRlpKcGxXYWhVRnV0TVFyWGxqTjFLa2FaOWU1WCtVc2l3bThkNDZUSDlDZm9TOFdFVmU1VHhtUGZTNWVoc1hUQ01zSVYzeSt0Sk5vK3JOT1dBendESjFpTkZwR0p2UUNBa2Ixc2tZK2NEWXFYbk5KK0JzcjJJZEszTnhuKytTQWJXbHQ4QXJRbGVUS0JHUFZmamg5dEdrOFRBc3czdDRCUisxbWVXWnNRaWFHVG1QR1NKUnNyUjBiV3hUTG4xUlpKb1JORUFMOThETXNoZE9qR0VRRkZWK0tMY21UUCtTN2xQOTBMUEYwYmxDSlQ3L0dvRzMva2JuTVZZamI0R0htWnlEaFMrZVI1NWhPdldoOXF0RzhwOFNzZnp4eVJVeTlubTBOQnRWT2VHdnlWaWZ2YWZuMlhqNzNFR1J2YmdvbGZNOGI1T3dTcDluT01NTjJEZ0ZmZkZVN21rR2dWanBxNUowVTIvOXVkcmJtQzBmcWVsSjJFeEdDeHRkT0xMaVVLNXlpUXdyMmRDWTViRzZSL1Z2WXhWZ0VhTTlxVmpybU1HSmNzOERTYlJqamx6OFNSemNORnEzWEwvVDA0OHpJS082K3pxYzhaczZaYW16UHZhZkFXZWk5Y25vcm1GbFYxRWFXYUFBb3FobFRvMlptRTlUZ2lqNTF1YmtjVUYzMzA0ODl3Y09sNTcrRGdTWDBtZUk5M245UU42K0o2LzRCTG5XOXg1VUZyUXYrT3RSTUZnL2UvZmtmVE1BVFN2ajVMMmphY2Y4YllOSHhLSGJObktyYWVVazFIYVdNbzl4Qk5SRmNmY2lHUDdwYW5hdURjTFd2NS9qOHhPSklwWjFFWnpTQ2lndkMwa1hHNHF0c2tzb0xjanRoM3lEczA0OThsZGpuSkk4c2x4UUduNXk4SlRjK3BOaVBHemlMbWxFdHdSc1pJby9PTHVCT05oUWdGRUlzQzVIRjFGRENVMkdza0c2aFJWdXA3RkQvUkJoTVVGM0F2VFRRQ1dBTm9hajI3NzNLZUxXN3RLV0NhUERmSGFmRks1azhmQzFDcEpta25VZEVHeGtUeGNweFR0ZjVrUnBHbjY2ZDlQQnpBbGhaZmQyZWVoc1VYVmZtd3h3YVhSb3RTcjN5TlluNmpZSkdGRnhReDlPZnBGcVFQR0JkVk1MalBpdDFDU2t6U3htQkRFTFd6TndhN25xSGdUeWIwS04wdlVVZ1ZlWTVyTy9FM3ZJUEhyQWtVZHV6MzFjWnpicWYwbDFOVlNSdGRWNEIrcDRUV05iT1JFNjhvcFZNemYwRGNrdktKTEg4Ky82RGJoS0prVWZDbkNHV3A4MXJ4cFZEcEJrV1d2dVlXTWFmb3g2aVd6aW5xVUpUNXlZTzVxRllzc213VWY0QzRFcWliYzZaTHZDSmFlZFdQaDdTeDRLeGp0Q3ZRWUVic2lINEt5VXdna2REZlZYM0VrTGhQTEJVZ3FSaFF1dzB3SHdrUEpYcVFlKyt4S3pBbmFwQitWc3lQR25RUWlibFNnNCt1eDBKMGdRM0hxRTFYNm1IQnVtQm9vaGNSYzUxR2JmOWMvMDRIMTJJNHN6L0F2UnNTdnc4blQ5aEZKZ0t5TktWV1RjNlpTS21IakdSYi9TWkxmTkdEb1d1bWhkZE5vU2hVUEFEOU5zUVZKREYvbjgzUkh6UWErK0xOZkp1dTVHWVJyK25ESllZaEpxcjRjMnhFVUNLWHdNT1A3bkxPOHA5WkNXZWx6Ti9TV1JONFZ3K3hIN0I0Vnc4aFEzREJ3cnpIUzFCU1R0aTVPMmtLb3NLWlZvUlI3N2E2UVNPOWJWTzgzUlVDQWV2a251TEtpeHVIbXRlNXlHTGRyaEFxTEc1SFR5c0lKWXVqdW9UNUlCb0U2cXVkMUJNeUoxVUdNNXBZcXZKUmdqK3hCY2FUN3MxMVU3VXM2dS9jSGQ2ellFU3pBd01rcnluTUpMa1pSbVE4WWk3bE5uckNvNmpQT2lLRkFmeEljWWJYcVh3bStseTdWWXNHWW1URnB6a25ieWZYOEtvdEhVVEdveTY4ZW5pZmpSdHlYc3FMSEc1TTdabGVOQkhUa1NJaWhHMjFOQ1Y3WWoveGFmZ29xSWt1RG0vVWJYV3MzZ1BrWDdDZEFyUnhEWFE5MGt4NXlpNXQwY0dkOTIrenJRQXpPd0JJSkdvREcraVNTQTEzNG5kWk0vd2U3ck1obVRFdHAxSHBzWnFNbkkvQzlZTm9sVStkZ1E0UHJadEd1ck53aHBkMEFzeFBaSDZTU2kyL2tiek9rZGRTcmRWSG5adm9pbEE5eDV6R290d0hCM28wdGxRSTY2di92elZ2eGsvNzl1WjArOGtXL3padGIyamtrZTRwZm1aQ3RickdINlQ1b0xKY1ZDVzVQQUpzUVJmdVU0c2crTXJ4b3lPcFFZSVJLcm5CV3lpWWU4UDk4TFJ6UzNxL1l5TnppRFFzTFRYZTdxZFowaC9sMTNoTlo3RWNHejZGdVAzQjNUOTNlVXh0Zjl2TVRuT3NnL3hpYU9aMGlKVHRNWE00R0NQMVRENmhhd2lRNERFK1hwVUQ0QVY1bGhjMSs2K2NqSDMxa29Xd3IramJDODBFOHdIRjBvWkRFR0ZVSTRLQzh0bGZvZERPZ1RCTDV3N1UySU83bW1EdGdYSG9aTE50a0tFMEdBMjVWeXE1RWcxTXpOdGI4L2pjaklqVlo0OWl1S1pXSHo2YStXQmxpcnozY05wR3RxVHBvOHhucTNIeU1MQWZIaG12cEJORTJiMWxDRWVUbmZkWFo2K0dLZEVDRytua3ZUU3o5dG1LaXRta0tLM2lqL29SNGEzM281UTZQbDRPb0lJN2hab0xWbk9EK0lVY3J1SGZCaS9NNFZ6MlVLMXVqZlgyWEI2c1VyeHV5cDV5LzdmL05UWUhMbzhkcmpNa2YzNmFwaEptS0c0ZUl5TXgzeHZhQmJOZm5NUUxURWJHcEJQUWpoaVpaZlZLbjlvOGNuOGVvcFYxVmx0ZHNnUjBJd0poRGVzaDZOenk2Rkx5TWFuQ0dkbzZwMnlvc0dwN2pPK0xTTEYxbndZSXNaVlBVRDVQTFd0VWdEQkc3NnprMnVrakxEZUZYVHgrVGRLNmNaVUxUOUlwWEZ3azFoN21tUlhDYmhkbEI4MDR5WG5BMmxXdmYwWklVUW1sMXpxOHN5dThPVXZWQ1BFVFlWWkdzTHdyWE0zalNmZWtQbkFUQWUwTjRYaDArQmR6d0hLZ01ubkZKM2xpS3MwMXMrN3NzSk5VT1JMMGlBYzIzZXZvTkRPb1pOWFliMnQxZVl4R204ZDZjQnptdU5yeDY4eWY1YkJnbHE3blpOeHdKTFIyTXU1R2dPSUhoMEZocGUzSnF4WmtOYjA4a0p6M2VITE84MDUwY240eGJ4cy92Nk5HeWNQQzYxRUw5NGVZcG1JOExtRzM0RXVxdk92dVJGQWZRWW5pdVJLOC8rc3ZLYnJqMVR1ZUd4TGE4MXBBYkV4N1FGTUlZQWhqbVlwOFBpUlNscWFOUmQzT1krN3A2R1VFeVpINlVkb0U1a0lGaW5MV0w2U0NDS09PdEg4MXdXSHNBZGhVUytvV3p6SmJ2UWUvRkZTaGRuTHQwTlIycXFrMFZlLzBINjFvRGNJOTNOWnhxNExVVXlRdDh2eWQwV3BzcEx2TWRTRmZNNjMydGhCVUN4cEp4OWgzbWhWT3FVSWxXbkFvT2IvMUc3VVdHZklZRTRWQ2tYWm1yZGFueXBpMElzd2ZLUWdDMWdpTVlBYnBDL2Q4SEdsQWk4cC90R3pSbWJWbVJLRFd5UHJGZGxkZUNVaFlnbzBZK05aMjNIK0laSEUvaW9IeitwT1dsRlZwVGlTUmVKcTdiMC9iOWhYS0tCUlp4MmJDakE5UnhnemdCZFBqNDVkVUhpUEJycHkvODBTSFoxK25VbUdhdkRGaXlNbDZYT0dsQm1sV2FLcy9TbXE4WFdYSkhZamxSc3VNc3JjVThuZXhXV0o5dUJjTzAyN0JzRUd3N01IUEVvQnRWRGUwMjk1TDlWTnAyWkNOKzNaTTFrRFNuZ3hoc1VhSlNLMnVDWU5vbFdwY2tRbHVDNklOUGxBK1RldDZLcEU3RmZsZFNHK2lDNHROdnhqNnVBVEZ1T2pMQzdPb1pSelNxOWMzWWw3eXdoaXI5enZXR2xZOGxFYUxiQWVLc3U1Z1EydDd6WUthY2N2YXJPMHlLbUx1M0xqUUVlV1ZiOFhDZ25YZytydFY5MWI5dzNvOWV4NFlKTXJZWkVlK2JUWGQxSEtZVFRIc2NyY2tpM1ExSnkzNXdDVE4xY1gxeEZKTmpmbmxkQUxwZkRNdmMybzE1ajZKRnJuL0xSdEdhMG5aRW5QVFphNnd5UkZxQWFIaGxEQU9zaTZ5blZ6TFVsdVhxblp4WWFVekNXU2hCY3c0T1ZVeitqbHNsamFzckFrc3FNOG9uaEJqQStxVVg2cEZsdHoyMno2cVNOeFV4TE5YaXNsTGFjQi9YbFhaZmY2YXBPUVFGdXp1eWtJcEFOTzEwczcxVko5MUZGVDdvZG9vRlpGVTBSR3AzdDliZm5mM29XTFBsSmFFVXIyaTd4YjlBbHBYcHBxNlB1Q1FvODhqQmpTdkh0QjcxcEtpMEYyUnN0WUYweXZyOHNwcG9hV2tTODRjR3llUVV4UmtoY3UrR01yQ2EvQUdkM09DWGFPblppb3hMM1VTOVZYVTNmVWRDbVJyMk5vMmVSZGk4K3c5RTJYb3BzU093R1JVYzMxVVhZMGk3SmlCY1dldXRsVlpMWGUyTlRRcWExV1doenRLUnBvMnV6dTQwalM4RzBmUGltckh1Y1k2YlpPc29mamliUDNpZFErbEQrLytiZjNCMjlHNjBsYWJxcXkwL3dVbjVnVXIzcnhQVVJpbDNCc0swUnUxVENtakQ5VjdxNFBjRHFJc3hwcjFjRkJIc3RWTWZTZVBSeGVsNk85cER3eTFYSEhqdHFyclFXTUwzcEpZT2NiVXROcjAyYkxqNUx0Y2FrK2xOSDZTZy8xc2NYYkpQVHQ5K3haSEYydzg0VzVERmUxaDZmSVlRazdEaFVLL25iVG1WUWI4Rk1nb0xDYlRxM2ZPM0xxK1JFZ0JHaHVzcUVOTGRKU3FoOVd3WHZZbHFZS1Z2WXU0S3NoanRZdWdEMlRMREZuUkc1bVVZRFVmU2JxejZwMlJEcGdNbEV6V0pBRkE1QjlWemEreWZ2ZTJKWUhnVVY1a29Bb0ovOUlGY0x3UGZCbklaZkNCT291L1VFL2IyVDcwYWRrcjFaaEMzWVVYUGlqZWRxS3RwaGhIWS9qR21sUTFpTjJWWndWMmhaUVM0bFJZVTZnYkU1T1hvcEN2Rm1iNGtNazIyZEYxZGlKSTVkUXVlNFVKUXlhck5mSk9SdTRaalpxbHMxcG45ODQ4bnhDc09BWk5yTUNrVk1INldPMks4VFYydDNwZ0U3ZTRMeUFNT1luSVVndHN2bytJbUcvbE5uVUNQelFaaWVUcHEzQjY1dkJaVVIvYWVSTHZ5Y2hVTThzTjB5S2xNTkJ0WUVVSk9DY0JmakJhaDJtczdRazJvdk5kcjZxZTc2Z0FNNk5QZkVsTElUeXRqZDgxa2RxRHVRczZVZmtBSnR4Wlp5allLcksyZm5JZFZQZlVaU0VmQnoxWUQycVJXbStKS3ZDSjhVMEFNS0NneDNLUGF1T2xLcEpqZTBVTlhDVFlxZ295dDM4b3BmcUlKeVdJWEgvbW96LzdzUzZnQXlaVytpUGZjcU95NlVTZkh2bS9lcDZYRDMvYldYeHYyTWR2WGRQMXRTK2ZXV0trdnV2TThKNHlyajdFOEV5cnJKZEJKZkg2TXdUSE1BcW91NUJORm1NeGpGTS9MdFhKS3hwV1AvTWpTeFFxNlJweTFDcjhtVzB2Sm5UQ3FjR2lxNW00akU2bEpjWjhCa2xDWEZaTTdZbTJNMlVrTklGTW05TmxsQjB2ajd4QStLQ3BtVjVKL05LSnhRdXRNZG9oRmNrUzVadm5xeXJFMHFZMjNYK24yd1hNSGJ0dzZPSjkwb2puTEdhbjdOeVN0cEg2SFpKNTN2NjJqK0U5VFVNTHZOMWwyMEFzNU1mR2hYdWJYQ0RXQlBwaW5INGdMNGNaTUNxRnkyK1lIM1V1OVJxZFZpL1ZDUzJXNE5IZ3phUHRHdXVzWVZGNUp5WlZrcUxod05YZzNWcll6VzQ5NVQ3U09tMkJmcDlwc3FaQnJXRk1MT2ZUdFNxOEJ3ZjkxaERqK25WMHd3UGxkb014MGVmY25Hb0syblNOelVXWnFkbEdzZE9YVjhxc2MyNGpmeWdFQmU4dk96Z0FWLzdHZDM5KysyVnhoUU5sNm9DOWExbG9xQWhsNzJlM1hoUW9LRGU1K05hUDg1NW52NWNScnpUcXc5RU14bzhuakZFeGJaellNemZhWnJScllaNU9yMU5zTDdwQUN0ZXFSV1hGK1FRKzd2SGJONXYwWk12QVJSVVdobzdnRnJ4UzVJTFlFL21jYTlhTVhNTUowZ0FzckRQd2FvL0JkS3lGNWZnbDdqb3ljd1hLdFNuNkFqZ05LWENmS3FqamxFMldDaTNQb28yNXB4T2szSVJEbDV2eVhPVXVTWkN2KzJBMmdUeTdKb1lVZ0UrUmU0TkxFdmpwT1Evb3p5ZnZjVy9RaDlrTTByb0JseFV5MVk4d2wwd0dTQXU4UGRORE5FMmljZGtaaExsb01VUUswQllEYXYwSy9VRXRXVGNIalZrMlFMZHFXNUlORTUzWHVRa1g2Ri9tSldCb0NjbURDUU5hbWdFbkNES3ZDN2tBd2lwTmhWcGU4WGZGQ2tlUDN4UjdOanJETGZ1KzdlNEhXL1ZMRTFwYTMzcXBkbEdFTXlsYTZjUGZ1ZUN3V1A3czk5QjF5dldSRkVhSllpSjVkZmNrcmFjWUVTdlh4ODB6T2Rwa2ZYMDdSOWU0Sjh1TFN4N3ZxQjlHTzd1b2t4ejBDamZUc1hkZm9JMWZWd1ZjQk9abVpqTWcxelFaQ0dpV3loSk9UOXVkL1g0bWltRDZ3MzM3NHNBN1lxYUNUVG1sTHJoR1ZMU25jNzUwOXprUkpMenRnbU5pejdNWGVHRGdkRDZ4SVY2MnV1N2QxK0VyNUtiWVM5ekpuMXlVcG1BTVdmRE9rbGF2eXViL1hOV3RZTU9paHp2RjVOY3hudzZ3ZHBCbk95TWhuUm56RnpNeWhPVEdwNktSUXkyU3RiOG9WVm5OcXRyaXZicTNxbTNNNWh4ODhabWEwNHJLeURwcExydk1YVWp3M0kvV1pad1d6ZnpEK1JmbW5tdnNyaXJNMjloUTZTOFhuMi9VaXY5d0tyTmV2Ym8rU1JYaE1haElGRklDbFJGeHdBMVYwbk0yWnFLdy9yaklvbFp6b0U2MEh0NEQ2ZEpHaVFoN2NpdGZ1NjlSQzZYV1JhdGc3K0g0QWlRck85OThGNHhqUUUwVkhHR0FXOS9GcGxTaE9yNktha1JvKzliN2tCblVVSHovaGl5RTFpK3V1NTdPU1Q5eWhRRnBEemlYdXRLTzdBbmRFdTRjc2NndmZqV1UwSFBHTjZGNUhkRm9GVGxnZHVXalI4WG8xZzBmOWVCZDMzNU9SaENXcTVnMEdXU3NMWEZRRnVRU1JlUUhyU3Jocm0wWXRmaEpPc2RUU3F4TjU1eDdtSjNndHhXK2o3bzJQVVMvUWJlN09qa0IzVFlMRDJJTGsrMlhSUzVKR3FQTEhWckxEMHg2S3dmSGgrUWQzZDFQNTdUWEZUN0dYRFFZSXJVNkxtaUMrY1NCa1ZOVSswQnpTREVNeFBKM0hZOXNQMzArbTFFNzhDMWowZE9kZ2l4SUM2YXJadFZPaGs4YWlkcmRQSWpBcVdsOG16c0MzSFhVRG44Z1A1cSt3V0J0L3J0VjY3UTN4WmNMZC82aDdkaHAzcGZ1anNOSE9lT2ZFWFYyYWRMUXVMS3RNbWlMaVVPaGVqVkkrMHJ4Z0x2ZkplemJrTWh1dngwcTBOK0szOTkwV3BpVjJjaWlnb21KUGxEbDNibDdQUWExWlhoRHFOMkxZcCt4elFrNHo0UkV6STNzM09FWWQ2UjA2WC9DeHVuTE0yUjZZMXJzMHp2cEQvVDFaSkw2NzBFM2F3VTBWUThLc01hbG5weHVuMy9oRGZZcDJ2eUJDUmlURjVFaWUvcmZjN3R2YnBIRVpIRkdsZHdiaExhYXdKbUpxMUFicnBaeEk4Q04rVDVCM0ZsMnBUYWlvTFFNUURlQm9yaUJyamlZcmpIcWoyUTRsQkZYaE9nb3RPd2ZiUVhrWFU1MVVSbWhqT2YwN2Jyb09EMEozNnliY1VtZGlDNitwc0JjM2Z2eDJrMzdPOStFeGx4T0dYK241eFJ2My9pYlZGSzdWQnRPNSs5QjNzcG1nTDU1M2Z4dTlZYnovZnFlSmZmSlhqaE8zc2FpQXMrSkRWWjY1UFNwUHU2NjB4RXdtc1hnK0lJaFBsa2hUV2JNeE95NXlHSWZ2U3pJR0tPb09OYlFXWlNnemFOalFUNW1Vc3A2ai9GbnF6NFVXMWVzWm5WMm8vTzI0c21adTJ5RVZhMUJVbEVYdHh1dFJpMUphMVp6WUpyUnRhUE5kTFNncTlrcFdqelpaMm1HRWFKaGNlcFNuYWJMNWdqNXB1dHQrcVBESndSNTJYU3ZGN2RncDNKL0xuOU5NTU44eFoza20wL3hmTFAyMmMxRFM1Y2tBVWtpYWY1dkdNTzZ4WVFUNDZIaDZ2N282Nzl1enJ6MGR6cXZiM3o2OUpDZ29nbzBhcnJZMTkyY3V2N0pSdjdrYUxmNzBjYURyZGtYLzNhU3BtRHpzK0t5eGR4RHlSZ2hUamo0K3ZWeHh1YURjMmlaZzNoV2dSQ2FQMVRRSmt0THI1WXJHcGNGTE4vUGMvM1dXWkJOd0QyNXp0Zmp2MVV2TWNYZVViNEh5MnZCTSs3ZURmaFR6a1Bpc0IrRStZa0xBNXBMMzJXR0RhLzhReVR4Yjdsd05jWDN3MDFzbUNMMGF6ckMzNytRRnJJeE1WcTFVUDVyZ1Nrc09tK1Y5RXdndG9RcjRUd0U5MWJMUW9jRzM5dGlMR0xvMUVSUUpnVzh6cFV3N2NDa0JkdWQ5OEt0enYyQXhQMGxRY3NmV0lQY1dUUG55Ukw4VkRsMkNzS2x3NmQ5eHRGVURCUVFoUWN0WERmY25UbkFTL3FoWThpTW9BdUtaQ3J3VTk5eWVKWTloaDRXSm5FV3VpNU9TRnZSakdBOCs4UWtJN3RpUXRPWjkvUkZoV2thRS9lS1JtZnBCUkFZQzAzZ2xwK3d3MlhTRDVwSTRqQVB2RHJTZm54WGJuWWFJSUoxaVRMYnlZbGpTbDRRYStNQUJMRjJHemhqVmpkcXN0azdBUFI0enFrQkJxS2ZGMUpiTXNRWk1XNWU2bFJFN2dtOEk2WmdOSE9iQWpHS0ovcmVoMmNEQTA1elVlN2dHdTNXdWI3WUNicmY1V251RkVxdjh4R25yN0VlbEFvK0dhZThHb2RGdUJ6T2diVU9jMUpLSkt2TE9XRGViVk1pUDVhbk84OXJ3Y1R6aW1WZnJ6RHNKdWJUL2tlRFZicDhNdnAwRDNQMlhoWVZUUWRuc3VSNEdZTGcvUklsd1hkRHBic2IzVTlkNEt1L2hZU3hMS2N2WmRrN2xuZTRHZDEzbWozVmNrem14VlA0b1VWYlFtZTkyTG1VOFBvb1MwSjlhbjNyVFhDTnlWc2kzdDBvb1pWOUl4UHh0SDVjbk9nK1NGL1VZaTkxY205Q1RLV2JoQTlUTDMrSnNBN3UxVktucjVldVg5a1JlamhPRGw2d3JEUzlWUllIU2kzUnllSnM4WUkvV0Zoai9KUTJ2K1RXeE1LY0YzWk9Zd0V0TWxGNUFydGNJOXE5cFhXb1BYV0RGNkVGODQraW5Ra0RIcnF4YVJSc29pN2VYKzhnVEZoZnB6bDNLV0xzZjFQRTd1RWE1YmVqaE1HdVhYaFNtczZuaG1TVmRDUmJOcXNmY3Fxem00U2Qrejd3dCtsS0YyNGkwVlpTNnJjbGkzNmg2b0hmVGR3UjZJM1RUcUtwenNQZXBTdTZ6MEVRRXp1YzNIQlpOL3g1d05xaUtwdkRmQkhYa0RNU081ZnN2UDB1U3VNSzQ4dVg4SmdORE05Smx5R0FyWGN1RzNmV3loQTBKT29zODdTWTZYQ2lzZFg5S2hZejJoZGMxd2plUXBQN1c0MjF4MjJtKzVKbUVZdktlaGNpTzlNM0pmU0FIaW1uNmtjSU4zanFrSkJBdURvb2JiMmNoKytJa3ZxRVNINnQzNVp3OERrSnRFL2lheEptTUFHZ2Z3a0pjeENVbFA5ZXFTcWg0d1Byd1dQOEJDV0F4c0wrMVdCR0x0Z2xjdFRBaWVHNUxlNVREWFc4WWMwUkdqeE9mbFpYNjFNcGl6VlRxQVZjVlNWUDRDUnY2QXVocDJSN05aeGlraHphVzc1RFJCNkpodGtIK1plRlh5VlhGMXFkYzZSUXR4cms0NUFnWHdEbm9sM0YvUDZPM3BHNnhkNXFNTnpMWHpTZ1QxbXcxNVRkRzcwK3R6TUNHTlpZTDllYkhLUnJLdlQ4OUdJMDA3dGloQis5YUZHdE9kMnZOR3MwRVYwSEl0ZG1ud1pEV2ZMd2Vsd3NoWDc5ZmpEUXVqcGZkT050cjlucms5RG85MGlBWXcrUjNHY21zS3NCcFR2WDFkNTFSK0tlUDdGamxHN0owYmdIWC82Y1I0Zi9TbnY4cVUvWXhsOTBEM2R6ZGZwVWRlV2pkWnVIcmkxVEVkZzJxdDNtY0NKUzdRaFI4cEo1MjhZYVV3VHgxUjVzNUN0WGVHaHRBVTNseUlTUWlrY0pRaTRTYzZtQzVZR0VRWEtNZitRQkRJeER1ZytSc2lDb2RCUFkvRkI4WHpQYnRadDdOSVB1R2FseUtuczdmaFBmR3Q0WjhGSWhRQkJ6NTJZdG5oVHEveFhjWDFyV3NKTXZKWFNGRThMb0VjUytDNklnaEF1dWtFR1VpY0tmRDRyd0dYOUxJcmJPQ21Pd1BuWE5aZE54dlVsVmJiVTlibldSM25qUzR0eXNxajErNGhWSlNaRk43TkprWDRLbDJibjdwU2k1QlByOUY3aXZhYkRjUnFtN3RzNWJFMCtUUmJYbGQ3WkJtOHA4NlZTSy9wRFBOeDhxUDl1aEJBRm5TWGszUGJTdDcyVmwzVDVDL20rSXVaQ2ZtQmltYll6cjQ4YlJZYzhROXdGL2NYVURZcWxSQTQzZTJkUFErQ0IyMEdrdFI1K1BsbzFkN0RZbmNuNXJIb0hWcVkwdFpkbmlBRE5VUDV0S2orYUZ2N0VwSDNqNjFZdUlxSFArV0kwaURPR2JiYklzajB3TWYzbTU0c3ZRaGJnQWhnNTR6N1p1ME1XLzJESXM2ZjZ6MGhvZkRQbVF1OGNhNkt2TWw5SVZiamNVbmkwcWxqVjFiMkFmcmVabS8wbG90VWlVU3VtTGJHaWxQVTl3QkpWaTR5ZlVWUjBqZjJaNkZRUXNjSmFQOEtDRjBPT1RmaWcwVGlOaExNeXN3aXpLemNRMlJYQ1VveU5FV1lvYVo2WldmZnlBSzhTcGFIYlpKY3o5YmNRU3hUbXlRWUM0SW8xYXUvclhrQjA0dHRTYjVlRUFQWWlFUzZUNXdXYmphcGo3eXlJR2p3VUFOS0crSUx5cmlUSkRwZTY0NFYrMFZXTWFrT1NrWEpFYnUzTmdIOWN3MnFhRnlXMkpOc0JSc2ZwdGFLa0hPWnU5bk56RE5UaFZ1OVFJUzVEYXVCdzY5U3ZmRG5BY2kzMkRXZ1owSStvdHNmdmIrZ3NLSy9ZTis2bnFmMG5WcTFLRkR0L0NuOTRVS0k0aUY2ZmVVMy8vK002R1g1N2dwZEpJYXJFQmNmK0J1TkNjdEMwczdKcUhTKzNCMHQ3YkdMb0FQVm5QS1E0VlB6NDc2V1ZaM3BPei9HeGQ3MGpTK2xrN0NlUVk5K3Y0RWl2MG1WODF5ZHczMWJraGphUmJFVjZISlprdnBkRnFqaGdObnJQSFhGMTlkWWVzN3laZ3hnNFQrM01DZWlvRERZZFU2ZUxNWFhQcXRCcWt6OS9TOFhmNEhMK0hyeDBaM2RDczkyeUR3RzBBT2M3OUZGM1ZGQk92c3hDNWcwTDV4dXc2ODJNNXk2OXdZaWYyNURqdnpDMUhGZzR1ZkNCU1R0VmpvWGpTd29LWkhzcjdFaXI5RDJSdlN3ODlNaUpVb1B1V0taWmlyU3VzNGsrWkU2aGNLbkZrMVp4U1J4c01SQnV4eGJ4T09lSW1yVVk4eFJsRWdEbUE4aDFxNGRCMHdKTXdjbjJIR0dNT0lSVFJsZitLQ0dHczdKNktZNlVZbExSekV1MVFCeDhsUk4xRmRBOThRbTNHKzdqb05vSWNkRjdSZDJDTHg5ZmxHVmhGN01vU1VrUUJsNHdLM1dKTllpTzJ0bVNhVlZyWGQzM3BFVEFtbTMzMmROMVBSMCtmNXZFS1RjNXJGUm9MNE5uVjc5UGx5b3F1eUxIZllOZGsyK3R6RDREeFc4RDZxSHprdzFoMS8vR2RGdEhXaWk4MlVQVGgycGhiWW9qY0h6L2ZFTG1Sa0JJWEFSaGRsKzdKeGtmaEN2M3RPUnNqOXVHeEQ2aDcwR0hpWXNFOThPdVNseG5yMjVUek9ydzlOampaeDFabEtzYVJ1VHRPd3NaRExvSFVXR1BwUG1QSFpYdU5xeVBUU3N1MmtQWTBSbzRQZUtZNGpxdDFjNEZxdkRlMFYvT2ptbWdMdWRqQnMzemwvOXBPVXg0dDVuOUxOQTZ6Z1drTE1NWVk2Zk9NRlJOUktMbDlLSm5nU2lkRVFDanVqMTVQUjBPWHp5VFJDd1d0ZEN4V0U2alhHcWJId1pKMUR4QTZiRWlWY0F4M1dFMVUxZEhxVTNSUVY0bjB6dFhreWkwclBtem1WdVdBdVNydlhPL2hNd0JEb1IwUmJPWHovMnZiL08yaEd1L2wwZVIrRVg3VUpkUmZONkF1ekN4RkZGYXU3eXRqUkpVZ25yNkU1TU1icjRydmlIR3kyeStXaXdzVzJqTkVwT3hkTFBWVzQzVlIzVVEzNmtCTHduMmVsT1VDSHR6QkZuTUZaYXZ1d3Y2V1hMUzZtZGJQN2VPTEY3aWl2LzJQY1ZkT05PQzVLSDBKYjFreGI2TGFNOVRrU1NIcEZsS0d6R0d2bXdqclRuYVI5WURhNTczQitzeFZvWGJYcXVydU5yZVZXT3FlcG00S1ZmV1ptUWVxRkhueXdhRFh3dXNVZCtKdFhoemNpcjArVmt5bVgvbEFhOWpoaXlyS0NySW96Z0w4SDZVNWtvNEVOZFFZaHA5MWlhNENaWjlwNExkaXh4RmRuZ1puY0I5ZTdUN0ZmZzgvY2tiRnh2TXhKYXFCN3ZGNDUzSlBKZzVzU2FuMDJhN0ljY0s3Y2htWVdmdlRPeWZKQ3lmSzY5UjA2MEJ2bW9ZSFBiRHpob2Vxc2JDYm5KSWpGTjNuQ0VoRTNEdVdzWU9GNEg0aUlaaFExRmtzZVJ4N1JTWXBRZU1VOWJoMU5RUUlkVHUvYWlPeGt2cXZPbDNuaEZIMUtpZWF5cDlZLzRvT3pkQXFqbVA1eG5SOUZCL0M0eHd0OHlmR3Q3R2xGWDRtZ3E4cXhPTndiRTlPNE1rRVl0OCt6c3l5dGZONXNzYmlSMHkwVzJsdml6RG9mWDVNb1dkSzFIemFHcWJXMEl2c3MzTVlqMWRrcDRURi9zbGoxN3Z2Y0QxRDQrbDFkNEtYSUpXNXhSdGtwbWkzcjVPclBjMDBvbXlQWUFWdnhsdlVFeTF2Q3grZ1pxY0I0Z0xLUG05RzJQVU5MV3BwMnBRaVJjbFZBMFNEbDRlc0NOSmMrM2dCTWQ4R2ZKNWxnZ2IreERkS05XUWlrREY4NmlDeDg1Y2h2UkF0RDVGeE1lR21qZkhHdXhZV3RqbXQzei9RdlZhWnBrckkxZVFKeXBlVzlYM2pBNmxtcENvZTNDNnh1L3BnMHZ2TEw2S0ZESEhtbXNNV2FBbWJwWkwyR2Zac1RXTjNhSlF4ajNHSDA5Vm9HelM2OHVPWE5ldExmL3NHcGU4aFZWMHlsQ1cvYWQxVStpTFdtampiVitWbGMrMDl4Ull1aWpQRWhIS2hsTW01M1Ara25aT1dMT0FuOUxXZ3NjYWw3K2hZdkZzZkNhR21Uc1ZLZXBINnhjZHVFeVdwKzhEU05PQ2dTOG56dDlFWEZSSmhjdHRsRUQ5S1IxSTQ5OUpRL0g5U1NDVE4zYnZPa3dVOGVRU1RFMEJkNzQ5Q0FMTk1RaTlFTVFjR2VJa1ZwK3pESTA0ekhGaGVkZEtyenZ5cWYzRFFJQzhHUGN0U0EvQWhncjJPOUdMbFBIVlVqOWRYUjFxWWt3QzVSQUlWVzYwdUxJMEwyN3VBOGdOQXVNS0ZScEtCbTNEbDJjRUxGTGFaYXUycmp2U0crQlc5T0srQmU3Ly9iQ2NMekJwMmJ1dm1ZdWEzQ0ZuTFJUaDRPMXBGSHpWbTI2blFrQmdJZExUVGRhVkJjUVNZekFHNzFvTHZ5akMxdXNVb2plM21MWHB5Tk5oS2cwTW1BaUFkemx5UG9icEFCbmd1VUNHU0wyZHA4eTlHdmw1ZXFzblRrQ1cvWXZMcmF6c0MxNW5FNFNtZE5LV2JvdTJ5RDVxTzlnWU9pSzdCVGJxOEp5a3BkaFNOMkpmOCs2VnJtbkxvc0tOcGlvUCs5K2tUck5Mdk0xcWU5bkRnZy9RdFlUVG80MlFBQncxNHI5akM1cURmdWpPM1lvQU41ZC9kNURHWmE0OC91K0kzRGVtUCtEdCtLbnNUajdrYml5ZmRscUpsTUROTmhtRFcxSFg4alJHMEVKY1JPak9XOXBzb0xmclIxL2llUzFTdUlFalI0VUJxOGIrNFc3bDloVVJoM0FJNXR4eGwwTVR0Y1RIWHMyVXExQUlhTXZIbzNMTC84WkxrSFlQVy9WcU9oSkhYNTkxbEg5by9YVEI3ejl6cVcyMFlFNjIrTlUyTlkyaG9LS05vZGdxcEpjRFI0cnE3cnJoME1hM1Vyb1VvTDhudzFPTEVRV1JjQkV0dlJLSmVRdmdndzRxNFh5azBwL1RRU2RUN3JudHdXeXZxQ0tQdVFqODU2VWRodlhSRWIxamZmRXNDVFpZNU4xV0NEQWxSaENpVWJHSUVkSFM3K2wyOXJrUksxYkRiRUtzblYxZThZK0MzcFdkejJqbEtPd0pnZlI4aW9ldzVVRUZYMUZpN3d0TFkzWFdOcDJlY0lXWTl3RGhWWVg2ZmQ4RGpWN3daa2MrSkpveUw5RGFZajdwNGdiZm9HaVF2M0dtRmtNcVV0Y0pGbURzME5UWHVWN2lHcFU4VFg4eEVXZFVtamptY3k3WnB5U0MvUGJZUEdvRDk0RWhXVWw4UVFNYkkwWVBVV202NHdCR2lUaEJ0d1JSRjYvWjhxclZiZERpSGJpSFhQV0s2ZHJLOTRGQlhKNDdHTjNxT1ZIRmRSbHIwMWxhcHEzbCtvMFpkN1Z2MTAxR3UzR0ozU3lKNUc5MEtjWDhyK0UwNW9OUkh1TFhqL1JmenVROFZyK1ZKR2dCbFlRZVJTazR4Z1U0ZjB3QngrN0ZXYVoyT3Y0ajFST0xnbFd2UVgxSm1KQ1VFRU80WmVIbTJNN0J4VzFkREpNRGUyT0VsUmRzOXZhMnh6ZTNKNWswMmh5RmpXMTNUUWFKNWJISDBvRjlzRUVpcU5PRWEwTEtWZ2pyUFhXdkxCTFRxL0VDbFlhZXFRYTJzSVk0VTU1MHpmWFlkQVo0RUJFaG5nV3V1OVg2Y2dTaXlxeWRYNUNZdHRtMmRGQ1FuRGl6Vkpjam50SUNTMXU5TEZwcWRhNGhuZ1ZxRHVPZzJsR0NGVEp6aTR3NzdNdjhzWWlBamNJRS8wR2tjRWdueW5qUDhCeTc4RVN4QkQvRGVRcENBR0UxUllyL0xEWEtVdWRlZ1NESFhRK3Y2Z29SYllxcnVxWEFEUjFSOU9KUUlGaTFiblA3ekFIMlFlTWI0Wk9VYUdRaDQrMU5qSFU0VDNXM1o3ekF1SVlhUnhBOFdNVHBSZWRMc3R6NHB0SGkyMVJqaTNRcWpZbG50NlR4SGZiMlpORllMQk5HcW40cW90OGlZSFArN1dERW1Zc2tRNWlRVGd5WFkzdFhQZU5nTG9HZDB5cHMxVk1HNHdpTFpoSlRxMUJYcTQrVForNmE5VVo4eFZPK2tLVFhOR3JwNlhmMnVWRW9tVHVyY0JoNFdzTzY3d3EyUndFc2IrSFhLSE5UVk0yUVBETEJMMnBPNjBwRjd1dGVKSyt2T3MzS2czalJNWW9lQnYzZFZVUXA4VFJxaElOb05HVm5xZHVVQkc0SW4zdTR3OUY2dmRpZ1pjTnFYRFVJT2paK1kvUEc5MEpjVmlBMFEyeUtEdnVwQTN4RFF3cXFlbW42UjlWdDhBSysyaklEUU5jUUhOQzdKWXB3REpiL1BseFFlMWJ6bXFOTXRvbGU2SDRYdkZuWjB0NXA1KzBpMDU2Yzlqa1lmRC9ZZytEWmNQazlpUUtnb09id3A4OE1EQ3FBTStYNVdYT0djR1ZVV00zcFg5a3Jld1h6Yko5MS9NTnFUQnkzWDlKNEt4VHBCRGxRMGlBR211QnpLcVIyR0lTOU1NQXBMV3ZzeGZRaVRETjBsWE5IQ2hPKytINWxVa0dxdnQ1c1hBN1pxK3psY3ZIaVhuT1pydXQ3ZW9JTjVvUW1JMk1aWjdLZHliS2dwVG11bGFPTXg2d2Q5N1ROOUhoc3V5SXUzOFE1YUU4eWtUZTJsVFI4MlZIRzh6bjNFUTUxNWtVMmNhYkZpQ0tndUNGQVIyTHFXZUVraUREL1hTaEdHdVZNQTJyS2F6aWxjS3A2YmRvdHo3Mmxkb2JSVENiMWFtd3NSZnAxTERGRU91ZEwyRWhMek4xMkFaSHVEenArRG92OXBCOVMzTFB4enB5M1lDc05Tb1diWHhqRW1LblN6dUxadUlYZE91bjJIU2g3dmxlMEdyYm1yLzBwQ29acE4rWnpNWHhWM0VudjNRcFlvQ0ZTSEtwRlFwaHdWY1NZZ1JWRGxadzBRZWNUVjVJdVlSMDF2TWgxd1k1c3VPb1B3QlpGSkZmZk9RZW1sdWtSNVFVTUxvU0JTUkVkUmlZdFl0UGpkZVFTbkhoUkgwSmp4dGJ0RE44UlAvRkxBUDdaMU9QNThMR2w1MmlhRE1HSEdIVlhBUUdIbmtVTndYUlNwRmtiZkJ6d3UyV2FVWVd4ZExHQVFEM3VQTjRXU2RyaTB4K0YzZG82SGtocUJDaEIwK0NkN1M0eldmZ1BqZkZSNUVmUUdOdlRsYTUrQ2ZDY2FldEZZc1IwUGlWTWVVZ3REaHRzUU1aZlRmaW9HeUZGS2Z0ZzBwNUFMK1JlVjhIMkswZnJscXh6STU2M3dGd1pmbk9nMXloelBpWjhhSHkzSXdoT08rcmNSbEpTNllONll1R0JIbXZpT21yOEcxVjlpYW1tYVdYVTJMR3RMcHBVNXNYNWtkSXkzRnZVVyttM3BQd1BsUkt4cUFPbWthU2ljaFpiUDRObWRnbUVpUWJlQWpIOWtQb3RCYTc3N1NoNWllb1VIT2hjZWd5UFpGb2gzQjMxaUtEVnNGckZFblo3M291Y0NiSk5ydGhHalhwN2plUE1taS9VNHVxdmJwUExtQURXclMwdkNzQlU0QjdPbzhSdmNkZGtNY3ZnM01GdGtBc1RXbHFpanZEcG5tWi9Ea2JRS0oxbkZyK3V4bUQ3cHVKaEYzdStpQ1A0aG1LbVp5bmdwY2l2QkhqU2tGQUpxTDhjVUlCSHJka1dLOUhreUNLWEtJL1J5QVFZRjJSckRoaDd6Mkt1VEVzUWxnZXhkaHo3OTlvQkNCK0lmQmpqREdVd3MvWnlGM0ZSTS9YbnJ3VXFYRkpCOE5LeXVQV0FVUE1CT2ZINVpxUTVLT0kvcmVDOURjTDgvRXlBWUFwUkJZRTR5Z0NEREdiVDRZLzZwL1hDdTNCWGtwblhkdE5zY2UwWE9Temg4WXpnbUU3OTF3L2RVdVZuVzRIZjZmVlowbXNvb0MwRmxtMXJPWWY5OFNXd1U1YWh4aVRlTzBtL295d1NkNG1vV0xHbGptQy91OWkwWkpxbFRLeTRPVWh0QWRtaHp3TCtjODl2WlJnMWFFQ3E5UGVjamQ0V1l2ZVUxSGJPd0FreFA3SEJKTFl3RUloZ2tHQStaR3hXSHVOOTd6RDdpVjRlTnRiRmlzR1AybXRpNmRmeWNjWkFVSlhTM1d5aUY2Ung4RFptTDRMRzJCalpvOHdQcGFWd3Fmc2ZENmVYd1c0QVBJelhHd212Q3hIK3YyYVE0TUNlTjdwdVFyczR4dGRVTERvZFNGRndFOFNlakMrcUo4U1orcU5CUHYrcHl5YXZmc1FHT3J4aGZaL0pXek1UVTJOVWZNb1dpU0NhRGJjZHRCSGVEcXFMVFVrUEF3aWdLK3ppSzNhK2Zwc1IxM3NEdzdkTjF1S0xmUDNMZ1hldG1uSTNvbWxXRmhFK25DSEswb0cxdmlYWGdIdVNnKzAzaG80Z1FBN0NaZXhzQ0xvVDZicXFURkJRS2kzZm1HdGFMMGNzbGxNNkZMMkUxZ1ZwbWVtVlJsWWV1cUY5OEM2MUdpeDVDa2psSGJqUjlNWXQ5MnNHNS8xUldJc2xPMW9ONER2dnE0eEoydFA2QmdaUTVRTGhIako4eS9HNDFhQjl4RnpNcHhmMkt0UHFLSVZiL2pDZDlZS1pyWWZ3NFR0Yno3TW5jZUMxTm4rVFplcHc4VG9nWGsxOElZOW0zTUNrcGkxUGhlekQ4K2xEUkgwN01EOWQ5V2xlU3lnSjJpMGQ2d3lsZUdkUjlxaW1JakRMa1VnbGs1KzlCdFBUb2dQcFkrN3lVZDRGT0tsdUFVL1BqRE1qcmxIczFXUDBUTjkrSjhid0IraDZyd1pzR1dHbzc2cWVTM3ZiUDA4bnhFMVlwQVlyWEhvaU5rc1ZNTVNnbDBJN0xDYkhaOVpsSGJkWE01UTFERFBZb25Nd0hJNmtia0dJbEpCbFkxZDlyQVVIcXFVbVhRQm9PY3d4b2J2M3BNOWpUTzl0S1JyYVdqR3J0QnJmNldMdVdWUG5nU1ZiYkVDa01MWUVIQjJuenRleit1NEZUMnk5alNxRmx0bEYvcnZybHdvYnhmd2c5em5OQVdWL3F5SWZSQ0wxWHVzU0hMSGFhdVhzeGpOZDZmSWVWdEJwNkt1RzhnZ2IzUUJBdC9Md1lPMkRVSHdiTHRYY0lvTWY3T0lhelRlTUNwemJ0STNtRDJVblk1a3JrMENPTGdIOUNPank5MkZHK3dFZllMWGlBaFY1REZxY0hPa0RDc0RjR1NWemdYUnlTZ2VZbDUrRStFUitETkJaZHdWQWVpSGREZytmcEl3RnpBS2dYaHpjRVFwcnlYSGc4UFF5VWxtYm9hZ1pEajJES3NSMlY0V1EyWmtoR1lERGFHQy9uTy9uMXdRaGxGUVVISFprT3JxVFRFZVRRWTZtMjBDTHE5UkJRZ0lDNVJxQ1hlUGtMZW85RXFzQW9DWFY1MmRsd0VIN2V3S1ZDSEVlVnNDT0F6RXZBOGI0OUNjT3NEcTNMYmJQUkc3YWh6djBaRStlaFl1a0Y4dU8rSE1pRDNOV2Fsd2NGSUFERHlhLy84S1d2VzZJUXhOYjFNRURNVlJtaW1LTmxOYjA2RmtLZEo2bWF3c2NrbTQ4WmJvMi9JZFJ4RXk5NGo0YzE4Qll2U2lPcWJIeGRNR3ZLbDdLLzJPNGVzMWpqekpIRkw3b055UUxDUS9YT3Z1MENHMG13R2lPUGVTaHBzMHdFbGxMVUlSaDNOMWVIeG9qSHFTQlhSZlF5Q3hWSy83dkMvMjFTMmhSSWdERUkvUHR2RmFjYjFkNmJia3dxV2krVThDeGZTOUhPT285RlZMQnNvLzYxaXRwYVkxejYwQVB3SmpWVHhFdVBQNnRvUGxiQTFobExpSXNPVFdmZVEzRWhVMm4yZjRyOC9tcCtRYldQdE5ZU3ZGS3dPc3pxbHVkeGhXbWdhazRDT21QVnZGZk1lOFc1SjN0SFR4SUM1VTJsRWFiZTRqUVZFNFZVTkY3VkVjOWFmbHdjb3VJY21Iak12a0pCVFdGRVk1OVN1U2owWXNTM3Y3Qy9rcTQvUGhtcGdtWjJMcmtJMk4zcXhvSHc2L3d3d1d6M3ErUStDaEtmRkx2R2tYS1FKaWU1K1Q5cVRybElSSDFQWkp6UTNKaVJFYU9jbE93VlVBdm1OUWVWSzMyREdEUnBCMW1zWUJHZzVEdnV5UmZ3QUxTYnRHUmdqclJvb0ZJQzZPWEtzQytiTSs0OEl6T293OEhaaUJKV2piWFJwYnQ0emVxcmIyeXh3azJoM3BrWTJDNGZSR2dLMDJmRFFKZzJ3NXhFdlVYS1pIL2JLTURheFl3aHU1ZmtmY3k2SXB1RGFuY2lLb1NSZGZjenlKRzNleTlKajN1OE80VGNndU05amtBWlBVUURQb1BNKzB1K0FJU0cxRjkwMU96WTkrUGZ0bnBVcWdtQWJBMWdIcmo3dXRnbXJTOTRsUVdSblViRFZqOENWNTJXT2c0RlVZRGFiYS9DaHdpQVVpa3d0bm5MWE5XNHVGZUdBZmRxTGtILzNsUWxvVTRqdnpSNWVEclpXUnNFdzhhcG1zcHdQeFFYNEdOQy9lV3F5TDhsRlRmWTREWGtaM09yZ1J4M2hLNzJoc0NBZnc2YTc0NkI5eE5vaFZ2cWhadGFLU1dDSndjOFppeTJSNUlxeTRualBtRGF2bExGb2x1Z3pVT3QwLyt0NzR4YTIvdWNtU3VteEdtS2lLajJYZ3ZJL0IxeHRjWmpwL3hac1ZUY2NidmdsV0xHQU92U2x0dS9hYk1MRHZhZkdYL3hJOU8vVnlIVzI3KzkwbjhvM3RQM2F0Q3I5eWZmRVFxR0E5TnZES0trcm1xUFlEUzRUL3k4RUs2OGI5UWdLZFN6VUQ5c0FZYitLZGFWVmxGZVVtMnFDdW03aUtXRDNHeWM1TG9mbXZGZGV0WlJ5STloQStwRXRwKzE0V2NtYjNzTGxyRkdvY1ZRcTZha2RJWFRiQlZrejJzSC9mcm4yc2dIZEhHRmhPNUxwaVJJTGNZNFNCVWdtRFIvZnkvaDVDRUdRamVTMFZvYkVZWjdoenNONTk3ZXZ2ZjBLREpHUzhlZ3RjZTRyaVhqKzZmYldqOW5vVElPY21ldDB5ZHRvdGFURHNDZHVSclplaUZvOWNRLzZQbWREbm1uT1VjWjdoRXVOOTl1ZFNyejNObmhhVXJadGM5cUU2UkFxdTNjaFRzam02M09uZVhVSUN6UjFEK2x6ZFF3THRKcmozSU0wKzgrSm8rU2NiaEVSSDJMb2xkbFF0SGYrUE5SLzlZSGZ4L0VRNmoxckVSSGYxWnl2VVF4c0xwUHBhdzMxcUhuMEJINlJIdWtobHc1ZUNqWmlkKzF3S2I0YnlyRkhrWCtaTnV4SDJ5Tnc4WFFSTnoydC9vMG10VXVTTTJNNjlVL2pxMDBFL1grbDltY0pvZGcwWW5TVGQ4OXdENUg2UWxiczZuWnVFcTdjamI1Mmkya1hldnVOaCtUODdoOXBPbGJQckgxTjFVN1lBZW9BWFo1OTJ6T2FLY2lSUXZEbjl6eFJHNGhGNVFjZmNLQXVCa1JtbjVwd0MrV085d3hHQ3ZnWTN5bXZ0K3JrdFkwYitHVWRyMjRHcVBGQTF0UWcwQlFBS3ZCcW1yWTZ4YXd4bjRHUTFWWWNEN2k3WVRNNU8weDBoZDdNYk00Nld3RU9DNnU2N3NuTTlaWUlSNWo1YW9neFp1Q1o0QzUxdUVuL3F4M1dJdVV3d3JKZHZMV01TMTU4eXdhV0xPNitPL3ZZSE9sNUZCM3krcmZzYmJzNDRLZHRKcHpVSFJUK1hiTmUxZGRFc01BRnFkS3pwN01FK2VnWWZCU2pFTmFtbHViTGRxRzFhNVphVFVLVnU4Tk5pZi84Mm1jVHRoMmJUK3RYcTM5SSsreGJROTY0QUxYZWVPOUJLbHdQUllFNUhCMHdSQ1BGVFhJbGVuY3M4Kzk5dHlMQzhpMVhYUEdiblcvaXEwT1oralhtM2hGNkFxYVNvV3VWcE5hdTJTYTRtMEtQbW5nNTlMcTZSclNLN09mR1llNEFaL2dsQVFjVmQ1ZlJRVjNlYjdGT0sxNG9yVzhpdFczaHFVanFyeVZqMmxsNjRhOWt6NGRPaHJiRlRYcFJFQWhqeUhnUjViRFBqWGVkR1RHcXBUM0lQeXBSUXpsRUZvelVYUTBVTlJoK0s2YmdZUEs3TjVPSDZ2ODJwUmpsbUxlNVk2M2pHS205SzZOUTQzckkxVU9IQjlxcXE5U1A4cSs0VjBJZ3RUcG94WENmMVZ1TzRvWlh4RXVLOUg4UVJvZVJmekNPcGFCcHFyZThCT1dodHZJTkJiTnQvcmdKdW94NG55MXd1WGxFQTBFRURIVG0xV1kvTjJBSzBUditNYnJ4b2U0ZVp5SkRVZzFqdCs4SVk5eHlROVNSWVpyWkwwYkpnSVk0dDN5NmV3WFdMdEpEeEFqNG0yS2VaVDJwQnZaTmMyRVQwMHA0TUtQUlZZSXI0cDBhVEZ0emJMVW5Ibk9NSmZreTRCUnh2bGxsRzI0UjAwR056aXRWMWo5Rzkvd3NkRHhhbkMwZ2FicUFEbklSVlo1OU1JYWkvWjQrSW84ZHNVNTJsUlVVYWFROGxkUFZGbUxXb3FNelVSYnJhb3ZodVFWYTAzVzZ0ZTFsN2QxZ29LY1NRcnE4UXlQNTNFN1ltNE56RmFoMnlPTE5HWm1xZGxHbGFSdFRHYVptZkE1Yk9WNERnM3ZMczFKcEozTjFXVzUwOFZXSThjeVA1MXpBZUhJTm1YK1UyMHI5MHN4QVlUU0U3V1JGQjI2YVgvSFpNQjhPR0dxTnhVOXc4SUpxbkVwTDFoNHcvbDIyUlkxWEo1MWRuSVlsOGRyeHgybHFqcDVjWFNLZGxTRnJDdFhaUktxVlV5VUdmQmREV01McTdadEpsTUdLdnNHMlZUNWc5cGxDeHZUeFI0ekExOWFjd25ISExpbXdpTm5iNlg5Q3JTWWdLU3FPRTNYSHI1VWFYSFhUcWJrUmVXNGpuQk5BY2hOWXd3M3JqNDFnZG9wNHRVTHoyNDljNW45UkltajUrVDhGdk1XbDI2VHlFc3VsdUxPdlBpY0F6Qzg5WnByQU5qSGQ5b3BZb2pjMnYwQVB3OXgwMGtBMjgySElIck9QYkMrenRHUFlKTGFITmgvTXRzbVdkanVDS3BIYWdmSEl0TkhVMTJXMHhFRWNrN1RBL1lPdWFrclJVdnNJRVdnWEJpNlhCbGljb2dYdWFLZS9uRk5seFRXT2Nvc3ZuVUo2eVMzc1BMK3UwQlk0WVlpdENnVXMrOW9VcDBlSTg2N2RRVDMxZGpSR09CMU5uTnBDWThRdHlvL2V3aVlhcUFhb3lqOW43UmhpZXBSUzVwUlZobzRlbEFmblNOTjdISm8rUGdSelRPRDBVV1hxeENUVzRNZTU4OXF5Rnl2SUx4emlkWTRvWmNhc1RaS3cvcEVqb2dmLzJhWnNqM1orRmJYYW0wTnRZQXdYbTFzSFFuRy9CQWswbUdJVkdlT1p4ZkJqVjZWNHNJaVByWmpEVFgzYWZTWGo4M3NFd25MQ3BVTkY0amNLLzRQQlNKTFA5aFRNYldQNWdRT1F4Y0VncE03RGtHM3RnZ1JFT1E3QXlZcVJ2RGliU0s0dnBZNExJTVU1OTk3T0YyWUpqWHZMVjZjV3RXSHpZS0ZrQlF3cEV4ZlJNV2hsTUJzVWpBek1JMFd1NVZEVnYzZ2g0OFd0Uk9wVmJuTTZQWWF5VTdwVHBMZGdKZ1BPa2NKbEptSE0ybkd2SUR5TEdGUzZzNDhmcUpWYVlJWXJqMEFqYUpZenh2VUZRc2VrMDRjMWZreDQrYytUUWEzbE9Fd0Y2RG02QXFUYjhFdU1WRi96QnhsbjkrYlVTeTZOelpqaG4xcUtHL0J2Z1N2NGNTdEo5Y2xnVU9kUDJmekEvVUZqc3FBa0RUVGU4TUZndnUzWERuT01TRVd6MjdueENuVVNRS2ZOL3FPTW1JcTFJTHpGZlo1ZXc3ejloNmRTdkVjM0gwbzQxU052T0Zic2hMbURWdFpvOEMzb0xCK25oVWZDa3NzMy95d0s4T0dmL0E5dWlKckttOVlkeGVsNVowcUh3TTRwdnVDWG5jKzZYbzZyNXVvWWpQdkZrNHJGbk1NdW1ieEo4cmJSS3IrWk1hRnowR3JZMVJSNElVSTJ6SFduaHJJYTJ2em1BR3pFWmkvMDBWenhJejliRVFFNGR2RWVLcEQxWEkxRXFITUNyc0xNb0JhaE42cDB0Z2JsYlNCY2d5WmtucGtiVXRCdElaZWpBQVpNclpDdXB5VWQ5VUF0TzdTaVZuN3kxQXZIbzhKbk8wTEQzVm96Rmk0UndVSWJITURERG05QVlKdDJoOFBKTDNUVG5Ld04wMDRiZnFLVWlJd1prdmFkK01uYVZFR1BqdUhLVm5WaG1lTmFuczNDbE1zUHlRVVNyeHBSZUFpS0twa0tqWFZ4L0l6RHI0MkpsTWw4VW1Hbm9MU0Z1VEQ4TGJ3VnFKUHhVb3crVmtrZEtSNnB3QmRtWGV5U1dIcHd5TFkzN2crbFpicXpWVVNvVkJKQWZ5aElUN1M4K0J4VDdEWUFBenhMNFRTTlVKRnNvS2dZUmVjd3NHdFJ3ZGJHNHNDRE5iUGVYeVRocXBSbW9ZcEhzMVN4T2EyMk5HV0lpTkd4bWJDUGZud1lqRVVYVllNL083V203WGZIZG9KQzFMSnJIMGl4a21EallxU3k1Y2lWb1BMSWtTV3kvbzJyWUFNREE1ZGtTd0NvOUVQVmxwRjJ1OTVOMnZTaEZsS0k3YWZMYXpLa1liSThkWkxOSS9wek5XUVJLMUVKRGJNN1JRSHprQlIwcHl1TWdsNDM5MkZGcUh3MmlOSDFvWVdmSGdmc2hZdDRoV2hpUEh1ZzY3R1lnYVVBc1ZoT21NRW1vaXFlWkRCU09SS3BYQWlUQnVYc1ptZWw0Q2FCdWlKUmkwTVcxYkd1S0pLdmdMRWc5cE1ka3ppQ2NLZlVYWkZ4bnFRLzIyUFpWSDNDdjRvcWw1b1A5eVJLRkUxcUVLNWcxN0FMVU1mV0o5Z3VIcE1hM3lpNTdybEN5N3J6NldscCtRNE5UamxGSGhOa2d2Ymt3bERYQitlcFgzZjdMMldSVllFRkxuWWtOemJrWWw5NGo0Q1JSSElLUURPQit0akRFZVBlZHdFSFljSjRWd2RnenhNT25BMHZwcHRDZHVzZ0xLenorODc4d0hXcFBTN3NJQ3ZFbm5JcTJrTDRoSmFqbGRNeWpzUEJEOU4yQ0lBYytwUHQyYm9JbGI5ZWtuRWt0ZnExV0NWeW9LeEdyOGF0S2FHV1NNZ1JpcjFxdjNvdlNiVjN3Z2ZoYldTdFE4UHlraHlCeW5oM0tYRjg5Y2NhMWxETGNRT0svNVdySEtGdVB4RG1MK0FPSzA4bUVzcVpPdFlnd1VuMmhsYmMxTm5xZ0dCaUFFeEFJTU9pZm1PVWRZV2FtWHh6R3lVUDdPd0NtMjd4cjZMV1lUdStMRkFKSURxMUpuY3JZekVtVkNUZ0VvWUZuTWZ6c2NoQ0c5K05EWXNXSWJZdlYxdGJWWWRkczU2ZXg3V3AzalEzSEZyZE9yYkZiQUhhZi9aUFQxRFkwOXhCcXo5dEl3UE43OHhRVi9rWHdySGkwR25EOEVyVXQ5R2IzVTBCMzJBK2UzUkw3U01BMHpnVk0ybU9mazhzQ2RiVE9JaGVCOWU1VHJyYzJIVmJsR0NQelF5SkN3WUcyMnhCeVRHdVMreVdDM1BzazZERUU2WHphRjJ1MXBYWmlRSkpXMXh2MTc2TWNVTGk2aG9vZGVPdHpaVGxpeitLVGJUaWhwZVNvaFAyR0FXeHk1VEhkbVNEUHJmZkdwbnQvT1BCR0xJSkkxR3c3NlJCR0pXNm5rY24vcXlOY0NoNVZPN1JUdURYMFVMRGFpRGVmbEhTWk5Fc0dqU2RyUWRzU1E2UUhrMCtHaUlJdDhxbnlGanZGNzQ3N0ZBNkJxVmRpYnh0WWhwdTlmT0IyVytEY3lHWThaWXhqVjhIRThSSDVQSmRSSERpUUFYeWNrR25YNFlmTy9lNGdNUml5TUJsMVgvRUd1cnhqN2dQVXp5a0pYWXFURVA4UWVrbVgySUFBb2VGN0FHMGowd3V4aXNBOVhUOE4yUkRMTU9aaU5Pb3FSeERmaFdSaXZnaWtFZVRzSmNaN1lkRXkwT3JXNVcxVkZiMitRbldLOFdBOGNmZDZpd1M3QzRWcnBPdmhpbndweVNtTE5nQzNWam9ubWRVTEFHcDZXMS9CcEJTaThQQ1BPN0I1cGNsYjdyeW0zelFCSnJ6Q0RVQ04zNGhUeFRZTHJsZUtLZnhtM0F5eG0yUlArR2ZsWndQWURZUEZLUUhWcGhMTEJKL3Y0Nk8xMUNkMHRMOCt0U04xb1ZBTDkyNm51YUxZRWgyak9idmgyQkk5aHUrSHlIY2xLSUkzWlRkOGlGakhEeTBlY3A2a3FIMUUxUFVRTVp1SXFUajArN1VSZGQ3WGFxMjVhaXBnQndFZlZ0RENyRzNKWWdSdGR1ZVdrclpEd0NtcUpRaW03TnJxdHJyVnNkdm5CTVBtWmVwaHJITHNNOVEzUGR2UERHdm1aQ082R21haGM1dzlkd2RaUTZuRkZJRUJmaFcva2NUOE1qci8xT1hrdXR4ZDNsdjF3NW1Hc0FXZVdRMWZidVl0emRTSVVvY3g5Z1k3Tmo2alg2c2k3dzdCOXpoZmdqRmt0Y25YdDFTLzFoSHFQSS9wR2dWK2dzMkFyaTZaRnBxOWZLLzRoVzZDMXNlb2pwVWx5Z09VaEx6WUdDOGVjV052dTlkbkgvRnNQQVY3a01lZFAxamVNeWg1bXVNLzk5aWsyeFcwYU1qOTlLTmR5N3VRY1JaQlUwUTBGY3ZOVXk2L2o0N3EwSjhhUmw3cDRTT2Vuc3I3Zm5FSUR6UUR4cjhaQVFsMEUvWllZUi9pL0pEVXEyS0t4STBSU2xxRFVwN1lmdnA5bkhtM3U5YlJKWkJqLy9NMGJjWUFwRDdWRE1URUZySFdyQW5CVk90TEpEUktvbGllWm9vckExcEJwc2ROMGEyYjFnMmNidFVod3dGRjBWdzVBR1cwT3VFV3ZFakdrZ0VsaXJ1Wk5vdTJHT1V6UG1ETzN3Skc5YXJHWndiV2c3eXRxL0VwN1Vqd2VNUC85YTZTOWVmZmxrbGYydUVwdmhZNkVOQ3JlS1lMZmdaTGZrRTBWdWhyam85YzRHdG9UZUJuUFFJM2JRY2pCV09BT0JLc0oyZjJab1NrajFOQjF2b0EwQ3V0SkdqOUJrRE5xRjh6dEtCMCs5WUZZY3NkdElxUFozNXdXL3V6eVBtWExzR2Jma21QNEYvdUw1Wndaem5KY3NSTnJMUjl2aExhaXBIRGEyL1FISHJ1QnhMcWZlTm1xd2s5bWxiWTVZWHVLUmtPaGV2TnlqT0NHaDJIMTU4VzJHZUkrUzVaN0Y4ZkZBODl0ZmZ4RVYvT1pjVkYzazlGdnozT3BjZDR4UFcwbEpRRmhab0xqc3psMnhZNDQ4T3pJbllkRitHMjdzTmFkclBibGdvME15SHF4SjdJY1Jzb2tuSEJpNmN3S2ZmK0ppb0hRd1lURTRnOHhleCt5QXhIaXRUSENZaWtHWVhjeHdGQlBPSCtSemNFQWxEMk5GbTJvSFd5VVZBSGVSOThKakVpZ2pBNUljMitPa1ZsdUJzazRIa21SbHlLQ0I5Z01tUFRHK1lPRXBHWlMxNnpxaTNsbWNvTmVQZE13cSs1Z2xEUDltWnJ2NHpHL1BXTGRqMUZuTFdmQ2RtQ1Nta0Nuck40cElvbEdsUXBKdzlFQ21ndDdQOWRIN3VNc2p6YWZrejdudGp5VHJyVmpXekc5Y3RxT2ZreWJubmh0eDJ1aTRrVy9tUGZqYzdYbUxudHN0R3R2QUgxdURvTnhKR1Y4VTZSM2g3ZXQ5UnlvS1dNa3U1dks0em1HNzRjNjAwTFNJa0V1aFc4LzJQK00rSzFvcFhWbk1ZS0RxbzErTWZlVi9MZDBUdlVjblFMOWRiWXNHTHhzZWc0WlZqNTVyL3B2VXJINEVuSjA4NERzOHEyeFJNS01JeGMwZityTVBBejh2bW9jcVVQejhTV0F1dm5sQ2t4RHBGKzJaVEEwUTFGRzAvQUJiU05wak13bVZlbG1OMDM3VXkvcDBsT3QrdGJ6eUpVTyt5MllscnRvbmNvUDdPOUZQbFdDeXcycjVCZkduelA1eDNNU2kzbWpSZ2M3ZmFheENBVkJjSHRMVnZxbzRNOHN0dHJ2TnQ5UXBaYzdTaWd1Y2pSVSs1d3ZpaVJKU0hPL0crcksxVmQ2RVBxNlhma1poRWRScC9JZlF5WFVTL25HdmNTUzRlSmJneXlSUG9GWElyanIzRWN3RnJZS0NCUzYzMGE3SXlvYXlYZHdiWkJ4TmxYL0JwM0lqNTN4RkNqdGNvVFBiWXR1NXhTcU9wZkx6NE9TR2l0MVJMSU9MM2tXTDdRdmIvSmtURHJtZlpkOGNPbzgzSjhiTW4vQiswdXZnL04vZU56dCt4eFArWjhNNDhWMVRWUEdYWmRQc2s5MDk1b0dWKzllSmF2YzN2dnZmMlNTdUtGbHdJWmdWc1B6ZnNHTWtEK0lXZXRIcWNXM2t2TXlLNm1mZGduZjlJTkl3ZWpRN0hSanpUanQ0SmdidnBGeEI1NnU4TVNWQWN3cyt1cklFVXRVVCtaalZJVVpYbUtYbDFxUHdzTTNLMGtUZW11Z0lsbHQyVmVNL0FvMDA1ZVBIN1pTdTdTaUxweDdBOERLSzh2THEySFBLOVltSjIzZlVXa3dyUUVEbG5XaWZ2K0xZcm9uc2Rtd01odG0ydGVjNGNlUHQzMzI5TXk3V2xkTENEdVBhRkVuc0IvYktrTVJJTmZPTlJCMGRtVHJBVzVGS2F1T2Z5czFubk1zSWk0MWdaeWQ2cXZYVnhlVDhVNFIyMGpDMFhSYmpMZk9TYkZ1dlprNUthclpxNTF3c0dGZ1FjT1d3a3ZkYUVuSExjMk1zNWhvZmR3MDNBWWRiTTR5UjJJMmVJNFc4NDh3aWljQWdUSDZNNWVxeE5EN1djeGxRU0JBYTN0TFVUUFhJc0xDWFJJM0lTR1JFcmtaelRRM2p6YTBjUnVwbjVjZFBSZjAxVHo4Wlg3cFV3NmpCRVlxWmt6SS82ejVtWGhFVHkvWWZTS05jcEpVY0RDZUZlcEZLRy9Cbng4U3VGZ0RFLzRBL0FpN2V1MGdjSVRIa0VkRkZZaGo5SmVNd25GRVFuT3BEV2Q2c0JiQ0RKMG4vWjRIemd2ODhrc2lHM0pNcGRTUnY0Y3JsZUV3bDJUQXRrQkQ0b1dQVVpnUkdMV2xFUGthNGEyUEc5OXh3OGVSU0tXbE1Qa0tDd2xJenhCaGlKSlNUQTBWQWtlbVBoT1EvVkVhU1hiczZ4d1FYcE9JaGFiaEFJSlVpa0ZpQ2tzeE1ZU3g2TktSemE4akQ1UDA3Y1JpRitCSWxYdHdqOEZyUmxDWmRiN2F3SWYwem1iMExPS3VWNXJ0S0lncUtXaXhQOEY0TDJ6eHlaV21aZFNoTDViUE1lMWtGYXdYNi9TOGpaYm1XWm10S0FraldjMlVya3JyTm1sZUs2NlRMQ2VTT3ZIeHI5cGFDb3ZBdy9iL3h5V0U3SnBOR0ZDTWtJWTFkd2FPaWF1Nk9IUDdrYVlsK0kzbFlQa0p1R2xWU2RrdFdMcTJzVkRObkpPcVNraWJkOE02MG5hbnEzemxROUdhcFhwSnBPOStTUTYxQW1IQXRzSVFpUGlHUnZGWkdNUGJhaDdsNFc5WjZRbEwzQnR5Y1phMWJ0UEg4VjF0MG4xVlE2cU5qRjVlR3FubmNIWXBlZURQTG5nTkNhcktNQUFpeTVOUXRyZ0RURjlobkRzd0ZmNU9abGlmczhtOTJCUjREZCtUUGhnRFJMemVXUFNLYWxOUXlKMjIzVHFMY1NUT0tuUlNObzNiYm0wUWpVUjVxbmp5aGp2ZlU5Y2Y3cEYvczNlYUlGOHRKdHhTM0NHRk9zTndlK0NKRGhIOGhFR1dnT2ZpaG1NSDR3bWhBZmx2Y3JnT0RkdHJndW11OGNiOTlHOTc2RjAvU2dRRm13UjU4OExOblQrT2VTcVVWRmJmaW45Sm9GM3RkN09qWWdsajR4YmlKYTRwbmVpdStsVzVzUENOVGI4MjMxbVptanJXMlNxWU42OWNyOWRiNmpnNmR0WTVPMDN2cUt5ckdMc2FQakxsU0c2dW9NRml2V1NPVjd0MjNVNUJJMmRpWXpscXI4djM4OHpFWFdMUm1na0ViWVJpdUJxVGRVaFBjdExaeDdlVFh6OVpVd29nd1ZkTm9tYUlzaFVJMWxGM1JVdlcwOWxIUzBJNVM3Q2srWEZuZzVCd1BYN3lHWnZxVDQxb2IzZzlSdTJJRjEvb2hnekltZm83UktKTlZRVEFKRlJxa0JTNGNWdTdNM0YvdFF0QXI2Mnd5bjdTWHlUYzZuSEw4Nkg4d04xRlh2bjVKU1hrM2RDaVg3TlQ2YUtCOFk4T2hrb2MxWitOR0R4VS9haXBUcjdsVVZJWFN1QlpmT00zM2cxTTBETXFvdUcxY0sxS3hVRkZhUTZGT0MwMDV4NFNsUW8zWENJc3FWTzdNUWdBejFPMWh2Z1hmZ3JSK1NNVFc2VnVWQ253bEZoZTNNdnBwZU8rU3ZRa012TUxiMkgxcnh3WGxXQmdwN3V0USs3ZG55aWszS1RUeXNsQzN6WTFNMHROMENvTEhITnptLzU5dDlRUkt4WUxjYjhhUUJQdUVRTG1XR3FySUhNdWxjVW5VRnRUY0JYTEdXTndZUSs0QVJTM0NxSmc4Y0s1SkhFT2dSUCt1bEhnNURRVmJ0bEpaU24rL3ZFWWQ0ZVBpbnZvc2JONzFhQXoxWHZLK1AzcnUvNmpBTHBSa2Jmc3F2YkRDWmZCWTNla1Z4M0h6SllKbG04TTFsTDIxMUZDRkczOUNIQkFYcHhiaUE2cDBzQlFCbUo2SVlkcHBiTExDL0tRRG1YSm4xTktxVHE3RWxRNTJBaVFZN0R6Z2dveWlXUStJQzF3eUtPQU9TRGVxUEtFREZrM1JBSlhDb3lFcVRHVnNLS3JkaEFBUFVpbGNkUWd4MVROVkFocXg0UjZKN0NZenowcml3bVlDclFDQnpBTElwNXI4U254eTVkT1g2d05mWnBEcjFPWXpTU04vOW5leTlVTUd6b2lZd3dFMGxBbmRUdnYwTkNqV21zU3U3ZnZ2RlNkRGxwZ0poZ0dZNno2RGlhZERVa2lTZmdra1E3QlNRak91RFVWSnBEWWNaWVVMWlRud210WFFJaWduNFdBZTdUblFJcVUyZm54cDI1N1orN043MnZZNU54Nmo3N09MU0o5SkludmRzazc3Nk1jZ1N0ZHgranFEcDZBcmRoMHVCRXFQQWdDYnQwdE91cVpuQUFXOUlPNjBVbG1TSWVTMUdnV2hMam1wVWdEa3F3a0t6ZXFrWkNPQTFFRmpyVklKa09XUUJlUjMxdEpRWnByWHlhY3lLSnRhQmpaTmRDdXNIcldUUlEwZVgxTkFrQStFYk5IMDlGenZYRzRNb1hMYklqaDJPUlFaZ2tvQVk4dVpKVXQ0b2lLUnc2eUU3eUJTZVBPdWNuWXVsMUNrbVhvSmNZMm0vVXlsbWtKREJVYUtKQmpOZWtRVm5vS25ncGd5VzZpdXJsODVrY2hPMzNyQzUybVVlUDAwd09rd2lueTVTZjRIYVlaQjdyMmRuMVB2N0dHc1BaMEpzT3lkUmhZQktVbmpGZThaUVlqZTJYNXlRR1JEalpWd281eDd2SmV4ZnRxYkZSREVrTEJoTEJsK1lkVVNzY05MSmZPS25xRlN1dldzb09UUXlWaVl6VXJpWGg2NzJ1eUFOTnhZSklmS3krRWtRUWJsVUpLTTFnZ3lBdzVHa1NabDQyUlVaWXpMeDBWUmtlVHgzeFRCRWxtSlNRSndJK0FZMTBxWjB6OWRtZmNNQWsyVysyQXJOWTlPeHNFNFJ1Y2M0c1dUZjVyaEpQMCtjYTVWYVlZRTNRRUtMVEZOVUdMVHF1SmMrM3p3RXRaZkoxZkh4S1BoTmtOZ3dXZ0p3MXhIL004L2w0b3paVjZNVWF3WGQ1VExrNWlYZGlhMXpqT3dNUDFmWitHWlFRb0N3RVhFRnpGZnZ1REJYaHdJM0xMZjhQZ0lCQ2VjRSt3cHdQNWY5aUlTWks4WnUxMzlRcE52ZlhhdkwzTmpBL2RQaDB6dlR5UHNERjNYWU9ScldNZE1nTnRnRlBtSmZLViswdlFmSkdGT2JULzMzbzdQS1hmMm9HdFVXVWVEZDZxcG9vZ0E4T3FLeUxUKzVEeHhoaFc3Z2NzNmNVWEFhZklQOHUwbUZZSSsxejZCaFM1SG1NajZORk1Db0dzUnZIWU50QWpLVGJKb0pWbXpCczZGRi9GNUJ0Nzl6dXBncjI5aHVGVDRrZDg2V0Z3VTZtNGljZnNOeHlDUEY2aldiL20zaEYwWEJlSFpVNHcwc2hBQndIck84WDc5RUJLenVRUmI4dStXOWV6MU95RFhvYjdrT2JzREE0Vk9maUZ4UncxSEkzOHNrSy9mOGs4OXRpUUtkYkVvR1BobTQ4VkVHZFp2SGJDcnI4NU5kUlpOY1JjZ0llS2k3WjB1NGdoTjVQcDg2M1lScG5laU9oS2QxTDNKZkJxWVlOTUdNVHhVTllZcGhoTWVqa2N4YUdMdU5vUmwwZUx1SGhQUXNITEtTdXFjb29wV3BiQ3RwZVVHWTBoYkl6ekt3WmJMV3IrWS9jWWJXbmRvdlNZQzdMcmFDTFJLcWxDcXh0cm1ZVEZkaGRMQTFFUGpqc01hWVhPWHpqdGRSakJQTktWcTFwemM2TUxwM1hncjdydzZzWjVZcjFrRGl0OTJqU0ZGT0cvc1RadlhoTHpHSFI0QWtZWlEwRTRSdTJPdnFwckhyTWRvMUFPOGdGamFaOFZLQlluV2ViSWtiQkcwZGkwRXU2Z2pjTE5sR3RpeHJSdnFzNXpUZHF2endQcHhOendHcDdrZWRsTGU2NTF4L1lyQnN3ZDU5QURwYk04QVh0c0tNTFFLekcxSm9LRkZZOXpPNEc2QWUzUFpSYlRra2dYRnpnSWkwdElpakFVRFdKTEtqbUpSVmdvZEc5UHNIaWFQVU5vczdwVS9YcFRzNDVuaWhkbnJzSnB4VTU4WkZzTklpaFlrdVBkNTRTUlpLV25ZTEJXVXQycFZIaXpVQVVHRjFSckxnZ3JWUGdyeXRvdkFvZFJpdWROYkpkUGliZk9kZk11MW5qRXNzVU8zKzBhcC9SLzErVTlISDh1UExGSGF5Q1BDWXZSTGdKUDBlaVc2Si9zV2xUenM4ZTFuTWRNblV3cjBtYlpPa2EzbURGd09sY1Z0cHEvUjdYSitZVXVIck1HdnBvTW1UbUZxWWJBYUpPeXMvUUU4WE9tMjRRZ2xid2dWR3d6UjRSbjMrbmFlcG8yUE1tRWM0NEtqOUkyRFBnT2VPdGpUd3hVS3ZrMHRqVW5YV2ZPVGtwUUxDUXRUS3BWdnZacUdNcXMxMzFCMG1uQjZlRzRkbGNmVTJ2QVZpdDNZUmM5eUtwOWV6a1NMVG9jNjR3ejBjdTl5M0lDdTlkWUJ2ZHE3R3BmZzZveVdRYUY4K3Z5bEtqSjFPdlhyYS8xZ1dIS0FPUVRZTWlVb2F0c1ZUcFdoM0FPRG9IUXNydFExWm5yZjU3clArNlpqWEM4cHBZRnlxS3o4enhXRVpHL0pJZm13SEVyYzlGQmRkNGN2N1JBOVRIMkFQRElDaTQyTWxHOVNwQnVSLzE4M1N0QzZWTzlCTUJkNkFnNHZ5bXN0ZGZMb041WVZ5U0I1YU1BY21GMmV1U1pveTlhZlhlNFhVdGtJVDFTVWp4OFIyeHl5T2VuNWpuaHRlZkdoYW1Jait1b2U1ZXZQRkVZazZGTEpteExBYUc1M3hUSnFCS2NoVkRPYURRUGg4dVpyNWp1OXZCQm4xcXZzbW5VajV1S2djTTd2cVdnaFY2TWdGQS9WV0oxRmpPQVJGQnJqN25LQU13UE5IVkJKY3NEc2ZqZlZFNU5VaHF1YmN4OXdHUWlzbmNQZ3N0ZlNGeVZlMHM2VmtLb1RmS3BKZmd6S2hLYmlWdjhrZm5ZTmtRdjhiVzlkY294eFpEenpKbHBtenBWMzI3cllkbWZWemFuTUNZMGlNRGRWd2NLeTNUVi9PczNnS2JJeTBPaU4xZHJSS3VNaDZxaTc3aDFSbzV1NlBnSWttNjZ4bGliclBQQk5KMjdKbVJ1L20wak1wYUkwMTRqVE1scStVU0RrQlFJOUY1MFUrcVVRbVg2RzZWWEtqdllpMkQ4L1E4U1UyZVlia1JabDNWbE1TeU5kUXQzRjRLbXhsanFxbUdrWGRINHpsVzFKUmJtUjRDcGN0ajRjMGhVd0daZ3FZK2N6NkRBOUxFME9MUzVmc3hVc0R1TWx1bU8rR2hRMTB3VDZ1blFPdk1GRjBSc3RObVlrU0Qxak40SWtwUFZJTVdJVG5wWGs1aWQ2WngwQ2hjaitCNDllckxpUDdJZkM3RU1KM2hzaWJDb3NWQjRSUUFoTDdVSjdQbEFDZkdXSjhqWjVvbXcvTmVWRFQ2aGRnQk9GUTdmUkhLcWxrcGE0V0Nnb1VVVEZVeUE0eG1TYUYrWk1Kd2tCQjFRc25xNkVVa0FKeTlsSjI5bVFCZ1VackF5RGd6R2IwRW8vRzIraTh0UThha0o1dWtoTXIvak1qMUV3NEIvZmJtTXNJUEg0NmVZWUNTMTAxWFVNNEhTZE9ZN3RTdlhYWHZycnk1ZjkrTWVrMFlEMGlzenIxLytiaW5WSHhIem9Gam1kRFpyZ3g5VE1DeWVtdnVYL0VuN1BlMlg5WkRiczNBdEI0ZWxRcHNJck5Wenh1dGVVUm8wWGM4OGZsTjR0RllvVTNueUhNd3VYN0RyOEpVdk9PUEM5bllZb3FLdDJZbC80MlF3cVFRR3pXYmtVMUdsV3hicEZSVURqNko4UW1CcU5kbHRTUTYzc0FVVHFHVEJpbnhOeEFTdkljMUdBdXkwMllCdFgzQzMxQUZBRWN3c1M1U1BJbHRKTG14RkJJcW5NNmpWOGIvN0F3RW1yWlVqZnMxOXpNUHNDZHVJOU1FbFdBczVsa1kvNC9LSW9DWkl6d0Z6V1RReUZnZ24yNWtDUXgwcWFQZUxaYWJDd2p6b0NONXY0Ui82Y2dnNTMyL01hRThPbXNPWmRDaGQvZnNPWEwzTGhqYTRveFBYRm5zVjFjTVdsV2JLeTJEdHdneEhPV3hIWGo4dTZoK0RHWCtSdlR0N0Fhd1ZjWG5Jalkyai9mcE1wRFVHWjdlMlVLRHNQVTJDd2xEUDBnK3BTZmtQNWJ0Y2xGYmo0cE9JcDlmUU5rZ1oxQUtOQWZOK1BZbzlOOURNL0hnOUM2bzNHT2xndmJiU0RzTkRhclpqYVVDeTFUM2JSVU1aRW83Uk00Zkd3MWVFSHZsVTYxeXJXZGgrM2JDODN6amFmYW44K3ByMzlXNHI1Mnl3RVRueWJ4NFZaaGM1TEVyMlhiQ0FqWlFmWFQvcng2NXJYeWY5bFVzRHl0ZXdHbkZiZ2VKaEV3OU1MSS93Kyt5cUxsaWFDK00vdG9WTnJCZ0xMeWpBWUdvOGVOWGdQT0dTQ2VQeUo4eDZRamJjd3RNL0hKMjlKemltY3RndUJiT2I5YVNYdUhOZGFuNHA1OG1xQlVibU5DOE1vTWdXaEwrb2d1cHRvc0hhd01raWtHd3kzUTBnN3NtL3ZTc09xbzlnZWt6RG0wbjM3NG1QR0UyTDJsejhlRS85dnhUWTNXVEZNcEJ0emhwcFJMNjN2ZXk2S2cwWFFoeGl4UHFNUjhTY29jK3NCQWkzZzNWTjNwTkhCVXVkdGVhUGJEZThtdFhSb1BDS3kxR3VPa3prMGxBNmlVY1lmNWhKWnhmNGFCVDVJb05BczVDRDBrRm0vYXg5TTNIOTBjNVQzdDlYYko1MTdibFVrS1pPVlNRb3RrRFoyTERzSWZVc1I0OWpobkx6Y0hGTnVMaWVYTFNQR1UrQzgrRlhWVUNXVXVNcVdkN2IvdmZnOWRUYlZJcjROTEF2dFE2M2tDb1hKTHVyVTFYT0tDS054dlIvbnJwNnlpellwVXF5U0xDSXhCVXZqMjFJc0s5d2lYQUZubERweGlzTDVNT1JDN3ZMVUxpNWZWWkFVNGJhamR6WS85Y2xFYWNqUEJvVUMvV1FFdkY0dUFGVUlnNHlBanNybE55ejVEWGxKUmJtYU5XNXIvQm4rVWVFYVRXNVJYaEsvd2ZMR2xKS1lUazE1MU5MbWxhRzU0bU0reU12dEttOVprbDZXWWVtd2FpZHkvVHdDdTNNZ2NNdkttTDhXT0I5NkJHL0ZCdDYvSG9ERk9sQXA1Q1VlaUFqWWVtdFZWRzV6L2RheFA4dnNBaTNDMHJkNmRVTEFzK0ZzTFU4em9YY3JodVNRSjVUMmtJRU9RRTFGZmhWN05MZHlYRWJ1VEd0S3A1T2Y2UFhVMXFFZUxvUHJGZ0RJWjRYdTNMeER1TFdWRTkyZXFoRFRKOFdyZmNEcGJ5b1ZGWFZabXBXZEtwWGtVTG5BdVR0di80Y1ZqMlpYYlhMOGNMenZtUjcrN1JlK095NFQyUC9wMVlDUnRmUEw0K3AwdTJKOTFqemJ2Z0Z5ZEdBcE9Kc1JLc2MrUEVXV3VHaXYwa1BuVjhMZEJYQ3c5YU5wSlZLUElHQlhvcWdOSE1ZOEsreWRkQm56bXh4cTQrTGhCMVh1WVR2Zzd5N2tLM2FIa1IwTThEYmdIZEh1VlNDMG9aZTNzdzA0bnRVdUhxdGNGWWRyY3hpVEJZTmdtaTZQOUxHays3WWxQemd0Y2hIUFM0Mks0aEJlZkNGcEZ4SFMxNndnVk53dFg0WE5NNWtUQksxVGtXZzR1aksxbzFKaHp2NVU5ZURsTVFueDhvdkEwTHU5U0ZJK2c1dklUUWNNbTl4Y2I0K0htcjJrR0VmTTZYK2Z6bUQ2c1UvM0xmZmJmdGdaYW11MjRmN1piWEEzL3FRYTBlc0k0aG83MU5kMXB4UHdTbkxxTHBDNTZORzVKQlR4VTMxb1NCQ1lVSjdPalVVdVdyTVduK29aSE5SWjZYQXIxRW5PWGJPbXBBZDVkQit6SC9zUU1KZVNPd01CYzNjRVdzSFpwVW81cEcyS2lpclk1R2piZ1ZWMkN0cWQxYm9TSTZXaU5ERnk3V0JVbEttVitSOWVRUWIvaTRaRnlvV1hqWjZlR25VRXBFMWhhY1AzbVFtY0tjVmVKamJUdXFKTDQ5R1lwSUVwZTdNK1Y2N2wvV2I1UitZak1PZU9Kc0dRWHd3MXdMMzVjSm1mTVBlM3p5Sm1Vb252d1o1NkQ0aSttZlRjc0R2SjVXRXplMDJRYnhVUUk2MDNUaHJnUnVSU3pzcWRabjF1VUozY2owQmNlZTNIZDl6eWFsWjdKTTJIbEMzVlJWQWhsRUZZQ2N0d0dMTS9YN0FqMWtrdTh2NitkVlBZQTg1YXVHODlYQ1hvd2xvNFVFdldJMVdFQmVsbkFKcEpFWGl1M0haOHZQTDdqYjgzeWE5dE9MWG80Tlg5dmxkbmJ6aDdyUlNjbGx1ZVVpMys1ZHppRzY4dSsxUzkxYUd0RVYyWGR2OVBaeDR1enpqM29vMW83Sml4YWtkRFFIbHdwc2ZkVjIzVlhuY3JDUVVKem1lMU43VFgyMVkzRzJ5RUpOMktuUWJaMmRuVVZEcDkyV2FuYlJ4T011UlBFNGpoc3NDSk9VRWZZc0tTMG9rbXZCTkZjZlBhdDA4dS9wQlRPNThrZ3ZFZzNSOERPQndjNGNnbUtJNUNiYkVkYmVBaXFsZ2l2TkZNTkhMbFB2aDBzaURoVURiS2laaU5jaDlhSk9HUHJqUUR1elJNWlBtcVROZGNRYUZuWldYaHZJZUNMTGRWUjF4VVVSMEhCaGs4R1UzV3BpOEVTcllVZ3N6YlNzS3U3dnI2V2pZTmZrbHNEbW0vakxMYmdzWjVlWDE5YTFxajRPQzM1RURvUWJ2SlU0LzJYdi9lNkxnd2FhY1NML2pEWEpOM3VzUjlaaVpabjNnVVJXNkhUcVhEb2FaU2F2M1VJWi92VE1FYmFaU2U1b2RKeTIwVkNzdHBENFc1NE13ZXlkcTEwdTVCaHpxMlJ6S29Vc0x1NzVDd0lXRHg0Z0JkcDRIQk9XNzNSbmJLVzNONnNaTSs3N1lIaDZ6RWtCZ3hUSldHc3JiUWpxK3ZDZ1dpZTJmbXdzcURLZSsyOFRibUM2a3VZc0tNa0FtNFNFZ3A1dk5uUE5nUkVMamw0aTM2ZnFnSUoxVndZcU1ESG9IZEtQbGo2KzVxaTBXQzdSNEkzSExrYmkvaWJ0ejhYd2Z1UnRqdkd5ajd2OXlueVNKU3JSRGZxSmIwNVQ4L0pmMmRUbEFtcHhLMjhKZ1lRNm1oTW04Qzk4S2RaWmllZ1NuTXYrcmxDWkMvdHFmTlBDczlkaE4rZHlCSENpTXhJL2cxS2ZYdHVyN3JmL3l1eDV0L0F3bStlQXY0U1pSa0w1N1FWS096QW5PaDRZNHc4YzE3THAyRElhRmVtRVJKNG52eDFqYnFySVVhdmJyMDFaOWRwOXVZR0lnZ3dnd1B3SCtxcWt2MUdxRzFibTBqejR2dksvSjcyZVl3dlFnc3ZQc3hpVTl6eTRUYjlRQUlOUFVRemRYbjlQalZtL050bVorRTc1cmZ0UlFRSUNwSzQ4eUMyTmN1allOdlVZU0NsL0RXSlNaOFlzNjN2WHA1L0RTcjArcHU3OEQ3dHhiUkR4VDJjNXhmWDF6ODhwL3Zsamo5cWV2YmYyU2FCeTh0dUYvd1kxYmR4dHBZRGJxVkJRRHBWZXM2bU9xOXVXczM1OW55UDA4RER2dTV1RHBJYjRPcWpwV1V0b2xSYThQZXJzaWE2ZHFuczNLdzFoV3IreUZsOWVKc0NKY09TRnQvK3Y4NXlNTC9vZVZidG9DRjJ6Z1FaTlpqYUErRFQrYzFiVTY4aEd4VWV3bVN6Z2tYQU9BcTQyN2FKT01rT3RRUE9aeFRNU3M4dkNESnkrNEtqekQ4STFVMVIwTVpyQmM0cndkSlZ3NmRsVmpGU2MzT25wT3luUUhiMGpjWkR3QU5aZnJSU1gwbTl6a2F6dU55ZVR6NDJpTmNvQXJuaENWdzI4U3FYTDFFdXdSeUw5djZOVmxjTzV0L1pXbmVMeW16QTJsbS81SUx5WnRLeEpoemY3SDV2NnFnVEdkL1hJLy96V0Vsd1FuRHlEaEhJL3IyamptUEpERnB2NklyYUNoelhHakl5Q1FZaFAwMFNzZGs3M0VHSFRmVjlUcUF5bE9qUUFpNHZjQk9KSlo4Z3pJMGt4RlQrYlNHNGRIN3JIazBLU0dQSm9RVFIwY1ZmVVpwbm9yMzUwSHpWaGR4d20xV0tZb051UTI1U2c0dDhuZURPR2lpTVIwZ2dhSGoyTVZVWHBDR3FpQkJVUHoyalVvUWlzSEJaQ0FXeDI3dHJoZWM3Qzg1QnlCZ21GUy9JajVGcjdnc3VXQ0VkdEtEcnFFVkdXV096WjgzelBqUlN4NFZpY091MUNUVmoyRW54WUNlSnFnaU5XQUJQL0haVXNSeExVbEtFUmNhcFg3U0JpTUVwamhYQTJGdWtrK0F6UVdqSEJpMjAxV0dEeGQ3ZVJ2Vm1HOG1pS3FpTWhtdWJtS2hTdVBSeHNjVVRzQ0hhc2dtMlVxcnFLaXowY1lVNWY2aEFyYnBVVXFHVjk2MG1qZ1VKQ1JWVE9wNVZ6THlFNTAyN3B6V2owNHMyN1l1TmNSUVJMMmdLT1JaNlFTcTBNUFphVFJKSlZxYjJwd2JiVk9DQmE3QmxIUWxPYVI5aWU4YTZUd0JJUVB1bmtDZVU2Vit0aGZNa3dnNXpqY2hON1RKakF4Y0htRExHTjhTdUIybFBtdnNUOW5ReVc1ZUtMa1pnNlgySjMwYXJPbWtocllXOGlhTENxemVWNS9rVURpRVVBZmExRVQzdzdHTzV1N2JOblhUV2NnTm15Y0FiME9mWmx5cGtYYUpkclF0TU50cXRxQ3QyVUcyci9oS0RvZHlSN1UzWDdDVDhaVGJ1UUJuaHMwZGlqU3FHdDJkT1FvQXQ1RmpNK3JMVHFpZW5QT05SbWs0ZkVWNkpJZ0dsY2x3TEk3N0JTdmRWWjBIY3FFOU01QkNHZ29OWGZOM3JEOUM2RFdNeVgraStMU0o0ZEhBbEV3QlNvcVorRlc5MUdPWWd2RlFpcFUxUytvY1FDM21nV3JLR20yOC9ONDlkT0tuRGszTXFsdlZtbldsaWZ1ci9sMWg2WW1tQVJKYzM5TlRIeXc4Z0Jqalp0Q0s2b1J0T1dUQnhNMVZ3KzJVdkZWKzlRUjUwOW50SjBndERFcHZJUkxmSHl4Z0s0SFp3UDcvbEEwOWhZVUVIWS90RDlTVlZVVXdheGk4YkhreExMWHZsUzBrNWRIV1JKdlJIT2hxK2pvR1V4TU5Mb2tuVUtyUDFNakZORkw0UXZzK1dBcEtxcXFMQWQ2aGxFRUpsNEk2SUpyOXR0MEFqK28rS01GT3AvNkQ2VXVkdlh5VmxHeWVCUVdkQmx6bTRncm1xVWlYNjZoK2RHbUxiY2JScWlNeEZQUzlscGVVZDNvd0t0ajBTNGNLeW10WGFyTk9OWENudkdrb1UzRjgzU2dKWHRXenZ4NFJwQUN2T3JTR0dsb1RiYjM0eGlPM1YxMXNoemVqVjA4M3JSc2xyKzhHZjFqVHFPTmFhQnkxUzNGa2M0YlAyTnhNL243Z2pZREJXY21QU3FYV1doK2VlMnE1NVZyQmtPdXdLeldvdUI5SXBBL0I3ejVEWUk1RDFhZm05bWJlWEJzZEhSV3RwMUtJZUUxbEZ1YlJxdUx2NmlGeUIvREtLNVQ2a1M1ZlB6Rnc3L0R2YkxiQ01ocklYN0k0SCtCelFVRlprUy8zUUhRZ05wdlMyaTB3ZVgvaXdUdnd4dlNZbkszaDZlb0psT285WFJKRFBsbEhsZEF2Wkh2WDArREVGRjkwakdCMUR3YWx4U0FMUkFXMGZiR01wbTlOVHFjeW5OQWUybnM0RVNTNXRVWmxVbkcvTmpOQU1hQ2dmR2tCUG4veFVsQUF4VGdhZnNWbFVMWGQ4TlZiQ3U3ODNMNGRDdWMweXA0QWIvSzdnU3h5dVFpVHo5aXdYVWpEbEl0dWVxWjZpamM4a1hFYW9mRHQ3Uys0c2FqSUxDTWtpWFN5bml3RlQ0WjRMUmF3UE5VWE9sWU1HTTYyYzk0ZEhzaE9vbTFNOEtlaWNQV3ZsSlJlYTVGMVo2VWJiRVEyaGtlUDFQZTJNY1FlUTJyMXhza2s5TG5STVVmc3NnWVlLNjJmUHFuRHVwZ1lTQkNHN2ozc0JHK3Z1UC9xbFVlUE5rQ0tqZjQwdDZ4c3d4dVlMT3RlMlpJelozUTI0QVFmajBlODAxcHFiWUF6MkUwa2JYbjhSSzhiNm56OG1FRk9VcDg4TmxqTGlEb0FMdlFHY0N6SVFTdU4wRmtaRk1IOXdTbEhyUFRTOEJJZ3F4czYyU0VGdGJKd0hVR1hUQmwyRk9xdHRkTHdPbDFwYTI3dE93VkRzVU1zTmh6NjRHTHJWQnhHZGpXOVM1MVZESjhNQjZudllCZTFZN0dFN09MOXJBMzBuenJadHlvNWVVcWZuRXZ0V00xYjZiMjBEZ1JDcWlIZnRpVU5iV1NNNWpIR2RwUXlpZ1F3VkpjM0JzWkl6RXk0UXVQWUdHSThYMFZYLzRqRENXb0pNT2xTUGFXOStWcDA5MzBkaGVldmQ4VnMyM3Z2QXQzeHQrTDJaUC8vUkZkTWphNm8rc0xkdDFqUVFOWVYzR0Q2MU91TVlvS2lJcXlTSEd1TXNDeVVoakpoVkZWSTB6VVZYbWlhNFEzdjhNelFrSitaNnYrZ3BsQXBjelc3b3V2YThxUm93N2RCUzZZWWU2SUt2YnhXTldsT1cwT2VUTlVRV2JQL3VyMksxVTZJM1B1clZmS0t3aWdTU3hTL3dsY2tXLzI2TlpMUVBwdDEreU5yRlZHVGR6TmtxMU9hbzRjYVg4VnN4MGRkUzJRUjl6Zk9ZbzVyVG4wU0luQlhSaGVIcTQ1eGYzM0JQYllaTFk1bTFxQlBjMXd2b2l1WUI5UzU0YStaOWx4NzlNOHhvL3JBQ2laNjBXWGRVNVJaWTlsMm5QYzRqSXVQVk1QY1VhTUsvd24yUVU5aGEyNklPVkhYcHFma1RHbnQvK1ZVUGoxSE05Vk02dFJJNXdqdGphejdmaU84eWpqZDUrWTRrL3NZQk9mOXBRODlFSEZncDNpWDI5K3JEdi9RYkJYbVhhR1JYeUczUEY1UHB1K1o2ZGJRSURXZHRwc0JNR01IZ3NQKzNDbTJTTzlhSTNuQUtYTFR5WHAvclR5SmQvWjB4cDJNNG5CWmY4R0EvUnNFZXFNZEFQZG5UNUhQZGtQV2UzVkVZOERDZHNxdUhTOEY2Mk13dE9EMUozellpWng5QUpPWjVIaW05VWpkTlJrbmpxYm5RM2NRM0luc2tDSHFBakt2MVQ4YkNMb3cxc0VCbmJXWE5lQXNHcDhRMmdscDR5eGZ3NThXeUsvVFJPLzA5Vzkwb0x2czJ3c2R3ZjFwVC92VzgvWEdhczdUb2ZTYW1uUW9BNnFSOENQSkVERm9BMzdMOXRFVm5vVUxvZVdkaG1wNE9aeG9EY1oyWWlnYW5OcCsrU2lEc3Y2ayt5b3dzdDR1T1hsaVl0bW9WTnZkdXlvZ1NDUGZObHJrV1VpeVNSbkMxYkRCVlhORFp6VWNCYTVzMjRPU08vWUovSmFnNGlzeTRIUTRIY0c2b2pCaHMzWlBHb1VhMFZNN2FQaFlpMkd6VUZ1SmxrOEhmc1p0dGNWbmNIblE2aHlkeElKKy9UeEwzdzNuNktEVnVMeml3ZHBWV2QrbE52cXIyRkRFd3F6SWhlOGFYSklGNThxNk02cUluM1hJU0xBSm8rNmIrTjdoSzRGWER0L3pLUnVkbHU4V1ZIYmxpSDNYb3g2NXE4RXlPQ1cyWitiNlFWRU9sQTBkakh6d2Ywd1BuTExJSXl0dFRVMlpld3hZR3VMak9WT3pDY3E5K2RueXRnenlWdlI1SjJrT1NnZDNDMWV1TzZmOVBRQVorUERuNkVEb0EyWWdiMEFzekcrVXpXdVQ1TVJ5dmF0WjA1SDVjVnl1TnN0UzhJYUhGVEE0NUZwaVYzc3V6aXJkMEJFWGVkVFhPNWtod1puQ2VQckZSL3liZnRGZVZDd3pKTVlseEJtdU1PN1c5bGV5Nmt3dkYvSFM1YUdrQmdacHdIZkNvL0JnOUw4V0dTN0Z2V0FKc3UzNFpSMmkrcDZyaExmQzBwSytiR2MyOVAyZW1HckFNdjlDWGllL09HSkFGd2ZkVng1MXRuVkhkQklCWWc1MEx1dHpRbTJsTjBDeUNOWXRLVDZjNFdLZVROcmV0ZVZjK3NPV3M2bGFTUVRCaWtHWkdKSnhWYUp0OWlhUUM2L1l0bmNwM0hXMmI0VnJvTnhGVytUVzIwZkpVZWIxNWNUaG0yTlRxOEhVWEhpR2cvRGJaNjlNUitGaWVFcyt2Tmh1ZnRad2tKaDVVSGlRSHlLNTY1NUVoeGNUdEx2bU9BTzkxM3RkOXJnSWkrR2tzUG1IL1gvUFBRc0h4MFBsaXlHNTU5UEtoY0ZxSmpId2F2dFFtVU00ZGZRM3hUSGE2bkJMUzRQVFc3ZCtmVmc2VCtCOUkzWCtnQXM4QkxoSWNCbnk1VEdtcDEvRzdwU0FGQkdQS1Q3aDVxWGVSY0VuZjZtVFdRL2ovbm1FTWVJOWpZL3JIMTk5WjRUaStRMXprS2FEaGlsVmNVeURIYkVpMTFuclJjVDd5aUF0ZlhleS85bm0zNk1PeXhiRU5JQklwUFhCNllvc2VBUnBsZCtyd1I0WVlSUUhCdWI0ZWw4SWxSM25tc1FVWXNSODlrVi9vVm9mRnpYM0lkeS9qNENmNnVHUnBwdGoxbzFEeFJQVjdaWTc3M2w5THJkZnpBakxONjlzSVNXbno1Y21Mc2hGMVRURnZPQnd5L2owa005NStQeXZMdy9QcU9HV0pxU1grcTFtcmpBdkNnN09YRTlaM0haOHRZMDhuVExmMlQ1VnNVVENkWmFCekN4SVNwamYxNGQzRXdnaTVSWXN1aE9OL3ZUSiswN2dSbVVMVTVSWSsxR1VRY24ydG5oYlRUdnFyM0tTVHN1OEd6b2FSTnN3YnZWUDVMYlJpeVA0UEc4SVpaOGptMENRSkduRkw1YkJKcFFITDgyQy84UFpSL0h5MHNYR1Q4MGpMUUVVSnlFV0QrZlg2OXpFVGJweXhpSU5LR1VBWGx1UEc5cTFkKzc0OHZTVmU5KzRyclhtVytrUVdEYUlSNmdHRk5aNVptNmhvRTdIWFd6dExnZGVsNmZDc0o3bUNnYmpZTmhncnZmZjlxYlliOTNuNWsyOWxkQTZRQ0dyR3djeTNyd1cydjAySUgydDMwUVhMOU1NdUM0ak8vdWI4N2VvSUVQL2k5ZkVET0JYYWFIS1FmWFd1aHlWRmFNN01pWTIyZ0E4bWt6dFRwamhlN3ZVRHVzWVhpSmxENzd3YW9RaVVnUzV3Qjk0dS9VN05UeVBBaDRSZ053Q0c1enRlYmxoZkZ6Y3lCVHVnRDh2NEpjTjZkazU0WFk1NlhWd2ZnRHc2L0hSTjFwRWlXbTRLNGUxT1hrN0FGRmxyZDVhLzhjclVTMVNPMVpvbk1qaFNBY3BnN0Yxcm5WdE5GZ3RoYmtseFNLWTZQcU1LbHVrdjYrN2pBWXJmVmVYb1NpaGZRSXFBSEFTN2V1YXRvaGVYZHhmdHRFbGIwd0hhMFBYWHJXUXc0ajUzZHUrdDdNeWJXdXJWbTg5Y1cvTys3cEVUc0NWSHhaZ0d4QnIxZXBhSjAvRHVGZk5CMTEwMXFmVTNPZk96NlA5amZOWWtZNWYyZWY3S0JmZlI5TUtRV2FSKy9hTkwwWU1CcCtqd3RFbE9uUmZpdDY0VDgwRFBsZUtjL0dLQ3JGR2dWZFZLUEZ6QW1YRkpjMGZzZFhPSS85cElEbEV5U1BQZ2dUYTRodkIxNVZKOFNqYUhiVEpnN1JObk1wbmtNV3RpT3RrZWM2OHF2dytLaE5LbWFPWXRPWWdPVWVqcmlIYW5LN1VDZ1doMUpaNTZqVEJmbWdXN3JhYWVGUnd1WElvRFpDb0dPMjg0U2pmREwzVm9FZS9UMVJ0UjZGd3o5SzNpa1ptbk9mMVBUbEI5TERvcGVrdGk0UWVSWnJuVHR2TU8rT2JucTlmNUpVUlZYMmNDcVdvZkY3T3pnZTJacm1CQ2I1Uitvd01DZ1lFOWpSZUxZdXprTW1scWFOYmkrTG1MOTBnbExqdXN6aVkyaVlWNmhwY3BYa0RxYUZKdnBITXRIbjMxMmJQWTBSUDVsUmJ1NnhTZEViVW1yWHhtNC9rckZpc3JoTWhDbWlKKzdYUmhvNHpQU0ZKT0VoQWZBNElNQVlkQmtGUXNPS2ZULzRoampsaHM1dlhKaFRBcFowQmM1ZFNsVjh5UDFzelozNDZXWkI3QzA3MmtrbTl4ZDI5d0JCRzduUU1kRFlzSktUdU5BZHQ5K2VqUGVIRDNPRWZOUE56M3FmUDFxelBBNzdrcHAybkUzZGhaWWtGYXpiUDVvUngvL0ppR1hoOU50eGhCOWtDdDgzcDhPK1ljcGM1dXlBM3ZkY1JkSFVSZXUwTzkwbFN5VkdHVGtkd1JQUlFsaFhpVDM4MjJIdS90TGRXUlB2UE1NdjM3bTFxWFVoZE1POEhWcEs5TnFTMmhhYk45RHR0Lzg0ZTRiaDJyZDIxOFoxSlRWbExVWnUrNnNWV2tmL3B2eW9YWW51WllteUdUeHRQdzdzNXl0cDNBNTAyVG50V2d1WkU5am5lZ1dibHA0RFdmSW9KNUlPZjRyRHVVNzcrRW9FdkRDNzIwa296c2hlSUY5OU1BNDVzYVd2Rzg3VzdJbHdwbVRUbVdkTXZxekpsblY4YTh0Z1phZUVaNmhYRHNUd2tGRUNUZGdwVXF0YjZKcSsyRjRpem42VE5PbENaZXpzaW5FOWwwa2t5bE5uckZxVEJqelhZUEJaUUMvNmtDWHZsbTYxNm5JYXM4aFBKTldJTXo4ektFam1kL3ZTVTJHbnd1bjlrS2dtYnlLOTJXT1lCL2lUa1Uza2hDMnBQeWRycTJ5N09iL1FyeU0vRlNYNXkyMEhFWUx4dk5DQUhWNS8wc25QL21wY3VMcXJtOHU3dEI4MTZCVDhhZTgwVzlRc0Q3TlBSbzlQUGFhUDBjL2Y4ZWZiUCtleE8zK3QwdExVMHZXdnRySlp6alpxdW9ZNHl6OTI3RjJJL0wyS2RqcU9mYUpqV2N0WnlEUGJmVjNVNEVwaEprOFpKKy9rQ1Y2L3JjQWlXREwrVE85OStpWFpIbnZQSnJvVHZMNjZ6Z0t0SERnUCtGbmxERVdzRWpQdXpWL1haeUd3Ni84V3RYaTNKUzU0RmRkWThUU3MweTVsSFg3VWF6QU5tNXZTRFdwMUZtUVZRblRYYXJtLzN6dk8ySitkSmdEbUJIL3oraVJ6Rk92QlFNNnJEdjdaUG5IUnEzSDNHRSs1K0x5bzljSnRodDRLdjZOd2QyMDBCMUNjMG9EUXZKTXFyMTF1VHRXRlYyZ0NkMmd6ajM1TXBMVXUwVnFpVnR0UFlxbW9WY3JsYVM3Nmw5TThDdTRKNENaQ0NBWHROQW9Da1lJQWdRQXd3S1FnUXgxYzhlZmZYdXllcXY2bHpkRUNsazUxQ25uTmtwMG5TNXZpY1ROTWNCWWFocE1uTnpDUm5uN201L1ZBelRJb0FaYUF5UUhFa3lCQWpOMUF1RUN6Q1hqVEN2bDBVb09hYUxCcVkya3hwT3NaVG4rMzZ4Z1kzMDIzbHphZzM0R3FHR3lqS0h2azJzVkxtTHdpOGtkMmIzcG82WkxiWmg1OUd3QjVZTGlXc25PZGFJbjdTMjhQb0NYZ2NYdThwdERLVVNjRFRkSkRHSXBDNkIzVTJ1Q1pmMWl4NkJxMU85L2JSOHEwTnVsYWRUclBNN1dKK3hXcGRLeVpuNkxSZmdQLzF0bGF4VlVjUWVYcXViSXpQSXFOMUw5MXRkZm1PZzRXN2Y0WWxMLy9kNTZyVzJFWlVJd0RjOWxxWTVpYTVkdjNhalhtMnpJZC9vNENUcGs0NHF0VnpPTkkzdmNQcWxIdXZUK1NLblhsZXU1YzhUOVV3WXoydjc4NzJwSXVqbHFZMTU4eDNMMng0NDdqVlhCL1grRnlWOENqMWtxQ0o4N0ozTkYrZnhhS0FlTi9Jam94MENvSmZ2OHdpNy9INy9vUU1OcTYrQVl5Y2ZzUEo3T2N6MXZlSlcyaWs2SGM4OHVvaFl0ZVBOcGxyaUJnRUZaMkZxMy9XV1JsNEwrK2Z3Y3FMMkp0R0w1TzVTYUJPWXVEckZqaWJsYXFpVHJlY3BsTlVYMTJQKy9ONytQN0hYWi9YekpIUWFtY3Q3QVI4R0x3ZWZzQXh0NitKOWhPcFh4KzNZd0ZWY3d4S1N0NFhMMFlQdyt0TFV0NFhkSEk2eEJpOVRJQjBSMGQ5WVpObEVMZUJhc2JzV3EwOUlSbUI1RFhQZ3lkb05ORmxYdnU4TSt2MjNFTmRRK3VWMHdFamFrQjJqNmJQRnlDK3IrWCtPc1dkMXNJeE1ENXkxRm9mK28rRE1OUUZJSUtocFh4NFBQcW9ZY01mRWtic0swTnBlV3l2dVNicWdvSDlOTC9USVNTc1p3WEI0elZlMkJUMTBaRnFHUGFFcUIyTGd4Nlk5QlFkWXdESEdNRzE0blErTlpBS3ZTblZScGQ2NW16S3lCV2JjaTZQak10OERTYncwK2JMcEphOS9pdFBkdkZsQlJ6eEd0eEsvOXgxRy80MnVxVUFDUkRQUys4ZU9KcTltQ3dRMVp0SE5rTktRU3FaMXhQREdnM1JLWjJRR21DSzBYMytCbFEybHlGS3FmcnlVZTBCYmJ4azlkUXQvUU5MajUxczRxdEhSN09uUTZ0alpVVVg2VVQwbFRQWkhhWHFhRzRTamtyRVVqcHY3b3h6anlyYmtDS2pUK2Eweks5L2RYOUlwak9pby9INEphMllrSG9QclIzQ083R1ZQSG5OcEFqZzJuUEFRRmFTR2lBTENHK2VtK0RHa093cmVWNzdiemhJUmhOT1QrSzgvMjZKa0lkNk04MFJUQVZlSzVoZ21Nd2REL1J5Q1VxdzA0SFdHU2ZaWWxjRmFEWVhaRHB5MURFbFdVY1VYS1Y0d2czSnlmME8rMDBlTEN2STMySVhMaldFOTZpeGduaFM4d0RQV0dHRytRK0dGUDlYQkNrcm51ZXZqaEFKdmNDbnQ2SUlvVjlKZ3NNaUV1bFZHMTZLMlE4Um1aNHhYSUlra21CWWFDYXNJSmVtYlhhTllCdk5wR2x3aFBQWlhkbUNmTTNXQmJsWityUGhqcW13V1N6YjZCcXh1VFJOUVo2UFEvQ2o0OXhJVUFldldieEJveUJJQ0FwTkUyTE9Gd21WRVpnbW5wYlFEWHorZ2NyeUNZcFRHczUzTG1TTjJJaUpGV0xqUFV1OWRqUmd3Q1dOV0FQc0crYUo0YVUxNFEwdlpvZnBTNmcxRSs4bmFxaEw2TU9TMkhWVDdmZXd0U1o4ejZnSW05T25KVFlobWJmNllkKzN6LzM3NWIwSzI5ZDBnM3N5allSTHpuZFJ1L3hlUXI5UjI0Y0Z2aENiQmZTcmdtRkJKaCs5eWdKNzJCNlo0eklaYzBoVjhaNmxZNXNGR3RJWHk1UTdQZ1N5M0M0bCtiSjdGQ2gzRXJQZEprVEZUcUlWanU2WEU1UHRVbWpFZDkxS1NjTkV4NVE3K2lEUWovZUs2dDJOK1M0QWltUjZrMmlvQnFLeHFGa1h4amRVRHVLaE84Tnh6Y0oxMW9iVWtDMnBSelR5OE5haFV4MnkxbEU2OUFiNFRLa3dlb2ZUdmp4V3JaZU5ybmdzMVFBanBoK0VnNFpTbkdJd2s0WjY1aHNFK1ZVQjAzb1ppbGFsWVlKRDZDQ2tBU3VhbXpOODUrYkdlMG5UWmVvWnFwUkhKTTgrMUJnaUZHcHVpZkFpb3RtTG8vQm9wSzhHYkRhdndsRndiQkhCWnNSdWJIREU3NGZBUHhHb3kvS0Q5UlNDNVovMUdKbkRHUDZ2enU5OHJUSEpyc1dXeEl1WURTcWhWOUxoUlkzbHExd0Zva00vayswVi9BZXpPMTUwV0JaNGFBNlp3eFpocm4xR2dDYy9BVmd0VDgxTXZOUTlmRXhndGhLK21TWEswTjhpQ0wzYWtXL0Y5WW4rclFOSUpJQzlka3R6ZkhkSlBvbGw4eWJOSFdnSlpXS3NlUENNSnlOamJ4YWgvWExFRWY5Zm42RmJUMGJrWnlIaG41N3ErM3ZOTHRJYk82WGtDODBqQmRCdm5mSzN1cE1ITGE3RldPMDlqbStvY21Vdm9pa2ZSV2Faa0o3d1oza3hsZmw5TDRsUEwvTmZqZDcvWmdkRmVETW9NeE9TNFNrdmRCQjBhMWlUM01rY3RyRDVzUGVMdWhVY0xuVWNreDBZR2xDMStPRWpBVEhPdHJxLy85ODNQZnZnUmdIMEFrOXBUcThNc3BUSkpTa0RXNHRpNlp5VUY3V1hTcUc5SGtHU2Z5STFSTzRiWmZkOHNNWk9qLzZyMGNwbFpVTU5pOU9yRU5pRFUxSDcxWm5hdGQyYmJQK1hPZ1M2dXdpS3BLTGtvaVQ2NHREUzhRTmg0enlJQVpzYXhJREtZNmFyMTMzVEREcCtGSmRHUXZGb3FtSVVSa3F2d1d6ZHUzVUg4ajEvOFVvWjZuc0dIanUyL2lXS1JRVEljNi9BZStsdEx0VG0rWVBlbnNSMHRWaVFpUDlNZW1IN21lZ3oyWFpQbUtmWW1RNWJvZE8rcEs4ZXRydUZ5MVBwM05kNlFxNHc5R1JKOHhrYlBBczBwS1VxQVR1bVFOYmppNHE5Y0hFeFFoTlZoUmk4b2RJTXFONy8vdTNwN1Zya2N5eXduQVpZb0x6ekJjenhXdFc0dGNBWXRaazcwdnQzTHdIQmlFR0JDVzNkdzRiYzNDc1V3Y0w2cURxVDlBYU5tNmRicm9vOGpxbHl0N0VIeDd2WXF4UlJkUWl4TGNuOUZzem5sUVJ2QjZsa0tnanlqd1Z5QWhRaE8yb0YwYXZTRDFjVDBhMGVrb2pWN20xclBmem1TZll5U0NzT1I1VU5sNDNNNWNsWHdJUWExeDFLR0dDR3RSam9QY2VWM2QwcjRTdXVGZ0dTNHB1a2psbU9hM2VZRmRsODl4eWhVRHlWbGYxYlZpQzRYZEl2SzZIY05XdHlnNFVHQWtuMjZqVTVHS0t6OVRmdWwrVDBtQksxSk4xRXcvUExUUnBUUXk0M2laRlFCeW9YY3J1bWorbmNkOVg1bkpJMDFRbDN1WXVxRERXZXk5bkw2MFhTeGg5R0o5eVU2MEI2WFhWSUI4dGdmakErUXdUdXdNcHlEOVl3NGdOVjhrQkd6VURGQ3RxODQvUUtCRDVEQU1rcGIreit5RGFYNWV4bHhjc2tXT2oxMHpUaE51bTJPdDhkMHFyL1NOenhtR2ZHOFpDMzM0N1V6KytGdHY4a045RzgzMlVKbC9URk5XV0V1bjJ3Qnhha2l6a0M4Zkt4dGRTaUxnNFd0STFCaTBNMW0vRmhPQnZ6cUlkaGEvNENnODRGU0E1OWNlZU5rUHlBc2JoOHhTZCtoWXBNamJ4K0phL0V2TWJNYWw1VG5zbTBIRTZvZ2NNaGRkeTZEMmJxWXJPOEt3OHk0dThscmJGTXVUeExDV1BjWEJLeEZNb0Uwakh0R0pDbU95OGV1TUVJbzBLbXhMV1dTUUxBbTBNQWRaa3VaZ05SYU5ORkhqdkZqb3pSVDNzMEg4UHpZWnF4WU9iaDg5cWw0MVZXUWk2SzRaY002WlpSclpiVzd0SFo4TnYxMmxPREMyS2lUaUtvWnl1L1plenFoc0s1RWhBSkc5WGN4TXVKV284OE4yUFN4NnZpeXpSaHlTdEtJcUVvVUprUFp6UzlKWnV3MmwzTlU0U0RpekdWMjhQN09XTEtMWFB0MHgrc3c1QzZydVlpRUFmV0pmS2xXYldyYXNyM0Z3WXZUS2dyaERQQ2FHM2ZENEJ6OFBrRVJDTHVPWW5adnlraktHcklJNUh6azJ0VTNGWndldzZKdGc2TVlXdkUwV1pmSzFFam1meGhsQ3l5emF0TXQ1UHdHTHNhRzJ1Z2Y5OGhSdkVyU1JRbllFMVN0cTNFQ3ozWGFMM25lamIyaUJLTnRIYVBaR3NteG4xejFCdVhkYW00ZFFFamVoTXVDTUpDYWVBTFZPSmdHbVNQMElKTnA1OWZMR1Y1cVNwMnZNbUJleWVSbnliWGprVit3Vm13dzF3U0cwRmkvY0VtdnlCaDhOTnUyTUVxQ2pISUh1SGRVLzJBRVBxNmU3bzhmbDBkbzQrajJLb3Nxdm8zcjhEZzZtRGp6aTkxaTZ0WDU4SjBEb1ZRdUVod21EZyt3NG5QQXdROXdIOGhPYUVhbzdOcDFyMXY0WVBWQ1A0bEg3alZOK3hDY0YwMmhwU3RkSUVRSmtxbU9QZHBjbW1LRlUrbWlOWWNIYU5udUZVVS91c1Q1UmJ0NXFYQ2F0WVVWbGhSTXNiVTRyWGVCcFppemt0RlZJWE5GY1hQakJYaG43YWFhMXA0SzhDZU9iaTh2YjBjN3NlWjN3YVhnM0JwUlpXY1Y3Mk9sV0Z6OWxRa2Z1UTlpL1pwMUJCU0RtL0tIeW50VjhQRHlqcUx2eWJRUDlpVHVSUWl4NVZXYUZhaHZHUnBBb0hHQ2FLK082V0lpc01Tb3VQNm5qUzRoMTA5dTc2K3ZLU0ROQjdyUWFYZ2ZxbEtiZmI4THUrUi83bUZKNEl6cjNsU0tMZ3I5eFl5cE5GTFFXQytpckxBdWRnc3VhazREV0wxZ3hwSG5vdmE4RE9kYmh1VUhCNENOZ0NabUx0YXVKNU5kVkVRMWVzZjJhRVY2em5ab05TWHk2Q0U0cUk0aU5VYktpcUc0dG9mR3BaOXNhVEFpb2ovK2puTFJHTm9HVFJUOHBjTmhGWGJrOGM5V2Zldnhic0V6NHdxdVJBVnFxWmVlME5FREo3ZW1aWi82TXFWbVdDWCtMSDdMTS94aE8xMFFOL1BWeDBvOHN0WVgxRkNEblI2VTR4YXh2d2VWWUZxWjArbnZjaStkK2RPOWJiUVcwWkIwSndEU3c4MDdXKzJEam5pUU9yZll6VUhQZjV6cTQ3bmpQTDFXcmZhdFhkWDZoV0QzVUxJQ0czZWNPSS9ab0xSMEhZcC9xcEkxcDV5ZGdSaVdMZS9KS0x1NU9oYnI5YS9jRmdabGhiVTdTODFOQXBkRGYvNWJJcjFzYzVmbVozK0c4YlBVRXhkdGU3Q090ZnROZ3BQYW1SOWxac1o2VGZmMjMxTFMzVXRCa3VScFdGcXRONldaVGtMNkgzdzdaNit1SldXbnhaUFgzb2ppdTZna0syL1VyejVjS3pUeVp4T3gyd09neTBXWmJtUnc0VkdTTVBiQzFmNk5ZazNkUGNLVnQ4RHcvNE8vNU00M2p4YW8xUDBpbGRxWml0V0dJaDhUMzE1ZVNFSjFKdEhORXhiUmMremZGdUx4eVg4dkZVUDZubjBtbFU2SXM5TFYxUldWcDZleU11dEs4eHlVYWdPNUF6Y2syZDViakh3R2VDZU5XcEpuMGhhT3lOenIyWElHSjk0NzFrb0RoeWw1aFMvaWNJNVhpRHd1Z2Q0SmQ5UUdhUDYzczI0SVo4bHF4akFJbHo5cXNBcnNxQy9MbCthTmJVU2lZek5FQVNyYzdVWkpBdnZvdndaeEV4MGpsMlZuNnRmZ1NVWmVGckJRTE56aDZSbWdjNUpTcmNZZDFIWUUrNzJkR3hMVmIrS1R5VXlzZGp5a2phYnM1bHU1VWlncExlWEtLNjF2aTcyZWpwYlZzaHFJSW5CYW43ZTkxMlVqZWN1YkliYjBhdGxwTTFCMGpYNFZtYkg2NkJWZThqV0VwTWhTYnFUMDdYWTBTVmJMN3k5YWlJV0tpNkNFa0JzVVhFQ0ZBZXBpNkI0V0tUNmJ0ZmkrUjd1WkZpdDIxZ0tsMEFiRmtPbFlVR2x2RlRicWdZMDNUYnRLclpUbVJWMExsOEdwZ0hOWHY5Yis0N3UzNjNQdVVsU3hxdjhVNzIwbzhjbEZRT3ZyWjBHYTkydEg4NTdONzE3LzlNdzJITmxnM2l3NmR2WHhWYkJKMGoycDYrcjMzRWFBUkdURWM0alRRaTliUGs0Y29IWGZRMExxSXIzRVFUQkZpTS8rdjlISkxPMk5MK1BoSXVObE4xMVlIcjNYc0x4UFk2ZzArdnc1ZGVWVzl0YjlaWm1qVWZHanQwNGRxVFJ6RksvcC9XRzgxTHVuMzQrYytkTU9IdjB5TzFGYjdCV2ViempnczZ2LzNSWHE0OGtYSmdyZHFWTnRPdms1R3J1ak9CQXowUThxc0ZyeDRsemI5eUhtSW1BYS8zMUd4OHFuaFkzY053Z0E0bzdwRU1FYzJqRW9LbkxWS0hHbSs1SjFOOGtVUDRSUWtWcDA2eFBENVgyZXpDbXR4akpNbW1VZU9vdzg4cnlnSlh2L0tCTWNlWEduRThwb1JzcngvYlppelAzY1BjRTdIQVI0WTNrVm1EdjhCV05rMXdENlhuQkhJZGgxWFYyNXZhcEEwSzRKSmtDV25QMDZFYjI1Vm56eGZLdHZIekFUWVJyeUxSQTAycVBYc2R4QUxpakhPYmJUMTBCWFozQXRUUXNKMmIrUzJ4d2pUQWd1Q09Ob1VGcHdWajNhMHBLaCt6Z3F1YlhTNGNOYzBwY2g2SG4xOFRBejFubk13U1RlMjl2aUZsUjR3NGdoRUYvd0hQaEtMYnFPbnVFVUhyZyt0bm1sMUhuVmtRV2o5dllWVWFxdEJqbEdpQml1RkgxZHgvRU45M0tNSG9KWExvMDdPbDdjTDhVdFFrSmV0cXZBUUNZNDhGc2huVkV6TUo1RlRLVXZBRytKQXhGdTd2MTFvYThQSzJOdGxZcVBSVjNaV2JxclMrVnl6Ym9tT2liN3Z6bHFVK0dvYkhZY3JDVjBDUVZNY1BEeDJjdVE2a2tJQ3JxUzgydEI0T3dPSXdSNWdBY1dNeXJuVHp6WGliMnA2V0JOT1h3eDZXdFpzdjdGTVdXb1c4K2Y3QlVLNGRrdGk1dThoZnkvdlIwa0o0eGhGMmlONnZ1NzVmWnVIQ2VmSHlEV0l3c05xM3JIVHRUZUpFYWIrNHZMQ2FSMVB6dDRnVHFyUWllZFdTVW5ncW8rdDRKV210ZFJJUTFqRjZuWTdIUERXU3lMVFErNUxQQU9rcXErdmg0bmJVT0JLaXk3ai9JdkdCQ3ZHSHZ1UWRHOFFTdGplbytZaHAvZjRWREIyMEllWGtzMmx1NWxncFJ0YjBUTkxWSUpTNkJrYXROZnVvaHVQMXZWRkJyUWNVU2JGLy9EQ2c5YlRqS2kzWjNrZG4ycVMzVUgyYmVoS2d0aXpyTmx0Y3V4UTZuS0VGYVduL3V3eW9Qc3lxTExZb3hmMzE4d25VT3QrM3JaMVdERUVnamdyQVlwN2p0YzhkMlFJSzhPOWsyR0lJc0VHc01zUWNZWnVsUzMzNk1iR1Vpd0FJQTF0UzZTVFNqN3BHU0dBY0JLTmo2WE44STZSYlAxd2MzSW9qcWpiQWhXSVBwc2dkVUpQMTZIYlpXVDBVUllhOGdvdDJob3BDNGx4KzVHVFNTVEhtazZZTk5wMzZab2dNS3o1Tkx6Nkc1MDFrU29pR0lJeHJjUFVCcTNIOXEvUnJjT1RtanVSMG5NQlJlSkMxcEYrTnk4R3FmZXJZRjhRUzQ2OVFUZTJtWTd2RCtHOXU5RkR3OW1BOWhtQmdmWUNTeEtvZHllOXpoMElwQlNPTlpUQjFWRkkrWjduVFp0aWVVNmlQaEdSbVZTWVdYcGcwVlZKeVhYUDJBZS80ODA4NnVMc3BHUVlKQ0JpSjA5NXlVWGpDTEZ2bXZBSzJlazc3aTl6SzZzWUdDY0xZdTRKK013YzA5U3Z3cElyVGxLYVlkeTQvT3JtNGVVQWI5YkhDZGZPbjIyMzg2alRJcEcvWWxLWUZrOFRkemtSNXlDL3oxU3lBM1R3SFJPWEQrSnN6ckJSR2hUeEp2NHVhZXZuRC83UW5QZWJwdlVPYTMyUTBSb1Y0SXZBbE43RTZHbW4yL2ZPbkZrUTA2SFc1dUExaHM2eG1pcGxVeEpXaEJJK0trMXRsTDBhaE9VQWJWUXlLdkwwZ0dnb1REZ0dmQzNTdS8yVE9pY3BiS0p5Rlplcm9NTWpDMGRzdGwxN1IzTFl6K3VNdEc3QUpGcEdmTG9BeXB2YjBiMldXcXhha0hRWlFwUjdRMGNLK043UUJ1K3R0dlc0TWZWTDBzZFBIdzE5ZzRKWmNxQTRvc0tNckZXbHo3SURpNksrUi9tckpWR2hoTm1ZQUhaem9FSzlTRkFldjhJN1ozcW8xNUgyNkdzcG1hbGpNdHBiWHN4bWE4ZzFybVFMT0xXYzVjc2UyblVvLzcwaXlpRktzN1lqUmJzeUkxeVQ2NEdaYkFNSURxcGV1T1lZcEJkOC92WHFsYVZKYWRiSXNOVTJFSTM4ZGRjclRLSFhUeDBXMnMrTFhhR1k4OWVLNlFkR2VWNk0yK204U2VCU1VORG5VdXV6RWZVcmxCRmozU1hWQXFVYmUweEZLVDgvL1MrQUpRK1FxR3czeXlQdzI0UjJWVFBseTVpM3JPZHlrM2VpditWU29XZklnb1FSQ0lUOE1RSDlNdUhzb1ExODhJQjhFc2szU2xwT2s0UmcwZjJQWGlsZzZ1OFZ6WElKdXpJSGNSRkZGZGw2NzZ1L2ZPVnZ1cTZkNWptT0U1WFZUNXNVdDdhSWNPN3hSQzNDLzZHTzE1cVh0OTNtME5ncVpKZUtKTGE1c0U5Si81TzBCM1lCanF6amdYMzRmNTVkZHZjVTFqNHk3Z0pVbTN5NnZNc1UxZWQ0SmtoRk5mbzgzRWpiSG03dEhXYUY0a2gvOUViR1J5M2xuQVRjZjNtQ0FiTVhVK211bmdYNkxwTTNYVE0zVDg2MzU4V1hSK28yVnkwL3dHKzlVWEZKeGVoRmdlRVdHT2E5TUtXK09YYzVrSitYK212OFpiL0tUaGZ0MXFmcEZ6UTNFMjZIdnNPK3hzUi9QSHdCclo5d3NJZm0raXpiaG5aMmlFVi8xNTBwajhKc3VrcGdVTm5EWVhUR1JFV0ZKRUJNWjFLY2VyTldFNXlrek0relBqZjlkRktlN1hRK1lqNEliNXVlRHZmRHFRL1pobGxlMzdlUjlub0hrQks2dHMrRDU4a3VXekhBU0hORDN6c2pEVFUraDA3Ynp2djNlLzgxWklrSmJzcGMxNzBsdHF5aXNrRjdNS1FXVjB4QVR3NTNzUXhvUWFFWkxic0RZWFpnNkJoM0U0bDZnUjNoSXhoQUhIalNudFp3T1V6bEI4c1RvT1l2b1BRbkV4RkVmVXlGNXpyVXp5NmJ4czBwQjBpSlM5WXorWm1ia0xNR3FaNVAxcnRMYm0wNGRkZUtIYWZZMnVxTS85WU9FVE5kQzByZnRoaW81SE83RThMc2NsNTU1REFYWG42S1RkTGhFQkF0dUNQMzkvYTY4NGNicUlDaytJcVVhaWE5L0IzY2lkbThqdUZxM3dSSi9ROHJRRnJpODZCNnpMUHQ5aGlhOFFxdmd0d1M2Vm9janVtM2M4dmw3ZndZeWFZWVFhRkhTay9XSXhlWUVNR0JRV2RZOG1NNkFRRlFUalMyQnhzR3VudG4yd1VaUEJicUR6d3V2N2tXMEg0c0xZNjJoaFlhWU9haGdYaklsNlJPcUl4RGY4WlFyZUwyRU5RSWJzdVhsN2Q3RFkwSVQzZUxqWWh2UjhzR09hd1pxaWZnMFhGKzByUWpTc0lPTlBtTUlwNE5OUExJdlBkbGwwbDF0QWE1NlozT2tTSGhBMmtQem5qeFNIZ1RjdUZPT2ZIKzVmeVVqREpUcTNONjYvZ0JOVEFJRVVHRXJXVGJ5eSt5ZURydUtpUE5iSlkxR3FjaWkxTzFqT0xRZCtWV21qbzlKQm5HbFUva0JBSFIxZVZiVThsL1BVWm5TeXhmUWNhVG91dm9Hby9IYWp3bHhvVDFpOG9VSFNNK2hRREpPdkFqS1RrN2NGVlZVRmJUdmdVSEFXSG5oV2Iyb1lCYVBFWVN2UURCTk5HMWJTMjBjckNCRUJ4QkYxTDVDOTR5Y0pxeEtRVzNUNTRkcDY5eCtZTWRsYVdUcGJiODJ5b21GeDJvbWVnVzJ1T015Qjh5eXgwbWM3cGRrdCtNOVBuUll2MnpaM2RBZmtNOXp5RXhkdDM4N0JsQWFVQXRVOFRyUjlZcGVuQlhib3JjYVJPb0JUTHZRckJYbnp1L1FSRnZYUmEyT0ZuVHV4VTVybC9UTmJXQ2Z4TWJKM2w5SWlaY1lOZkd4aHdaQzhvWWFpcngwMUZDcUgyQVY4VHBub1BONkg5QjZFeEJhTCtubm9oNzhuSGhOWjlFM2MrdnYycnEwWXl3M3Z4bVlXdVlTOGliUzh6Y21BUUVndVBPckRXemdxeGRhanNtOTZEZHp6TWdnb1hOclFOVHFnRzF0aUZTUEZQVnNPNk1BTzJrNkQ3SURXOEpVY0lsOFZwdlZnN3N2LzFsVGlHbUtxQnR1RS9yWHE3Yll3T2JZOWJpc2kwMzBlRHNETEtkRWEySkc2cm9UNGxKb28rYmhUSXNlU1V0N3YzRFpOWGtNTDh0bEFhOGoyZG1TOWM3OERpWithdHF4cng4ckRYc0ZpK05Vd1p1SGNvVDlnd2lMUU5hcjlDWFZ6MnR5ZUZIUG5zUjM1K1NQOXlTdnNqamlrTmY1OVQ1SWNiNXRua1IvMFJ4bXRzUEdqSlkvd3p6NDBrbUV2M2VDUTdwU1pDN0lrK3k2cDdkUUhJd3FiL3M1Sm9IbkUzUHR2cmRlKzUxRDkvUG14N2NtL2RYOEppTTdEcGhCaVZjUWJsNk5JZEI3NjU5MS83SzNwempRQWRCemRHa21iNFR6TmpTbks1aktiSncyV0RrMEc5U0h2eDRsQmovdnpTRU5OL1gxZWhjQkEzUDNsaVVjNi8wYW5zRCtXUDljMzhWMTFUN1NzQlRuZTlhbTMzaFR4cHdSV0RBQ0Z5N0Jad205ZGhJWFhYSjlqcE1xSU53S1N4VERKaWhsWFJtdlFjdTU4VXdKUFFQaDNMek9DWVIrMXhZWk9SZTZLNlFuZlZZbjhmNGVwekFRd24wUEZUSmdLQTU0TGZBREJwYnpBbERqbUlkS2RLaitpSU9mR3hyYnFTcktjRktwa2pFSkFYc2Y4RXR3REhTNHBGV1Vpbmg5U3hwSmxXOS9WQTJDa0dKYzdRODlZZ2M3bHZScmt6TzRvVWRiT3pUVmVEWU1NTEFFbkpKTUNPUlVEdm82Z1RIY2N5Q0gvRHdpY2tNU1JNditHNzZBcTZ2YzZaU1ZCTTNCVEtOOUQ5YnByUTJONWV6ZGR6Qld6T1ZJNnNHUFFwZUtDamd3Y1RKQ1ZydWhYSUpaVE1meUpjUlNHdE53c0toQWkrSmE2aWpKZFVCQ2FsSlFWMmoxTjZZZVRlRGlkL3lValdOMi9wTkduNjliZDB5em44KzNWVzdsaTVLdzNoNWk0Z1J1YVI4RHpQWFpGUmNWRm9lNlpVbXdVV0ZqNXNGR1lGNVFYQ29Yb0hyaXcwZnNjNS9EVDBwcmw3U1VSbkpSbzBoRGhUdzFjYnlFZmNXSUdDcTFieHFacE5QK1c5MEw0czYyR1g0ZytvbFBBOThMWVNQQ2R4SkRvVjMwYTE1OHdBa0tZaTlaMzk5UVVTOWtCMTRQMG5MWjRmajYzdmRPNjNHSkxKUWFFY2xhTjdGNEptVW5SZXFoNHc0YmlZS0ZSQkJYTGRhaTRnVWJLNjNvVDFyM3Y0bFl2a2tXVlU4TVNBWVlJN284SzZFZ0hSaGUwUUxUZXBMSVh0ektNS3lZWDdUbVgrTlVkd3pCem1hM01EcDUycC9XWGhRb0FCRzdZMW14NWM5a3VVcjkwbU1qTVpHYXoyaGxjVEJqY3ZwOFVueENsSUI0Z2htUkRwTjNqQ2hWRVFjeFpTaW5iNlRXMmlQVVdBbnFTU2gySXhHRVhIeTdpck1FaENDOUl0bDVHdmNXa0xmQ3VzdHNiOHREdDJqNE1Sb2l1YkxLOTdWNmZLc0VQcnZIcFUxbUNWUGxSQzl4azhDUWZBSEVOU2tLWXoya1FGS2pmcVZlN0w2MTNXN3A0QmUyWlRtbm1vQ3AxekhWUmdrR2thUFlIRU9Ia21GZnVzSWl0NUl5WStheDJYYm93MUgwWmhVZ2M0WlEvWk83WjVhNEpqL1BhOE4reFcxb2xaN3hlZlhOUGlLOGhOWDUrMjFqdXpaUVFUQjZhWExvMmNIZHZZS2VmMkRkZkRWM2tGTUlqOVZZK213emViUzVPeWRZdHdTLzVkeFhXck1GR2JJbkdyTGF3V0IySk84R1AydFNqbnIzRlVQYU1SOXdzdUIyV0lGTmppcDhjanhmV3BrV1IyOHZWMEJoWGRDZlhQSmRzdWRzb3lCTElZcDJXRE15cnkvenZiUG9rZFI2NHd4MXNnRGZINTNBN3U3Sjl2OVVYV3gyZFlaYXo2NExQVEx1U1VsUkdjbVVsOW5hcFJvVzh3eWZRNlJOQmdwVGM3UDBoYlloUE1wWjJuSDA5U2hwR2o5NTlzVjdmZWM4c2RGQmlKdWZsYndLWlRkZVdlcmpIVUZaK201eFhaTGVsazczWVNnMjM4RzRRVXdIbjBXL3ZQREwvUjFFVi9TZ2N1OGZEc2kwQzI0MkhMeW1zdmJPQWlmR29UYS9Od1libkh6eHFtckRRcE41cHlQRGZFbzhjZmZsclAwYVF0U0pIc2Y2WHYvVWpLcUJ3YTByVVlBcmpuTklNOE5nMXhJQjFYaHMzckJZNWRoWHBoTmlGclFWS2h0SUJ0N2RBamZiVFFTQzAwMFRxay9XUlFQVUh2dzVTdjJnSElXM2ZRVXc5SThRZHJxUGtIY0l4N2VzMVJtOWloNmhmMWsrSS9zRmhFdjJoN2krU0NsbGIyMEYzb0oySDA4UHpHd0xDVStWZk5YdERMSytBczMyUDlSSjh3K0s2Uk82cUlacm9LMkFHQTdUYUJ4ZXJTYnVoQk1yUkxUNTRpOVJQNkV0ZW1sNDRodXd0K3M3cEovcWx0M29vMlk5cjJCdDBXQkR0VTAwUmo5a1lTSDJ0akNjV1lqOElHa0FCNFFDYm1wR0s2VzU0TkVJN251RVJwaHVTcy9YS2dPYUtSdHV1dkJISlE3YThITzJIKzlCZnk1RXRnbHg0SDR6d2NoNjVMSS8yUHZ1UG83QitRalBFVXRESWV6c2E4dG92cTFZVDlXWUUrOThqWU5lQXhhclJNYkVhaTkxVThJeXR3U0lJdG9ZeEppNEMzdERPUUxlMEQ3dTFnQkE4ZUE4Z0hxQWtHUU92Wkh1NHJtZC9mYkR3Q0NGMVVMSXA4QXZ0dCs2eEtiZmF0TFZ0QytXdEdUSThJcTRlNmlsQTYyRTFVYWNZZ2pIcUpBd20vZkQ2UjlQdDZyY1ZEbXhxUXR0K2F4bm1GVEZFdk9hRC9hSmg2QjRXL2RneEFqaHR3bnM4ZDZRZUZ1YTlCY0t0c1M2NW56NjJ2dG5QT2dMU2ZGUkdQTnp2ZWdpeDRYaXZCbTVDVHhUaEdrUFdrYktQdGtKaWlKb0lWK3YxVmJDZ1F5UnhtWGtoaWY2OGdHeHEyY1VmT2FHQk9DbzNzLzd3VkJMaC9PYm1mR1BoQVNnQnFYVHhwZ3pMMnBWbytnZDEyb3BCVGN5Q3pzcGFRT3FYamorY1h3aU9vOVZ1NGVsVEFoUmJzWmVJZGs4b0FsNi9KRTlvLy82NmsvblluWEJkNjhJd2N1NmFZY01IWlA4VERWMWJES3M1ZGI1S0x0SEZLQlJ0R0JKeFFVR0FYcDBnQTk1d09hay9TMHJWTWNYTU9raUQxREwvM0I4emZ4cm5NQTAyS3hBTFpqRjNvai91ZGhGajNtMUpKV09TVlFjdlZMRHVoNXM4WW9Ud3h6NVQyakpRVER4czJBZUV4a0J4UmVxNGNVQkJEWW1pdWtpdXNLZ29PSTZVa0dEVUpDYVFTUEh4Um1OQy9BT2FlMjR0Nzg2MU1nR3psYkdUc1FJQ3NCWktpN05hcWVBZEJwQnZqanNGZENSN202OEZ3S0tHOVNrQk5EdE5ZVWJjV2Q0YkpOK2JwZk1MQmt5OGVZLzllN3NPZXlpZHpyNDdiVDJKMlJBa0NZUFE2RERVb29sM0p2NkR5MnhpQ3AyKytzN2FpWGpDNDRnYnJZL05rVFdwTUdSNlUwaG5hSmR0ZVBWeVlqaWJleVNxM2RVYTg5bU5vYmswQTBEdUltVnhhWUhYVHMvTXlsUVNUVjVTOGdPUm8wUFpMdGxpcEVpMUpCNEdscGlHcVEvb1lhZHk0QmIxRVhYVWRiNWd4dS92c0JnUEVZb3dkelQyZVJ0azhHa0tQcGZ2bnIrRGxpNE4rS245cm84elVPTDZyT25OZjZXNE5zcElmY1FWMGJBb0RtcEZ0bmxFNXNTeTZEMmxTYnZBUTlBUlZLRmVrTDcvd3h2cll3NU5tSlBwNmJna2gxcUh3R3ZFUTl0NkdKWkZvSnZYMVgxaGtVbUVrR3B5ajNYQnBEM05jajBWU0RxR1NVSW1GbTRBdVFObkRCV1RoblNpUTRTWWlHNHFIQVBodlEvS3c4b2V5aXRRTXBVRkJlY1BiOThEY3N4bnplZUc0eHRMa29OZHRMNU9YQUFBYVNPc0JEcm1vUEwyOXNWd09ad1FlaUErc1Y3Q1ZkaXViakhQeHErdExDWHoySlR1YjM2TWFiZmRLNGN5NnVyKzJaYTdhdXZnREVFYXpJUXlvTG82aHB4NEZQbEJpTVJnczBwQklvaHY5WXJCdDUreEpQWlBhZ21YVStrUjhsTVArcjFpM1FzWit4aEZFOHhvTVlxcGFsQXQ5YWlHYThGRTBGU25SWTgwV3BYN1hPaGhrZVZneW4yNk1MUTNaQjFIOXcxSVhjQWZua2ZqZVVRQldOVFFzQWhHVTY5dmdCY1JtMmhtUTN2cVRLVytxWllDUDlic09BMmg0dWczaU1RVkY4ZERLTVdISHl4ZnVab3hyRmsvN2hVL1VGQVl3YXA3dzJaMkkxcnQyRHltSm8yQWh6dkhMSzBsc1luYWtxV0F1NXRHSUNreHVsR0xGWWhUVkY2MGc0cTdZeEZRaXhWTVJhZE9TRE96M01GUktvQS9QMUkyRVhMYnJPbDdTbDRrRFl2S255NWNPV0ZrY1c3QnhWSVN0aWV5YnIraU80TXFsalFuaGhlTWxwR3creVBxRGlSM1JYNHNQSkRvdGlUdUR2djUvVjFQcTFtN2FPaUU4SS9ST0NvY0ROM0pyQjMzYlFQcUVQUjR5dDh1S1YxMSszVjVwUVdqa2JsVmZDL0VORHExdTI1L0NiVjlkTUZGQzNrbU9NTGREUzlhMjNDb21CbUNXZXNmZmorbXNnZU5kK3hUNHc1bWhUdjB0SU5CT0dhbUl3WHVyVmFXbWMrMkZWeEppY0lLZ0FDdlgxb3NPUFVycitCUlRMejF3cGl5Uno4N2ROdXRqMmc5ZE5SNXhsT3dzM0xuRDB0L3FHalI2RHRheU01MWUzcnJJOXMwd1UzVC91UklXNWw5ekZiV1g1V3QzbXNNQ1BvRUFIa3R2REIxOFJHeGluYjNpL3VxUE02MVRNcXlRNWxhcGp1ZkZHdEM3eWNtTEJZaUkvZngxVFZXNE9sTVlla2Y3d2c4bnkybmZBYmtNWU5zRUV0amVlaGV2V0wwNnVzQXI2U2QvUGVmMVl4eHNkS2MyUlZxQWpCTGxqS0NGczErMElkVUFzeFU4Q1ZFb3NMTXJQb0t6ODcycmhIQzhiT3o2cTExRlVjZ2xZZXdJZUFpODQ1aVptZnhRUUZvN1phUFE2WTRuNW5pbjh1bEFqaHFocnFsWlgyTDBpZFNoSnEzcUJtVDRnaHRWMHNOWTF4ZnVXVjlPQUJjQjQrem1KblBtQ2dhL094cHo1bTZ0d3czdTQraGJHblJ0cWpSaTZUSUc2SmNJdUNlK2FjR0d1YVlkZEFEcEpieG9MRWdEOUpMN1g2TEIwYUFQTURvZ3J2TkZ2VkFHSEF6SUErYWtlQURydGJXVVZTM001dk41aks2Z24vL0dmSUQ1c0Q5QUdBQjFMcVZrUHBFSGlmdmt4N0VEOHRKZllTSFNHRXpORVlRaDNDaGhYd0dEN1hRbVZXTCtiQXR5bCt2cm44RzdtckpROUlCQXptelQ0WWxtZU9OampCelJ3U1lrUUp3NGZsMUdNQ0k0b25TOWlMOHRTVk14QlpUMTZxUlk3NThRU1R1K2lVaDRrcmk4Y1R0U2hZQ21SR0JLSDhPbHdIMTdPSTdLdmNpU0VUcmNwNW16bXMyREhqUnAxMzFOdmNqdjcxRStydmFlWEk0WktGSGFXRDI5OVNuelQzSXA5dXhBMDlibkZySVhuanF3Y1lPSFc2blk2Zk5QQ2dHT3l5Tjg5eTRnTGR3eVZDemg0bkNXWTAyL3QrajJsdmppeVFoSXVIZVZtS055ZDF4cGxQOUVXdW4xVjk4ak1ET29YUGNYek00OXF2dXFYVFV3N3h0YytEME5uRXBnbTJWZWZ5ek5peUk3ZmhqQXJFZ0RKL2wvL3FJclNPTlh6L3h2dUlqK01YR3I5cEc0dTlDS1RPSHE0YUxvRndPTm9YSWVuWHZKOVNLN3RVa3hLN3huc2xCU2F1c0luR0o1aVJab0tNTks1RmdFZXN1YVYrT2NWeU9KY3lGenduaHo0QXJFbzlndnY3bmI4UC9wei95LzMzQmgvRGhQNStOZ3pXV0hSazNKMkxZano5UlBCUW5HUW9sc0dTemZ2eXN0dXdvdGxCUHVVNmtLRmdXQkt6YTRJVWpOYS9udTVsNzNIdml5VDRKN0d5dXFibjZ1ZXZkWHdOMFhualNqb1g4V29zWmoxMXpWQXRwOGNPQXM5Q0xmLytUdHZyNEZMc2FzQzBkMktFbk5yWG5zTjFRRmxNMnNDTVd5MW5XWm94ejhYQkdCek5wUHYzL0w2VlpML000b0ZRdzYrY0hTM2UwWTFSaFJRSHkvZGNCSTI3TSttUkZMZGMzV1ZSRkYwNk1lRXBpcmFvM1loVkxsQ1NqZXhQV3BJbG4wdExpQ0pleXV1Y0g5M2NXVTVvTVIrSVlIWDhqVTRxRHd2a0ZpS2JsTi9zTlVocWtxS2hRaEIycXJQZzVpY2h2eUhPc2RlY0Y1M1hXT0dtQ05DOHZYcFBHYlk5SE11R0VkcFB6cm9CZmQzWTA1TmJtU1NnVUxrc2laR0lwMDNxYTdBamovM3Nqdk41cDRNL25iek9NeDFBUXFTeWZwM3l1WlBBQU4weUcyUGtkZWNPd3dUR1BxeUw2U0p5WjI4UXhQek5keEc2MmN2bmx1K3NuY2dyUk5YcjJWM0hVTnFiemJSbVNObm82R1IvbjB5VlJvdHhTZGpia2R1ei9OWENYazhrV2g4bUVFdHU1cWNsNEd2b2ZIMDNCUVNCcVltWjIrcEdMZ245TDZjcWpVVHg0RHRMdjM0K0FrYWFGWmhuU0wrT2E5U096c0Y4Y1JuNlVvMHc1aGhkTEVHUHJ3azRyY0tkMDJKVllBZFpuNUFyNmtHMHNWOEdkMWs0VC9EaXFnWks5Zng5SE1kQkZTTnNPM1I4TGVtdWFQV090bjJidzUwUDdGTWN1Tm53SmFCMnVIamJJS2hwZmVmTlk4SVRnUmp6RnlQMFk2Ly9qNGdkaHB5UjYzUTAxcThZTU1zZXo5V09TVUlXRFVPZmQ3c2IzNG1uVHQwdXVZdGtsSDlYOFNKUVBZUUdmeXJTbnJ2T2JxN2s4eVhkY1lZWjR0TSs2NFE1UUxBdXNaWGFhUjk0TklncmlSb3lSUmZ3VXN0WmxsN3BoRjcwUXBVZUFhUGFZSWdmRTZHbmx2ZEdZdG0xYjNFWkJkTmVRaE5ncHBCdVBUeHV5a2pwTHF3WittRDRXbHg5TldMSGF3UWlMUzlKVzJKQzdxeGp3WE1wcmVRM3gyVTA2dUw4aHQ3bDkrbGhwd0M3blFvNzBvcFJvcXdJdkRpK3RENTM1YnJoRDhIazRYNjloRU1mc211OEtiRUt2cGJoUzhrVVh1bVZQNmJGcHpZNkhCR2pnVEcvMUNjMFdmVzE2TEdXWHpJVithaUpUTEcyNlF6SzY2VURUVU9pZHlScFFzR1hwTklDUDBEcG9iZ0c3STNRdU02bnBMOHBlOXc1Q3oyMy9GOWZsUDc4S2hjVVUrVXRkWUZudU9pNDM0b2dVdXJwU01HeUtMVGJqSFZnTEc2bkJlOWFsUTlYVmpta2hBWDU1REhINWN2b2RnbDArRElGUjRnRGlsSDFhblhSeldjWUVFSWZTMm1tV0JMRWMrRm5ockdDZys3S3NVRlYwVDE0NGRQVThYNXpNRDFOb2RWUFQyd0x5L0paVktkUDk3dFRlSE80VHNhWXRZcTFtOXgvYjljUEltbmhScnNqczFLZEo0cEE0N05mTDR5bllCSDROM3dMNEhwOStnK1hSMkxCVXd2Y0gxYjhQeHMvS3didGhHZ1hkaGxIeVdYR2JmdE1ZWFhLM1JsYnR2Mk9sVytLMmVtS21SMW1XSjNIbHRrUzNsVHRYQlB5SW1PM0hpQkhRODRneGZkVFNZRjhzQnptN1JJNGhVSW14bGJnVXkwcFlJaThSMnVZaDJLWDRDRERLL3N1c1ZEM0RabU9mV1pUeXY5anJ0dzBPekZqTU9BYU4zeXkrblUzU0lsRm5qaHlrM2lwblNQb2crYzN5RzJ1YjhhQmFOODhweXluZlRsU0NFdU42NGpJTUszR0pzN2ViTWN2VTNpaVVGcE84TE95a1V2bGlGQWp6YjhSeSsraWZRTzlzN0d3dkw1WFFMKzdIZzZrbVI5VU1LYW9FZnI4ZklPY3ZIYzRMRWozaTUxZi9IZUdFUTQ2NnFnaDk0ajdpUEgzZjVwL2E2RXIwNG1EZFZyRHpJTHEyV0ZmeTMrazc0SFF2UTgwQVFnZ2lkSG96TUkrUk9zdWNUV0w4aWZUVkJBUFhSeWpsYUtldHAyZlEzdEhxRnZWWnhDa2s5UEYra1p2U1BRQVN4TlJPbTA4djVQaHp0UEFxUmpqNkFZQTFROEh3K3NpaEFobkRTQnFUY1liQVYzWEc2bW1EOWNqVDlOQzFDV3R6L3Z1LzlQOXB5Wk9QejM3eUh3a1ltY2loaDdEZ0MzNjQ1a0trOG54QVBRWmUycnk5QUQ2Wm12RDMzNHM5ZWNETkFMd1VFekR6ZkZUYVQrZUI3OGwwRTRNR2V0Y2tGV1YrQkRmbDdIY0YvdDRPcTIyQlJZUmR3QmRaV3VVaTNNOE1JL1R4amRzMStRUWFrOFlFU05zMmI5MlBicjFLdWNId2FRck5qVHFkY2FDRjByNUlsK1pNb1BGY1dGalRzMmZBUzdWdlp2ZnVHZnZ0SGtiazRWMGsyTzdoTWY1eVlsejNMeXFXc2FzR2JuWU1OQ09DRGtjQVhmZW9CMzc1dVVJbUQ1Y3I1S2tmUUVVcUFzYkkyRFNRSDlQTzkrWlMyd2VNVEcrbUR5enk5a2VHamNSN21XMi9EYTNkbndwc0FOWFYyMU5pMitkZGFmM045bkZydVordXBOQ3Q2aXQ2N01rMHExQTJaN2VTWUVGRDFtQ3lFR3k0ZmQ1NWdiblloZ0VDdCs1YlZlUFE4c3I1MVh6SGxTdjY3UlE3YitselVtcVd2ZHF1L1N2cjVGQlJLamVKWmtzMVlma1doWXFQTlNWclVFS1JnbGRCLzluRVJEeVZSMy9XeTRYWUFnb0tnZDFkcSt2OHNyazhtWGQxYlorOTR1RFlOeWEwQmljMEc3N1lxNEtHMGwvMEtpRnU5YlBYMjNWOTl1Qi9ud1NvdEFSS2hCS1NKS3lRakFDUUpvckU0ZUVJWmhFeHNwbXhwSklBMkw5QlRrNHpDd1J6R2QwWjdKOG0yMWY5eE03b3JwakRrelRrQzhOSmZ5MHlHZFdEWDRzYjQrbXBpZzg3TFB4OUlNMXJEZW9jaFQ4QnVGcTgyWktYaU1HUGV5R0EzNVhsbmlCVXZHWW1IbzQ0TWZHTGZCY3BjQ3E0bWIzZEM0UGdXS3FCUURsMjY1WXpDeG9qTVQvSnV1WElUN1dtanBqdXhhVEZPNXhaZjdoNFVHSVh2UVcrVkk1c3hyYWN2YlJGWE5IUnMvQ1dtQVcxVXpxOHpzRGMxNmUzWWhCQVlPWDlJMWMyM09GeU5qMGEyQUs3THpyZ2ZJSnF2NWV6K2VHSmR0aHQwY1lDWHkzREFhQStwSFEwalplZ1duN3F2RmUrL0RybzlDcnJHcXUyYlQ5djRMSWRWTlRxWmNUK3RPOEsyNk0zS1F5U25CUk1MdzJKWCtVQi9LZHBiR3I4Tm9sM1NpRnhsa0MvRUxzMGtiSVBwL0ZVREFvb2RrUldIVHF3R2xtRHBNWHdxakRmNVc1WlhrdDdjY1U0OG96eUd3VkJPRUxlVWtPNnc5RklwbGp5N0c1RGFVQ044NEZDcURrWHpoZVFVUWdYd0MyNVVEN0FsUlNFSHRoeGJTSTFRTEd3S0tEdzVIMFhlaFlmTU8wM0hXNHJIQ1hyK1I5YmJQRjBreHNFU1psRzFKYk5ZWFpsTkR5UUYwZCtMbjlPaW15aWdBMGpuRkJrV0tKQmptS1NCQUhrU2NVRFhJTHdhbk90WkY0M3ErQXBHUnNZU25xRThKejUzYkFKODFtNVNXaHFXYmNkNHlsbU41Z0ZCRHAyRVFEaUpQZjgvRTdsalc3ajd3TGVySEJtUGpPYzVXMzJDZEEvZUVsb2JDazhIVk14SHBCSkVJZFYrQmxuZ2pLOXdVTGVLek1MNXpMdHM0WUxCQlUxLytOZHBDZkhMMTJiWjhiOFhmamErcnB4T2JyaU5kUFRiUFRxdUxYbFFRYUs1anYrWGxIKzh1V1ZNcWZmdFozR2cwODVDUGRJVnQ3dDNOdEw0WjhNd0V2ajdOUm5tenJRNSt6bzROaHJKN1B0ZEhRNm8zMjJDbHVOdGM0dWZRT3B0bjBnNEVwQjcwRG5ndy9nUzZHdGpOenB4ZVo3ZVNYUmtvUmV3aG1ta3dTaS9MUHJHeGE1dldIOUlwY1VQM3F1YW9rbjlpVlZuaTR3MG5IYUJDN1NHRGFVQ2k2TmdBbGdBOUdLak5RcUtZQUNMbzZDSDJrdEJTTEpZTXZhYkxjM3RHVGJXeHF5a2ZSN3dza2dSMTgrd3l1WkV1YUY4ZzRmMEZveE5Ob3RtMmljVEEyRFlEdmVmNlpxc2J2WkYxZTV1eGhUMVlKV1RTMk5rNzlKcTJGWWFROGY0S0ZlWVoyV2lobDhSOTg2QXJoaUhLQmJBVFVZUjVQUkkyanFyT1IvQS9VZWNldHQ4enNyZ1JBMHpybjM1K0d1d3ZHOTltNnR5TFl4NHZZc0doR0pMMTZhU0JSSWZnZGE1STB0TjMzTVkrUTRISE1CQXNuelhhc2w4bnRBZXo0MzJsb0dZUGtDSHhSMktFM0RxUmduYUZ3ZG0yaUZ3S3NpWVdjQmVtTGdEMENHNUxPYnlrRGczZnMyZGVhUnAvZlFaci9VMVd5SVA0dlJxUnd2dGRMQUdFTUtHTU1RNXBGQnRybEtSakFJWGkyMGQ1WncybGFIMmNkSjdGZXZYcWJsRmQ0dmhIcHhZT3pDLzkrYUZUdThKQVdibFdaLy9LbFFLWVdQT1BXbG1mL3p0MTBNbU10eDdKNDlVdzdIRGlJWDRZdlF0MWZFS1RnSnRiOEwzZ1BKVEttVVoycDRvMzlDSTUvN3ZQdS9kcDVVeW1SS1pWeXVLY05XZVRPN1dTK3RBb21NeVd6OUJOeVRmKzlkem9aTlRvTnBjR3VCMkh3aUdvRjZvOWJNVitXZnY4RnVJQjRJaGc4eEFMNjhBRk1UOVloQlhSTW1VS29salRJT3pqcXJXZHJGREdHNFBDQ3ZFVE93VHltNjl3KzRldzhVRUV4QUlmakNwazNianJJYkozNitHaUlrMUMwSXhoR0hOdExhRjdaR091RzN6d0NmZjNlQ2p3ZmUrWDl2VlRuZ2hId0hDekszajZGZzdKcThHQVNhS2lUZzZoa0k1RFROZDNxTjN5NzcrLzQyY0VtdUJ5UHQ3MkY2M204Z1U1Z3FPbGhVNmtjRWx5YUI5OC9mZmJqL1I4T0lGTXN3KzhTbUxxRTR5cy95cFF0ZHdkUGhkRjlXeE01alJNSEhLYk9VeFZRSFZrNFhNWTZNaU5GMm9LdW9jNTV6ZEEwR05hWExVWXhuczV2VHhUMFZsRm1yUTQyVEtUdW1MUk40OTN4Nkp1ZGgxeFhscHdJbGlZWGRLYitsa1NPV2RjZElHMWh2OXNjbE1LRGROdEpFWWJIb1lvenhkdDJZOXNkMlNDem1NTWdHTHVPN0p3NWVkQVhmTEIyWjRMQnFadjRicm5PbUNraUs0ejlUNXFpbEZtT2JuWUdpeFQzbXFBUjE2WURQbFlienMzMzBPYmEzN2t2cVYvRExiS0VpdTQvT200RFVLQ1NGVEFnZEFVMkFHbXhZOHdhUG5CMllzWHhMbmFYZWVzeFU1SnlOSFU4SkZ4dlNxZ2xRVlJ0cjBwNXZYbFlLbkxDa0tlUDY3S3g4VlkzZ051dUxMRjNNTG9QejlxQjc4cUV5bHpJb1g3S2dCTGE0TEw3cEI1V1V3WlZ0ck9ka3ZzdTEwRnAyYlN1aC8rMHZSNUVCL1BXN0FFR3ZiZ0NUQzNvU0FtUVNSd2lZNGNoejFQUnNqMDNocVhyNDFsVkVEK0RUdzVBZjVQY1oxMmF5NmV6TW1KaFdNdUFpNUpyNHVGbzJDRXd1UithTVJzRWM5aFNwL0FzQkw4RXpWdWhlbDJFRFdFOWFQb3Q0OWpoTmFabkRreUFJckYybXRSUFlUUGZrUkY4T3hMVnhWaTVXMDV1YkhPMjBkckU4L3hxcmNJNXZxNDBIdVJmWnBXeVhuNkJUdU5ZWUZBVmdydTBvOURRVmpvRmowMzhVa3UyeGNJejBjQi8rZE04dVdHQUJQRTRxTjRRQXNJSTFJMWVEdXUwRXdxQUJtQkVDTWE4WFZabzlseGNCb1FzUys5T2lma2pBM1NLeExqem8walR1RzNreHFOMU94RnVsOFJSVGNkS2tCbDZ1U014UHVmM0F3UG9nTVM0aTRBTmZQVkR2c3dOR2FBNmVCK1BBNmxrSDV2NGlOU1NHWUJENkMvWUJGdkdYVzlMVW0vbWQ0OUM0QjlhdlJ6OWNPa1k1d3hBZHg4NUFvc1NHZ3dOaWtEcEdibC8yNFBjKzdrdHFZSzY0bGdmUGhxM2o1WW1QaFZFM2RTZVhseERSL1U4R1J3QkVKSGMzd3RtVVNIeVYvMDRpbGwzVnNEUVRCeEx0M0sxeENiL0pHY2FuV3p2VVdnd0U4UVIxU0h1YXkwZHgzcURNa3Z6VkdzSmhPZE84cGFmRFpVZWVwUktTSWVrdEQ2MHJUQUVXOVZTNjlXTFlMSFQxc29XNUlUV09rTTVybG9KaFo1U3BsNjFNMkE2V3BOZ2xtQU1nNG44WnpaM0Q0NUJaYnFsZ0dvdkR2STAzMFRaNCs1Tkl5V1YyTlF5ZDROTmtHRXgwYnhJWEE3QmhjS2g5V29PSDc3UEVNWkdTbFpNRm1lSEVpMXhSa2x5WldzUlE3bDREOG5KWk9kQUQzUU1raDU4RDNkZmZSM0t5UGNySmdiSlZqSU5NUHBnakdYdkhrNGpMWm15M1dWbGJnVXpnOWtrZ0FTeVFRMTdwNTI2c3BteGhqbDNxU1BFU0diV2tDVUpyZjE2UUtQNjU0bVcrSDJXWkJOL05mdTFpeUYrQWhwUEZmVzc5YnNOdVEwRDB5Mk8vNHI2NTd4TkRaZks5VkFkUG9EcXBqMm5POStjS0JXM2NsSTRieHlhYW5Ia1RRRG9RTU9wZ1d3Q0RzRTZHdTNOK01nbVd3NHZEOXk2KzZiNHNNc2txUHI1OW4rNUZKTVdhTjNvaE1TRnVEWDlOd3BQMURpbzdNUW00VUdZdDV4d3VaTHFOK3JDd1ZQdy8rTk5VeVJoeWZpRFBlUVZQKzRELys4eG5PQjcyVHRJd2hLSkFjQlBRQ0VqdVlRRHY2U0liTDV5d3pQYXdIN0xXdUhvSENxVUtoVkFuS25kREMxZ2JobUxRREx6ckdrSzVQRzc1M3J2QUtBaENCZ0pQN2xsZFMzcVk1YjlheDFwVlk3RGxMNytsMjdVZXd6RHYvSmN1WXVQNW4rVi9kOG9abU9ZWUNZbEtVaHBzTGUvT1U5WXZONVB0c3FYTWtia3VvdW5YbkJpRVdKU0J1ZFpYSmVTUzR6Y3hXZWpsZVNva3o0Ry9HTVlteFc0V0M2WExDUndodFRkOGNUeTVFNk14dk9nVXFKQ0YxQnE3Zm5BSXBBNVNTL09lU0VnWGxCM0FGK0RKQlAvL0xwRVFoTU12S3QraDRPK09ZSExGdzZZR2YvOHFyekxzdWxTd1poNmNxeVpOZ3dxQ3pzZ0cxZ0p2eVZyYlZDNFZuVmkvNldsdWVHamlNdk4wVS8weWxNYU5zd1hEb05EbTBjSTQ2bnlKdU1IS3pLY0daVDYyTHVUZFNzajhMK3MvMG9od3ZtajRSZWE5Q0VFWXc3T2pIQU5WRytyaUMwbGpoTWNxai9aYmRTTlovMmx1a2VhWEZUTzBNRXg1aDJjWUkwSndiNysyT20wVmNkaG1ya1VhRVFIZjlqWkFUcjlzTWFtNFlnM0t5eGxYRkpNUlZ6RGtzZ3RYVUtFTlhxempWVnJ3Ukw0emIrZmg4QklBVlFzYVIxaEhHd0ZjQTRIR1k4eWpoR0VFcW9FWTJVZFpJNDBBWXVtai9UOERxTlk0Ymo1cDN3b2VhNm94WGd1d2pSaDVVajRlajFvZTNRZlFUZTRaTW9yRDhZT2NtK2lwS1RFSVpwVGRLSkNmeUdZeXdpLzRCQ3QwbDA0TGY5eEYzLzJWTWNpWVJDN2hjTTZnL2FBMVBSYkc2OVFKbXNpOWQ5cUJkb0xobzVjdnRDZ0ZrSTNFS0x1YkwzKytsajNNVHZYOGgxQlJhRzZZR1FTaUdqeU1ZTXpicjUzY2RTbWY3OW02NDg2YzJSQ1dZQXN1UVEzUHRFYVlDR0FEeUd3cWdJRDNzc3ZORldBWnlLalBNZ2lyYWw5WEFRa01qbFNrWkVOM2ZMejFMK3ZvUlBIQXAvcVpMcUsrTWFtUjRmc0JQL0grOVFrTWtHanRscVdkcHp1UUc1Y1EySTZPd00wcU1TZXpOQTFydFphb2hiNjR0UnVmcFJaL3d4b0F4QVlOTUw3R1Erd2FWOHJkdnJKUjdwTGlCdzh0TGVWaUwxM0tkY0dIbEJZVXRubXpWM3Q4Q3RWZUc3YmlSSTE2NTQ3bGhaZHJPR0gyMVBnVTJ2TUl2bDk4K0tsVDhpaG5QdjliQnpyMlIwNjEwbWhjcVdMOHlLTUhCYUtoRVJZU3lHOUkrcU91YnFsYlRobVVSbjRiZ1RSSkVncFRCUG1IZ0ZxUW4wWGVWRXJBVUhKeUdFS2VJZW5ua2p4akZzMkxMVHBMSTAzYXNWN1JOZ3Z6WDVydy96ODZzMWc4UHhqdXRiOGg3eUhmMkM4aWI3WjVOaDllVDhIbEVaQm1EQVBDWUs4K2VMZlFzS3E0NE5IdXJWUWRIVVJra0JwWHppWXZmTEdUaUlBdmJuRzRESU1zVzVpWERjRll2aUlWZ092WWNVVlhqUG41SkhieUJTUnpIM3VTOXo5MlV2RzdZcHpuTGU1empZV0tDa0VNaUMwcWlJVmlJRXFCV0JCVFZIaGRpTlk2c0xlTXlnYmdpekxXa0xIaHROMFI0eDRXUkt0WUVHVGdXWUtURTI0ZGdONFRXM0E2NFZsc2dFendPc2FGemo2UXNjYmtERGxQTTRLdE1Id1NFdFRTa3ZhVHlJc1BtRUZLR0FHMm00a2pBTXhCSmI4NjRhMnJDK1JZWG1JNHAvMXhvWlhQY2N5ck41aGpncXpUOGYrOTgyMzdtL2dyZXI5bE02bXc2NkR2TnkrQThQT2wwUlJrOTRYYk94R2NnWGZ6SXB4L2xLN2N4QTFiMklHS1FLeTRsTHJOUFRGQnlVSG1GdVptNTRlbUFzckU0MVJZVlJZR1pHSndlZmpjakM3SVZnMi9Yeml2cjZka2xtbk9zR3ZEZU1qYTdGam1mT0RmV01Zd2dSVXdzWTlVWEhxSUNxd0IxVS9aSmFudDR2SHZRcitLajkxRjdTSlVScVQyZnpiKzNZUXdqMjlSWVMyMjNQbzlsWFg2Z0oxNDZTUjR4TzJua1Q4K0ltZHBMMnJIOXBFTWhJRklQalM3Vll6RkNwTHN4c2RGa2dIa3ozZklDVUdlTHpJTEZhVGJEaTBYMXB6L2xzMmpJWmJqem5WeEFaN2pIVU5COWx5YTZFQnd1M2svWElLeDNkWHhROW9KN3FsUU5OK3lBZThwU0tGZExyWlB3WHNvczkzUEp4SGpvL0N4ZUd3eW9reUNKRWdGK2w1d3JqMHRTVjRncU9WSTNrMm5NR0pRbmsyR2RYb2hneVZEeHpvakRFcUNNTmF0bkN0V3VLYm1GUEJjbVRtcnhhVXFBSStKdmdHQlJhMUZEWSswOSs1WUY5S0RQWG1JN0Jka2xUMklBdXlLOEJOTEhSMEFDMHVsRDdqYi9tMEtpZ1lia0F1bjRBMEF2ZzBJNUR4cGVoN1lXb3M1WmExTVZqc0FNVEJ5YTVlSVdnc1FxQ0pmTFdWV3VOV0VJbnRjRXhkRVFVZHJkamVBUWVtcStSNjhLNmRoYUFWeGdLVVNYODVZQjU4NEJEZjd1c01uZkUwb2pMeUE0K0Nyd0FSVU9nVllBd3FkQ3NaWXYxVW5xMU5tWTFCbzhPY3kwY1hQcGZwWDg0MDQ3bXd1Ym5melo5dFhKVGgvUmdYL2IvamZGUHpuSWEzR0YrYjRhWjAxWjFvd0VXcTlZRXZEQ2ZpUFM1aWRFQlBlRWlZcVN2QjhmOGJGUzlGS3dTWDFGd2FNSDhEK2RnR3pBOS81OXNiSjlSQzhWY2MvNDNRTzhSSHpBRHFZN0hOanMwZTVEN0w2KzBNZGNJZjBJYXN4ZVBNd2ZRMXBXbWZGb0pQb0RFOE9FRGIxTjY1TWN2dXF4bVNYRkQ5MFpHa3BEM3ZwTXE0RHNwZnlLdTBZTXE2TXczOGhFZzlZRkg3MmdZbWhWamFwM2RaWWpxS3pic0Q3bTY4TjlWWUhhMS95akdLRzhKVWNHcUZ0azFHellvQW9pekpEdHBNemRoWWVmdUg5QW5PdXk0SGJNTkpNSG50MkFuU2paU041R2NxSHBsa1RsbFMxaDlsV2hXbkVRSFVzWVpxY0xLNk8vK2FFSTAwMmRabWVZUHgrTjdvOEZmZDlMdDhUYUhvaUVUemsrbkEra0M0a0dFQWpsSkw1Z1ltRlZwTnlBdXgrSVVlckFCNkdtcmNRdDNmRExLeGZqdmkrUHZTMGpUSGhObkV6d2ZsL3BIQk9hcXBzQ1ZLWUJtaGlOYnpVekwvK3NEVHAyWVZIRDUrY2s2VWNvY08vZUtDbExkc3RXU0tIU1lKMGdZTmYrUDZONnIxOW0wTGloVnhCQVFsU0ZsWEhRVkJLY3NzYWh6VXRoU2RyVmxjTkxJdEs5NGZoRVZ6WTZmU3YzeGJaS1d6MTE2Ly9ST0hwdkNnLzdUbDYyM0RTQnN2T0wxZGpNQUpUREw0VytldHNFeEhEL2R2Sjh1dVZLZzJEWVpyZ2J2V21qUkVTNy8rRllHMHhDZmEvSjNqZWtoNDVGSkpaenYzbll0dWplSThPMitONzA2SW5Xekoza0JpM3lxR1R2UHA4b2ppeHMvdFRYUldCZnZud0NpUmtUbGcrd1RUbVJZN3R1aW9DOVd6SGh5dlhmRnhIWmdnWHJqenMrWE92RVFITTJEek1aVEtLWW1IcWpnMDhoTHE5TU4zTHh3dlRac0I0RGtLWGM5RnFmZHdHQlhkNDIrYnM3eXNQV1hSWUhQclBQZmV2czl6MXlSdTJ3SlZFRUljMzVLMVRlRWMySHJGYXBEZC9ucG5MUXJpdW01MC9iVC83bjd0cWNvSVUwVU54TEp1MW1jaGlyaTFPOGZ2aTU1d1VGc1RmVC9tVmdBR3ByOVNmVituOWdUNWhzT0hSNkRUaGgzenVvNjNVVitZdjg1V2VKK2tGZnVsaDg3SFBWeWtCLzRvaVBmVXR6VmZ4N2FVWXBvcVRKaC9ESndyMSt3QXV3blVncjk3ZklwVjZOd1poTG84RjV3SDBQWkJuUE4rU04yQmd5bklLRmwya011aGlLa01GS01VVVVQbUZleFNCZmpIUytQZHdXUDRQK0JtQUh6dmlXQmp2YXhWQWlkNFJxOUhMbkJwWm9uUWY0T3orQUQzVGZ6Vk00TWlpRjdQUG9Ddno0eENNOEVJcFhUSDd3NnlDTWNKWTFBOEMyOFZycW9UM0VxSUhWNE1GVG1xNnJxY3dxM0U0OXlHNEJzRFZsaXdFSTdwWWlpclEwd3dGY0t2RE9JMHFXT3RvZ09wTkF4c0drODZnT2wyQUdxOEMwaGxabGlhT0t2SVBnV0E5NHp0dkhYbkt1aVpRbEFvZzEzWEJobG9TaHJ2V0ZTQm8vaGJVaHF0V3FEbTIzNXIvdU5TR2hxbWwwektGZ240bWdzdjlhcDdEcVJhWnhSV2ZtaVhQa1N0b0luZm10SWl1b292YzY4K3JEYytSdTAzQXNjd1JpQnZFQUZsSm5nTmgxZUdHK2dTMzF6Y2t1S1JabkROcXpRRzdkdXg2N2JvcVlGNTcvaFR3blozU1JpalBZallrV29LenpuQlZoNkVDWGdhUGF1RXFFT2NrM2t4dTJCditXK1ZTVzdmbHVSQTh1MWo3cmZYYjZta1l5cjFidmRSV2dGRHI5NHIrS2d0M0tWWmZ0a3QydVNsQ0JEMVlIMkxkcWdNY0Q5czBvOXNycEhhTURMaDJKWlFOWlJIS2dETmxxN1BzUXIrSFZBUTVqeFpjakdGdHN3cXdTeTRhdmU5dE15OXNsNVBJR2wyTExMNW9RZHRBYlhCYktLVk9qbXBWNnhMWXdmZmZ1czF4RjFoNjNId3NjTVJqMk9OV3hFdEc2eDZjMXRJKzB6ZmhTODRYKytVaXA2dVpOUUJJSUhPT1VjTWNGOWN5VzliSjBYMHZNQ09CWTRHM0FvZTd6YVdWQUg1dzBjYU50NTZoZHFKNzFSQTBUemgvVXkwWncrVjc2dmwzcXgwbzZQVnJ6dmFtZ3U1MWRlbnAvZjBaR1gzRHFjQ3VoaEtFandIUis2bEtXOFZLVlk5REVlVlpscUUzUEVpOGxrdDF3R2F4Y0VHZFJobXNUZGJHeFZuK3JJWW1ZbjluUll3czJNN0M5ZHhqdW1XVDhhMkEvdmlFdjRWOWRuVzJ2WVgvdVJ2YWZvd0hGMTBzN0lKbGR0Tmd6dTRFOHFxOWgwUnJ0NnhNK0d2RjVzaXFNQ3lNRFd2eWUyalVZb0Y1VFVGQkhlbXI1VmVpYnY4UTFwZ0RMQWpnVFVRb3BqSHRtVVNxZXkvVjlqK0wvVCsxR3U2Y1Vxa21Pb2Q5UDQ0Ti9ITzFDcWlweE5wMjdIUm5FYXp5ejRPRktYU3JaNndHZWR0ZkYvbmovRVpOeXl0LzZaeHRwMndmSGZoNmRkNENEVmxZdDlEZjM2K0FLYlY2WVU2ak1lZTZwZ3R1TGJyNVMvTFBOeGtPaWdXdWE1ZzBlZG9MSzZtRHpPcDNPMTkwNWx5WFRLK2hYVGNuNUhlZXRBNmxDVnpXTU9ueXROK3RaQ3JOUkZLeW5WMVMwdDI3eVVrL29qZHAyWTZBYU83RkFJUTlmVjM2Nks3MXQzK2xMNnE4SmY5RW5EYU5XRHlnQnJneklVRGVWemZRVzFUY0ZYc0htRmFkZFNzTjA4akV4bm9qZEZvQkxtS2ZuSk1xLzByQllPM216Yjl6Q2s3ak4xSlZKQWhJVm5vcEVXN3IxYXlVdTMybFJ1NlM0Z2NQTGlubFlpOWR3bldCdktpSXEzZlJPL01xeklZSklZMUNFMmtjaE5YQkJ6OHZNNi93T0hzTDJTb2hsRkJRRWdPMWZ6Si9ZNU5IeEZsYVJjUW1rZDZRZ1B5R1VNRU5XbGhOZXE1NFRpendTck5MWEhYbnEyOXVJSlJaVjVjSlpVSE5DaWd6Qk9rL05kVjJQQ3lOci9ZbnY1RlBra1QzMGNuSnhlN3RBZ0dqc3NnOUtla2FEQ1JOR21uNUc5UmhhVzhQeWFEc2JFZ0doUnRhWXhsZ1pWZ0gvSk5mM1JiOTRUZHVlQlY1QjBvRVlpWlV3cmdkK1lkaDB1K1BTRUUrQnFBbDRJN29sZmY0OTJpRVFIWGJzTjF2MHZzMGVKc3I4ZDZ4eEhzSk9QSjNaaG1lbktjdUw3SW9LOHJxTE5SbDZud1NyanlUUUp6eGR4NVpsUEFLbDZISVdQUjNSazVPeGtjM3FjekF2Z0x2Z1VqaWtQV1Vwby93VXRobnZlVTZYV2tUbEtlZjFYRE90VHhyYUdoczQ4Wk82Q3o5Y1lwK3lKKytvL2JtQVFyVWVkSldNblNCRDg0bng1RW41Yy9KT05LTS9JM0xYWWFVUDVkUHZveU1NeDZvYUk5THlmQk40SzVnV0dRWUpVOHFKcTJudlZHODJlM2x6aktzU1ZpWWRMY0lVc2FUTWwxNjZhY0s3WSs0bkVUdCsxNE1ueTdrakJUNWEva3NETjdBaGdOWnRxak1ZUE94d0NIMmRCci8wVHRBYlJIc3E4T2g0MXhSVWxnUkdpRkpqa0JCUU5KdnBERml1OVRBNnVQcGJaK2I1OXFIelVaSUkwYUE2Y1NCNExRWVlIYUp4Zzd6QjA0NHVDaHJpNnFFSjA3YzJWSWpicTNUWW1yZkpzcm5WWVdKRXhQRHd0YUdlUGE0ZzU0ZUQ2alUxcllFN0tMUnB4VTUvU3VXUTQzb2NSdThMRVNzM21XZlZlNTlMY0NXUHJFQ3dPcHRyZDZwcUl3dmN4amtEMTZQWlFwcWp0NTg3M1VmNEp5TzFXVkVPN2Z0RjRwa2N3eU9LaXdlREUrZHg0NzlaV0Y2UmdhRjU4R25NTU10dlhaUlVBOW1VNHF4REFOelh1Y3dmLytOQjN2T0VMaGxaUTFyM1RyZnFqQU1qQW1yOG4xb3FKRzNNblZXNWpiQ004VXo0YmJkbk5yc0xRYXMxMUhCTTRjWmRBSkRjczdNUHJ2WGJDb2hFOGdJTUZsYTFtM0pNalBLYW1YYzFyZXlobkZnTjJ6eW5rUnVZZjBieWhPbUs4MnhNTklucVdXZVlsSEhZV1l0OXhTamxqbVVBaDQ2akNNLzRIRGM0UFREeTlXeFRNd1AwQS9JeklXTUcxd3ROSVRVb2dwYm1mUUc4Z3doSW1ZVTMwZ1IrVTF0TmZDR0hOK2ZSZUxMRCtuc0FQTWlGUkxJWEV1aytPaTNmeVdMRWRab3pNUmlFc2FNdEFLaE1hYXR5UnVobWhuSW5kUWVCcDBnbGJNQkFPL0RNdjRVb1hqYjMvY3QrZHZ4OFpNd0ZSdjdKd1lxWnRJNkFBaEZDZEVyOVN2NWgvV0grL3ZyTVR0Ry8vMHRmSmRoVjM5ZlBiSng1cGhJQXBwSmRCbUQ0QUorcVpPM3FiRnYrL3ZmcEh4MWVKNDRGUnZ6eGIyTnNyTnZpbmRpVkprQlhEeUN2WC9XazFLR04vMFVLMkpseG5HemNUc1FRZHZDdUU0djVyZGp4K0VvV2NMemFJWFdqUk1QZUpKSlNQTFNTamtSbUwwUTBpTE9hMjQ0bXNlbG0yTzV6Wk9YQWYrV2xJcHBzRXRpa3h0bktRUHhRbC9BdFBtRDQ5MWplQnlPYktjRm05S0JNNUZXVFA4SHozS3NDYWtlQkJBTVFKSUdjN2IrM2ZHSTQrL2ZZV2ZGZjVVMTNyMUx5NmpsUHNOcXIzL2Z5bTYxSDhGaTFqTjk3WVVoTU9kcEJ3RjJHOFJmT0dQWEppMXUwTW9iYXBGOGY1MTJ5SHRITEpZYWdyTm5MdFRDNDhiYTc2OXIyZHJvV3lzWVIyc0JGMWxnNHZRczMwRlB2NEppNXFURkxYWHNPdlZKU2ZId0JmQzZBUzlMbE1uNXdGWVhpWTdnNVZ4VmdQT3JrblUzUzNYdE9aZTU0OFRTa2YxZFRwUGMrRXN6K290S2RjdDR5R0Q5OXBUck5QbUdoU05yUjNmQVUzclZ0WWE3VFBDMXpsV211dDRvbk5MZm5hN2RieHhuT2sycURxZlFKRmVLbWxuTjhSdGNDUzNsc0kzVHBQZmtUcU4yL2VVcHJyQXg3M3JtaXhCMlBjSHJGbmFEdGZDa3ZuWG45anEyZHNmMlZ1NGtDcmh1YWtIdE01UVlFQXc0Yk13REF0dDdpdUhhN1R1MWJQMjJuUzVVYTF0MTYzV3RYT0NmbjdYK2pkUTZaR3Zmak9uWjJ1MW1HdURkeUtmUGZOZUZpV0dzZUYzRXlSVTNkak9lT0FHNnlIOTVmaUdOamhNcm1UcWVQRW51NEZzQStnUUorR1U0REdFUUpqRDVEQjRDeE90czAwRWlCSkpwb1AyMTZGSmpKR1hscW9ETkVJVEhJZzZSK1Z3RVNpYU55Y2NJRjU5aTU1UEkxcitXcFF1SUpGYW1FeWY0TU5lbEhGdWRXb0hYZXo1Y3QvK2FYbXAvVlhWQUZyamNKV3QrMVdGOG1RZWhvR3B2cHNOWVZ4WmZ0dHZVNFBLcXJzZDFVTFAvSU9uZlFWL3dLbXljOTZTUWxIWndpL3VhYk1PRTEyU3RmajVpSG5NaGxZNit3UUk4azU2d3V4QmluM2lJMkNPNm1QYU0zZG9KVkZ0bENQNlhwUDhqQ0tTWEdMWTFSTkNldVJwYXhnWVZCa1puQmFaNkpXRi9kdko5aThUR3ZlVm4vVnNBV1RReEQvcDIvMTFqa2c3N0NXYkhRUVRudXRoQ2Q5d25xNHZ0NjduUHJDd016a0N3TC9YV3NWa0RaOVcrVEZCSS9KZll5VzRRem16T3VFWlp5MUNBZzBEQjJPdWtwNXZSaFMvOVJhaWxoUHpMN1ZBQy9qRGZpVXRRRmpvbnlxNmxoanEzRjZVVXRUc0VWSDVYR2VDZ2VVd2U3YkNjQytWazR5M2ZocjQxdnJ4SFFzT2ExMStUNWJtYXZqYjl6VGNYR3BVTmdIb1ZnbnhLYjgwUjJmSTVNNEhHVHFQZFVWbVh5MEwvYUViN0xnTFRQSnYyTkxPMWVsTzZsV3BRYjhFaTBmWkpKNll5UWpaU05GYzlZODhzNFBYM1IxdXdBRndBdFpiT2l2cTdOVndlTnBITGdQV3JxTDl0bWNrb3l0dXFaMitjNFdGWHl2bFVwVFpySDVwKzhWNzFlV09YdE5pUUt5V0ZRL1U0RWh1MElnYUhNeXl0c2RwblgxQ3QzYk9HU3NKTnpUYXV1dmhRNGFwMWoxeEZFcTdCT0hHblgybXM0d2tWR1RqTnZoWTRWNHowZUVSYnJJeGFLa2VwY0hNZVJZNVNvenBnTmJtbGZSczkxNFlhVUpNNjdOYTY0S3lYZEQyMTJMV2owVnlnY1Z3djI2U1ZmQkduclZROWc5cDM2K24vTXdZcjFtajFZRWZjQmJhQ0tndGFLc2hkSk9PYWxLc09KaFl2azY4U2F1UTg3aGxURkhGOXkyNktac2x4V3R2WVcxdHhTdHVxQzJTTWtybXFEcDI1eVZuUUszdWdVWERsd1NRYlNvbzYyQzMxVjdpelR2WS9hLzhHK1hhT2ZhZGc5SG01S0d5U3VDbmxscXFsZ1NKN3psbU9LUCtaclBqeXYwcFlZcXd1YWpEYmxTMTZRTm5uMlFpalNWVXJQS0RaTFl5OVhnVUYxSkFhZWoxNnBBZ29xanhxdEd0a04xeXBoeFNjOVFLNUJPUlNlNWlLRXdjcXZVcWpjWVY1YVo0UDlyVk9vT3A1QzJmV0lYZkVkcWpXVkpCRzJkcDFKYWZsWjFJQlpZL1RVd1lMZzBWbHZWc2VhZ0dndmxoelJCL09Cb0FxdkpsSTJWazlHU2NGOUNQSkt3cS9GZDJ6S0RaQyt6NVhYRzAvdVVnTVlVTmxLZHA2VU10SWdYV0RYTG1Ec1VDNEwxYXhSK3hMQzdvOWV3WnliTmw1M0dESEttb1J3TVc2Vzl5L1RLblJsZm5XTGszUjQxdVhCbzJ1TXZhb0RXT3VlWHRub3lxbkpmVGViSW40QzJFUmhZMk9UbTc1bVNYbm9qaGdlSTZja25KWWQ0a2RHUGMwVzNQTW1hWkdCVDIzSG1ZRkxiRnl5L2YrYWJLOEtEREN5RE5aTWt0a3pUSW15bEQwaDdUeDN4R2VvakpyeE9KY1JCVlpNNnBoNWhpcDJvbWZUdG9JajhRSmRJNnl1UjVnbHdvczkrRGg1ODZhVVU4d0Y3SWtOVW1QdUwwZG9YSUZ4VmhrajlWS3JMcmpjbGJwdVNCN3VKMmtONWdzS3hHNWlrekZyTDJEVERrbHA0YWppUnBlTUhQVk9XNEp3T0d6clVpYWVWRHV2cVBrWWkxeGcxVzVOMWp5YkFBcWVoUjVCWVZOMW5JMlRtZlJwZDNvZ0hyQ1orNXh3NEdseUNFVUhuU1NxWGN3VGd0a2FjZFJxS2lTSHVpRlZSSzBmWGZwbGwwN2JQVGNVVVRMc1MxMldoNWhzbE01elJLdWxTcnV0UFh6RFFJemxqRUtVVVJ4TjBHdjlaODdCTStRVXhwR1VZRGxUSUMxTWZKY3lMVFg3R1h4eEUzWUpjMnpKeDlkVGdXd1BXOHhlbGN2RkF2TXprYy9zVmVjeVpCS05DQkZoMlpiQzdBN1QyNzA1SVhqRkFBNzROQjlaeU1wZ1dnUlNrcDNKTkM2eUlZcjQ4RVppWXJhYXRRenBxV2lQaXpsQ3FBTjRLU1Jja1JIc09pZFlYb1gvWFVsYWpyMlZIQ2tnUjVFTGFDY1c2OU5Sd28xNTBjbmwwcUZoY1pxdVRwUkpGaGlHb2pTdGtweWxPbmdjVld1cGl1VkFZTHNxUm8xUWpRN1hmWG1zcXpmWU9idHEzWkRFWVZWWksrVzB6TUJqbUpycVNJc0cvRE1GZThzUGdlejVlRDV2K3p1SVRTNXkxQm1WVDF6UlhiVnVCUGtOQ0lLKzB1OEJIdDAxbm5CZGpqT25EcDJiUGZLY2NHZ3gvcUs5REdhY2tpNEI0OGVKd0hZcHZ3emVWRW4wcUgrcDNhMXJkRUtZS3RPbmcyS3NvcUc5ZkxSd29xR3JUdE9rYWFqWnhvc2NxYndwVnIzbjJOUWdKM3B5Uzhpc2hkZWwzYjBYZmYwUmVPZmZvMzIxYkJMY2d1TWs1ZWYwWGlQTlV2RnZUWUxxcWVWS1lJeVU4U0ZzT1BVY2Y3Ynp0Y3JxM2M2YjFxcGM0bDNkRnFTV1EvTzdlRUxzSjh0VTFJVE41N2JZOXQyTyswNVl3bXpJNlBEbi8zUWlOeDhVRE9BL1JpUjBDTFp4bHVpMlhYMTBEQXlqYU4vVURiVXRLby9tbHFqcmRXWDMxWld0ek4wOGRLNHRpOE1xQjFOTzFicnNVeEp1Y1huOW8wdVNyVCtLTXFoN1ZuZStyYWJRT051eUY4NkZLT3kxYVZkRWUvdmsxYStGQXBOUjdRRFBwRWRjckFYMFpOeUVSSzdTdmdCVUVrdkkwWWxrWlQvRnI3a2x6dTJqSkJqeFpMYkE0ZUZvdlFkaW5vQk5kcDdhcktNRHIya3h5THRYcTdzTWYraWRjblJjRTNya3BhdC8yMlBMTnBsRlkrVHBsTzYrbjYxNVBTMWdlK1ZkWFB1dk1NUGw0d0Q0TmVPdzh6eTNsYVk1aDVRQURKNUwxck93RHNDN1BmMS9VeXZCeVlDLzc3RXV5UnlUK0JjcUZhRllLV09QUGNFenJXSTQ3OHpML3R5QUNZQ0hoWGpBQmdBdDVzMTREM3VHWDVVYy81Um5zbjRnUWtiOGhRY0dSQ0E1a2dnaEdiU0pSbDA1QTVJaUR4eUJTRkVIYmxCb0s1UC9RQlNrd0VEQkJjQmVERmZPSUlBNS9BUkZCZ29QNElCNTdxRUo1OGU0WUhDcHlOODRBNTJaQmVnd0h2NkxEV1VIbmMrYUFHcm1sbTFKa1U4OThrcW4vMEdyaWRkNjNMMnhpK28zSTZwM1h4QmUrb2FJdFJsN01LRDI0dWd3cHFDdWhMK2FFQ1VWSzZwQXlOckw1TFBOZ3ZVUTMrR3RVbmhaQVUvVmdGTkFFdHB6TW4zYnhsSmhCY1dxODV6L3dZNFBhTFZNVFh0Ny84RlZLejk2SldkdGUwVTByV0lVOVhjbGtvMmNQWkVLaUFGTVRNSmxDdkpCaFNNSjBvZTNxNERETEhtNXloa1p6WlNJNXhXck5ldmh2MXZZZWNiY2pqL3FFd0U3Uit4aC9LUDJQK2FIWmp1andNWUdFVXhuai9EVVB4cGxjbjlPR2o5N000WCtQeGd1SUMvdjhmQjRBZEQ5SGp2QjN4aDNITjU4ODdYeDBIV1IvVDlQUi9QNWM4L0xaOGZGY2p4V3Awano1NHJFS09NUVhTR1JvTXUwWDhVdUJVb0dwM25meXpFb3VhUjFiUDNBQ0pNS09QaW10N0ZxSnB1bUphZFNLYlNtZXlacng4bmhXS3BYS25XNm8xbXE5M3A5dnFENFdnOG1jN21pK1ZxN2JpZUg0VFJHekN2Y0F5QUVJeWdHRTZRRk0yd0hDK0lrcXlvbW02WWx1MjRoMzMrcXc3Q0tFN1NMQy9LcW03YXJoL0dhVjdXYlQvTzYzN2U3d2NRWVVKVlRUZE15M1pjencvQ0tFN1NMQy9LcW03YXJoL0dhVjdXYlQvTzYzN2VEOFNpNXBIVkI0Q1ZqdVlpNnZoNWEwV2wxbWgxOU9qcTFhZWYvaVJGTXdLaFNDeVJ5bGk1UXFsU2E3UTZ2WVdsd2NyYXh0Yk8zc0c1bzVNTGwvTU05RlptcWNncGRTRVJDMC9pYlYzT083NHRuc3FFL0NDTUs1REI2U25rRmRoeXBmcUhjR3BkeXIwWWgyN3dyOWVmOHFkQW5qY3BydEJQQWU0anZ3VFBjcVdkSDlFV25pM3crSkV1L1BLNDF2aDB3dk5ybmd1QlBCMDlpNnh5QWE3d2d2bmdQaFB6REpLdHBpczFVejhMM0JGWDhoaGloRkdWd1ZVTGxXUjFZMVE4dnJZU1RTa0pBNTJiNC8rL21JUnRHRTBQYW5kZW1zcTNZc2tLNDZncFVNV09zWGpnY1hBZHBMMVVYYjFpN1dQLzdNYkdNNmNMb2ZjRmpiVVp1UmU5RlBMOFUxRHhTTldWTmtkUmNsU1BzVGdxQWZoS29GM1JZQm5yNndJMnFqb1k2NWs3c2xyRXVZaUR3TW9WbWozU2VHeVg4RGs1V05BQjI5VEJhVGV5S0FkdmxneHBPVnRoSEhLbGI0eHgzdDVleXR3bExoTjVQSHRpL0FpcmdyVVJVL0tVOGhrOStQTitGNUhGVWJDUEFZOXNJWDc1L1F0SXMrZ3g0OXU2ZmJHWXBBY3pzR0lFUjUxcUJtT21pUXhrQXFaUm1jRDM4N1RnTEdJSitmbVpwdnpSK1hybEZWT0NHU3VaelhpSEVQeUJORFVSVUlMUG9SeERGenZKVXNLTFVwZ3ExeFpqSysrSXE2SU5ZQmJNV0JzUjZ4WElrTWhiS2ZRZXJQaERVeTUydzlCSm1FVVZCQUVCQmVrQzlnZVpkZFVjSVRrRGpGM2VlRW1QZlY0TFFqczZsQXNOWDhSR1JUWStUZVNKSFZQcDdPbVFvenhnVE1MdDA0ZTlTRW92QW83dmhVdVR4blBHbEN1SzlwS3NLY1FnRnhjWUlRNGxKdFZTaCtpVTkyaHlZSFFONUdPUFdjeUFsb3A5KzNVdFRIa2pXTitncFdUa2huSHI5WXlXbTAwcFNFS3RiM3FyTWNRZG5NZ25EUHo5ei8reU83U2V4emlTZHR4SlpOVElCQWFyZnlYeGplSjdqVlNQc2E3RkIxbHFtNUxoaFVVN3JuSWhqOEVKWTJkZHRnTDVRV2ZKSjdSTW1waGt5V1J5WXZWVU81QzFvRmNCSFdqNG9yU2srT1MvL3hteFJNcDZTZHFiSG5HS21GeVc2UWtoR3RmNlF3WTRac3BFekoxK3lneUJRWU5JNHNUc0lxSW5zQVpHT2xVblpSUDNGem00TDBqTXJWYnJlemRBNjl3RUUrWnRpTjBwWVc0NndJR29XMmJzRC96VUVrUVpIM3l0a0J5OWlOcDF1dEVvQ0NtTko1cFIxOGFQN1paN0VNL0R1andPYTUrSTlBczIwdG94eGFFQnhNS21KZ2RVTllxWGR4YmdVTm9qbnFwbXNua05pcGRDN1dSWkNqeC9hMmZrb3hZNUtSZWUvUTJITDF5cmJCTm5vUVU2RkNBUUlXNXlOTTFDTGw2QnNRT0JaQURkMzQ0b0d6RHhNbjJlYnpHenFGK3RDandiVjZvWlNkUVRSbDV6QVQrWWNoakhQMWJEaFU5SEF4Y3hSTk9COG81THlvWk5FRTlSTTJkbVBON3pIbWx0THRyRGhWN0NjMzBZRCtwdnEyUm9LY0I2aksyTFY4NWtOK0VLRGNTYmFDZjRJVi9zOG1yQmNLaGZnSEpjR2ZXM3J5eVgwbGg0dnBTZTJVRE4ybm0wdXArNmY5LzJaNHV1K3VnZVBCMzhwbm1tTmltblBaanpQZUY5Q3hId2htZVI4YmJUNEY1cFpLUDhEYnI5cEU4Z3pWWGdRVHhxbG1jQ09LY2M5RzJqa0ZVWFVmUHdqbU1qVWNUd1ZBL2l4b2dzY0wrSXM1UlU1UWM3ZHZDUGtqOGFLdzVsMEdVZ0FPSGh1NEMwTTRJRXdUOVNlaHpHMUZ2eFF3YXE4cTJQcVlKYS9VZEcxQUMxM3czbDNKRUxqZjJkOUdEcXo2eFJONGxxY1RVd1VDWnJzSlhEQUpkemFKWmd0NDdHL21JdkNRRVE4RXNpelM1am9LaGhibUxVd3NwbGNKUm1kVHVoUjBYV1FXUXAzU1FHbHFJOGMrem5uZ0hrSENYK2lDYVdXc0RaOHNKWnRVQk1iQWo5bTllcExVWmw3ZW1HVWNNWGZJR011Nnl0WXJPdHVDUTBnbGt3YTZOa3dHS3FpSlNya0lqVlE1YjE0bUZXR3NwZ2FrTFRBYTZMWTF6KzNKaTQ3aktteFVnT2tUanZKRUhuOGQ3S25SdG5xQVExQ1VEbFZObVVidjdFdlE4bDdWclkxa1l4ajAxcEl4YWpoMVpTbWh4N3Fkd3lrY2ZhWjhWUnYySnNJSWg1UkdlMmFMK0c4Q3FDcjc2WXBlbnYyM1hzQm9MV0s5T044cmJISnB5bWNKOUtROHJnVHA5Z2xaS2ExNUxhUld4cS96RXhJZWNqdnd0RVZCU2xnYU05U3RSNm9BMFRJY1pURHJEZEpmNGx2RW1KRjdLYzNNbmJnOTRob2lIZ3k3aHU3MGtTd0dIRDE0aURPQi9rQUZOVVRSbUl0aWM3ZjVOWVQ2VFZpaDF2WkxBU0JLODJITjdCbElUeWpDbHBiT0FEQyt6TkhxZmNZaVhPNnlydUhxK2NoWlhlSWVtZ0dBYWc5dnlnRXB3SUNMNWI5ZUlJOFFBNUFoUzdHNEJaZS8xa1pKWFNXMGpmTDd0d1hOclM5RW93ci9NRjhiMFZQZ2xLTkFmWTdyNU43VnBLVUQ0NWdrQ3V5a25FUDQwbHVjaWo2YmNYc0FPTTMxT2Nac2NxNUlhRFNwQTJjeTEzQnFKMlJTdDZnTlZleGJEL2JYa0xKNGxKTmFzU1AvSmV5bGZ3Tkx0OHBCTi9OSHFIS1JzMTR0bXBubEx1bysrcEU2cnlSYnVqd2hoaDExWDZJd0sydSs5WXdZL3lFTUs0WGJqUjRMQ0o0RjBmRVdkU0JuVDRPN0hqRWhmQnZETW9tdjdDMGJnTWxKYnpneDJBSXgvbEE0ajErd0Q5NE5IS01DclMxbDdMQzFoOTNTcmhYUit0Z2U2eE1GRDZQUWorR0czMWFkUHBpRUFocXVjRUtDLzlRRDluSE8zZ3BIclZZUjlJM3JDUkVLRHVoMXBhUE5BTENZaCtoZ0xkMGQ0S0JNT1RheUtlQnprQzZKaEN5Y0JwR0loWHhSTG4va29aU2lKYkdlOGdjdnpHbjBvUFV6cHh3U0NINlRhWUJPQlhMRElac1RlTGd0ZlozQmxyYmZUTTU5aFhKQ2pRV2FYUFJpeExLRjN5ZkVFczVhVllRSnEwWnBvUjcyMnBCUWFHZ1hiTXY0NlhSRncwRkFwUVMzTy9aa1V1eVhkTnR2VHBpZjBoemdHMkJqSUxXalFwc0ZuWDI4dzBYellDTnVvSEhPNVpOTU1sYVNHdUxNVWxScUtOa1BrMmxQK1NqSTlNOHErUUkzQ2FNTXJSRTQ2Nm85eko0SlJkMmNOV0NVOVAyVlRuRXZuUXRJQTFrSXcrb0sxS1BTdGhNVzVid1VtNWhwZGNxZVVqUEtyN1JiNnh5bE83azdhaUNWeVIxbm15c2hSZ2xVVVA0bmxZRm1sNHNaWGVjZWlqcTUzMkhqdU1sVkhNbGM4NmFXZE9qZEVwNnBhNmtwRkFWYXRTWHhWZ3JLL2xwMDUwS1Y1OHFzYnB0Tk9oRFBDbC9Qck9mZjhlMTVGUldQbEZ1dWlBUHNDU0R6azRMWVBIeU1EVGxhMlQyaU9oVU9KMS9VWktvZ1ZuNUFtc0QwWW9OY3Ywb1JTVXl3T2VBQ0Z6U2VrOS9DbUdkOEFFSVVuZ2xFQThYd24yZXhGMEkranY0WWEyQXZ6alZ3ZTRNbUhCd08vekVQQm5nRmVReFRQS0tyS012c3JMOXppSk1hNTZhUWp4SlAxYnd5Q1FvOG9yZXlKYmdxWWppRGxiN3JGSXBZRnpQWEh2QUxQZnNVRS94SkREeWlXd29ERUZDM0REY0ZYeHNWQ1JMdERjMndaUmNpU0NIQkYzdG9od3ZFUEUwaU1MZXQ1NldDbUFPTHpCUXpudzNodmtpYmVqS0lSL040a2xoWFZDZjVkd2JIeVRvK0xBNndFTHNuZEQ5TUVXRDFXQjl6d0lVT3FRYTVrU0Z3STI5ajNGZ0FacDhyWGh1WlBZRldybGhqNGhtK21MTy80RHNCVU9VVmJjRlpTa0RuUU5Kb2NNeitQVFVRZGZRMWVDc3BMeVExM0hJTXptVCtRTmV0QlVzL0hRNnloc1VqVGZHRjNWNWpmS3Nsb3F6ZTlscjBmN0FkNG8wR0dpekVBU3R4YVU1aGZPa1E0UFZkRjJtNklzS3AxWFZBZlZCL0cvSi8yU3Zsa2ZmQTl2akpxZ1JuaWkyVlN2ZTFLWUZLM3pwc2loTWFxeWNhb3F4cWw5UDBJeUxSTUFBQT09JykgZm9ybWF0KCd3b2ZmMicpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZm9udEZhbWlseVwiOiBcInVuaWljb25zXCIsXG4gICAgICBcImZvbnRXZWlnaHRcIjogXCJub3JtYWxcIixcbiAgICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgICBcInNyY1wiOiBcInVybCgnfkAvY29tbW9uL3VuaS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJylcIlxuICAgIH1cbiAgXSxcbiAgXCJpY29uZm9udFwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiXFxcImljb25mb250XFxcIlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNlwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nXCI6IFwiYW50aWFsaWFzZWRcIixcbiAgICBcIk1vek9zeEZvbnRTbW9vdGhpbmdcIjogXCJncmF5c2NhbGVcIlxuICB9LFxuICBcImljb25iYWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmxlc3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjJcXFwiXCJcbiAgfSxcbiAgXCJpY29ubW9yZXVuZm9sZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmNFxcXCJcIlxuICB9LFxuICBcImljb25tb3JlMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmNVxcXCJcIlxuICB9LFxuICBcImljb25rZWZ1ZmVueGllcm1haWtlZnVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4OGRcXFwiXCJcbiAgfSxcbiAgXCJpY29ua2VmdWVyamlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjZcXFwiXCJcbiAgfSxcbiAgXCJpY29ua2VmdTJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjdcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ291d3VjaGUyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmViXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmdvdXd1Y2hlNlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmMFxcXCJcIlxuICB9LFxuICBcImljb25xdW5mZW5neW91aHVpcXVhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjY1xcXCJcIlxuICB9LFxuICBcImljb25xdW5mZW5nenVqaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmZFxcXCJcIlxuICB9LFxuICBcImljb25odW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzhcXFwiXCJcbiAgfSxcbiAgXCJpY29uZGluZ2RhbjFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2VcXFwiXCJcbiAgfSxcbiAgXCJpY29ueW91aHVpcXVhbi14dWFuemhvbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2ZcXFwiXCJcbiAgfSxcbiAgXCJpY29udHViaWFvemhpenVvbW9iYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDBcXFwiXCJcbiAgfSxcbiAgXCJpY29uZmxhZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhNlxcXCJcIlxuICB9LFxuICBcImljb25ndWFuZ2dhb3RvbmdqaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTk1NFxcXCJcIlxuICB9LFxuICBcImljb254aWFkYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDFcXFwiXCJcbiAgfSxcbiAgXCJpY29ubGlqaXhpYWRhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkMlxcXCJcIlxuICB9LFxuICBcImljb25rZWZ1MVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkY1xcXCJcIlxuICB9LFxuICBcImljb256aGlkaW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnR1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ291d3VjaGUxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnlvdWh1aXF1YW4tc291c3VvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbkhPVC1jb3B5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODhhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbndlaXhpbnpoaWZ1M1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlMlxcXCJcIlxuICB9LFxuICBcImljb25zYW9tYTExXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmU2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmxvYWRpbmcxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODkxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmdvdXd1Y2hleFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlN1xcXCJcIlxuICB9LFxuICBcImljb25nb3V3dWNoZXR1Ymlhb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlOFxcXCJcIlxuICB9LFxuICBcImljb25yZW1lblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZThjOVxcXCJcIlxuICB9LFxuICBcImljb25nb3V3dWNoZTRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ291d3VjaGU1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnlvdWh1aXF1YW5feHVhbnpob25nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNoZXhpYW8xXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmFhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmN1b3d1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmFiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnpoZW5ncXVlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmFkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnN1b2RpbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YWVcXFwiXCJcbiAgfSxcbiAgXCJpY29ua2Fpc2hpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmIxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbndvZGUxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmIzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnRpYW5qaWFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ3VhbnpodTFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uemh1eWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uamluZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiZVxcXCJcIlxuICB9LFxuICBcImljb255aXdlblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjMVxcXCJcIlxuICB9LFxuICBcImljb256YW50aW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmM0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnNhb21hMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjNlxcXCJcIlxuICB9LFxuICBcImljb25mZW5sZWkxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmM3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fc2hha2VoYW5kc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJjN1xcXCJcIlxuICB9LFxuICBcImljb25pY29uX3ZpZGVvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmM4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fdGFza19kb25lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmM5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fc3luZXJneVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJjYVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3dvcmtmaWxlX2xpbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViY2JcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9hZGRyZXNzbGlzdF9maWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViY2NcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9hZGRyZXNzYm9va19maWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViY2RcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9jYWxlbmRhcl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmNlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fZGVsZXRlX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViY2ZcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9kb2NfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkMFxcXCJcIlxuICB9LFxuICBcImljb25pY29uX2NhbWVyYV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmQxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fY2VydGlmaWNhdGlvbl9mXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmQyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fbGlrZWdvb2RfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkM1xcXCJcIlxuICB9LFxuICBcImljb25pY29uX2dpZnRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkNFxcXCJcIlxuICB9LFxuICBcImljb25pY29uX21lc3NhZ2VfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkNVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX25ld2FwcGxpY2F0aW9uX1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkNlxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3Blb3BsZV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmQ3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fcGhvdG9fZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkOFxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3JvdW5kcmVkdWNlX2ZpbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkOVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3JlZHBhY2tldF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmRhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fcmVwbGllc2xpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViZGJcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9yb3VuZGFkZF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmRjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fc3R1ZHlfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkZFxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3NldHRpbmdfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkZVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3NoYWtlaGFuZHNfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJkZlxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3dvcmtfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJlMFxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3RyYXNoY2FuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmUxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fcm91bmRjbG9zZV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmUyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjhmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fYWRkbWVzc2FnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWI5MFxcXCJcIlxuICB9LFxuICBcImljb25pY29uX2FkZHJlc3NsaXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjkxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fYWZmaWxpYXRpb25zX2xpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjkyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fYWRkcGVyc29uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjkzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fYm9zc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWI5NFxcXCJcIlxuICB9LFxuICBcImljb25pY29uX2FkZHJlc3Nib29rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjk1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fY2FsZW5kYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViOTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9hdHRlc3RhdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWI5N1xcXCJcIlxuICB9LFxuICBcImljb25pY29uX2NhbWVyYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWI5OFxcXCJcIlxuICB9LFxuICBcImljb25pY29uX2NlcnRpZmljYXRlX2ZpbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWI5OVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX2NvaW5wdXJzZV9saW5lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjlhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fY29sbGVjdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWI5YlxcXCJcIlxuICB9LFxuICBcImljb25pY29uX2NvbXBpbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViOWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9kZXRhaWxzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYjlkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fY29tbXVuaXR5X2xpbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViOWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9kaXNjb3ZlcnlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViOWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9kZWxldGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9kaXNwb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmExXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fZG9jXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmEyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fZ2lmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJhM1xcXCJcIlxuICB9LFxuICBcImljb25pY29uX2ZpbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9HUFNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9pbV9tb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmE2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25faG9yblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJhN1xcXCJcIlxuICB9LFxuICBcImljb25pY29uX2ltX2ZhY2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYThcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9pbnZpdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9saWtlZ29vZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJhYVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX2luZGV4X2xpbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9saW5rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmFjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fbW9iaWxlcGhvbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9kbWFpbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJhZVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX21lc3NhZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9tb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmIwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fbm90aWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmIxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fcGhvdG9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9tZWRhbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJiM1xcXCJcIlxuICB9LFxuICBcImljb25pY29uX3JvdW5kY2xvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYjRcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9yb3VuZHJlZHVjZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJiNVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX1FSY29kZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJiNlxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3JvdW5kYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmI3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fcmVmcmVzaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJiOFxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3NlYXJjaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJiOVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3NjYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9zZWNyZXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYmJcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9zaGFyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJiY1xcXCJcIlxuICB9LFxuICBcImljb25pY29uX3Rhc2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl90aHJlZWxpbmVfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZWJiZVxcXCJcIlxuICB9LFxuICBcImljb25pY29uX3N0dWR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmJmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fd2VjaGF0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmMwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fc3BvcnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYzFcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl93b3JrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmMyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fd29ya21vcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYzNcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl9zYWZldHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGViYzRcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbl93b3Jrc2V0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmM1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmljb25fc2hpZWxkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlYmM2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmppYWhhb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyYlxcXCJcIlxuICB9LFxuICBcImljb25qaWFoYW8xXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmppYWhhbzJmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmppYW5oYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmVcXFwiXCJcbiAgfSxcbiAgXCJpY29udGlzaGlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnRpc2hpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbndlbmhhb2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzdcXFwiXCJcbiAgfSxcbiAgXCJpY29ud2VuaGFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnh1YW56ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczYlxcXCJcIlxuICB9LFxuICBcImljb255dWFueGluZ3dlaXh1YW56aG9uZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczZVxcXCJcIlxuICB9LFxuICBcImljb255dWFueGluZ3h1YW56aG9uZ2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2ZcXFwiXCJcbiAgfSxcbiAgXCJpY29ueXVhbnhpbmd4dWFuemhvbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDJcXFwiXCJcbiAgfSxcbiAgXCJpY29uYmlhb3hpbmdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmJpYW94aW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQ0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNoZXhpYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uZGlhbnB1ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0NlxcXCJcIlxuICB9LFxuICBcImljb25kaWFucHVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDdcXFwiXCJcbiAgfSxcbiAgXCJpY29uZGluZ2RhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0OFxcXCJcIlxuICB9LFxuICBcImljb25mYW5rdWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uZmVueGlhbmczXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmdlbmdkdW8yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmdvbmdsdmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGRcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ291d3VjaGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmdvdXd1Y2hlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmdvdXd1ZGFpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnFpYXBpYW54aW5nc2hpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmtlZnVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzVhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmtlZnVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWNcXFwiXCJcbiAgfSxcbiAgXCJpY29ubGllYmlhb3hpbmdzaGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWVcXFwiXCJcbiAgfSxcbiAgXCJpY29ubGl1eWFuZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1ZlxcXCJcIlxuICB9LFxuICBcImljb25saXV5YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjBcXFwiXCJcbiAgfSxcbiAgXCJpY29ucGVuZ3lvdWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjFcXFwiXCJcbiAgfSxcbiAgXCJpY29ucGVuZ3lvdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2MlxcXCJcIlxuICB9LFxuICBcImljb25xaW5nY2h1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnF1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2FvbWFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2hhaXh1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjlcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2hhbmNodVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2YVxcXCJcIlxuICB9LFxuICBcImljb25zaGV6aGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NmJcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2hpemhvbmdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnNoaXpob25nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnNob3V5ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NmVcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2hvdXllXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnNvdXN1bzFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzBcXFwiXCJcbiAgfSxcbiAgXCJpY29uc291c3VvbGVpbXVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzcxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnNvdXN1b2xlaW11XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzcyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnRvbmd6aGlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzczXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnRvbmd6aGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzRcXFwiXCJcbiAgfSxcbiAgXCJpY29udHVpa3VhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3YVxcXCJcIlxuICB9LFxuICBcImljb253b2RlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3YlxcXCJcIlxuICB9LFxuICBcImljb253b2RlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnhpaHVhbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2ZcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlodWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzgwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnhpbnhpZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4MVxcXCJcIlxuICB9LFxuICBcImljb254aW54aVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4MlxcXCJcIlxuICB9LFxuICBcImljb256dWppXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzgzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnp1b2JpYW9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzg0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnp1b2JpYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ODVcXFwiXCJcbiAgfSxcbiAgXCJpY29uZGlidVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4NlxcXCJcIlxuICB9LFxuICBcImljb25kaW5nYnVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ODdcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmdzaGFuZzFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ODhcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmdzaGFuZzJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ODlcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmdzaGFuZzNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGFcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmdzaGFuZzVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGRcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmd4aWExXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnhpYW5neGlhMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4ZlxcXCJcIlxuICB9LFxuICBcImljb254aWFuZ3hpYTNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTBcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmd4aWE1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzkyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnhpYW5neW91MlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5M1xcXCJcIlxuICB9LFxuICBcImljb254aWFuZ3lvdTNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnhpYW5neW91M1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5NVxcXCJcIlxuICB9LFxuICBcImljb254aWFuZ3p1bzFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTZcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmd6dW8yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnhpYW5namkxZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5OFxcXCJcIlxuICB9LFxuICBcImljb254aWFuZ2ppMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5OVxcXCJcIlxuICB9LFxuICBcImljb25qaWF6YWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2h1YXhpbjFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2FsZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWNcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2FsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5ZFxcXCJcIlxuICB9LFxuICBcImljb25hbmRyb2lkZ2VuZ2R1b1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5ZVxcXCJcIlxuICB9LFxuICBcImljb25sZWltdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5ZlxcXCJcIlxuICB9LFxuICBcImljb25iYW5nemh1emhvbmd4aW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uY2FpZGFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ExXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnphbnRvbmdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2EyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnphbnRvbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTNcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmdzaGFuZzRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTRcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmd4aWE0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmRhbnBpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhYlxcXCJcIlxuICB9LFxuICBcImljb25waW5wYWlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjhcXFwiXCJcbiAgfSxcbiAgXCJpY29ueGlhbmdiYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmFcXFwiXCJcbiAgfSxcbiAgXCJpY29ueWlzaG91Y2h1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbm90aGVyc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiY1xcXCJcIlxuICB9LFxuICBcImljb25kYW54dWFuZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxZVxcXCJcIlxuICB9LFxuICBcImljb25kYW54dWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZhbmd4aW5nd2VpeHVhbnpob25nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZhbmd4aW5neHVhbnpob25nZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNVxcXCJcIlxuICB9LFxuICBcImljb25mYW5neGluZ3h1YW56aG9uZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNlxcXCJcIlxuICB9LFxuICBcImljb25ndWFuYmkxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmd1YW5iaTJmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmd1YW5iaTJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uZmF2b3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2JcXFwiXCJcbiAgfSxcbiAgXCJpY29ubG9hZGluZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3Y1xcXCJcIlxuICB9LFxuICBcImljb25sb2NhdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2RcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRjaGVja2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2VcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRjaGVja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3ZlxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZGNsb3NlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4MFxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZGNsb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjgxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJvdW5kcmlnaHRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjgyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJvdW5kcmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ODNcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2VhcmNoMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4NFxcXCJcIlxuICB9LFxuICBcImljb250aW1lZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4NVxcXCJcIlxuICB9LFxuICBcImljb250aW1lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjg2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnVuZm9sZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4N1xcXCJcIlxuICB9LFxuICBcImljb253YXJuZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4OFxcXCJcIlxuICB9LFxuICBcImljb253YXJuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjg5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNhbWVyYWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uY2FtZXJhMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4YlxcXCJcIlxuICB9LFxuICBcImljb25jb21tZW50ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4Y1xcXCJcIlxuICB9LFxuICBcImljb25jb21tZW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjhkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmxpa2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjhlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmxpa2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OGZcXFwiXCJcbiAgfSxcbiAgXCJpY29ubm90aWZpY2F0aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5MFxcXCJcIlxuICB9LFxuICBcImljb25ub3RpZmljYXRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTFcXFwiXCJcbiAgfSxcbiAgXCJpY29ub3JkZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uZGVsaXZlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5M1xcXCJcIlxuICB9LFxuICBcImljb25ldmFsdWF0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5NFxcXCJcIlxuICB9LFxuICBcImljb25wYXlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2VuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5NlxcXCJcIlxuICB9LFxuICBcImljb25zaG9wXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjk3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnRpY2tldFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5OFxcXCJcIlxuICB9LFxuICBcImljb25jYXNjYWRlc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5OVxcXCJcIlxuICB9LFxuICBcImljb25saXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjlhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbm1vcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2NhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5Y1xcXCJcIlxuICB9LFxuICBcImljb25zZXR0aW5nc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5ZFxcXCJcIlxuICB9LFxuICBcImljb25xdWVzdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWVcXFwiXCJcbiAgfSxcbiAgXCJpY29ucXVlc3Rpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2hvcGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uZm9ybVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhMVxcXCJcIlxuICB9LFxuICBcImljb25waWNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTJcXFwiXCJcbiAgfSxcbiAgXCJpY29uZm9vdHByaW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmEzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnRvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhNFxcXCJcIlxuICB9LFxuICBcImljb25wdWxsZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhNVxcXCJcIlxuICB9LFxuICBcImljb25wdWxsdXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTZcXFwiXCJcbiAgfSxcbiAgXCJpY29ucmVmcmVzaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhN1xcXCJcIlxuICB9LFxuICBcImljb25tb3JlYW5kcm9pZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhOFxcXCJcIlxuICB9LFxuICBcImljb25kZWxldGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJlZnVuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhY1xcXCJcIlxuICB9LFxuICBcImljb25jYXJ0MVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhZlxcXCJcIlxuICB9LFxuICBcImljb25xcmNvZGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjBcXFwiXCJcbiAgfSxcbiAgXCJpY29ucmVtaW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmIyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmRlbGV0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiNFxcXCJcIlxuICB9LFxuICBcImljb25wcm9maWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmhvbWUxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNhcnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmhvbWVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbm1lc3NhZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uYWRkcmVzc2Jvb2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmRcXFwiXCJcbiAgfSxcbiAgXCJpY29ubGlua1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiZlxcXCJcIlxuICB9LFxuICBcImljb25sb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmMwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnVubG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjMlxcXCJcIlxuICB9LFxuICBcImljb252aXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzNcXFwiXCJcbiAgfSxcbiAgXCJpY29uYWN0aXZpdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzVcXFwiXCJcbiAgfSxcbiAgXCJpY29uZnJpZW5kYWRkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjOVxcXCJcIlxuICB9LFxuICBcImljb25mcmllbmRhZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2FcXFwiXCJcbiAgfSxcbiAgXCJpY29uZnJpZW5kZmFtb3VzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZyaWVuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjY1xcXCJcIlxuICB9LFxuICBcImljb25nb29kc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjZFxcXCJcIlxuICB9LFxuICBcImljb25wcmVzZW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnNxdWFyZWNoZWNrZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkNFxcXCJcIlxuICB9LFxuICBcImljb25zcXVhcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uc3F1YXJlY2hlY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDZcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDdcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRhZGRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJvdW5kYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkYVxcXCJcIlxuICB9LFxuICBcImljb25ub3RpZmljYXRpb25mb3JiaWRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZvbGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uYXBwcmVjaWF0ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTNcXFwiXCJcbiAgfSxcbiAgXCJpY29uaW5mb2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uaW5mb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlNVxcXCJcIlxuICB9LFxuICBcImljb25yZWNoYXJnZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWNcXFwiXCJcbiAgfSxcbiAgXCJpY29ucmVjaGFyZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWRcXFwiXCJcbiAgfSxcbiAgXCJpY29udmlwY2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlZVxcXCJcIlxuICB9LFxuICBcImljb25mcmllbmRmYXZvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmMVxcXCJcIlxuICB9LFxuICBcImljb25zaGFyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmM1xcXCJcIlxuICB9LFxuICBcImljb25zZXJ2aWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwNlxcXCJcIlxuICB9LFxuICBcImljb25jaG9pY2VuZXNzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxNFxcXCJcIlxuICB9LFxuICBcImljb25jaG9pY2VuZXNzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnB1bGxsZWZ0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnB1bGxyaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyMFxcXCJcIlxuICB9LFxuICBcImljb25yYW5rZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyMVxcXCJcIlxuICB9LFxuICBcImljb25yYW5rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmFwcHNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjlcXFwiXCJcbiAgfSxcbiAgXCJpY29ubWFya2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzBcXFwiXCJcbiAgfSxcbiAgXCJpY29ubWFya1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczMVxcXCJcIlxuICB9LFxuICBcImljb25wcmVzZW50ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczMlxcXCJcIlxuICB9LFxuICBcImljb25yZXBlYWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzNcXFwiXCJcbiAgfSxcbiAgXCJpY29ucGVvcGxlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczNVxcXCJcIlxuICB9LFxuICBcImljb25wZW9wbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzZcXFwiXCJcbiAgfSxcbiAgXCJpY29ucmVwYWlyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJlcGFpcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2FcXFwiXCJcbiAgfSxcbiAgXCJpY29uYXR0ZW50aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczY1xcXCJcIlxuICB9LFxuICBcImljb25hdHRlbnRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2RcXFwiXCJcbiAgfSxcbiAgXCJpY29uY29tbXVuaXR5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0MFxcXCJcIlxuICB9LFxuICBcImljb25jb21tdW5pdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDFcXFwiXCJcbiAgfSxcbiAgXCJpY29uY2FsZW5kYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGFcXFwiXCJcbiAgfSxcbiAgXCJpY29ucGxheWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uc3RvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1MFxcXCJcIlxuICB9LFxuICBcImljb250YWdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnRhZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1MlxcXCJcIlxuICB9LFxuICBcImljb25ncm91cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1M1xcXCJcIlxuICB9LFxuICBcImljb25ob3RmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmhvdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1OFxcXCJcIlxuICB9LFxuICBcImljb25wb3N0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJhZGlvYm94XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzViXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnVwbG9hZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1ZFxcXCJcIlxuICB9LFxuICBcImljb25yYWRpb2JveGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjNcXFwiXCJcbiAgfSxcbiAgXCJpY29uYWRkMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2N1xcXCJcIlxuICB9LFxuICBcImljb25tb3ZlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmFjdGl2aXR5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3NVxcXCJcIlxuICB9LFxuICBcImljb25jcm93bmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzZcXFwiXCJcbiAgfSxcbiAgXCJpY29uY3Jvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzdcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ29vZHNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbm1lc3NhZ2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnNwb25zb3JmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnNwb25zb3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2RcXFwiXCJcbiAgfSxcbiAgXCJpY29ubXlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGJcXFwiXCJcbiAgfSxcbiAgXCJpY29ubXlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnRleHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTFcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRhZGRsaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhN1xcXCJcIlxuICB9LFxuICBcImljb25hdHRlbnRpb25mb3JiaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uYXR0ZW50aW9uZm9yYmlkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiM1xcXCJcIlxuICB9LFxuICBcImljb25tYWlsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnBlb3BsZWxpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmVcXFwiXCJcbiAgfSxcbiAgXCJpY29ubmV3c2hvdGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzRcXFwiXCJcbiAgfSxcbiAgXCJpY29ubmV3c2hvdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjNVxcXCJcIlxuICB9LFxuICBcImljb252aWRlb2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzdcXFwiXCJcbiAgfSxcbiAgXCJpY29udmlkZW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzhcXFwiXCJcbiAgfSxcbiAgXCJpY29uYXNrZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjOVxcXCJcIlxuICB9LFxuICBcImljb25hc2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2FcXFwiXCJcbiAgfSxcbiAgXCJpY29uZXhpdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjYlxcXCJcIlxuICB9LFxuICBcImljb25tb25leWJhZ2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2VcXFwiXCJcbiAgfSxcbiAgXCJpY29ucmVkcGFja2V0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uaG9tZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkNFxcXCJcIlxuICB9LFxuICBcImljb25teV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkNVxcXCJcIlxuICB9LFxuICBcImljb25jb21tdW5pdHlfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uY2FydF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkN1xcXCJcIlxuICB9LFxuICBcImljb253ZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkOFxcXCJcIlxuICB9LFxuICBcImljb25ob21lX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uY2FydF9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2RhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNvbW11bml0eV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2RiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbm15X2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZGNcXFwiXCJcbiAgfSxcbiAgXCJpY29ud2VfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkZFxcXCJcIlxuICB9LFxuICBcImljb25zZWFyY2hfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2Nhbl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkZlxcXCJcIlxuICB9LFxuICBcImljb25wZW9wbGVfbGlzdF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlMFxcXCJcIlxuICB9LFxuICBcImljb25tZXNzYWdlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2UxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNsb3NlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2UyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmFkZF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlM1xcXCJcIlxuICB9LFxuICBcImljb25wcm9maWxlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2U0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnNlcnZpY2VfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZTVcXFwiXCJcbiAgfSxcbiAgXCJpY29uZnJpZW5kX2FkZF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlNlxcXCJcIlxuICB9LFxuICBcImljb25lZGl0X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2U3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNhbWVyYV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlOFxcXCJcIlxuICB9LFxuICBcImljb25zaGFyZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlOVxcXCJcIlxuICB9LFxuICBcImljb25jb21tZW50X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmFwcHJlY2lhdGVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWJcXFwiXCJcbiAgfSxcbiAgXCJpY29uYXBwcmVjaWF0ZV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNvbW1lbnRfZmlsbF9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZFxcXCJcIlxuICB9LFxuICBcImljb25tb3JlX2FuZHJvaWRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWVcXFwiXCJcbiAgfSxcbiAgXCJpY29uZnJpZW5kX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbm1vcmVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ29vZHNfZmF2b3JfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjFcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ29vZHNfbmV3X2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjJcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ29vZHNfbmV3X2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2YzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmdvb2RzX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZhdm9yX2ZpbGxfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjVcXFwiXCJcbiAgfSxcbiAgXCJpY29uZGVsZXRlX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmJhY2tfYW5kcm9pZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmN1xcXCJcIlxuICB9LFxuICBcImljb25iYWNrX2FuZHJvaWRfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjhcXFwiXCJcbiAgfSxcbiAgXCJpY29uZG93bl9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmOVxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF9jbG9zZV9saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmYVxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF9jbG9zZV9maWxsX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ZiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnFyX2NvZGVfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uZnJpZW5kX3NldHRpbmdzX2xpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ZlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJvdW5kX2xpc3RfbGlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MDBcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRfZnJpZW5kX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MGFcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRfY3Jvd25fZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwYlxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF9saW5rX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MGNcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRfbGlnaHRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwZFxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF9mYXZvcl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODBlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJvdW5kX21lbnVfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgwZlxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF9sb2NhdGlvbl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODEwXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJvdW5kX3BheV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODExXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJvdW5kX2xpa2VfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxMlxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF9wZW9wbGVfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxM1xcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF9wYXlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MTRcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRfcmFua19maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJvdW5kX3JlZHBhY2tldF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODE2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbnJvdW5kX3NraW5fZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxN1xcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF9yZWNvcmRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxOFxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF90aWNrZXRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxOVxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF90ZXh0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWFcXFwiXCJcbiAgfSxcbiAgXCJpY29ucm91bmRfdHJhbnNmZXJfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxYlxcXCJcIlxuICB9LFxuICBcImljb25yb3VuZF90cmFuc2ZlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxY1xcXCJcIlxuICB9LFxuICBcImljb25hcnJvd19sZWZ0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWRcXFwiXCJcbiAgfSxcbiAgXCJpY29uYXJyb3dfdXBfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgxZVxcXCJcIlxuICB9LFxuICBcImljb25yZXR1cm5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MWZcXFwiXCJcbiAgfSxcbiAgXCJpY29uYnJvYWRjYXN0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU4MjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uYXBwcmVjaWF0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3NVxcXCJcIlxuICB9LFxuICBcImljb25jaGVja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3NlxcXCJcIlxuICB9LFxuICBcImljb25jbG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3N1xcXCJcIlxuICB9LFxuICBcImljb25lZGl0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmVtb2ppXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZhdm9yZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3YVxcXCJcIlxuICB9LFxuICBcImljb25saWViaWFvbW9zaGkyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmRhaWZhaHVvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFjXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmRhaWZ1a3VhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxZFxcXCJcIlxuICB9LFxuICBcImljb25wYWl4aW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnphbnh1YW56aG9uZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxZlxcXCJcIlxuICB9LFxuICBcImljb25mZW54aWFuZzFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uZmVueGlhbmcyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjIxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmdlbmdkdW8xXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjIyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNhcnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjNcXFwiXCJcbiAgfSxcbiAgXCJpY29uaG9tZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyNFxcXCJcIlxuICB9LFxuICBcImljb25ob21lMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyNVxcXCJcIlxuICB9LFxuICBcImljb25jYW1lcmFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uY2FtZXJhMlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyN1xcXCJcIlxuICB9LFxuICBcImljb25zZWFyY2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjhcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2h1YXhpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyOVxcXCJcIlxuICB9LFxuICBcImljb25taW5lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjJhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbm1pbmUyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjJiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnRhYnVsYXRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MmNcXFwiXCJcbiAgfSxcbiAgXCJpY29ubGllYmlhbzJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MmRcXFwiXCJcbiAgfSxcbiAgXCJpY29uaWNvbmZvbnRzY2FuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjJlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbnF1YW5idWRpbmdkYW4xXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjJmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxc2hvdWNhbmd4dWFuemhvbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MzBcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFzaG91Y2FuZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzMVxcXCJcIlxuICB9LFxuICBcImljb24zMWd1YW5iaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzMlxcXCJcIlxuICB9LFxuICBcImljb24zMXh1YW56ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzM1xcXCJcIlxuICB9LFxuICBcImljb24zMWd1YW56aHVkaWFucHVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MzRcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzF4dWFuemhvbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MzVcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzF5aWd1YW56aHVkaWFucHVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MzZcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFkaWFuemFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjM3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxZGlhbnB1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjM4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxZmVueGlhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MzlcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzF6aHVhbmZhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjNhXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxZGFpZmFodW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2M2JcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFkYWlmdWt1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2M2NcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFkYWlzaG91aHVvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjNkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxZGFpcGluZ2ppYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzZVxcXCJcIlxuICB9LFxuICBcImljb250dWlrdWFudHVpaHVvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjNmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxaHVpeXVhbnFpYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0MFxcXCJcIlxuICB9LFxuICBcImljb24zMWppZmVuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxeW91aHVpcXVhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0MlxcXCJcIlxuICB9LFxuICBcImljb24zMXRpYW5tYW9iYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDNcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFob25nYmFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxZmFuZXJ4dWFuemhvbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDVcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFmYW5lclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0NlxcXCJcIlxuICB9LFxuICBcImljb24zMWdvdXd1Y2hleHVhbnpob25nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxZ291d3VjaGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDhcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFzaG91eWV4dWFuemhvbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFzaG91eWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGFcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzF3b2RleHVhbnpob25nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxd29kZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0Y1xcXCJcIlxuICB9LFxuICBcImljb25saXd1aHVvZG9uZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0ZFxcXCJcIlxuICB9LFxuICBcImljb25saWViaWFvbW9zaGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGVcXFwiXCJcbiAgfSxcbiAgXCJpY29uemhvbmd0dW1vc2hpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmNoYWthblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MFxcXCJcIlxuICB9LFxuICBcImljb25ndWFuYmlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ3VhbnpodVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1MlxcXCJcIlxuICB9LFxuICBcImljb25sYWJhXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjUzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxcGFpc2hleHVhbnpob25nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxcGFpc2hlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU1XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxcmV4aWFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU2XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxc2FvbWFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTdcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFzaGFuZ3hpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1OFxcXCJcIlxuICB9LFxuICBcImljb24zMXNodWF4aW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTlcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFzb3VzdW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWFcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzF0aXNoaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1YlxcXCJcIlxuICB9LFxuICBcImljb24zMXhpYW94aVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1Y1xcXCJcIlxuICB9LFxuICBcImljb24zMXlpd2VuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxZGluZ2RhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZVxcXCJcIlxuICB9LFxuICBcImljb24zMWd1YW56aHUxeHVhbnpob25nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVmXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxZ3VhbnpodTFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjBcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFodWlkYW9kaW5nYnVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjFcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzF6dWppXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjYyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxbGVpbXVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjNcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFsaWViaWFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY0XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxY2hpcGluZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2NVxcXCJcIlxuICB9LFxuICBcImljb24zMWVyd2VpbWFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjZcXFwiXCJcbiAgfSxcbiAgXCJpY29uYmlhbmppXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY3XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxZmFuaHVpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxaHVpeXVhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2OVxcXCJcIlxuICB9LFxuICBcImljb24zMXBpbmdsdW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmFcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFxaWFuZGFvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxcXVhbmJ1c2hhbmdwaW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmNcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFzaGFuZ3NoZW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZkXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxc2hlemhpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxc2hpamlhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2ZlxcXCJcIlxuICB9LFxuICBcImljb24zMXNob3VxaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3MFxcXCJcIlxuICB9LFxuICBcImljb24zMXhpYWppYW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjcxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbjMxeGlhbGFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzJcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzF0aXNoaTFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzNcXFwiXCJcbiAgfSxcbiAgXCJpY29uMzFoYW95b3VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzRcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2FveWlzYW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDBcXFwiXCJcbiAgfSxcbiAgXCJpY29uc291c3VvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAxXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZlbnhpYW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAyXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZlbmxlaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwM1xcXCJcIlxuICB9LFxuICBcImljb25odWFueWlwaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwNFxcXCJcIlxuICB9LFxuICBcImljb254aXVnYWlvcnlpamlhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwNVxcXCJcIlxuICB9LFxuICBcImljb253ZWl4aW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDZcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2hhbmdzaGVuZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwN1xcXCJcIlxuICB9LFxuICBcImljb25lcndlaW1hXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjA4XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmxpYW5qaWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDlcXFwiXCJcbiAgfSxcbiAgXCJpY29uZGlhbnphblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwYVxcXCJcIlxuICB9LFxuICBcImljb25mYW5odWk4XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBiXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZhbmh1aTdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGNcXFwiXCJcbiAgfSxcbiAgXCJpY29uZmFuaHVpNlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwZFxcXCJcIlxuICB9LFxuICBcImljb25mYW5odWk1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBlXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmdlbmdkdW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGZcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2hvdWNhbmd4dWFuemhvbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTBcXFwiXCJcbiAgfSxcbiAgXCJpY29uc2hvdWNhbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTFcXFwiXCJcbiAgfSxcbiAgXCJpY29uZmFuaHVpMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxMlxcXCJcIlxuICB9LFxuICBcImljb25mYW5odWkyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjEzXFxcIlwiXG4gIH0sXG4gIFwiaWNvbmZhbmh1aTNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTRcXFwiXCJcbiAgfSxcbiAgXCJpY29uZmFuaHVpNFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxNVxcXCJcIlxuICB9LFxuICBcImljb25odWlkYW9kaW5nYnVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTZcXFwiXCJcbiAgfSxcbiAgXCJpY29uZ291d3VjaGV4dWFuemhvbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTdcXFwiXCJcbiAgfSxcbiAgXCJpY29ud29kZXh1YW56aG9uZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxOFxcXCJcIlxuICB9LFxuICBcImljb25xdWFuYnVkaW5nZGFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjE5XFxcIlwiXG4gIH0sXG4gIFwiaWNvbmRhaXNob3VodW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MWFcXFwiXCJcbiAgfSxcbiAgXCJ1bmktZmxleFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLWZsZXgtaXRlbVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJ1bmktcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInVuaS1jb2x1bW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwidW5pLWxpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNTc2Qjk1XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI2dXB4XCJcbiAgfSxcbiAgXCJ1bmktY2VudGVyXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidW5pLWlubGluZS1pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktcGFnZS1oZWFkXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzNXVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzV1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzNXVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzNXVweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktcGFnZS1oZWFkLXRpdGxlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwdXB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwdXB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4OHVweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg4dXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNCRUJFQkVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjJ1cHggc29saWQgI0Q4RDhEOFwiXG4gIH0sXG4gIFwidW5pLXBhZ2UtYm9keVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJmbGV4R3Jvd1wiOiAxLFxuICAgIFwib3ZlcmZsb3dYXCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJ1bmktcGFkZGluZy13cmFwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjkwdXB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHVweFwiXG4gIH0sXG4gIFwidW5pLXdvcmRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjAwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMDB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMDB1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTAwdXB4XCJcbiAgfSxcbiAgXCJ1bmktdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHVweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcImxpbmVIZWlnaHRcIjogMS41XG4gIH0sXG4gIFwidW5pLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHVweFwiXG4gIH0sXG4gIFwidW5pLXRleHQtZ3JheVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNjY2NjY2NcIlxuICB9LFxuICBcInVuaS10ZXh0LXNtYWxsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjR1cHhcIlxuICB9LFxuICBcInVuaS1jb21tb24tbWJcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzB1cHhcIlxuICB9LFxuICBcInVuaS1jb21tb24tcGJcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJ1bmktY29tbW9uLXBsXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzB1cHhcIlxuICB9LFxuICBcInVuaS1jb21tb24tbXRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzB1cHhcIlxuICB9LFxuICBcInVuaS1iZy1yZWRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNGNzYyNjBcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidW5pLWJnLWdyZWVuXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCIjMDlCQjA3XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcInVuaS1iZy1ibHVlXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCIjMDA3QUZGXCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcInVuaS1oMVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjgwdXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCJcbiAgfSxcbiAgXCJ1bmktaDJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI2MHVweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH0sXG4gIFwidW5pLWgzXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDh1cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcInVuaS1oNFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM2dXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCJcbiAgfSxcbiAgXCJ1bmktaDVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGY4Zjk0XCJcbiAgfSxcbiAgXCJ1bmktaDZcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGY4Zjk0XCJcbiAgfSxcbiAgXCJ1bmktYm9sZFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwidW5pLWVsbGlwc2lzXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJ3aGl0ZVNwYWNlXCI6IFwibm93cmFwXCIsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwidW5pLWJ0bi12XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTB1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJ1bmktZm9ybS1pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTB1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwdXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwidW5pLWxhYmVsXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjEwdXB4XCIsXG4gICAgXCJ3b3JkV3JhcFwiOiBcImJyZWFrLXdvcmRcIixcbiAgICBcIndvcmRCcmVha1wiOiBcImJyZWFrLWFsbFwiLFxuICAgIFwidGV4dEluZGVudFwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJ1bmktaW5wdXRcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNTB1cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNXVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjV1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNXVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyNXVweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjUwdXB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4dXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI0ZGRlwiLFxuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwidW5pLWxvYWRtb3JlXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjgwdXB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODB1cHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2VcIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcIidIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxMlwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjNcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjZcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjZcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMTUpXCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2UtZGVmYXVsdFwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjEyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiM1wiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNlwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjNcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNlwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMDBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4xNSlcIlxuICB9LFxuICBcInVuaS1iYWRnZS1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2FmZlwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLWdyZWVuXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRjZDk2NFwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGNkOTY0XCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2Utd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGFkNGVcIlxuICB9LFxuICBcInVuaS1iYWRnZS15ZWxsb3dcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjBhZDRlXCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2UtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RkNTI0ZFwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLXJlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkZDUyNGRcIlxuICB9LFxuICBcInVuaS1iYWRnZS1wdXJwbGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjOGE2ZGU5XCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2Utcm95YWxcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjOGE2ZGU5XCJcbiAgfSxcbiAgXCJ1bmktY29sbGFwc2UtY29udGVudFwiOiB7XG4gICAgXCJoZWlnaHRcIjogMCxcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJ1bmktY2FyZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2ZmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjB1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYm94U2hhZG93XCI6IFwiMCAydXB4IDR1cHggcmdiYSgwLCAwLCAwLCAuMylcIlxuICB9LFxuICBcInVuaS1jYXJkLWNvbnRlbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHVweFwiXG4gIH0sXG4gIFwidW5pLWNhcmQtY29udGVudC1pbm5lclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzB1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzB1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzB1cHhcIlxuICB9LFxuICBcInVuaS1jYXJkLWZvb3RlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiNTB1cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHVweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2ZDZkNzJcIixcbiAgICBcInBvc2l0aW9uOmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6YmVmb3JlXCI6IDAsXG4gICAgXCJyaWdodDpiZWZvcmVcIjogMCxcbiAgICBcImxlZnQ6YmVmb3JlXCI6IDAsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiMnVweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInJ1wiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcInRyYW5zZm9ybTpiZWZvcmVcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YmVmb3JlXCI6IFwiI2M4YzdjY1wiXG4gIH0sXG4gIFwidW5pLWNhcmQtaGVhZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCI1MHVweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwdXB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzZ1cHhcIixcbiAgICBcInBvc2l0aW9uOmJlZm9yZTphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6YmVmb3JlOmFmdGVyXCI6IDAsXG4gICAgXCJyaWdodDpiZWZvcmU6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6YmVmb3JlOmFmdGVyXCI6IDAsXG4gICAgXCJoZWlnaHQ6YmVmb3JlOmFmdGVyXCI6IFwiMnVweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmU6YWZ0ZXJcIjogXCInJ1wiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOmJlZm9yZTphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcInRyYW5zZm9ybTpiZWZvcmU6YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YmVmb3JlOmFmdGVyXCI6IFwiI2M4YzdjY1wiLFxuICAgIFwiYm90dG9tOmFmdGVyXCI6IDBcbiAgfSxcbiAgXCJ1bmktY2FyZC1tZWRpYVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcInVuaS1jYXJkLW1lZGlhLWxvZ29cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODR1cHhcIixcbiAgICBcIndpZHRoXCI6IFwiODR1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjB1cHhcIlxuICB9LFxuICBcInVuaS1jYXJkLW1lZGlhLWJvZHlcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODR1cHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJ1bmktY2FyZC1tZWRpYS10ZXh0LXRvcFwiOiB7XG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzZ1cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzR1cHhcIlxuICB9LFxuICBcInVuaS1jYXJkLW1lZGlhLXRleHQtYm90dG9tXCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogXCIzMHVweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGY4Zjk0XCJcbiAgfSxcbiAgXCJ1bmktY2FyZC1saW5rXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN0FGRlwiXG4gIH0sXG4gIFwidW5pLWxpc3RcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBvc2l0aW9uOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInpJbmRleDphZnRlclwiOiAxMCxcbiAgICBcInJpZ2h0OmFmdGVyXCI6IDAsXG4gICAgXCJib3R0b206YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6YWZ0ZXJcIjogMCxcbiAgICBcImhlaWdodDphZnRlclwiOiBcIjF1cHhcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCInJ1wiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOmFmdGVyXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwidHJhbnNmb3JtOmFmdGVyXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFmdGVyXCI6IFwiI2M4YzdjY1wiLFxuICAgIFwicG9zaXRpb246YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInpJbmRleDpiZWZvcmVcIjogMTAsXG4gICAgXCJyaWdodDpiZWZvcmVcIjogMCxcbiAgICBcInRvcDpiZWZvcmVcIjogMCxcbiAgICBcImxlZnQ6YmVmb3JlXCI6IDAsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiMXVweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInJ1wiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcInRyYW5zZm9ybTpiZWZvcmVcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YmVmb3JlXCI6IFwiI2M4YzdjY1wiXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ6SW5kZXg6YWZ0ZXJcIjogMyxcbiAgICBcInJpZ2h0OmFmdGVyXCI6IDAsXG4gICAgXCJib3R0b206YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6YWZ0ZXJcIjogXCIzMHVweFwiLFxuICAgIFwiaGVpZ2h0OmFmdGVyXCI6IFwiMXVweFwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm06YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWZ0ZXJcIjogXCIjYzhjN2NjXCJcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLWhvdmVyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWVlZWVcIlxuICB9LFxuICBcInVuaS1saXN0LWNlbGwtcGRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIydXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIydXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLWxlZnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHVweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzB1cHhcIlxuICB9LFxuICBcInVuaS1saXN0LWNlbGwtZGJcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbC1yaWdodFwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLWRpdmlkZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y3ZjdmN1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE1dXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1dXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwb3NpdGlvbjpiZWZvcmVcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHQ6YmVmb3JlXCI6IDAsXG4gICAgXCJ0b3A6YmVmb3JlXCI6IDAsXG4gICAgXCJsZWZ0OmJlZm9yZVwiOiBcIjB1cHhcIixcbiAgICBcImhlaWdodDpiZWZvcmVcIjogXCIxdXB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06YmVmb3JlXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmVcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodDphZnRlclwiOiAwLFxuICAgIFwiYm90dG9tOmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OmFmdGVyXCI6IFwiMHVweFwiLFxuICAgIFwiaGVpZ2h0OmFmdGVyXCI6IFwiMXVweFwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm06YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWZ0ZXJcIjogXCIjYzhjN2NjXCJcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLW5hdmlnYXRlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzB1cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMnVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzZ1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMnVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHVweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjQ4dXB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktbmF2aWdhdGUtYmFkZ2VcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTB1cHhcIlxuICB9LFxuICBcInVuaS10cmlwbGV4LXJvd1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIydXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIydXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJ1bmktdHJpcGxleC1yaWdodFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogMTYsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwidW5pLXRyaXBsZXgtbGVmdFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogODRcbiAgfSxcbiAgXCJ1bmktbWVkaWEtbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjJ1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjJ1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzB1cHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ1bmktcHVsbC1yaWdodFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93LXJldmVyc2VcIlxuICB9LFxuICBcInVuaS1tZWRpYS1saXN0LWxvZ29cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODR1cHhcIixcbiAgICBcIndpZHRoXCI6IFwiODR1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjB1cHhcIlxuICB9LFxuICBcInVuaS1tZWRpYS1saXN0LWJvZHlcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODR1cHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwidW5pLW1lZGlhLWxpc3QtdGV4dC10b3BcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjM2dXB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJ1bmktbWVkaWEtbGlzdC10ZXh0LWJvdHRvbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzB1cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjZ1cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmOGY5NFwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2YyZjJmMlwiLFxuICAgIFwid2lkdGhcIjogXCI3NTB1cHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImJvcmRlclRvcFwiOiBcIjJ1cHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOS1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwdXB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMDB1cHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMnVweCBzb2xpZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogXCIydXB4IHNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlZWVlZWVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcIm5vLWJvcmRlci1yaWdodFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFwiOiBcIm5vbmVcIlxuICB9LFxuICBcInVuaS1ncmlkLTktaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDB1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHVweFwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOS10ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwdXB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNHVweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDB1cHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHVweFwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOS1pdGVtLWhvdmVyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcInVuaS11cGxvYWRlclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXItaGVhZFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXItaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNCMkIyQjJcIlxuICB9LFxuICBcInVuaS11cGxvYWRlci1ib2R5XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE2dXB4XCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXJfX2ZpbGVzXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInVuaS11cGxvYWRlcl9fZmlsZVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTB1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHVweFwiLFxuICAgIFwid2lkdGhcIjogXCIyMTB1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIxMHVweFwiXG4gIH0sXG4gIFwidW5pLXVwbG9hZGVyX19pbWdcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjIxMHVweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjEwdXB4XCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXJfX2lucHV0LWJveFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTB1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHVweFwiLFxuICAgIFwid2lkdGhcIjogXCIyMDh1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIwOHVweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMnVweCBzb2xpZCAjRDlEOUQ5XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmVcIjogNTAsXG4gICAgXCJsZWZ0OmJlZm9yZVwiOiA1MCxcbiAgICBcIldlYmtpdFRyYW5zZm9ybTpiZWZvcmVcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcInRyYW5zZm9ybTpiZWZvcmVcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmVcIjogXCIjRDlEOUQ5XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZTphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmU6YWZ0ZXJcIjogNTAsXG4gICAgXCJsZWZ0OmJlZm9yZTphZnRlclwiOiA1MCxcbiAgICBcIldlYmtpdFRyYW5zZm9ybTpiZWZvcmU6YWZ0ZXJcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcInRyYW5zZm9ybTpiZWZvcmU6YWZ0ZXJcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmU6YWZ0ZXJcIjogXCIjRDlEOUQ5XCIsXG4gICAgXCJ3aWR0aDpiZWZvcmVcIjogXCI0dXB4XCIsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiNzl1cHhcIixcbiAgICBcIndpZHRoOmFmdGVyXCI6IFwiNzl1cHhcIixcbiAgICBcImhlaWdodDphZnRlclwiOiBcIjR1cHhcIixcbiAgICBcImJvcmRlckNvbG9yOmFjdGl2ZVwiOiBcIiM5OTk5OTlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphY3RpdmU6YmVmb3JlXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFjdGl2ZTpiZWZvcmU6YWN0aXZlOmFmdGVyXCI6IFwiIzk5OTk5OVwiXG4gIH0sXG4gIFwidW5pLXVwbG9hZGVyX19pbnB1dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ6SW5kZXhcIjogMSxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9LFxuICBcImZlZWRiYWNrLXRpdGxlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGY4Zjk0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4dXB4XCJcbiAgfSxcbiAgXCJmZWVkYmFjay1xdWlja1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHVweFwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcInVuaWljb25zXCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjQwdXB4XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiJ1xcXFxlNTgxJ1wiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHQ6YWZ0ZXJcIjogMCxcbiAgICBcInRvcDphZnRlclwiOiA1MCxcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOmFmdGVyXCI6IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgIFwidHJhbnNmb3JtOmFmdGVyXCI6IFwidHJhbnNsYXRlWSgtNTAlKVwiXG4gIH0sXG4gIFwiZmVlZGJhY2stYm9keVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2ZmZlwiXG4gIH0sXG4gIFwiZmVlZGJhY2stdGV4dGFyZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyMDB1cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzR1cHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI1MHVweFwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHVweFwiXG4gIH0sXG4gIFwiZmVlZGJhY2staW5wdXRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNHVweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTB1cHhcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIjUwdXB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTV1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTV1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjB1cHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI1MHVweFwiXG4gIH0sXG4gIFwiZmVlZGJhY2stdXBsb2FkZXJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIydXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIydXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJmZWVkYmFjay1zdGFyXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJ1bmlpY29uc1wiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjZ1cHhcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCInXFxcXGU0MDgnXCJcbiAgfSxcbiAgXCJmZWVkYmFjay1zdGFyLXZpZXdcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJmZWVkYmFjay1zdWJtaXRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIiMwMDdBRkZcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjB1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjB1cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwdXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjB1cHhcIlxuICB9LFxuICBcInVuaS1pbnB1dC1ncm91cFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJib3JkZXJcIjogMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBvc2l0aW9uOmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6YmVmb3JlXCI6IDAsXG4gICAgXCJyaWdodDpiZWZvcmVcIjogMCxcbiAgICBcImxlZnQ6YmVmb3JlXCI6IDAsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiMnVweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInJ1wiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmVcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodDphZnRlclwiOiAwLFxuICAgIFwiYm90dG9tOmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OmFmdGVyXCI6IDAsXG4gICAgXCJoZWlnaHQ6YWZ0ZXJcIjogXCIydXB4XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiJydcIixcbiAgICBcInRyYW5zZm9ybTphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphZnRlclwiOiBcIiNjOGM3Y2NcIlxuICB9LFxuICBcIm1hcmdpblwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjB1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHVweFwiXG4gIH0sXG4gIFwibWFyZ2luLWhlaWdodFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi13aWR0aFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjB1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjB1cHhcIlxuICB9LFxuICBcInVuaS1pbnB1dC1yb3dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjh1cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMnVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMnVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHVweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJ1bmktdGV4dGFyZWFcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNGRkZcIlxuICB9LFxuICBcInVuaS10YWItYmFyXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiaGVpZ2h0XCI6IDEwMFxuICB9LFxuICBcInVuaS1zd2lwZXItdGFiXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxMDB1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHVweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNjOGM3Y2NcIlxuICB9LFxuICBcInN3aXBlci10YWItbGlzdFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwdXB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE1MHVweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIlxuICB9LFxuICBcInVuaS10YWItYmFyLWxvYWRpbmdcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInVuaS1zdGVwc1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjB1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjB1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzB1cHhcIixcbiAgICBcImZsZXhHcm93XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJ1bmktY29tbWVudFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNXVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4R3Jvd1wiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwidW5pLWNvbW1lbnQtbGlzdFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIm5vd3JhcFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTB1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCJcbiAgfSxcbiAgXCJ1bmktY29tbWVudC1mYWNlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzB1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjcwdXB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHVweFwiLFxuICAgIFwiZmxleFNocmlua1wiOiAwLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInVuaS1jb21tZW50LWJvZHlcIjoge1xuICAgIFwid2lkdGhcIjogMTAwXG4gIH0sXG4gIFwidW5pLWNvbW1lbnQtdG9wXCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogMS41LFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJ1bmktY29tbWVudC1kYXRlXCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogXCIzOHVweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleEdyb3dcIjogMVxuICB9LFxuICBcInVuaS1jb21tZW50LWNvbnRlbnRcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiAxLjYsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4dXB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiOHVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiOHVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInVuaS1jb21tZW50LXJlcGxheS1idG5cIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjR1cHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyOHVweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjV1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNXVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHVweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMzB1cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwdXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHVweFwiXG4gIH0sXG4gIFwidW5pLXN3aXBlci1tc2dcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEydXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMnVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiXG4gIH0sXG4gIFwidW5pLXN3aXBlci1tc2ctaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC1saXN0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInVuaS1wcm9kdWN0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHVweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImltYWdlLXZpZXdcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMzMwdXB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMzMHVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTJ1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwXG4gIH0sXG4gIFwidW5pLXByb2R1Y3QtaW1hZ2VcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMzMwdXB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMzMHVweFwiXG4gIH0sXG4gIFwidW5pLXByb2R1Y3QtdGl0bGVcIjoge1xuICAgIFwid2lkdGhcIjogXCIzMDB1cHhcIixcbiAgICBcIndvcmRCcmVha1wiOiBcImJyZWFrLWFsbFwiLFxuICAgIFwiZGlzcGxheVwiOiBcIi13ZWJraXQtYm94XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjUsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgIFwiV2Via2l0Qm94T3JpZW50XCI6IFwidmVydGljYWxcIixcbiAgICBcIldlYmtpdExpbmVDbGFtcFwiOiAyXG4gIH0sXG4gIFwidW5pLXByb2R1Y3QtcHJpY2VcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTB1cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjh1cHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS41LFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwidW5pLXByb2R1Y3QtcHJpY2Utb3JpZ2luYWxcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZTgwMDgwXCJcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC1wcmljZS1mYXZvdXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjODg4ODg4XCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcImxpbmUtdGhyb3VnaFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwdXB4XCJcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC10aXBcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCIxMHVweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmMzMzM1wiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHVweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNXVweFwiXG4gIH0sXG4gIFwidW5pLXRpbWVsaW5lXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjM1dXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzV1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJ1bmktdGltZWxpbmUtaXRlbVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwdXB4XCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwidW5pLXRpbWVsaW5lLWl0ZW0tZGl2aWRlclwiOiB7XG4gICAgXCJwb3NpdGlvbjo6YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnQ6OmJlZm9yZVwiOiBcIjE1dXB4XCIsXG4gICAgXCJ3aWR0aDo6YmVmb3JlXCI6IFwiMXVweFwiLFxuICAgIFwiaGVpZ2h0OjpiZWZvcmVcIjogMTAwLFxuICAgIFwiY29udGVudDo6YmVmb3JlXCI6IFwiJydcIixcbiAgICBcImJhY2tncm91bmQ6OmJlZm9yZVwiOiBcImluaGVyaXRcIixcbiAgICBcInBvc2l0aW9uOjpiZWZvcmU6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnQ6OmJlZm9yZTo6YWZ0ZXJcIjogXCIxNXVweFwiLFxuICAgIFwid2lkdGg6OmJlZm9yZTo6YWZ0ZXJcIjogXCIxdXB4XCIsXG4gICAgXCJoZWlnaHQ6OmJlZm9yZTo6YWZ0ZXJcIjogMTAwLFxuICAgIFwiY29udGVudDo6YmVmb3JlOjphZnRlclwiOiBcIicnXCIsXG4gICAgXCJiYWNrZ3JvdW5kOjpiZWZvcmU6OmFmdGVyXCI6IFwiaW5oZXJpdFwiLFxuICAgIFwiYm90dG9tOjpiZWZvcmVcIjogMTAwLFxuICAgIFwidG9wOjphZnRlclwiOiAxMDBcbiAgfSxcbiAgXCJ1bmktaWNvblwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwidW5paWNvbnNcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjRcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJub3JtYWxcIixcbiAgICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJub25lXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nXCI6IFwiYW50aWFsaWFzZWRcIlxuICB9LFxuICBcInVuaS1pY29uLWNvbnRhY3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUxMDAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1wZXJzb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUxMDEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1wZXJzb25hZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUxMDInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jb250YWN0LWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEzMCdcIlxuICB9LFxuICBcInVuaS1pY29uLXBlcnNvbi1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUxMzEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1wZXJzb25hZGQtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMTMyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGhvbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyMDAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1lbWFpbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIwMSdcIlxuICB9LFxuICBcInVuaS1pY29uLWNoYXRidWJibGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyMDInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jaGF0Ym94ZXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyMDMnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1waG9uZS1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyMzAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1lbWFpbC1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyMzEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jaGF0YnViYmxlLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIzMidcIlxuICB9LFxuICBcInVuaS1pY29uLWNoYXRib3hlcy1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyMzMnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi13ZWlib1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTI2MCdcIlxuICB9LFxuICBcInVuaS1pY29uLXdlaXhpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTI2MSdcIlxuICB9LFxuICBcInVuaS1pY29uLXBlbmd5b3VxdWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjYyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2hhdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTI2MydcIlxuICB9LFxuICBcInVuaS1pY29uLXFxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjY0J1wiXG4gIH0sXG4gIFwidW5pLWljb24tdmlkZW9jYW1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzMDAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jYW1lcmFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzMDEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1taWNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzMDInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1sb2NhdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMwMydcIlxuICB9LFxuICBcInVuaS1pY29uLW1pYy1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzMzInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zcGVlY2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmU6YmVmb3JlXCI6IFwiJ1xcXFxlMzMyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tbG9jYXRpb24tZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMzMzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tbWljb2ZmXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMzYwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24taW1hZ2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzNjMnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1tYXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzNjQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jb21wb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDAwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tdHJhc2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi11cGxvYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1kb3dubG9hZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwMydcIlxuICB9LFxuICBcInVuaS1pY29uLWNsb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDA0J1wiXG4gIH0sXG4gIFwidW5pLWljb24tcmVkb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwNSdcIlxuICB9LFxuICBcInVuaS1pY29uLXVuZG9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDYnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1yZWZyZXNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDA3J1wiXG4gIH0sXG4gIFwidW5pLWljb24tc3RhclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwOCdcIlxuICB9LFxuICBcInVuaS1pY29uLXBsdXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDknXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1taW51c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQxMCdcIlxuICB9LFxuICBcInVuaS1pY29uLWNpcmNsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQxMSdcIlxuICB9LFxuICBcInVuaS1pY29uLWNoZWNrYm94XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlOmJlZm9yZVwiOiBcIidcXFxcZTQxMSdcIlxuICB9LFxuICBcInVuaS1pY29uLWNsb3NlLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQzNCdcIlxuICB9LFxuICBcInVuaS1pY29uLWNsZWFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlOmJlZm9yZVwiOiBcIidcXFxcZTQzNCdcIlxuICB9LFxuICBcInVuaS1pY29uLXJlZnJlc2gtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDM3J1wiXG4gIH0sXG4gIFwidW5pLWljb24tc3Rhci1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MzgnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1wbHVzLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQzOSdcIlxuICB9LFxuICBcInVuaS1pY29uLW1pbnVzLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ0MCdcIlxuICB9LFxuICBcInVuaS1pY29uLWNpcmNsZS1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NDEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jaGVja2JveC1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NDInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jbG9zZWVtcHR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDYwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcmVmcmVzaGVtcHR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDYxJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcmVsb2FkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDYyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tc3RhcmhhbGZcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjMnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zcGlubmVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDY0J1wiXG4gIH0sXG4gIFwidW5pLWljb24tc3Bpbm5lci1jeWNsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ2NSdcIlxuICB9LFxuICBcInVuaS1pY29uLXNlYXJjaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ2NidcIlxuICB9LFxuICBcInVuaS1pY29uLXBsdXNlbXB0eVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ2OCdcIlxuICB9LFxuICBcInVuaS1pY29uLWZvcndhcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NzAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1iYWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDcxJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tbGVmdC1uYXZcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmU6YmVmb3JlXCI6IFwiJ1xcXFxlNDcxJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2hlY2ttYXJrZW1wdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NzInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1ob21lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTAwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tbmF2aWdhdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1nZWFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTAyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGFwZXJwbGFuZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwMydcIlxuICB9LFxuICBcInVuaS1pY29uLWluZm9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1oZWxwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTA1J1wiXG4gIH0sXG4gIFwidW5pLWljb24tbG9ja2VkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTA2J1wiXG4gIH0sXG4gIFwidW5pLWljb24tbW9yZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwNydcIlxuICB9LFxuICBcInVuaS1pY29uLWZsYWdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDgnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1ob21lLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUzMCdcIlxuICB9LFxuICBcInVuaS1pY29uLWdlYXItZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTMyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24taW5mby1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MzQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1oZWxwLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUzNSdcIlxuICB9LFxuICBcInVuaS1pY29uLW1vcmUtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTM3J1wiXG4gIH0sXG4gIFwidW5pLWljb24tc2V0dGluZ3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1NjAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1saXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTYyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tYmFyc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2MydcIlxuICB9LFxuICBcInVuaS1pY29uLWxvb3BcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1NjUnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1wYXBlcmNsaXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1NjcnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1leWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1NjgnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd3VwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTgwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tYXJyb3dkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTgxJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tYXJyb3dsZWZ0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTgyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tYXJyb3dyaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU4MydcIlxuICB9LFxuICBcInVuaS1pY29uLWFycm93dGhpbnVwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTg0J1wiXG4gIH0sXG4gIFwidW5pLWljb24tYXJyb3d0aGluZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU4NSdcIlxuICB9LFxuICBcInVuaS1pY29uLWFycm93dGhpbmxlZnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODYnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd3RoaW5yaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU4NydcIlxuICB9LFxuICBcInVuaS1pY29uLXB1bGxkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTg4J1wiXG4gIH0sXG4gIFwidW5pLWljb24tc2NhblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxMlxcXCJcIlxuICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9ob21lVGl0bGVOdnVlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDcyZjhkNjcmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hvbWVUaXRsZU52dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9ob21lVGl0bGVOdnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2hvbWVUaXRsZU52dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2hvbWVUaXRsZU52dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjYyMTRkOGQ3XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIjIwMjHmr5Xorr4vZemXsue9ri9wYWdlcy90YWJCYXIvaG9tZS9zdWJOdnVlL2hvbWVUaXRsZU52dWUubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvbWVUaXRsZU52dWUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzJmOGQ2NyZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogW1wiY29udGVudFwiXSxcbiAgICAgIHN0eWxlOiB7IGhlaWdodDogX3ZtLnN0YXR1c0JhckhlaWdodCArIDQ0ICsgXCJ3eFwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcInN0YXR1cy1iYXJcIl0sXG4gICAgICAgIHN0eWxlOiB7IGhlaWdodDogX3ZtLnN0YXR1c0JhckhlaWdodCArIFwid3hcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm5hdlwiXSB9LCBbXG4gICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImljb25cIiwgXCJsb2NhdGlvblwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaWNvbkxvY2F0aW9uKSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImxvY2F0aW9uLWNpdHktdGV4dFwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY2l0eSkpXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImlucHV0LWJveFwiXSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpbnB1dC1ib3gtaW5wdXRcIl0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIum7mOiupOWFs+mUruWtl1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGZvY3VzOiBfdm0uaW5wdXRmb2N1cyB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImljb25cIiwgXCJzZWFyY2hcIl0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pY29uU2VhcmNoKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImljb25cIiwgXCJ5dXlpblwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaWNvbll1eWluKSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiaWNvblwiLCBcInRvbmd6aGlcIl0sIG9uOiB7IGNsaWNrOiBfdm0udG9Nc2cgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uVG9uZ3poaSkpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob21lVGl0bGVOdnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvbWVUaXRsZU52dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJjb250ZW50XCIgOnN0eWxlPVwie2hlaWdodDpzdGF0dXNCYXJIZWlnaHQrNDQrJ3d4J31cIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJzdGF0dXMtYmFyXCIgOnN0eWxlPVwie2hlaWdodDpzdGF0dXNCYXJIZWlnaHQrJ3d4J31cIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJuYXZcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJpY29uIGxvY2F0aW9uXCI+e3sgaWNvbkxvY2F0aW9uIH19PC90ZXh0PlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImxvY2F0aW9uLWNpdHktdGV4dFwiPnt7IGNpdHkgfX08L3RleHQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJpbnB1dC1ib3gtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIum7mOiupOWFs+mUruWtl1wiIEBmb2N1cz1cImlucHV0Zm9jdXNcIiAvPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbiBzZWFyY2hcIj57eyBpY29uU2VhcmNoIH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJpY29uIHl1eWluXCI+e3sgaWNvbll1eWluIH19PC90ZXh0PlxyXG5cdFx0XHQ8dGV4dCBAY2xpY2s9XCJ0b01zZ1wiIGNsYXNzPVwiaWNvbiB0b25nemhpXCI+e3sgaWNvblRvbmd6aGkgfX08L3RleHQ+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjaXR5OiAn5YyX5LqsJyxcclxuXHRcdFx0c3ViTlZ1ZTogdW5pLmdldEN1cnJlbnRTdWJOVnVlKCksXHJcblx0XHRcdGljb25TZWFyY2g6ICdcXHVlNjI4JyxcclxuXHRcdFx0aWNvbkxvY2F0aW9uOiAnXFx1ZTYxMScsXHJcblx0XHRcdGljb25ZdXlpbjogJ1xcdWU2NGUnLFxyXG5cdFx0XHRpY29uVG9uZ3poaTogJ1xcdWU3MjknLFxyXG5cdFx0XHRzdGF0dXNCYXJIZWlnaHQ6MjBcclxuXHRcdH07XHJcblx0fSxcclxuXHRiZWZvcmVDcmVhdGUoKSB7XHJcblx0XHRjb25zdCBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdFx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHRmb250RmFtaWx5OiAnaWNvbmZvbnQnLFxyXG5cdFx0XHRzcmM6IFwidXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzEwODc0NDJfZmU1dmlnZndyNW0udHRmJylcIlxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHR0b01zZygpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy4uLy4uL21zZy9tc2cnXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGluaXQoKSB7XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKT0+e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMublZ1ZVRpdGxlID0gdW5pLmdldEN1cnJlbnRTdWJOVnVlKCk7XHJcblx0XHRcdHRoaXMublZ1ZVRpdGxlLm9uTWVzc2FnZShyZXMgPT4ge1xyXG5cdFx0XHRcdGxldCB0eXBlID0gcmVzLmRhdGEudHlwZTtcclxuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ2xvY2F0aW9uJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRDaXR5KHJlcy5kYXRhLmNpdHkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0c2V0Q2l0eShjaXR5KSB7XHJcblx0XHRcdHRoaXMuY2l0eSA9IGNpdHk7XHJcblx0XHR9LFxyXG5cdFx0aW5wdXRmb2N1cygpIHtcclxuXHRcdFx0dGhpcy5zdWJOVnVlLnBvc3RNZXNzYWdlKHtcclxuXHRcdFx0XHR0eXBlOiAnZm9jdXMnXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuLmljb24ge1xyXG5cdGZvbnQtZmFtaWx5OiBpY29uZm9udDtcclxuXHRmb250LXNpemU6IDQycHg7XHJcbn1cclxuLmNvbnRlbnQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc3RhdHVzLWJhciB7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLm5hdiB7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdHBhZGRpbmc6IDAgMjBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiA4OHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubG9jYXRpb24sXHJcbi55dXlpbixcclxuLnRvbmd6aGkge1xyXG5cdHdpZHRoOiA2MHB4O1xyXG5cdGhlaWdodDogODhweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDg4cHg7XHJcbn1cclxuLmxvY2F0aW9uIHtcclxuXHRjb2xvcjogI2ZmYzUwYTtcclxufVxyXG4ubG9jYXRpb24tY2l0eS10ZXh0IHtcclxuXHR3aWR0aDogNjBweDtcclxuXHRoZWlnaHQ6IDg4cHg7XHJcblx0bGluZS1oZWlnaHQ6IDg4cHg7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ueXV5aW4ge1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcbi50b25nemhpIHtcclxuXHRjb2xvcjogIzAwMDtcclxufVxyXG4uaW5wdXQtYm94IHtcclxuXHR3aWR0aDogNDY1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRoZWlnaHQ6IDYwdXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW5wdXQtYm94LWlucHV0IHtcclxuXHR3aWR0aDogMzMwcHg7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdGZvbnQtc2l6ZTogMjhweDtcclxuXHRtYXJnaW4tbGVmdDogMzBweDtcclxuXHRwbGFjZWhvbGRlci1jb2xvcjogI2MwYzBjMDtcclxufVxyXG4uc2VhcmNoIHtcclxuXHR3aWR0aDogNjBweDtcclxuXHRmb250LXNpemU6IDM0cHg7XHJcblx0cGFkZGluZy1yaWdodDogMzBweDtcclxuXHRjb2xvcjogI2MwYzBjMDtcclxufVxyXG48L3N0eWxlPlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q3VycmVudFN1Yk5WdWUoKSB7XHJcbiAgcmV0dXJuIHVuaS5nZXRTdWJOVnVlQnlJZChwbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZClcclxufVxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaG9tZVRpdGxlTnZ1ZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi9oYngvSEJ1aWxkZXJYLjIuNi41LjIwMjAwMzE0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uLy4uL2hieC9IQnVpbGRlclguMi42LjUuMjAyMDAzMTQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vaGJ4L0hCdWlsZGVyWC4yLjYuNS4yMDIwMDMxNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvbWVUaXRsZU52dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpY29uXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MlwiXG4gIH0sXG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJzdGF0dXMtYmFyXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIm5hdlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImhlaWdodFwiOiBcIjg4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwibG9jYXRpb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI2MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjg4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmM1MGFcIlxuICB9LFxuICBcInl1eWluXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjBcIixcbiAgICBcImhlaWdodFwiOiBcIjg4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4OFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfSxcbiAgXCJ0b25nemhpXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjBcIixcbiAgICBcImhlaWdodFwiOiBcIjg4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4OFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfSxcbiAgXCJsb2NhdGlvbi1jaXR5LXRleHRcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4OFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNlwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfSxcbiAgXCJpbnB1dC1ib3hcIjoge1xuICAgIFwid2lkdGhcIjogXCI0NjVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MHVweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNjBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmNWY1ZjVcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiaW5wdXQtYm94LWlucHV0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJwbGFjZWhvbGRlckNvbG9yXCI6IFwiI2MwYzBjMFwiXG4gIH0sXG4gIFwic2VhcmNoXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzRcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwXCIsXG4gICAgXCJjb2xvclwiOiBcIiNjMGMwYzBcIlxuICB9XG59IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oY29tcG9uZW50cywgb3B0aW9ucy5jb21wb25lbnRzIHx8IHt9KVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9