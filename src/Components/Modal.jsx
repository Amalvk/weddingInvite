import React, { useRef, useState } from "react";
import "./Modal.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Cropper from "react-easy-crop";
import TextField from "@mui/material/TextField";
import { database } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

export default function Modal({fetchData}) {

  
  const [open, setOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const inpRef = useRef();

  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [wish, setWish] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1); // Dynamic zoom level
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };
  const getCroppedImage = async () => {
    if (!image || !croppedAreaPixels) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.src = image;
    img.onload = () => {
      const scaleX = img.naturalWidth / img.width;
      const scaleY = img.naturalHeight / img.height;

      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;

      ctx.drawImage(
        img,
        croppedAreaPixels.x * scaleX,
        croppedAreaPixels.y * scaleY,
        croppedAreaPixels.width * scaleX,
        croppedAreaPixels.height * scaleY,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );

      const croppedImageUrl = canvas.toDataURL("image/jpeg");
      setCroppedImage(croppedImageUrl);
      setImageOpen(false);
    };
  };
  const handleImageUpload = (e) => {
    setImage(null);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
      setImageOpen(true);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectImage = () => {
    inpRef.current.click();
    setImageOpen(true);
  };

  const handleSubmit = async () => {
    const date = new Date();
    const formattedDate = date.toDateString().split(" ").slice(1).join(" ")
    try {
      if (name.trim() === "" || wish.trim() === "") {
        alert("Please enter both Name and Wish!");
        return;
      }
  
      const wishesCollection = collection(database, "wishes");
      await addDoc(wishesCollection, {
        name: name, // Store name separately
        wish: wish, // Store wish separately
        avatar:name.charAt(0),
        time: formattedDate,
      });
  
      alert("Wish uploaded successfully!");
  
      // Clear input fields
      setName("")
      setWish("")
      // fetchData
    } catch (error) {
      console.error("Error uploading wish:", error.message);
    }
    fetchData()
    setOpen(false)
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="modalButton"
      >
        Add wishes{" "}
        <AddCircleOutlineRoundedIcon
          sx={{ fontSize: "medium", marginLeft: "-4px" }}
        />
      </Button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginTop: "10px", display: "none" }}
        ref={inpRef}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // className="modalContainer"

        sx={{
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(5px)", // Blurring effect
          },
          "& .MuiPaper-root": {
            borderRadius: "40px", // Custom border-radius
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Add your wishes here !!"}
        </DialogTitle>
        <DialogContent dividers sx={{ overflow: "hidden" }}>
          {/* <div>
            <Button autoFocus>Select profile</Button>
          </div> */}
          <DialogContentText id="alert-dialog-description">
            <Box
              sx={{
                display: "block",
                lineHeight: "4rem",
                "& .MuiInput-underline": {
                  // borderBottom: "2px solid red", // Set the underline border color to red
                },
                "& .MuiInput-underline": {
                  // borderBottom: "2px solid red", // Keep the underline red on hover
                  color: "var(--text-color-primary)", // Set the text color to blue
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid var(--text-color-primary)", // Keep the underline red when focused
                  // color: "var(--text-color-primary)", // Set the text color to blue
                },
                "& .MuiInputBase-input": {
                  color: "var(--text-color-primary)", // Set the text color to blue
                },
                "& .MuiInputLabel-root": {
                  color: "var(--text-color-secondary)",
                  // color: "#675959", // Set label color to yellow
                },
                "& .Mui-focused": {
                  color: "var(--text-color-secondary)",
                },
              }}
            >
              <TextField
                id="standard-basic"
                size="small"
                label="Name"
                variant="standard"
                fullWidth
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <TextField
                id="standard-basic"
                size="small"
                label="Wish"
                variant="standard"
                fullWidth
                onChange={(e) => {
                  setWish(e.target.value);
                }}
              />
            </Box>
          </DialogContentText>
          <DialogActions></DialogActions>
          <div className="displayBlock">
            <Button onClick={selectImage} className="modalButton">
              Upload Image
            </Button>
            <Dialog
              open={imageOpen}
              onClose={() => setOpen(false)}
              maxWidth="sm"
              fullWidth
              sx={{ backgroundColor: "var(--background-secondary)" }}
            >
              <DialogContent>
                {image && (
                  <div style={{ position: "relative", height: "300px" }}>
                    <Cropper
                      image={image}
                      crop={crop}
                      zoom={zoom}
                      aspect={1} // Maintains 1:1 aspect ratio
                      onCropChange={setCrop}
                      onCropComplete={handleCropComplete}
                      onZoomChange={setZoom} // Allows zoom adjustments dynamically
                    />
                  </div>
                )}
              </DialogContent>
              <DialogActions>
                <Box className="cropBoxContainer">
                  <Button
                    size="small"
                    onClick={() => setImageOpen(false)}
                    // variant="outlined"
                    // style={{ borderRadius: "10px 10px 10px 10px" }}
                    className="actionButton"
                  >
                    Cancel
                  </Button>
                  {image && (
                    <Button
                      size="small"
                      onClick={getCroppedImage}
                      // variant="outlined"
                      className="actionButton"
                    >
                      Crop
                    </Button>
                  )}
                </Box>
              </DialogActions>
            </Dialog>
            <div style={{ paddingTop: ".4rem" }}>
              {croppedImage && (
                <div>
                  {/* <h5>Cropped Image</h5> */}
                  <img
                    src={croppedImage}
                    alt="Cropped"
                    style={{ width: "90px" }}
                  />
                </div>
              )}
            </div>
          </div>
        </DialogContent>

        <DialogActions className="justifyCenter">
          <Button
            size="small"
            onClick={handleSubmit}
            variant="outlined"
            className="actionButton"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
