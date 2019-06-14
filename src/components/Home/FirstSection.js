import React from 'react'
        export default class FirstSection extends React.Component {
        render() {
        return (
<div className="banner-section section bg">
    <div className="container-fluid">
        <div className="banner-image-section row flex-row-reverse">
            <div className="col-sm-6 ">
                <img className="img-fluid" src="img/Illustration.png" />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-5 ">
                <h1> CT SOLUTIONS</h1> 
                <p>  Lorem Ipsum is simply dummy text of the perinting and typesetting industry. Lorem Ipsum has been the industry’s stand ard dummy text ever since the is simply dummy text of the perinting and typesetting industry 1500s.Lorem Ipsum is simply dummy text of the perinting and typesetting industry. Lorem Ipsum has been the industry’s stand ard dummy text ever since the is simply dummy text of the perinting and typesetting industry 1500s.</p>
            </div>
        </div>
        <div className="section text-center  skills-wrapper">
            <h2>SKILLS & EXPERTISE</h2>
            <div className="row align-items-center">
                <div className="col-sm-4">
                    <img src="img/User-Interface-design.png" />
                    <h4>UI/UX Design</h4>

                </div>
                <div className="col-sm-4">
                    <img src="img/Layer-7.png" />
                    <h4>Concept & IIIustration</h4>

                </div>
                <div className="col-sm-4">
                    <img src="img/data.png" />
                    <h4>Web Devlopment</h4>
                </div>
                 <div className="col-sm-4">
                    <img src="img/943420.png" />
                    <h4>Quality Assurance</h4>
                </div>
                 <div className="col-sm-4">
                    <img src="img/Digital-marketing.png" />
                    <h4>Digital Marketing</h4>
                </div>
                 <div className="col-sm-4">
                    <img src="img/1086581.png" />
                    <h4>Maintenance & Support</h4>
                </div>
            </div>
        </div>
    </div>
</div>
                )
        }
        }
