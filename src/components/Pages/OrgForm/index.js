import React from 'react';
import json from './data.json';
import Forms from './../Forms';
import { getAllOrg } from './../../../api';
import ModalPopover from './../../ModalPopover';

class OrgForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: json.data,
      editData: {
        name: '',
        description: '',
        category: ''
      }
    }
  };
  componentDidMount() {
    this.editModal.handleShow();
    console.log('did', sessionStorage);
    // getAllOrg('abc').then((res) => console.log(res))

    // login().then((res) => console.log('res', res));

  }
  openAddModal = () => {
    this.addModal.handleShow();
  }
  openEditModal = (i) => {
    console.log('open edit', i, this.state.data[i])
    const editData = this.state.data[i];
    this.setState({ editData })
    console.log('edit', editData, this.state)
    this.editModal.handleShow();
  }
  render() {
    const headers = [
      'Name',
      'Description',
      'Category',
    ];
    const data = json.data;
    console.log('dataaa', data)
    return (
      <React.Fragment >
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Organization</h2>
                    <button onClick={this.openAddModal}>test button</button>
                  </div>
                  <div className="col-sm-6">
                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Employee</span></a>
                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
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
                  {/* <td>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
                        <label htmlFor="checkbox1" />
                      </span>
                    </td> */}
                  {this.state.data && this.state.data.length ?
                    this.state.data.map((d, i) =>
                      // return (
                      <>
                        <tr key={i}>
                          <td>{d.name}</td>
                          <td>{d.description}</td>
                          <td>{d.category}</td>
                          <td>
                            <a onClick={() => this.openEditModal(i)} className="edit"><i className="material-icons" title="Edit"></i></a>
                            <a className="delete"><i className="material-icons" title="Delete"></i></a>
                          </td>
                        </tr>
                      </>
                    ) : null
                  }


                </tbody>
              </table>
              <div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul className="pagination">
                  <li className="page-item disabled"><a href="#">Previous</a></li>
                  <li className="page-item"><a href="#" className="page-link">1</a></li>
                  <li className="page-item"><a href="#" className="page-link">2</a></li>
                  <li className="page-item active"><a href="#" className="page-link">3</a></li>
                  <li className="page-item"><a href="#" className="page-link">4</a></li>
                  <li className="page-item"><a href="#" className="page-link">5</a></li>
                  <li className="page-item"><a href="#" className="page-link">Next</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Edit Modal HTML */}
          <ModalPopover ref={test => this.addModal = test} modalId="addOrgModal" header="Add Organization" isModal="true">
            <>
              <div className="form-group">
                <label>Organization Name</label>
                <input type="text" className="form-control" required placeholder="Please enter Organization Name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                {/* <input type="email" className="form-control" required /> */}
                <textarea className="form-control" placeholder="Please enter description here" />
              </div>
              <select style={{ width: '100%', marginBottom: '20px' }} className="btn btn-secondary">
                <option>Select Category</option>
                <option>Chillin out</option>
                <option>Eathin out</option>
                <option>Nightin out</option>
                <option>Shoppin out</option>
              </select>
              <div style={{ padding: '20px 55px' }} className="modal-footer">
                <div className="row">
                  <div className="col-md-6">
                    <input type="button" className="btn btn-secondary" data-dismiss="modal" defaultValue="Cancel" />
                  </div>
                  <div className="col-md-6">
                    <input type="submit" className="btn btn-primary" defaultValue="Add" />

                  </div>
                </div>
              </div>
            </>
          </ModalPopover>
          <ModalPopover ref={test => this.editModal = test} modalId="editOrgModal" header="Edit Organization" isModal="true">
            <>
              <div className="form-group">
                <label>Organization Name</label>
                <input type="text" className="form-control" defaultValue={this.state.editData.name || ''} required placeholder="Please enter Organization Name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                {/* <input type="email" className="form-control" required /> */}
                <textarea className="form-control" placeholder="Please enter description here" value={this.state.editData.description || ''} />
              </div>
              <select style={{ width: '100%', marginBottom: '20px' }} className="btn btn-secondary">
                <option>Select Category</option>
                <option>Chillin out</option>
                <option>Eathin out</option>
                <option>Nightin out</option>
                <option>Shoppin out</option>
              </select>
              <div style={{ padding: '20px 55px' }} className="modal-footer">
                <div className="row">
                  <div className="col-md-6">
                    <input type="button" className="btn btn-secondary" data-dismiss="modal" defaultValue="Cancel" />
                  </div>
                  <div className="col-md-6">
                    <input type="submit" className="btn btn-primary" defaultValue="Add" />

                  </div>
                </div>
              </div>
            </>
          </ModalPopover>
          {/* Edit Modal HTML */}

          {'{'}/*{/* Delete Modal HTML */}*/{'}'}
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

export default OrgForms;
