const http = require('http')

const routes = {
    '/contact:get': (request, response) => {
        response.write('contact us page')
        return response.end()
    },
    '/contact:post': (request, response) => {
        response.write('contact us page')
        return response.end()
    },
    default(request, response) {
        response.writeHead(404)
        return response.end('not found')
    }
}

function handler(request, response) {
    const { url, method } = request
    const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`
    console.log(routeKey)
    const chosen = routes[routeKey] || routes.default
    return chosen(request, response)
}

const app = http.createServer(handler)
    .listen(3000, () => console.log('running at 3000'))