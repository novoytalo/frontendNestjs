// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const servidor2= process.env.NEST_PUBLIC_API
  // console.log(servidor2)
  res.status(200).json({ name: 'John Doe' })
}
