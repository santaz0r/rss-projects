const birdsData = [
  [
    {
      id: 1,
      name: {
        ru: "Ворон",
        en: "Raven",
      },
      species: "Corvus corax",
      description: {
        ru: "Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.",
        en: "The raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Crows inhabit the vicinity of the Tower. In England, there is a belief that the day the black crows fly away from the Tower, the monarchy will collapse.",
      },
      image: "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3",
    },
    {
      id: 2,
      name: {
        ru: "Журавль",
        en: "Crane",
      },
      species: "Grus grus",
      description: {
        ru: "Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».",
        en: "The sounds made by the crane are similar to the ringing /'kur-ly–kur-ly'. Cranes most often sing a duet – one bird starts singing with the syllable 'kur', and the second picks up 'ly'. If a bird sings alone, it only makes the sound of 'kur'.",
      },
      image: "https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3",
    },
    {
      id: 3,
      name: {
        ru: "Ласточка",
        en: "Swallow",
      },
      species: "Delichon urbicum",
      description: {
        ru: "Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.",
        en: "Swallows are characterized by a quiet chirping. The songs of the swallows do not cease throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: 'vit', 'vit-vit', 'civit', 'chirivit', etc. Swallows like to sing a duet.",
      },
      image: "https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3",
    },
    {
      id: 4,
      name: {
        ru: "Козодой",
        en: "Nightjar",
      },
      species: "Caprimulgus europaeus",
      description: {
        ru: "Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются.",
        en: "The nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.",
      },
      image: "https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3",
    },
    {
      id: 5,
      name: {
        ru: "Кукушка",
        en: "Cuckoo",
      },
      species: "Cuculus canorus",
      description: {
        ru: "Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.",
        en: "The cuckoo was so named because of the peculiarities of its songs. The ringing 'coo-coo' is not to be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which the cuckoos throw their eggs.",
      },
      image: "https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3",
    },
    {
      id: 6,
      name: {
        ru: "Синица",
        en: "Parus",
      },
      species: "Parus major",
      description: {
        ru: "В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.",
        en: "There are more than 40 different sound combinations in the chirping of tits. They sing almost all year round, only quieting down a little in winter. Tits are real forest attendants. One pair of tits protects dozens of trees from pests during the nesting period.",
      },
      image: "https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3",
    },
  ],
  [
    {
      id: 1,
      name: {
        ru: "Воробей",
        en: "Sparrow",
      },
      species: "Passer domesticus",
      description: {
        ru: "Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.",
        en: "Sparrows are the most famous and recognizable birds. They are easily recognized by their mottled plumage and perky chirping. Sparrows belong to a synatropic species — they settle near a human dwelling.",
      },
      image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3",
    },
    {
      id: 2,
      name: {
        ru: "Грач",
        en: "Rook",
      },
      species: "Corvus frugilegus",
      description: {
        ru: "Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.",
        en: "Rooks are very smart and quick-witted birds. With the help of the beak, they create and use the simplest tools. Rooks have developed a reflex to the sounds of a tractor. Hearing the 'rattling', they fly towards the sound – the tractor is plowing the ground, which means there is a lot of feed in this place.",
      },
      image: "https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3",
    },
    {
      id: 3,
      name: {
        ru: "Галка",
        en: "Jackdaw",
      },
      species: "Coloeus monedula",
      description: {
        ru: "Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.",
        en: "The word 'jackdaw' comes from the Old Slavic language and translates as 'black'. This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw 'monedula' is associated with the words coin for the bird's love for shiny and bright things.",
      },
      image: "https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3",
    },
    {
      id: 4,
      name: {
        ru: "Певчий дрозд",
        en: "Song thrush",
      },
      species: "Turdus philomelos",
      description: {
        ru: "Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.",
        en: "The thrush is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing throughout the nesting period.",
      },
      image: "https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3",
    },
    {
      id: 5,
      name: {
        ru: "Сорока",
        en: "Magpie",
      },
      species: "Pica pica",
      description: {
        ru: "Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.",
        en: "The magpie is a very hardworking bird. She builds up to eight nests, and then chooses the best of them. The entrance to the magpie nest is always facing south, so that the dwelling is warmer. Magpies are the only birds that recognize themselves in the mirror.",
      },
      image: "https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3",
    },
    {
      id: 6,
      name: {
        ru: "Сойка",
        en: "Jay",
      },
      species: "Garrulus glandarius",
      description: {
        ru: "Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.",
        en: "When a jay is worried, the tuft on its head ruffles. The bird is trying to create an intimidating sight. Jays are able to imitate the voices of other birds, animals and sounds that a person creates. For the winter they make large stocks of acorns and nuts.",
      },
      image: "https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3",
    },
  ],
  [
    {
      id: 1,
      name: {
        ru: "Зяблик",
        en: "Chaffinch",
      },
      species: "Fringilla coelebs",
      description: {
        ru: "В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.",
        en: "There are 450 species of finches in the wild. In winter, finches lead a gregarious lifestyle. Sometimes you can see sparrows in their families. Finches sing in the spring, with the onset of the mating season. Their singing is a rolling multi–minute roulades.",
      },
      image: "https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3",
    },
    {
      id: 2,
      name: {
        ru: "Клёст",
        en: "Crossbill",
      },
      species: "Loxia curvirostra",
      description: {
        ru: "Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.",
        en: "Crossbills are called 'Christmas' birds. In natural conditions, they give offspring in winter – in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones, the crossbills can fly 3500 km from the nest.",
      },
      image: "https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3",
    },
    {
      id: 3,
      name: {
        ru: "Горлица",
        en: "Turtle dove",
      },
      species: "Streptopelia turtur",
      description: {
        ru: "Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.",
        en: "The turtle dove lives in mixed and broad-leaved forests, as well as in urban parks and villages. Birds often choose places to live next to a person and easily get used to people. Thanks to the melodious pleasant singing of turtledoves, they are often bred at home.",
      },
      image: "https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3",
    },
    {
      id: 4,
      name: {
        ru: "Дятел",
        en: "Woodpecker",
      },
      species: "Dendrocopos major",
      description: {
        ru: "Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.",
        en: "The woodpecker is a noticeable and noisy bird, often lives next to a person. From mid–January to the end of June, you can hear the 'drum roll' of woodpeckers - a trill from the vibration of branches under the rapid blows of the bird's beak. In good weather, the shot can be heard within a radius of 1.5 km.",
      },
      image: "https://live.staticflickr.com/65535/49339376578_e933426455.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3",
    },
    {
      id: 5,
      name: {
        ru: "Удод",
        en: "Hoopoe",
      },
      species: "Upupa epops",
      description: {
        ru: "Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.",
        en: "Hoopoes prefer to live in open landscapes with individual trees or groves. The most convenient for birds are forest-steppe and savanna. Hoopoe can choose places of residence near a person: pastures, vineyards, orchards.",
      },
      image: "https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3",
    },
    {
      id: 6,
      name: {
        ru: "Стриж",
        en: "Swift",
      },
      species: "Apus apus",
      description: {
        ru: "Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.",
        en: "The swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.",
      },
      image: "https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3",
    },
  ],
  [
    {
      id: 1,
      name: {
        ru: "Жаворонок",
        en: "Skylark",
      },
      species: "Alauda arvensis",
      description: {
        ru: "Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.",
        en: "Skylarks are migratory birds. Since the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has come off or not. Upon the arrival of the larks, the onset of spring and the time when it was time to plow the land were determined.",
      },
      image: "https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3",
    },
    {
      id: 2,
      name: {
        ru: "Соловей",
        en: "Nightingale",
      },
      species: "Luscinia luscinia",
      description: {
        ru: "Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.",
        en: "Nightingales sing from the beginning of May to the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.",
      },
      image: "https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3",
    },
    {
      id: 3,
      name: {
        ru: "Скворец",
        en: "Starling",
      },
      species: "Sturnus vulgaris",
      description: {
        ru: "Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.",
        en: "Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and fascinating phenomenon – a lot of birds seem to dance in the air, forming intricate figures that decrease and increase in the sky.",
      },
      image: "https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3",
    },
    {
      id: 4,
      name: {
        ru: "Иволга",
        en: "Oriole",
      },
      species: "Oriolus oriolus",
      description: {
        ru: "Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.",
        en: "The melody of the oriole's voice is compared to the sound of a flute. It is difficult for a person to see an oriole, since it lives high in trees. The oriole is not only very beautiful, but also a useful bird. It destroys poisonous caterpillars that are not eaten by other birds.",
      },
      image: "https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3",
    },
    {
      id: 5,
      name: {
        ru: "Свиристель",
        en: "Waxwing",
      },
      species: "Bombycilla garrulus",
      description: {
        ru: "У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.",
        en: "The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck the berries that are most difficult to get. During the courtship period, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.",
      },
      image: "https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3",
    },
    {
      id: 6,
      name: {
        ru: "Щегол",
        en: "Goldfinch",
      },
      species: "Carduelis carduelis",
      description: {
        ru: "Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю.",
        en: "Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the goldfinch's singing. Goldfinches get used to people, and can even return to the owner after they are released into the wild.",
      },
      image: "https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3",
    },
  ],
  [
    {
      id: 1,
      name: {
        ru: "Орёл",
        en: "Eagle",
      },
      species: "Aquila nipalensis",
      description: {
        ru: "В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров.",
        en: "In ancient times, the eagle was a symbol of the sun. Eagles often hover above the ground, while their movement speed can reach 240 km /h. The illusion of slow movement occurs due to the altitude of the flight - more than 700 meters.",
      },
      image: "https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3",
    },
    {
      id: 2,
      name: {
        ru: "Коршун",
        en: "Kite",
      },
      species: "Milvus migrans",
      description: {
        ru: "Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.",
        en: "Kites are large predators, they reach about half a meter in height, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.",
      },
      image: "https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3",
    },
    {
      id: 3,
      name: {
        ru: "Лунь",
        en: "Harrier",
      },
      species: "Circus cyaneus",
      description: {
        ru: "Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».",
        en: "A harrier is a small falcon. It feeds mainly on mouse–like rodents, the basis of its diet is voles, hamsters, mice. The plumage of the harrier can be ash-gray. The comparison 'gray as a harrier' is associated with such a bird.",
      },
      image: "https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3",
    },
    {
      id: 4,
      name: {
        ru: "Сокол",
        en: "Falcon",
      },
      species: "Falco peregrinus",
      description: {
        ru: "Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.",
        en: "The Latin name of the falcon Falco comes from the word 'sickle' because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The falcon's flight speed reaches 280-320 kilometers per hour.",
      },
      image: "https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3",
    },
    {
      id: 5,
      name: {
        ru: "Ястреб",
        en: "Hawk",
      },
      species: "Accipiter gentilis",
      description: {
        ru: "Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.",
        en: "All hawks are characterized by wide and short wings. Another distinctive feature is white 'eyebrows' above the eyes. Slavic vigilantes placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.",
      },
      image: "https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3",
    },
    {
      id: 6,
      name: {
        ru: "Филин",
        en: "Eagle owl",
      },
      species: "Bubo bubo",
      description: {
        ru: "Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.",
        en: "The flight of the eagle owl is silent, the vision is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, no animal preys on adult birds. But foxes and wolves attack the chicks.",
      },
      image: "https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3",
    },
  ],
  [
    {
      id: 1,
      name: {
        ru: "Альбатрос",
        en: "Albatross",
      },
      species: "Diomedea exulans",
      description: {
        ru: "Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния",
        en: "The albatross is the largest flying bird in the world. The wingspan reaches three and a half, the weight is ten kilograms. Albatrosses spend most of their lives in the air, covering huge distances over the ocean expanses",
      },
      image: "https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3",
    },
    {
      id: 2,
      name: {
        ru: "Олуша",
        en: "Booby",
      },
      species: "Sula nebouxii",
      description: {
        ru: "Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок",
        en: "The peculiarity of the blue-footed booby is not only the rich bright blue color of the paws, but also the fact that they are very warm. While other bird species warm the clutches with their bodies, the blue-footed booby does this with the help of paws",
      },
      image: "https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3",
    },
    {
      id: 3,
      name: {
        ru: "Буревестник",
        en: "Petrel",
      },
      species: "Puffinus griseus",
      description: {
        ru: "Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.",
        en: "The sizes of petrels are different. The smallest of them are up to 25 cm in length, the largest are up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as indicated by the very name of the bird.",
      },
      image: "https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3",
    },
    {
      id: 4,
      name: {
        ru: "Пеликан",
        en: "Pelican",
      },
      species: "Pelecanus",
      description: {
        ru: "Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.",
        en: "Pelicans are inhabitants of the seas and rivers. They walk clumsily, but they fly and swim well. They feed mainly on fish, arrange collective hunts — lined up in a semicircle, they flap their wings and beaks on the water and displace frightened fish in shallow water.",
      },
      image:
        "https://interesnyefakty.org/wp-content/uploads/Interesnye-fakty-o-pelikanah.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3",
    },
    {
      id: 5,
      name: {
        ru: "Пингвин",
        en: "Penguin",
      },
      species: "Aptenodytes forsteri",
      description: {
        ru: "Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.",
        en: "The male emperor penguin reaches a height of 130 cm, its mass can approach 50 kg. Of all modern penguins, this species is the largest. The penguin's diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.",
      },
      image: "https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3",
    },
    {
      id: 6,
      name: {
        ru: "Чайка",
        en: "Seagull",
      },
      species: "Larus argentatus",
      description: {
        ru: "Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.",
        en: "Seagulls inhabit the shores of seas, lakes, rivers, reservoirs, swamps, and often nest on islands. Since the end of the last century, seagulls have begun to appear in large cities, where they arrange nests on the roofs of buildings. All seagulls lead a colonial lifestyle.",
      },
      image: "https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3",
    },
  ],
];

export default birdsData;
