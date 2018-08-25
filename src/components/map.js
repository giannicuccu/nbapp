import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


/* MAP GLOBAL VARIABLES and FUNCTIONS */

 let largeInfowindow = new window.google.maps.InfoWindow();
// let bounds = new window.google.maps.LatLngBounds();
// let locations = [];
// let showingLocations = [];
// //let markers = [];
// let map = {};


let  populateInfoWindowZ = (marker, largeInfowindow) => {
      
  //   console.log(marker)
  //   console.log(largeInfowindow)
    //Check to make sure the infowindow is not already opened on this marker.
    if (largeInfowindow.marker !== marker) {
      largeInfowindow.marker = marker;
      largeInfowindow.setContent('<div>' + marker.title + '</div>');
      largeInfowindow.open(this.map, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      largeInfowindow.addListener('closeclick', () => {
        largeInfowindow.marker = null;
      });
    }
  }






/* MAP GLOBAL VARIABLES */



class Map extends React.Component {

  constructor(props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // this.state = {isLoggedIn: false};
    this.largeInfowindow = new window.google.maps.InfoWindow();
    this.bounds = new window.google.maps.LatLngBounds();
    this.locations = this.props.locations;
    this.showingLocations = [];
    this.markers = []
    this.map = {}


    this.renderMarkers = this.renderMarkers.bind(this);
    this.populateInfoWindow = this.populateInfoWindow.bind(this);
  }

  
    shouldComponentUpdate = (nextProps, nextState) => {
      console.log('-------- SHOULD UPDATE -------------')
      console.log(this.props.visibleLocations)
      return true
      this.renderMarkers(this.props.visibleLocations);
      // this.markers = markers.map((marker)=>{return marker.setMap(null)})
         


      // console.log(this.props.visibleLocations)
      // //   //this.renderMarkers()
      // console.log(this.markers)

      
      //   //console.log(nextProps.activeLocation)
      //   //debugger
        if(nextProps.activeLocation.location){
        this.map.setZoom(8)   
        this.map.panTo(nextProps.activeLocation.location)
        this.map.setZoom(9)
        //externalfunct()
        //console.log(markers[nextProps.activeLocation.id])
        this.populateInfoWindow(this.markers[nextProps.activeLocation.id],this.largeInfowindow)
        }
       

         
      //   //return console.log(this.props.activeLocation)
    }



     populateInfoWindow = (marker, largeInfowindow) => {
      
      
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




    renderMarkers = ( vis=[] ) => {
      
      

      this.markers.map(marker => marker.setMap(null))
      this.markers = []

      // console.log(this.locations)
       //console.log(vis)
      largeInfowindow = this.largeInfowindow;
      //  // var bounds = new window.google.maps.LatLngBounds();
     // locations = this.locations
      // let marker;
       
      //   //var map = this.map
      //   //var bounds
      
      //   // var populateInfoWindow = (marker, largeInfowindow) => {
      
      //   // //   console.log(marker)
      //   // //   console.log(largeInfowindow)
      //   //   //Check to make sure the infowindow is not already opened on this marker.
      //   //   if (largeInfowindow.marker !== marker) {
      //   //     largeInfowindow.marker = marker;
      //   //     largeInfowindow.setContent('<div>' + marker.title + '</div>');
      //   //     largeInfowindow.open(this.map, marker);
      //   //     // Make sure the marker property is cleared if the infowindow is closed.
      //   //     largeInfowindow.addListener('closeclick', () =>{
      //   //       largeInfowindow.marker = null;
      //   //     });
      //   //   }
      //   // }
      // this.props.visibleLocations
      //   // The following group uses the location array to create an array of markers on initialize.
        for (let i = 0; i < vis.length; i++) {
          // Get the position from the location array.
          let position = vis[i].location;
          let title = vis[i].title;
          let id = vis[i].id;
          // Create a marker per location, and put into markers array.
           let marker = new window.google.maps.Marker({
            map: this.map,
            position: position,
            title: title,
            animation: window.google.maps.Animation.DROP,
            id: id
          });
      //     // Push the marker to our array of markers.
           this.markers.push(marker);
      //    // console.log(marker)
      //     // Create an onclick event to open an infowindow at each marker.
           marker.addListener('click', function() {
             //console.log(this)
             populateInfoWindowZ(this, largeInfowindow);
          
      
           });
      //     bounds.extend(markers[i].position);
         }
      //   // Extend the boundaries of the map for each marker
      //   //map.fitBounds(bounds);
      //   console.log(markers)
      }
      
      
        componentDidMount(){          
          this.map = new window.google.maps.Map(this.refs.map, {
            zoom: 8,
            center: this.props.center
          });
      
          //var largeInfowindow = new window.google.maps.InfoWindow();
      
          this.renderMarkers()
          
      
        //  marker: new window.google.maps.Marker({
        //     position: {lat: 39.11601812, lng: 9.51918845},
        //     map: this.map,
        //     title: 'First Marker!'
        //   })
          
          }



render(){
    return (
    
    <div ref='map' className={'map'}></div>
    
)
}


}






export default Map