import React from 'react'
import Spinner from '../imgs/loader.gif'

const Loader = () => {
  return (
    <section className="loader">
        <div className="loader__container">
            <img src={Spinner} alt="Loading Spinner" />
        </div>
    </section>
  )
}

export default Loader


