"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProjectApi = /*#__PURE__*/function () {
  function ProjectApi(tokenId, webtoken) {
    _classCallCheck(this, ProjectApi);

    this.baseReq;
    this.info;
    this.jwt;
    this.date;
    this.tokenId = tokenId;
    this.webtoken = webtoken;
    this.friendo_url = document.getElementById("appjs").dataset.site;
    this.init();
  }

  _createClass(ProjectApi, [{
    key: "init",
    value: function init() {
      var _this = this;

      // console.log(friendo_url);
      this.baseReq = axios.create({
        baseURL: this.friendo_url,
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: {}
      });
      this.baseReq.interceptors.request.use(function (data) {
        data.headers.Authorization = 'Bearer ' + _this.jwt;
        return data;
      }, function (err) {
        console.error(err);
        return Promise.reject(err);
      });
      this.baseReq.interceptors.response.use(function (res) {
        return res.data;
      }, function (err) {
        console.error('res Error:', err);
        return Promise.reject(err);
      });
    }
  }, {
    key: "token",
    value: function token() {
      var _this2 = this;

      return axios.get("".concat(this.friendo_url, "token/").concat(this.tokenId), {
        headers: {
          "webtoken": this.webtoken
        },
        dataType: "json"
      }).then(function (res) {
        _this2.jwt = res.data.token;
        _this2.info = {
          startDate: res.data.startDate,
          endDate: res.data.endDate,
          status: res.data.projectStatus
        };
        return _this2.checkPorject();
      });
    }
  }, {
    key: "get",
    value: function get(url, header, api_tag) {
      var _this3 = this;

      return this.token().then(function () {
        return _this3.baseReq.get(url, header).catch(function (err) {
          var ref = err.response;
          var tag = api_tag || 'api_tag'; // console.dir(ref); // print all relate data

          logSystem(0, {
            'api_url': ref.config.url,
            'request_data': JSON.stringify(ref.config.data),
            'statusText': ref.statusText,
            'message': ref.data.message,
            'httpStatus': ref.status
          }, tag);
        });
      });
    }
  }, {
    key: "post",
    value: function post(url, data, header, api_tag) {
      var _this4 = this;

      return this.token().then(function () {
        return _this4.baseReq.post(url, data, header).catch(function (err) {
          var ref = err.response;
          var tag = api_tag || 'api_tag'; // console.dir(ref); // print all relate data

          logSystem(0, {
            'api_url': ref.config.url,
            'request_data': JSON.stringify(ref.config.data),
            //TODO: formData 無法列出 JSON 結構，API 改版接受 JSON 格式後即可正常使用
            'statusText': ref.statusText,
            'message': ref.data.message,
            'httpStatus': ref.status
          }, tag);
        });
      });
    }
  }, {
    key: "checkPorject",
    value: function checkPorject() {
      // "活動狀態  => 0：活動不存在 1：尚未開始 2：進行中 3：專案結束 4: 活動結束，可查看獎項"
      switch (this.info.status) {
        case 0:
          return Promise.reject();

        case 1:
          return Promise.reject();

        case 3:
          alert("活動已結束");
          return Promise.reject();

        default:
          return Promise.resolve();
      }
    }
  }]);

  return ProjectApi;
}();