import React from 'react'
import '../style/header.css'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ForumIcon from '@material-ui/icons/Forum'

export default function Header() {
    return (
        <header>
            <IconButton>
                <PersonIcon className="header-icon" />
            </IconButton>
            <IconButton>
                <EmojiEmotionsIcon className="header-icon" />
            </IconButton>
            <IconButton>
                <ForumIcon className="header-icon" />
            </IconButton>
        </header>
    )
}
