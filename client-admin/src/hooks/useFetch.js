import { useEffect, useState } from "react"

function useFetch(url = "") {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    try {
      const response = await fetch(url)

      if (!response.ok) throw await response.text()

      const responseJSON = await response.json()

      setData(responseJSON)
    } catch (err) {
      console.log(err, "<<<<<ERROR");
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    loading,
    refetch: fetchData
  }
}

export default useFetch