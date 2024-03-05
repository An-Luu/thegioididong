import classNames from "classnames/bind";
import style from './Watch.module.scss'

const cx = classNames.bind(style)

function Watch() {
    return ( 
        <a href='/watch' className={cx('watch')}>
             <img className={cx('watch-icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/watch-icon-96x96.png" alt="Đồng hồ" />
             <h5 className={cx('watch-title')}>Đồng hồ</h5>
        </a>
     );
}

export default Watch;