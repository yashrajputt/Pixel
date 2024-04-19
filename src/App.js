import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Popular from './Popular';
import Footer from './Footer';
import Toprated from './Toprated';
import People from './People';
import UserContext from './utils/UserContext';




const App = () => {
  return (
    <div>
      
      <UserContext.Provider>
      <Header/>
      <Outlet/>
      <Footer/>
      </UserContext.Provider>
 
    </div>
  )
}



//Configuration of Routes.....

const Approute= createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    path:"/Popular",
    element: <Popular/>,
  },{
    path:"/",
    element:<Body/>
  },{
    path:"/toprated",
    element:<Toprated/>
  },{
    path:"/people",
    element:<People/>
  },]
  
}])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Approute}/>);

