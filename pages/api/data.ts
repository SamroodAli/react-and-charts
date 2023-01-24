import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await axios.get(
      "https://contrahacker.com/api/example-data"
    );
    console.log(data, "asdasd");

    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong. Please wait while we fix this.",
    });
  }
}
