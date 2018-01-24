import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "./__mocks__/image";
import "./__mocks__/portal";

configure({ adapter: new Adapter() });
