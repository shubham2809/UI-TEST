import React , {Component} from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import Layout from './../../hoc/layout/Layout';
import Backdrop from './../Backdrop/Backdrop';

class modal extends Component {
    render() {
        return (
           <Layout>
               <Backdrop/>
            <div className="Modal"
            style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}> 
            {this.props.children}
        </div>
        </Layout> 
        )
    }
}

const mapStateToProps = state => {
    return {
        show: state.showModal
    }
}


export default connect(mapStateToProps,null)(modal);