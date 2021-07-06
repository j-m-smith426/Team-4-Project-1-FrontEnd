import LogIn from './LogIn';
import { User } from "../../../Entities/User";
import { shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from '../../../setupTests';

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

/*

describe('Login component Tests', () =>{
    let user:User;
    let rendered:ShallowWrapper;
    let isValid: (state:boolean) => void;

    beforeEach(() => {
        user = {
            Name: "cheeseburger",
            Password: "u2m588rsfOp#",
        }
    
        rendered = shallow(<LogIn User={user}/>)    
    });
    
    //Tests for 2 Input Components
    it('Both username and password input fields render', () => {
        const row = rendered.find("Input");
        expect(row).toHaveLength(2);
    })

    //Tests to see if input changes provided successful login
    //! Not working at the moment
    it('Successful login', () => {
        const namae = rendered.find("#uname");
        const pass = rendered.find("#pword");
        namae.simulate("change", {target: {name: "Name", value: user.Name}});
        pass.simulate("change", {target: {name: "Password", value: user.Password}});
        
        const login = rendered.find("#uid");
        login.simulate("click");
        rendered.update();
        const row = rendered.find("#login");
        expect(row).toBe(user.Name);
    })
})
*/