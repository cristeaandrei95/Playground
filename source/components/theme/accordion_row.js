import { h, Component } from "preact"
import style from "./accordion_row.less"
import Block from './block.js'

export default ({ children, ...data }) => {
  const background =`background:url(${data.background})`
  return (
    <b class={ style.accordion_row} style={ background.toString() } >
      <Block size="1/2" >
	<b class={ style.title } >
	  { data.title }	
	</b>
      </Block>
      <Block size="1/2" >
	  { children } 
      </Block>
    </b>
  )
}






