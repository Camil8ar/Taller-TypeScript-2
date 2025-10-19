import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioSeasons = document.getElementById("promedio-seasons");
var seriesDetailsContainer = document.getElementById("series-details");
var seriesImage = document.getElementById("series-image");
var seriesTitle = document.getElementById("series-title");
var seriesDescription = document.getElementById("series-descripcion");
var seriesLink = document.getElementById("series-link");
renderSeriesInTable(dataSeries);
promedioSeasons.innerHTML = "".concat(getPromedioSeries(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td class=\"series-name\" style=\"cursor: pointer; color: blue; text-decoration: underline;\">").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        // Add click event to the series name
        var seriesNameCell = trElement.querySelector('.series-name');
        seriesNameCell.addEventListener('click', function () { return showSeriesDetails(serie); });
    });
}
function showSeriesDetails(serie) {
    // Show the details container
    seriesDetailsContainer.style.display = 'block';
    // Populate the details
    seriesImage.src = serie.fotoURL;
    seriesImage.alt = serie.name;
    seriesTitle.textContent = serie.name;
    seriesDescription.textContent = serie.descripcion;
    seriesLink.href = serie.sitioURL;
}
function getPromedioSeries(series) {
    if (series.length === 0)
        return 0;
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    return totalSeasons / series.length;
}
