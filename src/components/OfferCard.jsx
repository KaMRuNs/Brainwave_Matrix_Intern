import React from 'react'
import Button2 from './Button2'
import Button from './Button'

const OfferCard = ({offer,cls}) => {
  return (
    <div className={`grid justify-items-center my-12 w-full ${cls}`}>
      {offer.map((data)=>(
        <div className='w-9/10 relative pb-10'>
          {data.dis? <div> <div className='bg-dark text-white text-lg font-semibold w-fit h-fit absolute left-3 top-3 p-3 rounded-xl'><i class="fa-solid fa-tag pr-2"></i>{data.dis}</div>
          <div className='bg-light text-white text-lg font-semibold w-fit h-fit absolute left-32 top-3 p-3 rounded-xl'><i class="fa-solid fa-clock pr-2"></i>Fast</div> </div>: null}
          <img src={data.Image} alt="" className='w-full rounded-2xl'/>
          <div className='flex'>
            <img src={data.img} alt="" className='my-5 mr-2'/>
            <div>
            <h1 className='text-2xl font-bold mt-6'>{data.name}</h1>
            {data.rating? <p className='text-light text-xl'><i class="fa-solid fa-star p-2"></i>{data.rating}</p> : null}
            </div>
          </div>
          
          {data.loc? <h3 className='text-light text-xl my-3'><i class="fa-solid fa-location-dot pr-2"></i>{data.loc}</h3> : null}
          <p className='font-bold text-xl'>{data.price && data.price}</p>
          {data.description ? <Button2 title={data.description} classname={"bg-orange-100 p-2 text-dark"}/> : <Button title={"Order Now"} classname={"p-2 bg-dark w-full font-normal mt-3"}/>}
           
        </div>
      ))}
    </div>
  )
}

export default OfferCard