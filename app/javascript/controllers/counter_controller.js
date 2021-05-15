import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];

  connect() {
    // console.log('Hello!');
    // outro jeito se selecionar elemento by ID
    // console.log(this.countTarget);
    // getElementById
    // refresh every 5 seconds
    setInterval(this.refresh, 5000);
  }

  refresh = () => {
    console.log("You clicked on the button!!!");
    // go get the number of restaurants from the DB (with an HTTP requests)
    fetch('/restaurants', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        this.countTarget.innerText = data.restaurants.length;
      });
    // replace the count with new count
  }
}