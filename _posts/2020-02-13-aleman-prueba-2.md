# Aleman Alemalandro Alemalacra

  <!-- <div id="chart"></div>
  <div id="beeSwarmPlot"></div>


  <script type="module">
  import notebook from "https://api.observablehq.com/@chekos/aleman-beeswarm-plot-using-spotify-data.js";

  const renders = {
    "chart": "#chart",
    "display": "#beeSwarmPlot",
  };

  import {Inspector, Runtime} from "https://unpkg.com/@observablehq/notebook-runtime@2?module";
  for (let i in renders)
    renders[i] = document.querySelector(renders[i]);

  Runtime.load(notebook, (variable) => {
    if (renders[variable.name])
      return new Inspector(renders[variable.name]);
  });
</script> -->


<div id="visual"></div>

<script type="module">

  // NOTEBOOK CONFIGURATION
  import notebook from "https://api.observablehq.com/@chekos/aleman-beeswarm-plot-using-spotify-data.js";


  const target = document.querySelector("#visual");
  const renders = {
    // "viewof p": "p",
    "chart": "div.fullwidth",
  };


  // BOILERPLATE
  import {Inspector, Runtime} from "https://unpkg.com/@observablehq/notebook-runtime@2?module";
  for (let i in renders) {
    let s = renders[i], a = s.match(/^\w+/);
    if (a) {
      renders[i] = document.createElement(a[0]);
      target.appendChild(renders[i]);
      if (a = s.match(/\.(\w+)$/))
        renders[i].className = a[1]; 
    }
    else
      renders[i] = document.querySelector(renders[i]);
  }
  Runtime.load(notebook, (variable) => {
    if (renders[variable.name]) {
      return new Inspector(renders[variable.name]);
    } else {
      // return true; // uncomment to run hidden cells
    }
  });
</script>