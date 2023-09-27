"use client"

import Filters from "@/components/Filters"
import ProductTable from "@/components/ProductTable"

const Home = () => {
  return (
    <div style={{ padding: '0 100px' }}>
      <Filters />
      <ProductTable />
    </div>
  )
}

export default Home
