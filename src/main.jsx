import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/Home/Home.jsx'
import About from './About/About.jsx'
import Content from './Content/Content.jsx'
import Travel from './Travel/Travel.jsx'
import Reserve from './Reserve/Reserve.jsx'
import Review from './Review/Review.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/about',
    element : <About />
},{
  path : '/content',
  element : <Content />
},{
  path : '/travel',
  element : <Travel />
},
{
  path : '/reserve',
  element : <Reserve />
},
{
  path : '/review',
  element : <Review />
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>,
)
