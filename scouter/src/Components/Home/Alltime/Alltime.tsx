import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { getSSImg } from './SlideShowImgObj';
import './Alltime.css'

const items = [

 getSSImg('A DragonBallZ/DBZ.jpg', 'Enjoy a Masterpeice'),
 getSSImg('A Onepiece/onepiece.jpg', 'Go On a Journey'),
 getSSImg('A DeamonSlayer/DeamonSlayer.jpg', "Enjoy a thrilling tale")
]

const Alltime= () =><UncontrolledCarousel items={items} />
  

export default Alltime;
