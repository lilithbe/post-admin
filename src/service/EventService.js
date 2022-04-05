import axios from 'axios';

export class EventService {

    getEvents() {
        return axios.get('post-admin/assets/demo/data/events.json')
            .then(res => res.data.data);
    }
}
