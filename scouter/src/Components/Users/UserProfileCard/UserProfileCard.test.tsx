import { shallow } from 'enzyme';
import React from 'react'
import UserProfileCard from './UserProfileCard';

describe('<UserProfileCard />', () => {
    it('returns profile card', () => {
        const wrapper = shallow(<UserProfileCard/>);
        expect(wrapper.find("div")).toHaveLength(1);
    })
})