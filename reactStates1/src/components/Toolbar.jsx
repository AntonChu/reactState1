const Toolbar = ({ filters, selected, onSelectFilters }) => {
  return (
    <div className='header'>
      {
        filters.map((filter, index) => <div className={`header-item ${filter === selected ? 'active' : ''}`} onClick={ onSelectFilters } key={index}>{ filter }</div> )
      }
    </div>
  )
}

export default Toolbar;
