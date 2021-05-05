import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CvsFileReader } from './CsvFileReader';

// create an object that satisfies the 'DataReader' interface
const cvsFileReader = new CvsFileReader('football.csv');

// create an instance of MatchReader and pass inn something satisfying the 'DataReader' interface
const matchReader = new MatchReader(cvsFileReader);
matchReader.load();

let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
