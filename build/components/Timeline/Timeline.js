var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Swipeable from 'react-swipeable';
import Media from '@source/partials/Media';
var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    function Timeline(props) {
        var _this = _super.call(this, props) || this;
        _this.translateTimeline = function (ammount) {
            _this.setState({
                x: _this.state.x + ammount,
                limitLeft: false,
                limitRight: false,
            }, function () {
                var width = _this.timeline.current && _this.timeline.current.getBoundingClientRect().width;
                if (_this.state.x >= 0) {
                    _this.setState({
                        limitLeft: true,
                    });
                }
                if (_this.state.x < 0) {
                    var offset = _this.state.x * -1;
                    if (offset > width / 3) {
                        _this.setState({
                            limitRight: true,
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
        _this.renderPoints = function (items) {
            var point = React.createElement("div", { className: 'point' });
            var points = [];
            var _loop_1 = function (i) {
                var positionItem = items.find(function (item) { return Math.round((item.position * 60) / 100) === i; });
                if (positionItem) {
                    points.push(React.createElement("div", { className: "point " + ('point--' + positionItem.color) },
                        React.createElement("div", { className: "point__content " + (items.indexOf(positionItem) % 2 === 0 ? 'point__content--top' : 'point__content--bottom') },
                            positionItem.icon && React.createElement(Media, { data: positionItem.icon, type: "image" }),
                            React.createElement("p", null, positionItem.descriptionA),
                            React.createElement("p", null, positionItem.descriptionB),
                            React.createElement("h5", null, positionItem.name),
                            React.createElement("p", { className: 'year' }, positionItem.year))));
                }
                else {
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
            limitRight: false,
        };
        return _this;
    }
    Timeline.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, items = _a.items;
        return (React.createElement("div", { className: 'container' },
            React.createElement("section", { className: 'timelineSection' },
                title && React.createElement("h2", { className: 'gradientHeading' }, title),
                React.createElement("div", { className: 'timeline' },
                    !this.state.limitLeft && (React.createElement("div", { className: 'timeline__arrow  timeline__arrow--left', onClick: function (e) { return _this.arrowClick(e, 'left'); } })),
                    React.createElement("div", { className: 'timeline__blur  timeline__blur--left' }),
                    React.createElement("div", { className: 'timeline__cont', onMouseDown: function (e) { return _this.handleDrag(e); } },
                        React.createElement(Swipeable, { trackMouse: true, preventDefaultTouchmoveEvent: true, onSwipedLeft: function (e, deltaX, velocity) { return _this.handleSwipe(e, 'left', deltaX, velocity); }, onSwipedRight: function (e, deltaX, velocity) { return _this.handleSwipe(e, 'right', deltaX, velocity); } },
                            React.createElement("div", { className: 'timeline__holder', ref: this.timeline, style: { transform: "translate3d(" + (this.state.x + 'px') + ",-7px,0)" } }, this.renderPoints(items)))),
                    !this.state.limitRight && (React.createElement("div", { className: 'timeline__arrow  timeline__arrow--right', onClick: function (e) { return _this.arrowClick(e, 'right'); } })),
                    React.createElement("div", { className: 'timeline__blur timeline__blur--right', onClick: function (e) { return _this.arrowClick(e, 'right'); } })))));
    };
    return Timeline;
}(React.Component));
export default Timeline;
//# sourceMappingURL=Timeline.js.map