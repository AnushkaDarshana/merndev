import './App.css';
import Props from './Components/Props';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import MouseEvents from './Components/MouseEvents';
import KeyboardEvents from './Components/KeyboardEvents';
import FormEvents from './Components/FormEvents';
import ArraysWithUseState from './Components/ArraysWithUseState';
import ObjectsWithUseState from './Components/ObjectsWithUseState';
import UserProvider from './Components/UserProvider';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import UseReducer from './Components/UseReducer';
import UseCallback from './Components/UseCallback';
import UseMemo from './Components/UseMemo';
import UseRef from './Components/UseRef';
import UseLayout from './Components/UseLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Counter from './Components/Counter';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Post from './Components/Post';
import UseNavigate from './Components/UseNavigate';
import Error from './Components/Error';
import Dashboard_2 from './Components/Dashboard_2';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
    return (
      <>
        <Props name="React" city="Colombo"/>

        {/* UseState Hook */}
        <UseState />

        {/* MouseEvents */}
        <MouseEvents />
        <KeyboardEvents />
        <FormEvents/>

        {/* UseState Hook with arrays and objects */}
        <ArraysWithUseState/>
        <ObjectsWithUseState/>

        {/* UseEffect Hook */}
        <UseEffect/>

        {/* UseContext Hook */}
        <UserProvider>
          <Login />
          <UserProfile/>
        </UserProvider>

        {/* UseReducer Hook */}
        <UseReducer/>

        {/* UseCallback Hook */}
        <UseCallback/>

        {/* UseMemo Hook */}
        <UseMemo/>

        {/* UseRef Hook */}
        <UseRef/>

        {/* UseLayout Hook */}
        <UseLayout/>


        {/* Routing */}
        
        {/* <Router>
          <Routes>
            <Route path="/" element={<Navigation />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/dashboard_2/*" element={<Dashboard_2 />} />
            <Route path="/dashboard/about" element={<About />} />
            <Route path="/posts/:params" element={<Post />} />
            <Route path="/useNavigate" element={<UseNavigate />} />
            <Route path="*" element={<Error />} />  
          </Routes>
        </Router> */}

        {/* Protected Routing */}

        {/* <Router>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<ProtectedRoute/>}>
                <Route path="/userProfile" element={<UserProfile />} />
              </Route>
            </Routes>
          </UserProvider>
        </Router> */}

      </>
    );
}

export default App;