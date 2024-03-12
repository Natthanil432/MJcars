import Footer from '../Home/Footer/Footer'
import Navbar from '../Navbar/Navbar'
import image1 from './image/MITSUBISHI.png'
import image2 from './image/MG.png';
import image3 from './image/TOYOTA.png'
import image4 from './image/HONDA.png';
import image5 from './image/TOYOTA1.png'
import './Reserve.css'

export default function Reserve() {
  const image = [image1,
    image2,
    image3,
    image4,
    image5,]
  const titleCar = [`MITSUBISHI`, `MG`, `TOYOTA`, `HONDA`, `TOYOTA`]
  const gen = [`Mirage 2012`, `ZS`, `Yaris Ativ 1.2 Smart 2023`, `FREED 2014`, `Yaris 2022`]
  const price = [1000]
  return (
    <div>
      <Navbar />
      <div className="cars">
        <div className="boxTotal">
          {
            titleCar.map((title, i) => {
              return (
                <>
                  <a href="https://line.me/R/ti/p/@254ubqgv?from=page&searchId=254ubqgv" target="_blank" rel="noreferrer">
                    <div className="boxCars">
                      <div className="imageCar">
                        <img src={image[i]} alt="" />
                      </div>
                      <div className="titleCar">
                        <h1>{title}</h1>
                        <h6>{gen[i]}</h6>
                        <p>{price} บาท</p>
                      </div>
                    </div>
                  </a>
                </>
              )
            })
          }

        </div>
      </div>
      <Footer />
    </div>
  )
}
