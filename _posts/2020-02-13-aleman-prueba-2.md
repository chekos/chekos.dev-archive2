# Aleman Alemalandro Alemalacra

  <div id="chart"></div>
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
</script>