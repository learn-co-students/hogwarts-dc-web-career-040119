import React from 'react'
import HogCard from './HogCard'

class HogsContainer extends React.Component {

    render() {
        const hogs = this.props.hogs.map((hog, index) => <HogCard key={hog.name.replace(/\s/g, '-').toLowerCase()} hog={hog} />)
        return (
            <div className='ui grid container'>
                {hogs}
            </div>
        );
    }
}

export default HogsContainer