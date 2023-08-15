<template>

<div class="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
  <div class="relative">
    
<div class="hidden sm:block h-56 w-56 text-blue-300 absolute a-z-10 -left-20 -top-20">
   <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
  </div>
<div class="hidden sm:block h-28 w-28 text-blue-300 absolute a-z-10 -right-20 -bottom-20">
   <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)'/></svg>
  </div>
    <!-- Register -->
    <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
      <div class="flex-auto p-6">
        <!-- Logo -->
        <div class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
          <a href="#" class="flex cursor-pointer items-center gap-2 text-blue-500 no-underline hover:text-blue-500">
            <span class="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">Futurism.</span>
          </a>
        </div>
        <!-- /Logo -->
        <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">Selamat Datang Di Website Saya</h4>

        <form id="" class="mb-4" action="#" method="POST" @submit.prevent="performLogin">
          <div class="mb-4">
            <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email</label>
            <input type="text" class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email-username" placeholder="Masukan Email Kamu" autofocus="" v-model="username" required />
          </div>
          <div class="mb-4">
            <div class="flex justify-between">
              <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700" for="password">Password</label>
              <a href="auth-forgot-password-basic.html" class="cursor-pointer text-blue-500 no-underline hover:text-blue-500">
                <small class=" ">Lupa Password?</small>
              </a>
            </div>
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="password" id="password" class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow" name="password" placeholder="············" v-model="password" required/>
            </div>
          </div>
          <div class="mb-4">
            <div class="block">
              <input class="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-500 focus:border-blue-500 focus:shadow" type="checkbox" id="remember-me" style="background-image: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)" checked />
              <label class="inline-block" for="remember-me">Ingatkan Saya</label>
            </div>
          </div>
          <div class="mb-4">
            <button class="grid w-full cursor-pointer select-none rounded-md border border-blue-500 bg-blue-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:border-blue-600 focus:bg-blue-600 focus:text-white focus:shadow-none" type="submit">Login</button>
          </div>
        </form>

        <p class="mb-4 text-center">
          Belum Punya Akun?
          <a href="#" class="cursor-pointer text-blue-500 no-underline hover:text-blue-500"> Buat Akun </a>
        </p>
      </div>
    </div>
    <!-- /Register -->
  </div>
</div>


<!-- 
  <div class="login-box ">
    <h2>Login</h2>
    <form @submit.prevent="performLogin">
      <div class="user-box">
        <input type="text" v-model="username" required>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" v-model="password" required>
        <label>Password</label>
      </div>
      <button class="a" type="submit">
        <span></span>
      <span></span>
      <span></span>
      <span></span>
        submit</button>
    </form>
  </div> -->


</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        async performLogin() {
            const credentials = {
                username: this.username,
                password: this.password,
            };
            const success = await this.login(credentials);
            if (success) {
                // Redirect to the desired route on successful login
                this.$router.push('/');
            } else {
                alert("Login Failed");
            }
        },
    },
};
</script>

<style>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: linear-gradient(#006992, #2E1760);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}

.login-box button span {
  position: absolute;
  display: block;
}

.login-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
</style>