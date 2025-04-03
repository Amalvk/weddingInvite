import "./Header.css";
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Sidebar from "./Sidebar";

import { Fade,Zoom } from 'react-awesome-reveal'

function Header(weddingInfo) {
    return (
        <div>
            <Fade direction="down" duration={1000} >
                <div className="mainHeadComponent">
                    <img className='headImage' src="https://fastly.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w" />

                    <div className="sidebarComponent"><Sidebar {...weddingInfo} /></div>
                    <div className="imageHeadName">
                        <div className="borderSvg" />

                        <div className="headImageName" >
                           {/* <div className="borderSvg" /> */}
                            <Fade direction="left" duration={2000} >
                                <div className="nameLeft"><div>{weddingInfo.groom.nameEng}</div></div>
                            </Fade>
                            <Zoom><FavoriteBorderIcon /></Zoom>
                            <div className="nameRight"><Fade direction="right" duration={2000} > <div>{weddingInfo.bride.nickName || weddingInfo.bride.nameEng}</div></Fade></div>
                        </div>
                        {/* <div className="borderSvg inverse" /> */}
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Header