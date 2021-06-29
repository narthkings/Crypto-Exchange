import CryptoListing from '../../components/ExchangeList/CryptoListing'

const HomePage = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <CryptoListing />
    </div>
  )
}

export default HomePage
