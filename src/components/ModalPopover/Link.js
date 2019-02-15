import React from 'react';
import ReactDOM from 'react-dom';

class Link extends React.Component {
  componentDidMount() {
    // console.log('lllllllllllll', this.props.ele, window);
     /* eslint-disable */
    ReactDOM.findDOMNode(this).addEventListener('click', this.props.onClick);
    // console.log('kk', ReactDOM.findDOMNode(this));
    /* eslint-enable */
  }
  render() {
    return (this.props.link);
  }
}
export default Link;
