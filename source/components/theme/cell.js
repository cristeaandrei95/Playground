import { h, Component } from 'preact'
import style from './grid.less'

export default ({ children, ...data }) => {
  const classes = [style.cell]
  
  if (data.class) {
    classes.push(data.class)
  }
  
  switch (data.size) {
    case "1/2":
      classes.push(style.cell_1_of_2)
    break
    
    case "1/3":
      classes.push(style.cell_1_of_3)
    break
    
    case "1/4":
      classes.push(style.cell_1_of_4)
    break
   
    case "1/5":
      classes.push(style.cell_1_of_5)
    break
    
    case "1/6":
      classes.push(style.cell_1_of_6)
    break
  }
  
  return (
    <b class={ classes.join(" ") }>
      { children }
    </b>
  )
}
