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

    <div className='mjcars' title='mjcars'>
      <h5 title='mjcars'><b>เริ่มต้นที่  {price} บาท</b></h5>
      <div title='mjcars' className="cars" >
        <div title='mjcars' className="boxTotal">
          {
            titleCar.map((title, i) => {
              return (
                <>
                  <a title='mjcars' href="https://line.me/R/ti/p/@254ubqgv?from=page&searchId=254ubqgv"  target="_blank" rel="noreferrer">
                    <div title='mjcars' className="boxCars" >
                      <div title='mjcars' className="imageCar">
                        <img title='mjcars' src={image[i]} alt="" />
                      </div>
                      <div title='mjcars' className="titleCar">
                        <h1 title='mjcars'>{title}</h1>
                        <h6 title='mjcars'>{gen[i]}</h6>
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
