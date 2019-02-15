import React from 'react';
// import "./style.css";

export default class Content extends React.Component {
  componentDidMount() {
    document.querySelectorAll('.modal #closeModal').forEach((element) => {
      element.addEventListener('click', this.props.handleHide);
    });
  }
  componentWillUnmount() {
    document.querySelectorAll('.modal #closeModal').forEach((element) => {
      element.removeEventListener('click', this.props.handleHide);
    });
  }
  render() {
    const content = this.props.content;
    return (
      <div style={this.props.dim} className={this.props.bodyClass}>
        {content}
      </div>
    );
  }
}
