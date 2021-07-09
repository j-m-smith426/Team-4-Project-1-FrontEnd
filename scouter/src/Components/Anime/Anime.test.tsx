import { Provider } from 'react-redux';
import AnimePageLeft from './AnimeLeft';
import AnimePageMid from './AnimeMid';

import AnimeList from './AnimeList';

import enzyme from '../../setupTests';
import { ShallowWrapper } from 'enzyme';


describe('Anime Left component', () => {
    let rendered: ShallowWrapper;
    rendered = enzyme.shallow(<AnimePageLeft />)
    it('contains correct row', () => {
        expect(rendered.find('#id')).toBeDefined();
    })
})

describe('Anime Mid Component', () => {
    let rendered: ShallowWrapper;
    rendered = enzyme.shallow(<AnimePageMid />)
    

    it('contains correct row', () => {
        
        expect(rendered.find('#id')).toBeDefined();      

    })
})
describe('Anime ListComponent', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<AnimeList />)
    
    it('contains correct row', () => {
      
        expect(rendered.find('#id')).toBeDefined();      

    

    })
})