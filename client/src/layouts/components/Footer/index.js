import classNames from "classnames/bind";
import style from './Footer.module.scss'

const cx = classNames.bind(style)

function Footer() {
    return ( 
        <footer className={cx('footer')}>
            <div className={cx('info')}>
                <div className={cx('suport')}>
                    <ul className={cx('f-listmenu')}>
                        <li>Tích điểm Quà tặng VIP</li>
                        <li>
                            <a href="#">Lịch sử mua hàng</a>
                        </li>
                        <li>Tìm hiểu về mua trả góp</li>
                        <li>Chính sách bảo hành</li>
                    </ul>
                    <ul className={cx('f-listmenu')}>
                        <li>Giới thiệu công ty (MWG.vn)</li>
                        <li>Tuyển dụng</li>
                        <li>Gửi góp ý, khiếu nại</li>
                        <li>Tìm siêu thị (3.170 shop)</li>
                        <li>Xem bản mobile</li>
                    </ul>
                    <ul className={cx('f-listmenu')}>
                        <h4>Tổng đài hỗ trợ</h4>
                        <li>Khiếu nại: 1800.1062 (8:00 - 21:30)</li>
                        <li>Bảo hành: 1900 232 464 (8:00 - 21:00)</li>
                    </ul>
                </div>
                <div className={cx('more')}>
                    <div className={cx('f-socical')}>
                        <a href="#">
                            <i className={cx('icon-facebook')}></i>
                             3886.8k Fan 
                        </a>
                        <a href="#">
                            <i className={cx('icon-youtube')}></i>
                             865k Đăng ký 
                        </a>
                        <a href="#">
                            <img className={cx('icon-zalo')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/icon_zalo.png" />
                             Zalo TGDĐ 
                        </a>
                    </div>
                    <div className={cx('f-certify')}>
                        <a>
                            <i className={cx('icon-congthuong')}></i>
                        </a>
                        <a>
                            <i className={cx('icon-khieunai')}></i>
                        </a>
                        <a>
                            <i className={cx('icon-protected')}></i>
                        </a>
                        <a>
                            <img className={cx('lazy')} src="https://tinnhiemmang.vn/handle_cert?id=thegioididong.com"></img>
                        </a>
                    </div>
                    <div className={cx('f-website')}>
                        <div className={cx('footer__logo')}>
                            <p className={cx("footer__logohd")}>Website cùng tập đoàn</p>
                            <div className={cx("footer__logolist")}>
                                    <a>
                                        <i className={cx("iconlogo-topzone")}></i>
                                    </a>
                                    <a>
                                        <i className={cx("iconlogo-dienmayxanh")}></i>
                                    </a>
                                    <a>
                                        <i className={cx("iconlogo-bachhoaxanh")}></i>
                                    </a>
                                    <a>
                                        <i className={cx("iconlogo-ankhang")}></i>
                                    </a>
                                    <a>
                                        <i className={cx("iconlogo-kids")}></i>
                                    </a>
                                    <a>
                                        <i className={cx("iconlogo-tantam")}></i>
                                    </a>
                                    <a>
                                        <i className={cx("iconlogo-4kfarm")}></i>
                                    </a>
                                    <a >
                                        <i className={cx("iconlogo-vieclam")}></i>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>
                <section>
                <p>
                © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
                 Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: Tot.huynhvan@thegioididong.com.
                </p>
                </section>
            </div>
        </footer>
     );
}

export default Footer;