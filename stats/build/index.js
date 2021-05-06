"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
// create an object that satisfies the 'DataReader' interface
var cvsFileReader = new CsvFileReader_1.CvsFileReader('football.csv');
// create an instance of MatchReader and pass inn something satisfying the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(cvsFileReader);
matchReader.load();
console.log("Man United won " + manUnitedWins + " games");
