import { mount, shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import HomeLeft from './HomeLeft'
import HomeMid from './HomeMid';
import HomeRight from './HomeRight';
import {Auth} from 'aws-amplify';

jest.mock('aws-amplify')

describe('Home Left component', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<HomeLeft />)
    it('contains correct row', () => {
        expect(rendered.find('#id')).toBeDefined();
    })
})

describe('Home Mid Component', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<HomeMid />)
    
    it('contains correct row', () => {
        
        expect(rendered.find('#id')).toBeDefined();      

    })
})
describe('Home Right Component', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<HomeRight />)
    
    it('contains correct row', () => {
      
        expect(rendered.find('#id')).toBeDefined();      

    })
})
