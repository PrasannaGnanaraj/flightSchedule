<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
  background-color: lightgreen;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
  background-color: red;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>


<template>
  <div class="card" :style="{width}" @dragstart="handleDragStart" :draggable="enableDrag">
    <div :class="{'card-body':true,'text-muted':!enableDrag}">
      <div v-if="enableDelete" style="position:absolute;top:0.3em;right:0.3em;cursor:pointer">
        <a @click="handleFlightDelete">&times;</a>
      </div>

      <h5 class="card-title">
        {{flightDetails.ident}}
        <transition name="bounce">
          <i class="fas fa-plane" style="border-radius:1em" v-if="!enableDrag"></i>
        </transition>
      </h5>
      <div class="container" style="font-size:0.7em">
        <div class="row">
          <div class="col-6">
            <label>
              <b class="d-block" v-if="!disableDescription">Origin</b>
              {{flightDetails.origin}}
            </label>
          </div>
          <div class="col-6">
            <label>
              <b class="d-block" v-if="!disableDescription">Destination</b>
              {{flightDetails.destination}}
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <label>
              <b class="d-block" v-if="!disableDescription">Departure</b>
              <i v-if="enableIcons" class="fas fa-plane-departure"></i>
              {{flightDetails.readable_departure}}
            </label>
          </div>
          <div class="col-6">
            <label>
              <b class="d-block" v-if="!disableDescription">Arrival</b>
              <i v-if="enableIcons" class="fas fa-plane-arrival"></i>
              {{flightDetails.readable_arrival}}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./flightDetails.js'></script>
