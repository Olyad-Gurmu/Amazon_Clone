import axios, { Axios } from "axios";
const axiosInstace = axios.create({
  //for local run time only!!!
   //baseURL: "http://127.0.0.1:5001/clone-bf8b1/us-central1/api",
  // APi end point from firebase
   baseURL: "https://amazon-api-deployment-ndlb.onrender.com",
});

export { axiosInstace };
