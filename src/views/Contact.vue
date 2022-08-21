<script>
import LoginForm from "../components/LoginForm.vue";

export default {
    name: "Contact",
    components: { LoginForm }
}
</script>

<template>
    <div class="frame">
        <LoginForm />
    </div>
</template>

<style>
    .frame {
        width: 40%;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: #ACFFE3;
        border-radius: 15px;
    }

    .frame form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .frame label {
        display: flex;
        flex-direction: column;

        padding: 5%;
    }
    .frame button {
        cursor: pointer;
        margin-top: 15%;
        padding: 5% 15%;
        border: none;
        outline: none;
        border-radius: 100px;
        transition: filter .4s;
    }
    .frame button:hover {
        filter: brightness(90%);
    }
</style>