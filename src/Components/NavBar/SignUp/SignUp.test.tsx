import SignUp from './SignUp';
import { render, shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from '../../../setupTests';
import { Input } from 'reactstrap';

const mockStore = configureStore();
const mockDispatch = jest.fn();

describe('<SignUp />', () => {
    let wrapper: any;
    const props: any = {
        handleSubmit: jest.fn(),
    };

    it('defines the component', () => {
        wrapper = mount(
            <Provider store = {mockStore()}>
                <SignUp {...props} dispatch={mockDispatch}/>
            </Provider>
        );
        expect(wrapper).toBeDefined();
    });

    it('displays the dropdown inputs', () => {
        const open = wrapper.find("Dropdown");
        open.simulate("toggle");
        expect(open.containsAllMatchingElements([
            <Input>Username</Input>,
            <Input>Password</Input>,
            <Input>Email</Input>
        ]))
    })
})