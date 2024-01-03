import classNames from "classnames/bind";
import style from './BannerMedia.module.scss'
import bannerImg from '../../../../media/img/banner-media.png'

const cx = classNames.bind(style)

function BannerMedia() {
    return ( 
        <div className={cx('banner-media')}>
               <img className={cx('banner-media__img')} src={bannerImg} alt="banner-media" />           
        </div>
     );
}

export default BannerMedia;