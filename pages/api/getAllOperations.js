import prisma from '../../db/prisma';

export default async function handler(req, res) {
  let _ = await prisma.operationSequence.findMany({});
  res.status(200).json({ operations: _ });
  return;
}
