export interface BandResponse {
  _id: string;
  name: string;
  origin: string;
  members: {
    id: string;
    instrument: string;
    years: string[];
  }[];
  website: string;
  genresIds: string[];
}
