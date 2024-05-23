import { Link } from "@remix-run/react"
import { IoCall, IoLocation, IoMail, IoDisc } from "react-icons/io5"
// import { Text } from "../Text"
import home01 from "../../public/assets/images/home/hostel_01.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { Card, CardContent } from "@/components/ui/card"

export const Home = (props) => {
  return (
    <div>
      <Carousel showIndicators={false} showStatus={false}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <img src={home01} alt="Rosa Amarela" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
