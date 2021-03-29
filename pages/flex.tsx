import BaseHead from '../components/BaseHead'
import FlexCard from '../components/FlexCard'

export default function Flex({ data }) {
  return (
    <div className="container-fluid px-0 mt-2">
      <BaseHead title="Flex Demo" />
      <FlexCard />
    </div>
  )
}
