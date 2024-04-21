import type { APISpaceXResponse } from "../types/api";

export async function getLatestLaunches() {
  const res = await fetch("https://api.spacexdata.com/v5/launches");

  const data = await res.json();

  const limitedData = data.slice(0, 12) as APISpaceXResponse[];

  return limitedData;
}

export async function getLaunchById(id: string) {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  const data = await res.json();

  return data as APISpaceXResponse;
}
