import { h, Component } from 'preact'
import style from './image.less'


export default (data) => {
  const classes = [] 
  
  switch (data.effect) {
    case "zoom":
      classes.push(style.zoom)
    break
  }

  return (
    <img 
      class={ classes.join(" ") }
      style={ data.style || null }
      src={ data.url } />
  )
}
