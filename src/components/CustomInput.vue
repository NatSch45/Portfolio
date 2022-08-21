<template>
    <label for="">
        <p>{{ label }}<span class="required" v-if="required"> *</span></p>
        <input :type="type" v-model="inputValue">
    </label>
</template>

<script>
    export default {
        name: 'CustomInput',
        props: ['label', 'type', 'required', 'modelValue'],
        computed: {
            inputValue: {
                get() {
                    return this.modelValue
                },
                set(value) {
                    this.$emit('update:modelValue', value)
                }
            }
        }
    }
</script>

<style>
span.required {
    color: red;
}

input {
    height: 25px;
    border: none;
    border-bottom: 2px solid grey;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    outline: none;
    border-radius: 5px 5px 0 0;

    transition: border-bottom .4s;
}
input:active, input:focus {
    border-bottom: 2px solid black;
}
</style>