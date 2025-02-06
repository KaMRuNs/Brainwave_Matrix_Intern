import React from 'react'

const Button = ({classname,searchImg,title,icon}) => {
  return (
    <button className={`bg-dark text-white font-bold text-2xl flex justify-center items-center rounded-md gap-2 ${classname}`}>
          {searchImg && searchImg}
          <h2>{title}</h2>
          {icon? <i class="fa-solid fa-arrow-right"></i> : null}
        </button>
  )
}

export default Button