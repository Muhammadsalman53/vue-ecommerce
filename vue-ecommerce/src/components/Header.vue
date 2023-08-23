<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img width="100" height="100" class="img-fluid" src="../assets/images/OLX-Symbol.png" alt="Logo" /> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="col-lg-3 col-md-12 col-sm-12" id="categories">
                        <select class="form-select form-select-md" aria-label="Default select categories">
                            <option selected>All categories</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12" id="search">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-md btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12" id="cart">
                        <button class="btn btn-md btn-outline-primary" type="button">Add To Cart</button>
                    </div>
                    <div class="col-lg-1 col-md-12 col-sm-12" id="user-logo">
                        <p> <a href="#"><img class="img-fluid" src="../assets/images/user-logo.png" alt="User-logo"> </a></p>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default{
    name: 'Header'
}
</script>