import React from 'react';
import FirstSection from './FirstSection';
import AwardSection from './AwardSection';
import LanguageSection from './LanguageSection';
import MobileDesignSection from './MobileDesignSection';
import WebAppSection from './WebAppSection';
import ProjectSection from './ProjectSection';


export default class HomePage extends React.Component {
    render() {
        return (
                <div className="HomePage-Wrapper">
                    <FirstSection />
                    <AwardSection />
                    <LanguageSection />
                    <MobileDesignSection />
                    <WebAppSection />
                    <ProjectSection />
                </div>
                )
    }
}
