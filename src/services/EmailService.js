import axios from "axios";
import ApiPath from "../constants/ApiPath";

export default class EmailService {
    static send(data) {
        return axios.post(ApiPath.email.send, data);
    }
}
