
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Addfruits from './Addfruits.jsx'
import Formvalidation from "./Formvalidation.jsx"

createRoot(document.getElementById('root')).render(<>

    <App />

    <Addfruits />
    <Formvalidation/>
   
    </>
)
