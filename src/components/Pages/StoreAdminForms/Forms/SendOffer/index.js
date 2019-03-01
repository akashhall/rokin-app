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
            offerData: {},
            offers : [],
            offerDescription: '',
            selectedOfferId : '',
        }
    };

    componentDidMount() {
        // this.editModal.handleShow();
        console.log('did', sessionStorage);
        this.setState({ data: data })
        const usersData = [];
        const offerData = [];
    getAllCommon('get-admin-users', { user_type: "storeadmin" }).then((res) => {
      res.data.map((data) => { usersData.push(data.name) });
      this.setState({ userData : res.data, users: usersData })
    })
    getAllCommon('offers', { "outlet_id" : sessionStorage.outlet_id !== '' ? sessionStorage.outlet_id : "cd5b0abf-74ca-4c32-bfcf-cde6d1518f35" }).then((res) => {
      res.data.map((data,index) => { offerData.push({ offerName : data.offer_name, offer_Id: data.offer_id ,index:index ,offer_description : data.offer_description}) });
      this.setState({ offerData : res.data, offers: offerData })
    })
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
            "outlet_id":"cd5b0abf-74ca-4c32-bfcf-cde6d1518f35",
            "recipient_ids": this.userIdArray,
            "offer_id": this.state.selectedOfferId
        }
        getAllCommon('send-offer',data).then((res) =>{ console.log(res.data); this.editModal.handleHide() });

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
      offerSelection = () => {
        const data = this.state.offers.filter((data) => { if(data.index === this.select.selectedIndex - 1) {
        this.setState({offerDescription :data.offer_description,selectedOfferId : data.offer_Id})      
        }});
        this.select.selectedIndex === 0 && this.setState({offerDescription : ''});
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
                                <div style={{marginTop: '-129px',marginLeft: '86%'}}>
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
                            <select ref={sel => this.select = sel} onChange={(e)=>{this.offerSelection(e)}} style={{ height: '38px', width: '100%', marginBottom: '20px', marginTop: '10px', border: '1px solid lightgrey',   fontSize: '13px' }} >
                              <option>Select Offer</option>
                              {this.state.offers.map((data) => {
                                return <option value={data.id} id={data.id}>{data.offerName}</option>
                              })}
                             </select>
                            <div className="form-group">
                                <label>OfferDesc: </label>
                                <input required className="form-control" value={this.state.offerDescription}placeholder="Offer Description" />
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
