import BaseHead from '../components/BaseHead'
import SSRCard from '../components/SSRCard'

type Data = { 
   
 }

export default function SSR({ data }) {
  return (
    <div className="container-fluid px-0 mt-2">
      <BaseHead title="Flex Demo" />
      <SSRCard data={data.data} />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://reqres.in/api/users?delay=10`)
  const data = await res.json()
  console.log(JSON.stringify(data))
  return { props: { data } }
}