import { h, Component } from "preact"
import style from "./style"
import { Grid,Block, Cell, Image } from "../../components/theme"



const cards = (
  <b class={ style.section }>
    <b class={ style.section_title }>
    </b>
  </b>
)


const blocks = (
  <b class={ style.section }>

  <Block width="100%">
    <Block width="50%">
      <Block height="50">
        <img src="https://unsplash.it/450/400/?random" effect="zoom" />
      </Block>
     <Block height="50">
        <img src="https://unsplash.it/450/400/?random" effect="zoom" />
     </Block>
    </Block>
    <Block width="50%">
    </Block>
  </Block>
  </b>
)


export default (data, state) => {
  return (
    <b class={ style.styleguide }>
      { blocks }
    </b>
  )
}







