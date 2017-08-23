import { h, Component } from "preact"
import style from "./block.less"


export default ({ children, ...data }) => {
  const classes = [style.block]
  const styles = {}

  if (data.class) {
    classes.push(data.class)
  }
  
  if (data.width) {
    styles.width = data.width
  }
  
  if (data.height) {
    styles.height = data.height
  }
  
  switch (data.size) {
    case "1/2":
      classes.push(style.block_1_of_2)
    break
    
    case "1/3":
      classes.push(style.block_1_of_3)
    break
    
    case "1/4":
      classes.push(style.block_1_of_4)
    break
   
    case "1/5":
      classes.push(style.block_1_of_5)
    break
    
    case "1/6":
      classes.push(style.block_1_of_6)
    break

    case "2/3":
      classes.push(style.block_2_of_3)
    break

  }

  return (
    <b class={ classes.join(" ") } style={ styles }>
   
    
    { children }
    </b>
  )
}
