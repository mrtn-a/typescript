"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// // create an object that satisfies the 'DataReader' interface
// const cvsFileReader = new CsvFileReader('football.csv');
// // create an instance of MatchReader and pass inn something satisfying the 'DataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
