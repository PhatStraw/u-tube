import React from 'react'
import { Paper, Typography} from "@material-ui/core"

const Content = (props) => {
    if(!props.video) return <div>Loading...</div>

    const videoSrc = `http://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height: '70%'}}>
                <iframe frameBorder="0" height="100%" title="Video Player" src={videoSrc}/>
            </Paper>

            <Paper elevation={6} style={{padding: '15px'}}>

            </Paper>
        </React.Fragment>
    )
}

export default Content