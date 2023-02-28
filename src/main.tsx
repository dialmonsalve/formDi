import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProviderContext } from './context/ProviderContext'
import { InitialForm, InitialValidations } from './interfaces/initialState'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProviderContext 
      initialState={ {} as InitialForm } 
      initialValidations={{} as InitialValidations}
      >
      <App />
    </UserProviderContext>
  </React.StrictMode>,
)
