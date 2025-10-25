import { HomeScreen } from '@/screens/home/ui';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthScreen } from './screens/auth/ui/AuthScreen';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/auth' element={<AuthScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}