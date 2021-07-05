import { CreatePostActions, ICreatePostActions, ILoginActions, LoginActions } from "./Actions";
import { IAppState, initialState } from "./State";

export const Reducer = (state:IAppState = initialState, action: ILoginActions|ICreatePostActions):IAppState =>{
    const newState = {...state};
    switch(action.type){
        case LoginActions.LOGIN:
            newState.ILogin.username = action.payload.name;
            return newState;
        case LoginActions.LOGOUT:
            newState.ILogin.username = 'Guest';
            return newState;
        case CreatePostActions.CREATE:
            let newPosts = [...newState.IPageState.Posts, action.payload.Post]
            newState.IPageState.Posts = newPosts;
            return newState;
        default:
            return newState;
    }
}



