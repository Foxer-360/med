"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var R = _interopRequireWildcard(require("ramda"));

var _Loader = _interopRequireDefault(require("../../../lib/partials/Loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var DATASOURCE = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query datasource($id: ID!) {\n    datasource(where: { id: $id }) {\n      id\n      type\n      schema\n      datasourceItems {\n        id\n        slug\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"], ["\n  query datasource($id: ID!) {\n    datasource(where: { id: $id }) {\n      id\n      type\n      schema\n      datasourceItems {\n        id\n        slug\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"])));

var List =
/** @class */
function (_super) {
  __extends(List, _super);

  function List() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  List.prototype.render = function () {
    var _this = this;

    var data = this.props.data;
    console.log(data);

    if (Array.isArray(data)) {
      return this.props.children({
        data: data
      });
    } // In case that data isn't array and contain datasourceId try to fetch datasource with his items


    if (data && data.datasourceId) {
      return React.createElement(_reactApollo.Query, {
        query: DATASOURCE,
        variables: {
          id: data.datasourceId
        }
      }, function (queryData) {
        var dataShape = data.data,
            error = data.error,
            loading = data.loading; // Map datasourceItem data to placeholders

        var datasourceItems = (queryData.data.datasource && queryData.data.datasource.datasourceItems || []).map(function (item) {
          // Iterate through dataShape 
          // in case that value inside some of keys is string
          // try to find key inside item and replace value with it
          var res = __assign({}, dataShape);

          if (data.orderBy) {
            res.orderBy = _this.replaceWithSourceItemValues(data.orderBy, item);
          }

          if (data.filterBy) {
            res.filterBy = _this.replaceWithSourceItemValues(data.filterBy, item);
          }

          Object.keys(res).forEach(function (key) {
            if (typeof res[key] === 'string') {
              var replaced = _this.replaceWithSourceItemValues(res[key], item);

              res[key] = replaced;
            }
          });
          return res;
        }).filter(function (item) {
          return !item.filterBy || item.filterBy.toLowerCase().includes(data.includes.toLowerCase());
        });

        if (error) {
          return React.createElement("span", null, "Error...");
        }

        if (loading) {
          return React.createElement(_Loader.default, null);
        }

        return _this.props.children(__assign({}, queryData, {
          data: data.orderBy ? datasourceItems.sort(function (a, b) {
            if (data.order === 'DESC') {
              if (a.orderBy > b.orderBy) {
                return -1;
              }

              {
                if (a.orderBy < b.orderBy) {
                  return 1;
                }
              }
              return 0;
            }

            if (a.orderBy < b.orderBy) {
              return -1;
            }

            {
              if (a.orderBy > b.orderBy) {
                return 1;
              }
            }
            return 0;
          }).map(function (item) {
            delete item.orderBy;
            return item;
          }) : datasourceItems
        }));
      });
    }

    return this.props.children({
      data: []
    });
  };

  List.prototype.replaceWithSourceItemValues = function (source, item) {
    var regex = /%([^%]*)%/g;
    var result;
    var replaced = String(source);

    while (result = regex.exec(source)) {
      if (result[1]) {
        try {
          var searchKeys = result[1].split(',');

          if (Array.isArray(searchKeys) && searchKeys.length > 0) {
            var getValueFromDatasourceItems = R.path(searchKeys);
            var replacement = getValueFromDatasourceItems(item.content);

            if (replacement) {
              replaced = replaced.replace(result[0], replacement);
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    }

    return replaced;
  };

  return List;
}(React.Component);

var _default = List;
exports.default = _default;
var templateObject_1;