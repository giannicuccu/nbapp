import React, { Component } from 'react';

class RightPanel extends React.Component {

    locData = {}


    resetLocationData = () => {this.locData = {}}

    // fetchLocationData = ( wikiSlug ) => {

    // const headers = {
    //     'Accept': 'application/json',
    //     }

    // return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiSlug}`, { headers })
    //     .then(res => res.json())
    //     .then(data => this.locData = data)
    // }


    
    fetchLocationData = ( wikiSlug ) => {

    const headers = {
        'Accept': 'application/json',
        }

    return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiSlug}`, { headers })
        .then(res => res.json())
        .then(data => this.locData = data)
        .catch(err => alert("NETWORK ERROR"))
    }



    render(){    
        const { locationPanelVisible, activeLocation, setOpenRightPanel } = this.props
        //const { location } = this.state

        // 
        //TODO: BUG fix multiple requests
        this.fetchLocationData(activeLocation.wikiSlug)

        //console.log('RENDERING LOCATIONPANEL')

        
        // activeLocation.location? console.log(activeLocation.location.venueId) : console.log('no venue ID'); 
        //console.log(activeLocation.location || 'no venue ID')

        let thumb
        this.locData.thumbnail && this.locData.thumbnail.source? thumb = this.locData.thumbnail.source : thumb = '';

        let ariaAttrs = !locationPanelVisible ? {"aria-hidden":"true","hidden":"hidden"}: false

        return (
            <section className={locationPanelVisible ? 'locationPanel':'locationPanel hidden'} { ...ariaAttrs } > 
                <button aria-label='Close location detail panel' onClick={()=>{setOpenRightPanel(false)}}>&#x2716;</button>
                <h3>{activeLocation.title}</h3>
                <p>Wikipedia Info:</p>
                <img src={thumb} alt={activeLocation.title || 'Image Unavailable'}/> 
                <p>{this.locData.extract || 'Text Unavailable'}</p>
            </section>

        )
    }


    }


export default RightPanel