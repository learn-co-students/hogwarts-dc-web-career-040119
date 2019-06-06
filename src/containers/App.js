import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav'
import HogsContainer from './HogsContainer'
import hogs from '../porkers_data';

class App extends Component {
    state = {
        hogs: hogs,
        filter: false
    }

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/search?api_key=8Llc3Ye1HNZYVbG7ojU1JDW4RrXftCs1&q=pig&limit=${hogs.length}`)
            .then(resp => resp.json())
            .then(pigGifs => {
                const hogsWithGifs = this.state.hogs.map((hog, index) => {
                    hog.gif = pigGifs.data[index].images.original.url
                    return hog
                })
                console.log(hogsWithGifs)
                this.setState({gifs: pigGifs.data})
            })
    }

    snort = (e) => {
        // debugger
        const sortBy = e.target.value
        const sorted = [...this.state.hogs].sort((a,b) => {
            if (a[sortBy] > b[sortBy]) {return 1}
            if (a[sortBy] < b[sortBy]) {return -1}
            return 0
        })
      this.setState({
          hogs: sorted
      })
    }

    filterGrease = (e) => {
        if (!this.state.filter) {
            e.target.innerText = "Lemme see dem greasy hogs!"
            this.setState({
                hogs: this.state.hogs.filter(hog => !hog.greased),
                filter: true
            })
        } else {
            e.target.innerText = 'Dun want no greased up pigs!'
            this.setState({
                hogs: hogs,
                filter: false
            })
        }
    }

    render() {
        return (
            <div className="App">
                <Nav filterGrease={this.filterGrease} snort={this.snort}/>
                <HogsContainer hogs={this.state.hogs}/>
            </div>
        )
    }
}

export default App;
