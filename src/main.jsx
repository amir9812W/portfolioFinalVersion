import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider , Link} from 'react-router-dom'
import App from './App.jsx'


let routes = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : 
    <Link to={'/'}>
      <div className='w-[100%] h-[100vh] flex justify-center items-center'>
        <h1 className='p-[300px] text-[30px] text-white bg-cyan-400'>bitch wtf are you doing here lil nigga</h1>
      </div>
    </Link>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
