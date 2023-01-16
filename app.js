const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const request = require('request')

// app.set("view engine", "hbs");
// app.use(express.json());
// const dirpath = path.join(__filename, "../public");
// const viewpath = path.join(__dirname, "../templates/views");
// const partialspath = path.join(__dirname, "../templates/patials");
// hbs.registerPartials(partialspath);
// app.set("view engine", "hbs");
// app.set("view", viewpath);
// app.use(express.static(dirpath));

// app.get("/user", (req, res) => {
//   res.send("<H1>Hello there Express<H1>");
// });

// app.get("/about", (req, res) => {
//   res.send([
//     {
//       name: "anis",
//       age: 22,
//     },
//     {
//       name: "ali",
//       age: 25,
//       objective: "get fucked",
//     },
//   ]);
// });

// // app.get("/weather", (req, res) => {
// //   res.send("weather page");
// // });

// app.listen(3000, () => {
//   console.log("server is up on  port 3000");
// });

// // console.log(__dirname)
// // console.log(path.join(__dirname,''))

// app.get("", (req, res) => {
//   res.render("index", {
//     title: "weather",
//     name1: "anis",
//   });
// });
// app.get("/about", (req, res) => {
//   res.render("about", {
//     title: "about",
//     name: "anis",
//   });
// });

// app.get("/help", (req, res) => {
//   res.render("help.hbs", { title: "help" });
// });

// //get weather from api and show it on a web page
// app.get("/weather", (req, res) => {
//   if (!req.query.address) {
//     res.send("ERROR: You Must Enter Address ");
//   } else {
//     {
//       const Url =
//         "http://api.weatherstack.com/current?access_key=69ef38a2d3d81c8cf326b788786fe9ff&query=31.565682,74.314183&units=m";

//       request({ url: Url }, async (e, res) => {
//         const data = await JSON.parse(res.body);
//         if (!data) {
//           res.send("could not get weather");
//         } else {
//           //res.send(data);
//         }
//       });
//     }
//   }
// });
      

       

// // const { dirname } = require("path");
// // //const request = require("request");
// // const https  = require('https');
// // const { response } = require("express");
// // //const { response } = require("express");

// // const Url =
// //     "https://api.weatherstack.com/current?access_key=69ef38a2d3d81c8cf326b788786fe9ff&query=31.565682,74.314183&units=m";

// //     const request = https.request(Url,(response)=>{
// //       let data = ''

// //       response.on('data',(chunk)=>{
// //         data = data + chunk.toString()

// //         })
// //     })

// //     response.on('end',()=>{
// //       const body = JSON.parse(data)

// //       console.log(body)

// //     })

// //     request.end()

// // // const add = (x,y,callback)=>{
// // //         setTimeout(() => {
// // //             callback(x+y)
// // //         }, 2000);

// // // }

// // // add(1,4, (sum)=>{
// // //     console.log(sum)
// // // })

// // const temp = async () => {
// //   const Url =
// //     "http://api.weatherstack.com/current?access_key=69ef38a2d3d81c8cf326b788786fe9ff&query=31.565682,74.314183&units=m";

// //   request({ url: Url }, async (e, res) => {
// //     const data = await JSON.parse(res.body);

// //     console.log(
// //       "it is currently " + data.current.temperature,
// //       "degress celcius out . It feels like " +
// //         data.current.feelslike +
// //         " degress celcius out."
// //     );
// //   });
// // };

// const temp2 = () => {};

// const promise = new Promise((resolve, rej) => {
//   try {
//     const Url =
//       "http://api.weatherstack.com/current?access_key=69ef38a2d3d81c8cf326b788786fe9ff&query=31.565682,74.314183&units=m";

//     request({ url: Url }, (e, res) => {
//       const data = JSON.parse(res.body);
//       console.log(
//         "it is currently " + data.current.weather_code,
//         "degress celcius out . It feels like " +
//           data.current.feelslike +
//           " degress celcius out."
//       );
//       resolve();
//     });
//   } catch (error) {
//     rej(error);
//   }
// });

// const dim = async (address) => {
//   const url1 =
//     "://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     encodeURIComponent(address) +https
//     ".json?access_token=pk.eyJ1IjoiYW5pczEyMSIsImEiOiJjbGNnaGpweWowMWRnM29wNWNiZ3BrNXQ2In0.mKXOZ88dCN3rU5DMQ1I2EQ&limit=1";
//   request({ url: url1, json: true }, (e, res) => {
//     var latitude = res.body.features[0].center[1];
//     var longitude = res.body.features[0].center[0];
//     console.log(latitude, longitude);
//   });
// };

// promise.then((res)=>{
//     dim()
// }).catch((err)=>{console.log(err)})
// const checkres = (address) => {
//   const url1 =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     encodeURIComponent(address) +
//     ".json?access_token=pk.eyJ1IjoiYW5pczEyMSIsImEiOiJjbGNnaGpweWowMWRnM29wNWNiZ3BrNXQ2In0.mKXOZ88dCN3rU5DMQ1I2EQ&limit=1";
//   const url =
//     "http://api.weatherstack.com/current?access_key=69ef38a2d3d81c8cf326b788786fe9ff&query=31.565682,74.314183&units=m";

//   request({ url: url, json: true }, (e, res) => {
//     const data = res.body.current.temperature;
//     console.log(data);
//     request({ url: url1, json: true }, (e, res) => {
//       const data1 = res.body.features[0].center[0];
//       console.log(data1);
//     });
//   });
// };

// //temp()
// temp2()
// dim('Lahore')
// checkres("lahore");

// // const name = "anis";
// // const userage = 22;

// // const user = {
// //   name,
// //   userage,
// //   location: "lahore",
// // };

// // console.log(user);

// // const { location: loc } = user;
// // //console.log(location)
// // console.log(loc);



// const dunc =(type ,{label,stock})=>{
//   console.log(type,label,stock)
// }

// dunc('shirt')

fetch('https://puzzle.mead.io/puzzle').then((res)=>{
  res.json().then((data)=>{
    console.log(data)
  })
})
  