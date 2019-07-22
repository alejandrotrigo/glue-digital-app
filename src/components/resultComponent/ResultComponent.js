import React from 'react';
import ScrumPokerLib from 'scrum-poker-lib'

const sp = new ScrumPokerLib('Alice')

class ResultComponent extends React.Component {


  render(){
    sp.on('reveal', cards => console.log(cards))
    return (
      <div>
        {
          sp.getValues();
          sp.pick(5)
        }
      </div>
    )
  }
}
