import dynamic from "next/dynamic";

const Globe = dynamic(import("react-globe.gl"), { ssr: false });

const gData = [
  {
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    properties: {
      country: "Spain",
      contributions: Math.random() * 50,
    },
  },
  {
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    properties: {
      country: "Spain",
      contributions: Math.random() * 50,
    },
  },
  {
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    properties: {
      country: "Spain",
      contributions: Math.random() * 50,
    },
  },
];

// https://nominatim.openstreetmap.org/search?q=nicaragua&format=json&polygon=1&addressdetails=1
export default function Index() {
  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      pointsData={gData}
      pointAltitude="size"
      pointColor="color"
      pointLabel={({ properties }) => `
        <b>${properties.country}</b> <br />
        Contributions: <i>${properties.contributions}</i>
      `}
    />
  );
}
