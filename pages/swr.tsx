import BaseHead from '../components/BaseHead'
import SWRCard from '../components/SWRCard'

export default function SWR({ data }) {
  return (
    <div className="container-fluid px-0 mt-2">
      <BaseHead title="Flex Demo" />
      <SWRCard />
    </div>
  )
}