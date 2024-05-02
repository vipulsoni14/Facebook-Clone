import React, { useState } from 'react'
import './ImageUpload.css'
import { Avatar, Dialog } from '@mui/material'
import { db } from '../Firebase'
import { Close, VideoCall } from '@mui/icons-material'
import firebase from 'firebase/compat/app'

function ImageUpload() {
    const [open, setOpen] = useState(false)
    const [image, setImage]= useState('')
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('')
    const [progress, setProgress] = useState(0)
    const [noLikes, setNoLikes] = useState(0)
    const [scroll,setScroll] = React.useState('paper')

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const uploadFileWithClick = () => {
        document.getElementsByClassName('four')[0].click();
    }

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
        setImage("");
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    


  return (
    <div className="imageupload">
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
            >
                <div className="makeStyles-paper-1">
                    <div className="modalInit">
                        <h1>Create Post</h1>
                        <Close className="closeModalIcon" onClick={handleClose} />
                    </div>
                    <div className="hr2" />
                    <div className="profileHead">
                        <img src={Avatar?.photoURL} className="Avatar" />
                        <h1>{Avatar?.displayName}</h1>
                    </div>
                    <div className="inputForUpload">
                        <input onChange={handleChange} type="file" accept="image/*" className='four' />
                        <textarea value={caption} onChange={(e) => setCaption(e.target.value)} rows="4" placeholder={`What's on your mind, ${Avatar?.displayName}?`} />
                    </div>
                    <div class={`previewImage ${!image && "vanish"}`}>
                        <img  className="previewImage" />
                    </div>
                    <img alt="" className="colorAlpha" src="https://facebook.com/images/composer/SATP_Aa_square-2x.png"></img>

                    <progress value={progress} className="hidden" max="100" />

                    <div className="publishOptions">
                        <div class="left">
                            <h1>Add to your post</h1>
                        </div>
                        <div className="right">
                            <i className="Icon roomIcon" onClick={uploadFileWithClick} />
                            <i className="Icon photoIcon" onClick={uploadFileWithClick} />
                            <i className="Icon friendsIcon" />
                            <i className="Icon feelingIcon" />
                            <i className="Icon tagIcon" />
                            <i className="Icon moreIcon" />
                        </div>
                    </div>
                    <button  type="submit" class={`postButton ${caption.length < 1 && "disabled"} `}>Post</button>
                </div>
            </Dialog>

            <div className="imageupload__container">
                <div className="postArea">
                    <img src={Avatar?.photoURL} class="Avatar" />
                    <input value={caption} onChange={(e) => setCaption(e.target.value)} onClick={handleClickOpen('body')} placeholder={`What's on your mind, ${Avatar?.displayName}?`} />
                </div>
                <div className="hr" />
                <div className="options">
                    <div className="liveVideo" onClick={handleClickOpen('body')}>
                        <i className="liveVideoIcon" />
                        <img src={VideoCall} alt="" />
                        <h2>Live video</h2>
                    </div>
                    <div className="photo" onClick={handleClickOpen('body')}>
                        <i className="photoIcon" />
                        <h2>Photo/Video</h2>
                    </div>
                    <div className="feeling" onClick={handleClickOpen('body')}>
                        <i className="feelingIcon" />
                        <h2>Feeling/Activity</h2>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ImageUpload
