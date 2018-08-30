import React, { Component } from 'react';
import './App.css';
import 'reset-css';
import Map from './components/map'
import RightPanel from './components/rightPanel'
import EscapeRegExp from 'escape-string-regexp';


class App extends Component {

  constructor(props) {
    super(props);

    // binding functions 
    this.updateFilteredLocations = this.updateFilteredLocations.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.sidebarLocationClick = this.sidebarLocationClick.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    
    // setting the state
    this.state = {
    sidebarVisible: true,
    rightPanelVisible: false,
    query: '',
    showingLocations: [], // filtered locations
    activeLocation: {},   // selected location
     locations: [
      {id:0,title: 'Rome - Colosseo', location: {lat: 41.890239, lng: 12.492203},thumbnail:'', wikiSlug:'Colosseum'},
      {id:1,title: 'Rome - Terme di Caracalla', location: {lat: 41.879278, lng: 12.493139},thumbnail:'',wikiSlug:'Baths_of_Caracalla'},
      {id:2,title: 'Rome - Circo Massimo', location: {lat: 41.882316, lng: 12.488428},thumbnail:'',wikiSlug:'Circus_Maximus'},
      {id:3,title: 'Rome - Pantheon', location: {lat: 41.898624, lng: 12.476786},thumbnail:'',wikiSlug:'Pantheon,_Rome'},
      {id:4,title: 'Rome - Fori Imperiali', location: {lat: 41.893510, lng: 12.486107},thumbnail:'',wikiSlug:'Roman_Forum'},
      {id:5,title: 'Rome - Domus Aurea', location: {lat: 41.891681, lng: 12.495844},thumbnail:'',wikiSlug:'Domus_Aurea'},
     ]
    
    } 
  }

  // initially show all locations from locations array
  componentDidMount = () =>{  

    let showingLocations = this.state.locations.map(v => v)
    this.setState({showingLocations})

  }


 /** filter locations using input string
  * @param query the input string
  */
  updateQuery = (query) => {

    this.setState({query: query})
    let showingLocations

    if (query){
        const match = new RegExp(EscapeRegExp(query),'i');
        showingLocations = this.state.locations.filter((location)=>match.test(location.title))

    }else{
      showingLocations =  this.state.locations;

    }

    this.setState({showingLocations: showingLocations})
    this.setState({activeLocation: {}})

  }


  updateFilteredLocations = (showingLocations) => {
    this.setState({visibleLocations: showingLocations})
  }


  toggleSidebar = () => {
    this.state.sidebarVisible ? this.setState({sidebarVisible: false}): this.setState({sidebarVisible: true})
  }


  sidebarLocationClick = (location) => {
    this.setState({activeLocation: location})
    this.setState({rightPanelVisible: false})

  }

  setOpenRightPanel = (arg) => {
    this.setState({rightPanelVisible: arg})
    
    }

  getOpenRightPanel = () =>  this.state.rightPanelVisible ? true : false ;


  render() {
  //console.log('APP RENDER')
  const { activeLocation, sidebarVisible, locations, visibleLocations, query, locationPanelVisible, sidebarLocationClick } = this.state
   

    return (
      <div className="App">

        <div className={ sidebarVisible ? 'sidebar':'sidebar hidden' } id="appSidebar">
        <div className="tophead">
         <h3>Sidebar</h3>
        </div>
        
        <input aria-label="Filter locations" aria-controls="location-list" id='searchInput' type='text' placeholder='Enter location' 
        value={ query }
        onChange ={(event) => this.updateQuery(event.target.value)}
        />
                
         <ul className="locations-grid" id="location-list" aria-label="Locations List" aria-live="polite" tabIndex="0" aria-atomic="true">
              {
                  this.state.showingLocations.map( location => (
                          <li tabIndex="0" key={ location.id } >                              
                             <a  href={`#${location.wikiSlug}`} onClick={()=>this.sidebarLocationClick(location)}>{ location.title }</a>                                    
                          </li>
                      )
                  )
              }
          </ul>
        </div>

        <section className='mapContainer'> 
        <div className="tophead">
          <nav><button onClick={this.toggleSidebar} aria-label='Toggle location list'> &#9776; </button></nav>
        </div>

        <Map 
          sidebarLocationClick={this.sidebarLocationClick}
          showingLocations={this.state.showingLocations} 
          activeLocation={this.state.activeLocation} 
          setOpenRightPanel={this.setOpenRightPanel}
          getOpenRightPanel={this.getOpenRightPanel}
          />
        </section>

        <RightPanel
        locationPanelVisible={this.state.rightPanelVisible}
        activeLocation={this.state.activeLocation}
        setOpenRightPanel={this.setOpenRightPanel}
        />

      </div>
      
         
    );
  }
}

export default App;
