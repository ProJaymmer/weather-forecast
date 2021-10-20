import React from 'react';
import Images from './Images';
import WeatherBody from './WeatherBody';

const WeatherForecast = (props) => {
	// was the data imported successfully?
	console.log(props);
	// YES!
	// At the top, insert the import for the different parts that will make up this component, i.e. the image, conditions, and time.
	return (
		<div className='Boxes' style={{ width: '18rem' }}>
			<Images img={props.img} />
			<WeatherBody conditions={props.conditions} time={props.time} />
		</div>
	);
};

export default WeatherForecast;
