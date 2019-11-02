import React, { Component } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  ReferenceLine,
  Bar
} from "recharts";

const data = [
  {
    date: "Week 1",
    score: 10
  },
  {
    date: "Week 2",
    score: 25
  },
  {
    date: "Week 3",
    score: 19
  },
  {
    date: "Week 4",
    score: 9
  },
  {
    date: "Week 5",
    score: 11
  },
  {
    date: "Week 6",
    score: 15
  },
  {
    date: "Week 7",
    score: 1
  },
  {
    date: "Week 8",
    score: 10
  },
  {
    date: "Week 9",
    score: 25
  },
  {
    date: "Week 10",
    score: 19
  },
  {
    date: "Week 11",
    score: 35
  },
  {
    date: "Week 12",
    score: 11
  },
  {
    date: "Week 13",
    score: 15
  },
  {
    date: "Week 14",
    score: 9
  }
];

const normal = [0];
const mild = 9;
const moderate=13;
const severe=20;
const extremely=27;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Mental Health</h1>
        </header>
        <h2 style={{ textAlign: "left" }}> Depression Graph </h2>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dateKey="score" tick={false}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" name="progress" dataKey="score" stroke="#8884d8" />
          <ReferenceLine y={0} label={{ position: 'top',  value: 'Normal', fill: 'black', fontSize: 14 }} stroke="green"/>
          <ReferenceLine y={9} label={{ position: 'top',  value: 'Mild', fill: 'black', fontSize: 14 }} stroke="blue"/>
          <ReferenceLine y={13} label={{ position: 'top',  value: 'Moderate', fill: 'black', fontSize: 14 }} stroke="black"/>
          <ReferenceLine y={20} label={{ position: 'top',  value: 'Severe', fill: 'black', fontSize: 14 }} stroke="purple"/>
          <ReferenceLine y={27} label={{ position: 'top',  value: 'Extremely Severe', fill: 'black', fontSize: 14 }} stroke="red" />



        </LineChart>
      </div>
    );
  }
}

export default App;