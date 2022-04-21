import { IPublicationsModel } from "@/models/publications.model";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IPublicationsModel>>
) {
  res.status(200).json([
    {
      _id: "a",
      author: { _id: "b", name: "Kaarmuhilan" },
      image: "",
      name: "Poet Bee",
      price: "0",
    },
  ]);
}
