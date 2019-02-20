import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getGameHistory, addBeacon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'
class GameHistory extends React.Component {
	constructor(props) {
		super(props);

		this.selecteId = null;
		this.state = {
			data: [],
			editData: {
				// name: '',
				// address: '',
				// beacon_room: '',
				// location: '',
				// major: '',
				// minor: '',
				// offer_beacon: false
				name: '',
				date: '',
				action: '',
				actionType: '',
				offerMeassage: '',
				RedeemStatus: ''

			}
		}
	};

	// componentDidMount() {
	// 	// this.editModal.handleShow();
	// 	console.log('did', sessionStorage);
	// 	getGameHistory({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => this.setState({ data: res.data }))

	// 	// login().then((res) => console.log('res', res));
	// }
	onModalClose = () => {
		this.selecteId = null;
		this.setState({
			editData: {
				name: '',
				address: '',
				beacon_room: '',
				location: '',
				major: '',
				minor: '',
				offer_beacon: false
			}
		})
	}
	onSumit = () => {
		const beacon_name = this.name.value;
		const beacon_uuid = this.uuid.value;
		const mac_address = this.address.value;
		const beacon_room = this.room.value;
		const offer_beacon = this.select.options[this.select.selectedIndex].value;
		const major = this.major.value;
		const minor = this.minor.value;
		let a = { type: 'add' }
		console.log('selected id', this.selecteId)
		if (this.selecteId !== null) {
			a = {
				id: this.state.data[this.selecteId].id,
				type: 'update'
			}
		}

		const data = {
			...a,
			beacon_name,
			beacon_uuid,
			mac_address,
			offer_beacon: offer_beacon === 'true' ? true : false,
			major,
			minor,
			beacon_room,
			outlet_id: "dcba56d9-3801-40c8-9c13-8a77c39de24f",
		}

		addBeacon(data).then((res) => getGameHistory({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

	}
	openEditModal = (i) => {
		if (i !== undefined) {
			this.selecteId = i;
			console.log('open edit', i, this.state.data[i])
			const editData = this.state.data[i];
			this.setState({ editData })
			console.log('edit', editData, this.state)
		}
		console.log('bahar', this.state.editData.category)
		this.editModal.handleShow();
	}
	onDelete = (i) => {
		console.log('dekhte hai')
	}
	render() {
		const headers = [
			'NAME',
			'DATE',
			'ACTION',
			'ACTION TYPE',
			'OFFER MESSAGE',
			'REDDEM STATUS'
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
									{/* <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><span>Add New Beacon</span></a>
                    {/* <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a> */}
									{/* </div> */}
								</div>
								<div className="panel-heading" style={{ padding: '10px 10px', height: 'auto', }}>
									<label htmlFor="game">Select Game:</label>
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
									{this.state.data && this.state.data.length ?
										this.state.data.map((d, i) =>
											<tr key={i}>
												<td style={{ width: '200px' }}>{d.name}</td>
												<td>{d.address}</td>
												<td>{d.beacon_uuid}</td>
												<td>{d.beacon_room}</td>
												<td>{d.location}</td>
												<td>{d.offer_beacon.toString()}</td>
												<td>
													<a style={{ fontSize: '30px', marginRight: '20px' }} title="Edit" onClick={() => this.openEditModal(i)} className="edit"><IoMdCreate /></a>
													<a style={{ fontSize: '30px' }} title="Delete" className="delete"><IoMdCloseCircleOutline /></a>
												</td>
											</tr>
										) : null
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
