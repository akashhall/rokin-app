import React from 'react';
import MultiSearchSelect from "react-search-multi-select";
import { getAllCommon } from './../../../../../api';
import './styles.scss'

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.userIdArray = [];
    this.state = {
      data: [],
      users: [],
      message: '',
      title: '',
      // titleErrorMessage: false,
      messageErrorMessage: false,
      selectionErrorMessage: false,
    };
  }
  componentDidMount() {
    const usersData = [];
    getAllCommon('get-admin-users', { user_type: "storeadmin" }).then((res) => {
      res.data.map((data) => { usersData.push(data.name) });
      this.setState({ data: res.data, users: usersData })
    })
  }
  submit = (e) => {
    e.preventDefault();
    // this.state.title === '' ? this.setState({ titleErrorMessage: true }) : this.setState({ titleErrorMessage: false })
    this.state.message === '' ? this.setState({ messageErrorMessage: true }) : this.setState({ messageErrorMessage: false })
    this.userIdArray.length === 0? this.setState({ selectionErrorMessage: true }) : this.setState({ selectionErrorMessage: false })

    if(this.state.message !== '' && this.userIdArray.length !== 0 ) {
       let data = {
        user_ids : this.userIdArray,
        notification_message: this.state.message,
        image: '',
        image_url: '',
       }
       getAllCommon('send-notification', data).then((res) => {
              console.log(res);
      })
    }
  }
  handleChange = (arr) => {
    let userArray = [];
    arr.map((data) => {
      this.state.data.map((obj) => {
        if (obj.name === data) {
          !userArray.includes(obj.uuid) && userArray.push(obj.uuid);
        }
      })
    })
    this.userIdArray = userArray;
    console.log(this.userIdArray)
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Notifications</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="col-md-10" style={{}}>
                <div className="col-md-offset-1 col-md-10 " style={{ padding: '0px' }}>
                  <div className="row" style={{ paddingTop: '50px' }}>
                    <form style={{ 'width': '100%', 'marginLeft': '100px' }}>
                      <div style={{ 'marginBottom': '5px', marginLeft: '-9px' }}>
                        <div style={{ marginLeft: '10px' }}> Select User:
                        </div>
                        <MultiSearchSelect searchable={true} showTags={true} multiSelect={true} width="102%" onSelect={this.handleChange} options={this.state.users} />

                        {this.state.selectionErrorMessage && <span style={{ display: 'block' ,marginLeft: '10px', color:'red'}}> Please Fill required value</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="usr" style={{ display: 'block' }}>Title:</label>

                        <input name="title" style={{ width: '100%' }} onChange={this.onChange} type="text" placeholder="Please Enter Title" name="title" ng-model="NC.title" required />
                        {/* {this.state.titleErrorMessage && <span style={{ display: 'block', color:'red' }}> Please Fill required value</span>} */}
                      </div>
                      <div className="form-group">
                        <label htmlFor="comment">Message:</label>

                        <textarea style={{ backgroundColor: 'white' }} onChange={this.onChange} name="message" className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" rows={5} name="message" ng-model="NC.message" required defaultValue={""} />
                        {this.state.messageErrorMessage && <span style={{ display: 'block', color:'red' }}> Please Fill required value</span>}
                      </div>
                      <div className="text-right">
                        <button className="btn btn-primary" onClick={this.submit} disabled="">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Notifications;
