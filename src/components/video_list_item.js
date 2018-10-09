import React, { Component } from 'react';

const VideoListItem = ({ video, onVideoSelect}) => {
    //    const video= props.video     // This line of code is replaced by the ({video}) as used above as argument

    const imgUrl=video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img  src={imgUrl} className="media-object" />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{video.snippet.title}</h4>
                    <p>Lorem ipsum...</p>
                </div>
            </div>
        </li>
    );

}


export default VideoListItem;