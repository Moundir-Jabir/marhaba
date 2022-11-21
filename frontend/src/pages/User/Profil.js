import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../../config'

const Profil = () => {

    const [user, setUser] = useState("")
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        const id = JSON.parse(localStorage.getItem('user_info'))._id
        axios.get(`${API_URL}/user/${id}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                setUser(res.data.user)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        {JSON.stringify(user)}
    </div>
  )
}

export default Profil