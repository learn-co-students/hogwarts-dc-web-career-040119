import React from 'react'

const HogBack = ({hog}) => {
    return (
        <React.Fragment>
            <h1>{hog.name}</h1>
            <p>Highest medal achieved: {hog['highest medal achieved']}</p>
            <p>Specialty: {hog.specialty}</p>
            <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        </React.Fragment>
    )
}

export default HogBack