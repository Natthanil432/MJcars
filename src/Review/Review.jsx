import Navbar from '../Navbar/Navbar'
import './Review.css'
import Footer from '../Home/Footer/Footer'
import image1 from './image/1.jpg'
import image2 from './image/2.jpg'
export default function Review() {
  const image = [image1, image2]
  return (
    <div>
      <Navbar />
      <div className="review">
        <div className="allReview">
          {
            image.map((image) => {
              return (
                <>
                  
                  <div className="boxReview">
                    <div className="image">
                      <img src={image} alt="mjcars" title='mjcars'/>
                    </div>
                  </div>
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
