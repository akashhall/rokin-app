import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getAllCommon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'

// const getGameHistory =
// {
// 	"error": false,
// 	"data": [
// 		{
// 			"game_id": "",
// 			"game_name": "",
// 			"outlet_id": "",
// 			"game_type": "treasurehunt/quiz",
// 			"created_on": "timestamp",
// 			"created_by": "user_id",
// 			"played_on": "timestamp",
// 			"game_status": "win/loose",
// 			"player": {
// 				"player_id": "",
// 				"player_name": "",
// 				"player_email": ""
// 			}
// 		}
// 	]
// }

class GameHistory extends React.Component {
	constructor(props) {
		super(props);
		this.outlet_id = "dcba56d9-3801-40c8-9c13-8a77c39de24f";
		this.selecteId = null;
		this.state = {
			data: [],
			editData: {
			}
		}
	};

	// componentDidMount() {
	// 	// this.editModal.handleShow();
	// 	// console.log('did', sessionStorage);
	// 	// getGameHistory({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => this.setState({ data: res.data }))
	// 	// { getGameHistory }
	// 	console.log(getGameHistory.data);
	// 	// login().then((res) => console.log('res', res));
	// }
	componentDidMount() {
		// const usersData = [];
		getAllCommon('sasd', { user_type: "game-history" }, { outlet_id: this.outlet_id }).then((res) => {
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
									<select style={{ width: '20%', display: 'inline-block' }} className="form-control frmclr ng-pristine ng-valid ng-not-empty ng-touched" name="type" ng-model="GHC.game">
										<option value="All" selected="selected">All</option>
										<option value="treasureHunt">TresauteHunt</option>
										<option value="quizGame">Quiz</option>
									</select>
									&nbsp;
									<label htmlFor="startDate">Start Date:</label>
									<input style={{ padding: '4px' }} ng-model="GHC.startDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
									&nbsp;
									<label htmlFor="endDate">End Date:</label>

									&nbsp;<input style={{ padding: '4px' }} ng-model="GHC.endDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
									&nbsp;<button style={{ padding: '4px' }} className="btn-primary col-md-1 butnadd submit_form submit_dis add_button_custom_width floatRight" ng-click="GHC.getGameHistory()">Submit</button>
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
											{/* <td>
													<a style={{ fontSize: '30px', marginRight: '20px' }} title="Edit" onClick={() => this.openEditModal(i)} className="edit"><IoMdCreate /></a>
													<a style={{ fontSize: '30px' }} title="Delete" className="delete"><IoMdCloseCircleOutline /></a>
												</td> */}
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
