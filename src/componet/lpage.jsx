import avtar2 from '../Assest/avatar-1-54wpc3UM.jpg';
import avtar3 from '../Assest/avatar-2-BAiJVBqY.jpg';
import avtar4 from '../Assest/avatar-3-Bi31RRbt.jpg';
import avtar5 from '../Assest/avatar-4-CXYbicpj.jpg';
import avtar6 from '../Assest/avatar-5-C7i8R-Po.jpg';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import '../style/lpage.css';
const items = [
    {
        label: (
           'Faild'
        ),
        key: '0',
    },
    {
        label: 'Paid',
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: 'OnHold',
        key: '3',
        // disabled: true,
    },
];
const Lpage1 = () => {
    return (
        <>
            <div className='transa'>
                <div>
                    <h3>Transactions</h3>
                </div>
                <div>
                    <Dropdown menu={{ items }}>
                        <button onClick={e => e.preventDefault()} className=" btn dropdown-trigger">
                            <Space>
                                ALL
                                <DownOutlined />
                            </Space>
                        </button>
                    </Dropdown>

                    
                </div>
            </div>
            <div>
                <table className=" table table-hover ">
                    <thead className='cnqwsa'>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Timestamp</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                            <td>
                                <div className='setdwe'>
                                    <img src={avtar2} alt="" className='avtqwe'  ></img>
                                    <p>Anna M. Hines</p>
                                </div>


                            </td>
                            <td >Commissions</td>
                            <td style={{ color: '#22c55e' }}>$120.55</td>
                            <td >Wed Apr 24 2024 </td>
                            <td style={{ color: '#22c55e' }}>Cr.</td>
                        </tr>
                        <tr>
                            <td>
                                <div className='setdwe'>
                                    <img src={avtar3} alt="" className='avtqwe'  ></img>
                                    <p>Candice F. Gilmore</p>
                                </div>
                            </td>
                            <td>Affiliates</td>
                            <td style={{ color: '#22c55e' }}>$9.68</td>
                            <td>Thu Dec 06 2018 </td>
                            <td style={{ color: '#22c55e' }}>Cr.</td>
                        </tr>
                        <tr>
                            <td>
                                <div className='setdwe'>
                                    <img src={avtar4} alt="" className='avtqwe'  ></img>
                                    <p>Vanessa R. Davis</p>
                                </div>
                            </td>
                            <td>Grocery</td>
                            <td style={{ color: 'red' }}>$105.22</td>
                            <td>Sat Apr 20 2024  </td>
                            <td style={{ color: 'red' }}>Dr.</td>
                        </tr>
                        <tr>
                            <td>
                                <div className='setdwe'>
                                    <img src={avtar5} alt="" className='avtqwe'  ></img>
                                    <p>Judith H. Fritsche</p>
                                </div>
                            </td>
                            <td>Refunds</td>
                            <td style={{ color: '#22c55e' }}>$80.59</td>
                            <td>Thu Apr 18 2024  </td>
                            <td style={{ color: '#22c55e' }}>Cr.</td>
                        </tr>
                        <tr>
                            <td>
                                <div className='setdwe'>
                                    <img src={avtar6} alt="" className='avtqwe'  ></img>
                                    <p>Peter T. Smith</p>
                                </div>
                            </td>
                            <td>Bill Payments</td>
                            <td style={{ color: 'red' }}>$750.95</td>
                            <td>Thu Apr 18 2024 </td>
                            <td style={{ color: 'red' }}>Dr.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default Lpage1;