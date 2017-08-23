import { h, Component } from "preact"
import { Block, Info, Image, Header, Footer, Accordion_row } from "../../components/theme"
import { Link } from "preact-router"
import style from "./style"


const details = (
  <b class={ style.details}>
    <b class={ style.grey }>
      <Block class={ style.prev }>
	<b>PREVIOUS</b>
      </Block>
      <Block class={ style.nav_title }>
	<b>Case study no.1</b>
      </Block>
      <Block class={ style.next }>
	<b>NEXT</b>
      </Block>
    </b>  
  


<b class={ style.content }>

<b class={ style.title_first }>Briefing</b>
<b class={ style.text}>
requirements gathering (via Live documents, Chat & Emails). Understanding <br />  business objectives. Develop Scope and Goal setting
</b>
<b class={ style.title }> Wireframing & Interactive Prototyping </b> 
<b class={ style.text}>
Defined page structure and layoud. Tested various forms of navigation.<br />
  Organised the content layout. Highlighted essential and additional <br /> 
  development work required. Developed the user interface for web forms <br />
  and interactive components.
</b>
<img src="https://unsplash.it/g/1200/600/?random=1&gravity=center" />


<b class={ style.title }> Design </b> 
<b class={ style.text}>
Time to focus on publishing the details. The design is comleted using actual<br />
content from Case Study no.1. 
  </b>
     <img src="https://unsplash.it/g/1200/600/?random=1&gravity=center" />


<b class={ style.title }> Advertising spaces </b> 
<b class={ style.text}>
 Through the Case Study no.1 store, special layout spaces were designed to <br />
  act as advertising real estate to facilitate the promotion of: <br />
  <br />
  Service <br />
  Service <br />
  Service <br />
  Service <br />
  Service <br />
  <br />
  Ad spaces are managed from the store admin based on promotional needs.<br />
  For example, for a 6 week period, every Monday, all ad spaces will display <br />
  banners that will promote the "Company's event".
</b>
     <img src="https://unsplash.it/g/1200/600/?random=1&gravity=center" />

<b class={ style.title }> Development </b> 
<b class={ style.text}>
Defined page structure and layoud. Tested various forms of navigation.<br />
  Organised the content layout. Highlighted essential and additional <br /> 
  development work required. Developed the user interface for web forms <br />
  and interactive components.
</b>
     <img src="https://unsplash.it/g/1200/600/?random=1&gravity=center" />

</b>


    <b class={ style.blue }>
      <Block class={ style.left } >		  
	<b class={ style.text }>Looking to upgrade your ecommerce solution and want to find out more?  </b> 
      </Block>
      <Block class={ style.right } >		  
	<input class={style.button} type="submit" value="HIT US UP!" />
      </Block>
    </b>  



  </b>
) 

export default (data, state) => {
  return ( 
    <b class={ style.process}>
      <Header size="50vh"> 
	<Block class={style.intro}>
	   <b class={style.title_main}>
	    Case Studies 
	   </b>
	  <b class={style.text_bold}>
	    A selection of out best work 
	  </b>
	</Block>
      </Header>

    { details }
    <Footer />    
   </b>
)
}
