import { h, Component } from 'preact'
import style from './footer.less'
import Profile from './profile'
import Social from './social'
import Block from './block'

const icons= [
  "&#xE038;",
  "&#xE038;",
  "&#xE038;",
  "&#xE038;",
  "&#xE038;",
  "&#xE038;"
]

export default ({ children, ...data }) => {
  return (
    <b class={style.footer}>
      <Block size="2/3" class={style.contact_block} style="height:100%">
	<b class={ style.logo_footer }>
	 Logo 
	</b> 
	<b class={ style.contact_info }> 
	    <b class={style.title_small}>
	       Contacts.
	    </b>
	    <Profile class={style.profile} size="1/2" role="Business" name="John Doe">
		<b> Phone: 0700 000 000</b>
		<b> Skype: example_skype</b>
		<b> Email: email@example.com</b>
	    </Profile>
	    <Profile class={style.profile} size="1/2" role="Development" name="Jane Doe">
		<b> Skype: example_skype</b>
		<b> Email: email@example.com</b>
	    </Profile>
	</b>
	<b class={ style.social }>
	    <b class={style.title_small}>
		Connect Whit Us. 
	    </b>
	    <Social icons={ icons } />
	</b>
      </Block>
      <Block size="1/3">
	<b class={style.title_big}>
	    Get in touch for a friendly value driven service.
	</b>
	<b class={style.contact_form}>  
	    <form>
		<b> 
		  <label>Your Name*</label><input type="text" name="name" />  
		</b>
		<hr/> 
		<b> 
		  <label>Email Address*</label><input type="text" name="email" />
		</b>
		<hr/>          
		<b>
		  <label>
		    Phone Number
		  </label>
		  <input type="text" name="phone" />
		</b>
		<hr/> 
		<b>
		  <label>
		    Your Message
		  </label>
		  <input type="text" name="message" />
		</b>
		<hr/> 
		<b>
		  <input class={style.button} type="submit" value="SEND" />
		</b>
	    </form>
	</b>	
	</Block>
    </b>
  )
}
