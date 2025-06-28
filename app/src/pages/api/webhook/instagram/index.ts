import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (
      req.query['hub.mode'] == 'subscribe' &&
      req.query['hub.verify_token'] == process.env.INSTAGRAM_WEBHOOK_TOKEN
    ) {
      res.status(200).send(req.query['hub.challenge'])
    } else {
      res.status(200).send('')
    }
  }
}
