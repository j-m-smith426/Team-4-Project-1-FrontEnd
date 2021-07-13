import LogIn from './LogIn';
import { User } from "../../../Entities/User";
import { shallow, ShallowWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from '../../../setupTests';
import { combineReducers, createStore } from 'redux';
import { Input } from 'reactstrap';
import { SingleBedTwoTone } from '@material-ui/icons';
import sinon from 'sinon';
import { useState } from 'react';


const mockStore = configureStore();
const mockDispatch = jest.fn();

describe('<LogIn />', () => {
    let wrapper: any;
    const props: any = {
        handleSubmit: jest.fn(),
    };

    it('defines the component', () => {
        wrapper = mount(
            <Provider store = {mockStore()}>
                <LogIn {...props} dispatch={mockDispatch}/>
            </Provider>
        );
        expect(wrapper).toBeDefined();
        expect(wrapper.find("Input")).toHaveLength(2);
    });

    it('handles change to input', () => {
        wrapper = mount(
            <Provider store = {mockStore()}>
                <LogIn {...props} dispatch={mockDispatch}/>
            </Provider>
        );
        let signin = wrapper.find("NavLink");
        signin.simulate('click');
        expect(signin).toBeUndefined(); 
    })
})