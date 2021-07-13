import { shallow } from "../../../setupTests";
import AnimeCardWrapper from "./AnimeCardWrapper";

describe('Card Wrapper', () => {
    it('Routes correctly', () => {
        const component = shallow(<AnimeCardWrapper/>);
        expect(component).toBeDefined();
    })
})