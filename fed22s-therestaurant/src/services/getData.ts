import axios from "axios";

const get = async (url: string) => {
  return await axios.get(url);
};

export const getBookings = async () => {
  try {
    const response = await get("");

    return response.data;
  } catch {
    throw new Error("Could not get data from API");
  }
};
