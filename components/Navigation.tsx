import Image from 'next/image'
import { useRouter } from 'next/router'


export default function BaseHead(props) {

  const router = useRouter()

  const goHome = (e) => {
    e.preventDefault()
    router.push("/login")
  }

  return (
    <nav className="bp3-navbar" style={{ backgroundColor: 'transparent' }}>
      <div className="bp3-navbar-group bp3-align-left">
        <div className="bp3-navbar-heading">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={120}
            height={30}
            layout="fixed"
          />
        </div>
      </div>
      <div className="bp3-navbar-group bp3-align-right">
        <button className="bp3-button bp3-minimal bp3-icon-home" onClick={goHome}>Home</button>
        <button className="bp3-button bp3-minimal bp3-icon-document">Files</button>
        <span className="bp3-navbar-divider"></span>
        <button className="bp3-button bp3-minimal bp3-icon-user"></button>
        <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
        <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
      </div>
    </nav>
  )
}