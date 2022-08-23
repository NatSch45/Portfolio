<template>
    <div class="timeline">

        <h2>Voici les évènements constituants mon parcours scolaire et professionnel</h2>

        <div class="mainTimeline">
            <div v-for="(step, i) in steps" :key="i" class="timeline__event fade-down" :class="['timeline__event--type'+step.colorType]">
                <div class="timeline__event__icon">
                    <font-awesome-icon :icon="'fa-solid '+step.ico" />
                </div>
                <div class="timeline__event__date">
                    {{ step.date }}
                </div>
                <div class="timeline__event__content ">
                    <div class="timeline__event__title">
                        {{ step.name }}
                    </div>
                    <div class="timeline__event__description">
                        <p>{{ step.text }}</p>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    name: "Timeline",
    data() {
        return {
           steps: [
            {   name: "Bac S-SI",
                date: "Juillet 2019",
                text: "J'ai effectué un Bac S-SI (Sciences de l'Ingénieur) option ISN (Informatique et Systèmes Numériques) au Lycée Benjamin Franklin à Orléans (45). Cela m'a permis d'être plus à l'aise avec les mathématiques et d'appréhender pour la première fois le développement informatique.",
                ico: "fa-school",
                colorType: "1",
            },
            {   name: "DUT Informatique",
                date: "2019-2020",
                text: "J'ai donc opté pour un DUT Informatique à Belfort dans le but de continuer vers un Master. Cependant, je n'ai pas pu trouver les motivations nécessaires dans ce type d'enseignement et j'ai donc cherché une alternative.",
                ico: "fa-school-circle-exclamation",
                colorType: "4",
            },
            {   name: "Job d'été : Alliance Healthcare",
                date: "Juillet 2020",
                text: "Pour mon premier job d'été, j'ai travaillé à Alliance Healthcare (Semoy, 45) dans un centre de distribution de produits pharmaceutiques et parapharmaceutiques. Cela a été ma toute première expérience dans le monde professionnel.",
                ico: "fa-briefcase",
                colorType: "5",
            },
            {   name: "1ère année Ynov",
                date: "2020-2021",
                text: "L'alternative à mon DUT s'est avérée se trouver chez Ynov, une école mettant l'accent sur la pratique et l'apprentissage par projet. Cette approche me sied et me permet d'être aujourd'hui pleinement motivé à apprendre et travailler !",
                ico: "fa-school",
                colorType: "1",
            },
            {   name: "BarTradingX",
                date: "Octobre 2020 - Mai 2021",
                text: "BarTradingX est le premier projet informatique, ici web, d'envergure auquel j'ai participé. Avec un groupe pluridisciplinaire de 7 personnes, nous avons travaillé sur une plateforme évenementielle visant à transformer les consommations d'un bar en bourse.",
                ico: "fa-graduation-cap",
                colorType: "3",
            },
            {   name: "Job d'été : John Deere",
                date: "Juillet 2021 - Août 2021",
                text: "J'ai effectué mon deuxième job d'été dans une usine de fabrication de moteurs, principalement de tracteur, chez John Deere (Saran, 45). Cela m'a encore plus motivé à continuer avec vigueur mes études...",
                ico: "fa-briefcase",
                colorType: "5",
            },
            {   name: "2ème année Ynov",
                date: "2021-2022",
                text: "J'ai commencé puis validé ma deuxième année d'études supérieures à Ynov. J'ai pu créer et développer davantage de projets, ce qui m'a conforté dans le choix de mon cursus.",
                ico: "fa-school",
                colorType: "1",
            },
            {   name: "Hope",
                date: "Octobre 2021 - Mai 2022",
                text: "L'un des nombreux projets effectués cette année-là est Hope. Il s'agit de mon deuxième projet d'envergure. Nous avons ici développé un média positif avec une brillante équipe multidisciplinaire de 8 personnes.",
                ico: "fa-graduation-cap",
                colorType: "3",
            },
            {   name: "Street Fighter Arcade",
                date: "Début 2022",
                text: "Mon premier projet IoT concret est une reconstitution du jeu arcade Street Fighter en binôme. Nous avons conçu le jeu et mis en place le matériel nécessaire.",
                ico: "fa-graduation-cap",
                colorType: "3",
            },
            {   name: "Wejmi",
                date: "Début 2022",
                text: "Encore une autre première fois, il s'agit là d'un projet mobile en binôme. Wejmi est une application permettant de stocker et classer les informations portant sur les objets du quotidient, ou non, et leur emplacement.",
                ico: "fa-graduation-cap",
                colorType: "3",
            },
            {   name: "Stage DEF Industry",
                date: "Mai 2022 - Juin 2022",
                text: "Après ces cours et projets scolaires, j'ai pu effectuer un stage comme première expérience professionnelle. Cela m'a permis de mettre en application mes connaissances dans un milieu professionnel sur des projets de développement web essentiellement.",
                ico: "fa-user-tie",
                colorType: "2",
            },
            {   name: "Magri",
                date: "Juillet 2022",
                text: "Troisième et je l'espère dernier job d'été de ma jeune carrière, j'ai travaillé dans une usine de menuiserie chez Magri du groupe Keyor (Thignonville, 45).",
                ico: "fa-briefcase",
                colorType: "5",
            },
            {   name: "1er Jour alternance chez Lumiplan",
                date: "20 Septembre 2022",
                text: "Je vais effectuer mon premier jour d'alternance chez Lumiplan, acteur majeur de la communication dynamique et citoyenne.",
                ico: "fa-user-tie",
                colorType: "2",
            },
            {   name: "Rentrée 3ème anée Ynov",
                date: "3 Octobre 2022",
                text: "La rentrée de ma 3ème année d'études supérieures approche à grand pas, j'espère que le sera fructueuse et pleine de bonnes expériences.",
                ico: "fa-school",
                colorType: "1",
            },
            ],
            fadeDownEl: [],
        }
    },
    methods: {
      isElemVisible(el) {
        const rect = el.getBoundingClientRect()
        const elemTop = rect.top + 200
        const elemBottom = rect.bottom
        console.log(elemTop, elemBottom)
        return elemTop < window.innerHeight && elemBottom >= 0
      },
      handleScroll() {
        for (let i = 0; i < this.fadeDownEl.length; i++) {
          const elem = this.fadeDownEl[i];
          if (this.isElemVisible(elem)) {
            elem.style.opacity = '1'
            elem.style.transform = 'scale(1)'
            this.fadeDownEl.splice(i, 1) // Pour jouer l'animation seulement une fois
          }
        }
      }
    },
    mounted() {
      this.fadeDownEl = Array.from(document.getElementsByClassName('fade-down'))
      document.addEventListener('scroll', this.handleScroll)
    },
    unmounted() {
      document.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style scoped>
    .timeline {
        position: relative;
        width: 100%;
        height: 100%;
        margin-bottom: 100px;
    }



* {
  box-sizing: border-box;
}
html {
  font-size: 14px;
}
body {
  background: #f6f9fc;
  font-family: "Open Sans", sans-serif;
  color: #525f7f;
}
h2 {
  margin: 5%;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
}
.mainTimeline {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  position: relative;
}
.timeline__event {
  margin-bottom: 20px;
  position: relative;
  display: flex;
  margin: 20px 0;
  border-radius: 6px;
  align-self: center;
  width: 50vw;
}
.timeline__event:nth-child(2n + 1) {
  flex-direction: row-reverse;
}
.timeline__event:nth-child(2n + 1) .timeline__event__date {
  border-radius: 0 6px 6px 0;
}
.timeline__event:nth-child(2n + 1) .timeline__event__content {
  border-radius: 6px 0 0 6px;
}
.timeline__event:nth-child(2n + 1) .timeline__event__icon:before {
  content: "";
  width: 2px;
  height: 0;
  background: var(--event1-second);
  position: absolute;
  top: 0%;
  left: 50%;
  right: auto;
  z-index: 1;
  transform: translateX(-50%);
  animation: fillBottom 2s forwards 1s ease-in-out;
}
.timeline__event:nth-child(2n + 1) .timeline__event__icon:after {
  content: "";
  width: 0;
  height: 2px;
  background: var(--event1-second);
  position: absolute;
  right: 0;
  z-index: 1;
  top: 50%;
  left: auto;
  transform: translateY(-50%);
  animation: fillLeft 2s forwards 1s ease-in-out;
}
.timeline__event__title {
  font-size: 1.2rem;
  line-height: 1.4;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--event1-main);
  letter-spacing: 1.5px;
}
.timeline__event__content {
  padding: 20px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  background: #fff;
  width: calc(40vw - 84px);
  border-radius: 0 6px 6px 0;
  z-index: 10;
}
.timeline__event__date {
  color: var(--event1-second);
  font-size: 1.5rem;
  font-weight: 600;
  background: var(--event1-main);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0 20px;
  border-radius: 6px 0 0 6px;
  z-index: 10;
}
.timeline__event__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--event1-main);
  padding: 20px;
  align-self: center;
  margin: 0 20px;
  background: var(--event1-second);
  border-radius: 100%;
  width: 40px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  padding: 40px;
  height: 40px;
  position: relative;
}
.timeline__event__icon svg {
  font-size: 32px;
  z-index: 10;
}
.timeline__event__icon:before {
  content: "";
  width: 2px;
  height: 0;
  background: var(--event1-second);
  position: absolute;
  top: 0%;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  animation: fillBottom 2s forwards 1s ease-in-out;
}
.timeline__event__icon:after {
  content: "";
  width: 0;
  height: 2px;
  background: var(--event1-second);
  position: absolute;
  left: 0%;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  animation: fillRight 2s forwards 1s ease-in-out;
}
.timeline__event__description {
  flex-basis: 60%;
}

.timeline__event--type2:after {
  background: var(--event2-main);
}
.timeline__event--type2 .timeline__event__date {
  color: var(--event2-second);
  background: var(--event2-main);
}
.timeline__event--type2:nth-child(2n + 1) .timeline__event__icon:before, .timeline__event--type2:nth-child(2n + 1) .timeline__event__icon:after {
  background: var(--event2-second);
}
.timeline__event--type2 .timeline__event__icon {
  background: var(--event2-second);
  color: var(--event2-main);
}
.timeline__event--type2 .timeline__event__icon:before, .timeline__event--type2 .timeline__event__icon:after {
  background: var(--event2-second);
}
.timeline__event--type2 .timeline__event__title {
  color: var(--event2-main);
}


.timeline__event--type3:after {
  background: var(--event3-main);
}
.timeline__event--type3 .timeline__event__date {
  color: var(--event3-second);
  background-color: var(--event3-main);
}
.timeline__event--type3:nth-child(2n + 1) .timeline__event__icon:before, .timeline__event--type3:nth-child(2n + 1) .timeline__event__icon:after {
  background: var(--event3-second);
}
.timeline__event--type3 .timeline__event__icon {
  background: var(--event3-second);
  color: var(--event3-main);
}
.timeline__event--type3 .timeline__event__icon:before, .timeline__event--type3 .timeline__event__icon:after {
  background: var(--event3-second);
}
.timeline__event--type3 .timeline__event__title {
  color: var(--event3-main);
}
.timeline__event:last-child .timeline__event__icon:before {
  content: none;
}


.timeline__event--type4:after {
  background: var(--event4-main);
}
.timeline__event--type4 .timeline__event__date {
  color: var(--event4-second);
  background-color: var(--event4-main);
}
.timeline__event--type4:nth-child(2n + 1) .timeline__event__icon:before, .timeline__event--type4:nth-child(2n + 1) .timeline__event__icon:after {
  background: var(--event4-second);
}
.timeline__event--type4 .timeline__event__icon {
  background: var(--event4-second);
  color: var(--event4-main);
}
.timeline__event--type4 .timeline__event__icon:before, .timeline__event--type4 .timeline__event__icon:after {
  background: var(--event4-second);
}
.timeline__event--type4 .timeline__event__title {
  color: var(--event4-main);
}
.timeline__event:last-child .timeline__event__icon:before {
  content: none;
}


.timeline__event--type5:after {
  background: var(--event5-main);
}
.timeline__event--type5 .timeline__event__date {
  color: var(--event5-second);
  background-color: var(--event5-main);
}
.timeline__event--type5:nth-child(2n + 1) .timeline__event__icon:before, .timeline__event--type5:nth-child(2n + 1) .timeline__event__icon:after {
  background: var(--event5-second);
}
.timeline__event--type5 .timeline__event__icon {
  background: var(--event5-second);
  color: var(--event5-main);
}
.timeline__event--type5 .timeline__event__icon:before, .timeline__event--type5 .timeline__event__icon:after {
  background: var(--event5-second);
}
.timeline__event--type5 .timeline__event__title {
  color: var(--event5-main);
}
.timeline__event:last-child .timeline__event__icon:before {
  content: none;
}

.fade-down {
  opacity: 0;
  transition: .4s all ease-out;
  transform: scale(0.8);
}


@media (max-width: 786px) {
  .timeline__event {
    flex-direction: column;
    align-self: center;
  }
  .timeline__event__content {
    width: 100%;
  }
  .timeline__event__icon {
    border-radius: 6px 6px 0 0;
    width: 100%;
    margin: 0;
    box-shadow: none;
  }
  .timeline__event__icon:before, .timeline__event__icon:after {
    display: none;
  }
  .timeline__event__date {
    border-radius: 0;
    padding: 20px;
  }
  .timeline__event:nth-child(2n + 1) {
    flex-direction: column;
    align-self: center;
  }
  .timeline__event:nth-child(2n + 1) .timeline__event__date {
    border-radius: 0;
    padding: 20px;
  }
  .timeline__event:nth-child(2n + 1) .timeline__event__icon {
    border-radius: 6px 6px 0 0;
    margin: 0;
  }
}


@keyframes fillLeft {
  100% {
    width: 200%;
  }
}
@keyframes fillBottom {
  100% {
    height: 220%;
  }
}
@keyframes fillRight {
  100% {
    width: 200%;
  }
}

</style>