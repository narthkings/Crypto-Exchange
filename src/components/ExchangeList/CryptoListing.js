import { useState } from 'react'
import { Link } from 'react-router-dom'
import { endpoint } from '../../Utils/Endpoint'
import ReactPaginate from 'react-paginate'
import useFetch from '../../hooks/useFetch'

const CryptoListing = () => {
  const [currPage, setCurrentPage] = useState(1)
  const [cryptosPerPage] = useState(12)

  const { data, loading, totalPage } = useFetch(
    `${endpoint}?per_page=${cryptosPerPage}&page=${currPage}`
  )

  const setPage = ({ selected }) => {
    let val = selected === 0 ? 1 : selected + 1
    setCurrentPage(val)
  }

  return (
    <>
      {loading
        ? 'loading'
        : data?.map((el) => (
            <Link to={`/CryptoDetails/${el.id}`} key={el.id}>
              
              <div className="shadow-lg h-64 rounded-md px-10 mt-12">
                <div className="flex flex-col h-full items-center justify-center">
                  <img
                    alt="cryptoImage"
                    className="rounded-full w-20 h-20"
                    src={el.image}
                  />

                  <figcaption className="font-semibold text-center">
                    <div className="text-cyan-600 text-2xl">{el.name}</div>
                    <div className="text-gray-500 text-lg">{el.country}</div>
                    <p>
                      {/* <a
                        className="underline italic text-xs text-blue-400 cursor-pointer"
                        href={el.url}
                      >
                        {el.url}
                      </a> */}
                    </p>
                  </figcaption>
                </div>
              </div>
            </Link>
          ))}

      <footer className="text-center col-start-1 py-10">
        <ReactPaginate
          pageCount={Math.ceil(totalPage / cryptosPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={setPage}
          previousLabel={<>&laquo;</>}
          nextLabel={<>&raquo;</>}
          breakLabel={'...'}
          containerClassName="pagination"
          activeClassName="active"
          pageLinkClassName="page-link"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          pageClassName="page-item"
          breakClassName="page-item"
          nextClassName="page-item"
          previousClassName="page-item"
        />
      </footer>
    </>
  )
}

export default CryptoListing
