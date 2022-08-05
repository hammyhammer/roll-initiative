import { api } from "./apiConfig";

export const getAllCharacters = async () => {
  const res = await api.get('/characters')
  return res.data
}

export const getUserCharacters = async (user_id) => {
  const res = await api.get(`/users/${user_id}/characters`)
  return res.data
}

export const getOneCharacters = async (character_id) => {
  const res = await api.get(`/characters/${character_id}`)
  return res.data
}

export const createCharacter = async (user_id, characterData) => {
  const res = await api.post(`users/${user_id}/characters`, { character: characterData })
  return res.data
}

