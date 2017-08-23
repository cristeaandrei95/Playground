import { h, Component } from "preact"
import { Block } from "../../components/theme"
import style from "./info.less"


export default ({ children, ...data }) => {
  const classes = [style.info]
	if (data.class) {
		classes.push(data.class)
	}
	if (data.type == "dark") {
		classes.push(style.is_dark)
	}
	if (data.type == "transparent") {
		classes.push(style.is_transparent)
	}
 
  return (
    <Block height={data.height} class={ classes.join(" ") }>
      <b class={ style.info_title }>
        { data.title }
      </b>
      <b class={ style.info_content }>
        { children }
      </b>
    </Block>
  )
}
