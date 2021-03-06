"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testEmail = function (email) {
    // tslint:disable-next-line:max-line-length
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
exports.default = testEmail;
//# sourceMappingURL=testEmail.js.map