# Aleman Alemalandro Alemalacra
<style>
/* https://css-tricks.com/full-width-containers-limited-width-parents/ */
.fullwidth {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>

  <div class="fullwidth">  
    <div id="chart"></div>
    <div id="beeSwarmPlot"></div>
  </div>

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