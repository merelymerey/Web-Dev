export interface Show {
  id: number;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  rating: { average: number | null };
  network: { name: string } | null;
  summary: string | null;
  image: { medium: string; original: string } | null;
}
