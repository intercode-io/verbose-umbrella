import axios from "axios";
import ApiPath from "../constants/ApiPath";

export default class EmailService {
    static test() {
        return axios.get(ApiPath.email.send);
    }

    static send(data) {
        return axios.post(ApiPath.email.send, data);
    }
}
