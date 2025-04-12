import React from 'react'

function BackgroundImage({ image }) {
    return (
        <div
        style={{
          position: "relative",
          height: "30rem",
          width: "100%",
          backgroundAttachment: "fixed",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.89,
          display: "flex",              // Add this to center child
          alignItems: "center",         // Vertical center
          justifyContent: "center",      // Horizontal center
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            padding: "1rem",
            borderRadius: "1rem",
            // maxWidth: "90%",
            //  backgroundColor: "rgba(0, 0, 0, 0.4)"
          }}
        >
          <div style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem",fontFamily: 'var(--font-family-Sofia)' }}>
            Welcome to our big day
          </div>
          <div style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or less normal distribution of letters.
          </div>
        </div>
      </div>
    )
}

export default BackgroundImage