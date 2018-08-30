import React, { Component } from 'react';
class Map extends React.Component {


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

    console.log('DID MOUNT')

    let  loadJS = function(src) {
      var ref = window.document.getElementsByTagName("script")[0];
      var script = window.document.createElement("script");
      script.src = src;
      script.async = true;
      ref.parentNode.insertBefore(script, ref);
  }

  debugger
  let initMap = () => {

    alert('INNER INITMAP')
   
      let mymap = new window.google.maps.Map(this.refs.map, {
      zoom: 8,
      center:{lat: 40.0420784, lng: 9.0921147},
    });
    this.setState({map: mymap})
    }
    window.initMap = initMap;
    //loadJS('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap')
    loadJS('https://maps.googleapis.com/maps/api/js?v=3.31&key=AIzaSyA40zamRM0fp_m0JQKUWQPpyz0X_gXiFUA&callback=initMap')


    
  

    // var ref = window.document.getElementsByTagName("script")[0];
    //   var script = window.document.createElement("script");
    //   script.src = 'https://maps.googleapis.com/maps/api/js?v=3.31&key=AIzaSyA40zamRM0fp_m0JQKUWQPpyz0X_gXiFUA';
    //   script.async = true;
    //   ref.parentNode.insertBefore(script, ref);
    
  
  }



render(){
    
  if (window.google) {

    console.log('MAP RENDER')
  
  
    const { map } = this.state
    const { activeLocation, sidebarLocationClick, setOpenRightPanel, getOpenRightPanel } = this.props
    let Infowindow = new window.google.maps.InfoWindow();
    let bounds = new window.google.maps.LatLngBounds();
    
    //console.log(map)
    //  if ( map.zoom ) 
    //  {map.setZoom(9)}

    let  populateInfoWindow = (marker, largeInfowindow) => {
        
          
            if (largeInfowindow.marker !== marker && !getOpenRightPanel() ) {
                largeInfowindow.marker = marker;

                              
                let content = document.createElement('div'),
                    button;

                content.innerHTML = '  ' + marker.title + '<br/>';
                button = content.appendChild(document.createElement('input'));
                button.type = 'button';
                button.value = 'Show info...'

                button.addEventListener('click', ()=>{
                this.props.setOpenRightPanel(true, marker.location)

                // largeInfowindow.map = null
                // debugger
                  }
                )
                
                largeInfowindow.setContent(content);
                
                largeInfowindow.open(map, marker);

                largeInfowindow.addListener('closeclick', () =>{
                  largeInfowindow.marker = null;
                  sidebarLocationClick({})
                  this.props.setOpenRightPanel(false);
                });

                map.panTo(marker.position)
            }
          }
    
    [...this.markers].map(marker => marker.setMap(null))

    this.markers = new Set()
    


    let vis = this.props.showingLocations
    

    for (let i = 0; i < vis.length; i++) {
            
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

      bounds.extend(marker.position);
      this.markers.add(marker);
      

      marker.addListener('click', function() {
                populateInfoWindow(this, Infowindow);
                sidebarLocationClick(this.location)
                setOpenRightPanel(false)
      });

    //activeLocation.location && map.panTo(activeLocation.location)
    let currentmarkref = [...this.markers].find(el => el.id === activeLocation.id)
    
    //populateInfoWindow(activeLocation)
    populateInfoWindow(currentmarkref,Infowindow)

          }

          //this.setState({markers: tempMarkers})
          // console.log(map)
          //console.log([...this.markers])

      if ( map.zoom  && map.zoom >= 2  && [...this.markers].length > 1 && window.innerWidth > 600) 
          {map.fitBounds(bounds);}
    }
 
    return (
    <div role="application" ref='map' className={'map'}></div>

)


}





}






export default Map