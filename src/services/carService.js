import {axiosServices} from "./axiosServices";
import {urls} from "../configs";

const carService = {
    getAll:() => axiosServices.get(urls.cars),
    create:(newCar) => axiosServices.post(urls.cars, newCar),
    updateById:(id, data) => axiosServices.put(`${urls.cars}/${id}`, data),
    deleteById:(id) => axiosServices.delete(`${urls.cars}/${id}`)
}
export {carService}