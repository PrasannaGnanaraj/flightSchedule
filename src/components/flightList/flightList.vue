<template>
  <div>
    <h5>Available Flights</h5>
    <div style="overflow-y:scroll;height:75vh">
      <transition-group name="list">
        <flightDetails
          v-for="flight in flightList"
          :enableIcons="true"
          :disableDescription="true"
          :flightDetails="flight"
          :flightIds="flightIds"
          v-bind:key="flight.ident"
        ></flightDetails>
      </transition-group>
    </div>
    <nav>
      <ul class="pagination">
        <li
          :class="{'page-item':'true','active':setActive(page)}"
          v-for="page in 5"
          v-bind:key="page"
        >
          <a class="page-link" @click="handlePageNoClick(page)">{{page}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script src='./flightList.js'>
</script>