import React from 'react'

export default function Sidebar() {
  return (
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 bg-dark w-25">
    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="fs-5 d-none d-sm-inline">My Profile</span>
    </a>
    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li class="nav-item">
            <a href="/" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="favorite" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">my favorites</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="/edit" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">edit profile</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">settings</span>
            </a>
        </li>

    </ul>
    <hr/>
    <div class="dropdown pb-4">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
            <span class="d-none d-sm-inline mx-1">user</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li>
                <hr class="dropdown-divider"/>
            </li>
            <li><a class="dropdown-item" href="#">logout</a></li>

        </ul>
    </div>

</div>
  )
}
