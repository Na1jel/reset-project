import React from "react";
import GoogleApi from "./GoogleApi"

const Container = React.createClass({
    render: function() {
      return <div>Google</div>;
    }
  })
  export default GoogleApiComponent({
    apiKey: __GAPI_KEY__
  })(Container)


  //https://www.youtube.com/watch?v=Alz13kGluL8