import React from 'react';
import { connect } from 'react-redux';
import { BuyMob } from '../redux/mob/MobActions';

const MobContainer = (props) => {

  return (
    <div className='mt-60 flex flex-col justify-center items-center '>
      <h1 className="py-10 text-4xl font-bold">
        number of Mobile: {props.numberOfMobs}
      </h1>
      
      <button onClick={props.buyMob} className='bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded-2xl'>
        Buy
      </button>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    numberOfMobs: state.numOfMobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyMob: () => dispatch(BuyMob())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobContainer);