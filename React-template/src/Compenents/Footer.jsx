import React from 'react'

function Footer() {
  return (
    <>
  {/* Image of location/map */}
  <div className="w3-container">
    <img
      src="https://www.w3schools.com/w3images/map.jpg"
      className="w3-image"
      style={{ width: "100%" }}
    />
  </div>
  {/* End page content */}
  {/* Footer */}
  <footer className="w3-center w3-black w3-padding-16">
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-text-green"
      >
        w3.css
      </a>
    </p>
  </footer>
</>

  )
}

export default Footer