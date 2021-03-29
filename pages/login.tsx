import BaseHead from '../components/BaseHead'
import Image from 'next/image'
import { Button, Card, Elevation } from "@blueprintjs/core"
import { useRouter } from 'next/router'
import { ApplicationState } from '../atom/ApplicationState'
import { useRecoilState } from 'recoil'
import { useState, useEffect } from 'react'
import { useCookies } from "react-cookie"


export default function Login() {
  const router = useRouter()

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errorMsg, setErrorMsg] = useState('')

  const [application, setApplication] = useRecoilState(ApplicationState)

  const [cookie, setCookie] = useCookies(["jwt"])

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: username,
      password: password,
      type: 'OPERATOR'
    }

    try {
      const url = 'http://localhost:3000/api/v1/auth'
      await fetch(url, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }).then(function (a) {
        return a.json(); // call the json method on the response to get JSON
      })
      .then(function (json) {
          console.log(json)
          setCookie("jwt", json.data.token, {
            path: "/",
            maxAge: 86400, // Expires after 1 day
            sameSite: true,
          })
          router.push("/vendor/list")
      })
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  const goDashboard = (e) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  const hydrate = (data) => {
    localStorage.setItem('applicationState', JSON.stringify(data))
  }

  const dehydrate = () => {
    const appData = JSON.parse(localStorage.getItem('applicationState'))
    console.log(JSON.stringify(appData))
    application.user.username = appData.user.username
    //if (appData) setApplication(appData)
  }

  const validateUsername = (e) => {
    /** PERFORM VALIDATION ***/
    setUsername(e.target.value)
    setApplication({ ...application, user: { ...application.user, username: e.target.value } })
  }

  const validatePassword = (e) => {
    /** PERFORM VALIDATION ***/
    setPassword(e.target.value)
    setApplication({ ...application, user: { ...application.user, password: e.target.value } })
  }

  useEffect(() => {
    // dehydrate()
  }, [])


  return (
    <div className="container d-flex flex-column min-vh-100 justify-content-center align-self-center" style={{ backgroundColor: "transparent" }}>
      <BaseHead title="Login" css="login" />

      <div className="row justify-content-center" style={{ height: "420px", marginRight: 5, marginLeft: 5, }}>
        <div className="col-lg-8 p-0" style={{ backgroundColor: 'transparent' }}>
          <Card interactive={false} elevation={Elevation.FOUR} className="w-100 h-100" style={{ paddingTop: 1, paddingBottom: 1, borderWidth: 2, borderRadius: 10, backgroundColor: "silver" }}>
            <div className="row h-100 justify-content-center" style={{ backgroundColor: "white", borderWidth: 2, borderRadius: 10, paddingLeft: 0, marginLeft: -19, marginRight: -19 }}>
              <div className="col rounded-right justify-content-center  align-self-center" style={{ backgroundColor: "transparent" }}>
                <div className="row mr-1 " style={{ height: 300 }}>
                  <div className="col" style={{}} >
                    <div className="row" style={{}}>
                      <div className="col" style={{}} >
                        <div className="col text-black text-center" style={{}} >
                          <h1 className="h3">Sales Inventory</h1>
                          <h1 className="h5" style={{ fontFamily: "Ubuntu" }}>Over Internet</h1>
                          <p style={{ fontSize: 12, fontFamily: "Helvetica Neue" }}>Release 1.0 Build 3393</p>
                        </div>
                      </div>
                    </div>
                    <Image
                      src="/images/sioi.jpg"
                      alt="logo"
                      width={350}
                      height={210}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-0" style={{ marginRight: -2, width: "40px", backgroundColor: "white", backgroundImage: `url('./splitter.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }} />
              <div className="col-6 rounded-left h-100 d-flex flex-column justify-content-center align-self-center" style={{ backgroundColor: "#61a25e", borderWidth: 3, borderRadius: 11, marginRight: -1 }}>
                <div className="row mr-1 " style={{ backgroundColor: 'transparent' }}>
                  <div className="col text-white text-center" style={{}} >
                    <h1 className="h3">Sign in to Account</h1>
                    <hr className="w-25" style={{ height: 1, backgroundColor: 'white' }} />
                    <div className="w-100 p-3" style={{ backgroundColor: 'transparent', borderRadius: 10 }} >
                      <div className="bp3-input-group bp3-large" style={{ borderColor: "white" }}>
                        <input type="text" className="bp3-input bp3-round bg-transparent text-white border" onChange={validateUsername} /*defaultValue={application.user.username}*/ id="username" style={{ color: 'white', borderColor: "white", textAlign: "center" }} placeholder="Enter your username" />
                        <button className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-user text-white" ></button>
                      </div>
                      <div style={{ height: 10 }} />
                      <div className="bp3-input-group bp3-large" style={{ borderRadius: 10 }}  >
                        <input type="password" className="bp3-input bp3-round bg-transparent text-white border" onChange={validatePassword} /*defaultValue={application.user.password}*/ id="password" style={{ color: 'white', borderColor: "white", textAlign: "center" }} placeholder="Enter your password" />
                        <button className="bp3-button bp3-minimal bp3-intent-warning bp3-icon-lock text-white" ></button>
                      </div>
                      <div style={{ height: 20 }} />
                      <Button className="bp3-intent-primary bp3-round bp3-large w-100" style={{ borderRadius: 10 }} onClick={handleSubmit}>Login</Button>
                      <div style={{ height: 10 }} />
                      <label className="bp3-control bp3-checkbox">
                        <input type="checkbox" />
                        <span className="bp3-control-indicator"></span>
                          Remember me
                      </label>
                      <div style={{ height: 10 }} />
                      <div style={{ fontSize: 12, fontFamily: "sans-serif", height: 16 }}>Forgot your password?</div>
                      <div style={{ fontSize: 14, fontWeight: 'bold', fontFamily: "Helvetica Neue", height: 10 }}><a href="#">Reset Password</a></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
