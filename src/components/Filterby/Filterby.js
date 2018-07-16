import React from 'react';
import './Filterby.css';
import Searchgenre from './Searchgenre';

const Filterby = () => {
	return (
			<div className="wrapper">
				<div className="container">
					<div className="wrapper">
						<div className="container">
							<div className="chart-filters">
								<label>Filter by Genre</label>
								<Searchgenre />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Filterby;
