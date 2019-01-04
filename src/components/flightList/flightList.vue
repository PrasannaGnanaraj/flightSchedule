<template>
    <div>
        <h3>List of Flights Planned for today</h3>
    <tableComponent :rows="flightList" :headers="flightListProperties" uniqueId='ident' @edit="handleEditRequest"></tableComponent>
    <editModal></editModal>
    </div>
    
</template>
<script src='./flightList.js'>
</script>