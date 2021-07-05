import React , {useState} from 'react'
import'./Carousel.css'
import {images} from '../../Helpers/CarouselData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function Carousel() {

    const [currImg, setCurrImg]=useState(0)
    return (
        <div className="mycarousel">
            <div
            className="mycarouselInner"        
            >

             <div className="left" onClick={()=>{
                 currImg>0 && setCurrImg(currImg -1);
             }}>
             <ArrowBackIosIcon style={{ fontSize:30}}/>
             </div>
             <div className="center" style={{backgroundImage:`url(${images[currImg].img})`}}>
                 <h1>{images[currImg].title}</h1>
                 <p>{images[currImg].subTitle}</p>


             </div>
             <div className="right"              
                onClick={()=>{
                 currImg <images.length-1 && setCurrImg(currImg +1);
             }}>
             <ArrowForwardIosIcon style={{ fontSize:30}}/>  
             </div> 
            </div>
        </div>
    )
}

export default Carousel
