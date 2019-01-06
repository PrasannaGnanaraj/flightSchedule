<template>
  <div @drop="handleDrop" @dragover="handleDragOver" class="w-100 h-100">
    <h5>Aircraft Rotation</h5>

    <div v-if="currentAircraft">
      <transition-group name="list">
        <div v-for="flight in aircraftCarrierData[currentAircraft].list" v-bind:key="flight.ident">
          <flightDetails :flightDetails="flight" :width="'100%'" :enableDelete="true"></flightDetails>
        </div>
      </transition-group>
    </div>
    <div v-else>
      <small class="d-block">Click on Available Aircrafts list to select an aircraft</small>
      <small>You can drag and drop flights here</small>
    </div>
  </div>
</template>
<script src="./aircraftFlightRotation.js">
</script>
