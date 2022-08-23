<template>
    <h1>{{ title }}</h1>
    <form @submit.prevent="handleSubmit">
        <CustomInput
            v-for="(input, i) in inputs" :key="i"
            v-model="input.value"
            :label="input.label"
            :type="input.type"
            :required="input.required"
        />
        <label>
            Message
            <textarea name="message" id="message" cols="50" rows="10"></textarea>
        </label>
        <button>ENVOYER</button>
        <p class="subtext">Les champs spécifiés d'un "<span class="required">*</span>" doivent obligatoirement être complétés.</p>
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
                    type: "text",
                    required: false
                },
                {
                    label: "Email",
                    value: "",
                    type: "email",
                    required: true
                },
                {
                    label: "Objet",
                    value: "",
                    type: "text",
                    required: true
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
    border: 1.5px solid grey;
    outline: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);

    transition: border .4s;
}
textarea:active, textarea:focus {
    border: 1.5px solid black;
}

.subtext {
    color: rgb(37, 37, 37);
    font-style: italic;
    font-size: 14;
    margin-top: 10px;
}
</style>