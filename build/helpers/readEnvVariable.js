"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple function that reads variable from environment, no matter
 * if it's in window or process. Also capital latters are not
 * neccessary
 *
 * @param {string} name of env variable, can be in lowercase
 * @param {boolean} throwError optional parameter, if it's true, than
 *                  this function throws error when env variable is not defined
 * @return {string | null} string with value or null if doesn't exists
 */
var readEnvVariable = function (name, throwError) {
    name = name.toLowerCase();
    // tslint:disable-next-line:no-any
    var getValueFromEnv = function (env) {
        var e_1, _a;
        var keys = Object.keys(env);
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                if (key.toLowerCase() === name) {
                    return env[key];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    var result = null;
    if (process && process.env) {
        result = getValueFromEnv(process.env);
    }
    if (window && result === null) {
        // tslint:disable-next-line:no-any
        var w = window;
        if (w.env) {
            result = getValueFromEnv(w.env);
        }
        else if (w.process && w.process.env) {
            result = getValueFromEnv(w.process.env);
        }
    }
    var msgResult = 'EMPTY';
    if (result !== null && result.length > 0) {
        msgResult = result;
    }
    else {
        msgResult = 'NULL';
    }
    // tslint:disable-next-line:no-console
    console.log("%cTrying to read env %c" + name + "%c, result: %c" + msgResult, 'color: blue', 'color: blue; font-weight: bold', 'color: blue', 'color: black; font-weight: bold');
    if (throwError && result === null) {
        var msg = "%cEnvironment variable %c" + name.toUpperCase() + "%c is not defined!";
        // tslint:disable-next-line:no-console
        console.log(msg, 'color: red', 'color:red; font-weight: bold', 'color: red');
        throw new Error("Environment variable " + name.toUpperCase() + " is not defined!");
    }
    return result;
};
exports.default = readEnvVariable;
//# sourceMappingURL=readEnvVariable.js.map