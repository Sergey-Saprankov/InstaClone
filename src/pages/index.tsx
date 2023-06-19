import { getLayout } from 'widgets/Layout/Layout'

function Home() {
  return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>Home</div>
}

Home.getLayout = getLayout

export default Home
