import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </div>
  )
}

export default Home
