import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';
import * as Global from '../styled_component/global_styled';
import ThemeApplication from '../styled_component/theme';

function Error_Component({match}) {
    const location = useLocation();
    const history = useHistory();
    
    const RouteHandle = () => {
        console.log(location);
        console.log(match);
        console.log(history);
    }
 
    return(
        <ThemeProvider theme={ThemeApplication}>
            {RouteHandle()}
            <Global.GlobalStyle/>
            
            <Global.Row display='grid' heightV='100' marginT='10' row={['auto']} justify='center' alignItem='center'>
                <Global.ParagrafTitle color='white' opacity='.6'>Halaman tidak di temukan</Global.ParagrafTitle>
            </Global.Row>
        </ThemeProvider>
    )
}

export default Error_Component;