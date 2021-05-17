import {$authHost, $host} from "./index";

export const sentRating = async (rate) => {
 try{
     const {data} = await $authHost.post('api/rating', rate)
     return data
 }
 catch {
     console.alert("Что то пошло не  так !")
 }
}
