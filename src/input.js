import React, { useState } from "react";
export default function input() {
  const [inp, setInp] = useState();
  return (
    <div>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" val={inp} />
    </div>
  );
}
