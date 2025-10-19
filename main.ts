
import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioSeasons: HTMLElement = document.getElementById("promedio-seasons")!;

renderSeriesInTable(dataSeries);

promedioSeasons.innerHTML = `${getPromedioSeries(dataSeries)}`


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getPromedioSeries(series: Serie[]): number {
  if (series.length === 0) return 0;
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons += serie.seasons);
  return totalSeasons/series.length;
}