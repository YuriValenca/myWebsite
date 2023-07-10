import { createAsyncThunk } from "@reduxjs/toolkit";
import { Hero } from "../types";
import axios from "axios";
import { urlGenerator } from "../../helpers/urlGenerator";


export const fetchHero = createAsyncThunk<Hero, string>('', async (name: string) => {
  const response = await axios.get(
    urlGenerator(), {
    params: {
      name,
    }
  });
  const heroesFound = response.data.data.results;
  const exactHero = heroesFound.find((hero: Hero) => hero.name === name);
  if (!exactHero) throw new Error(`Hero ${name} not found!`);
  const hero: Hero = {
    id: exactHero.id,
    name: exactHero.name,
    description: exactHero.description,
    thumbnail: {
      path: exactHero.thumbnail.path,
      extension: exactHero.thumbnail.extension
    },
    comics: exactHero.comics.available,
    series: exactHero.series.available,
    stories: exactHero.stories.available,
    events: exactHero.events.available,
  };
  return hero;
});
