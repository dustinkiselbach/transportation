// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

// TODO fix this 
export default async (req: NextApiRequest, res: NextApiResponse<boolean>) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL

    auth: {
      user: process.env.EMAIL_USER || '', // generated ethereal user
      pass: process.env.EMAIL_PASSWORD || '' // generated ethereal password
    }
  })

  // const to = 'dymobility@gmail.com'
  // for testing
  const to = 'dymobility@gmail.com'
  const { name, subject, message } = req.body as Record<string, string>

  if (!name.length || !subject.length || !message.length) {
    return res.status(403).send(false)
  }

  try {
    const info = await transporter.sendMail({
      to,
      subject,
      from: name,
      text: `from: ${name} \nmessage: ${message}`
    })

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    console.log('Message sent: %s', info.messageId)
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return res.status(200).send(true)
  } catch (e) {
    console.log(e)
    return res.status(400).end(JSON.stringify(e))
  }
}
