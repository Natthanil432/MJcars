import { Link } from "react-router-dom";
import './Links.css'
export default function Links() {
    return (
        <div className="Links">
            <div className="boxLinks">
                <div className="facebook" title="mjcars">
                    <Link to="https://www.facebook.com/profile.php?id=61556639227840&mibextid=LQQJ4d" title="mjcars">
                        <i className="bi bi-facebook" title="mjcars">
                        </i>
                    </Link>
                </div>


                <div className="line" title="mjcars">
                    <Link to="https://line.me/R/ti/p/@254ubqgv?from=page&searchId=254ubqgv" title="mjcars">
                        <i className="bi bi-line" title="mjcars"></i>

                    </Link>
                </div>
            </div>

        </div>
    )
}
