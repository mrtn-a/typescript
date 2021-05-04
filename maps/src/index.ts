import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();

const company = new Company();

// create instance of CustomMap
const customMap = new CustomMap('map'); // calling a constructor

customMap.addMarker(user);
customMap.addMarker(company);
