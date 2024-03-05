import classNames from "classnames/bind";
import style from './Laptop.module.scss'

const cx = classNames.bind(style)

function Laptop() {
    return ( 
        <a href='/laptop' className={cx('laptop')}>
             <img className={cx('laptop-icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-laptop-96x96-1.png" alt="Laptop" />
             <h5 className={cx('laptop-title')}>Laptop</h5>
        </a>
     );
}

export default Laptop;