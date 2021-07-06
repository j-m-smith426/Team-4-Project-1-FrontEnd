export interface IPost {
    ParentID:string,
    PostID:string,
    AuthorID:string,
    Timestamp:Date,
    Content:{
        text:string,
        Img:string      
        
    },
}