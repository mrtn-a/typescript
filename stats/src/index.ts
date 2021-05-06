import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// // create an object that satisfies the 'DataReader' interface
// const cvsFileReader = new CsvFileReader('football.csv');

// // create an instance of MatchReader and pass inn something satisfying the 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
