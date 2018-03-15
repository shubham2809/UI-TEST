import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';

import Carditem from './CardItem';
import { connect } from 'react-redux';
import Layout from './../../hoc/layout/Layout';
import * as actions from './../../store/actions/index';
import ErrorBoundry from './../../ErrorBoundry/ErrorBoundry';
import Spinner from './../../UI/Spinner/Spinner';

var divStyle = { textAlign: 'center' }

class card extends Component {

  componentDidMount() {
      this.props.onfetchDetails();
  }




  render() {
    const usersInfo = [...this.props.users];

    let Cards = null;
    if (this.props.loading) {
      Cards = <Spinner/>
    }
    else {
    Cards  = usersInfo.map(usr => {
        return (
                    <Carditem 
                    key={usr.id}
                    id={usr.id}
                    name={usr.name}
                    email={usr.email}
                    city={usr.address.city}
                    phone={usr.phone}
                    website={usr.website}
                    companyname={usr.company.name}
                    />
        )
      })
    }

    return (
      <Layout>
            <p style={divStyle}>Double click on card to edit it</p>
            <div className="row">
            <ErrorBoundry>
                {Cards}
            </ErrorBoundry>   
            </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users : [...state.userDetails],
    loading: state.loading,
    show: state.showModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchDetails: () => dispatch(actions.fetchDetails()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(card);