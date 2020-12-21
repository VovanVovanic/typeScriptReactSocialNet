import classes from './preloader.module.css'
import React from 'react'
import gif from './151.gif'
const Preloader = () => {
  return (
    <div className={classes.Preloader}>
      <img src={gif} alt ='gif'/>
    </div>
  )
}
export default Preloader