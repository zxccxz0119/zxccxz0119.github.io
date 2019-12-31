class scrollCheck {
    constructor(options) {
        this.items = document.getElementsByClassName(options.classname);
        this.repeat = options.repeat || false;
        this.rules = [];
    }
    init() {
        var _self = this;
        _self.action()
        window.addEventListener('scroll', function (e) {
            _self.action()
        });
    }
    action() {
        var _self = this;

        _self.caseIssue()
        for (var i = 0; i < _self.rules.length; i++) {
            _self.rules[i]()
        }
    }
    caseIssue() {
        var _self = this;
        var height = window.scrollY;
        var dis = window.innerHeight / 3;
        for (var i = 0; i < _self.items.length; i++) {
            if (i == _self.items.length - 1) {
                // for last item
                if (height >= _self.items[i].offsetTop - dis) {
                    _self.items[i].classList.add('active');
                } else if (_self.repeat) {
                    _self.items[i].classList.remove('active');
                }
            } else {
                if (height >= _self.items[i].offsetTop - dis && height <= _self.items[i + 1].offsetTop - dis) {
                    _self.items[i].classList.add('active');
                } else if (_self.repeat) {
                    _self.items[i].classList.remove('active');
                }
            }
        }
    }
    setPoint(options) {
        var _self = this;
        var repeat = options.repeat || false
        var iRange = options.range || 2
        var thing = document.getElementById(options.id)
        var dis = window.innerHeight / iRange;

        var rule = function () {
            if (_self.items[options.stay - 1].offsetTop - dis <= window.scrollY && window.scrollY <= _self.items[options.stay].offsetTop - dis) {
                thing.classList.add('active');
            } else if (repeat) {
                thing.classList.remove('active');
            }
        }
        _self.rules.push(rule)
    }
}