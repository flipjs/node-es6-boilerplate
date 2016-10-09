import http from 'http'

const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>Hello, world!</h1>')
})
  .listen(PORT, 'localhost')

console.log(`Server running at http://localhost:${PORT}`)

