import React from 'react';
import Video from './VideoPlayback';
import Nav from './Nav'

const layout = (props) => {

    return(
      <body>
        <Video />
        <Nav derp={props.derp} navOpts={props.navOpts}/>
      </body>
    )
}

export default layout