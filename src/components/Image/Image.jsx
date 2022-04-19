import europa from '../../assets/destination/image-europa.png'
import mars from '../../assets/destination/image-mars.png'
import moon from '../../assets/destination/image-moon.png'
import titan from '../../assets/destination/image-titan.png'
import data from '../../config'

export const findImage = (name) => {
  const el = data.destinations.find(el => el.name === name)
  switch (el.name) {
    case "Moon":
      return <img src={moon} alt="image" />
    case "Mars":
      return <img src={mars} alt="image" />
    case "Europa":
      return <img src={europa} alt="image" />
    case "Titan":
      return <img src={titan} alt="image" />
  
    default:
      break;
  }
}

