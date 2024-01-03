import Header from "../components/Header";
import classNames from "classnames";
import style from "./DefaultLayout.module.scss"
import Footer from "../components/Footer";
import BannerMedia from "../components/Banner/BannerMedia";

const cx = classNames.bind(style)
function DefaultLayout({ children }) {
    return ( 
        <div>
            <div className={cx('wrapper-DefaultLayout')}>
               <BannerMedia />
               <Header />
               <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
               </div>
               <Footer />
            </div>
        </div>
     );
}

export default DefaultLayout;