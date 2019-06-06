import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<select className='ui simple selection dropdown' name="sort" id="sort" defaultValue='' onChange={props.snort}>
				<option disabled  value="">S(n)ort The Piggly Wigglies By...</option>
				<option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water</option>
				<option value="name">Name</option>
			</select>
			<button className='ui pink button' onClick={props.filterGrease}>Dun want no greased up pigs!</button>
		</div>
	)
}

export default Nav
