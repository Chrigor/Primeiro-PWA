import Link from 'next/link'

const Home = () => {
  return <ul>
    <li>
      <Link href='/home'>Home</Link>
    </li>
    <li>
      <Link href='/live/evnts-live'>Evnts live</Link>
    </li>
  </ul>
}

export default Home