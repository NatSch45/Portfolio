<template>
    <div class="articleContainer">
        <h1>{{ articles[$route.params.id-1].title }}</h1>
        <h2>{{ articles[$route.params.id-1].subtitle }}</h2>

        <br>

        <span v-html="articles[$route.params.id-1].text"></span>
    </div>
</template>

<script>
    export default {
        name: 'Artcle',
        data() {
            return {
                articles: [
                    {
                        title: "Projet professionnel VS projet non professionnel",
                        subtitle: "Zoom sur les différences qui existent entre un projet étudiant ou personnel avec un projet professionnel",
                        text: "Le premier pas d’un développeur informatique dans le monde professionnel est toujours un grand moment. C’est un peu comme poser la première pierre d’un édifice mais l’édifice ici, c’est la carrière. <br>Alors on arrive le premier jour avec des préjugés et des choses que l’on ignore, puis on apprend à changer petit à petit sa manière de travailler, peut-être même sans s’en rendre compte, afin d’affiner ses compétences et la qualité de son travail. <br><br>Ce processus est dû en partie aux nombreuses différences qu’on peut trouver entre un projet scolaire, ou un projet personnel, et un projet professionnel. Je vais alors vous citer dans cet article celles que j’ai pu remarquer lors de mon stage de fin de deuxième année d’études supérieures, qui m’a fait office de réelle première expérience en informatique dans le monde professionnel. <br>Tout d’abord, la plus importante sans doute, c’est la pression du monde professionnel. En effet, lorsqu’on décide de se lancer dans un projet personnel ou alors qu’on commence un projet scolaire, on le fait avant tout pour soi. Que ce soit pour sa simple satisfaction ou pour sa propre réussite scolaire, on reste dans le domaine personnel. Bien entendu, un projet de groupe peut donner un peu plus de pression mais les enjeux en découlant ne dépasseront jamais une note dans un tableau Excel. <br>En revanche, lorsque votre chef vous demande d’effectuer une tâche, vous vous sentez plus impliqué ou engagé dans ce que vous produisez par le fait que votre employeur ou chef dépense du temps et/ou de l’argent pour votre travail. Bien entendu, tout le monde ne ressent pas cette sensation et certains se sentent dépourvu de toute redevance… Souvent cela semble entraîner un manque de travail ou d’investissement donc je dirai qu’il s’agit ici d’une « bonne pression ». <br>Une autre différence que j’ai pu relever porte sur la maintenance et la propreté d’un code. À l’école, on connaît déjà les règles qui permettent d’avoir un code propre telles que le KISS ou le DRY par exemple. En revanche ce qui va différer ici, c’est que votre travail sera obligatoirement utilisé ou relu par une autre personne que vous ne connaissez et que vous ne connaitrez sûrement même pas. En conséquent, il est primordial de commenter et de laisser chaque partie du code la plus simple et compréhensible possible. Dans le cas contraire, votre travail ne vaudra plus rien car il ne sera plus évolutif et les prochains développeurs devront le mettre à la poubelle ou alors il entraînera des manques de mises à jour et des problèmes futurs. De plus, il faut comprendre que lorsqu’on évolue dans une société petite ou modérée, il est très probable que le développeur qui passe derrière vous n’est pas spécialement à l’aise avec les technologies que vous utilisez ou même le domaine informatique dans lequel vous vous situez. C’est alors dans ces moments-là qu’un code bien développé est particulièrement apprécié ! <br>Pour finir, je voulais parler d’un autre point qui peut en bousculer plus d’un. Il s’agit de la cadence de travail. Effectivement, la cadence dépend beaucoup du rythme de travail que s’est imposé le développeur lors de ses travaux étudiants ou personnels. Ce qui est sûr, c’est que la cadence dans le milieu professionnel est souvent élevée. Vous êtes assis sur votre chaise de bureau sans les distractions que vous pouvez avoir chez vous et sans les amis avec qui vous pourriez parler pendant de longues minutes, dizaines de minutes ou même plus ! Votre cerveau est alors sollicité plus longtemps dans la journée et sur des périodes plus longues. C’est une bonne nouvelle pour la productivité mais attention à ne pas fatiguer son cerveau trop rapidement car sinon on devient contre-productif en fin d’après-midi. Afin de palier à cet éventuel problème, il est essentiel de garder un espace de travail simple d’utilisation et épuré. Évitez par exemple d’avoir un explorateur avec assez d’onglets ouverts à n’en plus pouvoir voir leur en-tête ou encore de développer du code dans un fichier déjà trop chargé dans lequel vous mettrez 3min à retrouver une fonction. Tout cela peut vous ralentir et vous embrouiller dans votre travail, ce qui accroitrait votre fatigue plus rapidement."
                    },
                    {
                        title: "Bien choisir sa BDD",
                        subtitle: "Quelles technologies utiliser lorsqu'on souhaite monter une base de données ?",
                        text: "Lorsqu’on commence un projet ayant un minimum d’envergure, on se pose rapidement la question du choix de la BDD (Base De Données). Cette question n’est pas forcément simple à répondre car il existe pléthore de solutions qui se disent à chaque fois meilleure que l’autre dans un certain domaine. On va essayer de décortiquer tout ça dans cet article. <br>Pour commencer, il faut faire la distinction entre 2 types de BDD, les bases de données relationnelles et les bases de données non relationnelles qu’on peut respectivement associer au SQL et NoSQL. <br>Le SQL (Structured Query Data) est un langage de base de données structuré, fonctionnel selon un schéma de données qu’il est primordial de respecter afin de pouvoir correctement stocker des données. Cela passe par des tables, des colonnes, des relations, des clés étrangères, etc… C’est ce qui le différencie du NoSQL (Not only SQL), qui lui n’est pas contraint à respecter un certain schéma. Cet aspect le rend beaucoup plus souple, simple et rapide à utiliser. En contrepartie, il dénigre l’intégrité des données ainsi que la cohérence des relations et la sécurité qui y est associée. <br>Les bases SQL sont le type de BDD le plus répandu aujourd’hui, on peut notamment compter parmi ses rangs les langages suivants : MySQL, MariaDB, PostgreSQL, SQLite en gratuit et OpenSource ou encore Oracle, SQL Server en solutions payantes et propriétaires. <br>Les bases NoSQL les plus réputées sont les suivantes : MongoDB, CouchDB, Redis, Cassandra, ElasticSearch… <br>"
                    },
                    {
                        title: "L'informatique dans le cinéma, les séries ou les jeux vidéo",
                        subtitle: "Quels sont les impacts de l'informatique dans le monde du divertissement et quels sont les impacts du monde du divertissement dans l'informatique ?",
                        text: "L’informatique est un sujet souvent évoqué dans le cinéma, principalement dans les films et séries traitant de science-fiction. En effet, les technologies futures ont toujours fait rêver les scénaristes, les metteurs en scène et les artistes d’effet spéciaux, ce qui nous a valu moultes technologies et interfaces futuristes.<br>"
                    },
                    {
                        title: "Voici comment faire pour être un meilleur développeur",
                        subtitle: "Les règles et les principes qu'un développeur doit suivre pour augmenter sa qualité de code et de réflexion",
                        text: "Dans le milieu du développement informatique, il existe des règles et des principes à respecter afin de produire un code de haute qualité. Je vais en lister quelques-uns que j’utilise et que je trouve particulièrement utiles. <br><br>Le <b>DRY</b> (Don’t Repeat Yourself, se traduisant par « ne te répète pas ») est un principe selon lequel vous devez faire en sorte de vous répéter le moins possible au sein d’un même projet. Cette technique permet de réduire la quantité de code que vous développez et aide à maintenir un code propre et lisible. Cela passe par l’utilisation de fonctions à appeler dans plusieurs parties du code, à utiliser des constantes et des variables là où des valeurs sont utilisées ou sont amenées à être modifier de manière similaire plusieurs fois, etc… On peut également citer l’utilisation de layouts ou de composants dans le développement web et mobile. Enfin, l’utilisation de la POO (Programmation Orientée Objet) peut permettre également d’éviter certaines répétitions polluantes. <br><br>Le <b>KISS</b> (Keep It Simple, Stupid ou Keep It Stupid Simple, se traduisant par « garde ça super simple ») est une règle qui tend le développeur à garder une grande simplicité et une aisance de compréhension partout dans son code, surtout là où des utilisations techniques de certains langages peuvent rapidement tourner au charabia pour n’importe qui n’ayant pas produit lui-même le code en question. En appliquant cette règle, il est alors plus facile d’expliquer le code à un collègue ou encore d’effectuer une potentielle modification du code quelques semaines ou mois plus tard. On peut appliquer cette règle en compartimentant explicitement son code, en évitant les fonctions ou les fichiers à rallonge, en décortiquant les lignes de codes trop chargées ou encore en commentant chaque étape du code par des explications claires, nettes et précises. <br><br>Enfin, il existe <b>YAGNI</b> (You Ain’t Gonna Need It, se traduisant par « tu n’en auras pas besoin »). Il s’agit ici d’un principe selon lequel il est inutile de développer une fonctionnalité à un logiciel ou une application si celle-ci n’est pas strictement nécessaire. Ce principe est qualifié d’extrême et un peu trop binaire à mon goût mais le fond est toutefois très intéressant et peut être appliqué à plein de cas de figures que vous avez déjà rencontré. Ce principe permettrait de renforcer le principe KISS vu précédemment par le fait que chaque fonctionnalité est liée à une seule implémentation et donc est rendue plus compréhensible à la lecture du code. Il permet également de se concentrer sur ce qui est essentiel au projet et de prioriser les tâches qui demandent réellement une implémentation. On peut appliquer cette règle par exemple à chaque nouvelle implémentation en mettant en comparaison les objectifs visés avec les potentiels futurs aboutissants et résultats obtenus. Si on n’est plus en phase avec l’objectif initialement instauré, alors l’implémentation n’est pas vraiment nécessaire."
                    },
                    {
                        title: "Le réseau DEF",
                        subtitle: "Présentation de l'entreprise qui m'a accueilli pour mon premier stage en informatique",
                        text: `L’entreprise qui m’a chaleureusement accueilli pour que je puisse effectuer mon premier stage en informatique est en réalité un réseau d’entreprises, il s’agit du réseau DEF.
                        Le réseau DEF est un réseau d’entreprises expertes en sécurité incendie. Leurs activités sont donc assez larges, on peut compter parmi elles :
                        <ul> <li>La détection incendie</li> <li>Le désenfumage mécanique</li> <li>La sonorisation de sécurité</li> <li>La gestion des issues de secours</li> <li>La supervision de services web</li> <li>La gestion de vidéo protection </li> <li>La sûreté des environnements</li> <li>Les dispositifs d’extinction des feux</li> </ul>
                        Lors de mon stage, je me trouvais sur le site de Dadonville qui regroupait quant à lui 4 entités : Fare, Sefalog, Sefi et Def Industry. Je vais vous les présenter ci-dessous.

                        <h2>FARE</h2>
                        Installée à Dadonville dans le premier bâtiment basse consommation de la région, la société FARE est le premier fabricant français de détecteurs d’incendie, récompensé par de nombreux prix d’innovation.
                        À la pointe de la technologie, FARE appartient au Réseau DEF, réseau international et indépendant d’entreprises expertes en sécurité incendie. Le Réseau, un des leaders français sur son secteur, apporte une offre complète dans le secteur SSI (Systèmes de Sécurité Incendie) qui va bien au-delà de la détection et de l’extinction en intégrant des expertises en sonorisation, gestion des issues de secours, désenfumage, compartimentage, etc…
                        L’entreprise a produit plus de 6 millions de détecteurs depuis le début du siècle.
                        Les activités principales de l’entreprise sont la production de détecteurs à incendie, la chaîne CMS automatisée, la recherche et le développement ou encore l’inspection optique automatique.

                        <h2>SEFALOG</h2>
                        La société SEFALOG gère la logistique des usines de production du Réseau DEF.
                        Ses principales missions sont de :
                        <ul>
                            <li>Stocker les composants nécessaires à la production et les distribuer vers les usines</li>
                            <li>Entreposer les produits finis ou semi-finis fabriqués par les différentes unités de production du Réseau DEF</li>
                            <li>Expédier les commandes vers les clients du Réseau en France et à l’international</li>
                            <li>Gérer toute opération logistique particulière des entités du Réseau</li>
                            <li>Gérer et assurer l’entretien du bâtiment</li>
                        </ul>

                        <h2>SEFI</h2>
                        SEFI est une entreprise créée en 1970 à Pithiviers (45) dont l’activité principale était la sous-traitance électronique. En 1976, SEFI rejoint le réseau DEF, réseau d’entreprises expertes en sécurité incendie. En 1999, SEFI intègre la R&D dans un deuxième établissement situé à Massy et devient ainsi le spécialiste des centrales de sécurité incendie du réseau DEF. L’équipe R&D compte désormais 27 personnes sur le site de Massy (91) et 3 personnes en Chine. Depuis 2010, la production a emménagé dans un nouveau bâtiment à énergie renouvelable placé à Dadonville (45).
                        SEFI produit les centrales et leurs éléments associés, les pièces de maintenance des anciens systèmes et assure la réparation et la mise à niveau des cartes électroniques du parc installé. L’ancien site de SEFI à Pithiviers (45) s’est aujourd’hui spécialisé dans la fabrication des systèmes complexes répondant à des contraintes spécifiques en accueillant la société Extinctium.
                        L’entreprise vend 10 000 centrales et câble 100 000 circuits imprimés par an dans le monde. 20% du chiffre d’affaires est directement réinvesti en R&D.

                        <h2>DEF INDUSTRY</h2>
                        DEF Industry est une récente société âgée d’un an et demi, présentée comme un groupement d’intérêt économique.
                        Sa mission est d’unifier toutes les activités communes aux différentes sociétés du pôle industrie du Réseau DEF. On peut compter parmi celles-ci le service informatique, les méthodes ou encore la comptabilité. Le développement de cette société est en cours de réalisation et fait partie d’une transition organisée par DEF qui s’étend au-delà du site de Dadonville.
                        Il s’agit de la société pour laquelle j’ai effectué mon stage.<br>
                        `,
                    },
                ]
            }
        }
    }
</script>

<style>
    .articleContainer {
        width: 100%;
        min-height: 100%;
        padding: 3%;
        background-color: #E7F3F1;
    }

    span {
        white-space: pre-line;
    }
</style>