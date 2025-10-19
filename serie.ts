
export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  descripcion: string;
  sitioURL: string;
  fotoURL: string;
  constructor(id: number, completeName: string, channel: string, seasons: number, descripcion: string, sitioURL: string, fotoURL: string) {
    this.id = id
    this.name = completeName;
    this.channel = channel;
    this.seasons = seasons;
    this.descripcion = descripcion;
    this.sitioURL = sitioURL;
    this.fotoURL = fotoURL;
  }
}