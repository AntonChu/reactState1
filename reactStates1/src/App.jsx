import{ useState } from 'react';
import './App.css';

const ProjectList = (props) => {
	return (
		props.projects.map(item => <div class='product'><img src={ item.img } /></div>)
	)
}

const Portfolio = (props) => {
  const [filters] = useState(props.filters);
  const [selected, setSelected] = useState(props.selected);
  const [projects, setProjects] = useState(props.projects);
		
	return (
		<div>
			<Toolbar item={ item } />
			<ProjectList item={ item } />
		</div>
	)
}

const Toolbar = (props) => {
  const filters = props.filters;
  const selected = props.selected;

  const onSelectFilter = (event) => {
    setSelected((prev) => prev = event.target.textContent);
    setProjects((prev) => {
      prev.filter((el) => el.category === selected);
    })
  }

  const CreateHeader = () => {
    return filters.map((el) => <div className='header-item' onClick={ onSelectFilter }>{el}</div>)
  }

  return (
    <div className='header'>
      <CreateHeader />
    </div>
  )
}

function App() {
  const item = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    selected: 'All',
    projects: [
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
  }
  return <Portfolio item={ item } />
}

export default App