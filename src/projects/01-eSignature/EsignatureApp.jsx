import { useState } from 'react';
import React from 'react';
import Title from '../components/Title';

export default function EsignatureApp() {
	const inputStyle = {
		border: 'none',
		borderBottom: '2px dotted',
		outline: 'none',
		padding: '.035rem 0',
	};

	const [name, setName] = useState('Piotr');
	const [date, setDate] = useState('01.01.2023');

	const handleNameChange = (e) => {
		// console.log(e.target.value);
		setName(e.target.value);
	};

	const handleDateChange = (e) => {
		// console.log(e.target.value);
		setDate(e.target.value);
	};

	return (
		<div className='container text-center'>
			{/* <Title classes={'title'} text={'Piotr'} /> */}
			<Title classes={'title'} text={name} />
			<Title classes={'subtitle mb-4'} text={!date ? 'DoB' : date} />
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>

			<footer
				className='d-flex'
				style={{
					justifyContent: 'space-around',
					position: 'relative',
					top: '40vh',
				}}
			>
				<input
					type='date'
					value={date}
					style={inputStyle}
					onChange={handleDateChange}
				></input>
				<input
					type='text'
					value={name}
					style={inputStyle}
					onChange={handleNameChange}
				></input>
			</footer>
		</div>
	);
}
