looker.plugins.visualizations.add({
  id: "custom_button",
  label: "Custom Button",
  options: {
    secret: {
      type: "string",
      label: "CF URL",
      placeholder: "Cloud Function URL",
    },
    secret: {
      type: "string",
      label: "Secret",
      placeholder: "Segreto per l'autenticazione",
    },
  },
  // Set up the initial state of the visualization
  create: function (element, config) {
    console.log("here for real");
    // Insert a <style> tag with some styles we'll use later.
    element.innerHTML = `
      <style>
        .hello-world-vis {
          /* Vertical centering */
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .hello-world-text-large {
          font-size: 72px;
        }
        .hello-world-text-small {
          font-size: 18px;
        }
      </style>
    `;

    // Create a container element to let us center the text.
    var container = element.appendChild(document.createElement("div"));
    container.className = "hello-world-vis";

    // Create an element to contain the text.
    var container = element.appendChild(document.createElement("div"));
    container.className = "hello-world-vis";

    // Create an element to contain the text.
    this._button = container.appendChild(document.createElement("button"));
    this._button.innerHTML = "Aggiorna!";

    this._button.onclick = function () {
      console.log("Button is clicked");
      _button.innerHTML = "Aggiornando...";
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          console.log(xhttp.responseText);
          this._button.innerHTML = "Aggiorna!";
        }
      };

      cloud_function_url = "https://us-central1-gip-data-dwh-dev.cloudfunctions.net/test_custom_button";
      req_body = { secret: "very supersecret secret" };
      xhttp.open("POST", cloud_function_url, true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

      xhttp.send(JSON.stringify(req_body));
    };
  },

  // Render in response to the data or settings changing
  updateAsync: function (data, element, config, queryResponse, details, done) {
    // Clear any errors from previous updates
    this.clearErrors();

    // Throw some errors and exit if the shape of the data isn't what this chart needs
    //this.addError({ title: "", message: "" });// return;
    done();
  },
});
