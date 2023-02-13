import React from 'react';
import Title from '../components/Title';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RandomizeColors() {
	function getRandomColor() {
		let letters = '0123456789ABCDEF';
		let color = '#';

		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}

		return color;
	}

	function handleClick(e) {
		// console.log('click ');
		console.log(e.target.id);
		console.log(getRandomColor());

		let body = document.querySelector('body');

		console.log(body.style.backgroundColor);

		body.style.backgroundColor = getRandomColor;
	}

	return (
		<div className='container gap-4' onClick={handleClick}>
			<Title text={'Randomize Colors'} classes={'mb-4'} />

			<button type='button' className='btn btn-primary' id='1'>
				Click me!
			</button>
			<button type='button' className='btn btn-secondary' id='2'>
				Click me!
			</button>
			<button type='button' className='btn btn-success' id='3'>
				Click me!
			</button>
			<button type='button' className='btn btn-danger' id='4'>
				Click me!
			</button>
			<button type='button' className='btn btn-warning' id='5'>
				Click me!
			</button>
		</div>
	);
}
