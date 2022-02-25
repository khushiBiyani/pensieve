import React from 'react'

export default function Edit({
    onSubmit,
    children,
}
) {
  return (
    <div className="about-card">
      <form className="about" onSubmit={onSubmit}>
          {children}
        <button type="submit" className="about-button">Save </button>
      </form>
    </div>
  )
}

   