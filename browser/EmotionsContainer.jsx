import React from 'react';
var SmoothieComponent = require('react-smoothie');
import Happiness from './Happiness';
import Surprise from './Surprise';
import Neutral from './Neutral';
import Fear from './Fear';
 
var EmotionsContainer = React.createClass({

  render: function() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <Happiness />
                    <Fear/>
                </div>
                <div className="col-lg-6">
                    <Neutral />
                    <Surprise />
                </div>
            </div>
        </div>
    )
    ;
  },
});

export default EmotionsContainer;