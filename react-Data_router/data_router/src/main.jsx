
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter.jsx'
import { AuthContextProvider } from './myContext/AuthContext.jsx'

createRoot(document.getElementById('root')).render(  
    <AuthContextProvider>
<AppRouter />
    </AuthContextProvider>
)
