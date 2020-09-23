import React from 'react'

export default function Loader() {
  return (
    <div className="container pt-4 d-flex justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
