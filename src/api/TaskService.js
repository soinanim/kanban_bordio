import axios from 'axios';

export default class TaskService {
  static async getColumns() {
    return axios.get('./tasks.json');
  }
}
