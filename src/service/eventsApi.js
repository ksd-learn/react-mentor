import axios from 'axios';

const KEY = "tIj1kC332ExvV8vs1uBAp1fasaO5ERpG";
axios.defaults.baseURL = "https://app.ticketmaster.com/discovery/v2/";


                                // берем из всей коллекции сервиса API массив events
                                // с первыми 20-ю объектами (page=0) (путь к массиву: data._embedded.events)
export async function fetchEvents() {
  const response = await axios('events', {
    params: {
      apikey: KEY,
      size: 20,

    }
  })
  return response.data._embedded.events
}
                                // берем из коллекции массив events (page=0) с бъектами, у которых
                                // в значении свойства name есть совпадения с значением параметра keyword
export async function fetchEventsByName(keyword) {
  const response = await axios('events', {
    params: {
      apikey: KEY,
      size: 20,
      keyword
    }
  })
  return response.data._embedded.events
}