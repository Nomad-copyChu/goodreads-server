"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cleanNullArgs = function (args) {
    var notNull = {};
    Object.keys(args).forEach(function (key) {
        if (args[key] !== null) {
            notNull[key] = args[key];
        }
    });
    return notNull;
};
exports.default = cleanNullArgs;