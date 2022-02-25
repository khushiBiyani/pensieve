import React from 'react'

export default function ImgUpload({
    onChange,
    src
  }) {
  return (
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src}/>
      </div>
      <input className="about-file-input" id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  )
}
    