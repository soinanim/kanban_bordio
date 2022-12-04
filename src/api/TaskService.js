import axios from 'axios';

export default class TaskService {
  static async getTasks() {
    return axios.get('./tasks.json');
  }
}
