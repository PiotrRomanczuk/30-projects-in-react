import React from 'react';
import Title from '../components/Title';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RandomizeColors() {
	function handleClick(e) {
		// console.log('click ');
		console.log(e.target.id);
	}

	return (
		<div className='container gap-4'>
			<Title text={'Randomize Colors'} classes={'mb-4'} />

			<button
				type='button'
				className='btn btn-primary'
				id='1'
				onClick={handleClick}
			>
				Click me!
			</button>
			<button
				type='button'
				className='btn btn-secondary'
				id='2'
				onClick={handleClick}
			>
				Click me!
			</button>
			<button
				type='button'
				className='btn btn-success'
				id='3'
				onClick={handleClick}
			>
				Click me!
			</button>
			<button
				type='button'
				className='btn btn-danger'
				id='4'
				onClick={handleClick}
			>
				Click me!
			</button>
			<button
				type='button'
				className='btn btn-warning'
				id='5'
				onClick={handleClick}
			>
				Click me!
			</button>
		</div>
	);
}
