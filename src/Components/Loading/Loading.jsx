import React from 'react'
import "./Loading.css"

function Loading() {
  return (
    <div className='loading'>
      <span></span>
    </div>
  )
}

function UpdatingBtn() {
  return (
    <button className='updateBtn'>updating...</button>
  )
}

export { Loading, UpdatingBtn}
