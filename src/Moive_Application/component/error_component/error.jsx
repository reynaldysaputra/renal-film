import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import * as Global from '../styled_component/global_styled';
import ThemeApplication from '../styled_component/theme';

function Error_Component() {
    return(
        <ThemeProvider theme={ThemeApplication}>
            <Global.GlobalStyle/>
            
            <Global.Row display='grid' heightV='100' marginT='10' row={['auto']} justify='center' alignItem='center'>
                <Global.ParagrafTitle color='white' opacity='.6'>Halaman tidak di temukan</Global.ParagrafTitle>
            </Global.Row>
        </ThemeProvider>
    )
}

export default Error_Component;