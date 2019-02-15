import React from 'react';
// import "./style.css";

export default class Footer extends React.Component {
  render() {
    // const showOptions = this.props.showOptions ? this.props.showOptions : false;
    // const options = this.props.option ? this.props.option : '';
    const footer = this.props.footer ? this.props.footer : '';

    return (
      <div className={this.props.footerClass}>
        {footer || ''}
        {/*  {showOptions ? options.map((option, id) => <button key={id} className="btn btn-default" data-dismiss="modal" onClick={option.method}> {option.name} </button> : ''} */}
      </div>
    );
  }
}
