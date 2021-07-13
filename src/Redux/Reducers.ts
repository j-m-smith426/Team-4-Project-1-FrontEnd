import { CreatePostActions, ICreatePostActions, ILoginActions, ISwitchPageActions, LoginActions, SwitchPageAction } from "./Actions";
import { IAppState, initialState } from "./State";

export const Reducer = (state:IAppState = initialState, action: ILoginActions|ICreatePostActions|ISwitchPageActions):IAppState =>{
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
        case CreatePostActions.Load:
            newState.IPageState.Posts = action.payload.Posts
            return newState
        case SwitchPageAction.UPDATE:
            newState.IPageState.PageID = action.payload.name;
            return newState;
        default:
            return newState;
    }
}



