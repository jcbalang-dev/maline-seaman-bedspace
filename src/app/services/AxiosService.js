import axios from "axios";

class AxiosService {
  constructor() {
    this.baseURL = "http://127.0.0.1:5001";

    // axios instance
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        // headers
      },
    });

    // bindings
    this.request = this.request.bind(this);
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }

  async request(method, url, data = null) {
    try {
      const response = await this.axiosInstance({
        method,
        url,
        data,
      });

      return response.data;
    } catch (error) {
      // error handling
      console.error("Axios error : ", error);
      throw error;
    }
  }

  async get(url) {
    return this.request("get", url);
  }

  async post(url, data) {
    return this.request("post", url, data);
  }

  async put(url, data) {
    return this.request("put", url, data);
  }

  async delete(url) {
    return this.request("delete", url);
  }
}

const AxiosService = new AxiosService();

export default AxiosService;
