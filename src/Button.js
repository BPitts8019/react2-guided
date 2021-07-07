import React from "react";

function Button({ label, cb }) {
   return <button onClick={cb}>{label}</button>;
}

export default Button;
