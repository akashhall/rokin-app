import React from 'react';
// import "./style.css";

export default class Header extends React.Component {
  render() {
    const header = this.props.header;
    const dismiss = this.props.dismiss;
    const headerData = this.props.headerData;
    const dismissButton = this.props.dismissButton;
    return (
      <div className={this.props.headerClass}>
        {dismissButton && dismissButton }
        {header ? <h4 className={'modal-title ' + this.props.headerTitleClass}>{header}</h4> : ''}
        {dismiss === 'true' ? <button type="button" className="close" onClick={this.props.handleHide}>&times;</button> : ''}
        {headerData}
      </div>
    );
  }
}
