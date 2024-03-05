import style from './Header.module.scss'
import className from 'classnames/bind'
import imgLeft from '../../../../src/media/img/header-trai.png'
import imgRight from '../../../../src/media/img/header-phai.png'
import Logo from './../../../media/img/logo.png'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from '../Search'

const cx = className.bind(style)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
           <img className={cx('img-left')} src={imgLeft} alt='header-trai' />
           <div className={cx('header-bar')}>
               <div className={cx('header-top')}>
                  <div className={cx('header-top__logo')}>
                     <a href='/' className={cx('header__logo')}>
                        <img src={Logo} alt='logo' className={cx('header-logo__img')}/>
                     </a>
                  </div>
                  <Search />
                  <div className={cx('accout-box')}>
            <a href='/accout' className={cx('accout-child')}>Tài khoản & <br></br> đơn hàng</a>
        </div>
        <div className={cx('cart-box')}>
            <a href="/cart">
                <span className={cx('cart-number')}>1</span>
                <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                <h5 className={cx('cart-title')}>Giỏ hàng</h5>
            </a>
        </div>
               </div>
               <div className={cx('header-bottom')}>
                  <a href='/phone' className={cx('phone', 'type')}>
                     <img className={cx('phone-icon', 'icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-phone-96x96-2.png" alt="Điện thoại" />
                     <h5 className={cx('phone-title', 'title')}>Điện thoại</h5>
                  </a>
                  <a href='/laptop' className={cx('laptop', 'type')}>
                        <img className={cx('laptop-icon', 'icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-laptop-96x96-1.png" alt="Laptop" />
                        <h5 className={cx('laptop-title', 'title')}>Laptop</h5>
                  </a>
                  <a href='/tablet' className={cx('tablet', 'type')}>
                        <img className={cx('tablet-icon', 'icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-tablet-96x96-1.png" alt="Tablet" />
                        <h5 className={cx('tablet-title', 'title')}>Tablet</h5>
                  </a>
                              <a href='/smartwatch' className={cx('smartwatch', 'type')}>
                        <img className={cx('smartwatch-icon', 'icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-smartwatch-96x96-1.png" alt="smartwatch" />
                        <h5 className={cx('smartwatch-title', 'title')}>Smartwatch</h5>
                  </a>
                  <a href='/watch' className={cx('watch', 'type')}>
                        <img className={cx('watch-icon', 'icon')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/watch-icon-96x96.png" alt="Đồng hồ" />
                        <h5 className={cx('watch-title', 'title')}>Đồng hồ</h5>
                  </a>
               </div>
           </div>
           
           <img className={cx('img-right')} src={imgRight} alt='header-phai' />
        </header>
     )
}

export default Header;