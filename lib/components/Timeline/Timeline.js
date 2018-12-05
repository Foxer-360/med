"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactSwipeable = _interopRequireDefault(require("react-swipeable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Timeline =
/** @class */
function (_super) {
  __extends(Timeline, _super);

  function Timeline(props) {
    var _this = _super.call(this, props) || this;

    _this.translateTimeline = function (ammount) {
      _this.setState({
        x: _this.state.x + ammount,
        limitLeft: false,
        limitRight: false
      }, function () {
        var width = _this.timeline.current && _this.timeline.current.getBoundingClientRect().width;

        if (_this.state.x >= 0) {
          _this.setState({
            limitLeft: true
          });
        }

        if (_this.state.x < 0) {
          var offset = _this.state.x * -1;

          if (offset > width / 3) {
            _this.setState({
              limitRight: true
            });
          }
        }
      });
    };

    _this.handleSwipe = function (e, direction, deltaX, velocity) {
      var ammount = deltaX < 0 ? deltaX * -1 : deltaX;

      if (direction === 'left') {
        ammount = ammount * -1;
      }

      _this.translateTimeline(ammount);
    };

    _this.handleDrag = function (e) {
      e.preventDefault();
    };

    _this.arrowClick = function (e, direction) {
      var ammount = 300;

      if (direction === 'right') {
        ammount = ammount * -1;
      }

      _this.translateTimeline(ammount);
    };

    _this.renderPoints = function () {
      var items = [{
        name: 'Budějovická',
        year: '2008',
        position: 10,
        color: 'blue',
        descriptionA: 'Otevřena',
        descriptionB: 'Poliklinika',
        top: false,
        icon: '/assets/medicon/images/hospitalIcon.png'
      }, {
        name: 'Vysočanská',
        year: '2013',
        position: 50,
        color: 'red',
        descriptionA: 'Otevřena',
        descriptionB: '3. poliklinika',
        top: true,
        icon: '/assets/medicon/images/heartIcon.png'
      }, {
        name: 'Vysočanská',
        year: '2014',
        position: 90,
        color: 'green',
        descriptionA: 'Otevřeno',
        descriptionB: 'Mamacentrum',
        top: false,
        icon: '/assets/medicon/images/pillsIcon.png'
      }];
      var point = React.createElement("div", {
        className: 'point'
      });
      var points = [];

      var _loop_1 = function _loop_1(i) {
        var positionItem = items.find(function (item) {
          return Math.round(item.position * 60 / 100) === i;
        });

        if (positionItem) {
          points.push(React.createElement("div", {
            className: "point " + ('point--' + positionItem.color)
          }, React.createElement("div", {
            className: "point__content " + (positionItem.top ? 'point__content--top' : 'point__content--bottom')
          }, React.createElement("img", {
            src: positionItem.icon
          }), React.createElement("p", null, positionItem.descriptionA), React.createElement("p", null, positionItem.descriptionB), React.createElement("h5", null, positionItem.name), React.createElement("p", {
            className: 'year'
          }, positionItem.year))));
        } else {
          points.push(point);
        }
      };

      for (var i = 0; i < 60; i++) {
        _loop_1(i);
      }

      return points;
    };

    _this.timeline = React.createRef();
    _this.state = {
      x: 0,
      limitLeft: false,
      limitRight: false
    };
    return _this;
  }

  Timeline.prototype.render = function () {
    var _this = this;

    return React.createElement("div", {
      className: 'container'
    }, React.createElement("section", {
      className: 'timelineSection'
    }, React.createElement("h3", null, "Casova Osa"), React.createElement("div", {
      className: 'timeline'
    }, !this.state.limitLeft && React.createElement("div", {
      className: 'timeline__arrow  timeline__arrow--left',
      onClick: function onClick(e) {
        return _this.arrowClick(e, 'left');
      }
    }), React.createElement("div", {
      className: 'timeline__blur  timeline__blur--left'
    }), React.createElement("div", {
      className: 'timeline__cont',
      onMouseDown: function onMouseDown(e) {
        return _this.handleDrag(e);
      }
    }, React.createElement(_reactSwipeable.default, {
      trackMouse: true,
      preventDefaultTouchmoveEvent: true,
      onSwipedLeft: function onSwipedLeft(e, deltaX, velocity) {
        return _this.handleSwipe(e, 'left', deltaX, velocity);
      },
      onSwipedRight: function onSwipedRight(e, deltaX, velocity) {
        return _this.handleSwipe(e, 'right', deltaX, velocity);
      }
    }, React.createElement("div", {
      className: 'timeline__holder',
      ref: this.timeline,
      style: {
        transform: "translate3d(" + (this.state.x + 'px') + ",-7px,0)"
      }
    }, this.renderPoints()))), !this.state.limitRight && React.createElement("div", {
      className: 'timeline__arrow  timeline__arrow--right',
      onClick: function onClick(e) {
        return _this.arrowClick(e, 'right');
      }
    }), React.createElement("div", {
      className: 'timeline__blur timeline__blur--right',
      onClick: function onClick(e) {
        return _this.arrowClick(e, 'right');
      }
    }))));
  };

  return Timeline;
}(React.Component);

var _default = Timeline;
exports.default = _default;