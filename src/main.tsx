import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProviderContext } from './context/ProviderContext'
import { User } from './interfaces/user'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProviderContext user={{} as User} >
        <App />
    </UserProviderContext>
  </React.StrictMode>,
)
