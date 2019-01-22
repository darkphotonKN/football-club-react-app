import React, { Component } from 'react';

import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Stripes extends Component {
  state = {
    stripes: [
      {
        background: '#98c5e9'
      },
      {
        background: '#ffffff'
      },
      {
        background: '#98c5e9'
      }
    ]
  };

  showStripes = () => {
    return this.state.stripes.map((stripe, i) => (
      // return an Animate compoonent from react-move
      <Animate
        key={i}
        show={true}
        start={{
          background: '#fff'
        }}
        enter={{
          background: [stripe.background],
          // time it takes to animate
          timing: { delay: 500, duration: 200, ease: easePolyOut }
        }}
      >
        {({ background }) => {
          return <div className="stripe" style={{ background: background }} />;
        }}
      </Animate>
    ));
  };
  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
