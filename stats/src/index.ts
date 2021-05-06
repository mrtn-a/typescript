import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CvsFileReader } from './CsvFileReader';

// create an object that satisfies the 'DataReader' interface
const cvsFileReader = new CvsFileReader('football.csv');

// create an instance of MatchReader and pass inn something satisfying the 'DataReader' interface
const matchReader = new MatchReader(cvsFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games`);
