import{ useState } from 'react';
import './App.css';



const Portfolio = (props) => {
  const filters = props.filters;
  const [selected, setSelected] = useState(props.selected);
  const [projects, setProjects] = useState(props.projects);
  const onSelectFilter = (event) => {
    setSelected((prev) => {
      return prev = event.target.textContent});
    setProjects((prev) => {
      return prev.filter((el) => el.category === selected);
    })
  }
  
	return (
		<div>
			<Toolbar filters={filters} selected={selected} onSelectFilters={onSelectFilter} />
      <ProjectList projects={projects} />
		</div>
	)
}

const Toolbar = (props) => {
  const filters = props.filters;
  const selected = props.selected;
  const onSelectFilters = props.onSelectFilters;

  const CreateHeader = () => {
    return filters.map((el, index) => { 
      if (el === selected) {
        return <div className='header-item active' onClick={ onSelectFilters } key={index}>{ el }</div>;
      } else {
        return <div className='header-item' onClick={ onSelectFilters } key={index}>{ el }</div> ;
      }
    })
  }

  return (
    <div className='header'>
      <CreateHeader />
    </div>
  )
}

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

function App() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const selected = 'All';
  const projects = [
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers"
    }
  ]
  
  return <Portfolio filters={filters} selected={selected} projects={projects} />
}

export default App