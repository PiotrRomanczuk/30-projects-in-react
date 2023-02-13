import React from 'react';
import Title from '../components/Title';
import { AiFillSmile } from 'react-icons/ai';

export default function LikePhotoApp() {
	return (
		<div className='container'>
			<Title text={'Like Photo App'} classes={'mb-3'} />
			<Title text={'likes'} classes={'subtitle'} />

			<div
				className='card card-dark'
				style={
					{
						// cursor: 'pointer'
					}
				}
			>
				<div className='card-header fs-xl'>
					<AiFillSmile className='mr-2' />
					<small>DogyDog</small>
				</div>
				<img src='' alt='' style={{ height: 'fit-content' }}></img>
				<div
					className='card-footer fs-xl d-flex'
					style={{
						justifyContent: 'space-between',
					}}
				></div>
			</div>
		</div>
	);
}
