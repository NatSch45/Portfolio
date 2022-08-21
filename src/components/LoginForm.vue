<template>
    <h1>{{ title }}</h1>
    <form @submit.prevent="handleSubmit">
        <CustomInput
            v-for="(input, i) in inputs" :key="i"
            v-model="input.value"
            :label="input.label"
            :type="input.type"
        />
        <label>
            Message
            <textarea name="message" id="message" cols="50" rows="10"></textarea>
        </label>
        <button>Envoyer</button>
    </form>
    
</template>

<script>
import CustomInput from './CustomInput.vue';

    export default {
    name: "LoginForm",
    data() {
        return {
            title: "Contactez-moi !",
            inputs: [
                {
                    label: "Nom complet",
                    value: "",
                    type: "text"
                },
                {
                    label: "Email",
                    value: "",
                    type: "email"
                },
                {
                    label: "Objet",
                    value: "",
                    type: "text"
                }
            ]
        };
    },
    methods: {
        handleSubmit() {
            this.inputs.forEach((input) => {
                if (input.value.trim().length === 0) {
                    console.log("Veuillez remplir tous les champs")
                    return
                } else {
                    console.log(input.value.trim())
                }
            })
        }
    },
    components: { CustomInput }
}
</script>

<style>
textarea {
    resize: none;
}
</style>