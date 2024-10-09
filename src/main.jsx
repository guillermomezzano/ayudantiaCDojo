import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { GlobalProvider } from './components/context/global-contex'

createRoot(document.getElementById('root')).render(
    <GlobalProvider>
        <App />
    </GlobalProvider>

)
