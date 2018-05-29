import React from 'react'
import { Link } from 'react-router-dom';

const ArtistsList = ({allArtists}) => {
  // console.log(allArtists)

  function showList(e){
    if(e){
      return e.map((item)=>{

        const style = {
          background:`url('/images/covers/${item.cover}.jpg') no-repeat`
        }

        return(
          <Link key={item.id} to={`/artist/${item.id}`} className="artist_item" style={style}>
            <div>{item.name}</div>
          </Link> 
        )
      })
    }
    
  }

  return (
    <div className="artists_list">
      <h4>Browse the artists</h4>
      {showList(allArtists)}
    </div>
  )
}

export default ArtistsList
