import Links from '../Links/Links';
import Navbar from './../Navbar/Navbar';
import Footer from './../Home/Footer/Footer';

export default function Content() {
    return (
        <div>
            <div >
                <Navbar />
                <Links />
            </div>
            <div className="content" title="mjcars">
                <Footer />
            </div>
        </div>
    )
}
