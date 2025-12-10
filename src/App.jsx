import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServiceDemo from './pages/ServiceDemo'
import FAQ from './pages/FAQ'
import Settings from './pages/Settings'

// Layout component to handle conditional footer
function Layout() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/' || location.pathname === '/home'

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/servicedemo" element={<ServiceDemo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      {isLandingPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
