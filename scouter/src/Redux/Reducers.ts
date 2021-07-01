import { IAppActions, LoginActions } from "./Actions";
import { IAppState, initialState } from "./State";

export const logINReducer = (state:IAppState = initialState, action: IAppActions):IAppState =>{
    const newState = {...state};
    switch(action.type){
        case LoginActions.LOGIN:
             newState.ILogin.username = action.payload.name;
            return newState;
        case LoginActions.LOGOUT:
            newState.ILogin.username = 'Guest';
            return newState;
        default:
            return newState;
    }
}