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

class LineChartComponent extends Component {
	render () {
		return (

	        <LineChart
           width={700}
          height={350}
		        data={data}
		        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
		    	>
				<CartesianGrid strokeDasharray="3 3" fill="white" />
				<XAxis dataKey="date" />
				<YAxis dateKey="score" tick={false}/>
				<Tooltip />
				<Legend />
				<Line type="monotone" name="score" dataKey="score" stroke="#8884d8" />
				<ReferenceLine y={0} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Normal', fill: 'black', fontSize: 18}} stroke="green"/>
				<ReferenceLine y={9} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Mild', fill: 'black', fontSize: 18}} stroke="blue"/>
				<ReferenceLine y={13} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Moderate', fill: 'black', fontSize: 18}} stroke="black"/>
		        <ReferenceLine y={20} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Severe', fill: 'black', fontSize: 18}} stroke="purple"/>
		        <ReferenceLine y={27} label={{ infront: 'true', position: 'insideBottomRight', value: 'Extremely Severe', fill: 'black', fontSize: 18}} stroke="red"/>
		      </LineChart>

	     );
	}
}

export default LineChartComponent;

// import React, { PureComponent } from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';
//
// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];
//
// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
//
//   render() {
//     return (
//       <LineChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5, right: 30, left: 20, bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//       </LineChart>
//     );
//   }
// }
