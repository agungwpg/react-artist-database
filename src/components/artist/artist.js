import React, { Component } from 'react'
import Header from './header'
import AlbumList from './albumList'

const URL_API = `http://localhost:3000/artists`

export class Artist extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       artist:''
    }
  }

  componentDidMount(){
    fetch(`${URL_API}/${this.props.match.params.artistID}`,{
      method:'GET'
    })
    .then(res => res.json())
    .then(json => {
      this.setState({artist:json})
    })
  }
  
  render() {
    return (
      <div>
        <Header/>
        <div className="artist_bio">
          <div className="avatar">
            <span style={{background:`url(/images/covers/${this.state.artist.cover}.jpg) no-repeat`}}></span>
          </div>
          <div className="bio">
            <h3>{this.state.artist.name}</h3>
            <p>
              {this.state.artist.bio}
            </p>
          </div>
          <AlbumList albumIMG={this.state.artist.albums}/>
        </div>
      </div>
    )
  }
}

export default Artist
