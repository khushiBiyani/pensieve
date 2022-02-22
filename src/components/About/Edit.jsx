import React from 'react'

export default function Edit({
    onSubmit,
    children,
}
) {
  return (
    <div className="card">
      <form onSubmit={onSubmit}>
          {children}
        <button type="submit" className="save">Save </button>
      </form>
    </div>
  )
}

   