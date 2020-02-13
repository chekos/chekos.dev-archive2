# Artistas relacionados a Aléman en Spotify

<style src="{{ site.url }}/assets/posts/aleman/aleman-viz.css"></style>

> probando probando probando

1. TOC
{:toc}

<div class="wrapper">
    <div id="bees">
        <h3>Alemán</h3>
        <p>Artistas relacionados (hasta dos niveles de separación)</p>
        <div id="tooltip" class="tooltip">
            <div class="tooltip-name">
                <span id="name"></span>
            </div>
            <div class="tooltip-followers">
                Seguidores: <span id="followers"></span>
            </div>
            <div class="tooltip-popularity">
                Popularidad: <span id="popularity"></span>
            </div>
            <div class="tooltip-genres">
                Generos: <span id="genres"></span>
            </div>
            <div class="tooltip-music">
                Top track: <span id="top-track"></span>
            </div>
        </div>
    </div>
  </div>

<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="{{ site.url }}/assets/posts/aleman/aleman-viz.js"></script>


<!-- <div id="observablehq-c0e03e6f"></div>
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@chekos/aleman-beeswarm-plot-using-spotify-data.js?v=3";
const inspect = Inspector.into("#observablehq-c0e03e6f");
(new Runtime).module(define, name => (name === "drawBeeswarmPlot") && inspect());
</script> -->