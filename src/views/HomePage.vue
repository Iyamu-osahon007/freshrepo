<template>
  <div class="counter-app-container">
    <h1 class="counter-heading">COUNTER</h1>
    <p id="counter">{{ count }}</p>
    <div class="button-container">
    <button id="increase" @click="increment">Increment</button>
    
    <button id="reset" @click="resetCounter">Reset</button>
    <button id="decrease" @click="decrement">Decrement</button>
    
  </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },

    resetCounter() {
      this.count = 0;
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.counter-app-container {
  width: 100%;
  height: 100vh;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
}

.counter-heading {
  font-size: 50px;
  letter-spacing: 1.2px;
}

#counter {
  font-size: 75px;
  margin: 35px 0;
}

.button-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

button {
  font-size: 30px;
  padding: 20px 40px;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;

}

button::before {
  content: "";
  width: 200px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 0;
  left: -180px;
  transform: rotate(45deg);
  transition: 0.3s;
}

#increase {
  /* margin-left: 0; */
  background: #1bec5a;
}

#decrease {
  background: rgb(194, 194, 19);
}

#reset{
  background: #bd0e0e;
}

button:not(:last-child) {
  margin-right: 25px;
}

button:hover {
  background-color: rgba(68, 179, 215, 0.4);
}

button:hover::before {
  left: 250px;
}

/* Media Queries */
@media (max-width: 684px) {
  .button-container {
    flex-direction: column;
    
  }
  
  button:not(:last-child) {
    margin: 25px auto;
  }
  #increase {
    margin-left: auto;
  }
}
@media (max-width: 364px) {
  button {
    font-size: 20px;
    padding: 15px 30px;
  }
  .counter-heading {
    font-size: 40px;
  }
  #counter {
    font-size: 65px;
  }
}





</style>