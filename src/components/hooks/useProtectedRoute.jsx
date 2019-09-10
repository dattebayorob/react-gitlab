
export default (routeCallback, permission) => {
    /* TODO */
    const isAuthenticated = true
    const isAuthorized = !permission 
    return routeCallback(isAuthenticated, isAuthorized)
}