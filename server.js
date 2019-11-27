const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100 * 1024 * 1024,
  length: function (n, key) {
      return n.length
  },
  maxAge: 1000 * 60 * 60 * 24 * 30
})

const getCacheKey = req => `${req.url}`

async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (process.env.NODE_ENV === 'production') {
    if (ssrCache.has(key)) {
      // console.log(`serving from cache ${key}`);
      res.setHeader('x-cache', 'HIT');
      res.send(ssrCache.get(key))
      return
    }
  }

  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      // console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)
      res.setHeader('x-cache', 'MISS');
      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

app.prepare()
  .then(() => {
  const server = express()

  server.get('/_next/*', (req, res) => {
    /* serving _next static content using next.js handler */
    handle(req, res);
  })

  server.get('*', (req, res) => {
    /* serving page */
    return renderAndCache(req, res)
  })

  // Use the `renderAndCache` utility defined above to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.get('/search', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.get('/search/:input', (req, res) => {
    const queryParams = { q: req.params.input }
    renderAndCache(req, res, '/search', queryParams)
  })

  server.get('/user/:username', (req, res) => {
    const queryParams = { username: req.params.username }
    renderAndCache(req, res, '/user', queryParams)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
