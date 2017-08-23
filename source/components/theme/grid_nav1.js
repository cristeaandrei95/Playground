import { h, Component } from 'preact'
import style from './grid_nav.less'

export default ( data ) => {
  return (
      <Cell class={ style.grid_nav1 }>  
  <h3 class={ style.previous }>Previous Project</h3>
  <h3 class={ style.next }>Next Project</h3>
      </Cell>  
  )
}
