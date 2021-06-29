import PropTypes from 'prop-types'

const HeaderComponent = ({title}) => {
    return (
        <header className="text-base xl:text-2xl font-mono text-center py-4 bg-purple-300 ">
            {title}
        </header>
    )
}

HeaderComponent.propTypes ={
    title: PropTypes.string.isRequired,
  }
  

export default HeaderComponent
