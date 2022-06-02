// type Any by default
let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
}

sendAnalytics("The data");
