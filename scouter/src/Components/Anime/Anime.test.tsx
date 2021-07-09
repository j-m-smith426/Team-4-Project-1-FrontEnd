import { Provider } from 'react-redux';
import AnimePageLeft from './AnimeLeft';
import AnimePageMid from './AnimeMid';
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
    
    it('calls axios to get posts', () => {
        const axios:Function = jest.createMockFromModule('axios');
        let p = rendered.find("p");
        expect(p).toBeCalledWith(axios);        

    })
})