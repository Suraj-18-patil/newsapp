import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt='loading'/>
        
        {/* <h4>Please Wait for second OR Check Your Internet Connection...</h4> */}

      </div>
    )
  }
}

export default Spinner