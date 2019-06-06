import React from 'react'
import HogFront from '../components/HogFront'
import HogBack from '../components/HogBack'


class HogCard extends React.Component {
    state = {
        isFront: true,
    }

    flipCard = () => this.setState({isFront: !this.state.isFront})

    render() {
        return (
            <div onClick={this.flipCard} className='ui eight wide column fluid card'>
                <i className="close link icon right floated" onClick={e => e.target.parentElement.style.display = 'none'}></i>
                {this.state.isFront ? <HogFront hog={this.props.hog.name} src={this.props.hog.gif}/> : <HogBack hog={this.props.hog} />}
            </div>
        );
    }
}

export default HogCard