import React from 'react';
import Container from './Container';
import Link from './Link';

class ModalPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.show = false;
  }
  handleOutsideClick = (e) => {
    console.log('outside');
    if (!this.container.node.contains(e.target)) {
      this.handleHide();
    }
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 27) {
      this.handleHide();
    }
  }
  handleShow() {
    console.log('show')
    if (!this.show) {
      if (typeof document !== 'undefined') {
        const element = document.querySelector('.container-fluid');
        if (element) {
          element.classList.remove('containerAnimation');
        }
      }
      this.modalContainer.style.display = 'block';
      this.modalContainer.classList.add('in');
      this.show = true;
      if (!this.props.fadeIn) {
        const div = document.createElement('div');
        div.setAttribute('class', 'modal-backdrop fade in');
        // document.body.style.overflow = 'hidden';
        document.body.appendChild(div);
      }
      if (this.dataKeyBoard) {
        document.addEventListener('keyup', this.handleKeyPress);
      }
      if (this.dataBackDrop === 'true') {
        document.addEventListener('click', this.handleOutsideClick, true);
      }
      if (this.props.showFun) {
        this.props.showFun();
      }
    }
  }

  handleHide() {
    console.log('hide');
    if (this.show) {
      this.modalContainer.style.display = 'none';
      this.modalContainer.classList.remove('in');
      // document.body.style.overflow = 'auto';
      this.show = false;
      if (!this.props.fadeIn) {
        document.body.removeChild(document.querySelector('.modal-backdrop'));
      }
      if (this.dataKeyBoard) {
        document.removeEventListener('keyup', this.handleKeyPress);
      }
      if (this.dataBackDrop) {
        document.removeEventListener('click', this.handleOutsideClick, true);
      }
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }

  componentWillUnmount() {
    // document.body.style.overflow = 'auto';
    if (document.querySelector('.modal-backdrop')) {
      document.body.removeChild(document.querySelector('.modal-backdrop'));
    }
    if (this.dataKeyBoard) {
      document.removeEventListener('keyup', this.handleKeyPress);
    }
    if (this.dataBackDrop) {
      document.removeEventListener('click', this.handleOutsideClick, true);
    }
  }

  render() {
    const isModal = this.props.isModal;
    const outerClass = this.props.outerClass ? this.props.outerClass : '';
    const innerClass = this.props.innerClass ? this.props.innerClass : '';
    const width = this.props.width ? this.props.width : null;
    const height = this.props.height ? this.props.height : null;
    const content = this.props.children ? this.props.children : '';
    const option = this.props.option ? this.props.option : '';
    const header = this.props.header ? this.props.header : '';
    const headerData = this.props.headerData ? this.props.headerData : null;
    const footer = this.props.footer ? this.props.footer : '';
    const dataKeyBoard = this.props.dataKeyBoard === 'false' ? this.props.dataKeyBoard : 'true';
    this.dataKeyBoard = dataKeyBoard;
    const dataBackDrop = this.props.dataBackDrop ? this.props.dataBackDrop : 'true';
    this.dataBackDrop = dataBackDrop;
    const showOptions = this.props.showOptions ? this.props.showOptions : false;
    const dismiss = this.props.dismiss ? this.props.dismiss : 'true';
    const modalId = this.props.modalId ? this.props.modalId : null;
    const inputAttribute = {};
    const modalClass = this.props.modalClass ? this.props.modalClass : '';
    const headerTitleClass = this.props.headerTitleClass ? this.props.headerTitleClass : '';
    const dismissButton = this.props.dismissButton ? this.props.dismissButton : '';
    /* eslint-disable */
    modalId ? inputAttribute.id = modalId : '';
    /* eslint-enable */
    // const modal = (<Container ref={container => this.container = container} dismissButton={dismissButton} headerTitleClass={headerTitleClass} isModal={isModal} height={height} width={width} outerClass={outerClass} innerClass={innerClass} dismiss={dismiss} content={content} dataKeyBoard={dataKeyBoard} dataBackDrop={dataBackDrop} showOptions={showOptions} option={option} header={header} headerData={headerData} footer={footer} handleHide={this.handleHide} />);

    return (
      <div>
        {/* {this.props.modalLink} */}
        {this.props.modalLink ?
          <Link link={this.props.modalLink} onClick={this.handleShow} /> : null}
        <div {...inputAttribute} style={{ overflowY: 'auto', overflowX: 'hidden' }} className={'modal fade show ' + modalClass} ref={(node) => { this.modalContainer = node; }}>
          {/* {modal} */}
          <Container ref={container => this.container = container} dismissButton={dismissButton} headerTitleClass={headerTitleClass} isModal={isModal} height={height} width={width} outerClass={outerClass} innerClass={innerClass} dismiss={dismiss} content={content} dataKeyBoard={dataKeyBoard} dataBackDrop={dataBackDrop} showOptions={showOptions} option={option} header={header} headerData={headerData} footer={footer} handleHide={this.handleHide} />
        </div>
      </div>
    );
  }
}
export default ModalPopover;
