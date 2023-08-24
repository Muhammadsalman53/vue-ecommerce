<template>
    <div class="container pt-5">
        <div class="container-fluid h-custom pt-5 pb-5 card text-black shadow">
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
                                placeholder="Enter a valid email address" v-model="email" />
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-3">
                            <input type="password" id="form3Example4" class="form-control form-control-lg"
                                placeholder="Enter password" v-model="password" />
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
                        <p class="text-danger mt-2" v-if="invalidLogin">Incorrect username or password. Please try again.</p>

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <!-- Login button -->
                            <button type="button" class="btn btn-primary btn-lg login-btn" @click="loginUser">Login</button>

                            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                <router-link to="/signup">Register</router-link>
                            </p>
                            <router-view />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {

    data() {
        return {
            email: null,
            password: null,
            invalidLogin: false
        }
    },

    methods: {

        loginUser() {


            axios.post('https://dummyjson.com/auth/login', {
                username: this.email,
                password: this.password,
            })
                .then(response => {
                    console.log();
                    if (response.data) {
                        console.log('Login successful:', response.data);
                        localStorage.setItem("token", response.data.token)
                        this.$router.push({ name: 'home' });
                    } else {
                        console.log('Login failed:', response.data.message);
                    }
                })
                .catch( err => {
                    this.invalidLogin = !this.invalidLogin
                    console.log(err);
                })
        }
    }
}
</script>

<style scoped>
.bg-color{
    background: red;
}
.login-btn {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
}
</style>