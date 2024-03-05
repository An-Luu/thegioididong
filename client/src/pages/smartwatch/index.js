import classNames from "classnames/bind";
import style from './Smartwatch.module.scss'

const cx = classNames.bind(style)

function Smartwatch() {
    return ( 
        <a href='/smartwatch' className={cx('smartwatch')}>
             <img className={cx('smartwatch-icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-smartwatch-96x96-1.png" alt="smartwatch" />
             <h5 className={cx('smartwatch-title')}>Smartwatch</h5>
        </a>
     );
}

export default Smartwatch;