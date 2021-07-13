import { ShallowWrapper } from "enzyme";
import enzyme from "../../../setupTests";
import UserFavorites from './UserFavorites'

describe("favorite anime", () => {
    it('routes', () =>{
        let wrapper: ShallowWrapper;
        wrapper = enzyme.shallow(<UserFavorites/>);
        expect(wrapper).toBeDefined();
    })
})