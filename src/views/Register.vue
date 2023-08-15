<template></template>

<!-- <template>
    <div class="regis">
      <h2>Registrasi</h2>
      <form>
        <div class="user">
          <input type="text" required>
          <label>Full Name</label>
        </div>

        <div class="user">
          <input type="text" required>
          <label>Phone Number</label>
        </div>

        <div class="user">
          <input type="text" required>
          <label>Email Address</label>
        </div>
        <div class="user">
          <input type="text" required>
          <label>Password</label>
        </div>

        <div class="user">
          <input type="password" required>
          <label>Confrim Password</label>
        </div>
        <button class="a" type="submit">
          <span></span>
        <span></span>
        <span></span>
        <span></span>
          Create Acount</button>
      </form>
    </div>
  
  
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
  .regis {
    position: absolute;
    top: 60%;
    left: 50%;
    width: 600px;
    padding: 30px;
    transform: translate(-50%, -50%);
    background: linear-gradient(#006992, #2E1760);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
  }
  
  .regis h2 {
    margin: 0 0 0px;
    padding: 0;
    color: #fff;
    text-align: center;
  }
  
  .regis .user {
    position: relative;
  }
  
  .regis .user input {
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
  .regis .user label {
    position: absolute;
    top:0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }
  
  .regis .user input:focus ~ label,
  .regis .user input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
  
  .regis form button {
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
  
  .regis button:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;
  }
  
  .regis button span {
    position: absolute;
    display: block;
  }
  
  .regis button span:nth-child(1) {
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
  
  .regis button span:nth-child(2) {
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
  
  .regis button span:nth-child(3) {
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
  
  .regis button span:nth-child(4) {
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
  </style> -->