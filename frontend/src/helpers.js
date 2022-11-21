export const login = (user, token) => {
    localStorage.setItem('user_info', JSON.stringify(user))
    localStorage.setItem('token', JSON.stringify(token))
}

export const logout = () => {
    localStorage.removeItem('user_info')
    localStorage.removeItem('token')
}

export const isAuthenticated = () => {

    let jwt = localStorage.getItem('token');

    if(jwt) {

        return JSON.parse(jwt)

    }

    return false

}