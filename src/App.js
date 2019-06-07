import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './App.css';
class App extends Component() {
  render (){
    const options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'My chart'
      },
      series: [
        {
          data: [1, 2, 1, 4, 3, 6]
        }
      ]
    };
    return (
      <div className="App">
        <header className="App-header">
        <input type="file" accept="image/*;capture=camera"></input>        
        </header>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default App;
