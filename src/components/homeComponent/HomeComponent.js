import React from 'react';
import {connect} from 'react-redux';
import styles from './homeComponent.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {addName} from '../../actions/MainActions';

class HomeComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
  };

  clickButton(e){
    e.preventDefault();
    this.props.addName(this.state.name);
    this.props.history.push('/score')
  };

  handleChange(event){
    this.setState({name: event.target.value});
  };

  render(){

    return(
      <div className={styles.homeComponent}>
        <h3>Como te llamas?</h3>
        <TextField onChange={this.handleChange}/>
        <Button variant="contained"
          color="primary"
          onClick={this.clickButton}>
          GO!
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addName : (name) => { dispatch(addName(name)) }
  }
}

export default connect(
  null,
  mapDispatchToProps)(HomeComponent);

//export default HomeComponent;
