import { User } from './User';
import { Company } from './Company';
//PRO TIP: CMD + Click on things to get type defintions
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
