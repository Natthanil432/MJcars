import BannerIntro from '../../image/2.png'
import './Banner.css'
export default function Banner() {
  return (
    <div>
        <div className="banner">
                   
                    <div className="bannerImage">
                        <img src={BannerIntro} alt="" />
                    </div>
                </div>
    </div>
  )
}
