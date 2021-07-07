import { IPost } from "../Entities/Post";
//LogIn information
export interface Ilogin{
    username: string,
    //to be updated
}
//Page componets
export interface IPageState{
    PageID:string
    Posts:IPost[]
}

export interface IAppState {
    ILogin: Ilogin,
    IPageState:IPageState
}

export const initialState:IAppState = {
    ILogin:{
        username: 'Guest'
    },
    IPageState:{
        PageID:'Home',
        Posts:[
            {
                ParentID:'0',
                AuthorID:'test',
                PostID:'test',
                Timestamp: new Date(),
                Content:{
                    text:'This is the initial post',
                    Img:''
                    
                }
                
        }],
    }
}