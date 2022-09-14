import { axiosClient } from "./axiosClient"

export const createTodo = (body) => {
    return axiosClient.post('/api/todos',body)
}

export const getTodos = () => {
    return axiosClient.get('/api/todos')
}

export const updateTodo = (body) => {
    return axiosClient.put(`/api/todos/${body.id}`,body)
}

export const deleteTodo = (id) => {
    return axiosClient.delete(`/api/todos/${id}`)
}