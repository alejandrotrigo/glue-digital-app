import React from 'react';
import ScrumPokerLib from 'scrum-poker-lib'
import {connect} from 'react-redux';

class ResultComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    };
  }

  async getResults(){
    this.setState({
      isLoading: true
    });

  }

  render(){
    const sp = new ScrumPokerLib(this.props.name)



    const results = (
      <div>
      <p>Tu puntuación: {this.props.score}</p>
      <h3> Resto de puntuaciones: </h3>
      <ul>
        {
          sp.on('reveal', async cards => {
            cards.forEach(c => {
              <li>{c.user} voted {c.value}</li>
            })
          })
        }
      </ul>
      </div>
    );

    const wait = (
      <p>Esperando por el resto de puntuaciones</p>
    );
    console.log(sp.getValues());
    if (this.getResults){
      return wait;
    }
    return results;
  }
}

const mapStateToProps = (state) => {
  return {
    name : state.MainReducer.name,
    score : state.MainReducer.score
  }
}

export default connect(
  mapStateToProps,
  null)(ResultComponent);
