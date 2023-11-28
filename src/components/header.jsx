import React from 'react'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        TOH
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>
          <a class="nav-link" href="/about">
            About
          </a>
          <a class="nav-link" href="/contact">
            Contact
          </a>
          <a class="nav-link" href="/feedback">
            Feedback
          </a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header