<script>
import LoginForm from "../components/LoginForm.vue";

export default {
    name: "Contact",
    components: { LoginForm }
}
</script>

<template>
    <div class="background">
        <div class="leftZone">
            <p>Il est également possible de me contacter par mail via l'adresse suivante : <b>nathan.schneider4505@gmail.com</b></p>
        </div>
        <div class="frame">
            <LoginForm />
        </div>
        <div class="rightZone">
            <p>...ou alors directement par téléphone via ce numéro : <b>07.82.45.39.21</b></p>
        </div>
    </div>
</template>

<style>
    .background {
        width: 100%;
        height: 100%;
        /* background-image: url(../assets/blurry-gradient-haikei.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover; */
        background-image: linear-gradient(53deg, #27ada2, #74c1b5, #b4d9d2, #f0f0f0)
    }

    .leftZone {
        position: fixed;
        width: 24%;
        top: 200px;
        left: 3%;
    }

    .rightZone {
        position: fixed;
        width: 24%;
        top: 200px;
        right: 3%;
    }

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
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
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
        width: 90%;

        padding: 3%;
    }
    .frame button {
        cursor: pointer;
        margin-top: 5%;
        padding: 5% 15%;
        outline: none;
        border-radius: 100px;
        transition: filter .4s;

        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .frame button:hover {
        filter: invert(100%);
    }
</style>