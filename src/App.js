import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'reset-css';
import { BrowserRouter, Route } from 'react-router-dom';

var FontAwesome = require('react-fontawesome');




class App extends Component {

state = {
center:{lat: 40.0420784, lng: 9.0921147},
map: {},
sidebar: true,
locations: [
  {title: 'Villasimius - Porto giunco', location: {lat: 39.11293148, lng: 9.51855074}},
  {title: 'Villasimius - Simius', location: {lat: 39.12807541, lng: 9.53031797}},
  {title: 'Villasimius - Punta Molentis', location: {lat: 39.13340402, lng: 9.55628425}},
  {title: 'Villasimius - Spiaggia del riso', location: {lat: 39.12001361, lng: 9.50928573}},
  {title: 'Chia - Su Giudeu', location: {lat: 38.88334699, lng: 8.86205559}},
  {title: 'Chia - Sa colonia', location: {lat: 38.89450386, lng: 8.87810593}},
  {title: 'Arbus - Piscinas', location: {lat: 39.53827221, lng: 8.45206793}},
  {title: 'Arbus - Pistis', location: {lat: 39.68795321, lng: 8.4536045}},
  {title: 'Cabras - Is Arutas', location: {lat: 39.95095475, lng: 8.4012766}},
  {title: 'Cabras - San Salvatore', location: {lat: 39.88224882, lng: 8.43636781}}
]

}


 

renderMarkers = () => {
  var largeInfowindow = new window.google.maps.InfoWindow();
  var bounds = new window.google.maps.LatLngBounds();
  var locations = this.state.locations
  var markers = [];
  var map = this.map;
  var bounds

  var populateInfoWindow = (marker, largeInfowindow) => {

    console.log(marker)
    console.log(largeInfowindow)
    //Check to make sure the infowindow is not already opened on this marker.
    if (largeInfowindow.marker != marker) {
      largeInfowindow.marker = marker;
      largeInfowindow.setContent('<div>' + marker.title + '</div>');
      largeInfowindow.open(this.map, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      largeInfowindow.addListener('closeclick',function(){
        largeInfowindow.setMarker = null;
      });
    }
  }

  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    // Create a marker per location, and put into markers array.
    var marker = new window.google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: window.google.maps.Animation.DROP,
      id: i
    });
    // Push the marker to our array of markers.
    markers.push(marker);
   // console.log(marker)
    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function() {
      //console.log(this)
      populateInfoWindow(this, largeInfowindow);
    

    });
    //bounds.extend(markers[i].position);
  }
  // Extend the boundaries of the map for each marker
  //map.fitBounds(bounds);
}


  componentDidMount(){
   this.map = new window.google.maps.Map(this.refs.map, {
      zoom: 8,
      center: this.state.center
    });

    var largeInfowindow = new window.google.maps.InfoWindow();

    this.renderMarkers()

    // marker: new window.google.maps.Marker({
    //   position: {lat: 39.11601812, lng: 9.51918845},
    //   map: this.map,
    //   title: 'First Marker!'
    // })
    
    }
    toggleSidebar = () => {document.getElementById('appSidebar').classList.toggle('hidden')}
  
  render() {
    
 
     
   

    return (
      <div className="App">      
           
            <div className='sidebar' id="appSidebar">
            <div className="tophead">
             <h3>HEWADER</h3>
            </div>
            sidebar
            <input id='searchInput' type='text' placeholder='Enter location'/>
            </div>
            <section className='mapContainer'> 
            <div className="tophead">
              <nav><button onClick={this.toggleSidebar}> <FontAwesome name='rocket' style={{ color: '#fff' }} /> Toggle menu</button></nav>
            </div>
            
              
              <div ref='map' className={'map'}>
              pippo
              </div>
            </section>
             

            
      </div>
      
         
    );
  }
}

export default App;
