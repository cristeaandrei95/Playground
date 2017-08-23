import { h, Component } from "preact"
import style from "./social.less"


const Button = (data) => {
	return (
	  <b class={ style.icon }>
	    <b class={ style.social} dangerouslySetInnerHTML={{ __html: data.icon }} />
	  </b>
	)
}


export default ( data ) => {
      const iconList = []
      data.icons.forEach((iconProp) =>  { const button = <Button icon={iconProp} />
      return iconList.push(button) 
      })
      return (
		<b class={ style.icons } >
				{ iconList }
		</b>
	)
}
