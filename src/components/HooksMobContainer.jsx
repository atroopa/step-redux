import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BuyMob } from '../redux/mob/MobActions';

const HooksMobContainer = () => {

    const numberOfMobiles = useSelector(state => state.numOfMobs);
    const dispatch        = useDispatch()

  return (
    <div className='mt-10 flex flex-col justify-center items-center '>
      <h1 className="py-10 text-4xl font-bold">
        number of Mobile: {numberOfMobiles}
      </h1>
      
      <button onClick={() => dispatch(BuyMob())}  className='bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded-2xl'>
        Buy
      </button>

    </div>
  )
}

export default HooksMobContainer