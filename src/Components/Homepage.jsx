import image from '../images/aero.jpg'
import image1 from '../images/USA.jpg'
import Admission from './Admission'
import Blog from './Blog'
import { Link } from 'react-router-dom'
import img1 from'../images/plane.jpeg'


const Homepage = () => {
  return (

    <>
   <section>
    <Admission />
   </section>

   <section>
    <Blog />
   </section>

    </>
  )
}

export default Homepage