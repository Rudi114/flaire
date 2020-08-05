// import axios from "axios";
import qs from 'qs';

// // const base = process.env.BASE_URL;
// const base = 'http://partyfavorwebsite-env.3mgbcntpxc.us-east-1.elasticbeanstalk.com';
// const head = {
//   // Authorization: `Bearer ${localStorage.getItem("token")}` || undefined,
//   "content-type": "application/x-www-form-urlencoded",
// };
// const api = axios.create({
//   baseURL: base,
//   headers: head,
// });

// export default api;
const api = {
  makeCall: async (type, route, data) => await fetch(`http://partyfavorwebsite-env.3mgbcntpxc.us-east-1.elasticbeanstalk.com/${route}`, {
    method: type,
    mode: 'no-cors', // no-cors, *cors, same-origin
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify(data),
  }),
};

export default api;

// "body": qs.stringify({
//   "name": "zach",
//   "phoneNumber": "3095314414",
//   "email": "zachary.rudebeck@gmail.com",
//   "password": "Jjoker3s",
//   "giftCode": "",
//   "promoCode": ""
// }),
