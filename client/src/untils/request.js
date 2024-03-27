class Request{
    async get(url, path, options = {}){
        const response = await url.get(path, options)
        return response.data
    }
    async post_login(url, path){
        const request = await url.post(path)
        return request.data
    }
}


module.exports = new Request()









