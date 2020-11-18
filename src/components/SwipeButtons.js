import React from 'react'
import '../style/swipe-btns.css'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FlashOnIcon from '@material-ui/icons/FlashOn';


export default function SwipeButtons() {
    return (
        <div className="swipe-btns">
            <IconButton>
                <ReplayIcon />
            </IconButton>
            <IconButton>
                <HighlightOffIcon />
            </IconButton>
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
                <FlashOnIcon />
            </IconButton>
        </div>
    )
}
