import axios from 'axios';
const server_url = 'https://academic-atlas-server.onrender.com' ||  'https://academic-atlas-server-yr73.onrender.com';

class trackService {
    getBranches() {
        return axios.get(`${server_url}/api/track/getBranches`)
    }
    getCourses() {
        return axios.get(`${server_url}/api/track/getCourses`)
    }
}

const newTrackService = new trackService();
export default newTrackService;