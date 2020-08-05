const actions = {
  signUp: async ({ commit }) => {
    commit("setLoading", true);
    try {
      const response = await fetch("http://partyfavorwebsite-env.3mgbcntpxc.us-east-1.elasticbeanstalk.com/signUp", {
        "method": "POST",
        // mode: 'no-cors', // no-cors, *cors, same-origin
        "headers": {
          // "cookie": "JSESSIONID=CEC84201C6FE6DA4AD0FE1A4CCAC6D8D",
          "content-type": "application/x-www-form-urlencoded"
        },
        "body": qs.stringify({
          "name": "zach",
          "phoneNumber": "3095314414",
          "email": "zachary.rudebeck@gmail.com",
          "password": "Jjoker3s",
          "giftCode": "",
          "promoCode": ""
        }),
      });
      console.log('resp: ', response)
    } catch (e) {
      console.log('err signup acgtion: ', err);
    }
    // const payload = qs.stringify({
    //   name: 'Zach Rudebeck',
    //   phoneNumber: 3095314414,
    //   email: 'zachary.rudebeck@gmail.com',
    //   password: 'test64',
    //   giftCode: null,
    //   promoCode: null
    // });
    // console.log(payload);
    // try {
    //   return create(`/signUp`, payload) 
    //     .then((res) => {
    //       console.log(res);
    //       commit("setLoading", false);
    //     })
    // }
    // catch (err) {
    //   console.warn('err signing up: ', err);
    //   commit("setLoading", false);
    // }
    commit("setLoading", false);
    return;
  },
}