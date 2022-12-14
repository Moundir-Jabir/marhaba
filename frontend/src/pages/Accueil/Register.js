import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../config'
import toastr from 'toastr'
import 'toastr/build/toastr.css'
import FormCard from '../../components/forms/FormCard'

const Register = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "", email: "", role: "client", password: "", password2: ""
  })

  const [error, setError] = useState({
    nameError: "", emailError: "", passwordError: "", password2Error: ""
  })

  const submit = (e) => {
    e.preventDefault()
    let newError = {}
    let namePatern = /^[a-zA-Z\s]+$/
    let emailPatern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (namePatern.test(name))
      newError.nameError = ""
    else
      newError.nameError = "invalid fullname"
    if (emailPatern.test(email))
      newError.emailError = ""
    else
      newError.emailError = "invalid email"
    if (password.length >= 8 && password.length <= 20)
      newError.passwordError = ""
    else
      newError.passwordError = "password should be between 8 and 20 caracters"
    if (password == password2)
      newError.password2Error = ""
    else
      newError.password2Error = "invalid password"
    setError({ ...error, ...newError })
    if (newError.nameError == "" && newError.emailError == "" && newError.passwordError == "" && newError.password2Error == "") {
      axios.post(`${API_URL}/auth/register`, user)
        .then((res) => {
          toastr.success(res.data.message, 'New Account', {
            positionClass: "toast-bottom-left"
          })
          navigate('/login')
        })
        .catch((err) => {
          if (err.response.data.erreur) {
            toastr.warning(err.response.data.erreur, 'Please Check form !', {
              positionClass: "toast-bottom-left"
            })
          } else {
            toastr.warning("This email is already used by another account", 'Sorry !', {
              positionClass: "toast-bottom-left"
            })
          }
        })
    }
  }

  const { name, email, role, password, password2 } = user
  const { nameError, emailError, passwordError, password2Error } = error
  const links = [
    { link: "Already have an account? Login", to: "/login" }
  ]
  let inputs = [
    { name: "name", value: name, type: "text", icon: "person_outline", label: "Full Name", error: nameError },
    { name: "email", value: email, type: "email", icon: "mail_outline", label: "Email", error: emailError },
    { name: "role", value: role, type: "select", icon: "person_outline", label: "Role", error: "", options: ["client", "livreur"] },
    { name: "password", value: password, type: "password", icon: "lock_outline", label: "Password", error: passwordError },
    { name: "password2", value: password2, type: "password", icon: "lock_outline", label: "Password again", error: password2Error }
  ]
  return (
    <FormCard submit={submit} title="Register" description="Welcome to Marhaba restaurant" button="Register" links={links} inputs={inputs} setState={setUser} state={user} />
  )
}

export default Register