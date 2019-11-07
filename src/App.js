import React from 'react';
import { connect } from "react-redux";
import appActions from "./redux/actions/appActions";
import ToDo from "./components/ToDo";
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <ToDo {...props}></ToDo>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.appReducer.list
  }
}
 const mapDispatchToProps = {
   ...appActions,
 }

export default connect(mapStateToProps,mapDispatchToProps)(App);
