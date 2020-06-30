import axios from 'axios';


const Request = {
  get: async (url,id) => {
    try {
      return axios.get(`/api/${url}`,{params:{id}});
    } catch (error) {
      return error;
    }
  },
  post: async (url,data) => {
   try {
    return axios.post(`/api/${url}`,data);
   } catch (error) {
     return(error);
   }
  }
}

export default Request;