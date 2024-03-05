import classNames from "classnames/bind";
import style from './Cart.module.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(style)

function Cart() {
    return ( 
        <div className={cx('cart-box')}>
            <a href="/cart">
                <span className={cx('cart-number')}>1</span>
                <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                <h5 className={cx('cart-title')}>Giỏ hàng</h5>
            </a>
        </div>
     );
}

export default Cart;