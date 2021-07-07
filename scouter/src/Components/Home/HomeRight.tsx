import React, { useEffect } from "react";
import { Row, Card, CardImg } from "reactstrap";
import { Storage } from "aws-amplify";


    
    


const HomeRight:React.FC = (props) => {

  
        let img = 'Advertisement/crunchyroll.jpg';
    let body = new FileReader();
    let result:any;
    body.onload = (event) =>{
        result = body.result;
        let cardimg = document.getElementById('Add1') as HTMLImageElement
        cardimg.src = result;
    };
    if(img){
        Storage.get(img,{download:true}).then(p => {
           let obj = p as any
           body.readAsDataURL(obj.Body);
        });
    }
    

    return(
        <div>
            
                <Card>
                    <CardImg id='Add1'/>
                </Card>
            
        </div>
    )
} 
export default HomeRight;
