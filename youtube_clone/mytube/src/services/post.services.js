import axios from "axios";
import { url } from "../../config";

export const postServices = async ({name,descripcion,video, category}) => { 
  const form = new FormData()
  form.append("name", name)
  form.append("descripcion", descripcion)
  form.append("category", category)
  form.append("video", video)
  const response = await axios({
    method: "POST",
    url: `${url}/post/send`,
    data: form,
    withCredentials:true
  })
  
  return response
}

export const getPublicatiosServices = async () => {
  const response = await axios({
    method: "GET",
    url: `${url}/post/publications`,
    withCredentials: true,
  })
  return response
}

export const getPublicationsByCategory = async (category) => {
  const response = await axios(`${url}/post/publications/${category}`)
  return response
}

export const getReels = async () => {
  const response = await axios(`${url}/post/publication/reels`)
  return response
}

export const watchVideo = async (id) => {
  const response = await axios(`${url}/post/publication/${id}`)
  return response
}