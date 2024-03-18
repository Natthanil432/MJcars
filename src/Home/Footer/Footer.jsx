import './Footer.css'
import footerImage from '../../assets/LogoMJcars.png'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <div className="footer" title="mjcars">
                <div className="containerFooter" title="mjcars">
                    <div className="boxFooter" title="mjcars">
                        <div className="logoFooter" title="mjcars">
                            <div className="imageFooter" title="mjcars">
                                <img src={footerImage} alt="" />
                                <h3 title="mjcars">MJ cars</h3>
                            </div>
                            <div className="addressMJCar" title="mjcars">
                                <p title="mjcars">196/98 หมู่6 ต.ขามใหญ่ อ.เมือง จ.อุบลราชธานี 34000</p>
                            </div>
                        </div>
                        <div className="contentFooter" title="mjcars">
                            <div className="menuFooter" title="mjcars">
                                <h2 title="mjcars">เมนู</h2>
                                <ul title="mjcars">
                                    <Link to='/' title="mjcars">
                                        <li title="mjcars">หน้าหลัก</li>
                                    </Link>
                                    <Link to='/about' title="mjcars">
                                        <li title="mjcars">เกี่ยวกับเรา</li>
                                    </Link>
                                    <Link to='/reserve' title="mjcars">
                                        <li title="mjcars">จองรถ</li>
                                    </Link>

                                    <Link to='/travel' title="mjcars">
                                        <li title="mjcars">ท่องเที่ยว</li>
                                    </Link>
                                    <Link to='/review' title="mjcars">
                                        <li title="mjcars">รีวิว</li>
                                    </Link>
                                    <Link to='/content' title="mjcars">
                                        <li title="mjcars">ติดต่อ</li>
                                    </Link>
                                </ul>
                            </div>

                        </div>
                        <div className="contentFooters" title="mjcars">
                            <h3 title="mjcars">ติดต่อ</h3>
                            <div className="contentIcon" title="mjcars">
                                <div className="line" title="mjcars">
                                    <Link to="https://line.me/R/ti/p/@254ubqgv?from=page&searchId=254ubqgv" title="mjcars">
                                        <i className="bi bi-line" title="mjcars"></i>
                                        <p title="mjcars"> รถเช่าอุบลราคาถูก MJ car for rent </p>
                                    </Link>
                                </div>
                                <div className="facebook" title="mjcars">
                                    <Link to="https://www.facebook.com/profile.php?id=61556639227840&mibextid=LQQJ4d" title="mjcars">
                                        <i className="bi bi-facebook" title="mjcars">
                                        </i><p> รถเช่าอุบลราคาถูก MJ car for rent
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="map" title="mjcars">
                            <h3 title="mjcars">Google Map</h3>
                            <iframe title="mjcars" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3848.4586695642975!2d104.86956607511986!3d15.297288985275815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDE3JzUwLjIiTiAxMDTCsDUyJzE5LjciRQ!5e0!3m2!1sth!2sth!4v1710779532700!5m2!1sth!2sth" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notCopy" title="mjcars">
                <p title="mjcars">@ MJ cars 27/2/2567</p>
            </div>
        </div>
    )
}
