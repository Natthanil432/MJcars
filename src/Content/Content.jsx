
import Navbar from './../Navbar/Navbar';
import Footer from './../Home/Footer/Footer';

export default function Content() {
    return (
        <div>
            <div >
                <Navbar />
            </div>
            <div className="content">
                <Footer />
            </div>
        </div>
    )
}
