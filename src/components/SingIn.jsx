import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import { AuthContext } from "../components/context/authContex"

const SingIn = () => {

  const { state, setState } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();


  useEffect(() => {
    console.log("state", state)
    console.log("setState", setState)
  })
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('http://localhost:8080/login', formData);
      localStorage.setItem("userToken", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      localStorage.setItem("isAuthenticated", "true")
      setState({
        ...state,
        user: response.data.user,
        isAuthenticated: true
      })
      navigate("/")
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="login-input"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            className="login-input"
          />
        </div>
        <div>
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingIn;
