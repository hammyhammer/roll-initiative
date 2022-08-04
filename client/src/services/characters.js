import { api } from "./apiConfig";

export const getAllCharacters = async () => {
  const res = await api.get('/characters')
  return res.data
}

export const getOneCharacters = async (character_id) => {
  const res = await api.get(`/characters/${character_id}`)
  return res.data
}

export const createCharacter = async (characterData) => {
  const res = await api.post('/characters', { character: characterData })
  return res.data
}

