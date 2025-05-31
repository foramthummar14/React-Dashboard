import React from 'react';
// import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import avta from '../Assest/avatar-1-54wpc3UM.jpg';
import '../style/header.css';

const Header1 = () => {
    return(
        <>
                <div className='setheder'>
                    <div>
                          <Input size="large" placeholder="Search..." prefix={<SearchOutlinedIcon />} />
                    </div>
                    <div className='ben'>
                            <BedtimeOutlinedIcon  className='imui'/>
                            <EventAvailableIcon className='imui'/>
                            <NotificationsIcon className='imui'/>
                            <SettingsIcon className='imui'/>
                            <AvTimerIcon className='imui'/>
                            <img src={avta} alt=''  className='setavt'></img>
                    </div>
                </div>
        </>
    )
}
export default Header1;