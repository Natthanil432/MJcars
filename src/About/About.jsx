import Abouts from '../Home/About/About'
import Navbar from '../Navbar/Navbar'
import Footer from './../Home/Footer/Footer';
export default function About() {
  return (
    <div> 
      
        <Navbar />
        <div className="About">
            <Abouts />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}
