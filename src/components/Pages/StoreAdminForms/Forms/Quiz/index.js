import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getAllCommon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.outlet_id = sessionStorage.outlet_id ? sessionStorage.outlet_id : '';
    this.selecteId = null;
    this.state = {
      data: [],
      editData: {
        offer_name: '',
        offer_description: '',
        offer_message: '',
        offer_hours: '',
        offer_starts_on: '',
        product_offered: '',
        max_discount: '',
        discount_percent: '',
        total_count: '',
        created_on: '',
        expires_on: '',
        updated_on: '',
        updated_by: '',
      }
    }
  };

  componentDidMount() {
    // this.editModal.handleShow();
    console.log('did', sessionStorage);
    getAllCommon({ outlet_id: this.outlet_id }).then((res) => this.setState({ data: res.data }))
    console.log('this', this)
    // login().then((res) => console.log('res', res));
  }
  onModalClose = () => {
    this.selecteId = null;
    this.setState({
      editData: {

      }
    })
  }

  onSumit = () => {
    const offer_name = this.name.value;
    const offer_description = this.description.value;
    const offer_message = this.offer_message.value;
    const offer_hours = this.offer_hours.value;
    const offer_starts_on = this.offer_starts_on.value;
    const product_offered = this.product_offered.value;
    const max_discount = this.max_discount.value;
    const discount_percent = this.discount_percent.value;
    const total_count = this.total_count.value;
    const created_on = this.created_on.value;
    const expires_on = this.expires_on.value;

    // const offer_beacon = this.select.options[this.select.selectedIndex].value;
    // const usePhoto = this.photo.value;

    let a = { type: 'add' }
    console.log('selected id', this.selecteId)
    if (this.selecteId !== null) {
      a = {
        offer_id: this.state.data[this.selecteId].offer_id,
        type: 'update'
      }
    }

    const data = {
      offer_name,
      offer_description,
      offer_message,
      offer_hours,
      offer_starts_on,
      product_offered,
      max_discount,
      discount_percent,
      total_count,
      created_on,
      expires_on,
      image_url: '',
      ...a,
      // usePhoto,
      outlet_id: "dcba56d9-3801-40c8-9c13-8a77c39de24f",
    }
    console.log('data', data);
    // addProduct(data).then((res) => getProducts({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

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
      'Question',
      'Option A',
      'Option B',
      'Option C',
      'Option D',
      'Answer',


    ];
    return (
      <React.Fragment>
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Offers</h2>
                  </div>
                  <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><span>Add New Offers</span></a>
                    {/* <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a> */}
                  </div>
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
                    this.state.data.quiz.map((d, i) =>
                      <tr key={i}>
                        <td style={{ width: '200px' }}>{d.question}</td>
                        <td style={{ width: '300px' }}>{d.option_a}</td>
                        <td style={{ width: '100px' }}>{d.option_b}</td>
                        <td style={{ width: '100px' }}>{d.option_c}</td>
                        <td style={{ width: '100px' }}>{d.option_d}</td>
                        <td style={{ width: '100px' }}>{d.answer}</td>
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
          <ModalPopover ref={test => this.editModal = test} onClose={this.onModalClose} modalId="editOrgModal" header="Offers" isModal="true">
            <>
              <div className="form-group">
                <label>Name</label>
                <input ref={name => this.name = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, offer_name: e.target.value } })} value={this.state.editData.offer_name || ''} required placeholder="Please enter Name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input ref={name => this.description = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, offer_description: e.target.value } })} value={this.state.editData.offer_description || ''} required placeholder="Please enter Description" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <input ref={name => this.offer_message = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, offer_message: e.target.value } })} value={this.state.editData.offer_message || ''} required placeholder="Please enter Message" />
              </div>
              <div className="form-group">
                <label>Total Count</label>
                <input ref={name => this.total_count = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, total_count: e.target.value } })} value={this.state.editData.total_count || ''} required placeholder="Please enter Total Count" />
              </div>
              <div className="form-group">
                <label>Creacted On</label>
                <input ref={name => this.created_on = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, created_on: e.target.value } })} value={this.state.editData.created_on || ''} required placeholder="Creacted On" />
              </div>
              <div className="form-group">
                <label>Expires On</label>
                <input ref={name => this.expires_on = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, expires_on: e.target.value } })} value={this.state.editData.expires_on || ''} required placeholder="Expires On" />
              </div>
              <div className="form-group">
                <label>Product Offered</label>
                <input ref={name => this.product_offered = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, product_offered: e.target.value } })} value={this.state.editData.product_offered || ''} required placeholder="Product Offered" />
              </div>
              <div className="form-group">
                <label>Discount</label>
                <input ref={name => this.discount_percent = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, discount_percent: e.target.value } })} value={this.state.editData.discount_percent || ''} required placeholder="Please enter Discount" />
              </div>
              <div className="form-group">
                <label>Max Discount</label>
                <input ref={name => this.max_discount = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, max_discount: e.target.value } })} value={this.state.editData.max_discount || ''} required placeholder="Please enter Maximum Discount" />
              </div>
              <div className="form-group">
                <label>Offer Starts On</label>
                <input ref={name => this.offer_starts_on = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, offer_starts_on: e.target.value } })} value={this.state.editData.offer_starts_on || ''} required placeholder="Offer starts on" />
              </div>
              <div className="form-group">
                <label>Offer Hours</label>
                <input ref={name => this.offer_hours = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, offer_hours: e.target.value } })} value={this.state.editData.offer_hours || ''} required placeholder="Offer Hours" />
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

export default Quiz;
