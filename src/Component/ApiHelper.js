import axios from 'axios'

class ApiHelper{
    constructor(){

        this.baseUrl ="https://jsonplaceholder.typicode.com"
        
    }

    fetchPost(){
        return axios.get(`${this.baseUrl}/posts`)
    }
}



export default ApiHelper;