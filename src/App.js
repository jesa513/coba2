import React, { Component } from 'react';
// import './App.css';
// import './support/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import HeaderBertasbih from './components/HeaderBertasbih';
import LoginBertasbih from './components/LoginBertasbih';
import HomeBertasbih from './components/HomeBertasbih';
import PopokListBertasbih from './components/PopokListBertasbih';
import RegisterBertasbih from './components/RegisterBertasbih';
import ManagePopokBertasbih from './components/ManagePopokBertasbih';
import PopokDetail from './components/PopokDetail';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { keepLogin, cookieChecked} from './actions';
import { withRouter} from 'react-router-dom';


const cookies = new Cookies();


// import Footer1 from './components/Footer1';
// import InputData from './components/InputData';

class App extends Component {
  state = { content: 'Ini content'}

  componentDidMount() {
    const username = cookies.get('Ferguso');
    if(username !== undefined) {
        this.props.keepLogin(username);
    }
    else {
      this.props.cookieChecked();
    }
}


  btnOnclick = () => {
    this.setState({content: 'This is Content'})
  }

  
  
  render() {
    if(this.props.cookie) {
      return(
      <div>
        {/* <Header1 
          headerText={"Blessing Commerce"} 
          angka={500} 
          obj={{nama:'Ivana'}}/>
        <Header1 /> */}
        <HeaderBertasbih navBrand={"Bertasbih"}/>

       <div> 
       <Route exact path="/" component={HomeBertasbih}/> 
       <Route path="/login" component={LoginBertasbih}/>
       <Route path="/register" component={RegisterBertasbih}/>
       <Route path="/popoklist" component={PopokListBertasbih}/>
       <Route path="/managepopok" component={ManagePopokBertasbih}/>
       <Route path="/popokdetail" component={PopokDetail}/>
       </div>
      </div>
      )
  }


    
    return ( <div>
            <center><h1>Loading..</h1></center>
            </div>);
     
    }
}

const mapStateToProps = (state) => {
  return { cookie: state.auth.cookie }
}
export default withRouter(connect(mapStateToProps, {keepLogin,cookieChecked})(App));



