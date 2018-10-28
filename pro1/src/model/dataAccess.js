const axios = require("axios");
const domain = "http://10.220.138.177:5000";

let dataAccess = {
    requestData(apiRoute,handleData) {
        var api = domain + apiRoute;
        axios
          .get(api)
          .then(response => {
            console.log(response);
            handleData(response);
          })
          .catch(function(error) {
            console.log("access data fail"+error);
          });
        },
    sendData(apiRoute,data){
      var api = domain + apiRoute;
      axios.post(api, JSON.stringify(data))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
      
}

export default dataAccess;