import React from "react";

function ShowIncrement({increment}) {
    console.log('Me volví a generar :c');

  return (
    <>
    <button className="btn btn-primary" onClick={()=> {increment(5)}}>+5</button>
    </>
  )
}
export default React.memo(ShowIncrement);
