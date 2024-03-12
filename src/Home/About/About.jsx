import imageRent from '../../image/How to rent a car.png'
import './About.css'
export default function About() {
  return (
    <div id='about'>
      <div className="about">
        <h1>เกี่ยวกับเรา</h1>
        <div className="aboutContent">
          <p>“เอ็มเจ ส่งมอบความสุข ทุกการเดินทาง”</p>
          <p>รถเช่า MJ Cars พร้อมส่งมอบความประทับใจในการบริการ
            เอกสารไม่ยุ่งยาก ดูแลความสะอาด ปลอดภัย ด้วยทีมงานวิศวกร</p>

          <p>MJ Cars rental car is ready to deliver impressive service.
            Documents are not complicated. Take care of cleanliness and safety with a team of engineers..</p>
        </div>
      </div>
      <div className="HowToRentACar">
        <img src={imageRent} alt="car" />
      </div>
    </div>
  )
}
