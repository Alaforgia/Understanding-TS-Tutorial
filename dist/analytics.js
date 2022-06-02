"use strict";
// type Any by default
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
sendAnalytics("The data");
