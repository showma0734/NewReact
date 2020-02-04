import React from 'react';


class People extends React.Component{
  constructor(props){
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickPeople(){
    this.setState({isModalOpen: true});
  }

  handleClickClose(){
    this.setState({isModalOpen: false});
  }

  render(){
    /* eslint-disable */

    let modal;
    if(this.state.isModalOpen){
      modal = (
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-header"></div>
            <div className="modal-introduction">
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className="modal-close-btn"
              onClick={()=>{this.handleClickClose()}}
            >
            とじる
            </button>
          </div>
        </div>

      );
    }

    return (
      <div className="people-card">
          <div 
            className="people-item"
            onClick={() => {this.handleClickPeople()}}
          >
              <p>{this.props.name}</p>
          </div>
          {modal}
      </div>
       
    );
  }
}

export default People;