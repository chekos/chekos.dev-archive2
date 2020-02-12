# Artistas relacionados a Aléman en Spotify

<style>
#bees {
    max-width: 480px;
    width: 50%;
    margin: auto;
    background: #ccc;
}

.rapper-name {
  font: 0.8em sans-serif;
  stroke-width: .1px;
  stroke: #c7c7c7;
}
.right-side-name {
  text-anchor: start;
}
.left-side-name {
  text-anchor: end;
}
.y-axis-label {
  font: 1.2em sans-serif;
  text-anchor: middle;
  fill: black;
  transform: rotate(-90deg);
}
.y-axis {
  font: 0.8em sans-serif;

}

.tooltip {
    opacity: 0;
    position: absolute;
    top: -14px;
    left: 0;
    padding: 0.6em 1em;
    background: #fff;
    text-align: center;
    line-height: 1.4em;
    font-size: 0.9em;
    border: 1px solid #ddd;
    z-index: 10;
    transition: all 0.1s ease-out;
    pointer-events: none;
    max-width: 45%;
}

.tooltip:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 12px;
    height: 12px;
    background: white;
    border: 1px solid #ddd;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: translate(-50%, 50%) rotate(45deg);
    transform-origin: center center;
    z-index: 10;
}

.tooltip-name {
    margin-bottom: 0.2em;
    font-weight: 600;
    font-size: 1.1em;
    line-height: 1.4em;
    text-align: center;
}
.tooltip-image {
    text-align: center;
}

.genres {
  overflow-wrap: break-word;
}

image{
  position: relative;
  align-items: center;
}

.tooltip-image{
  position: relative;
  float: left;
  text-align : center; 
  width: 47%;
  vertical-align: middle;
}

.tooltip-image img {
  display: block;
  margin-left: auto;
  margin-right: auto; 
  width: 100%;
  height: auto;
  //height: calc(100vh/10);
}

.info{
  position: relative;
  float: right; 
  width: 45%;
  vertical-align: middle;
  text-align: left;
}

audio {
  max-width: 50%;
}

.lil-album{
  text-align: center;
  width: 50%;
}
figure {
  text-align: center;
}
</style>
> probando probando probando

1. TOC
{:toc}

<div style="max-width:80%">
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

<div id="observablehq-c0e03e6f"></div>
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@chekos/aleman-beeswarm-plot-using-spotify-data.js?v=3";
const inspect = Inspector.into("#observablehq-c0e03e6f");
(new Runtime).module(define, name => (name === "drawBeeswarmPlot") && inspect());
</script>