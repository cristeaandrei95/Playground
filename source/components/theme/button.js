import { h, Component } from 'preact'
import style from './button.less'


export default (data, state) => {
  let classes = `${ style.default } `
  
  switch (data.type) {
    case "primary":
      classes += style.primary
    break
    
    case "disabled":
      classes += style.disabled
    break
  }
  
  const onClick = data.type !== "disabled" ? data.onClick : null
  
  return (
    <button class={ classes } onClick={ onClick } role="button">
      { data.label || data.children }
    </button>
  )
}