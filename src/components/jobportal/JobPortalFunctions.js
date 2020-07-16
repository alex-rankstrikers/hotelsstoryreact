import axios from 'axios'

export const jobpost = newJobPost => {
    return axios
        .post('http://localhost:8000/hotelsstory/server/api/jobpost', newJobPost, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}

