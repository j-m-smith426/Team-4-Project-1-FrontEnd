export enum LoginActions{
    LOGIN = "Log In",
    LOGOUT = "Log out"

}

export interface ILoginActions {
    type: LoginActions,
    payload: {name:string}
}

export interface IAppActions extends ILoginActions{
    
}