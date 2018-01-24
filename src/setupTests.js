import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "./__mocks__/image";
import "./__mocks__/portal";
import "./__mocks__/fetch";

configure({ adapter: new Adapter() });
