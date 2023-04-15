import { categories } from '../../../lib/data'

export default function handler(req, res) {
     res.status(200).json(categories)
}
