import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { GloabelContext } from "./globalContext";
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './pages/App.jsx'
import Test from './pages/test.jsx'





// import Details from "./details.jsx";
// import Search from "./search.jsx";
// import Searchpage from "./searchpage.jsx";
// import Cast from "./cast-details.jsx";
// import Genre from "./genre-details.jsx";
// import GenreListFetch from "./genre-list.jsx";




//router hvor vi putter komponenter ind og laver flere sider
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/test",
    element: <Test />
  }
  // ,
  // {
  //   path: "/PropertyList",
  //   element: <PropertyList />
  // },
  // {
  //   path: "/property/:id",
  //   element: <PropertyDetails />
  // },
  // {
  //   path: "/Favorites",
  //   element: <Favorites />
  // },
  // {
  //   path: "/Agents",
  //   element: <Agents />
  // },  {
  //   path: "/kontakt",
  //   element: <Kontakt />
  // },{
  //   path: "/Agents/:id",
  //   element: <AgentDetails />
  // },  {
  //   path: "/favoriter",
  //   element: <Favoriteagents/>
  // },
  // {
  //   path: "/login",
  //   element: <Login />, // Tilføj login-siden her
  // }


  // {
  //   //vi definere vores details side path 
  //   path: "/details/:id",
  //   element: <Details />
  // },
  // {

  //   path: "/search",
  //   element: <Search />
  // }
  // ,
  // {

  //   path: "/searchpage",
  //   element: <Searchpage />
  // },


  // {

  //   path: "/cast-details/:media_type/:castId",
  //   element: <Cast />
  // }, {

  //   path: "/genre-details/:genreId",
  //   element: <Genre />
  // },
  // {

  //   path: "/genre-list/",
  //   element: <GenreListFetch />
  // }
])
//vi laver et state som vi ka gemme i vores context
const MyProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  return <GloabelContext.Provider value={{ color, setColor }}>{children}</GloabelContext.Provider>;
};






createRoot(document.getElementById('root')).render(



  //vi putter vores context rundt om vores projekt
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>



)
