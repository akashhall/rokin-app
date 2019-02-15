import React from 'react';
import json from './data.json';
import Forms from './../Forms';
import { login } from './../../../api';
import ModalPopover from './../../ModalPopover';

class OrgForms extends React.Component {
  constructor(props) {
    super(props);
  };
  componentDidMount() {
    this.testModal.handleShow();
    console.log('did');
    // login().then((res) => console.log('res', res));
    
  }
  openModal = () => {
    this.testModal.handleShow();
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
                    <button onClick={this.openModal}>test button</button>
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
                  {data && data.length ?
                    data.map((d) =>
                      // return (
                      <>
                        <tr>
                          <td>{d.name}</td>
                          <td>{d.description}</td>
                          <td>{d.category}</td>
                          <td>
                            <a href="#editEmployeeModal" className="edit" data-target="addEmployeeModal" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
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
          <ModalPopover ref={test => this.testModal = test} modalId="abc" header="Add asdsadas Employees" isModal="true">
            <div className="finder">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea className="form-control" required defaultValue={""} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
            </ModalPopover>
          <div id="addEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Add Employee</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <textarea className="form-control" required defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                    <input type="submit" className="btn btn-success" defaultValue="Add" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Edit Modal HTML */}
          <div id="editEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Employee</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <textarea className="form-control" required defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                    <input type="submit" className="btn btn-info" defaultValue="Save" />
                  </div>
                </form>
              </div>
            </div>
          </div>
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
      </React.Fragment>
    )
  }
}

export default OrgForms;
