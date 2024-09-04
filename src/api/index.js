import instanceAxios from "../axios";

class Request {
    async fetchUser() {
        const response = await instanceAxios.get(`/user`);
        return response.data;
    }
    async fetchDres() {
        const response = await instanceAxios.get(`/dresses`);
        return response.data;
    }
    async fetchDress(name, surname, age, email, password) {
        try {
            const response = await instanceAxios.post('/user', {
                name,
                surname,
                age,
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
        
    }

}

export default new Request();
