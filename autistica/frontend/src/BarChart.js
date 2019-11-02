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
  Bar,
  BarChart,
  ResponsiveContainer
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



class App extends Component {
	render () {
		return (

		       <BarChart
              width={700}
              height={350}
		          data={data}
		          margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
		        >
		          <CartesianGrid strokeDasharray="3 3" fill="white" />
		          <XAxis dataKey="date" />
		          <YAxis dateKey="score" tick={false}/>
		          <Tooltip />
		          <Legend />
		          <Bar dataKey="score" fill="#8884d8" />
		          <ReferenceLine y={0} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Normal', fill: 'black', fontSize: 18}} stroke="green"/>
		          <ReferenceLine y={7} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Mild', fill: 'black', fontSize: 18}} stroke="blue"/>
		          <ReferenceLine y={9} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Moderate', fill: 'black', fontSize: 18}} stroke="black"/>
		          <ReferenceLine y={14} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Severe', fill: 'black', fontSize: 18}} stroke="purple"/>
		          <ReferenceLine y={19} label={{ infront: 'true', position: 'insideBottomRight', value: 'Extremely Severe', fill: 'black', fontSize: 18}} stroke="red"/>
		       </BarChart>

		);
	}
}

export default App;
