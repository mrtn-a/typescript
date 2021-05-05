"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateSringToDate = void 0;
var dateSringToDate = function (dateSring) {
    var dateParts = dateSring.split('/').map(function (value) {
        return parseInt(value); // turn string into number
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateSringToDate = dateSringToDate;
