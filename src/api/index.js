import instanceAxios from "../axios";

class Request {
    async fetchUser() {
        const response = await instanceAxios.get(`/user`);
        return response.data;
    }
    async fetchVacancy() {
        const response = await instanceAxios.get(`/dresses`);
        return response.data;
    }
    async fetchNewVacancy(sphere, company, experience, salary, graphics, address, city) {
        try {
            const response = await instanceAxios.post('vacancy', {
                sphere,
                company,
                experience,
                salary,
                graphics,
                address,
                city
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }


            });
            return response.data;
        } catch (error) {
            console.error('Error posting dataaaa:', error);
            throw error;
            
        }

    }
    async fetchNew(name, surname, age, email, password) {
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
