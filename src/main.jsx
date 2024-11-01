import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { GlobalProvider } from './components/context/global-contex'
import AuthProvider from './components/context/authContex'

createRoot(document.getElementById('root')).render(

    <GlobalProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </GlobalProvider>

)
