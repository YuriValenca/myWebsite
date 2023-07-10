import { createAsyncThunk } from "@reduxjs/toolkit";
import { Hero } from "../types";
import axios from "axios";
import { urlGenerator } from "../../helpers/urlGenerator";

export const fetchAllHeroes = createAsyncThunk<Hero[], void>('heroes/fetchAll', async () => {
  const limit = 100;
  let offset = 0;

  let allHeroes: Hero[] = [];

  const fetchCharacters = async () => {
    const response = await axios.get(urlGenerator(),{
      params: {
        limit,
        offset,
      }
    });
    const characters = response.data.data.results.map((character: Hero) => ({
      id: character.id,
      name: character.name,
      thumbnail: {
        path: character.thumbnail.path,
        extension: character.thumbnail.extension,
      },
    }));
    allHeroes = [...allHeroes, ...characters];

    if (characters.length === limit) {
      offset += limit;
      await fetchCharacters();
    };
  };
  
  await fetchCharacters();

  return allHeroes;
});

