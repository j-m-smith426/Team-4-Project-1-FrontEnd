import { render, shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from '../../setupTests';
import { Input } from 'reactstrap';
import NavBar from './NavBar';
import { IAppState } from "../../Redux/State";
import { Link } from 'react-router-dom';


const mockStore = configureStore();
const mockDispatch = jest.fn();

/*describe('<NavBar />', () => {
    it('routes to the Home page', () => {
        const wrapper = shallow(<NavBar/>);
        expect(wrapper.find().text()).toContain("Home");
    })
})
*/
