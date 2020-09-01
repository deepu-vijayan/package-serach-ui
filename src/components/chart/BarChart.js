import React, { PureComponent } from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'V 1.0.1', minified: 43.4, gzipped: 5.5, amt: 2400,
    },
    {
        name: 'V 1.0.2', minified: 40.2, gzipped: 5.5, amt: 2210,
    },
    {
        name: 'V 1.0.5', minified: 40.2, gzipped: 5.4, amt: 2290,
    },
    {
        name: 'V 2.0.0', minified: 30, gzipped: 5.4, amt: 2000,
    },
    {
        name: 'V 2.0.1', minified: 29.4, gzipped: 5, amt: 2181,
    },
    {
        name: 'V 2.0.2', minified: 27, gzipped: 5, amt: 2500,
    }
];


const CustomTooltip = ({ active, payload }) => {
    if (!active) return null
    return (
      <div className="custom-tooltip" > {payload[0].payload.name}
        {payload.map((value, index) => {
          return <div style={{ color: `${value.color}`,'visibility':'visible' }} key={index}>
           <span>Version: {active.name}</span> 
           <span>Minified: {active.minified}</span>
           <span>Gzipped: {active.gzipped}</span>
          </div>
        })}
      </div>
    )
  }

function CustomBarChart() {
    return (
        <div>
            <BarChart width={600} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />}  />
                <Legend />
                <Bar dataKey="minified" fill="#8884d8" />
            </BarChart>
        </div>
    )
}

export default CustomBarChart
