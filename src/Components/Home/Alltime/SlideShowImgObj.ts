import {Storage} from 'aws-amplify'
import { randomInt } from 'crypto';

export interface ssObj{
    src: string,
    altText: string,
    caption: string,
    header: string,
    key: string,    
}
export  function getSSImg(key:string, caption:string):ssObj {
    let name = key.split('\/')[0].substr(2);
    let ssObj:ssObj = {
        src: name,
        altText:name,
        caption,
        header:name,
        key,
    }
    if(key){
    console.log(ssObj);
        let body = new FileReader();
        let result:any;
        body.onload = (event) =>{
            result = body.result;            
            ssObj.src = result;
            console.log(ssObj);            
        };        
            Storage.get(key,{download:true}).then(p => {
               let obj = p as any
               body.readAsDataURL(obj.Body);
            });
        }
    console.log(ssObj);
    return ssObj;
    }