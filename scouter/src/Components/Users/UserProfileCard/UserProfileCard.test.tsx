
import enzyme from '../../../setupTests';
import React from 'react'
import UserProfileCard from './UserProfileCard';

describe('<UserProfileCard />', () => {
    it('returns profile card', () => {
        const wrapper = enzyme.shallow(<UserProfileCard/>);
        expect(wrapper.find("div")).toHaveLength(1);
    })
})