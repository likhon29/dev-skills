import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const allData = useLoaderData();

  const { data } = allData;
  console.log(data);
  return (
    <div className="">
      <h2 style={{margin:'0px'}}>LineChart for Topics vs Total Number of Questions</h2>
          <div className="rechart-container">
          
        <LineChart width={470} height={400} data={data}>
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
                  </LineChart>
             
              

              {/* <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default Statistics;
