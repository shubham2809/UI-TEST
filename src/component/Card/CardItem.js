import React , {Component}from 'react';
import   './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './../../UI/Modal/Modal';
import Layout from './../../hoc/layout/Layout';
import * as actions from './../../store/actions/index';
import { connect } from 'react-redux';
import UserSummary from './../UserSummary/UserSummary';

let modal = null;

class carditem extends Component {

  

    handleClick = (id, event) => {
        const idlemenet =id;
        this.props.onShowModal();
         modal = <Modal show={true}><UserSummary idelem={idlemenet}></UserSummary></Modal>
    }

    render() {
        return (
            <Layout>
                <div className="col-sm-4 col-md-4 col-lg-3">
                <div className="card card-green col-md-12">
                    <div className="card-block" onDoubleClick={this.handleClick.bind(this, this.props.id)}>
                        <h3 className="card-title">{this.props.name}</h3>
                        <div className="card-text">{this.props.email}</div>
                        <div className="card-text">{this.props.city}</div>
                        <div className="card-text">{this.props.phone}</div>
                        <div className="card-text">{this.props.website}</div>
                        <div className="card-text">{this.props.companyname}</div>
                    </div>
                </div>
            </div>
            {modal}
        </Layout>   
        )
    }
}


const mapStateToProps = (state) => {
    return {
      show: state.showModal
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onShowModal: () => dispatch(actions.showModal())
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(carditem);
