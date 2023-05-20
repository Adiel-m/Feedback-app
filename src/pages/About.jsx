import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function About() {
  return (
    <section className="md container">
      <h1>Feedback Project</h1>
      <Card>
        <h2>About the project</h2>
        <p>This is a react app to leave feedback for a product or a service</p>
        <p>Version: 1.0.0</p>
        <Link to="/">Go back home</Link>
      </Card>
    </section>
  )
}

export default About
