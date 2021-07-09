import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { getSSImg } from './SlideShowImgObj';
import './Alltime.css'

let items = [

 getSSImg('A DragonBallZ/DBZ.jpg', 'Enjoy a Masterpeice'),
 getSSImg('A Onepiece/onepiece.jpg', 'Go On a Journey'),
 getSSImg('A DeamonSlayer/DeamonSlayer.jpg', "Enjoy a thrilling tale"),
 getSSImg('A Naruto/naruto.jpg','An enjoyable adventure for all ages'),
 getSSImg('A AttackOnTitan/atot.jpg','A strange tale with twists at every turn')

]

const Alltime= () =><UncontrolledCarousel items={items} />
  

export default Alltime;
