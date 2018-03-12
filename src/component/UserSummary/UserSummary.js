import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './../../hoc/layout/Layout';
import {connect} from 'react-redux';
import * as action from './../../store/actions/index';


//Temporary fields to store user InputData
let userInputData = {
  id: null,
  name: null,
  email: null,
  city: null,
  phone: null,
  website: null,
  companyName: null
}

class UserSummary extends Component {



  eventChangeHandler = (event) => {

    //Destructuring vlaue from event.target
    let { value ,title } = event.target;

    if (title === "name"){
      userInputData.name = value;
    }

    if (title === "email"){
      userInputData.email = value;
    }

    if (title === "city"){
      userInputData.city = value;
    }

    if (title === "phone"){
      userInputData.phone = value;
    }

    if (title === "website"){
      userInputData.website = value;
    }

    if (title === "company-name"){
      userInputData.companyName = value;
    }
}

  render() {
    const index = this.props.idelem;
    return (
      <Layout>
            <input onChange ={this.eventChangeHandler}
            className="form-control form-control-sm" type="text" title="name"  placeholder={this.props.singleuserdetails[index].name}/>
            <input onChange ={this.eventChangeHandler}
            className="form-control form-control-sm" type="text" title="email"  placeholder={this.props.singleuserdetails[index].email}/>
            <input onChange ={this.eventChangeHandler}
            className="form-control form-control-sm" type="text" title="city" placeholder={this.props.singleuserdetails[index].address.city}/>
            <input onChange ={this.eventChangeHandler}
            className="form-control form-control-sm" type="text" title="phone" placeholder={this.props.singleuserdetails[index].phone}/>
            <input onChange ={this.eventChangeHandler}
            className="form-control form-control-sm" type="text" title="website" placeholder={this.props.singleuserdetails[index].website}/>
            <input onChange ={this.eventChangeHandler}
            className="form-control form-control-sm" type="text" title="company-name" placeholder={this.props.singleuserdetails[index].company.name}/>
            <button type="submit" onClick={() => this.props.onUpdateUserDetails(index,userInputData)} className="btn btn-primary">Submit</button>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleuserdetails: [...state.userDetails]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUserDetails: (index,userInputData) => dispatch(action.updateSingleUserDetail(index,userInputData))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(UserSummary);

