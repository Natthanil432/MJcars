import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/LogoMJcars.png'
import { Link } from 'react-router-dom'


export default function Navbar() {
    const [display, setDisplay] = useState('close')
    return (
        
            <div className="Navbar" title='mjcars'>
                <div className="boxNavbar" title='mjcars'>
                    <div className="image" title='mjcars'>
                        <Link to='/' title='mjcars'>
                            <img src={logo} alt=""  title='mjcars'/>
                            </Link>
                    </div>
                    <div className="Link" title='mjcars'>
                        <Link to='/' title='mjcars'>
                            <li title='mjcars'>หน้าหลัก</li>
                        </Link>
                        <Link title='mjcars' to='/about'>
                            <li title='mjcars'>เกี่ยวกับเรา</li>
                        </Link>
                        <Link title='mjcars' to='/reserve'>
                            <li title='mjcars'>จองรถ</li>
                        </Link>

                        <Link title='mjcars' to='/travel'>
                            <li title='mjcars'>ท่องเที่ยว</li>
                        </Link>
                        <Link title='mjcars' to='/review'>
                            <li title='mjcars'>รีวิว</li>
                        </Link>
                        <Link title='mjcars' to='/content'>
                            <li title='mjcars'>ติดต่อ</li>
                        </Link>

                    </div>
                    <div title='mjcars' className="iconMenu" onClick={() => {
                        if (display === 'close') {
                            setDisplay('open')
                        } else {
                            setDisplay('close')
                        }
                    }}>
                        {display === 'close' ? <> <i className="bi bi-list"></i></> : <><i className="bi bi-x-lg"></i></>}
                    </div>
                </div>
                {display == 'open' ?
                <>
                    <div title='mjcars' className="Link800px">
                        <Link title='mjcars' to='/'>
                            <li title='mjcars'>หน้าหลัก</li>
                        </Link>
                        <Link title='mjcars' to='/about'>
                            <li title='mjcars'>เกี่ยวกับเรา</li>
                        </Link>
                        <Link title='mjcars' to='/Reserve'>
                            <li title='mjcars'>จองรถ</li>
                        </Link>

                        <Link title='mjcars' to='/travel'>
                            <li title='mjcars'>ท่องเที่ยว</li>
                        </Link>
                        <Link title='mjcars' to='/review'>
                            <li title='mjcars'>รีวิว</li>
                        </Link>
                        <Link title='mjcars' to='/content'>
                            <li title='mjcars'>ติดต่อ</li>
                        </Link>
                    </div>
                </> : <></>}
            </div>
           

      
    )
}

