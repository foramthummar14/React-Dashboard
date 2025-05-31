
import React from 'react';
import {
  AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,

} from 'recharts';
import {  Paper, Grid } from '@mui/material';
import '../style/page2.css';

const data = [
  { month: 'Jan', uv: 4000, pv: 2400 },
  { month: 'Feb', uv: 3000, pv: 1398 },
  { month: 'Mar', uv: 2000, pv: 9800 },
  { month: 'Apr', uv: 2780, pv: 3908 },
  { month: 'May', uv: 1890, pv: 4800 },
  { month: 'Jun', uv: 2390, pv: 3800 },
  { month: 'Jul', uv: 3490, pv: 4300 },
  { month: 'Aug', uv: 3000, pv: 2100 },
  { month: 'Sep', uv: 4000, pv: 5000 },
  { month: 'Oct', uv: 2500, pv: 6100 },
  { month: 'Nov', uv: 4500, pv: 4500 },
  { month: 'Dec', uv: 3200, pv: 7200 },
];

// const barData = [
//   { month: 'Jan', blue: 2500, green: -3000 },
//   { month: 'Feb', blue: 2200, green: -2500 },
//   { month: 'Mar', blue: 1700, green: -2000 },
//   { month: 'Apr', blue: 2400, green: -3000 },
//   { month: 'May', blue: 1400, green: -1800 },
//   { month: 'Jun', blue: 2400, green: -2700 },
//   { month: 'July', blue: 1800, green: -2100 },
//   { month: 'Aug', blue: 1900, green: -2400 },
//   { month: 'Sep', blue: 2600, green: -2900 },
//   { month: 'Oct', blue: 1500, green: -2000 },
//   { month: 'Nov', blue: 3100, green: -3000 },
//   { month: 'Dec', blue: 2200, green: -2200 },
// ];
const Page3 = () => {
    return(
        <>
            <div className='derf'>
                <div>
                    <h5 className='re' >Revenue</h5>
                </div>
                <div className='setbt'>
                    <button type='button' className='btn alm' >All</button>
                    <button type='button' className='btn alm' >1M</button>
                    <button type='button' className='btn alm'>6M</button>
                    <button type='button' className='btn alm'>1Y</button>
                </div>
            </div>
            <hr/>
            <Grid item xs={12} md={1}>
          <Paper elevation={0} sx={{ p: 1 }}>
            <ResponsiveContainer width="100%" height={270}>
              <AreaChart data={data} margin={{ top: 1, right: 1, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="pv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Line type="monotone" dataKey="uv" stroke="#4caf50" strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        </>
    )
}
export default Page3;