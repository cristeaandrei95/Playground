import { h, Component } from "preact"
import { Block, Info, Image, Header, Footer, Accordion_row } from "../../components/theme"
import { Link } from "preact-router"
import style from "./style"


const process = (
  <b class={ style.content }>
    <b class={ style.white }>
      <b class={ style.title }>  Our process is straitforward </b>
    </b>  
  

<Accordion_row title="1. Brief Us" background="https://unsplash.it/g/1500/600/?random=1&gravity=center" >
  <ul class={style.list}>
     <li>Requirements gathering (via Live documents, Chat & Emails)</li>
     <li>Understanding business objectives</li>
     <li>Develop Scope and Goal setting</li>
  </ul> 
</Accordion_row>

<Accordion_row title="2. Consultancy & Project Setup" background="https://unsplash.it/g/1500/600/?random=1&gravity=center" />


<Accordion_row title="3. Design" background="https://unsplash.it/g/1500/600/?random=1&gravity=center" />


<Accordion_row title="4. Development" background="https://unsplash.it/g/1500/600/?random=1&gravity=center" />


<Accordion_row title="5. Delivery & Migration" background="https://unsplash.it/g/1500/600/?random=1&gravity=center" />


 <Accordion_row title="6. Maintenance & Enhancement" background="https://unsplash.it/g/1500/600/?random=1&gravity=center" />




<b class={ style.collapsible } >
  
   <b class={ style.title }>Why choose us as your onshore & offshore outsorcing partner?  </b>

  
  
  <section class={ style.accordion}>
			<div>
				<input type="checkbox" id="check-1" />
				<label for="check-1">Better Communication</label>
				<article>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odit, quia hic ipsam laboriosam dignissimos suscipit eligendi! Aspernatur, ad, suscipit officiis repellat consequuntur quod quibusdam sint nobis magnam voluptates veritatis?</p>
				</article>
			</div>
			<div>
				<input type="checkbox" id="check-2" />
				<label for="check-2">Better Resources</label>
				<article>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, doloremque maiores excepturi iste porro cumque rem praesentium illo labore error quasi magni cupiditate rerum sequi dolores architecto consectetur harum soluta neque placeat culpa nesciunt molestias quam facilis ipsum ab aspernatur ut similique aperiam nemo tempore earum esse repellat provident eum blanditiis tempora molestiae! Optio, asperiores neque nam reiciendis ad rerum.</p>
				</article>
			</div>
			<div>
				<input type="checkbox" id="check-3" />
				<label for="check-3">Community Collaboration</label>
				<article>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, ipsum ratione eos voluptates unde ut sint maiores nobis iste odit. Maiores, voluptatum, dolorem, deleniti debitis est ea numquam nesciunt in rerum fuga neque quas laudantium quo laboriosam doloremque nemo ab itaque aliquid accusamus accusantium veritatis consectetur necessitatibus iure accusamus.</p>
				</article>
			</div>
			<div>
				<input type="checkbox" id="check-4" />
				<label for="check-4">Un-parallelled Flexibility</label>
				<article>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, ipsum ratione eos voluptates unde ut sint maiores nobis iste odit. Maiores, voluptatum, dolorem, deleniti debitis est ea numquam nesciunt in rerum fuga neque quas laudantium quo laboriosam doloremque nemo ab itaque aliquid accusamus accusantium veritatis consectetur necessitatibus iure accusamus.</p>
				</article>
			</div>
	  </section>
</b>


    <b class={ style.blue }>
      <Block class={ style.left } >		  
	<b class={ style.text }>  Would you like to discuss how we can help your organisation make better technology decisions?</b> 
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
	 Process 
	  </b>
	  <b class={style.text_bold}>
	  Our clients are a Norweigian architectural consultancy specialising in commercial property in Norway and throughout the EU. 
	  </b>
	</Block>
      </Header>

    { process }
    <Footer />    
   </b>
)
}
