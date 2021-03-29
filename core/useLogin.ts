import useSWR from "swr"
import { useCookies } from "react-cookie"

const baseUrl = "http://localhost:3000/api/v1/auth"

export const useLogin = (usr,pwd,typ) => {
    const url = baseUrl
    const fetcher = url => fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: usr, password: pwd, type: typ}),
    }).then(res => res.json())
    const [cookie, setCookie] = useCookies(["jwt"])
    const { data: response, error } = useSWR(url, fetcher)
    if (response) {
        console.log(response.data.token)
        setCookie("jwt", response.data.token, {
            path: "/",
            maxAge: 86400, // Expires after 1 day
            sameSite: true,
          })
    }
    return { response, error }
}