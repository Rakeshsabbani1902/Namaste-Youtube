import { Provider } from "react-redux";
import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchResults from "./Components/SearchResults";
 

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    },
    {
      path:"results",
      element:<SearchResults/>
    }
  ]
}])


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    
     <Head/>
   <RouterProvider router={appRouter} />


{/**
 * Head
 * Body
 * Sidebar
 *    MenuItems
 * MainContainer
 *   ButtonList
 *    VideoContainer
 *      Videocard 
 */
}
    </div>
    </Provider>
  );
}



export default App;
