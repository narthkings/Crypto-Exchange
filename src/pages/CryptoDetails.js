import { useParams, useHistory } from 'react-router-dom'
import { FaTwitter } from 'react-icons/fa'
import { endpoint } from '../Utils/Endpoint'
import useFetch from '../hooks/useFetch'

const CryptoDetails = () => {
  const { id } = useParams()
  const { goBack } = useHistory()

  const { data, loading } = useFetch(`${endpoint}/${id}`)

  return (
    <>
      <button
        className="focus: outline-none text-lg font-semibold"
        onClick={() => goBack()}
      >
        Back
      </button>

      {loading ? 
      ( <div>loading</div> ) : (
        data && (
          <div className="bg-blue-200 w-full sm:w-9/12 xl:w-1/3 mx-auto py-5 px-10">
            <div className="flex flex-col items-center">
              <img
                alt="currency"
                className="rounded-full w-20 h-20"
                src={data.image}
              />
              <div>
                <span className="text-base font-semibold">Name: </span>
                {data.name}
              </div>

              <div>
                <span className="text-base font-semibold">
                  Year Established:{' '}
                </span>
                {data.year_established}
              </div>

              <div>
                <span className="text-base font-semibold">Country: </span>
                {data.country}
              </div>

              <div className="overflow-clip truncate">
                <span className="text-base font-semibold">Website: </span>
                <a className="italic text-blue-700 " href={data.url}>
                  {data.url}
                </a>
              </div>

              <div>
                <span className="text-base font-semibold">
                  Trust Score Rank:{' '}
                </span>
                {data.trust_score_rank}
              </div>

              <div>
                <span className="text-base font-semibold">Trust Score: </span>
                {data.trust_score}
              </div>

              <div className="flex items-center">
                <FaTwitter style={{ color: 'blue' }} />:
                <a
                  className="italic text-blue-700"
                  href={`https://twitter.com/${data.twitter_handle}`}
                >
                  {data.twitter_handle}
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default CryptoDetails
