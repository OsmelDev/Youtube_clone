import axios from "axios"
import { url } from "../../config";

export const loginServices = async(dataUser) => {
 const response = await axios({
      method: "POST",
      url: `${url}/login`,
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
    url: `${url}/register`,
    data: form,
    withCredentials:true
  })
  return response;
}

export const verifyService = async () => {
  const response = await axios.get(`${url}/verify`,{withCredentials:true})
  return response
}


export async function logoutService() {
  const response = await axios({
    method: "POST",
    url: `${url}/logout`,
    withCredentials: true 
  })
  return response
}
  
export async function updateService(user) {
  const response = await axios.post(`${url}/update`,user,{withCredentials:true})
  return response;
}