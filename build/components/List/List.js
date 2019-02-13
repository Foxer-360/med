var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import * as R from 'ramda';
import Loader from '@source/partials/Loader';
import { adopt } from 'react-adopt';
var DATASOURCE = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query datasource($id: ID!) {\n    datasource(where: { id: $id }) {\n      id\n      type\n      schema\n      datasourceItems {\n        id\n        slug\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"], ["\n  query datasource($id: ID!) {\n    datasource(where: { id: $id }) {\n      id\n      type\n      schema\n      datasourceItems {\n        id\n        slug\n        content\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"])));
var GET_CONTEXT = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  {\n    pageData @client\n    languageData @client\n  }\n"], ["\n  {\n    pageData @client\n    languageData @client\n  }\n"])));
var GET_ALL_PAGES = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query localizedPages($languageId: ID!) {\n    pages {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { language: { id: $languageId } }) {\n        id\n        name\n        createdAt\n        content\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"], ["\n  query localizedPages($languageId: ID!) {\n    pages {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { language: { id: $languageId } }) {\n        id\n        name\n        createdAt\n        content\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"])));
var AllPagesComposedQuery = adopt({
    getContext: function (_a) {
        var render = _a.render;
        return React.createElement(Query, { query: GET_CONTEXT }, function (_a) {
            var data = _a.data;
            return render(data);
        });
    },
    allPages: function (_a) {
        var render = _a.render, languageData = _a.getContext.languageData;
        console.log('Blogholder language data:', languageData.id);
        if (!languageData) {
            return render({ loading: true });
        }
        return (React.createElement("div", null,
            React.createElement(Query, { query: GET_ALL_PAGES, variables: { languageId: languageData.id } }, function (data) {
                return render(data);
            })));
    },
});
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.datasourcesList = function (data) {
            return (React.createElement(Query, { query: DATASOURCE, variables: {
                    id: data.datasourceId
                } }, function (queryData) {
                var dataShape = data.data, error = data.error, loading = data.loading;
                // Map datasourceItem data to placeholders
                var datasourceItems = ((queryData.data.datasource && queryData.data.datasource.datasourceItems) || [])
                    .map(function (item) {
                    // Iterate through dataShape 
                    // in case that value inside some of keys is string
                    // try to find key inside item and replace value with it
                    var res = __assign({}, dataShape);
                    if (data.orderBy) {
                        res.orderBy = _this.replaceWithSourceItemValues(data.orderBy, item.content);
                    }
                    if (data.filters) {
                        res.filters = data.filters.map(function (filter) {
                            var parsedFilter = __assign({}, filter);
                            parsedFilter.filterBy = _this.replaceWithSourceItemValues(filter.filterBy, item.content);
                            return parsedFilter;
                        });
                    }
                    // Iterate through keys and in case that value inside key is string value 
                    // apply replace function which replace dynamic placeholders with dynamic source item values.
                    // In case that value of key is url and contains dynamic slug with same entity that we sourcing,
                    // replace it with dynamic source item slug.
                    Object.keys(res).forEach(function (key) {
                        if (typeof res[key] === 'string') {
                            var replaced = _this.replaceWithSourceItemValues(res[key], item.content);
                            res[key] = replaced;
                        }
                        else if (res[key].url) {
                            var regex = /ds\:(\w+)/g;
                            var result = void 0;
                            var newUrl = String(res[key].url);
                            while (result = regex.exec(res[key].url)) {
                                if (result[1] && result[1] === queryData.data.datasource.type.toLowerCase()) {
                                    newUrl = newUrl.replace(result[0], item.slug);
                                }
                            }
                            if (newUrl !== res[key].url) {
                                res[key] = { url: newUrl, dynamic: true };
                            }
                        }
                    });
                    return res;
                })
                    .filter(function (item) {
                    return !item.filters ||
                        !item.filters
                            .some(function (filter) {
                            return !filter.filterBy.toLowerCase()
                                .includes(filter && filter.includes && filter.includes.toLowerCase());
                        });
                })
                    .filter(function (item, i) { return !data.limit || i < data.limit; });
                if (error) {
                    return React.createElement("span", null, "Error...");
                }
                if (loading) {
                    return React.createElement(Loader, null);
                }
                return _this.props.children({
                    data: data.orderBy ?
                        datasourceItems
                            .sort(function (a, b) {
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
                        })
                            .map(function (item) {
                            delete item.orderBy;
                            return item;
                        })
                        :
                            datasourceItems
                });
            }));
        };
        return _this;
    }
    List.prototype.render = function () {
        var _this = this;
        var data = this.props.data;
        console.log(data);
        if (Array.isArray(data)) {
            return this.props.children({ data: data });
        }
        // In case that data isn't array and contain datasourceId try to fetch datasource with his items
        if (data && data.datasourceId) {
            return this.datasourcesList(data);
        }
        if (data && data.sourceType === 'pages') {
            return (React.createElement("section", { className: 'categoryContent' },
                React.createElement(AllPagesComposedQuery, null, function (_a) {
                    var _b = _a.allPages, allPagesData = _b.data, allPagesLoading = _b.loading, allPagesError = _b.error, _c = _a.getContext, languageData = _c.languageData, pageData = _c.pageData;
                    if (allPagesLoading || !allPagesData || !languageData) {
                        return React.createElement(Loader, null);
                    }
                    if (allPagesError) {
                        return "Error...";
                    }
                    var pages = allPagesData.pages;
                    var pagesWithTag = pages
                        .filter(function (p) {
                        if (!(p.translations && p.translations.length > 0)) {
                            return false;
                        }
                        if (data.tagIds && !p.tags.some(function (t) { return data.tagIds.some(function (tagId) { return t.id === tagId; }); })) {
                            return false;
                        }
                        if (pageData && p.id === pageData.id) {
                            return false;
                        }
                        return true;
                    })
                        .map(function (p) {
                        var res = __assign({}, data.data);
                        var item = {
                            page: {
                                name: (p && p.translations && p.translations[0] && p.translations[0].name) || ''
                            }
                        };
                        console.log(item);
                        if (data.orderBy) {
                            res.orderBy = _this.replaceWithSourceItemValues(data.orderBy, item);
                        }
                        if (data.filters) {
                            res.filters = data.filters.map(function (filter) {
                                var parsedFilter = __assign({}, filter);
                                parsedFilter.filterBy = _this.replaceWithSourceItemValues(filter.filterBy, item);
                                return parsedFilter;
                            });
                        }
                        Object.keys(res).forEach(function (key) {
                            if (typeof res[key] === 'string') {
                                var replaced = _this.replaceWithSourceItemValues(res[key], item);
                                res[key] = replaced;
                            }
                            else if (res[key].pageSourcedUrl) {
                                res[key] = { pageId: p.id };
                            }
                        });
                        return res;
                    })
                        .filter(function (item) {
                        return !item.filters ||
                            !item.filters
                                .some(function (filter) {
                                return !filter.filterBy.toLowerCase()
                                    .includes(filter && filter.includes && filter.includes.toLowerCase());
                            });
                    })
                        .filter(function (item, i) { return !data.limit || i < data.limit; });
                    return _this.props.children({
                        data: data.orderBy ?
                            pagesWithTag
                                .sort(function (a, b) {
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
                            })
                                .map(function (item) {
                                delete item.orderBy;
                                return item;
                            })
                            :
                                pagesWithTag
                    });
                })));
        }
        return this.props.children({ data: [] });
    };
    List.prototype.replaceWithSourceItemValues = function (source, item) {
        var regex = /%([^%]*)%/g;
        var result;
        var replaced = String(source);
        while ((result = regex.exec(source))) {
            if (result[1]) {
                try {
                    var searchKeys = result[1].split(',');
                    if (Array.isArray(searchKeys) && searchKeys.length > 0) {
                        var getValueFromDatasourceItems = R.path(searchKeys);
                        var replacement = getValueFromDatasourceItems(item);
                        if (replacement) {
                            replaced = replaced.replace(result[0], replacement);
                        }
                        else {
                            replaced = replaced.replace(result[0], '');
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
        return replaced;
    };
    return List;
}(React.Component));
export default List;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=List.js.map