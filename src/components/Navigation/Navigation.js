import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
			<nav className='header'>
				<div className='container'>
					<h1 className='header-logo'>
						<a href='/'>Spotify</a>
					</h1>
					<h2 className='header-title'>Charts</h2>
				</div>
			</nav>
		);
}

export default Navigation;