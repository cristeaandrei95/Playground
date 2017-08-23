import { h, Component } from "preact"
import style from "./toolbar.less"
import { Link } from 'preact-router'

function menuDrawer() {
 var menuDrawer = document.querySelector('#menuDrawer'); 
 menuDrawer.style.transform = 'translate(0%)';
 console.log(menuDrawer)
}

function closeDrawer() {
 var menuDrawer = document.querySelector('#menuDrawer'); 
 menuDrawer.style.transform = 'translate(100%)';
}

const Button = (data) => {
	return (
	  <b class={ [style.action, style.menuIcon].join(" ") } onClick={menuDrawer.bind(this) }>
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
				{ children }		
			 </b>
			<b class={ style.action_group_right }>
				{ actionsRight }
			</b>
                        <b id="menuDrawer" class={style.menuDrawer}>
                         <b class={style.close} onClick={closeDrawer.bind(this)}>X</b> 
                         <ul class={style.menuList}>
                          <li class={style.menuItem}><Link href="/">Home</Link></li> 
                          <li class={style.menuItem}><Link href="/details">Details</Link></li> 
                          <li class={style.menuItem}><Link href="/process">Process</Link></li> 
                          <li class={style.menuItem}><Link href="/services">Services</Link></li> 
                          <li class={style.menuItem}><Link href="/portfolio">Portfolio</Link></li> 
                          <li class={style.menuItem}><Link href="/styleguide">Styleguide</Link></li> 
                         </ul> 
                        </b>
		</b>
	)
}
