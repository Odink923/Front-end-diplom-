import axios from "axios";
import $api  from "../http";

export default class UserService {
    static fetchUsers() {
        return $api.get('/users')
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }
}
