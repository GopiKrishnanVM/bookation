import { IPublicationsModel } from "@/models/publications.model";
import { products } from "@/static/publications.data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IPublicationsModel>>
) {
  res.status(200).json(products);
}
