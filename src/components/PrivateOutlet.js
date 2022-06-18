import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateOutlet = () => {
  const token = useSelector((state) => state.auth.token)
  return token !== null ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateOutlet
