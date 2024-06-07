<template>
    <section class="vh-100">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Login Form</h2>
                                <!-- <form @submit.prevent="submitForm" @reset="resetForms"> -->
                                <form>
                                    <div  class="form-outline mb-4">
                                        <label class="form-label align-items-start" for="form3Example1cg">User Name</label>
                                        <input type="text" id="name" 
                                            class="form-control form-control-lg" />
                                        
                                    </div>

                                    <div  class="form-outline mb-4">
                                        <label class="form-label" for="form3Example3cg">Password</label>
                                        <input type="email" id="email" 
                                            class="form-control form-control-lg" />
                                        
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                    </div>

                                   

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>