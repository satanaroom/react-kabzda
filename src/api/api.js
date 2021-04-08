import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "52f26c0e-0067-4a85-af08-da7dcbf1f770"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(
                response => response.data
            )
    },
    setAuth() {
        return instance.get(`auth/me`)
            .then(
                response => response.data
            )
    },
    setUnfollow(u) {
        return instance.delete(`follow/${u.id}`)
            .then(
                response => response.data
            )
    },
    setFollow(u) {
        return instance.post(`follow/${u.id}`)
            .then(
                response => response.data
            )
    }
}