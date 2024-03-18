import Abouts from '../Home/About/About'
import Navbar from '../Navbar/Navbar'
import Footer from './../Home/Footer/Footer';
export default function About() {
  return (
    <div> 
      
        <Navbar />
        <div className="About" title="mjcars">
            <Abouts />
        </div>
        <div className="footer" title="mjcars">
            <Footer />
        </div>
    </div>
  )
}
