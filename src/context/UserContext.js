import React from 'react'

const UserContext = React.createContext({
  user_login: '',
  user_password: '', 
  user_id: 0,
  weekly_hours: 0,
  progress: 0,
  days_left: 0,
  fetchProfile: () => {},
  updateView: () => {},
  deleteItem: () => {},
  updateItem: () => {},
  updateProfile: () => {}
})

export default UserContext
