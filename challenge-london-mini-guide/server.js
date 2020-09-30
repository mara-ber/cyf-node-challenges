const express = require("express");
const app = express();
app.use(express.json());
const stratford = require("./data/Stratford.json");
const heathrow = require("./data/Heathrow.json");
const harrow = require("./data/Harrow.json");

const data = {
    stratford: stratford,
    heathrow: heathrow,
    harrow: harrow
}

app.get("/", (req, res) => {
    res.send({
        "/pharmacies": "retruns an array of pharmacies in a specific area"
    })
});

app.get("/:city/:info", (req, res) => {
    console.log(data);
    const city = req.params.city.toLowerCase();
    const info = req.params.info.toLowerCase();
    const cities = Object.keys(data);
    const keys = Object.keys(data[city]);
    console.log(cities);
    if (cities.includes(city) && keys.includes(info)) {
        res.json(data[city][info]);
    } else {
        res.status(404).send("We don't have this info")
    }

});


// level 300 variant for one city
// app.get("/:city/:info", (req, res) => {
//     const city = req.params.city;
//     const info = req.params.info;
//     if (city === "stratford") {
//         res.json(stratford[info]); 
//     }
//     else if (city === "heathrow") {
//         res.json(heathrow[info]);
//     }
//     else if (city === "harrow") {
//         res.json(harrow[info]);
//     } else {
//         res.status(404).send("We don't have this info")
//     }
// });

//level 200 variant
// app.get("/colleges", (req, res) => {
//     console.log("colleges");
//     res.json(stratford.colleges);
// });

// app.get("/doctors", (req, res) => {
//     res.json(stratford.doctors);
// });

// app.get("/hospitals", (req, res) => {
//     res.json(stratford.hospitals);
// })

app.listen(3001)