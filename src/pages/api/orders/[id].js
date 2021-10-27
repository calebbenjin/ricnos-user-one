// const { orders: data } = require('./orders.json')

// export default orderss = (req, res) => {
//   const order = data.filter((item) => item.id === req.query.id )
//   if (req.method === 'GET') {
//     res.status(200).json(order)
//   } else {
//     res.setHeader('Allow', ['GET'])
//     res.status(405).json({message: `Method ${req.method} is not allowed`})
//   }
// }



