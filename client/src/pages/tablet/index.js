import classNames from "classnames/bind";
import style from './Tablet.module.scss'

const cx = classNames.bind(style)

function Tablet() {
    return ( 
        <a href='/tablet' className={cx('tablet')}>
             <img className={cx('tablet-icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-tablet-96x96-1.png" alt="Tablet" />
             <h5 className={cx('tablet-title')}>Tablet</h5>
        </a>
     );
}

export default Tablet;