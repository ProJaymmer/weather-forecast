import React from 'react';

const WeatherBody = (props) => {
	return (
		<div className='BodyDiv'>
			<p>
				<span className='Bolds'>Conditions: </span>
				{props.conditions}
			</p>
			<p>
				<span className='Bolds'>Time: </span>
				{props.time}
			</p>
		</div>
	);
};

export default WeatherBody;
