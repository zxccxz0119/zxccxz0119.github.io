class FBApi {
    constructor(options) {
        this.appId = options.appId;
        this.version = options.version || 'v6.0';
        this.isLogin = false;
        this.profile = {
            fbid: '',
            fbtoken: '',
            name: '',
            picture: ''
        }
        this.init();
    }
    init() {
        var self = this;
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        window.fbAsyncInit = function () {
            FB.init({
                appId: self.appId,
                cookie: true,
                xfbml: true,
                version: self.version
            });
            FB.AppEvents.logPageView();
            self.checkStatus();
        }
    }
    checkStatus() {
        var self = this;
        return new Promise((resolve) => {
            FB.getLoginStatus(function (response) {
                console.log(response)
                if (response.status === 'connected') {
                    console.log('已登入');
                    self.isLogin = true;
                    self.profile.fbtoken = response.authResponse.accessToken;
                    self.profile.fbid = response.authResponse.userID;
                } else {
                    console.log('未登入');
                    self.isLogin = false;
                }
                resolve(self.isLogin);
            });
        })
    }
    login(consoleShow = true) {
        var self = this;
        return new Promise((resolve) => {
            if (!self.isLogin) {
                FB.login(function (response) {
                    console.log(response)
                    if (response.authResponse) {
                        self.isLogin = true;
                        console.log('登入成功');
                    } else {
                        self.isLogin = false;
                        console.log('登入失敗');
                    }
                    resolve();
                });
            } else {
                console.log('您已登入');
                resolve();
            }
        })
    }
    getProfile() {
        var self = this;
        return new Promise((resolve) => {
            if (self.profile.name) {
                resolve(self.profile);
            } else if (self.isLogin) {
                FB.api('/me', 'GET', { "fields": "id,name,picture" }, function (res) {
                    console.log(res);
                    self.profile.name = res.name;
                    self.profile.picture = res.picture.data.url;
                    resolve(self.profile);
                }
                )
            } else {
                alert('請先登入');
            }
        })
    }
    share(link, alertOpen = true) {
        return new Promise((resolve) => {
            FB.ui({
                method: 'share',
                href: link,
            }, function (response) {
                if (response && !response.error_message) {
                    if (alertOpen) alert('成功分享');
                } else {
                    if (alertOpen) alert('分享失敗');
                }
                resolve();
            });
        })
    }
}