import {axiosService} from "./axiosService";

const userService = {
    //getAllUsers: () => axiosService.get('/users'),

    getAllPosts: (id) => axiosService.get(`/users/${id}/posts`)
}
export {userService}
