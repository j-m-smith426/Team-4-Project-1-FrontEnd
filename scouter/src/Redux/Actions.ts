import { IPost } from "../Entities/Post";

export enum LoginActions{
    LOGIN = "Log In",
    LOGOUT = "Log out"

}

export enum CreatePostActions{
    CREATE = 'Create Post',
    ADD = 'Add Comment'
}

export interface ICreatePostActions{
    type: CreatePostActions,
    payload: {
        Post:IPost
    }
}

export interface ILoginActions {
    type: LoginActions,
    payload: {name:string}
}

export interface IAppActions extends ILoginActions{
    
}