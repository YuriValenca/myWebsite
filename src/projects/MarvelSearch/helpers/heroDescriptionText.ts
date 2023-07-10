import { Hero } from "../store/types";

export const heroDescriptionText = (hero: Hero) => {
  let heroText = '';
  if (!hero.id) {
    heroText = 'Could not find hero. Please try again. TIP: Remember to use the autocomplete, or capitalize the hero name.';
  } else {
    if (!hero.description) heroText = 'This hero has no description.'
    if (hero.description) heroText = hero.description;
    if (!hero.comics && !hero.events && !hero.series && !hero.stories) {
      heroText += ` ${hero.name} has not appeared in any comics, series, stories or events.`;
    } else {
      heroText += ` ${hero.name} has appeared in `;
      if (hero.comics === 1) {
        heroText += `${hero.comics} comic, `
      } else {
        heroText += `${hero.comics} comics, `
      }
      if (hero.series) heroText += `${hero.series} series, `;
      if (hero.stories === 1) {
        heroText += `${hero.stories} story `
      } else {
        heroText += `${hero.stories} stories `
      }
      if (hero.events === 1) {
        heroText += `and in ${hero.events} event.`
      } else {
        heroText += `and in ${hero.events} events.`
      }
    }
  }
  return heroText
};