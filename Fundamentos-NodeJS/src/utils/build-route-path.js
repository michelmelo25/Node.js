export function buildRoutePath(path){
    const routeParameterARegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParameterARegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWithParams}`)

    return pathRegex
}
