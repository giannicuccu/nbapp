import React, { Component } from 'react';
class Map extends Component {


     state = {
        map: {},
        activeLoaction:{}
      }

      markers = new Set()
      


  componentWillReceiveProps = () => {
      //this.props.activeLocation && this.props.activeLocation !== '' && (console.log(this.props.activeLocation.title || 'no active location'))
      this.setState({activeLoaction: this.props.activeLoaction})
      
    } 


 
  componentDidMount(){
    
    // ASYNC load google maps 
    // Thanks to Udacity reviewer and https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
    let ref = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.31&key=AIzaSyA40zamRM0fp_m0JQKUWQPpyz0X_gXiFUA&callback=initMap';
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
    script.onerror = ()=>{ alert('GOOGLE MAP NETWORK LOADING ERROR') } // Handle google maps loading error - Thanks to Udacity reviewer and mozilla reference
    
    // callback init function called by google maps script
    let initMap = () => {
      //create the map instance
      let mymap = new window.google.maps.Map(this.refs.map, {
        zoom: 8,
        center:{lat: 40.0420784, lng: 9.0921147},
      });
      // save the map to component state
      this.setState({map: mymap})
    }
    
    // reference the global initMap function to the local initMap function
    window.initMap = initMap;

  }



render(){
  // do nothing until google.maps  global object becomes available 

  if (window.google) {
 
    const { map } = this.state
    const { activeLocation, sidebarLocationClick, setOpenRightPanel, getOpenRightPanel } = this.props
    let Infowindow = new window.google.maps.InfoWindow();
    let bounds = new window.google.maps.LatLngBounds(); 


    // function to populate and handle info windows popups
    let  populateInfoWindow = (marker, infoWindow) => {
                 
            if (infoWindow.marker !== marker && !getOpenRightPanel() ) {
                infoWindow.marker = marker;

                let content = document.createElement('div'),
                    button;

                content.innerHTML = '  ' + marker.title + '<br/>';
                button = content.appendChild(document.createElement('input'));
                button.type = 'button';
                button.value = 'Show info...'

                // attach event listener to "show info button"
                button.addEventListener('click', ()=>{
                this.props.setOpenRightPanel(true, marker.location) // open right panel and pass current location

                  }
                )
                
                infoWindow.setContent(content);
                infoWindow.open(map, marker);
                
                // create close listeners
                infoWindow.addListener('closeclick', () =>{
                  infoWindow.marker = null;
                  sidebarLocationClick({})
                  this.props.setOpenRightPanel(false);
                });

                map.panTo(marker.position)
            }
          }
    
    // remove all markers from map and create an empty marker Set
    [...this.markers].map(marker => marker.setMap(null))
    this.markers = new Set()
    

    // locations listed in sidebar
    let vis = this.props.showingLocations
    
    // create markers from locations listed in sidebar
    for (let i = 0; i < vis.length; i++) {
      
      // Animate marker if matches active location
      let animation = null
          activeLocation.id === vis[i].id ? animation = window.google.maps.Animation.BOUNCE : animation = null;

      let position = vis[i].location;
      let title = vis[i].title;
      let id = vis[i].id;
      
      let marker = new window.google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: animation,
        id: id,
        location: vis[i]
      });

      // add marker position to map bounds
      bounds.extend(marker.position);
      // add marker to markers Set
      this.markers.add(marker);
      
      // Add event listener to marker
      marker.addListener('click', function() {
                populateInfoWindow(this, Infowindow); // open infoWindow
                sidebarLocationClick(this.location)   // Pass clicked location to parent component
                setOpenRightPanel(false) // close right Panel
      });

    //activeLocation.location && map.panTo(activeLocation.location)

    // Open the marker for the active location 
    let currentmarkref = [...this.markers].find(el => el.id === activeLocation.id)
    populateInfoWindow(currentmarkref,Infowindow)

    }

       
      //FIXME: Basic MAP ZOOM and fit bounds control -- 
      if ( map.zoom  && map.zoom >= 2  && [...this.markers].length > 1 && window.innerWidth > 600) 
          {map.fitBounds(bounds);}
    }
 
    return (
    <div role="application" ref='map' className={'map'}>
            <h3 className={'loaderror'}> loading map... </h3> 
    </div>
    )

  }

}






export default Map