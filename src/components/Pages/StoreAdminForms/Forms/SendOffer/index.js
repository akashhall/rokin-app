import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getBeacons, addBeacon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import MultiSearchSelect from "react-search-multi-select";
import { getAllCommon } from './../../../../../api';

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
redeemStatus: "Redeem",
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
redeemStatus: "Redeem",
redeemedBy: "rohit",
userName: "rahul",
}
]

class SendOffers extends React.Component {
    constructor(props) {
        super(props);
        this.userIdArray = [];
        this.state = {
            data: [],
            users: [],
            userData: {},
        }
    };

    componentDidMount() {
        // this.editModal.handleShow();
        console.log('did', sessionStorage);
        this.setState({ data: data })
        const usersData = [];
    getAllCommon('get-admin-users', { user_type: "storeadmin" }).then((res) => {
      res.data.map((data) => { usersData.push(data.name) });
      this.setState({ userData : res.data, users: usersData })
    })
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
        const data = {
            "outlet_id":"6c60dc52-ee29-44cd-aa14-cd963029f618",
            "recipient_id": this.userIdArray,
            "offer_id":"ae1c0fbf-14ca-4c32-bgtf-cde6h1718f09"
        }
        getAllCommon('send-offer',data).then((res) =>{ this.setState({ data: res.data }); this.editModal.handleHide() });

    }
    openEditModal = (i) => {
        if (i !== undefined) {
            this.selecteId = i;
            console.log('open edit', i, this.state.data[i])
            const editData = this.state.data[i];
            this.setState({ editData })
            console.log('edit', editData, this.state)
        }
        // console.log('bahar', this.state.editData.category)
        this.editModal.handleShow();
    }
    onDelete = (i) => {
        console.log('dekhte hai')
    }
    closeModal = () => {
        this.editModal.handleHide()
    }
    handleChange = (arr) => {
        let userArray = [];
        arr.map((data) => {
          this.state.userData.map((obj) => {
            if (obj.name === data) {
              !userArray.includes(obj.uuid) && userArray.push(obj.uuid);
            }
          })
        })
        this.userIdArray = userArray;
        console.log(this.userIdArray)
      }
    redemOffer = () => {
        console.log('redemOffer');
        let data = {
            "offer_id":"",
	        "user_id":"",
	        "outlet_id":""
        }
        getAllCommon('redeem_offer',data).then((res) => {
            console.log(res.data)
          })
    }
    render() {
        const headers = [
            'UserName',
            'Branch Code',
            'OfferId',
            'ProductId',
            'Product Price',
            'Offer Percentage',
            'Offered Pice',
            'Reedem Status',
            'Action',
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
                                <div className="" style={{margin:'20px'}}>
                                   UserName: <input style={{display:'inline-block' , marginRight:'15px'}}/>
                                   Search:   <input style={{display:'inline-block'}}/>
                                </div>
                                <div style={{marginTop: '-129px',marginLeft: '89%'}}>
                                    <a style={{'float':'right'}} onClick={() => this.openEditModal()} className="btn btn-success"><span>Send Offer</span></a>
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
                        <td >{d.createdBy}</td>
                        <td>{d.prefixName}</td>
                        <td>{d.offerId}</td>
                        <td>{d.productId}</td>
                        <td>{d.productPrice}</td>
                        <td>{d.offerPer}</td>
                        <td>{d.offeredPrice}</td>
                        <td>{d.redeemStatus}</td>
                        <td>
                        {d.redeemStatus !== 'Redeemed' &&  <button style={{fontSize:'15px'}}className='btn-danger' onClick={()=>this.redemOffer(d.offerId,d.user_id)}>Reedem </button>}
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
                               <MultiSearchSelect searchable={true} showTags={true} multiSelect={true} width="100%" style={{marginLeft:'-10px'}}onSelect={this.handleChange} options={this.state.users} />   
                                {/* <input ref={name => this.name = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, name: e.target.value } })} value={this.state.editData.name || ''} required placeholder="Please enter Beacon Name" /> */}
                            </div>
                            <div className="form-group">
                                <label>Speial Offer: </label>
                                <input  className="form-control" required placeholder="Select Offers" />
                            </div>
                            <div className="form-group">
                                <label>OfferDesc: </label>
                                <input required className="form-control" placeholder="Offer Description" />
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
                </div>
            </React.Fragment >
        )
    }
}

export default SendOffers;
