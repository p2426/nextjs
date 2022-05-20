export default function handler(req, res) {
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');
    res.status(200).json({ name: 'John Doe' })
}
