import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioSeasons = document.getElementById("promedio-seasons");
renderSeriesInTable(dataSeries);
promedioSeasons.innerHTML = "".concat(getPromedioSeries(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioSeries(series) {
    if (series.length === 0)
        return 0;
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    return totalSeasons / series.length;
}
