import style from './Header.module.scss'
import className from 'classnames/bind'



const cx = className.bind(style)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
           
        </header>
     )
}

export default Header;