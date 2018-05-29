import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route} from 'react-router-dom'

import Home from './components/home/home'
import Artist from './components/artist/artist'

export class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/artist/:artistId" component={Artist}/>
            </div>
        </BrowserRouter>
    )
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'))