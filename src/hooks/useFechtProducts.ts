import { useEffect, useState } from "react"
import { Product } from "../types/Product"
import { getProducst } from "../services/Products"

function useFechtProducts () {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    getProducst()
      .then(data => setItems(data))
      .catch(err => console.error(err))
  }, [])

  return { items }

}

export { useFechtProducts }
