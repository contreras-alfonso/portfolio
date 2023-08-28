import { Outlet } from 'react-router-dom'
import Navigate from '../components/Navigate'

const LayoutPublico = () => {
  return (
    <main className=' bg-neutral-900'>
        <Outlet/>
        <Navigate/>
    </main>
  )
}

export default LayoutPublico