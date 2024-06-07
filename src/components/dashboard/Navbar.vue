<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-primary custom_nav-container fixed-top">
      <router-link class="navbar-brand" to="/">
        <span>Finexo</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class=""> </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <RouterLink to="/"> <a class="nav-link"> Home </a></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about"> <a class="nav-link"> About </a></RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink to="/client"> <a class="nav-link"> Client </a></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/team"> <a class="nav-link"> Team </a></RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-user" aria-hidden="true"></i> Login</a
            >
          </li>
          <li class="nav-item active">
            <RouterLink to="/register"> <a class="nav-link"> Register </a></RouterLink>
          </li>
          <li class="nav-item active">
            <RouterLink to="/user"> <a class="nav-link"> user </a></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Login"> <a class="nav-link"> Login </a></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/signup"> <a class="nav-link"> SignUp </a></RouterLink>
          </li>
          <form class="form-inline">
            <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </ul>
      </div>
    </nav>
  </div>
</template>
