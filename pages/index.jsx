import dynamic from "next/dynamic";

const Globe = dynamic(import("react-globe.gl"), { ssr: false });

export async function getServerSideProps() {
  const response = await fetch(
    "https://hacktoberfest-map.vercel.app/api/dataset"
  );
  const gData = await response.json();
  return {
    props: { gData },
  };
}

export default function Index({ gData }) {
  return (
    <>
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
    </>
  );
}
