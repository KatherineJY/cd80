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
      
}

export default dataAccess;