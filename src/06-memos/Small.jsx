import React from "react";

function Small({ value }) {
  return (
    <small>{value}</small>
  )
}
export default React.memo(Small);