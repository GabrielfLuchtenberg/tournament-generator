import { Request, Response } from "express";
import { getMatches } from "./round-robin-controller";

export default [
  {
    path: "/v1/round",
    method: "get",
    handler: async ({ query, body }: Request, res: Response) => {
      // res.status(200).send(body);
      const result = await getMatches(body);
      res.status(200).send(result);
    }
  }
];
