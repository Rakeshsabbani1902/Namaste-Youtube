import React from 'react'

const VideoCard = ({info}) => {

  const {snippet , statistics} = info;
    const { channelTitle, title,thumbnails}= snippet;

  return (
    <div className='p-2 m-2 w-60 h-80 shadow-lg'>
        <img alt="thumbnail" className='rounded-lg' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export const AdVideoCard=({info})=>{
  return(
    <div className='p-2 border border-red-300'>
        <VideoCard info={info}/>
        <h1>Ad.</h1>
    </div>
  )
}
export default VideoCard;
