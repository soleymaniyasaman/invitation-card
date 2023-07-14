import React, { useEffect, useState } from 'react'
import './style.css'
import FileViewer from 'react-file-viewer';
import VideoPoster from './videoPoster';

export default function Page4({ style, indexCarousel, setIndexCarousel }) {
    const [filePath, setFilePath] = useState('/img/LG-second.jpeg')
    const [fileType, setFileType] = useState();
    const [videoLink, setVideoLink] = useState('https://www.aparat.com/embed/cz903?data[rnddiv]=76211610206&data[responsive]=yes');

    const FetchFileApi = () => {
        setFileType(filePath.split('.').pop())
        console.log(fileType);
    }
    useEffect(() => {
        FetchFileApi()
    }, [filePath]);
    return (
        <div className={`secondSlide ${style}-secondSlide`}>
            <div className="lens-flare"></div>
            <div className="stripes">
                <div className="stripe-block str1">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stripe-block str2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="stripe-block str3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="info">
                <main>
                    {/* {filePath && fileType && (
                        <FileViewer
                            fileType={fileType}
                            filePath={filePath}
                        />
                    )} */}
                    {/* <VideoPoster videoLink={videoLink} /> */}
                    <div className='videoWrapper'>
                        <div className='video'>
                            <iframe title="video" src="https://www.aparat.com/video/video/embed/videohash/hZKoG/vt/frame?autoplay=true" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                        </div>
                    </div>

                </main>


                <div className='footer'>
                </div>

            </div>
        </div>
    )
}
