let tableFlight = document.getElementById("tableFlightBasicInfo");

function clearFlights() {
  let rows = tableFlight.querySelectorAll("tr");
  for (let i = 1; i < rows.length; i++) {
    rows[i].remove();
  }
}

function getFlightsForFirstWorker(workerId) {
  const request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://interview-mock.herokuapp.com/api/workers/" + workerId,
    true
  );

  request.onload = function () {
    var flights = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      flights.forEach((flight) => {
        let flightRow = tableFlight.insertRow();

        let tdFlightNum = document.createElement("td");
        tdFlightNum.textContent = flight.num;

        let tdFlightOrigin = document.createElement("td");
        tdFlightOrigin.textContent = flight.from;

        let tdFlightOriginDate = document.createElement("td");
        tdFlightOriginDate.textContent = flight.from_date;

        let tdFlightTo = document.createElement("td");
        tdFlightTo.textContent = flight.to;

        let tdFlightToDate = document.createElement("td");
        tdFlightToDate.textContent = flight.to_date;

        flightRow.addEventListener("click", () => flightInfo(flight));

        flightRow.appendChild(tdFlightNum);
        flightRow.appendChild(tdFlightOrigin);
        flightRow.appendChild(tdFlightOriginDate);
        flightRow.appendChild(tdFlightTo);
        flightRow.appendChild(tdFlightToDate);
      });
    } else {
      console.log("error");
    }
  };

  request.send();
}

function getFlightsForWorker(workerId) {
  clearFlights();
  const request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://interview-mock.herokuapp.com/api/workers/" + workerId,
    true
  );

  request.onload = function () {
    // Begin accessing JSON data here
    var flights = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      flights.forEach((flight) => {
        let flightRow = tableFlight.insertRow();

        let tdFlightNum = document.createElement("td");
        tdFlightNum.textContent = flight.num;

        let tdFlightOrigin = document.createElement("td");
        tdFlightOrigin.textContent = flight.from;

        let tdFlightOriginDate = document.createElement("td");
        tdFlightOriginDate.textContent = flight.from_date;

        let tdFlightTo = document.createElement("td");
        tdFlightTo.textContent = flight.to;

        let tdFlightToDate = document.createElement("td");
        tdFlightToDate.textContent = flight.to_date;

        flightRow.addEventListener("click", () => flightInfo(flight));

        flightRow.appendChild(tdFlightNum);
        flightRow.appendChild(tdFlightOrigin);
        flightRow.appendChild(tdFlightOriginDate);
        flightRow.appendChild(tdFlightTo);
        flightRow.appendChild(tdFlightToDate);
      });
    } else {
      console.log("error");
    }
  };

  request.send();
}

function flightInfo(flight) {
  document.getElementById("planeNum").textContent = flight.plane;
  document.getElementById("flightDuration").textContent = timeConvert(
    flight.duration
  );
  document.getElementById("originGate").textContent = flight.from_gate;
  document.getElementById("destGate").textContent = flight.to_gate;
}

function timeConvert(n) {
  var hours = n / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "m";
}
