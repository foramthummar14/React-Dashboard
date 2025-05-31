
import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { Paper, Grid } from '@mui/material';
import '../style/page2.css';



const barData = [
  { month: 'Jan', blue: 2500, green: -2000  },
  { month: 'Feb', blue: 2200, green: -2500 },
  { month: 'Mar', blue: 1700, green: -2000 },
  { month: 'Apr', blue: 2400, green: -2900 },
  { month: 'May', blue: 1400, green: -1800 },
  { month: 'Jun', blue: 2400, green: -2700 },
  { month: 'July', blue: 1800, green: -2100 },
  { month: 'Aug', blue: 1900, green: -2400 },
  { month: 'Sep', blue: 2600, green: -2900 },
  { month: 'Oct', blue: 1500, green: -2000 },
  { month: 'Nov', blue: 3100, green: -2900 },
  { month: 'Dec', blue: 2200, green: -2200 },
];
const Page2 = () => {
    return(
        <>
            <div className='derf'>
                <div>
                    <h5 className='re' >Expenses</h5>
                </div>
                <div className='setbt'>
                    <button type='button' className='btn alm' >All</button>
                    <button type='button' className='btn alm' >1M</button>
                    <button type='button' className='btn alm'>6M</button>
                    <button type='button' className='btn alm'>1Y</button>
                </div>
            </div>
            <hr/>
            <Grid item xs={0} md={0}>
          <Paper elevation={0} sx={{ p: 1 }}>
            <ResponsiveContainer width="100%" height={270}>
              <BarChart data={barData}
                 margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              barSize={20}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="green" stackId="a" fill="#4dd0e1"   radius={[10, 10, 10, 10]}/>
                <Bar dataKey="blue" stackId="a" fill="#2196f3"  radius={[10, 10, 10, 10]} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        </>
    )
}
export default Page2;