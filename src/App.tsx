import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from './pages/AdminRoom';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/salas/nova" element={<NewRoom />}/>
          <Route path="/salas/:id" element={<Room />}/>
          <Route path="admin/salas/:id" element={<AdminRoom />}/>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
