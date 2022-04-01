import axios from "axios";
const spaceX = axios.create({
  baseURL: "https://api.spacexdata.com/",
});

export const getAllLaunch = async () => {
  const { data } = await spaceX.get("v4/launches");
  return data;
};

export const getLastLaunch = async () => {
  const { data } = await spaceX.get("v4/launches/latest");
  return data;
};

export const getPageLaunch = async (page) => {
  const { data } = await axios.post(
    "https://api.spacexdata.com/v4/launches/query",
    {
      options: {
        limit: 30,
        page: page,
      },
    }
  );
  return data;
};
