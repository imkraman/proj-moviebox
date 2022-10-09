
import React from "react";
import { useEffect,useState } from "react";
import './App.css'


const App = () => {
  const [user, setUser] = useState([])
  const id = 1

  const fetchData = () => {
    fetch(`https://content.newtonschool.co/v1/pr/main/users?id=${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data[0].name)
      })
  }

  useEffect(() => {
    fetchData()
  },[])
  
  return (
    <div className="app">
      
      <div>
        Name: {user.name}
      </div>
       
    </div>
  );
}

export default App;
