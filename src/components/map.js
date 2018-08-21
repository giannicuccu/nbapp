import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Map extends React.Component {

    
    shouldComponentUpdate = (nextProps, nextState) =>{
        console.log('MAP SHOOULD UPDATE')
        return false
        //return console.log(this.props.activeLocation)
        //this.map.panTo(location.location)
    }

    renderMarkers = () => {
        var largeInfowindow = new window.google.maps.InfoWindow();
        var bounds = new window.google.maps.LatLngBounds();
        var locations = this.props.locations
        var markers = [];
        var map = this.map
        var bounds
      
        var populateInfoWindow = (marker, largeInfowindow) => {
      
        //   console.log(marker)
        //   console.log(largeInfowindow)
          //Check to make sure the infowindow is not already opened on this marker.
          if (largeInfowindow.marker !== marker) {
            largeInfowindow.marker = marker;
            largeInfowindow.setContent('<div>' + marker.title + '</div>');
            largeInfowindow.open(this.map, marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            largeInfowindow.addListener('closeclick', () =>{
              largeInfowindow.marker = null;
            });
          }
        }
      
        // The following group uses the location array to create an array of markers on initialize.
        for (var i = 0; i < locations.length; i++) {
          // Get the position from the location array.
          var position = locations[i].location;
          var title = locations[i].title;
          var id = locations[i].id;
          // Create a marker per location, and put into markers array.
          var marker = new window.google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: window.google.maps.Animation.DROP,
            id: id
          });
          // Push the marker to our array of markers.
          markers.push(marker);
         // console.log(marker)
          // Create an onclick event to open an infowindow at each marker.
          marker.addListener('click', function() {
            //console.log(this)
            populateInfoWindow(this, largeInfowindow);
          
      
          });
          bounds.extend(markers[i].position);
        }
        // Extend the boundaries of the map for each marker
        //map.fitBounds(bounds);
      }
      
      
        componentDidMount(){
         this.map = new window.google.maps.Map(this.refs.map, {
            zoom: 8,
            center: this.props.center
          });
      
          var largeInfowindow = new window.google.maps.InfoWindow();
      
          this.renderMarkers()
          
      
          // marker: new window.google.maps.Marker({
          //   position: {lat: 39.11601812, lng: 9.51918845},
          //   map: this.map,
          //   title: 'First Marker!'
          // })
          
          }



render(){
    return (
    <div ref='map' className={'map'}></div>
)
}


}






export default Map