import axios from "axios";
 const url = process.env.VUE_APP_APIHOST
export default {
  calculate(dataToCalc) {
    return axios
      .post(`${url}/cdb/calculate-price`, dataToCalc)
      .then((res) => res.data)
      .catch((err) => err.response.data);
  },
};
