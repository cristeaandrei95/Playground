import { h, Component } from 'preact'
import { Router } from 'preact-router'
import StyleGuide from './routes/styleguide'
import Portfolio from './routes/portfolio'
import Details from './routes/details'
import Home from './routes/home'
import Process from './routes/process'
import Services from './routes/services'

export default class Application extends Component {
  handleRoute = (event) => {
    this.currentUrl = event.url
  }

  render () {
    return (
      <b id="playground">
        <Router onChange={this.handleRoute}>
          <StyleGuide path="/styleguide" />
          <Details path="/details" />
	  <Home path="/" />
	  <Portfolio path="/portfolio" />
	  <Process path="/process" />
	  <Services path="/services" />
	</Router>
      </b>
    )
  }
}
