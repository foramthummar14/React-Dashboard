
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import '../style/box1.css';
const Box1 = ()=> {
    return(
        <>
            <div className='box1set'>
                <div>
                    <h3 className='kk' >$55.6k</h3>
                    <p className='walt'>Wallet Balance</p>
                    <span className='wal'  >8.72%</span>
                </div>
                <div className='topic'>
                    <TopicOutlinedIcon/>
                </div>
            </div>
        </>
    )
}
export default Box1;