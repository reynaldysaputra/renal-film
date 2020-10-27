import React from 'react';
import Footer from '../styled_component/footer_styled/footer_styled';
import * as Global from '../styled_component/global_styled';

function Footer_Component() {
    return(
        <Footer>    
            <Global.ParagrafSmall margin='0' color='rgba(255, 255, 255, 0.699)'>
                © 2020 Copyright RENALFILM
            </Global.ParagrafSmall>
        </Footer>
    )
}

export default Footer_Component;