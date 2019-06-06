import React from 'react'

const HogFront = ({hog, src}) => {


    // const src = require(`../hog-imgs/${hog.replace(/\s/g, '_').toLowerCase()}.jpg`)

    return (
        <React.Fragment>
            <h1>{hog}</h1>
            <img src={src} alt={hog} height='200'/>
        </React.Fragment>
    )
}

export default HogFront