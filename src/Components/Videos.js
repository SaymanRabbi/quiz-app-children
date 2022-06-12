import React from 'react';
import { Link } from 'react-router-dom';
import useVideolist from '../hooks/useVideolist';
import classes from '../Styles/Videos.module.css'
import Video from './Video'
const Videos = () => {
   const [videos] = useVideolist()
    return (
        <div className={classes.videos}>
            { videos.length>0 &&
             videos.map(video => (video.noq>0 ?<Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}><Video title={video.title} id={video.youtubeID} noq={video.noq} /></Link>:<Video title={video.title} id={video.youtubeID} noq={video.noq} />))
            }
            
        </div>
    );
};

export default Videos;