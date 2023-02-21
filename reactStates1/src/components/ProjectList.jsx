const ProjectList = (props) => {
  const CreateProductsBlock = () => {
    return props.projects.map((item, index) => <div className='product' key={index}><img src={ item.img } className="item-img" /></div>)
  }
  
  return (
    <div className='products'>
      <CreateProductsBlock />
    </div>
  )
}

export default ProjectList;
