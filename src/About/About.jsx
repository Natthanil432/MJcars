import Abouts from '../Home/About/About'
import Links from '../Links/Links';
import Navbar from '../Navbar/Navbar'
import Footer from './../Home/Footer/Footer';

export default function About() {
  return (
    <div> 
      
        <Navbar />
        <Links />
        <div className="About" title="mjcars">
            <Abouts />
        </div>
        <div className="footer" title="mjcars">
            <Footer />
        </div>
    </div>
  )
}
