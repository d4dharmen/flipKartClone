import axios from 'axios'


const url = 'http://localhost:3000/user'
const signupAuthenticate = async(data)=>{
    try {
        return await axios.post(`${url}/signup`, data)
       
        console.log('data send successfully'); 
    } catch (error) {
        console.log("error while sending post request from signup", error.message);
    }


}

export default signupAuthenticate;