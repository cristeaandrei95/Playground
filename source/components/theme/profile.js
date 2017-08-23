import { h, Component } from "preact"
import { Block } from "../../components/theme"
import style from "./profile.less"

export default ({ children, ...data }) => {
  return (
    <Block size={data.size} class={ style.profile }>
	   <b class={ style.subtitle }>{ data.role }</b>
	   <b>{data.name}</b>
	   <hr/>
           { children } 
    </Block>
  )
}
