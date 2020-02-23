import React, { useState } from 'react';
import moment from 'moment';
import './App.css';
function currentTime() {
	const today = moment();
	return `${today.format('HH')}:${today.format('mm')}`;
}

function pluralify(string, time) {
	time = Number(time);
	let plural = '';

	if (time > 1) {
		plural = 's';
	}

	return `${string[0]}${plural}`;
}

function App() {
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [hour, setHour] = useState('');
	const [minute, setMinute] = useState('');

	function handleDateChange(e) {
		setDate(e.target.value);
	}

	function handleBtnClick() {
		setDate(moment().format('YYYY-MM-DD'));
		setTime(currentTime());
	}

	function handleTimeChange(e) {
		setTime(e.target.value);
	}

	function calculateTime() {
		if (!hour && !minute) {
			return '';
		}
		return moment(`${date}:${time}`, 'YYYY-MM-DD HH:mm')
			.add(hour, 'hours')
			.add(minute, 'minutes')
			.format('MM-DD-YYYY hh:mma');
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}
		>
			<div>
				<input type="date" value={date} onChange={handleDateChange} />
				<input type="time" onChange={handleTimeChange} value={time} /> or{' '}
				<button onClick={handleBtnClick}>NOW</button>
			</div>
			<h1>+</h1>
			<input type="number" onChange={e => setHour(e.target.value)} />{' '}
			{pluralify`hour${hour}`}
			<input type="number" onChange={e => setMinute(e.target.value)} />{' '}
			{pluralify`minute${minute}`}
			<h1>{calculateTime()}</h1>
		</div>
	);
}

export default App;
