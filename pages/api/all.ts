import type { Applicant } from './lib/applicant'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDB } from './lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Applicant[]>
) {
  const db = await getDB();
  const response = await db.all<Applicant[]>("select * from applicant");
  res.status(200).json(response);
  db.close();
}
