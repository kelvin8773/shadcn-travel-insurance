interface Destination {
  id: string;
  country: string;
  region: string;
}

export const destinations: Destination[] = [
  { id: "jp", country: "Japan", region: "Asia" },
  { id: "fr", country: "France", region: "Europe" },
  { id: "it", country: "Italy", region: "Europe" },
  { id: "nz", country: "New Zealand", region: "Oceania" },
  { id: "ch", country: "Switzerland", region: "Europe" },
  { id: "th", country: "Thailand", region: "Asia" },
  { id: "gr", country: "Greece", region: "Europe" },
  { id: "au", country: "Australia", region: "Oceania" },
  { id: "ca", country: "Canada", region: "North America" },
  { id: "is", country: "Iceland", region: "Europe" },
  { id: "sg", country: "Singapore", region: "Asia" },
  { id: "pt", country: "Portugal", region: "Europe" },
  { id: "es", country: "Spain", region: "Europe" },
  { id: "mv", country: "Maldives", region: "Asia" },
  { id: "cr", country: "Costa Rica", region: "Central America" }
];