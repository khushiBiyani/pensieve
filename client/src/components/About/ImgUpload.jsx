import React from 'react'

export default function ImgUpload({
    onChange,
    src
  }) {
  
  const file_upload_style = {
    borderRadius: "50%",
    display: "inline-block",
    position: "relative",
    padding: "6px",
    background: "linear-gradient(270deg, #3fa1a9, #79f1a4)",
    cursor: "pointer",
    marginBottom: "25px"
  }

  const img_wrap_style = {
    position: "relative",
    width: "200px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "50%",
    objectFit: "scale-down"
  }

  const img_upload_style = {
    // content: "\\f093",
    // fontSize: "90px",
    // position: "absolute",
    // paddingTop: "80px",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // textAlign: "center",
    // color: "#63d3a6",
    // width: "200px",
    // height: "200px",
    // borderRadius: "50%",
    // opacity: "0",
    // transition: "0.5s ease",
    // backgroundColor: "#fff"
  }
  return (
    <label htmlFor="photo-upload" className="custom-file-upload fas" style={file_upload_style}>

      <div className="img-wrap img-upload"  style={img_wrap_style}>
        <div className="img-upload" style={img_upload_style}>
          <img for="photo-upload" src={src}/>
        </div>
      </div>
      
      <input className="about-file-input" id="photo-upload" type="file" style={{display:"none"}} onChange={onChange}/> 
    </label>
  )
}
    