import axios from 'axios';

export class NodeService {
    getTreeNodes() {
        return axios.get('post-admin/assets/demo/data/treenodes.json')
            .then(res => res.data.root);
    }

	getTreeTableNodes() {
		return axios.get('post-admin/assets/demo/data/treetablenodes.json')
			.then(res => res.data.root);
	}
}
