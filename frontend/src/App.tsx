import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import SignUp from './pages/Signup'
import SignIn from './pages/Signin'
import LandingPage from './components/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp type='signup' />} />
          <Route path="/signin" element={<SignUp type='signin' />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App