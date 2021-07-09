import { mount, shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import AnimePageLeft from './AnimeLeft';
import AnimePageMid from './AnimeMid';

describe('Anime Left component', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<AnimePageLeft />)
    it('contains correct row', () => {
        expect(rendered.find('#id')).toBeDefined();
    })
})

describe('Anime Mid Component', () => {
    let rendered: ShallowWrapper;
    rendered = shallow(<AnimePageMid />)
    
    it('calls axios to get posts', () => {
        const axios:Function = jest.createMockFromModule('axios');
        expect(rendered).toBeCalledWith(axios);        

    })
})