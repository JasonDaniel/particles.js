/**
 * @author mrdoob / http://mrdoob.com/
 */

var Stats = function () {
  var container = document.createElement("div");
  container.id = "stats";

  container.style.cssText = "width:80px;opacity:0.9;cursor:pointer";

  var fpsDiv = document.createElement("div");
  fpsDiv.id = "fps";
  fpsDiv.style.cssText =
    "padding:0 0 3px 3px;text-align:left;background-color:#002";
  container.appendChild(fpsDiv);

  var fpsText = document.createElement("div");
  fpsText.id = "fpsText";
  fpsText.style.cssText =
    "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
  fpsText.innerHTML = "FPS";
  fpsDiv.appendChild(fpsText);

  var fpsGraph = document.createElement("div");
  fpsGraph.id = "fpsGraph";
  fpsGraph.style.cssText =
    "position:relative;width:74px;height:30px;background-color:#0ff";
  fpsDiv.appendChild(fpsGraph);

  return {
    REVISION: 12,

    domElement: container,
  };
};

if (typeof module === "object") {
  module.exports = Stats;
}
