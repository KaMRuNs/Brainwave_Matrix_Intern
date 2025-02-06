import React from 'react'

const Button2 = ({classname,title,icon}) => {
  return (
    <button className={`p-2 font-bold text-2xl flex justify-center items-center rounded-2xl ${classname}`}>
          <h2>{title}</h2>
          {icon? <i class="fa-solid fa-arrow-right"></i> : null}
    </button>
  )
}

export default Button2