import axios from 'axios';

export default axios.create({
	baseURL: "https://quarkus-backend-5bwtxjcuiq-uc.a.run.app",
	responseType: "json"
});