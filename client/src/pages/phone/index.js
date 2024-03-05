import classNames from "classnames/bind";
import style from './Phone.module.scss'

const cx = classNames.bind(style)
function Phone() {
    return ( 
        <a href='/phone' className={cx('phone')}>
             <img className={cx('phone-icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-phone-96x96-2.png" alt="Điện thoại" />
             <h5 className={cx('phone-title')}>Điện thoại</h5>
        </a>
     );
}

export default Phone;