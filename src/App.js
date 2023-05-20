import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/shared/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <section className="lg container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </section>
              }
            ></Route>

            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </FeedbackProvider>
  )
}

export default App
