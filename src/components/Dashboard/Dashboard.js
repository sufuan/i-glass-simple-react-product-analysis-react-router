import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const [chart, seChart] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => seChart(data))

  }, [])
  return (
    <div className='flex justify-evenly pt-10'>

      <div>
        <BarChart width={400} height={300} data={chart}>
          <Bar dataKey="sell" fill="#8884d8" />
          <XAxis dataKey='month'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        <p className="text-sm text-center text-gray-600">sales per month</p>
      </div>


      <div>
        <LineChart width={400} height={300} data={chart}>
          <Line type="monotone" dataKey="investment" stroke="#8884d8" strokeWidth={2} />
          <XAxis dataKey='month'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
        <p className="text-sm text-center text-gray-600">investment per month</p>

      </div>

      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={chart}
            dataKey="revenue"
            cx={200}
            cy={200}
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={chart}
            dataKey="month"
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;