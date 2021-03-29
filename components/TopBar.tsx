import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCookies } from "react-cookie"

export default function TopBar(props) {

  const router = useRouter()
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"])

  const goLogin = (e) => {
    e.preventDefault()
    router.push("/login")
  }

  const goDashboard = (e) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  const goReport = (e) => {
    e.preventDefault()
    router.push("/report")
  }

  async function handlelogout(e) {
    e.preventDefault()
    removeCookie('jwt')
    router.push("/login")
  }

  return (
    <nav className="px-3 pt-2" style={{ backgroundColor: 'transparent' }}>
      <div className="bp3-navbar-group bp3-align-left">
        <div className="bp3-navbar-heading">
          <Image
            src="/images/ISL_LOGO.png"
            alt="logo"
            width={56}
            height={50}
            layout="fixed"
          />
        </div>
      </div>
      <div className="bp3-navbar-group bp3-align-right">
        <button className="bp3-button bp3-minimal bp3-icon-home" onClick={goDashboard}>Dashboard</button>
        <button className="bp3-button bp3-minimal bp3-icon-chart" onClick={goReport}>Report</button>
        <button className="bp3-button bp3-minimal bp3-icon-log-out" onClick={handlelogout}>Logout</button>
        <span className="bp3-navbar-divider"></span>
        <button className="bp3-button bp3-minimal bp3-icon-user"></button>
        <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
        <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
      </div>
    </nav>
  )
}