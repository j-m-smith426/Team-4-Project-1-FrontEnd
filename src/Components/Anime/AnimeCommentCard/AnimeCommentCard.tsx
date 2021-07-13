import React, { useState } from 'react'

import {LoadComments} from "../../LoadCommands/LoadComments"
import  PostCreate  from '../../Post/PostCreate';
function AnimeCommentCard() {
    
    return (
        
        <div className="animeCommentCard">
            <div className="animeCommentCardInner">
               
               
                <fieldset className="animeCommentsBox">
                   
                    
                        <PostCreate/>

                    
                </fieldset>
                
                
            </div>
            
        </div>
    )
}
export default AnimeCommentCard