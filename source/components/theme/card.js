import { h, Component } from 'preact'
import style from './card.less'


export default (data, state) => {
  const header = !data.header ? null : (
    <b class={ style.header }>
      { data.header }
    </b>
  )
  
  const content = !data.content ? null : (
    <b class={ style.content }>
      { data.content }
    </b>
  )

  return (
    <b class={ style.card } role="card">
      { header }
      { content }
    </b>
  )
}