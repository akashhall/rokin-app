import React from 'react';
class Notifications extends React.Component {
  constructor(props) {
    super(props);
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
                    <form style={{'width': '100%', 'marginLeft':'100px' }}>
                      <div className="form-group">
                        <label htmlFor="sel1">Select UserName:</label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="usr">Title:</label>
                        <input className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" style={{ backgroundColor: '#eee' }} type="text" placeholder="Please Enter Title" name="title" ng-model="NC.title" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="comment">Message:</label>
                        <textarea style={{ backgroundColor: 'white' }} className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" rows={5} name="message" ng-model="NC.message" required defaultValue={""} />
                      </div>
                      <div className="text-right">
                        <button type="submit" className="btn btn-default" ng-disabled="hrcForm.$invalid" ng-click="NC.sendPushNotification()" disabled="disabled">Submit</button>
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