import { AppProvider } from "./shared/context/AppContext";
import { Main } from "./shared/components/Layout/Main";
import {BrowserRouter} from 'react-router-dom'
import { Router } from "./shared/components/Router";




function App(){
  return (
    <AppProvider>
      <BrowserRouter>
        <Main>
          <Router/>
        </Main>
      </BrowserRouter>
    </AppProvider>
  );
}


export  {
  App
}