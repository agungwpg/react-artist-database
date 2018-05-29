import React from 'react'

const AlbumList = ({albumIMG}) => {
  
  const showList = (albumIMG) =>{
    if(albumIMG){
        return albumIMG.map((item,index)=>{
            return(
                <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
            )
        })
    }
  }
    
    return (
    <div className="albums_list">
      {showList(albumIMG)}
    </div>
  )
}

export default AlbumList
