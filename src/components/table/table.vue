<template>
  <table class="table">
    <thead>
      <th v-for="header in headers" v-bind:key="header">{{header}}</th>
    </thead>
    <tbody>
      <tr v-for="row in rows" v-bind:key="row[uniqueId]">
        <td v-for="col in row" v-bind:key="col">{{col}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    rows: { type: Array, default: null },
    headers: { type: Array, default: null },
    uniqueId:{type:String,default:null}
  }
};
</script>