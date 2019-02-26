import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getAllCommon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'

class GameHistory extends React.Component {
	constructor(props) {
		super(props);
		this.outlet_id = "dcba56d9-3801-40c8-9c13-8a77c39de24f";
		this.selecteId = null;
		this.state = {
			data: [],
		}
	};
	componentDidMount() {
		// const usersData = [];
		getAllCommon('game-history', { outlet_id: this.outlet_id }).then((res) => {
			this.setState({ data: res.data })
		})

	}
	render() {
		const headers = [
			'Game Name',
			'Outlet Id',
			'Game Type',
			'Created On',
			'Created By',
			'Played On',
			'Game Status'
		];
		return (
			<React.Fragment >
				<div>
					<div className="container">
						<div className="table-wrapper">
							<div className="table-title">
								<div className="row">
									<div className="col-sm-6">
										<h2>Game History</h2>
									</div>
								</div>
								<div className="panel-heading" style={{ padding: '10px 10px', height: 'auto', }}>
									<label htmlFor="game">Select Game:</label>
									&nbsp;
									<select style={{ width: '20%', display: 'inline-block',padding:'4px' }} className="" name="type" ng-model="GHC.game">
										<option value="All" selected="selected">All</option>
										<option value="treasureHunt">TresauteHunt</option>
										<option value="quizGame">Quiz</option>
									</select>
									&nbsp;
									<label htmlFor="startDate">Start Date:</label>
									&nbsp;
									<input style={{ padding: '2px' }} ng-model="GHC.startDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
									&nbsp;
									<label htmlFor="endDate">End Date:</label>

									&nbsp;<input style={{ padding: '2px' }} ng-model="GHC.endDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
									{/* &nbsp;<button style={{ padding: '4px', fontSize: '15px', marginTop: '2px', marginRight: '33px' }} className="btn btn-primary" ng-click="GHC.getGameHistory()">Submit</button> */}
									<button class="btn btn-primary" style={{ marginTop: '1px',marginRight:'29px' }}>Submit</button>
								</div>
							</div>
							<table className="table table-striped table-hover">
								<thead>
									<tr>
										{
											headers && headers.length ?
												headers.map((header) => <th style={{ width: '145px' }}>{header}</th>) : null
										}
									</tr>
								</thead>
								<tbody>
									{/* {this.state.data && this.state.data.length ? */}
									{this.state.data.map((d, i) =>
										<tr key={i}>
											<td style={{ width: '200px' }}>{d.game_name}</td>
											<td>{d.outlet_id}</td>
											<td>{d.game_type}</td>
											<td>{d.created_on}</td>
											<td>{d.created_by}</td>
											<td>{d.played_on}</td>
											<td>{d.game_status}</td>
										</tr>
									)
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</React.Fragment >
		)
	}
}

export default GameHistory;
