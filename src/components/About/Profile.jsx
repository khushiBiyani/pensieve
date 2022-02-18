import React from 'react'

export default function Profile({
    onSubmit,
    src,
    bitsid,
    address,
    branch,
    phno,
    nick
}) {
  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" src={src}/>
          </div>
        </label>
        <div className="bitsid">Bits ID: {bitsid}</div>
        <div className="address">Address: {address}</div>
        <div className="branch">Branch: {branch}</div>
        <div className="phno">Phone number: {phno}</div>
        {nick?(<div className="nick">Nickname: {nick}</div>):(<div></div>)}
        <button type="submit" className="edit">Edit Profile </button>
      </form>
    </div>
  )
}
