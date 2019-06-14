import React from 'react'
        export default class SiteFooter extends React.PureComponent {
        render() {
        return (
<footer className="blue-bg">
    <div className="container  text-center">
        <div className="row">
            <div className="contact-wrapper col-sm-12 col-12">
                <h2>GET IN TOUCH</h2>
                <p>Got a project you would like us to work on?</p>
                <p>we are dedicated to the delivery of excellence.</p>
                <p>Contact us with some details about your projects.</p>
            </div>
        </div>
        <div className="contact-no">
            <p>T: 91-9781516541</p>
            <p>E: riya.barua@catalyst.sh</p>
            <div className="social-icon-section">
                <i className="fa fa-linkedin-square social-rapper" aria-hidden="true"></i>
                <i className="fa fa-twitter-square social-rapper" aria-hidden="true"></i>
                <i className="fa fa-facebook-official social-rapper" aria-hidden="true"></i>
                <i className="fa fa-instagram social-rapper" aria-hidden="true"></i>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright © CT Solution Private Limited 2019. All rights reserved</p>
        </div>
    </div>
</footer>
                )
        }
        }
