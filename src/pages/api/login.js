import { API_URL } from '@/lib/index'
import cookie from 'cookie'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const apiRes = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await apiRes.json()

    console.log(data)

    if (apiRes.ok) {
      // Set Cookie
      
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', String(data.token), {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/'
        })
      )

      res.status(200).json({ user: data.user })
    } else {
      res.status(500).json({message: data.message})
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
