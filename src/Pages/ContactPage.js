import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57292.40786337698!2d28.00500517418087!3d-26.171440231531488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1620893959012!5m2!1sen!2sza" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="map"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+27 78 184 6557'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'ngcaintsikelelo@gmail.com'} text2={'nngcai@student.wethinkcode.co.za'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Johannesburg'} text2={'South Africa'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;