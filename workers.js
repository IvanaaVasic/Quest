let tableWorkers = document.getElementById("tableWorkers");

function allWorkers() {
  var request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://interview-mock.herokuapp.com/api/workers/",
    true
  );
  request.onload = function () {
    var allWorkers = JSON.parse(this.response);
    getFlightsForFirstWorker(allWorkers[0].id);

    if (request.status >= 200 && request.status < 400) {
      allWorkers.forEach((worker) => {
        let tr = tableWorkers.insertRow();
        const td = document.createElement("td");
        td.textContent = worker.name;

        let allTd = document.querySelectorAll("td");
        allTd[0].classList.add("grey");

        td.classList.add("worker");

        td.addEventListener("click", (e) => {
          getFlightsForWorker(worker.id);

          const allWorkerElements = document.querySelectorAll(".worker");
          allWorkerElements.forEach((w) => w.classList.remove("grey"));
          e.target.classList.add("grey");
        });

        tr.appendChild(td);
      });
    } else {
      console.log("error");
    }
  };

  request.send();
}

allWorkers();
