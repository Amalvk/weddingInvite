import React from 'react'

function BackgroundImage({ image }) {
    return (
        <div style={{
            position: "relative",
            height: "350px",
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundImage: `url("${image}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Ensures full coverage
            backgroundPosition: "center center", // Centers the image
            opacity: 0.89
        }}></div>
    )
}

export default BackgroundImage