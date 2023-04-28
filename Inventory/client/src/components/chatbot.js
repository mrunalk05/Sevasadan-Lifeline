import React from 'react'
import { Component } from 'react';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
class Chatbot extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        (function Chat(d, m){
        var kommunicateSettings = {"appId":"24f4fcb141ea0ced2ad49371ddb8fa0d7","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    }
    render(){
        return(
            <div></div>
        )

    }

}

export default Chatbot;