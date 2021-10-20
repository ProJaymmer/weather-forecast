import React from 'react';
import './App.css';
import weatherData from './weatherData';

import WeatherForecast from './WeatherForecast';

// was the data successfully imported?
console.log(weatherData);
// YES!
// We need to import the component that we will send the data to, and which we will grab from.

// Now, we need a function that will map over all of the objects in the array that we will call "details." We will prepend these "details" to the various keys of the objects. The function will then store these various key-value object pairs into a new array, "info".
const App = () => {
	const info = weatherData.map((details) => {
		return (
			<WeatherForecast
				img={details.img}
				conditions={details.conditions}
				time={details.time}
			/>
		);
	});
	console.log(info);
	return (
		<div className='App'>
			<h1>My WeatherIcons App</h1>
			<section className='cards'>{info}</section>
		</div>
	);
};

export default App;
