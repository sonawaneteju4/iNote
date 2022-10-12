import React from 'react'

const Alert = (props) => {
  return (
    <div className=''>
      <div className="flex p-4 mb-4 text-sm bg-blue-100 rounded-lgz text-black " role="alert">
  {props.message}
  </div>
    </div>
  )
}

export default Alert
