<template>
    <div class="flex flex-col justify-center items-center">
        <div class="border-black border-2 rounded-full h-6 w-6 flex justify-center items-center">
            <span class="text-1xl" v-if="isDone">&#10003;</span>
            <span class="text-1xl" v-else>I</span> 
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
        isDone: {
            type: Boolean,
            default: false,
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