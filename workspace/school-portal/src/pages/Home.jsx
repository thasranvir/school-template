import './home.css'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Welcome to Greenfield School</h1>
        <p>Where curiosity meets excellence. Explore announcements, classes, and your portal.</p>
        <div className="cta-group">
          <a className="btn primary" href="#announcements">View Announcements</a>
          <a className="btn" href="/login">Student Login</a>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>Announcements</h3>
          <p>Stay updated with school news, events, and important deadlines.</p>
        </div>
        <div className="feature">
          <h3>Classes</h3>
          <p>Access your courses, resources, and assignments in one place.</p>
        </div>
        <div className="feature">
          <h3>Support</h3>
          <p>Reach out to teachers and staff for help when you need it.</p>
        </div>
      </div>
    </section>
  )
}