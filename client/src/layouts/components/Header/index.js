import style from './Header.module.scss'
import className from 'classnames/bind'
import imgLeft from '../../../../src/media/img/header-trai.png'
import Logo from './../../../media/img/logo.png'



const cx = className.bind(style)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
           <img className={cx('img-left')} src={imgLeft} alt='header-trai' />
           <div className={cx('header-top')}>
              <div>
                <a href='/' className={cx('header__logo')}>
                    <img src={Logo} alt='logo' className={cx('header-logo__img')}/>
                </a>
              </div>
           </div>
        </header>
     )
}

export default Header;