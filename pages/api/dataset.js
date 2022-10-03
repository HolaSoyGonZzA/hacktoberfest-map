import fs from "fs-extra";
import path from "path";

const getCountryCoordinates = async (country) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${country}&format=json&polygon=1&addressdetails=1`
  );
  const data = await response.json();
  if (!data.length) {
    return null;
  }
  return data[0];
};

const handler = async (_, res) => {
  const root = process.cwd();
  const dir = fs.readdirSync(path.join(root, "data"));

  const gData = [];

  for (let i = 0; i < dir.length; i++) {
    const filename = dir[i];
    const file = fs.readJsonSync(path.join(root, "data", filename));
    const lowerCountry = file.country.toLowerCase();

    const country =
      gData.length &&
      gData.find(({ properties }) => properties.country === file.country);

    if (country) {
      country.properties.contributions++;
      continue;
    }

    // We obtain the country coordinates if it does not exist.
    const data = {};

    const countryCoordinates = await getCountryCoordinates(lowerCountry);

    data.lat = countryCoordinates.lat || 0;
    data.lng = countryCoordinates.lon || 0;
    data.color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)})`;
    data.properties = {
      country: file.country,
      contributions: 1,
    };

    gData.push(data);
  }

  let totalContributions = 0;

  for (let index = 0; index < gData.length; index++) {
    totalContributions += gData[index].properties.contributions;
    // Set country size (pointAltitude)
    gData[index].size =
      gData[index].properties.contributions / totalContributions;
  }

  res.status(200).json({ gData });
};

export default handler;
