import { h, Component } from 'preact'
import style from './service_box.less'
import Block from './block'

export default ({ children, ...data }) => {

 if ( data.size=="1/4") {
  return (
  <Block class={style.width_25}>
    <img src="https://unsplash.it/g/50/50/?random=1&gravity=center" />
    <b class={ style.title }>
      { data.title } 
    </b>
    <ul>
     { children }
    </ul>
  </Block>   
  )
 }
 else {
  return (
  <Block class={style.width_33}>
   <Block class={style.left}>
    <img src="https://unsplash.it/g/50/50/?random=1&gravity=center" />
   </Block>
   <Block class={style.right}>
    <b class={ style.title }>
      { data.title } 
    </b>
    <ul>
     { children }
    </ul>
   </Block>
  </Block>   
  )
  }
}

