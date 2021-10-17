import { Request, Response } from 'express'

const findOne = (req: Request, res: Response) => {
  res.status(200).send('Some user')
}

export default { findOne }
