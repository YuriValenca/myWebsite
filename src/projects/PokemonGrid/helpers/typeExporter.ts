import bugImg from '../../../assets/images/bug.png'
import darkImg from '../../../assets/images/dark.png'
import dragonImg from '../../../assets/images/dragon.png'
import electricImg from '../../../assets/images/electric.png'
import fairyImg from '../../../assets/images/fairy.png'
import fightingImg from '../../../assets/images/fighting.png'
import fireImg from '../../../assets/images/fire.png'
import flyingImg from '../../../assets/images/flying.png'
import ghostImg from '../../../assets/images/ghost.png'
import grassImg from '../../../assets/images/grass.png'
import groundImg from '../../../assets/images/ground.png'
import iceImg from '../../../assets/images/ice.png'
import normalImg from '../../../assets/images/normal.png'
import poisonImg from '../../../assets/images/poison.png'
import psychicImg from '../../../assets/images/psychic.png'
import rockImg from '../../../assets/images/rock.png'
import steelImg from '../../../assets/images/steel.png'
import waterImg from '../../../assets/images/water.png'

export const typeImages = {
  bug: bugImg,
  dark: darkImg,
  dragon: dragonImg,
  electric: electricImg,
  fairy: fairyImg,
  fighting: fightingImg,
  fire: fireImg,
  flying: flyingImg,
  ghost: ghostImg,
  grass: grassImg,
  ground: groundImg,
  ice: iceImg,
  normal: normalImg,
  poison: poisonImg,
  psychic: psychicImg,
  rock: rockImg,
  steel: steelImg,
  water: waterImg,
}

const getRandomTypes = (
    count: number, selectedTypes: (keyof typeof typeImages)[] = []
  ): (keyof typeof typeImages)[] => {
  const allTypes = Object.keys(typeImages) as (keyof typeof typeImages)[];
  const availableTypes = allTypes.filter(type => !selectedTypes.includes(type));
  
  const randomTypes: (keyof typeof typeImages)[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableTypes.length);
    const selectedType = availableTypes.splice(randomIndex, 1)[0];
    randomTypes.push(selectedType);
  }

  return randomTypes;
}

export const typeExporter = {
  getRandomTypes,
  typeImages
};
