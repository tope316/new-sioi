import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "http://localhost:3000/api/v1/vendor"

export const useVendors = path => {
    if (!path) {
        throw new Error("Path is required")
    }
    const url = baseUrl + path
    const { data: response, error } = useSWR(url, fetcher)
    return { response, error }
}