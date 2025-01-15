import axios from "axios"
import { url } from "../../config";

export const loginServices = async(dataUser) => {
 const response = await axios({
      method: "POST",
      url: `${url}/auth/login`,
      data: dataUser,
      withCredentials:true
 })
  return response; 
}

export const registerService = async ({username, email, password, avatar}) => {
  const form = new FormData()
  form.append("username", username)
  form.append("email", email)
  form.append("password", password)
  form.append("avatar", avatar)

  const response = await axios({
    method: "POST",
    url: `${url}/auth/register`,
    data: form,
    withCredentials:true
  })
  return response;
}

export const verifyService = async () => {
  const response = await axios.get(`${url}/auth/verify`,{withCredentials:true})
  return response
}


export async function logoutService() {
  const response = await axios({
    method: "POST",
    url: `${url}/auth/logout`,
    withCredentials: true 
  })
  return response
}
  
export async function updateService(user) {
  const response = await axios({
      method: "POST",
      url: `${url}/auth/update`,
      data: user,
      withCredentials:true
 })
  return response;
}