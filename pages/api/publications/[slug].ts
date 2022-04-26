import { ErrorModel } from "@/models/common/error.model";
import { IPublicationsModel } from "@/models/publications.model";
import { products } from "@/static/publications.data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPublicationsModel | ErrorModel>
) {
  const slug = String(req.query?.slug ?? "");
  const book = products.find((x) => x.slug == slug);
  if (book) {
    res.status(200).json(book);
  } else {
    console.log(book, "boooook");
    res
      .status(200)
      .json(new ErrorModel({ errorCode: "404", errorMsg: "Page not Found" }));
  }
}
