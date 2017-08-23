import { h, Component } from "preact"
import { Block, Info, Image, Header, Footer, Accordion_row, Service_box } from "../../components/theme"
import { Link } from "preact-router"
import style from "./style"




const services = (
 <b class={ style.content}>
  <Block class={ style.grey }>
  <b class={ style.title }>Our Core Services Cover:</b>
  <b class={style.service_row}>  
  <Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
  </Service_box>
  <Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
  <Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
  </Service_box>
 </b>
  
  
</Block>
<Block class={ style.white }>
  <b class={ style.title }>We specialise in API Integration & Development</b>

<b class={style.inner}>
<b>We have the expertise to provide application integration and development services that  link 3ed party webistes via standard or custom APIs, offering two-way data flows to both process and publish data.</b>
<br/>
<b>The use of APIs can  assist in automating a broad  range of workflow processes. With APIs, we can  build rich, customer-centric web applications to help you accomplish your  overarching business goals.</b>

</b>

<b class={style.subtitle}>Examples of API integration that we develop:</b>




<b class={style.service_row}>  
 <Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
 <Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
<Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
</b>
  
  
</Block>
<Block class={ style.grey }>
  <b class={ style.title }>Technologies Overview</b>


<b class={style.service_row}>  
 <Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
 <Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
<Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
</b>
 <b class={style.service_row}>  
 <Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
 <Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
<Service_box title="Consultancy">
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
      <li>Product development</li>
    </Service_box>
</b>
 
  
</Block>






  
  </b>
) 

export default (data, state) => {
  return ( 
    <b class={ style.services}>
      <Header size="50vh"> 
	<Block class={style.intro}>
	   <b class={style.title_main}>
	      Services
   	   </b>


	  <b class={style.text_bold}>
	      We specialise in identifying high ROI solutions
	  </b>
	</Block>
      </Header>

    { services }
    <Footer />    
   </b>
)
}
