<template>
  <div @drop="handleDrop" @dragover="handleDragOver" class="w-100 h-100">
    <h5>Current Rotation</h5>
    <div v-if="currentAircraft">
      <div v-for="flight in aircraftCarrierData[currentAircraft].list" v-bind:key="flight.ident">
        <flightDetails :flightDetails="flight" :width="'100$'" :enableDelete="true"></flightDetails>
      </div>
    </div>
  </div>
</template>
<script src="./aircraftFlightRotation.js">
</script>
