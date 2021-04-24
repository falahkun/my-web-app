import React from "react";

import propTypes from "prop-types";


export default function Button(props) {
    return <div class="w-36 h-10 bg-purple-800 rounded flex items-center justify-center">
        <a href={props.text} class="text-white text-center">{props.text}</a>
    </div>;
}

Button.propTypes = {
    text: propTypes.string,
    href: propTypes.string
}
