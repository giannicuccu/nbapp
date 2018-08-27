import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


/* MAP GLOBAL VARIABLES and FUNCTIONS */

//  let largeInfowindow = new window.google.maps.InfoWindow();
// // let bounds = new window.google.maps.LatLngBounds();
// // let locations = [];
// // let showingLocations = [];
// // //let markers = [];
// // let map = {};


// let  populateInfoWindowZ = (marker, largeInfowindow) => {
      
//   //   console.log(marker)
//   //   console.log(largeInfowindow)
//     //Check to make sure the infowindow is not already opened on this marker.
//     if (largeInfowindow.marker !== marker) {
//       largeInfowindow.marker = marker;
//       largeInfowindow.setContent('<div>' + marker.title + '</div>');
//       largeInfowindow.open(this.map, marker);
//       // Make sure the marker property is cleared if the infowindow is closed.
//       largeInfowindow.addListener('closeclick', () => {
//         largeInfowindow.marker = null;
//       });
//     }
//   }






/* MAP GLOBAL VARIABLES */



class Map extends React.Component {

 


     state = {
        map: {},        
        activeLoaction:{}
      }

      markers = []

       


  

  

  // componentDidUpdate = () => {
  //     console.log(' 3 -------- did  UPDATE -------------')
      
      
  //   }

  componentWillReceiveProps = () => {
      
     // console.log('1 -------- will received props   -------------')
      //console.log(this.props.activeLocation)
      //console.log('1 -------- will received props   -------------')
      this.props.activeLocation && this.props.activeLocation !== '' && console.log(this.props.activeLocation.title)
      this.setState({activeLoaction: this.props.activeLoaction})
      
    } 


  
  //   shouldComponentUpdate = (nextProps, nextState) => {
  //     console.log('-------- SHOULD UPDATE -------------')
  //     // console.log(this.props.visibleLocations)
      
  //     this.renderMarkers(this.props.visibleLocations);
  //     // this.markers = markers.map((marker)=>{return marker.setMap(null)})
  //      return true  


  //     // console.log(this.props.visibleLocations)
  //     // //   //this.renderMarkers()
  //     // console.log(this.markers)

      
  //     //   //console.log(nextProps.activeLocation)
  //     //   //debugger
  //       if(nextProps.activeLocation.location){
  //       this.map.setZoom(8)   
  //       this.map.panTo(nextProps.activeLocation.location)
  //       this.map.setZoom(9)
  //       //externalfunct()
  //       //console.log(markers[nextProps.activeLocation.id])
  //       this.populateInfoWindow(this.markers[nextProps.activeLocation.id],this.largeInfowindow)
  //       }
       

         
  //     //   //return console.log(this.props.activeLocation)
  //   }



  //    populateInfoWindow = (marker, largeInfowindow) => {
      
      
  //     //   console.log(marker)
  //     //   console.log(largeInfowindow)
  //       //Check to make sure the infowindow is not already opened on this marker.
  //       if (largeInfowindow.marker !== marker) {
  //         largeInfowindow.marker = marker;
  //         largeInfowindow.setContent('<div>' + marker.title + '</div>');
  //         largeInfowindow.open(this.map, marker);
  //         // Make sure the marker property is cleared if the infowindow is closed.
  //         largeInfowindow.addListener('closeclick', () =>{
  //           largeInfowindow.marker = null;
  //         });
  //       }
  //     }




    // renderMarkers = () => {
      
      

    //   // this.markers.map(marker => marker.setMap(null))
    //   // this.markers = []

    //   console.log(this.props)
    //    //console.log(vis)
    //   //largeInfowindow = this.largeInfowindow;
    //   //  // var bounds = new window.google.maps.LatLngBounds();
    //  // locations = this.locations
    //   // let marker;
       
    //   //   //var map = this.map
    //   //   //var bounds
      
    //   //   // var populateInfoWindow = (marker, largeInfowindow) => {
      
    //   //   // //   console.log(marker)
    //   //   // //   console.log(largeInfowindow)
    //   //   //   //Check to make sure the infowindow is not already opened on this marker.
    //   //   //   if (largeInfowindow.marker !== marker) {
    //   //   //     largeInfowindow.marker = marker;
    //   //   //     largeInfowindow.setContent('<div>' + marker.title + '</div>');
    //   //   //     largeInfowindow.open(this.map, marker);
    //   //   //     // Make sure the marker property is cleared if the infowindow is closed.
    //   //   //     largeInfowindow.addListener('closeclick', () =>{
    //   //   //       largeInfowindow.marker = null;
    //   //   //     });
    //   //   //   }
    //   //   // }
    //    let vis = this.props.showingLocations
    //   // //   // The following group uses the location array to create an array of markers on initialize.
    //     for (let i = 0; i < vis.length; i++) {
    //       //console.log('MARKING')
    //       // Get the position from the location array.
    //       let position = vis[i].location;
    //       let title = vis[i].title;
    //       let id = vis[i].id;
    //       // Create a marker per location, and put into markers array.
    //        let marker = new window.google.maps.Marker({
    //         map: this.map,
    //         position: position,
    //         title: title,
    //         animation: window.google.maps.Animation.DROP,
    //         id: id
    //       });
    //   // //     // Push the marker to our array of markers.
    //   //      this.markers.push(marker);
    //   // //    // console.log(marker)
    //   // //     // Create an onclick event to open an infowindow at each marker.
    //   //      marker.addListener('click', function() {
    //   //        console.log(this)
    //   //        //populateInfoWindowZ(this, largeInfowindow);
          
      
    //   //      });
    //   // //     bounds.extend(markers[i].position);
    //       }
    //   //   // Extend the boundaries of the map for each marker
    //   //   //map.fitBounds(bounds);
    //   //   console.log(markers)
    //   }
      componentWillMount(){
      

      }
      
        componentDidMount(){  
          console.log('DID MOUNT') 
           //console.log(this.props)
        //  let { parentState } = this.props
         
        //  this.props.parentState.ciccio = 'fuck'

           let mymap = new window.google.maps.Map(this.refs.map, {
            zoom: 8,
            center: {lat: 39.11601812, lng: 9.51918845}
          });
         // console.log(mymap)
         // mymap.setZoom(15)

          this.setState({map: mymap})

          // console.log(mymap)
          // console.log(this.state.map)

          

          //this.props.assignMapToApp(window.map)
      
          //var largeInfowindow = new window.google.maps.InfoWindow();
      
          //this.renderMarkers()
          
      
         
          
          }



render(){
  console.log('RENDER')

  //debugger
  const { map } = this.state
  const { activeLocation } = this.props

  console.log(map)
   if ( map.zoom ) 
   {map.setZoom(9)}

 

  let Infowindow = new window.google.maps.InfoWindow();
  let bounds = new window.google.maps.LatLngBounds();
  
  let  populateInfoWindow = (marker, largeInfowindow) => {
      
      
        //   console.log(marker)
        //   console.log(largeInfowindow)
          //Check to make sure the infowindow is not already opened on this marker.
          if (largeInfowindow.marker !== marker) {
              largeInfowindow.marker = marker;
              largeInfowindow.setContent('<div>' + marker.title + '</div>');
              largeInfowindow.open(map, marker);
              // Make sure the marker property is cleared if the infowindow is closed.
              largeInfowindow.addListener('closeclick', () =>{
                largeInfowindow.marker = null;
              });
          }
        }
  
  this.markers.map(marker => marker.setMap(null))
  
  //console.log('rendering map')

  let vis = this.props.showingLocations
  let tempMarkers = []
      // //   // The following group uses the location array to create an array of markers on initialize.
        for (let i = 0; i < vis.length; i++) {
          //console.log('MARKING')
          // Get the position from the location array.
          let position = vis[i].location;
          let title = vis[i].title;
          let id = vis[i].id;
          // Create a marker per location, and put into markers array.
           let marker = new window.google.maps.Marker({
            map: map,
            position: position,
            title: title,
            //animation: window.google.maps.Animation.DROP,
            id: id
          });

          bounds.extend(marker.position);

          this.markers.push(marker);
          

          marker.addListener('click', function() {
                    console.log(this.title)
                    populateInfoWindow(this, Infowindow);          //        //populateInfoWindowZ(this, largeInfowindow);
                
            
         });

        activeLocation.location && map.panTo(activeLocation.location)
        
        populateInfoWindow(this.markers[activeLocation.id],Infowindow)

        }
        //this.setState({markers: tempMarkers})

        console.log(map)
        console.log(bounds)

        if ( map.zoom && map.zoom != 8 && this.markers.length > 1) 
            {map.fitBounds(bounds);}
        

        //this.mymap.setZoom(15);


     // console.log(appMap)
  //       //externalfunct()
  //       //console.log(markers[nextProps.activeLocation.id])
  //       this.populateInfoWindow(this.markers[nextProps.activeLocation.id],this.Infowindow)





 // console.log('RENDERING MAP')
 
    return (
    <div ref='map' className={'map'}></div>

)
}


}






export default Map