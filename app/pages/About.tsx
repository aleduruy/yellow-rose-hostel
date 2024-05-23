import { Text } from "../components/Text"
import HOUSES from "../../public/assets/images/about/HOUSES.png"
import ROOMS from "../../public/assets/images/about/ROOMS.png"
import KITCHEN from "../../public/assets/images/about/KITCHEN.png"
import NATURE from "../../public/assets/images/about/NATURE.png"
import PARKING from "../../public/assets/images/about/PARKING.png"
import RELAX from "../../public/assets/images/about/RELAX.png"
import SAUNA from "../../public/assets/images/about/SAUNA.png"
import SHOWER from "../../public/assets/images/about/SHOWER.png"
import TOURISM from "../../public/assets/images/about/TOURISM.png"
import TV from "../../public/assets/images/about/TV.png"

const getImage = (type: string) => {
  switch (type) {
    case "HOUSES":
      return HOUSES
    case "ROOMS":
      return ROOMS
    case "KITCHEN":
      return KITCHEN
    case "NATURE":
      return NATURE
    case "PARKING":
      return PARKING
    case "RELAX":
      return RELAX
    case "SAUNA":
      return SAUNA
    case "SHOWER":
      return SHOWER
    case "TOURISM":
      return TOURISM
    case "TV":
      return TV
  }
}

export const About = (props) => {
  return (
    <section>
      <Text tag="h1" className="mb-8" size="large">
        {props.content.title}
      </Text>
      <div className="mb-8 flex flex-nowrap flex-col lg:flex-row justify-between">
        <div className="mb-4 p-4 lg:p-8 lg:mb-16 lg:mr-8 lg:w-1/2 border-2 border-[--primary] rounded-3xl">
          <Text tag="h3" className="mb-4" size="medium">
            {props.content.about.title}
          </Text>
          <Text>{props.content.about.text}</Text>
        </div>
        <div className="mb-4 p-4 lg:p-8 lg:mb-16 lg:ml-8 lg:w-1/2 border-2 border-[--primary] rounded-3xl">
          <Text tag="h3" className="mb-4" size="medium">
            {props.content.place.title}
          </Text>
          <Text>{props.content.place.text}</Text>
        </div>
      </div>
      <Text tag="h1" className="mb-8" size="large">
        {props.content.benefits.title}
      </Text>
      {/* <ul className="flex flex-wrap flex-col md:flex-row justify-between"> */}
      <ul className="grid lg:grid-cols-2 gap-4 lg:gap-8">
        {props.content.benefits.items.map((item) => {
          return (
            <li className="mb-4 p-4 lg:p-8 text-center border-2 border-[--primary] rounded-3xl">
              <img
                src={getImage(item.type)}
                alt={item.title}
                className="rounded-xl"
              />
              <Text tag="h3" className="my-4" size="medium">
                {item.title}
              </Text>
              <Text>{item.text}</Text>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
