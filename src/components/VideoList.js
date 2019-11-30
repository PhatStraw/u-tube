import React from 'react'
//import {Paper, Grid, Typography} from '@material-ui/core'

import VideoItem from './videoItem.js'
import { Grid } from '@material-ui/core'

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
return(
    <Grid container spacing={10}>{listOfVideos}</Grid>
)
}

export default VideoList