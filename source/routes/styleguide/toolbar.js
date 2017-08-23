import { h, Component } from "preact"
import style from "./toolbar.less"


const Button = (data) => {
	return (
		<b class={ style.action }>
			<b
				class={ style.action_icon }
				dangerouslySetInnerHTML={{ __html: data.icon }} />
		</b>
	)
}


export default ({ children, ...data }) => {
	const classes = [style.toolbar]
	const actionsLeft = []
	const actionsRight = []
	
	if (data.actions) {
		data.actions.forEach((action) => {
			const button = <Button icon={ action.icon} />
			
			switch (action.position) {
				case "left":
					actionsLeft.push(button)
				break
				
				default:
					actionsRight.push(button)
			}
		})
	}
	
	return (
		<b class={ classes.join(" ") }>
			<b class={ style.action_group_left }>
				{ actionsLeft }
			</b>
			<b class={ style.content }>
				{ children }
			</b>
			<b class={ style.action_group_right }>
				{ actionsRight }
			</b>
		</b>
	)
}