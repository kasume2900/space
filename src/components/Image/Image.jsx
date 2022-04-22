import europa from '../../assets/destination/image-europa.png'
import mars from '../../assets/destination/image-mars.png'
import moon from '../../assets/destination/image-moon.png'
import titan from '../../assets/destination/image-titan.png'
import data from '../../config'

import hurly from '../../assets/crew/image-douglas-hurley.png'
import mark from '../../assets/crew/image-mark-shuttleworth.png'
import victor from '../../assets/crew/image-victor-glover.png'
import ansury from '../../assets/crew/image-anousheh-ansari.png'


import vehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import rocetD from '../../assets/technology/image-spaceport-portrait.jpg'
import shipD from '../../assets/technology/image-space-capsule-portrait.jpg'

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


export const findImageCrew = (index) => {
  const el = data.crew.find((el,ind) => ind === index)
  switch (el.name) {
    case "Douglas Hurley":
      return <img src={hurly} alt="image" />
    case "Mark Shuttleworth":
      return <img src={mark} alt="image" />
    case "Victor Glover":
      return <img src={victor} alt="image" />
    case "Anousheh Ansari":
      return <img src={ansury} alt="image" />
  
    default:
      break;
  }
}


export const findImageTec = (index) => {
  const el = data.technology.find((el,ind) => ind === index)
  switch (el.name) {
    case "Launch vehicle":
      return <img src={vehicle} alt="image" />
    case "Spaceport":
      return <img src={rocetD} alt="image" />
    case "Space capsule":
      return <img src={shipD} alt="image" />
    default:
      break;
  }
}


