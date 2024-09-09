import React from 'react'

function ContactMap() {
    return (
        <>
            <div className="container overflow-x-hidden">
                <div class="map-container ">
                    <div class="map-overlay">
                        <h3>Visit Us Here!</h3>
                        <p>Find our office at the heart of the city.</p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.95373631531673!3d-37.81627997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb6960a3db5e22c0!2sFederation%20Square!5e0!3m2!1sen!2s!4v1603853182839!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        frameborder="0"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        class="styled-map">
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default ContactMap