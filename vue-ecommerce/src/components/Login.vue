<template>
    <div class="container pt-5">
            <div class="container-fluid h-custom pt-5 pb-5 card text-black">
                <div class="row d-flex justify-content-center align-items-center">

                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="../assets/login-bg.png" class="img-fluid" alt="Sample image">
                    </div>

                    <div class="col-md-9 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <div class="d-flex flex-row align-items-center justify-content-center">
                                <p class="fs-1 fw-bold mb-4 me-3">Sign in</p>

                            </div>
                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <!-- Checkbox -->
                                <div class="form-check mb-0">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label class="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" class="text-body">Forgot password?</a>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg login-btn">Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        class="link-danger" @click="navigateToSignUp">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
// import { useRouter } from "vue-router"
// export default {
//   methods: {
//     navigateToSignUp() {
//         let route = useRouter()
//       this.route.push("/signup");
//     },
//   },
// };
</script>

<style>
.login-btn {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
}
</style>