import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getBeacons, addBeacon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import MultiSearchSelect from "react-search-multi-select";
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'

const data = [
    {
        createdBy: "rohit",
createdDate: "2018-01-26 17:25:17",
id: "143",
offerAmount: "350",
offerId: "2",
offerPer: "100",
offeredPrice: "0",
prefixName: "HRCMumbai1",
productId: "2",
productPrice: "350",
redeemDateTime: "2018-01-26 17:25:52",
redeemStatus: "Redeemed",
redeemedBy: "rohit",
userName: "rahul",
    },
    {
      createdBy: "rohit",
createdDate: "2018-01-26 17:25:17",
id: "143",
offerAmount: "350",
offerId: "2",
offerPer: "100",
offeredPrice: "0",
prefixName: "HRCMumbai1",
productId: "2",
productPrice: "350",
redeemDateTime: "2018-01-26 17:25:52",
redeemStatus: "Redeemed",
redeemedBy: "rohit",
userName: "rahul",
  },  {
    createdBy: "rohit",
createdDate: "2018-01-26 17:25:17",
id: "143",
offerAmount: "350",
offerId: "2",
offerPer: "100",
offeredPrice: "0",
prefixName: "HRCMumbai1",
productId: "2",
productPrice: "350",
redeemDateTime: "2018-01-26 17:25:52",
redeemStatus: "Redeemed",
redeemedBy: "rohit",
userName: "rahul",
},
{
  createdBy: "rohit",
createdDate: "2018-01-26 17:25:17",
id: "143",
offerAmount: "350",
offerId: "2",
offerPer: "100",
offeredPrice: "0",
prefixName: "HRCMumbai1",
productId: "2",
productPrice: "350",
redeemDateTime: "2018-01-26 17:25:52",
redeemStatus: "Redeemed",
redeemedBy: "rohit",
userName: "rahul",
}
]

class SendOffers extends React.Component {
    constructor(props) {
        super(props);
        this.selecteId = null;
        this.state = {
            data: [],
            values: ["Allison", "Arthur", "Beryl", "Chantal", "Cristobal", "Danielle", "Dennis", "Ernesto", "Felix", "Fay", "Grace", "Gaston", "Gert", "Gordon"],
            editData: {
                name: '',
                address: '',
                beacon_room: '',
                location: '',
                major: '',
                minor: '',
                offer_beacon: false
            }
        }
    };

    componentDidMount() {
        // this.editModal.handleShow();
        console.log('did', sessionStorage);
        this.setState({ data: data })
        // getBeacons({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => this.setState({ data: res.data }))

        // login().then((res) => console.log('res', res));
    }
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

        addBeacon(data).then((res) => getBeacons({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

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
    closeModal = () => {
        this.editModal.handleHide()
    }
    render() {
        const headers = [
            'UserName',
            'BranchCode',
            'OfferId',
            'ProductId',
            'ProductPrice',
            'OfferPercentage',
            'OfferedPice',
            'ReedemStatus'
        ];
        return (
            <React.Fragment >
                <div>
                    <div className="container">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h2>Send/Redeem Offer</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{'fontSize':'14px'}}>
                                <div className="col-md-3">
                                   UserName: <input style={{'marginBottom':'10px',    'float':'right'}}/> <br />
                                   Search:   <input style={{'marginBottom':'10px','float':'right'}}/>
                                </div>
                                <div className="col-md-9">
                                    <a style={{'marginLeft': '10px','float':'right'}} onClick={() => this.openEditModal()} className="btn btn-success"><span>submit</span></a>
                                    <a style={{'float':'right'}} onClick={() => this.openEditModal()} className="btn btn-success"><span>send offer</span></a>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        {
                                            headers && headers.length ?
                                                headers.map((header) => <th>{header}</th>) : null
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                  {this.state.data && this.state.data.length ?
                    this.state.data.map((d, i) =>
                      <tr key={i}>
                        <td style={{ width: '200px' }}>{d.createdBy}</td>
                        <td>{d.prefixName}</td>
                        <td>{d.offerId}</td>
                        <td>{d.productId}</td>
                        <td>{d.productPrice}</td>
                        <td>{d.offerPer}</td>
                        <td>{d.offeredPrice}</td>
                        <td>{d.redeemStatus}</td>
                        {/* <td>{d.offer_beacon.toString()}</td> */}
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
                    <ModalPopover ref={test => this.editModal = test} onClose={this.onModalClose} modalId="editOrgModal" header="Beacon
" isModal="true">
                        <>
                            <div className="form-group" style={{ marginRight: '-10px', marginLeft: '-5px'}}>
                               <label style={{ marginLeft: '5px'}}>User Name: </label>
                               <MultiSearchSelect searchable={true} showTags={true} multiSelect={true} width="100%" style={{marginLeft:'-10px'}}onSelect={this.handleChange} options={this.state.values} />   
                                {/* <input ref={name => this.name = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, name: e.target.value } })} value={this.state.editData.name || ''} required placeholder="Please enter Beacon Name" /> */}
                            </div>
                            <div className="form-group">
                                <label>Speial Offer: </label>
                                <input ref={name => this.address = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, address: e.target.value } })} value={this.state.editData.address || ''} required placeholder="Select Offers" />
                            </div>
                            <div className="form-group">
                                <label>OfferDesc: </label>
                                <input ref={name => this.room = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, beacon_room: e.target.value } })} value={this.state.editData.beacon_room || ''} required placeholder="Offer Description" />
                            </div>
                            <div style={{ padding: '20px 55px' }} className="modal-footer">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input onClick={this.closeModal} type="button" className="btn btn-secondary" data-dismiss="modal" defaultValue="Cancel" />
                                    </div>
                                    <div className="col-md-6">
                                        <input onClick={this.onSumit} type="submit" className="btn btn-primary" defaultValue="Add" />
                                    </div>
                                </div>
                            </div>
                        </>
                    </ModalPopover>
                    <div id="deleteEmployeeModal" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <form>
                                    <div className="modal-header">
                                        <h4 className="modal-title">Delete Employee</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete these Records?</p>
                                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                        <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default SendOffers;
