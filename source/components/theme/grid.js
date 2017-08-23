import { h, Component } from 'preact'
import style from './grid.less'

export default ({ children, ...data }) => {
  const classes = [style.gird]
  const styles = {}

  if (data.gutter) {
    // TODO
  }

  if (data.padding) {
    // TODO
  }
  else {
    classes.push()
  }


  return (
    <b class={ style.grid_cell } style={ styles }>
     { children }
    </b>
  )
}
