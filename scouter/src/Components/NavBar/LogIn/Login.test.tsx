import LogIn from './LogIn';
import { User } from "../../../Entities/User";
import { shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from '../../../setupTests';
import { combineReducers, createStore } from 'redux';
import { Input } from 'reactstrap';


const mockStore = configureStore();
const mockDispatch = jest.fn();

describe('<LogIn />', () => {
    let wrapper: any;
    const props: any = {
        handleSubmit: jest.fn(),
    };

    it('defines the component', () => {
        wrapper = mount(
            <Provider store = {mockStore()}>
                <LogIn {...props} dispatch={mockDispatch}/>
            </Provider>
        );
        expect(wrapper).toBeDefined();
        expect(wrapper.find("Input")).toHaveLength(2);
    });
})