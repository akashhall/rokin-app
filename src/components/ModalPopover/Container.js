import React from 'react';
// import './style.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Container extends React.Component {
  // constructor(props) {
  //   super(props);

    // this.handleOutsideClick = this.handleOutsideClick.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  // }

  // handleOutsideClick(e) {
  //   if (!this.node.contains(e.target)) {
  //     this.props.handleHide();
  //   }
  // }

  // handleKeyPress(e) {
  //   if (e.keyCode === 27) {
  //     this.props.handleHide();
  //   }
  // }

  // componentDidMount() {
  //   if (this.props.dataKeyBoard) {
  //     document.addEventListener('keyup', this.handleKeyPress);
  //   }
  //   if (this.props.dataBackDrop === 'true') {
  //     document.addEventListener('click', this.handleOutsideClick, true);
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.props.dataKeyBoard) {
  //     document.removeEventListener('keyup', this.handleKeyPress);
  //   }
  //   if (this.props.dataBackDrop) {
  //     document.removeEventListener('click', this.handleOutsideClick, true);
  //   }
  // }

  render() {
    let mainClass;
    let headerClass;
    let contentClass;
    let footerClass;
    let bodyClass;
    if (this.props.isModal === 'true') {
      mainClass = 'modal-dialog';
      headerClass = 'modal-header';
      contentClass = 'modal-content';
      footerClass = 'modal-footer';
      bodyClass = 'modal-body';
    } else {
      mainClass = 'popover';
      headerClass = 'popover-header';
      contentClass = 'popover-content';
      footerClass = 'popover-footer';
      bodyClass = 'popover-body';
    }
    const outerClass = this.props.outerClass;
    const innerClass = this.props.innerClass;
    const width = this.props.width;
    const height = this.props.height;
    const content = this.props.content;
    const option = this.props.option;
    const header = this.props.header;
    const footer = this.props.footer;
    const showOptions = this.props.showOptions;
    const dismiss = this.props.dismiss;
    const headerData = this.props.headerData;
    const dismissButton = this.props.dismissButton;
    let modal = '';
    const modalDimensions =
      {
        width,
        height,
        overflowY: 'scroll',
      };


    modal = (
      <div className={mainClass + ' ' + outerClass} ref={(node) => { this.node = node; }}>
        <div className={contentClass + ' ' + innerClass}>
          {header || headerData ? <Header dismissButton={dismissButton} headerTitleClass={this.props.headerTitleClass} headerClass={headerClass} dismiss={dismiss} header={header} headerData={headerData} handleHide={this.props.handleHide} /> : null}
          <Content dim={width || height ? modalDimensions : null} bodyClass={bodyClass} content={content} handleHide={this.props.handleHide} />
          {footer ? <Footer footerClass={footerClass} howOptions={showOptions} option={option} footer={footer} /> : null}
        </div>
      </div>
    );

    return (
      modal
    );
  }
}
export default Container;
