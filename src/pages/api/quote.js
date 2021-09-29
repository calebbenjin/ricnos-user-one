import { API_URL } from '../../lib/index'

export default async (req, res) => {
  if (req.method === 'POST') {
    const {
      weight,
      value,
      vehicle,
      region,
      // arrival,
      // departure,
      // description,
      // email,
      // name,
      // phone,
    } = req.body

    const apiRes = await fetch(`${API_URL}/get_quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // arrival,
        // departure,
        // description,
        // email,
        // name,
        // phone,
        weight,
        value,
        vehicle,
        region,
      }),
    })

    const apiData = await apiRes.json()

    console.log(apiData)
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
