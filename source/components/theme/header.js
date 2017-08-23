import { h, Component } from 'preact'
import style from './header.less'
import Toolbar from './toolbar'

const actions = [{
  icon: "&#xE5D2;",
  handler: (event) => { console.log("clicked me 1") },
  position: "right",
}]

export default ({ children, ...data }) => {
  const classes = [style.header]
  switch (data.size) {
    case "50vh":
      classes.push(style.header_50)
    break
  }


  return (
    <b class={ classes.join(" ") }>
      <Toolbar actions={ actions }>
        <b class={ style.logo_white }>
	  Logo
	</b> 
      </Toolbar>
      { children }
    </b>
  )
}
