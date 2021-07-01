export interface Ilogin{
    username: string,
    //to be updated
}

export interface IAppState {
    ILogin: Ilogin,
}

export const initialState:IAppState = {
    ILogin:{
        username: 'Guest'
    }
}