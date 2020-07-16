import React, { Component } from "react";
//import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import IconButton from '@material-ui/core/IconButton'

import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
 
function MyComponent(props) {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const images = props.images;

    // const images = [
    //     "https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://r-cf.bstatic.com/images/hotel/max1024x768/859/85960609.jpg",
    //     "https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2018/12/19/mbs1.jpg?itok=bFVDKmQf&timestamp=1545181307",
    //     "https://www.furama.com/images/FRF-home2.jpg"
    // ];

        return (
            <div>
                <IconButton aria-label="favorite" onClick={e => setIsOpen(true)} className="saveLater">
                    <InsertPhotoOutlinedIcon fontSize="medium" />
                </IconButton>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false )}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)  
                        }
                        onMoveNextRequest={() => 
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>
        );
}

export default MyComponent;
