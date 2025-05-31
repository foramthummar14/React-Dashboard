import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import '../style/lpage.css';
// mport * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
    { value: 30, color: 'rgb(28, 132, 238)' },  // blue (same as image)
    { value: 40, color: 'rgb(78, 202, 194)' },
    { value: 20, color: 'rgb(238, 242, 247)' },      // light gray (same as image)
];

const size = {
    width: 200,
    height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children} Total 350
        </StyledText>
    );
}

const Lpage2 = () => {
    return (
        <>
            <div className='transa'>
                <div>
                    <h6>Revenue Sources</h6>
                </div>
                <div>
                    <PendingOutlinedIcon />
                </div>
            </div>
            <div className='pichrt'>
                <PieChart
                    series={[{
                        data,
                        innerRadius: 80,
                        outerRadius: 100,
                        cornerRadius: 5,
                    }]}
                    {...size}
                >
                    <PieCenterLabel />
                </PieChart>

            </div>
            <div>
                <table className='table table-hover' >
                    <thead>
                        <tr>
                            <th>Sources</th>
                            <th>Revenue</th>
                            <th>Perc.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Online</td>
                            <td>$187,232</td>
                            <td>48.63%<span style={{color:'#22c55e'}}>2.5% Up</span></td>
                        </tr>
                        <tr>
                            <td>Offline</td>
                            <td>$126,874</td>
                            <td>36.08% <span style={{color:'#22c55e'}}>8.5% Up</span> </td>
                        </tr>
                        <tr>
                            <td>Direct</td>
                            <td>$90,127</td>
                            <td>23.41% <span style={{color:'red'}}>10.98% Down</span> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Lpage2;