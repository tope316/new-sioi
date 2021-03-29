import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "https://reqres.in/api"

export const useGetUsers = path => {
    if (!path) {
        throw new Error("Path is required")
    }
    const url = baseUrl + path
    const { data: response, error } = useSWR(url, fetcher)
    return { response, error }
}