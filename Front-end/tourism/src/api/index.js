import axios from "axios";


const url =`https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng`

const options = {
    params: {
      latitude: '12.91285',
      longitude: '100.87808',
      lang: 'en_US',
      hotel_class: '1,2,3',
      limit: '30',
      adults: '1',
      amenities: 'beach,bar_lounge,airport_transportation',
      rooms: '1',
      child_rm_ages: '7,10',
      currency: 'USD',
      checkin: '2022-03-08',
      zff: '4,6',
      subcategory: 'hotel,bb,specialty',
      nights: '2',
      place : '',
    },
    headers: {
      'X-RapidAPI-Key': 'e9de42c8camsh2e4e7383e0ba696p1eca3ajsnfc441a9dddbc',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }

export const getPlaceData = async () =>{
    try {
        //resquest
        const {data: {data}} = await axios.get(url, options)

        return data;
    } catch (error) {
        console.log(error)
    }
}