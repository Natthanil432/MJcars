import './Cars.css'
import image1 from '../../Reserve/image/MITSUBISHI.png'
import image2 from '../../Reserve/image/MG.png';
import image3 from '../../Reserve/image/TOYOTA.png'
import image4 from '../../Reserve/image/HONDA.png';
import image5 from '../../Reserve/image/TOYOTA1.png'
// import './Reserve.css'
export default function Cars() {
  const image = [image1,
    image2,
    image3,
    image4,
    image5,
  ]
  const titleCar = [`MITSUBISHI`, `MG`, `TOYOTA`, `HONDA`, `TOYOTA`]
  const gen = [`Mirage 2012`, `ZS`, `Yaris Ativ 1.2 Smart 2023`, `FREED 2014`, `Yaris 2022`]
  const price = [800]
  return (
    <div>
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
                        <h5>ราคาเริ่มต้นที่  <b>{price} บาท</b></h5>
                      </div>
                    </div>
                  </a>
                </>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}
