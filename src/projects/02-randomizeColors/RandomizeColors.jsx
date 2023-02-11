import React from 'react';
import Title from '../components/Title';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RandomizeColors() {
	return (
		<div className='container gap-4'>
			<Title text={'Randomize Colors'} classes={'mb-4'} />
			<Button variant='primary mr-3'>Primary</Button>
			<Button className='primary mr-5 '>Primary</Button>
			<Button variant='primary'>Primary</Button>
			<Button variant='primary'>Primary</Button>
			<Button variant='primary'>Primary</Button>
		</div>
	);
}
