import React from 'react'

const UserContext = React.createContext({
  firstname: '',
  lastname: '',
  email: '',
  user_login: '',
  user_password: '', 
  user_id: 0,
  weekly_hours: 0,
  progress: 0,
  days_left: 0,
  fetchProfile: () => {}
})

export default UserContext
