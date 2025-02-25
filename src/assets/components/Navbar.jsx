import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
        <div>

            <div class="navbar-light text-black">
                <div class="container">
                    <nav class="navbar px-0 navbar-expand-lg navbar-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a href="index.html" class="pl-md-0 p-3 text-decoration-none text-dark">
                                    <h3 class="bold"><span class="color_danger">TECHFOSS 2025 </span><span class="color_black">CTF</span></h3>
                                </a>
                            </div>
                            <div class="navbar-nav ml-auto">
                                <a href="index.html" class="p-3 text-decoration-none text-black bold">Home</a>
                                <a href="about.html" class="p-3 text-decoration-none text-dark bold">About</a>
                                <a href="hackerboard.html" class="p-3 text-decoration-none text-dark bold">Hackerboard</a>
                                <a href="login.html" class="p-3 text-decoration-none text-dark bold">Login</a>
                                <a href="register.html" class="p-3 text-decoration-none text-dark bold">Register</a>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>

        </div>
    )
}

export default Navbar