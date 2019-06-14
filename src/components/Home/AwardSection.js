import React from 'react'
        export default class AwardSection extends React.Component {
        render() {
        return (
<div className="award-section blue-bg bg">
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                <h2>We’re&nbsp; Awarded as for our Services</h2>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12 text-center">
                <img  src="img/top-website-development-companies.png" />
                <span>Five Star Rating on Goodfirms</span>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6  award-img ">
                <img  src="img/topUPWORK.png" alt="" />
                <img  src="img/RisingTalent-lg.png" alt=""  />
            </div>
            <div className="col-lg-2 col-md-2 col-xs-6 col-sm-6 d-flex align-items-center">
            <span>By</span><img className="alignnone" src="img/up-work_jpg11.jpg" alt="" width="232" height="68" />
            </div> 
        </div>
    </div>
</div>
                )
        }
        }
