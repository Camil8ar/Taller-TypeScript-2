
import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioSeasons: HTMLElement = document.getElementById("promedio-seasons")!;

const seriesDetailsContainer: HTMLElement = document.getElementById("series-details")!;
const seriesImage: HTMLImageElement = document.getElementById("series-image") as HTMLImageElement;
const seriesTitle: HTMLElement = document.getElementById("series-title")!;
const seriesDescription: HTMLElement = document.getElementById("series-descripcion")!;
const seriesLink: HTMLAnchorElement = document.getElementById("series-link") as HTMLAnchorElement;

renderSeriesInTable(dataSeries);
promedioSeasons.innerHTML = `${getPromedioSeries(dataSeries)}`;

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td class="series-name" style="cursor: pointer; color: blue; text-decoration: underline;">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);

    const seriesNameCell = trElement.querySelector('.series-name')!;
    seriesNameCell.addEventListener('click', () => showSeriesDetails(serie));
  });
}

function showSeriesDetails(serie: Serie): void {
  seriesDetailsContainer.style.display = 'block';
  
  seriesImage.src = serie.fotoURL;
  seriesTitle.textContent = serie.name;
  seriesDescription.textContent = serie.descripcion;
  seriesLink.href = serie.sitioURL;
}

function getPromedioSeries(series: Serie[]): number {
  if (series.length === 0) return 0;
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons += serie.seasons);
  return totalSeasons / series.length;
}