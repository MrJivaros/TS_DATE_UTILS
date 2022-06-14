import "./styles.css";
import { DateTime } from "luxon";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

function main() {
  const date = DateTime.fromISO("2022-06-14");
  console.log("start", date.toISO());
}

main();
