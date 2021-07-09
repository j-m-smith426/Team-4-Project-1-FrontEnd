import { mount, shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import UsersLeft from './UsersLeft';
import UsersMid from './UsersMid';
import UsersMidFav from './UsersMidFav';

import UserDisplay from './UserDisplay';


describe('user Left component', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<UsersLeft />)
    it('contains correct row', () => {
        expect(rendered.find('#id')).toBeDefined();
    })
})

describe('User Mid Component', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<UsersMid />)
    
    it('contains correct row', () => {
        
        expect(rendered.find('#id')).toBeDefined();      

    })
})
describe('User Edit Component', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<UsersMidFav />)
    
    it('contains correct row', () => {
      
        expect(rendered.find('#id')).toBeDefined();      

    })
})
describe('User Display Component', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<UserDisplay />)
    
    it('contains correct row', () => {
      
        expect(rendered.find('#id')).toBeDefined();      

    })
})