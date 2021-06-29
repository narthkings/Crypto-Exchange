import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [totalPage, setTotalPage] = useState(0)

  useEffect(() => {
    async function getCurrencyPlatforms() {
      try {
        setLoading(true)
  
        const res = await fetch(url)
  
        const dataResponse = await res.json()

        setTotalPage(res.headers.get('Total'))

        setData(dataResponse)
        
      } catch (error) {

        console.log(error)

      } finally {
        setLoading(false)

      }
    }
    getCurrencyPlatforms()


  }, [url])
  

  return {
    totalPage,
    data,
    loading,
  }
}

export default useFetch
