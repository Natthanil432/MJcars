import './Footer.css'
import footerImage from '../../assets/LogoMJcars.png'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="containerFooter">
                    <div className="boxFooter">
                        <div className="logoFooter">
                            <div className="imageFooter">
                                <img src={footerImage} alt="" />
                                <h3>MJ cars</h3>
                            </div>
                            <div className="addressMJCar">
                                <p>196/98 หมู่6 ต.ขามใหญ่ อ.เมือง จ.อุบลราชธานี 34000</p>
                            </div>
                        </div>
                        <div className="contentFooter">
                            <div className="menuFooter">
                                <h2 >เมนู</h2>
                                <ul>
                                    <Link to=""><li>หน้าหลัก</li></Link>
                                    <Link to=""><li>เกี่ยวกับเรา</li></Link>
                                    <Link to=""><li>จองรถ</li></Link>
                                    <Link to=""><li>ท่องเที่ยว</li></Link>
                                    <Link to=""><li>รีวิว</li></Link>
                                    <Link to=""><li>ติดต่อ</li></Link>
                                </ul>
                            </div>

                        </div>
                        <div className="contentFooters">
                            <h3>ติดต่อ</h3>
                            <div className="contentIcon">
                                <div className="line">
                                    <Link to="https://line.me/R/ti/p/@254ubqgv?from=page&searchId=254ubqgv">
                                        <i className="bi bi-line"></i> 
                                        <p> รถเช่าอุบลราคาถูก MJ car for rent </p>
                                    </Link>
                                </div>
                                <div className="facebook">
                                    <Link to="https://www.facebook.com/profile.php?id=61556639227840&mibextid=LQQJ4d">
                                        <i className="bi bi-facebook">
                                        </i><p> รถเช่าอุบลราคาถูก MJ car for rent
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <h3>Google Map</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.9444922271596!2d104.8350006765121!3d15.270822622436254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116880bdcb77729%3A0x91417a2c14f80245!2z4Lia4Li04LmK4LiB4LiL4Li1IOC4i-C4ueC5gOC4m-C4reC4o-C5jOC5gOC4i-C5h-C4meC5gOC4leC4reC4o-C5jCDguK3guLjguJrguKXguKPguLLguIrguJjguLLguJnguLU!5e0!3m2!1sth!2sth!4v1709010526194!5m2!1sth!2sth" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notCopy">
                <p>@ MJ cars 27/2/2567</p>
            </div>
        </div>
    )
}
