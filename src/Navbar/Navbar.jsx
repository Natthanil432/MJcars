import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/LogoMJcars.png'
import { Link } from 'react-router-dom'


export default function Navbar() {
    const [display, setDisplay] = useState('close')
    return (
        
            <div className="Navbar">
                <div className="boxNavbar">
                    <div className="image">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                    <div className="Link">
                        <Link to='/'>
                            <li>หน้าหลัก</li>
                        </Link>
                        <Link to='/about'>
                            <li>เกี่ยวกับเรา</li>
                        </Link>
                        <Link to='/reserve'>
                            <li>จองรถ</li>
                        </Link>

                        <Link to='/travel'>
                            <li>ท่องเที่ยว</li>
                        </Link>
                        <Link to='/review'>
                            <li>รีวิว</li>
                        </Link>
                        <Link to='/content'>
                            <li>ติดต่อ</li>
                        </Link>

                    </div>
                    <div className="iconMenu" onClick={() => {
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
                    <div className="Link800px">
                        <Link to='/'>
                            <li>หน้าหลัก</li>
                        </Link>
                        <Link to='/about'>
                            <li>เกี่ยวกับเรา</li>
                        </Link>
                        <Link to='/Reserve'>
                            <li>จองรถ</li>
                        </Link>

                        <Link to='/travel'>
                            <li>ท่องเที่ยว</li>
                        </Link>
                        <Link to='/review'>
                            <li>รีวิว</li>
                        </Link>
                        <Link to='/content'>
                            <li>ติดต่อ</li>
                        </Link>
                    </div>
                </> : <></>}
            </div>
           

      
    )
}

