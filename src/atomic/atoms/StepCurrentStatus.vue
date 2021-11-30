<template>
    <div class="flex flex-col justify-center items-center">
        <div class="border-black border-2 rounded-full h-6 w-6 flex justify-center items-center">
            <span class="text-1xl" v-if="status=='DONE'">&#10003;</span>
            <span class="text-1xl" v-else-if="status == 'CURRENT'">I</span> 
            <span class="text-1xl" v-else></span>
        </div>
        <div>
            <p>
                {{stepName}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        status: {
            type: String,
            default: '',
        },
        stepName: {
            type: String,
            default: 'Test',
        },
    }
}
</script>

<style>

</style>