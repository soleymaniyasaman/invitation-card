import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoPoster({ videoLink }) {
    return (
        <ReactPlayer url={videoLink} />
    )
}
