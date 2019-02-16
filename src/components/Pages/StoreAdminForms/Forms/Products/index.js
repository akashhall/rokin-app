import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
import { getProducts, addProduct } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.selecteId = null;
    this.state = {
      data: [],
      editData: {
        name: '',
        description: '',
        price: '',
        avg_rating: '',
        created_on: '',
        updated_on: '',
      }
    }
  };

  componentDidMount() {
    // this.editModal.handleShow();
    console.log('did', sessionStorage);
    getProducts({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => this.setState({ data: res.data }))

    // login().then((res) => console.log('res', res));
  }
  onModalClose = () => {
    this.selecteId = null;
    this.setState({
      editData: {
        name: '',
        description: '',
        price: '',
        avg_rating: '',
        created_on: '',
        updated_on: '',
      }
    })
  }

  onSumit = () => {
    const name = this.name.value;
    const description = this.description.value;
    const price = this.price.value;
    const avg_rating = this.avg_rating.value;
    // const offer_beacon = this.select.options[this.select.selectedIndex].value;
    const usePhoto = this.photo.value;

    let a = { type: 'add' }
    console.log('selected id', this.selecteId)
    if (this.selecteId !== null) {
      a = {
        product_id: this.state.data[this.selecteId].id,
        type: 'update'
      }
    }

    const data = {
      ...a,
      name,
      description,
      price,
      avg_rating,
      // usePhoto,
      outlet_id: "dcba56d9-3801-40c8-9c13-8a77c39de24f",
    }

    addProduct(data).then((res) => getProducts({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

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
      'Name',
      'Description',
      'Price',
      'Rating',
      'Created on',
      'Updated on'
    ];
    return (
      <React.Fragment>
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Products</h2>
                  </div>
                  <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><span>Add New Products</span></a>
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
                    this.state.data.map((d, i) =>
                      <tr key={i}>
                        <td style={{ width: '200px' }}>{d.name}</td>
                        <td style={{ width: '300px' }}>{d.description}</td>
                        <td style={{ width: '100px' }}>{d.price}</td>
                        <td style={{ width: '100px' }}>{d.avg_rating}</td>
                        <td style={{ width: '100px' }}>{d.created_on}</td>
                        <td style={{ width: '100px' }}>{d.updated_on}</td>
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
          <ModalPopover ref={test => this.editModal = test} onClose={this.onModalClose} modalId="editOrgModal" header="Products" isModal="true">
            <>
              <div className="form-group">
                <label>Name</label>
                <input ref={name => this.name = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, name: e.target.value } })} value={this.state.editData.name || ''} required placeholder="Please enter Name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input ref={name => this.description = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, description: e.target.value } })} value={this.state.editData.description || ''} required placeholder="Please enter Description" />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input ref={name => this.price = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, price: e.target.value } })} value={this.state.editData.price || ''} required placeholder="Please enter Price" />
              </div>
              <div className="form-group">
                <label>Average Rating</label>
                <input ref={name => this.avg_rating = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, avg_rating: e.target.value } })} value={this.state.editData.avg_rating || ''} required placeholder="Please enter Ratings" />
              </div>
              <div className="form-group">
                <label>Add Photo</label>
                <input class="btn btn secondary" ref={name => this.photo = name} type='file' />
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

export default Products;
