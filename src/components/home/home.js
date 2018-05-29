import React, { Component } from 'react'
import Banner from '../banner/banner'
import ArtistsList from '../artistsList/artistsList'

const URL_API = 'http://localhost:3000/artists'

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
       artists: ''
    }
  }

  componentDidMount(){
    //requesting using fetch
    fetch(URL_API,{
      method:'GET'
    })
    .then(res => res.json())
    .then(json => {
      this.setState({
        artists:json
      })
    })
  }
  
  render() {
    return (
      <div>
        <Banner/>
        <ArtistsList allArtists={this.state.artists}/>
      </div>
    )
  }
}

export default Home
