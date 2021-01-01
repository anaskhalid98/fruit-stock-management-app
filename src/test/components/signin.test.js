import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import SignIn from "../../components/pages/authentication/signin.component";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
const  AUTHENTICATION_INITIAL_STATE = {
	user: {},
	authenticated: false,
	message: ""
};
const store = mockStore(AUTHENTICATION_INITIAL_STATE);

describe('<SignIn />', () => {
	describe('render()', () => {
		test('renders the component', () => {
			const wrapper = shallow(<SignIn  store={store}/>);
			const component = wrapper.dive();

			expect(toJson(component)).toMatchSnapshot();
		});
	});
});
