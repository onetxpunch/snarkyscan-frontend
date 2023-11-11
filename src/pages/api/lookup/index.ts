// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  verified: boolean;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const r = await fetch(`${process.env.ZKAPP_VERIFY_API}/test`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.ZKAPP_VERIFY_BEARER}`,
    },
    body: req.body,
  });
  const data = await r.json();
  if (data) return res.status(200).json({ verified: true, data });
  return res.status(200).json({ verified: false });
}
