import React from 'react';
var SmoothieComponent = require('react-smoothie');
 
var Fear = React.createClass({
  // ...


  render: function() {
    return (
        <div>
            <h2>Fear</h2>
            <SmoothieComponent ref="chart" width="300" height="300" />
        </div>
        );
  },
 
  componentDidMount: function() {
    // var ts1 = this.refs.chart.addTimeSeries({},{ strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
    var ts2 = this.refs.chart.addTimeSeries({},{ strokeStyle: 'rgba(255, 0, 0, 1)', fillStyle: 'rgba(255, 0, 0, 0.2)', lineWidth: 4 });
    // // var ts3 = this.refs.chart.addTimeSeries({},{ strokeStyle: 'rgba(0, 0, 255, 1)', fillStyle: 'rgba(255, 0, 0, 0.2)', lineWidth: 4 });
    // var ts4 = this.refs.chart.addTimeSeries({},{ strokeStyle: 'rgba(255, 255, 255, 1)', fillStyle: 'rgba(255, 0, 0, 0.2)', lineWidth: 4 });
 
    this.dataGenerator = setInterval(function() {
      var time = new Date().getTime();
      ts2.append(time, Math.random());
   
    }, 500);
  },
 
  componentWillUnmount: function() {
    clearInterval(this.dataGenerator);
  }
});

export default Fear;