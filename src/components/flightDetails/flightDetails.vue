<template>
  <div class="card" style="width:10em">
    <div class="card-body">
      <h5 class="card-title">{{flightDetails.ident}}</h5>
      <div class="container" style="font-size:0.7em">
        <div class="row">
          <div class="col">
            <label>
              <b class="d-block">Origin</b>
              {{flightDetails.origin}}
            </label>
          </div>
          <div class="col">
            <label>
              <b class="d-block">Destination</b>
              {{flightDetails.destination}}
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label>
              <b class="d-block">Departure</b>
              {{flightDetails.readable_departure}}
            </label>
          </div>
          <div class="col">
            <label>
              <b class="d-block">Arrival</b>
              {{flightDetails.readable_arrival}}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./flightDetails.js'></script>
