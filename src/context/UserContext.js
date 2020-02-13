import React from 'react'

const UserContext = React.createContext({
  firstname: 'John',
  lastname: 'Doe',
  email: 'john.doe@gmail.com',
  user_login: 'JohnnyDough420',
  user_password: 'password0', 
  user_id: 1
})

export default UserContext
