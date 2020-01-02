class YtApi {
    constructor() {
        this.videoList = {};
        this.init()
    }
    init() {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    ready() {
        var _self = this;
        Object.keys(_self.videoList).map(function (objectKey) {
            var ytvideo = _self.videoList[objectKey];
            ytvideo.video = new YT.Player(ytvideo.element, {
                height: ytvideo.height,
                width: ytvideo.width,
                videoId: ytvideo.videoId,
                host: 'https://www.youtube.com',
            });
        });
    }
    addVideo(options) {
        var _self = this;
        _self.videoList[options.name] = {
            element: options.element,
            height: options.height || '600',
            width: options.width || '900',
            videoId: options.videoId,
        }
    }
    playVideo(name) {
        var _self = this;
        _self.videoList[name].video.playVideo();
    }
    stopVideo(name) {
        var _self = this;
        _self.videoList[name].video.stopVideo();
    }
    pauseVideo(name) {
        var _self = this;
        _self.videoList[name].video.pauseVideo()
    }
}
