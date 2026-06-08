/*
 * Source of truth for every story page.
 *
 * Each entry mirrors the structure of STORY_CONTENT_TEMPLATE.docx so that the
 * page template can render the layout dynamically. New stories should be added
 * here; the page files in this folder are thin wrappers that re-export the
 * shared template configured with one of these entries.
 */

export const storiesData = {
  abdirahmanNourYoussef: {
    index: 1,
    slug: "abdirahman-nour-youssef",
    routePath: "/stories/abdirahman-nour-youssef",
    subjectName: `Abdirahman Nour Youssef`,
    country: `Somalia`,
    topic: `Social cohesion, Innovation, Youth leadership, Climate Action/Adaptation`,
    title: `How Somalia’s Youth Are Reimagining National Unity Through Climate Action`,
    impact: {
      intro: `Amid floods, and political fragility, young leaders like Abdirahman Yusuf are driving peacebuilding, green innovation, and entrepreneurship, proving that resilience, inclusion, and grassroots climate solutions can help rebuild resilient communities and reshape Somalia’s future.`,
      stats: [
        {
          value: `7.8M`,
          label: `people`,
          text: `Between 2021–2023, drought impacted 7.8 million people; El Niño floods in 2023 affected at least 247,000 people in informal`,
        },
        {
          value: `62,696+`,
          label: `households`,
          text: `Nature-based and climate-smart water systems supported by UNDP have benefited over 62,696 households with improved water access and climate resilience`,
        },
        {
          value: `6,285`,
          label: `Hectares of rangeland`,
          text: `UNDP Rehabilitated 6,285 hectares of rangeland and expanded water harvesting infrastructure (wells, canals, desalination) helping to reduce vulnerability to drought and floods.`,
        },
        {
          value: `1800`,
          label: `Individuals / Host Communities / IDPs`,
          text: `In Beledweyne, UNDP partners with the Saameynta Joint Programme to support livelihoods for IDPs and host communities — 1800 individuals received training and economic support in 2023, including youth, women, and vulnerable groups.`,
        },
        {
          value: `500`,
          label: `Youth`,
          text: `Somalia Youth Climate Platform (SYCP) (2024–2025), supported by UNDP, mobilised ~500 youth (35% women) from 46 organisations to lead climate action, policy advocacy, and community solutions.`,
        },
      ],
    },
    introParagraphs: [
      `In the spring of 2023, the Shabelle River in central Somalia burst its banks, inundating entire neighborhoods of Beledweyne, the capital of the Hiraan region. Thousands of families were displaced, as floodwaters surged through homes and farmland.`,
      `For many residents, this flood is not an isolated disaster. It is part of a relentless pattern that has repeatedly submerged their streets, ruined their crops, and stranded their families. Beledweyne has been through too many cycles of prolonged droughts, flash floods and tensions over dwindling resources.`,
      `Somalia continues to face significant challenges across environmental, economic, political, security, societal, and human dimensions, highlighting the need for continued and focused efforts. 26-year-old Abdirahman Yusuf stands at the intersection of the country’s greatest poly-crisis challenges, and its greatest hope in its youth.`,
    ],
    openingQuote: {
      text: `“Our people have faced 30 years of conflicts, economic fragility and disasters… most of the cities lack necessary resources, including clean water and security. But our population is more than 75% of young people. They have a lot of energy and a lot of potential.”`,
      highlightedPhrases: [
        `Conflict`,
        `Economic Fragility and Disasters`,
        `Clean Water`,
        `Security`,
      ],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `He was only eighteen when, in 2017, he and six friends established Maan-Dhis, a youth-led organization that aimed to unite young people from across Somalia, to drive solutions in their communities. In its early years, Maan-Dhis focused on peacebuilding, organizing community-based dialogues to reduce conflicts. By 2020, the organization reformed its strategy around four main pillars: peacebuilding and conflict solutions, environmental sustainability and climate action, socioeconomic development and livelihood, and good governance and women’s empowerment.`,
      },
      {
        type: "pull-quote",
        text: `“In Somalia, our children, our young people and women, they have the potential to address challenges facing our communities, but the opportunities and experiences they have are limited. That is why our organization Maan-Dhis is committed to engaging youth and grassroots communities to build their capacity and engage them in dialogue over innovative solutions.”`,
      },
      {
        type: "paragraph",
        text: `Today, Maan-Dhis has around 3,000 youth members across Somalia and works closely with government, local communities, and international partners like UNDP. Its initiatives include climate action advocacy, clean-up campaigns, climate education, solar street-lighting projects, and livelihood programs that have trained more than 1,500 young people, including women, displaced persons, and persons with disabilities.`,
      },
      {
        type: "paragraph",
        text: `Abdirahman serves as an Africa Climate Champion under UNDP sponsorship, leading research and dialogue on community-based climate innovation. He has represented Somalia in COPs assemblies since the COP27 in Cairo.`,
      },
    ],
    sectionThreeQuote: `“I can’t see climate action, peacebuilding, and resilience as three separate issues that plague Somalia simultaneously. Environmental crises such as floods and droughts often trigger conflicts over scarce resources. Building peace enables communities to focus on climate adaptation. In the meantime, strengthening climate resilience reduces the risk of new conflicts, and grants us the space to rebuild our nation.”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `In Baladweyne, Maan-Dhis works with local communities, the government, and donors to develop flood-control systems and climate-smart agriculture solutions. Youth in Somalia generally face social and cultural barriers, including limited roles in decision-making and leadership, particularly for young women. Breaking through such barriers, Abdirahman focuses on youth empowerment and knowledge transfer. The Somalia Entrepreneurship Summit, which he organizes annually with Maan-Dhis, brings together government representatives, private sector leaders, refugees, academics, and youth innovators to promote local enterprise.`,
      },
    ],
    sectionFourQuote: `“Mandis is unique in Somalia for being entirely youth-led and for bridging local and national leadership with international partners. As a result of youth advocacy, in 2023, the government registered around 3,000 small enterprises.”`,
    sectionFourDetailsBlocks: [
      {
        type: "paragraph",
        text: `By 2025, 92 more youth-led enterprises were added to the registry, promising growth in entrepreneurship and innovation among the country’s youth. Despite cultural and financial barriers, he described how Somali youth are breaking social taboos, building small enterprises, and gaining recognition from government and global partners alike.`,
      },
    ],
    vision: {
      text: `For Abdirahman, success means seeing young people shape policy, strengthen livelihoods, and prove that Somalia’s future lies in the hands of its youth, a generation redefining leadership through unity, innovation, and hope.`,
      highlightedPhrases: [`Unity`, `Innovation`, `Hope`],
    },
  },

  aliBendahbia: {
    index: 2,
    slug: "ali-bendahbia",
    routePath: "/stories/ali-bendahbia",
    subjectName: `Ali Bendahbia`,
    country: `Morocco`,
    topic: `Youth empowerment – Education – Resilience building – Innovation and Technology`,
    title: `Digital Classrooms, Local Resilience: The Startup Bringing Interactive Learning to 50,000 Moroccan Students`,
    impact: {
      intro: `A young Moroccan innovator is transforming education through digital learning, reaching 50,000 students while leading major crisis response, from raising USD 400,000 during COVID-19 to co-founding Operation Atlas after the 2023 earthquake.`,
      stats: [
        {
          value: `$38M`,
          label: `Budget over three years`,
          text: `UNDP’s Digital for Sustainable Development Hub (D4SD): Morocco and UNDP launched a Digital for Sustainable Development Hub with a US $38 million budget over three years.`,
        },
        {
          value: `20`,
          label: `Young Leaders`,
          text: `UNDP Morocco implemented an initiative under this theme focusing on youth and green economy: The first cohort of Youth For Sustainability included 20 young leaders aged 18–30.`,
        },
      ],
    },
    introParagraphs: [
      `When 25-year-old Ali Bendahbia speaks about the future of Morocco, he never begins with entrepreneurship skills and high-salaried job packages and job opportunities. Instead, Ali speaks about school classrooms and live simulation tools; gamified curriculums, and digital platforms designed for social development and interactive, inclusive quality education.`,
    ],
    openingQuote: {
      text: `“We are a generation with a cellphone attached to our hands but very little knowledge on how to best use it in our favour and for our own good for innovation and social development. Our children are expected to do nothing but study until they reach college. Internship opportunities begin after graduation. But that is too late, and it must change.”`,
      highlightedPhrases: [`Innovation`, `social development`, `change`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `Ali grew up in Fès, a city rich in history and tradition, but opportunities for self-expression were limited, and innovation was something admired from afar rather than nurtured at home. As a teenager, he often felt that curiosity was something to be managed, not encouraged. Yet, despite these constraints, his mother’s work with women affected by domestic violence offered him a window into compassion, courage, and social responsibility.`,
      },
      {
        type: "paragraph",
        text: `While surfing on his phone one day, he found an invitation for university students to join a Model United Nations conference in Germany. He was still in High School, but that didn’t stop him from securing his spot and winning a prize for Best Speaker. It was the first time he found himself in an environment where students debated freely, experimented boldly, and viewed participation as a natural part of youth.`,
      },
      {
        type: "paragraph",
        text: `Back home, Ali started university determined to chart a path for change. He organized TEDx talks with experts in all fields, including social entrepreneurs. That’s how he wove a network of social work trailblazers. It’s where he met his mentor who soon after, became his partner in many of the initiatives that followed.`,
      },
      {
        type: "paragraph",
        text: `Today, he sits at the helm of his emerging e-learning start-up, Trainup Lab. It started as a small e-learning project built by a handful of volunteers to support students during the COVID-19 lockdown. Five years on, the initiative grew to a full-size start-up, partnering with the Ministry of Education to reach fifty thousand students across Morocco, with tailor-made interactive, culturally relevant digital learning programmes becoming the first initiative in the country to officialize soft skills classes.`,
      },
      {
        type: "pull-quote",
        text: `“The goal is not merely to place devices in classrooms, but to reshape how learning happens. We explore innovative methodologies, such as gaming for skill-building, peer-learning activities, and modules that cultivate critical thinking, creativity, and entrepreneurship. These tools give students the chance to engage with education as active learners, not passive recipients.”`,
      },
      {
        type: "paragraph",
        text: `The offices of Trainup are located in Casablanca. The open space hums with young developers, designers, and educators zigzagging through the space in quick movements, reviewing new lesson modules and exchanging rapid-fire ideas. A white door stands locked in the background, its blinking red light spelling out ON AIR in rhythmic pulses.`,
      },
      {
        type: "paragraph",
        text: `Ali’s vision for Trainup was shaped long before this project took form. During the COVID-19 pandemic, he co-created a nationwide youth initiative, called Ata’a Foundation, which raised USD 400,000 in less than one week, delivering devices, digital materials, and training programmes that would later inspire Trainup’s model.`,
      },
      {
        type: "paragraph",
        text: `Soon after, he co-founded Operation Atlas, a volunteer effort that proved vital when the 6.8-magnitude earthquake struck the Atlas in 2023, killing nearly 3,000 people and destroying more than 300,000 homes. Within hours, Ali was among the first volunteers to reach remote villages high up on the Atlas Mountain range. He partnered with private sector firms to create warehouses, coordinate aid, and reach remote areas where official aid routes were damaged and impassable. He spent months alongside families as they rebuilt.`,
      },
    ],
    sectionThreeQuote: `“I sat once next to a young boy who had lost his home, his cousins, and most of his belongings in the aftermath of the earthquake. He was barefoot in freezing weather. So I shared my yogurt with him, and he dipped his finger in it. He was curious about its texture. He had never seen a yogurt cup before. It hit me then. Emergency response in times of crisis is an ongoing necessity in Morocco. Our youth need more exposure and education. We must create a system where education is fun, engaging and very accessible to all Moroccan children, not just those living in big cities.”`,
    sectionThreeDetailsBlocks: [],
    vision: {
      text: `For Ali, emergency response, poverty eradication, and social development are all interlinked. Innovation must be rooted in service, and empowering young Moroccans to engage with knowledge, and to collectively take agency for their future, can only strengthen communities far beyond the classroom.`,
      highlightedPhrases: [],
    },
  },

  olaAlaghbaary: {
    index: 3,
    slug: "ola-alaghbaary",
    routePath: "/stories/ola-alaghbaary",
    subjectName: `Ola Alaghbaary`,
    country: `Yemen`,
    topic: `Youth empowerment – Civic Education – Gender Equality – Women leadership in peacebuilding`,
    title: `Building the Future Together: How One Young Woman Is Empowering Yemen’s Next Generation`,
    impact: {
      intro: `Ola’s journey from a rural village to global platforms, empowering youth and women`,
      stats: [
        {
          value: `1,500`,
          label: `Young People`,
          text: `In a UNDP - KSrelief project from May 2023 to October 2024, over 1,500 young people were trained in vocational and business skills across 24 districts in multiple governorates including Marib, Taiz, Aden, Abyan, Ad Dhale, Al Maharah, Hadramaut, Lahj, and Shabwah. More than 58% of the trainees were women.`,
        },
        {
          value: `2.1M`,
          label: `people`,
          text: `Peacebuilding & mediator training: ≈2.1 million people across 37 districts in eight governorates were reached through the ERRY Joint Programme (rural resilience, basic services, livelihoods, social cohesion).`,
        },
        {
          value: `1,046`,
          label: `Local Mediators`,
          text: `The ERRY Joint Programme has trained 1,046 local mediators in conflict resolution and led 265 dialogue sessions plus 81 community–led peace projects`,
        },
      ],
    },
    introParagraphs: [
      `In 2022, as world leaders gathered in New York for the United Nations General Assembly, a young woman from Yemen appeared on the screen addressing her audience in the General Assembly hall. Her voice was steady, her message was clear: Youth and women of Yemen are essential partners in peacebuilding, not as symbols, not as afterthoughts, but as the people who keep their communities alive.`,
      `Few in the room knew that behind her calm presence was a life marked by immense suffering as a result of displacement, lost friendships, shelled classrooms, and the daily uncertainties of growing up in a city which has stood witness to years of conflicts and unrest. Ola, who was only 22 years old, spoke for a generation of Yemeni youth that believes that peace is possible, and a future where cooperation, dignity, and dialogue will prevail.`,
    ],
    openingQuote: {
      text: `“I was raised in a small village. As children we led a simple life, and we learned to sustain our livelihoods on agriculture. I finished school in my village. In 2011, I moved to the big city and it was a cultural shock. I realised how big the world is. I joined university, and I chose to study Law. That’s when I started to figure out what I want in life and begin my journey with volunteer work.”`,
      highlightedPhrases: [`Livelihoods`, `Agriculture`, `Volunteer`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `Ola moved to Taiz, a city perched 1400 meters above the Red Sea, to pursue her university education. She walked long distances, saved every stipend she earned from attending NGO workshops, and studied whenever she could find a quiet space. She began volunteering with her classmates, raising funds to repair their university’s broken chairs, outdated blackboards, and crumbling walls. “We were just three girls,” she recalls, “and we fixed our university ourselves.” That first success lit the path that would eventually define her life’s work.`,
      },
      {
        type: "paragraph",
        text: `But in 2015, when the conflict started, Ola’s world collapsed. She watched the classrooms she once painted with her own hands turn into scenes of devastation.`,
      },
      {
        type: "pull-quote",
        text: `“I remember those moments when every time I reached out for my WhatsApp group, which included my volunteer friends working with me on many initiatives, and I’d see profile photos changed with a black ribbon on them.”`,
      },
      {
        type: "paragraph",
        text: `But with devastation, her resolve grew steadfast. By 2017, Ola was a recognised voice in her community, negotiating access to water, creating safe spaces for youth, and building the foundations of the Sheba Youth Foundation for Development. With “Sheba Youth”, as she proudly calls it, she envisioned building a bridge between humanitarian needs, long-term development, and community-led peacebuilding.`,
      },
    ],
    sectionThreeQuote: `“I joined a fellowship programme in Lebanon for three months where I learned all about the conflict dynamics, conflict transformation, and peacebuilding. This experience was important because it helped shape my decision to return and establish an organization working on peacebuilding. And so, it all began... It was a hard journey to establish a foundation that transcends the small scope of an initiative. Finding the space, engaging volunteers and securing funding streams were just a few of the many hurdles we faced. But we persevered and we started to build trust and credibility in our communities.”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `With all the passion and curiosity that Ola and her team drew on to kickstart the foundation, they were conscious of their lack of experience and the urgent need to develop the skill sets necessary to build a sustainable and impactful organisation.`,
      },
      {
        type: "paragraph",
        text: `They participated in a number of UN led capacity-building programmes including project management, conflict mediation. Throughout her journey, UNDP has remained one of the steady partners helping her turn ideas into sustainable action, supporting Sheba Youth Foundation’s activities.`,
      },
      {
        type: "pull-quote",
        text: `“These partnerships not only build our capacity, but they also give us stability and long-term vision.”`,
      },
      {
        type: "paragraph",
        text: `In Taiz City, Ola is known as the young woman who helps mediate disputes over water, a resource that is increasingly scarce in Yemen. But for Ola, her real breakthrough is her work on women empowerment and participation in decision making. Her path has also presented new horizons for young women who grew up in rural Yemeni communities. Her own sister was able to travel, study, and receive a scholarship abroad. Today, Ola is pursuing her Master’s degree in a leading university in Cairo, Egypt. She’s also contributing to her family back home.`,
      },
      {
        type: "pull-quote",
        text: `“I feel proud at how I’ve carved my role in my family. They have supported my dreams and have encouraged my journey. Now, I’m supporting them. I’m proud that as a woman and as a daughter, I have become the economic strength of my family.”`,
      },
      {
        type: "paragraph",
        text: `Ola works each day with the conviction she brought to the General Assembly back in 2022, that her generation is ready to advance peace across Yemen. Her work includes training young people in dialogue and conflict resolution, creating community councils, and partnering with national and international organisations to open new pathways for civic engagement. Hundreds of Yemenis have already passed through Sheba Youth’s programmes. Many are now leading initiatives of their own.`,
      },
    ],
    vision: {
      text: `“If we don’t prepare young people and women now, there will be no one ready to sit at the peace table when the conflict is over.”`,
      highlightedPhrases: [`Women`, `Peace`, `Conflict`, `Young People`],
    },
  },

  sadaaHassanAqar: {
    index: 4,
    slug: "sadaa-hassan-aqar",
    routePath: "/stories/sadaa-hassan-aqar",
    subjectName: `Sada’a Hassan Aqar`,
    country: `Yemen`,
    topic: `Youth empowerment – Civic Education – Gender Equality – Women leadership in peacebuilding`,
    title: `The Voice of Peace in Marib — How Saa’daa is Advancing Women Empowerment`,
    impact: {
      intro: `Empowered through UNDP’s SIERY Project, Saa’daa is advancing women’s leadership and peacebuilding in Yemen.`,
      stats: [
        {
          value: `1.3M`,
          label: `People`,
          text: `As of December 2025, UNDP Yemen’s ESPECRP, with the World Bank, has enhanced food security resilience and sustainable livelihoods by providing over 1.3 million people with improved access to basic services like water and food, delivering cash and nutrition support to 131,178 beneficiary households, and strengthening the local economy by supporting 10,020 micro, small, and medium enterprises.`,
        },
        {
          value: `6,599`,
          label: `Jobs`,
          text: `UNDP’s SIERY Project, supported by the European Union, has supported the creation of 6,599 jobs through smallholders and small and medium enterprises supported with technical trainings and grants.`,
        },
        {
          value: `9,848`,
          label: `People`,
          text: `Support for women entrepreneurs & small businesses: In rural resilience efforts, UNDP helped 9,848 (mostly women) dairy producers and supported 10 dairy collection centers plus 10 food processing facilities, and 12,500+ women received training and financial support for income generating activities.`,
        },
      ],
    },
    introParagraphs: [
      `The roads leading into Marib are bustling with life. Rows of makeshift shelters stretch beyond the horizon, some are transient tents but most others have found temporary stability in mudbrick and stone. Schools are crowded, and children run chasing small balls and their own versions of big future dreams. At every corner of the mountainous alleyways that define the landscape, women are busy with their daily chores, building their lives and managing their livelihoods.`,
      `Marib carries the legacy of an ancient Sabaean history and the future of a rich agro-oil economy. Since 2021, the governorate has become one of Yemen’s largest host communities for internally displaced people, housing more than two million individuals. Its population quickly multiplied, and its already-stretched services were pushed far beyond capacity.`,
      `Yet, amid this immense strain, Saa’daa, a young woman who grew up in Al Wadi, one of fourteen districts that shape the geography of Marib, uses education, inclusion, and dialogue to help her community adapt.`,
      `Saa’daa has one goal. She is carving not just a path, but a bridge between the daily challenges of life, and the inclusive future she is dreaming of, to ensure that women and girls are not sidelined as Marib struggles to absorb the weight of the displacement.`,
    ],
    openingQuote: {
      text: `“Women play a big role in our community — we can be a cause for rift or a source of peace,’ she tells the room, her eyes steady. ‘I chose to work so that women become the strength that unites our communities.’”`,
      highlightedPhrases: [`Community`, `Peace`, `Women`, `Unites`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `The eldest daughter in her family, her father encouraged her to pursue education, even as most girls in the district remained at home. She became the first woman in her community to earn a diploma in English. She excelled academically and taught Arabic and science in local schools.`,
      },
      {
        type: "paragraph",
        text: `When her studies were disrupted, Saa’daa continued to teach in schools and find creative ways to continue her learning journey. Early teaching experience instilled values of justice, honesty, and compassion. She won national literary competitions for her war-themed short stories and creative writing.`,
      },
      {
        type: "paragraph",
        text: `In Egypt, where her family temporarily settled, she never faltered in her quest. She gained new technical skills that would shape her leadership back home. Returning to Yemen in 2023, she became familiar with the UNDP-supported SIERY Project. Her participation in the "Women for Local Governance Fellowship" helped fast-track her career as she rose to become Head of the National Women’s Committee (NWC) in Marib.`,
      },
      {
        type: "pull-quote",
        text: `“I was constantly on the lookout for opportunities. I joined an international organisation as an education coordinator. It was a great professional experience for me and an opportunity to network locally. I stayed with them for close to two years until a great opportunity came up to join the government ecosystem again. I was appointed as the Head of the National Women's Committee branch in Marib.”`,
      },
      {
        type: "paragraph",
        text: `In her role at the NWC, Saa’daa has transformed possibility into reality. She built a volunteer team of ten women, leading programmes that have trained over 125 women and girls in governance, and leadership. She revived a council for girls’ education, aiming to reach 30,000 young learners annually, and launched vocational projects that provide 55 women, many of them widows, with skills in sewing and income generation. Her cyberbullying workshops have saved girls from exploitation, with impacts rippling far beyond her direct trainees.`,
      },
      {
        type: "pull-quote",
        text: `“I feel my job with NWC is a calling. I am in a position to proactively contribute to the efforts to demarginalise women from public office [...] I was provided with an office. I created my team. I started to network. We got into several programs aimed to build our capacity and the capacity of women in my municipality. We were in schools and had media programs. We also initiated the first step to partner with centers which focus on developing women’s political skills as well as women in the police force. We coordinated many multisectoral initiatives on illiteracy, women’s health and girl education.”`,
      },
      {
        type: "paragraph",
        text: `Today, as Marib continues to shoulder the weight of displacement and recovery, Saa’daa’s journey is a constant reminder that resilience does not emerge by accident. It is built, nurtured, and multiplied when women lead. She knows that individual effort is not enough.`,
      },
    ],
    sectionThreeQuote: `“Women are everywhere in the response; teaching, organising, negotiating. But too often, they are scattered, their impact diluted.”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `Saa’daa dreams of building a platform for women peacebuilders in Marib, one strong voice that can influence policy, shape local governance, and protect the gains women have carved out at great personal cost.`,
      },
    ],
    vision: {
      text: `“Every step I took since joining the SIERY Project was a turning point in my life. I was surrounded by girls who couldn’t see a different path for themselves. I really wanted to show them that young women could pursue education, work, and financial independence, while still protect their cultural traditions and respect them. I wanted to set that positive example. If we enable young women, we will have a more just, more stable, and more inclusive Yemen.”`,
      highlightedPhrases: [
        `Life`,
        `girls`,
        `women`,
        `independence`,
        `Just`,
        `Stable`,
        `Inclusive`,
      ],
    },
  },

  gabbyFraidy: {
    index: 5,
    slug: "gabby-fraidy",
    routePath: "/stories/gabby-fraidy",
    subjectName: `Gabby Fraidy`,
    country: `Lebanon`,
    topic: `Social cohesion and Resilience Building, Gender Equality & Women’s Empowerment, Youth leadership`,
    title: `First Response, Lasting Impact: Gabby Fraidy’s Model for Building Connected, Crisis-Ready Communities in Lebanon`,
    impact: {
      intro: `UNDP’s YLP partner Gabby Freida’s story highlights the role youth play in supporting displaced families and crisis-affected communities in Lebanon`,
      stats: [
        {
          value: `2.7M`,
          label: `People`,
          text: `Under the broader UNDP response to the Syrian crisis impacts in Lebanon, UNDP’s resilience and local development work (e.g., livelihoods, basic services) benefited ~2,744,996 people — including both displaced Syrians and Lebanese host communities.`,
        },
        {
          value: `5M`,
          label: `People`,
          text: `UNDP’s long-term support to Lebanese host communities and displaced Syrians has benefited over 5 million people across Lebanon through 854 projects since 2014.`,
        },
      ],
    },
    introParagraphs: [
      `In Lebanon’s modern history, the southern region has repeatedly witnessed border tensions which sometimes escalated to armed conflicts, disrupting daily life and forcing families to flee their homes.`,
      `In 2023, the cross-border clashes intensified, rippling through the country, causing a surge of displacements, and imposing significant strain on infrastructure and the already fragile economic situation across cities in Lebanon.`,
      `Gabby Fraidy was 22, a social worker who was recognized as an influential young woman in her community. Her family had to leave their home in the suburbs of Beirut in search for safer grounds. Looking for a safe place to start, she found a school next door, which had been converted to house 21 families seeking shelter from the war. Her first interventions focused on providing immediate emotional support and practical aid to displaced children and families.`,
    ],
    openingQuote: {
      text: `“I had nothing to offer but a small ball and my skill as a social worker, but I knew this was enough to give me the courage to knock on the door and offer my services to the displaced families. The children were shy and scared. But it wasn’t long till they all joined in and started to look forward to our daily play circle. It was not just a circle for playing with the ball, it became a circle of trust for those children. A moment in their days when life became normal and safe.”`,
      highlightedPhrases: [`displaced families`, `trust`, `normal`, `safe`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `For two weeks, Gabby juggled a daily play session at the school next door, along with her coordination work at an INGO conducting humanitarian services to war affected communities, and her volunteer tasks to distribute essential medical supplies to schools which were repurposed as refugee centres across the country.`,
      },
      {
        type: "pull-quote",
        text: `“This was no easy job for a young woman, especially when I had to drive alone for long distances to reach some of those schools. The blasts were never too far from earshot, and it was very stressful. But I knew how to push through and focus on the children’s welcoming faces that were always eagerly waiting to welcome me.”`,
      },
      {
        type: "paragraph",
        text: `Gabby had already been a frontline volunteer on many fronts. The year 2020 had hit Lebanon hard, with a nation-wide shut down due to COVID-19 followed by the Beirut Port explosion. The explosion was estimated to be the largest non-nuclear, non-military explosion ever recorded in human history. It caused massive destruction in residential areas, leaving over 300 thousand people displaced and in urgent need of basic supplies. Gabby focused her efforts on humanitarian relief for women, elderly people, and teenagers in the affected neighborhoods, addressing overlooked needs such as hygiene kits, and creating structured community networks to track and respond to local vulnerabilities.`,
      },
      {
        type: "pull-quote",
        text: `“Our country has had no time to fully recover from one challenge before it was hit by another. Volunteer work is a way of life for me. I found myself in leadership positions too early and I had to rise to the challenge.”`,
      },
      {
        type: "paragraph",
        text: `Leading a team of volunteers in areas where the rubble from the explosion was still steaming, Gabby sought to create an inclusive approach to engage with all affected communities, leaving no one behind.`,
      },
    ],
    sectionThreeQuote: `“I created communities of work which involved elderlies as well as teenagers working together. Giving these two, often marginalized age groups agency was not only effective, it also fast-tracked my leadership skills and allowed me to listen and learn from the people I was serving. Victims of the blast where people with many stories to tell.”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `Gabby’s efforts to empower women and engage communities gained attention from UNFPA, which led to her nomination as a young influential woman on Women’s Day for her impactful work with communities affected by crises. She has partnered with UNDP’s Youth Advisory Board to connect with participating youth and amplify her impact across Lebanon.`,
      },
      {
        type: "paragraph",
        text: `Her ambition sees no limits to the services she can provide to her community. She has created a Facebook page providing CV crafting support. With her access to the NGO ecosystem of Lebanon, she also uses her page to network and connect people to the service providers they seek. Sitting at the helm of her newly established NGO, Gabby sees her dream of a society that pays forward and continues to give back, become a reality at the national scale.`,
      },
    ],
    vision: {
      text: `“My experience has taught me how structured support, collaboration, and providing a platform for young voices can transform grassroots ideas into sustainable community solutions. I believe in the power of youth-led resilience and development, and I plan to contribute to create an environment which focuses inclusion, empowerment, and creative problem-solving through my work.”`,
      highlightedPhrases: [
        `voices`,
        `solutions`,
        `resilience`,
        `youth-led`,
        `environment`,
      ],
    },
  },

  moukhtarItani: {
    index: 6,
    slug: "moukhtar-itani",
    routePath: "/stories/moukhtar-itani",
    subjectName: `Moukhtar Itani`,
    country: `Lebanon`,
    topic: `Social cohesion, Innovation, Youth leadership`,
    title: `From Pillows to Purpose: How Mokhtar Itani Leverages Small-scale Ideas to Create Wide-reach Community Impact`,
    impact: {
      intro: `UNDP YLP alum Mokhtar Itani mobilized volunteers and partnerships to produce thousands of pillows for displaced families in Beirut. He showcases the power of youth-led innovation, community solidarity, and digital tools in strengthening resilience and social cohesion during crisis.`,
      stats: [
        {
          value: `4000`,
          label: `Youth`,
          text: `~4,000 youth in Lebanon have joined UNDP’s Youth Leadership Programme over its 10year implementation. These participants have launched over 400 social innovation projects impacting communities.`,
        },
        {
          value: `1,200`,
          label: `YLP Alumni`,
          text: `UNDP has supported over 1,200 committed YLP alumni through partnerships with Lebanese institutions to amplify youth led development work`,
        },
      ],
    },
    introParagraphs: [
      `It was another busy morning in the Mazraa neighborhood in southwestern Beirut, with its narrow streets and main thoroughfares intersecting with small shops, schools, and local markets.`,
      `Since the escalation of hostilities in October of 2023, thousands had fled the border region in the south. Across the street from Corniche alMazraa, one of the neighborhood’s vital inland arteries, half a dozen men sat at their tables on the pavement, their backs bent, their hands rapidly passing colorful cloth through the sharp blades of their sewing machines. Their rhythmic clatter blended with the bustle of Mazraa’s streets.`,
      `Inside a small shop behind the sewing crew, Mokhtar Itani stood at a large wooden table, scissors in hand, cutting precise rectangles of cloth. Volunteers and family members moved around him, stuffing pillowcases with fluffy fillings and stacking them neatly for distribution.`,
      `Despite the neighborhood’s constant movement, the workshop felt like a small island of purpose and calm, a place where skill and a strong sense of community converged to turn scraps of fabric into comfort for those displaced by conflict.`,
      `Raised in Ras Beirut and now living in Bachamoun, Moukhtar’s journey began at home. What would later grow into a city-wide response started as a small family effort, with his mother sewing pillows and Moukhtar selling them online through his platform, DeepSleepLB.`,
    ],
    openingQuote: {
      text: `“The idea was to produce 300-400 pillows for those displaced who were arriving day after day in large numbers with nothing to sleep on. When the war started, I reached out to my uncle, who owns a shop in Corniche El Mazraa, and decided to use my own savings to begin production. I recorded a simple video on my phone and shared it online, inviting people to support or volunteer. I posted an appeal online and watched in awe how it picked up like wildfire. Influencers amplified the story, volunteers poured in, and donations followed.”`,
      highlightedPhrases: [`displaced`, `war`, `volunteer`, `donations`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `By the end of five weeks, Mokhtar’s team had produced 12,000 pillows; raised over $14,000; and mobilized over 100 volunteers. In a city facing waves of displacement and economic hardship, with over 1,000,000 people internally displaced, Mukhtar’s initiative transformed simple materials into tangible comfort, offering warmth and dignity to those who had fled their homes in search of safety.`,
      },
      {
        type: "pull-quote",
        text: `“In situations like this, you don’t experience frictions between conflicting segments of society. Everyone was working together to help. Really a beehive at a large level. I networked and reached out to UNDP and other NGOs I was part of. And when funds ran low, a cloth manufacturer gave us 3,000 meters of cloth, so the wheel of production kept turning. Yes, we were tired, but the upside is that we felt we were part of our own country’s history-making journey.”`,
      },
      {
        type: "paragraph",
        text: `Partnerships played a key role in expanding Mokhtar’s reach. Joining the UNDP Advisory Board, he gained exposure to large-scale programs, advisory processes, and peer collaboration. Through the Youth Leadership Programme he connected with other youth leaders, shared experiences, and applied his social entrepreneurship skills to broader initiatives aimed at fostering youth engagement and innovation.`,
      },
      {
        type: "paragraph",
        text: `Mokhtar, a graduate of computer science and a start-up pioneer since the age of 9, has consistently sought out challenges that bridge innovation with social impact. Community service was not an act of kindness, but rather an entrenched family tradition.`,
      },
      {
        type: "pull-quote",
        text: `“As a three-year-old, my mom got me a series of scientific French books which inspired me to be an inventor. Then in grade 6, a school magazine called Science and World visited. It was filled with technology unfolding with a futuristic vision. That’s when I became obsessed with innovation… It was two years later that I started teaching myself all the how-tos on the internet. I found the Braille system for the blind and got inspired to develop a way to take a picture from a text to translate it, you can also listen to it, using OCR technology.”`,
      },
      {
        type: "paragraph",
        text: `Mokhtar’s project earned him a Gold Medal at a national competition. He continued to pursue innovation through university, joining internationally acclaimed competitions, which paved the way for expanding his connections and perspective. In 2017, he joined the UNDP Youth Leadership Programme YLP3, developing a project to digitize the Lebanese curriculum into an e-learning platform for working youth who had dropped out of school.`,
      },
    ],
    sectionThreeQuote: `“I would meet young people who left school because they had to support their families… I wanted to create a way for them to work and study at the same time.” By 2023, Mokhtar was already a veteran of social innovation committed to empowering young Lebanese people to stay agile in a country plagued with violence and insecurity. “In a fragile context, before we teach young people about social entrepreneurship, we must free them financially and increase their employability. Teaching them the agility to learn new tools, and to stay on top of what the job market needs when conflict prevents physical mobility, are all key to prepare them for innovation.”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `After the success of his pillow distribution initiative, Mokhtar firmly believes that digital technology is a key contributor for social cohesion, playing a important role in supporting youth and volunteer work for a sustainable long-term planning for resilience, peace, and stability building.`,
      },
    ],
    vision: {
      text: `“In Lebanon, you can only either be a pessimist or an optimist. I choose to see opportunity. Social media and innovation became tools for me to unite people, turning individual efforts into collective impact. We have a great opportunity to nurture this innovative spirit and make change happen starting with our youth.”`,
      highlightedPhrases: [
        `opportunity`,
        `innovation`,
        `unite`,
        `collective impact`,
        `change`,
        `youth`,
      ],
    },
  },

  zahiaTahirSagr: {
    index: 7,
    slug: "zahia-tahir-sagr",
    routePath: "/stories/zahia-tahir-sagr",
    subjectName: `Zahia Tahir Sagr`,
    country: `Sudan`,
    topic: `Youth empowerment – Crisis response and recovery – Women leadership in peacebuilding – Women empowerment`,
    title: `Beyond Survival: Zahia Tahir’s Mission to Mobilize, Empower, and Unite Sudan’s Women`,
    impact: {
      intro: `Zahia, a young Sudanese leader, mobilizes her community in New Halfa to support thousands displaced by war. Her work bridges humanitarian action, women’s economic empowerment, and youth leadership amid Sudan’s compounding crises.`,
      stats: [
        {
          value: `6.3M`,
          label: `Citizens / Refugees / Migrants`,
          text: `People reached by UNDP interventions since the conflict began: Over 6.3 million Sudanese citizens, refugees and migrants have had their lives improved through UNDP’s integrated crisis response and early recovery activities.`,
        },
        {
          value: `200`,
          label: `Youth Peace Ambassadors`,
          text: `Youth peacebuilding and mediation outputs: More than 200 Youth Peace Ambassadors were trained, along with 640 youth in mediation, human rights and conflict resolution — providing them with knowledge to support community dialogue and peace`,
        },
        {
          value: `4,600`,
          label: `Women`,
          text: `Women’s economic and protection support: UNDP, in partnership with UN Women, has reached 4,600 women with interventions across states that include agriculture, business development and financial inclusion support activities.`,
        },
      ],
    },
    introParagraphs: [
      `In the heart of Sudan’s war, Zahia Taher stays focused on what has become her daily routine. Clusters of tents and displacement centers now dot her normally flat desert landscape. There is no end in sight to the thousands of families arriving at her small locality of New Halfa. With more than eleven million people forced to flee across the country, many have landed in New Halfa seeking refuge, shelter, and immediate medical care.`,
      `Zahia recalls the days following the first waves of people arriving to New Halfa in 2024, New Halfa is a small town located in eastern Sudan. Her community suddenly became a beehive of lifesaving activities; transforming schools into shelters for thousands of displaced families, providing food, medical aid, and psychological support, founding the New Halfa Emergency Room and eventually coordinating the region’s first refugee center, which became a model for forty others that followed.`,
    ],
    openingQuote: {
      text: `“That first day, we witnessed the arrival of these large trucks full of people. We call them ‘Jambo’. They had nothing, no luggage, no furniture. For hours, we just stood in shock as the trucks kept coming in. We had to quickly organize. Some were holding the kitchens; others dealt with medical emergencies; or were coordinating tents and housing needs. We were young, but the learning curve was fast and steep… We were working on all fronts, inside to coordinate the living needs, and outside, to raise funds and collect donations.”`,
      highlightedPhrases: [`shock`, `organize`, `medical`, `donations`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `Zahia saw that women and children were hit the hardest. In her immediate response, she pushed for the provision of sanitary products as part of the basic needs package. She stressed that preserving women’s dignity and enabling them to move freely was a first step to build their resilience.`,
      },
      {
        type: "paragraph",
        text: `Most of the arriving women were weary of repeated moves before finally finding some resemblance of a home in New Halfa. They were widowed, orphaned, and many were the sole providers for their families. Finding them real opportunities to gain their livelihoods was Zahia’s next goal.`,
      },
      {
        type: "paragraph",
        text: `One of her pivotal initiatives was focused on supporting women in informal jobs. She leveraged her local networks to create women’s cooperatives in agriculture and dairy production, both high-yielding sectors most affected by war. She also led an initiative which ran fifteen small-scale business projects for internally displaced women to foster economic independence.`,
      },
      {
        type: "pull-quote",
        text: `“As a Sudanese young woman, I have observed that women in informal sectors are struggling to get above the poverty line; they work hard, but they can’t reach their goals. War has a detrimental effect on their struggles as well. I believe that women in Sudan can be pivotal to rebuild the country, but their roles must be de-marginalized.”`,
      },
      {
        type: "paragraph",
        text: `Zahia stands firm on her commitment to empower youth, especially young women. She stresses the importance of a long-term sustainable approach to capacity building for youth leaders facing ongoing compounded crises of war, natural disasters, and displacement. She currently also serves as a Gender-Based Violence Coordinator in her hometown.`,
      },
      {
        type: "paragraph",
        text: `Her volunteer journey started much earlier than the war. In 2017, Zahia was still a university student, when she formed a student group that aimed to combat violence and help underprivileged families. She was an active member of New Halfa Women’s Platform, which advocate for women’s rights and civil governance.`,
      },
      {
        type: "paragraph",
        text: `Her early partnership with UNDP and other organizations played a key role in shaping her community work, providing training, platforms to address hate speech, and networks that still support her efforts today. Through UNDP’s Youth Ambassadors of Peace initiative in her neighborhood, she forged a lasting connection with young leaders committed to dialogue and community cohesion. She continues to advocate for inclusion, social cohesion, and peacebuilding from the grassroots.`,
      },
    ],
    sectionThreeQuote: ``,
    sectionThreeDetailsBlocks: [],
    vision: {
      text: `“It’s one thing to be theoretically knowledgeable, and it’s completely different when you gain field experience, and you take your vision into action. Our young women are capable and can overcome barriers to be actors of change within their communities. It’s a responsibility we all carry.”`,
      highlightedPhrases: [`vision`, `action`, `women`, `change`],
    },
  },

  abdallaBabiker: {
    index: 8,
    slug: "abdalla-babiker",
    routePath: "/stories/abdalla-babiker",
    subjectName: `Abdalla Babiker`,
    country: `Sudan`,
    topic: `Youth empowerment – Civic Education – Social Cohesion`,
    title: `Health, Humanity, and Hope: How Abdalla Babiker Is Turning Crisis Response into Community Renewal`,
    impact: {
      intro: `A young Sudanese medic in Kassala helps displaced families find shelter, health care, and hope—leading youth-driven efforts in crisis response and peacebuilding.`,
      stats: [
        {
          value: `150K`,
          label: `People`,
          text: `Training in social cohesion and conflict resolution: UNDP has sensitzed about 150,000 Sudanese in social cohesion and conflict resolution skills across the country, building capacity for peace and community mediation.`,
        },
        {
          value: `4,000`,
          label: `Young People`,
          text: `Youth participation in peace activities: Nearly 4,000 young people participated in peacebuilding activities such as community sports events designed to build solidarity across conflict lines.`,
        },
      ],
    },
    introParagraphs: [
      `In the eastern Sudanese provincial capital Kassala, a town spared from the frontlines of war but profoundly reshaped as a haven for forcibly displaced families, a young mother has just arrived, her baby in her arms, both scarcely dressed and shivering in the cold. Her first stop was the Emergency Room Kassala tent located at the entrance of the bus station.`,
      `Standing by the tent entrance, Abdalla Babiker, a medical student from Kassala, handed her a blanket. Behind the young mother, waves of internally displaced people, weary from days of marching through the desert, were slowly making their way to his tent, desperately seeking warmth and any glimmer of hope.`,
    ],
    openingQuote: {
      text: `“They were arriving in huge numbers. We couldn’t think beyond finding them immediate shelter and somehow fitting them all in until all buildings around us were converted into transient homes.”`,
      highlightedPhrases: [`shelter`, `homes`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `Since the war erupted in 2023, millions have fled conflict zones in Khartoum, and neighboring states. Six hundred kilometers further to the east, Kassala, became a refuge for thousands of Sudanese families, filling its schools, clinics, and adding pressure to limited public services. The Atbara River, a main tributary to the river Nile, passes through Kassala town, causing seasonal floods, destroying refugee shelters, and exacerbating pressure on already stretched infrastructure. The cascading crises have only deepened the burden on host communities and further eroded scarce resources.`,
      },
      {
        type: "paragraph",
        text: `When conflict erupted, it was far from Kassala. A year later, the first displacement sites in places like Madani were hit, and the war crept closer to Abdalla’s hometown. His university-based public health organization, which he had established five years earlier, redirected action to respond to the emerging crisis.`,
      },
      {
        type: "paragraph",
        text: `Abdalla and fellow students converted schools into shelters, and set-up mobile clinics to meet urgent health needs. The organization of shelters in schools was carried out in collaboration with neighborhood residents. He also organized health awareness and education campaigns, especially addressing cold weather risks and basic sanitation in temporary shelters. A veteran of UNDP’s Youth Leadership Programme, where he was trained on local mediation and peacebuilding, he was quickly becoming a leading voice in community-led crisis response and peacebuilding, not just treating illness, but healing society from within.`,
      },
      {
        type: "pull-quote",
        text: `“It was inevitable that sensitivities and frictions would take root between the host communities in Kassala and the displaced families that arrived in those early days of emergency response. Some profiteers benefited from the situation. For example, rents started to rise. Aid was pouring in to help the displaced communities at the expense of host communities. Mistrust permeated our air. So, providing health and shelter was not enough to maintain the peace.”`,
      },
      {
        type: "paragraph",
        text: `Beyond the physical response, Abdalla recognized the invisible wounds of tensions between host and displaced communities. Together with his peers, they spearheaded cultural and educational initiatives to counter hate speech and promote peaceful coexistence between host and displaced communities. Through partnerships with UNDP and the Building Resilience Development Organization (BRO), he organized exhibitions, theatrical performances, and art shows, proving that social cohesion and peacebuilding can emerge even when the war was still far from over.`,
      },
      {
        type: "pull-quote",
        text: `“As young Sudanese, we have a big role to rise above our different tribal differences. Art and culture celebrate our diversity and different traditions in Sudan, we have a common language, and that’s the language of hopeful, ambitious youth.”`,
      },
      {
        type: "paragraph",
        text: `Lamenting that youth are sometimes misunderstood or blamed for the ongoing conflict, he is quick to insist that it was young people like him who stepped forward first, organizing emergency response efforts and receiving the early waves of displaced families.`,
      },
    ],
    sectionThreeQuote: `“When the war reached us, we didn’t wait for instructions. We organized shelters, treated the sick, and built trust instead of fear… It’s the young people who acted fast as frontliners for emergency response.”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `He is confident that their leadership in those critical moments has begun to shift perceptions, showing communities across Sudan that youth are not only responders, but capable leaders who can help shape the country’s future. Training, funding, and knowledge sharing are essential to sustain youth-led action. Abdalla dreams of sustainable partnerships with local and international actors to protect efforts to build an inclusive society, where Sudan’s health system is reformed to uphold dignity and equitable access, and where youth chart the path towards bridging divides and unifying all Sudanese people across tribal and social lines.`,
      },
    ],
    vision: {
      text: ``,
      highlightedPhrases: [],
    },
  },

  raghdaBreika: {
    index: 9,
    slug: "raghda-breika",
    routePath: "/stories/raghda-breika",
    subjectName: `Raghda Breika`,
    country: `State of Palestine`,
    topic: `Crisis Prevention and Recovery / Humanitarian Response - Youth empowerment – Governance - Resilience building – Social Cohesion`,
    title: `The Law of Compassion: How a Young Woman from Gaza Turns Justice into Healing in war-torn Gaza`,
    impact: {
      intro: `Raghda, a young lawyer in Gaza, turns trauma into hope, guiding children through emotional recovery and community resilience during war. Her youth-led initiatives empower families, promote mental health, and inspire peace, showing that compassion is the first step towards recovery in conflict zones.`,
      stats: [
        {
          value: `270,000`,
          label: `tonnes of rubble`,
          text: `Since January 2025 (even while war continued), UNDP teams have already cleared more than 270,000 tonnes of rubble with 67,000 tonnes repurposed.`,
        },
        {
          value: `3,239`,
          label: `Households`,
          text: `To support dignified living conditions, UNDP has assisted 3,239 households through transitional shelter solutions, including the rehabilitation of housing units, installation of temporary structures, and distribution of essential materials.`,
        },
        {
          value: `6,000`,
          label: `People`,
          text: `At the same time, 6000 people have been employed through emergency job creation initiatives across the health, public services, productive and education sectors, helping sustain basic services and inject income into crisis-affected communities.`,
        },
        {
          value: `90,000`,
          label: `Students`,
          text: `Education continuity was further supported through the establishment of temporary learning spaces and facilitation of Tawjihi exams for more than 90,000 students.`,
        },
        {
          value: `140,000`,
          label: `People`,
          text: `Through three UNDP-supported One-Stop Community Centers, over 140,000 Palestinian have accessed integrated, multi-sectoral services, ranging from legal aid and higher education support to psychosocial assistance, reinforcing social cohesion and community resilience.`,
        },
      ],
    },
    introParagraphs: [
      `“My name is Raghda. The meaning of my name is living in peace and comfort. My mom used to repeat that to me so that I could hold on to it despite the circumstances I grew up in, where none of this peace existed. So, I decided to be the reason it exists, to bring some peace and comfort to those around me.”`,
      `On religious occasions, Raghda can always be seen walking through the debris caused by the war on Gaza, inside the ruins of fallen houses, decorating them with candles and makeshift garlands to bring some joy to the Holy celebration amid the gloom. Born and raised in war-torn Gaza, the 24-year-old human rights lawyer insists that bringing normalcy to the everyday life of Palestinians is a lifeline.`,
      `Her studies in law were a pathway to justice and protection for the vulnerable, especially children. This grounding defines her vision of a more humane society. She sees preserving dignity and empathy as everyday resistance.`,
      `At 18, Raghda joined Save Youth Future Society (SYFS), a youth-led organization dedicated to psychosocial and humanitarian support for Palestinian children in Gaza. Through the trauma of displacement and scarcity, she began organizing emotional support sessions for children and parents. It began as modest initiative in makeshift classrooms and quickly grew to become a model of community resilience.`,
      `Her creativity helped rebuild trust and provide safety in the midst of chaos, showing that compassion is the first step towards recovery. Her signature initiative, “emotional charging,” built crucial bridges of warmth and trust in families shattered.`,
    ],
    openingQuote: {
      text: `“In a tent, where multiple families reside, there is no privacy, no space for a parent to get close to their child. There are no hugs, no intimacy, no sense of safety usually derived from those moments. To break this emotional barrier, we started educating children about the importance of emotional charging. That their emotions are like a mobile phone, in need of regular recharge. We told them their moms were the charging dock. That whenever they needed, they had to request emotional charging from their parents.”`,
      highlightedPhrases: [`safety`, `emotions`, `charging`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `Her daily struggles begin at dawn. She often wakes up disoriented, not sure which tent is hers. She has been displaced with her family too many times to belong anywhere. She collects coal and wood and prepares a communal breakfast with the little food she can find. Her daily route mapped out on paper, she walks long distances to reach her work: displaced children in Al-Qarara, a Palestinian town located in the southern Gaza Strip, within the Khan Yunis Governorate. The journey is mostly hilly with large patches of sand, with hundreds of tents and transient refugee camps along the way. Raghda often reaches the first tents after long hours of sweat and fear.`,
      },
      {
        type: "pull-quote",
        text: `“When I receive the children, they would have already worked all morning fetching water, food or running errands to secure the basic necessities for their families. If they are not wounded, or burnt, they are stressed and traumatized. That’s how I start my day with them. But the tents are stuck too close and the noise around us is too loud. The whole environment is not conducive to distressing them. Halfway through my sessions, we often hear the bombs falling. It’s really tough!”`,
      },
      {
        type: "paragraph",
        text: `Raghda’s work extends beyond emergency relief. Through partnerships with UNICEF, the International Rescue Committee (IRC), and others, SYFS is building a long-term foundation for youth empowerment, psychosocial care, and peace education. Her daily journey across Gaza, captures the reality of youth-led humanitarian work under siege. Without transport, she walks for hours to reach traumatized children, improvising games from cans and fabric scraps. Despite hunger, exhaustion, and fear, she insists that Palestinian youth in Gaza “carry the load in the field.”`,
      },
      {
        type: "paragraph",
        text: `Her leadership shows how young people in crisis are not passive victims but skilled, determined agents of survival and change. Even as bombing continued for two years, Raghda and her peers refused to let Gaza be defined solely by war. Their initiative, “We Are the Support,” calls for global solidarity rooted in respect, not pity. She advocates for continuity in the programmes that invest in local youth leadership, mental health, and livelihoods long after media attention fades. Reflecting on her lived experience, Raghda shares:`,
      },
    ],
    sectionThreeQuote: `“Gaza is a beacon of hope for youth across the region. Our strength as young people is really coming from within. Resilience for me is every minute of my life. It’s the sound of a Fayruz song playing against a backdrop of rockets and bombs falling, to mask the horror of our reality while we cook breakfast over an open fire in the morning. It’s a child making a paper airplane, writing his dream on it, and flying it high. Resilience is the water carrier in every camp. It is my journey to see a child for work while my family is moving camps as they are forced to leave their makeshift homes again and again and again.”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `As Gaza recovery begins, UNDP is contributing on the removal of 61 million tons of debris generated by the war, paving the roads and restoring access to schools, hospitals and deserted towns so that Raghda and the thousands of Palestinian youth eager to own the narrative of their future can start rebuilding.`,
      },
    ],
    vision: {
      text: `“If our youth managed to stay actively involved during wartime, can you imagine what we are capable of the minute we are given the chance to rebuild?”`,
      highlightedPhrases: [
        `youth`,
        `wartime`,
        `imagine`,
        `capable`,
        `change`,
        `rebuild`,
      ],
    },
  },

  ahmadAssaf: {
    index: 10,
    slug: "ahmad-assaf",
    routePath: "/stories/ahmad-assaf",
    subjectName: `Ahmad Assaf`,
    country: `State of Palestine`,
    topic: `Youth empowerment - Governance - Digital and Tech Innovation - Youth Empowerment`,
    title: `Digital Healing: How a Young Palestinian Engineer Is Reimagining Recovery Through Volunteerism and Technology`,
    impact: {
      intro: `Ahmad, a Palestinian innovator from Jenin, transforms challenges into solutions, from sustainable products to a digital platform aiding war-affected disabilities. His youth-led initiatives link volunteerism, innovation, and humanitarian response, empowering communities and fostering resilience amid conflict.`,
      stats: [
        {
          value: `59,000`,
          label: `Persons with disabilities`,
          text: `Even before the latest escalation, there were about 59,000 persons with disabilities in the West Bank (out of ~115,000 across the whole oPt). After conflict-related violence in camps, 610 persons with disabilities were directly affected, highlighting urgent needs for documentation, assistive services, and psychosocial care.`,
        },
        {
          value: `31,919`,
          label: `Displaced People`,
          text: `As of late 2025, at least 31,919 Palestinians have been displaced from Jenin, Tulkarm and Nur Shams camps — the largest displacement in the West Bank since 1967 — disrupting access to services, schooling and livelihoods.`,
        },
        {
          value: `78,975`,
          label: `People`,
          text: `UNDP has scaled up its support to address the growing socio-economic pressures facing Palestinian communities, particularly in areas affected by displacement and infrastructure damage. In refugee camps such as Jenin, Nur Shams and Aqbat Jaber, 638 families received emergency livelihood assistance, while 54 community infrastructure initiatives were implemented, creating 4,078 short-term jobs and benefiting more than 78,975 people.`,
        },
        {
          value: `27`,
          label: `Solutions`,
          text: `At the same time, UNDP is reinforcing democratic governance and quality public services by strengthening institutional capacities and promoting more inclusive and accountable systems. Forty-one civil society and media organizations have been supported to advance inclusive democratic processes, while 27 solutions — including digital tools — have been adopted by public institutions to enhance transparency and service delivery. Ten policy and regulatory initiatives were advanced, and 189 service providers strengthened their ability to deliver responsive, needs-based services.`,
        },
        {
          value: `1,000`,
          label: `Enterprises`,
          text: `UNDP has expanded inclusive economic opportunities by equipping 1,444 individuals with market-demanded skills and supporting 1,849 people through targeted short-term employment initiatives, including the deployment of 168 health workers in coordination with the Ministry of Health. In parallel, 1,113 MSMEs gained improved access to finance and technical expertise, including 1,000 enterprises benefiting from concessional loans under the Estidama Fund, alongside resilience and innovation support for local businesses and artisans, contributing to socio-economic stability amid ongoing challenges.`,
        },
      ],
    },
    introParagraphs: [
      `Born and raised in Jenin a city that has experienced repeated military operations and economic disruption, Ahmed Assaf describes himself as “a child of crisis.” His volunteer journey began at the age of twelve when, inspired by his older sister, he joined a local community initiative to read stories to children in the streets. That simple act of service sparked a lifelong commitment to volunteerism, learning, and community building. Ahmed grew up understanding that resilience is not just survival, it’s the courage to create solutions, to continue dreaming, and to chart one’s own path.`,
    ],
    openingQuote: {
      text: `“I remember the first time I took a taxi alone, carrying my story book and heading to a neighboring village looking for opportunities to volunteer and read to children. I was so scared to speak in public and decided to start with an old man I met at the Mosque. It turned out he knew my grandfather, and he immediately gave me the confidence to read out loud. That day, I returned home feeling like I had just won a million dollars.”`,
      highlightedPhrases: [`volunteer`, `confidence`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `At university, Ahmed studied Mechatronics Engineering and became a passionate advocate for sustainability. His first major achievement, which was a sustainable olive oil bottle made from olive skin, received international recognition from the World Packaging Organization (WPO), with support from UNIDO. Later, he joined Eco-Rebuild in Jordan, an initiative that focuses on community empowerment providing personal items from household supplies, building shelter from rubble, and limiting soil pollution caused by debris.`,
      },
      {
        type: "pull-quote",
        text: `“We found that if we plant three trees in Palestine: Jojoba, Sunflower and Bamboo, they have a detoxifying power so that we can heal our soil and make it safe for food production.”`,
      },
      {
        type: "paragraph",
        text: `Ahmed established his own company while still a student, he called it “Baraka”, which means Blessing. It focuses on innovation and creativity to turn waste into useful sustainable products that Palestinians need but have no access to. But when the military operations intensified, his focus shifted towards addressing lifesaving needs. Feeling helpless as he witnessed the growing toll of injuries and displacement, he realized there was no centralized data on those wounded or disabled as a result of the violence.`,
      },
      {
        type: "paragraph",
        text: `From this tragedy, Ahmed found an opportunity to be useful. He created a digital platform and mobile application designed to help people self-test for hearing, sight, and emotional impairments caused by the ongoing violence. The project was inspired by a deeply personal story.`,
      },
    ],
    sectionThreeQuote: `“When my mother experienced hearing loss and we visited the doctor, we were told it could have been caused by exposure to a very loud sound. At that moment, I immediately thought of the people in Gaza who are exposed to explosions every few minutes. That realization deeply affected me and became a turning point, pushing me to think about how I could create a solution to support them.”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `With technical advice and guidance from UNDP, the application evolved into a national initiative to document disabilities and improve access to care. The initiative is supported by the Swedish government, FCDO, and implemented in partnership with the Palestinian Ministry of Health under the Transparency, Evidence, and Accountability (TEA3) project. Set to launch soon, the application represents a bridge between humanitarian response and long-term sustainable development.`,
      },
      {
        type: "paragraph",
        text: `For Ahmed, volunteerism is not charity. It is an expression of active citizenship. His work reflects a deep belief that people affected by crisis must be part of designing their own solutions. Reflecting on the realities facing many young people in Palestine, Ahmed shared:`,
      },
      {
        type: "pull-quote",
        text: `“People want to own the solution, not just receive aid. Palestinian youth are extremely creative. We must be resilient to survive the challenges we were born into. I wish we have more chances to get out, to participate with the rest of the world, to promote Palestinian innovation and ideas to the world, but we still feel isolated and unheard.”`,
      },
      {
        type: "paragraph",
        text: `Despite living in conditions of ongoing insecurity, he has channeled his energy into meaningful work. With nearly 32 thousands Palestinians still displaced , including more than 12,000 children in the northern parts of the West Bank, Ahmed seeks to carve out paths for Palestinian youth to be recognized as capable agents of change.`,
      },
    ],
    vision: {
      text: `“Working with displaced people puts you in the front lines all the time and this is a big risk which deserves a bigger platform to express our concerns, our dreams and our achievements. We are not superheroes. We have hope and dreams like everyone else. I just wish to speak one day not about war, but about my plans for the future.”`,
      highlightedPhrases: [
        `front lines`,
        `risk`,
        `concerns`,
        `dreams`,
        `achievements`,
        `future`,
      ],
    },
  },

  nourshan: {
    index: 11,
    slug: "nourshan",
    routePath: "/stories/nourshan",
    subjectName: `Nourshan`,
    country: `Libya`,
    topic: `Youth empowerment – Civic Education – Gender Equality – Women leadership in peacebuilding`,
    title: `Youth at the Helm: One Young Woman’s Journey to Pave the Way for Elections and a New Era of Stability in Libya.`,
    impact: {
      intro: `In Libya’s conflict-scarred city of Al-Zawiyah, youth activist Nourshan Tijani Abdalla empowers young people to reclaim their voice, strengthen civic participation, and help shape a peaceful, inclusive future for their country.`,
      stats: [
        {
          value: `4`,
          label: `Students Ambassadors`,
          text: `4 student ambassadors were selected from across Libya to participate in leadership and SDG engagement activities. UNDP supported Libya’s first Local Conference of Youth (LCOY), which brought together 120 young participants from all regions to discuss climate action and youth advocacy.`,
        },
        {
          value: `90`,
          label: `Young Women`,
          text: `In 2024/25, a young women leadership programme, named Raidat (“pioneers”), was launched by UNDP together with other UN entities. By the end of 2026, more than 90 young Libyan women will have graduated from a year-long training programme, equipping a new generation with skills required of future leaders.`,
        },
        {
          value: `40+`,
          label: `Young People`,
          text: `UNDP’s Diwan AlShabab Youth Innovation Lab trained 40+ young Libyans from across the country in justice, rule of law and civic engagement, equipping them with tools to strengthen community participation in governance.`,
        },
      ],
    },
    introParagraphs: [
      `On the northwestern coast of Libya, some 45 kilometers from its capital, Tripoli, the municipality of Al-Zawiya is home to the country’s second-largest oil refinery and its Mediterranean gateway to the world. Yet beyond its economic significance, Al-Zawiya, has become a portrait of Libya’s prolonged uncertainty.`,
      `Since 2014, a power vacuum has continued to plague the city, and the scars of the country’s faltering transition and political rivalry are etched into the faces of school buildings, marketplaces, and the faces of families alike.`,
      `Every morning, a young woman steps out into streets still littered with the remnants of the latest clashes that have besieged her town. Her name is Nourshan Tijani Abdalla, and her voice has become a rallying call for Libya’s youth to recognize their power to shape the country’s future.`,
      `Nourshan was a child when the Libyan regime crumbled in 2011, ushering in an era of shifting powers, armed conflict, and failed attempts at democratic unity. More than a decade later, the transition persists, and her hometown remains caught in the crossfire of rival administrations and the militias that guard their interests.`,
      `Raised in a conservative household of six children, deeply rooted in tribal and religious traditions, she grew up knowing that education was both a privilege and a defiance. Nourshan discovered the power of her voice in 2015 when she was selected to broadcast from her high school radio. Two years later, after joining a local debate club and participating in youth training programmes, she found herself on a flight to Tunis to participate in a regional youth leadership training programme. It was there that Nourshan found her true voice.`,
    ],
    openingQuote: {
      text: `“One of the sensitive topics we were trained to address was HIV/AIDS, a long-standing taboo in our culture. How do you find an appropriate way to talk about sexuality, transmission, to a group of young males and females in our culture,” she recalls. “It was challenging, but I found a way to deliver the message properly without making myself or others uncomfortable. That’s how my journey as a trainer began.”`,
      highlightedPhrases: [`taboo`, `culture`, `message`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `Seven years on, Nourshan balances her professional life with her community engagement, and honing her own skills in conflict mediation, peacebuilding, and youth mobilization with organizations such as UNDP. She serves as the Manager of Support and Empowerment for Women in government, and devotes her afternoons to “Wa’ii”, an organization which caters to youth policy mapping, civic and governance literacy, and leadership training to ensure youth can participate meaningfully in municipal and national elections. Together with her teammates, she has helped increase voter registration in Al-Zawiya by more than 45 percent.`,
      },
      {
        type: "paragraph",
        text: `Libya’s political instability, civil unrest, and fragile governance have left young people politically disoriented, vulnerable, and their energy exploited.`,
      },
      {
        type: "pull-quote",
        text: `“Youth often underestimate their own power. We grew up in the war. Our childhood was disrupted. This is prime field for radicalizing young people. The only way is to raise awareness, show role models, and help them take their first steps in shaping their city, their country. Change starts with one voice, one informed choice, and it grows from there.”`,
      },
      {
        type: "paragraph",
        text: `Nourshan’s journey highlights the pivotal role that informed, active youth can play in steering Libya towards stability, laying the foundation for a political landscape that future generations can inherit with hope and confidence.`,
      },
    ],
    sectionThreeQuote: ``,
    sectionThreeDetailsBlocks: [],
    vision: {
      text: `“I believe that my generation is still in dire need of political and civic education. It must continue to develop its own capacity to pave the way and lay the foundation for generations to come. This will be our footprint.”`,
      highlightedPhrases: [`generation`, `education`, `footprint`],
    },
  },

  muadAlGhandouri: {
    index: 12,
    slug: "muad-al-ghandouri",
    routePath: "/stories/muad-al-ghandouri",
    subjectName: `Muad Al Ghandouri`,
    country: `Libya`,
    topic: `Youth empowerment – Civic Education – Social Cohesion – Peacebuilding`,
    title: `Beyond the Ballot: How Muad Al Ghandouri Is Rewriting What It Means to Participate in Libya`,
    impact: {
      intro: `At 23, Muad Al Ghandouri is inspiring Libyan youth to move beyond violence, embrace civic rights, and become agents of change in their communities`,
      stats: [
        {
          value: `61`,
          label: `Elected Youth`,
          text: `In 2024, UNDP engaged 61 elected youth municipal councillors, including 18 women, in training and discussions to enhance youth leadership in governance and civic participation.`,
        },
        {
          value: `50`,
          label: `Youth`,
          text: `In 2025, UNDP took advantage of the momentum of the municipal council elections to engage young voters and initiate a Youth Elections Forum in coordination with the Libyan High National Election Commission (HNEC). On 21 and 22 September 2025, 50 young women and men from across Libya came together in Tripoli, aimed at strengthening youth participation in the electoral process. The conference enhanced electoral awareness, developed leadership and advocacy skills, and empowers youth to lead awareness initiatives. Libyan youth participants were informed on electoral concepts, electoral awareness and advocacy.`,
        },
      ],
    },
    introParagraphs: [
      `At 23, Muad Al Ghandouri has already influenced local elections, mediated conflicts, and built structures that sustain youth engagement in Libya. He was born in Tajoura, a coastal town east of Tripoli known for its historic Ottoman-era architecture and centuries-old family traditions.`,
      `Since 2011, the country grapples with repeated cycles of violence, fragile ceasefires, and competing interests that have eroded public trust and fractured governance. Muad grew up with the echoes of a revolution and the ensuing violence as ethnic, regional and religious divides took root. Violence was the easiest path for many youth. Muad chose a different path. His journey began in university, where a casual interest in sports led him to join the student union.`,
    ],
    openingQuote: {
      text: `“We didn’t know much about social service at first,” he recalls, “but it became the start of building a community of young people committed to change.”`,
      highlightedPhrases: [`Building a community`, `change`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `He discovered the power of civic engagement when he volunteered with the youth-led non-profit H2O organization. He then fast-tracked his political education with UNDP’s Youth Leadership Programme. By 2023, Muad had participated in the Youth Parliament of Libya; taken leadership roles in debate and empowerment initiatives. He was appointed to the H2O management team, and he became president of the student union. He prides himself for leading the negotiations to get his university accredited after many failed attempts in the past. He believes his actions were cornerstones to redefining the role of youth in society, a role rooted in a shared identity and a hope for a better future.`,
      },
      {
        type: "pull-quote",
        text: `“Armed groups are young people from our communities. Their violence is a symptom of their exclusion and misinformation.” He explains. “I don’t believe that we should try to go against our traditions to have our voices heard. We take time to explain, to build bridges of trust, to show goodwill and to work with and within our cultural norms to reach our goals”`,
      },
      {
        type: "paragraph",
        text: `Muad founded Tawazon in 2025, a youth-led organization committed to transforming perceptions from the ground up. Tawazon focuses on awareness raising, civic education, and capacity building, empowering young people with the knowledge to understand their rights and engage meaningfully in their communities.`,
      },
      {
        type: "pull-quote",
        text: `“We want to show that youth can lead responsibly, without agendas or violence,” he explains.`,
      },
      {
        type: "paragraph",
        text: `The organization worked closely with local councils, elders, and even armed factions, mediating conflicts and fostering dialogue. Their high schools outreach initiative stands testament to their success.`,
      },
      {
        type: "pull-quote",
        text: `“I remember that first time I stood on stage addressing three hundred students in an all-girls high school,” recalls Muad.`,
      },
      {
        type: "paragraph",
        text: `The students had never received guests speaking about civic rights. He felt both the weight of responsibility and the thrill of possibility. At first, the room was filled with shy curiosity, but as he spoke about youth rights, elections, and the power of individual voices, he watched their hesitation turn into engagement. For Muad, it was more than an awareness session, it was a moment of transformation.`,
      },
      {
        type: "pull-quote",
        text: `“We simulated an electoral process, I watched them gain courage, understand their civic duty, and vow to engage their families. By the end, 250 students had committed to ensuring their families exercised their voting rights effectively.”`,
      },
      {
        type: "paragraph",
        text: `Muad’s work is anchored in his belief that youth agency must be protected from political polarization, instrumentalization and external pressures. These grassroots campaigns, reaching thousands across Tripoli, embody his belief that sustainable peace begins with informed, empowered youth. His journey reflects a new model of leadership in Libya; one grounded in dialogue, respect for tradition.`,
      },
    ],
    sectionThreeQuote: ``,
    sectionThreeDetailsBlocks: [],
    vision: {
      text: `“We don’t want youth to think participation ends at the ballot box; it begins there. I want them to be a positive influence on their families and communities.”`,
      highlightedPhrases: [
        `participation`,
        `ballot box`,
        `influence`,
        `families`,
        `communities`,
      ],
    },
  },

  khairyyehBobaky: {
    index: 13,
    slug: "khairyyeh-bobaky",
    routePath: "/stories/khairyyeh-bobaky",
    subjectName: `Khairyyeh Bobaky`,
    country: `Syria`,
    topic: `Youth empowerment – Civic Education – Gender Equality – Women leadership in peacebuilding`,
    title: `Rebuilding Homes: How a Young Syrian Architect Is Rebuilding Homes, Communities and Livelihoods`,
    impact: {
      intro: `Amid Aleppo’s 2023 earthquake devastation, a young Syrian architect helps families rebuild while fostering unity and trust across fractured communities.`,
      stats: [
        {
          value: `151,000`,
          label: `Damaged Buildings`,
          text: `UNDP supported rapid assessments reached around 151,000 damaged buildings in earthquake-affected locations, contributing foundational data for recovery planning and reconstruction activities.`,
        },
        {
          value: `8.8M`,
          label: `People`,
          text: `According to UNDP’s Whole of Syria recovery framing, the earthquake affected approximately 8.8 million people, with thousands displaced and an estimated ~23,000 buildings collapsed or damaged.`,
        },
      ],
    },
    introParagraphs: [
      `Early morning, right before dawn on Monday 6, 2023, the residents of Aleppo, Syria’s renowned historic city in the north, were shaken out of their sleep by a 7.8 magnitude earthquake. Throughout the day, the shaking did not stop. A second major earthquake of similar strength followed, and tremors continued for weeks testing the resilience of an infrastructure that had barely survived decades of war. Homes were destroyed by the hundreds, and thousands of families were left stranded, watching in terror as a part of the once proud dome of the historic Ayyubid mosque lay in rubble and broken stone.`,
      `A few weeks after the devastation, Khaireyya, a 22-year-old architecture student in Aleppo, could be spotted every day walking the narrow streets, assessing damage on shattered houses and taking stock of all the work needed to rebuild, restore and recover. Her team’s mission started with damage assessment and ended with homes restored and livelihoods regained.`,
    ],
    openingQuote: {
      text: `“It took seven months for some families to get back to their homes after the devastation. There was this one extended family. They had several members with serious health issues. One mom was carrying her newborn, an earthquake baby. Watching them regain access to their home after seven whole months in Northern Syria’s harsh winter was priceless!”`,
      highlightedPhrases: [`health`, `earthquake`, `access`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `Khaireyya is no stranger to finding resilience where hardship prevails. She hails from Idlib, a city in a nearby governorate southwest of Aleppo that has withstood intense fighting and displacement. Each dawn brought with it a new ethos. Her education, like her community, was a patchwork of continuously changing curricula, social norms and standards. No degree she earned could outlive the governing power that issued it.`,
      },
      {
        type: "pull-quote",
        text: `“I grew up with this notion that I had to be agile, to adapt and just keep going. There was no other choice. During the earthquake crisis of 2023, I was away from my family. Their village was destroyed by the earthquake. The impact of the crisis prompted me to use the knowledge I have as an architect to rebuild my people’s homes.”`,
      },
      {
        type: "paragraph",
        text: `In remote communities situated far from the halo of safety cast by big cities, navigating the world of volunteer and community work as a young girl poses many risks. Khaireyya took refuge in numbers and moved as a group for protection. Some areas they worked in were more traditional and conservative than others. However, the biggest challenge was dealing with the complicated reporting mechanisms and the often lack of clear guidance from the donor community.`,
      },
      {
        type: "pull-quote",
        text: `“It drained our energies, but it also fast-tracked our experience levels,” she recalls.`,
      },
      {
        type: "paragraph",
        text: `Beyond physical reconstruction, Khaireyya is involved in building social cohesion. Decades of political divides have nurtured a culture of mistrust that she wants to systematically reduce to fragments of a distant memory for future generations.`,
      },
    ],
    sectionThreeQuote: `“We rely on the elders of these communities to help us build bridges of trust. They carry the history of a unified Syria in their memories. And I hope that working together across generations, we can replace young people’s consciousness of division with a unified goal to rebuild our homeland together.”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `When she’s not busy rebuilding houses, Khaireyya organizes initiatives that bring together divided communities through art and culture. Her work underscores the role of youth in peacebuilding, showing that empathy, cultural dialogue, and shared experiences can bridge sectarian divides and rebuild trust. She calls for more outreach to small villages beyond urban centers, hoping to work one day at the national level to design awareness and capacity-building campaigns for youth.`,
      },
      {
        type: "paragraph",
        text: `Khaireyya aims to seek partnerships that can help her achieve her goals and sustain her efforts at the local and national levels. With every step she takes each morning as she heads to her work, she knows that she is charting a new path for Syrian youth living in remote communities. She is redefining what reconstruction really means beyond brick and mortar. It is the rebuilding of a united youth and the restoration of faith in each other.`,
      },
    ],
    vision: {
      text: `“Rebuilding our nation is our responsibility as young Syrians. Our economic and political challenges are not everlasting. We can’t waste time waiting. We must keep improving ourselves and investing in our own potential through training, capacity building, and a better coordinated approach to community work.”`,
      highlightedPhrases: [
        `responsibility`,
        `challenges`,
        `waiting`,
        `potential`,
        `community`,
      ],
    },
  },

  omarBozou: {
    index: 14,
    slug: "omar-bozou",
    routePath: "/stories/omar-bozou",
    subjectName: `Omar Bozou`,
    country: `Syria`,
    topic: `Youth empowerment – Digital Literacy, Transformation and Innovation – Crisis Response, Resilience and Early Recovery`,
    title: `From a Facebook Page to a National Lifeline: How a Young Syrian Is Redefining Volunteerism in Times of Crisis`,
    impact: {
      intro: `A young Syrian’s return to Damascus in 2014 and his unexpected journey into volunteerism, tracing how a simple online effort grew into a nationwide network supporting communities through conflict, COVID-19, and the 2023 earthquake.`,
      stats: [
        {
          value: `30,000`,
          label: `Youth`,
          text: `Since its launch in 2015, UNDP’s Youth Leadership Programme (YLP) has been implemented in 18 Arab countries, engaging more than 30,000 young women and men and creating a network of 80+ youth-serving organisations supporting youth-led change across the region — including Syria.`,
        },
      ],
    },
    introParagraphs: [
      `“I was born in a country that wasn’t mine. My school was a melting pot of nationalities and different cultural backgrounds, sharing the same spectrum of challenges and opportunities that growing up as an expat offers. Home was a place I only visited during the holidays. A place I only saw through my sheltered prism. I loved it, but I didn’t speak its language, and I didn’t share its struggles.”`,
      `Omar Bezo, was eighteen when he went back to Damascus, Syria to renew his national documents. It was meant to be a two-week stay, just like his holiday trips to his homeland. This was in 2014. Instability, which had started three years earlier, had escalated into a full-scale conflict. Omar found very little left of the country he knew only as a holiday destination before.`,
      `By the end of 2014, over ten million people, more than half the population of Syria, were forced to leave their homes. About two thirds were internally displaced to safer grounds, further straining resources and disrupting services that were repeatedly damaged in the ongoing conflict.`,
      `By 2014, the familiar heartbeat of Damascus had changed. Streets once crowded with leisurely shoppers were quieter; their conversations shorter, more cautious. Checkpoints became part of the city’s architecture, shaping both movement and mood. What Omar thought was a temporary visit, turned into a defining journey of self-discovery and survival. Alone in Damascus without official documents for over a year, he set off to reconnect with his roots, determined to find his place in a society now marked by uncertainty and hardship.`,
    ],
    openingQuote: {
      text: `“My family was far. I didn’t speak the local Arabic dialect I eventually registered for university, and this was a challenge. I changed my studies several times, in a quest to define my present self and reconcile it with my past. So, I volunteered during the university in 2015-2016 and I joined a Ramadan kitchen project. This project was the foundation of my civic engagement journey.”`,
      highlightedPhrases: [`volunteered`, `civic engagement`],
    },
    sectionTwoBlocks: [
      {
        type: "paragraph",
        text: `After a few academic shifts, Omar settled on Business Administration and Informatics Engineering, balancing study with community work, until the onset of COVID-19 which once again forced him to question his place in society. He launched Akemha, a Facebook page whose name means “Sterilize It.” Within days, tens of thousands joined his call for awareness raising and responsible action. It began as a simple online post and quickly grew into a nationwide volunteer network of nearly 300,000 followers, uniting doctors, youth, and local leaders to deliver health services, food aid, and critical information.`,
      },
      {
        type: "paragraph",
        text: `Omar relied on live candid storytelling and reporting. Navigating the Syrian digital landscape, words had to be measured. In any given country during the early days of community mobilization to respond to the pandemic, creating a community page would have been straightforward and safe. But in in Syria, insecurity, mistrust, censorships and shifting battle lines, shaped his journey more as an adventure, a dangerous one.`,
      },
      {
        type: "pull-quote",
        text: `“The visible threats came from the country’s health crisis. But the invisible dangers were far more daunting. One wrong move could put us, and the people we served, in danger.”`,
      },
      {
        type: "paragraph",
        text: `Omar and his team of volunteers learned to navigate danger while staying impartial and community centered. His persistence led to the historic outcome of securing a special legal status for Akemha, allowing youth initiatives to operate safely and independently.`,
      },
      {
        type: "paragraph",
        text: `As the initiative grew, so did attempts to usurp or annex it. In a peaceful setting, such a step might have seemed natural. But in a context where social gatherings were seen as security threats, aligning too closely with any political actor could put both the organizers and their beneficiaries at risk. Fortunately, a few trusted individuals acted as guiding figures, helping the young leader navigate this volatile landscape while continuing to mobilize large numbers safely.`,
      },
    ],
    sectionThreeQuote: `“Throughout the process, the initiative maintained a clear moral stance: remain impartial, refuse favors, and stay vigilant [...]. My every move could affect many more than just me or my initiative. We all had to stay safe and stay efficient because one mistake from one initiative could also reflect negatively on other initiatives. This was my compass!”`,
    sectionThreeDetailsBlocks: [
      {
        type: "paragraph",
        text: `In partnership with UNDP's Youth Leadership Programme (YLP), UNICEF, and UNHCR, among others, Akemha became a trusted platform for crisis response, also providing large-scale life-saving support during the 2023 earthquake that reached over 21,000 families in three different affected towns.`,
      },
    ],
    sectionFourQuote: `“We set out for a town that was very hard to reach. It was late around midnight, when I arrived on site. Over a hundred volunteers were gathered, nerves taut. Rumors had spread that the operation was targeted and will be shut down any minute. I had to step up as a leader and restore their confidence and sense of purpose. Just to be able to inspire was overwhelming. In four or five days we were able to get our job done and done safely.”`,
    sectionFourDetailsBlocks: [
      {
        type: "paragraph",
        text: `Despite its challenges, the digital world offered Omar the freedom to lead and connect with other youth. Today, Omar continues to advocate for digital literacy, youth inclusion, peacebuilding, and human rights, believing that recovery begins with dialogue and empathy.`,
      },
    ],
    vision: {
      text: `“We all feel the same pain, and face the same challenges [...], regardless of which side we resided on. Humanizing the other side is key to building our future. Youth in Syria continue to build digital bridges and its time their voices were included and taken seriously.”`,
      highlightedPhrases: [
        `challenges`,
        `humanizing`,
        `future`,
        `bridges`,
        `voices`,
      ],
    },
  },
};

export default storiesData;
