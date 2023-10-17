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

type TypeImages = Record<keyof typeof typeImages, string>;

const getRandomTypes = (count: number): (keyof typeof typeImages)[] => {
  const randomTypes = Object.keys(typeImages)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
  return randomTypes as (keyof typeof typeImages)[];
}


export const typeExporter = {
  getRandomTypes,
  typeImages
};
