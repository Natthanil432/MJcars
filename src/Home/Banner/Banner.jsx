import BannerIntro from '../../image/2.png'
import './Banner.css'
export default function Banner() {
  return (
    <div>
        <div className="banner" title="mjcars">   
                    <div className="bannerImage" title="mjcars">
                        <img src={BannerIntro} alt="mjcars"  title="mjcars" />
                    </div>
                </div>
    </div>
  )
}
