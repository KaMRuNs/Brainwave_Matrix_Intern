import React from 'react'
import SpecialCard from './SpecialCard'

const Special = () => {
  const info = [
    {
      title1:"Best deals ",
      title2: "Crispy Sandwiches",
      desc:"Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
      left:false,
      right:true,
      img:"./last3rd1.png",
    },
    {
      title1:"Celebrate parties with ",
      title2: "Fried Chicken",
      desc:"Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
      left: true,
      img:"last3rd2.png",
    },
    {
      title1:"Wanna eat hot & spicy ",
      title2: "Pizza?",
      desc:"Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
      right: true,
      img:"last3rd3.png",
    },
    
  ]
  return (
    <>
      <SpecialCard info={info}/>
    </>
  )
}

export default Special