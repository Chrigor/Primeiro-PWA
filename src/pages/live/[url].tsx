import { useRouter } from 'next/router'
import LayoutLogged from '@/components/layout/Logged'

function Live() {
  const router = useRouter()
  const { url } = router.query

  return <LayoutLogged title='Live'>
    <span>
      Live: {url}
    </span>
  </LayoutLogged>
}

export default Live