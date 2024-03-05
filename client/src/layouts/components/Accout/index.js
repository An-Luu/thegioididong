import style from './Accout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(style)

function Accout() {
    return ( 
        <div className={cx('accout-box')}>
            <a href='/accout' className={cx('accout-child')}>Tài khoản & <br></br> đơn hàng</a>
        </div>
     );
}

export default Accout;