import React, { Component } from 'react';

class RightPanel extends React.Component {

    
    locData = {}  // holds location data fetched via API


    /** 
     *  fetch from wikipedia and save in locData variable
     * @param wikiSlug the wikipedia slug for selected resource
     */
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

        // 
        //TODO: BUG fix multiple requests
        // fetch data from wikipedia
        activeLocation && this.fetchLocationData(activeLocation.wikiSlug)

        

        let thumb
        this.locData.thumbnail && this.locData.thumbnail.source? thumb = this.locData.thumbnail.source : thumb = '';
       
        // https://stackoverflow.com/questions/31163693/how-to-conditionally-add-attributes-to-react-components/31164357
        let ariaAttrs = !locationPanelVisible ? {"aria-hidden":"true"}: false

        // render empty right panel while visually hidden to improve accessibility and preserve panel animation
        if( locationPanelVisible /* && activeLocation */){
            return (
                <section className={locationPanelVisible ? 'locationPanel':'locationPanel hidden'} { ...ariaAttrs } > 
                    <button aria-label='Close location detail panel' onClick={()=>{setOpenRightPanel(false)}}>&#x2716;</button>
                    <h3>{activeLocation.title}</h3>
                    <p>Wikipedia Info:</p>
                    <img src={thumb} alt={activeLocation.title || 'Image Unavailable'}/> 
                    <p>{this.locData.extract || 'Text Unavailable'}</p>
                </section>    
            )

        }else{
            return(
                <section className={'locationPanel hidden'} >
                </section>
            )
        }
    }

}


export default RightPanel