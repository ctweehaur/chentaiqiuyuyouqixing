/**
 * 互动古文教学平台 - 《陈太丘与友期行》简答题题库 (0报错自动审计咬合版)
 */

const shortQData = {
    chapter_1: [
        {
            id: "T1",
            qZh: "陈太丘与朋友约定“期日中”，但最后却“过中不至，太丘舍去”。你认为陈太丘的中途离开是不讲信用吗？为什么？",
            qPy: "chén tài qiū yǔ péng you yuē dìng qī rì zhōng dàn zuì hòu què guò zhōng bú zhì tài qiū shè qù nǐ rèn wéi chén tài qiū de zhōng tú lí kāi shì bù jiǎng xìn yòng ma wèi shén me",
            qEn: "Chen Taiqiu left after his friend failed to arrive by noon. Does this departure make Chen Taiqiu untrustworthy? Why?",
            sZh: [
                "1. 第一步：陈太丘和朋友约定的具体时间是什么时候？他自己有没有准时等候？",
                "2. 第二步：在‘过中（过了中午）’这个前提下，是谁先违背了两个人的约定？",
                "3. 第三步：陈太丘的按时离开，说明他对待“守时、讲信用”这件事有什么坚定的态度？"
            ],
            sPy: [
                "dì yī bù chén tài qiū hé péng you yuē dìng de jù tǐ shí jiān shì shén me shí hou tā zì jǐ yǒu méi yǒu zhǔn shí děng hòu",
                "dì èr bù zài guò zhōng guò le zhōng wǔ zhè gè qián tí xià shì shéi xiān wéi bèi le liǎng gè rén de yuē dìng",
                "dì sān bù chén tài qiū de àn shí lí kāi shuō míng tā duì dài shǒu shí jiǎng xìn yòng zhè jiàn shì yǒu shén me jiān dìng de tài dù"
            ],
            sEn: "Step 1: What was the agreed time for the meeting? Did Chen Shi wait past the set time?<br>Step 2: Under the condition of 'past noon', who was the party that broke the promise first?<br>Step 3: What firm stance on punctuality and social trust does Chen's departure demonstrate?",
            aZh: "陈太丘的离开绝对不是不讲信用，相反，这体现了他非常遵守信用。首先，他严格遵守了“日中”的约定，在中午准时守候，并没有提前离开。其次，在过了中午朋友还没来的情况下，是对方首先不讲信用、违背了时间约定。陈太丘准时离开，说明他做人非常有原则，不会盲目纵容和迁就别人的失信行为。",
            aPy: "chén tài qiū de lí kāi jué duì bú  shì bù jiǎng xìn yòng xiāng fǎn zhè tǐ xiàn le tā fēi cháng zūn shǒu xìn yòng shǒu xiān tā yán gé zūn shǒu le rì zhōng de yuē dìng zài zhōng wǔ zhǔn shí shǒu hòu bìng méi yǒu tí qián lí kāi qí cì zài guò zhōng bú zhì de qián tí xià shì duì fāng shǒu xiān bù jiǎng xìn yòng wéi bèi le shí jiān yuē dìng chén tài qiū zhǔn shí lí kāi shuō míng tā zuò rén fēi cháng yǒu yuán zé bú huì mǎng mù zòng róng hé qiān jiù bié rén de shī xìn xíng wéi",
            aEn: "Chen's departure is an act of keeping credit, not breaking it. Since he fully kept the midday arrangement, he was free to leave once the other party breached the contract. His exit shows he has principles and refuses to compromise with lateness."
        },
        {
            id: "T2",
            qZh: "当失约的朋友生气辱骂陈太丘“非人哉”时，七岁的陈元方是如何反驳对方的？",
            qPy: "dāng shī yuē de péng you shēng qì rǔ mà chén tài qīu fēi rén zāi shí qī suì de chén yuán fāng shì rú hé fǎn bó duì fāng de",
            qEn: "When the friend crossly barks 'Not a human!', how does seven-year-old Yuanfang counter-argue?",
            sZh: [
                "1. 第一步：面对一个身材高大的大人正在辱骂自己的父亲，元方有没有害怕得哭泣或者用脏话回骂？",
                "2. 第二步：元方在反驳中，说出了对方在“守信用”和“礼貌”这两个方面分别犯了什么错误？",
                "3. 第三步：他说‘君为长，父为客，止父，非礼也’，是如何合情合理地指责对方的无礼行为？"
            ],
            sPy: [
                "dì yī bù miàn duì yí gè shēn cái gāo dà de dà rén zhèng zài rǔ mà zì jǐ de fù qīn yuán fāng yǒu méi yǒu hài pà de kū qì huò zhě yòng zāng huà huí mà",
                "dì èr bù yuán fāng zài fǎn bó zhōng shuō chū le duì fāng zài shǒu xìn yòng hé lǐ mào zhè liǎng gè fāng miàn fēn bié fàn le shén me cuò wù",
                "dì sān bù tā shuō jūn wéi zhǎng fù wéi kè zhǐ fù fēi lǐ yě shì rú hé hé qíng hé lǐ de zhǐ zé duì fāng de wú lǐ xíng wéi"
            ],
            sEn: "Step 1: Facing an adult elder insulting his father, does the child cry or return raw insults?<br>Step 2: In his reply, what twin mistakes does Yuanfang highlight regarding 'keeping promises' and 'courtesy'?<br>Step 3: How does his reasoning make the elder's misbehavior completely ungrounded?",
            aZh: "陈元方表现得非常有胆量和口才。面对大人的粗暴辱骂，他没有慌乱，而是理直气壮地指出对方犯了两个严重的错误：第一，作为长辈却迟到失约，这是“不讲信用”；第二，当着小孩子的面辱骂人家的父亲，这是“不懂礼貌”。他通过长幼尊卑的道理进行反驳，既保护了父亲的尊严，又让对方在道理上完全站不住脚。",
            aPy: "chén yuán fāng biǎo xiàn de fēi cháng yǒu dǎn liàng hé kǒu cái miàn duì dà rén de cū bào rǔ mà tā méi yǒu huāng luàn fǎn ér lǐ zhí qì zhuàng de zhǐ chū duì fāng fàn le liǎng gè yán zhòng de cuò wù dì yī zuò wéi zhǎng bèi què chí dào shī yuē zhè shì bù jiǎng xìn yòng dì èr dāng zhe xiǎo hái zi de miàn rǔ mà rén jiā de fù qīn zhè shì bù dǒng lǐ mào tā tōng guò zhǎng yòu zūn bēi de dào lǐ jìn háng fǎn bó jì bǎo hù le fù qīn de zūn yán yòu ràng duì fāng zài dào lǐ shàng wán quán zhàn bú zhù jiǎo",
            aEn: "Yuanfang acts with immense courage and rhetorical skills. Avoiding emotional tantrums, he points out the adult's twin failures: arriving late breaches trust, and insulting a father breaks courtesy. This response systematically dynamic isolates the adult's moral position."
        },
        {
            id: "T3",
            qZh: "故事的最后，那个朋友已经感到羞愧，并且“下车引之”（伸手拉元方），为什么元方却“入门不顾”（走回家不回头看他）？",
            qPy: "gù shì zuì hòu nà gè péng you yǐ jīng gǎn dào xiū kuì bìng qiě xià chē yǐn zhī shēn shǒu lā yuán fāng wèi shén me yuán fāng què rù mén bú gù zǒu huí jiā bù huí tóu kàn tā",
            qEn: "At the end, the friend feels ashamed and tries to shake hands, but Yuanfang walks inside without looking back. Why?",
            sZh: [
                "1. 第一步：‘不回头看（不顾）’这个决绝的动作，表现出元方对这个不讲信用、粗暴骂人的大人的态度是高兴还是冷落？",
                "2. 第二步：在古代，当着小孩子的面辱骂人家的父亲是严重的无礼行为。对方仅仅因为难堪道歉，元方就必须要假装赔笑和好吗？",
                "3. 第三步：这个不回头的小背影，展现了元方做人做事具有怎样不盲目去讨好长辈的独立个性和自尊心？"
            ],
            sPy: [
                "dì yī bù bù huí tóu kàn bú gù zhè gè jué jué de dòng zuò biǎo xiàn chū yuán fāng duì zhè gè bù jiǎng xìn yòng cū bào mà rén de dà rén de tài dù... lěng luò",
                "dì èr bù zài gǔ dài dāng zhe xiǎo hái zi de miàn rǔ mà rén jiā de fù qīn... ma",
                "dì sān bù zhè gè bù huí tóu de xiǎo bèi yǐng zhǎn xiàn le yuán fāng zuò rén... zì zūn xīn"
            ],
            sPy: [
                "dì yī bù bù huí tóu kàn bú gù zhè gè jué jué de dòng zuò biǎo xiàn chū yuán fāng duì zhè gè bù jiǎng xìn yòng cū bào mà rén de dà rén de tài dù shì gāo xìng hái shì lěng luò",
                "dì èr bù zài gǔ dài dāng zhe xiǎo hái zi de miàn rǔ mà rén jiā de fù qīn axìng wéi duì fāng jǐn jǐn yīn wéi nán kān dào qiàn yuán fāng jiù bì xū yào jiǎ zhuāng péi xiào hé hǎo ma",
                "dì sān bù zhè gè bù huí tóu de xiǎo bèi yǐng zhǎn xiàn le yuán fāng zuò rén zuò shì jù yǒu zěn yàng bù máng mù qù tǎo hǎo zhǎng bèi de dú lì gè xìng hé zì zūn xīn"
            ],
            sEn: "Step 1: Does this visual act of ignoring the adult show Yuanfang's profound disapproval and cold rejection?<br>Step 2: Insulting a parent is a severe violation of social courtesy. Must the child smile and accept a shallow apology instantly?<br>Step 3: What does this retreating silhouette show about his personal boundaries and refusal to flatter a wrong elder?",
            aZh: "元方的“入门不顾”展现了他非常有自尊、有原则的做人态度。这个动作并不是小孩子在无理取闹地赌气，而是一种对失信、无礼行为的坚决拒绝。对方虽然下车拉手赔罪，幕后毕竟做出了不守信用、当面辱骂父亲的恶劣行为。元方不回头，说明他明辨是非、很有骨气，坚决不盲目顺从、也不无底线地去奉承讨好长辈，完美维护了家庭的尊严。",
            aPy: "yuán fāng de rù mén bú gù zhǎn xiàn le tā fēi cháng yǒu zì zūn yǒu yuán zé de zuò rén tài dù zhè gè dòng zuò bìng bú  shì xiǎo hái zi zài wú lǐ qǔ nào de dǔ qì ér shì yī zhǒng duì shī xìn wú lǐ xíng wéi de jiān jué jù jué duì fāng suī rán xià chē lā shǒu péi zuì mù hòu bì jìng zuò chū le bù shǒu xìn yòng dāng miàn rǔ mà fù qīn de è liè xíng wéi yuán fāng bù huí tóu shuō míng tā míng biàn shì fēi hěn yǒu gǔ qì jiān jué bù mǎng mù shùn cóng yě bù wú dǐ xiàn de qù fèng chēng tǎo hǎo zhǎng bèi wán měi wéi hù le jiā tíng de zūn yán",
            aEn: "The refusal to look back shows uncompromised self-respect. An elder's bad demonstration cannot be instantly excused just because he feels awkward. Yuanfang's exit protects the integrity of his character."
        },
        {
            id: "T4",
            qZh: "分析故事中那个失约的朋友，他在被七岁的小孩教训后，表现出“惭，下车引之”（感到羞愧，下车拉元方）。这说明他完全是一个坏人吗？你如何看待他的反应？",
            qPy: "fēn xī gù shì zhōng nà gè shī yuē de péng you tā zài bèi qī suì de xiǎo hái jiào xùn hòu biǎo xiàn chū cán xià chē yǐn zhī gǎn dào xiū kuì xià chē lā yuán fāng zhè shuō míng tā wán quán... fǎn yìng",
            qPy: "fēn xī gù shì zhōng nà gè shī yuē de péng you tā zài bèi qī suì de xiǎo hái jiào xùn hòu biǎo xiàn chū cán xià chē yǐn zhī gǎn dào xiū kuì xià chē lā yuán fāng zhè shuō míng tā wán quán shì gè huài rén ma nǐ rú hé kàn dài tā de fǎn yìng",
            qEn: "The friend feels ashamed ('惭') and reaches out. Does this mean he is a totally bad person? How do you view his reaction?",
            sZh: [
                "1. 第一步：如果是一个完全不要脸、不讲道理的无赖，在被七岁的小孩在大街上数落后，正常会怎么做？",
                "2. 第二步：这个朋友听到元方的质问后，内心立刻感到‘惭（羞愧）’，说明他心里其实还知道什么是对、什么是错吗？",
                "3. 第三步：他能放下长辈的高傲架子，亲自下车伸手拉小孩子道歉，展现了他有什么知错能改、讲求礼貌的闪光点？"
            ],
            sPy: [
                "dì yī bù rú guǒ shì yí gè wán quán bú yào liǎn bù jiǎng dào lǐ de wú lài zài bèi qī suì de xiǎo hái zài dà jiē shàng shǔ luo hòu zhèng cháng huì zěn me zuò",
                "dì èr bù zhè gè péng you tīng dào yuán fāng de zhì wèn hòu nèi xīn lì kè gǎn dào cán xiū kuì shuō míng tā xīn lǐ qi rshí hái zhī dào shén me shì duì shén me shì cuò ma",
                "dì sān bù tā néng fàng xià zhǎng bèi de gāo ào jià zi qīn zì xià chē shēn shǒu lā xiǎo hái zi dào qiàn zhǎn xiàn le tā yǒu shén me zhī cuò néng gǎi jiǎng qiú lǐ mào de shǎn guāng diǎn"
            ],
            sEn: "Step 1: If a completely shameless rogue was rebuked by a seven-year-old child on the street, what would he normally do?<br>Step 2: The moment he feels 'shame' ('惭'), does it prove he still recognizes right from wrong internally?<br>Step 3: What does dropping his senior ego to physically apologize reveal about his potential to correct mistakes and respect manners?",
            aZh: "他绝对不是一个完全的坏人。相反，他的反应展现出了古代读书人“知耻近乎勇、知错能改”的良好品质。虽然他有迟到和脾气粗暴的缺点，但他能够在一句句严密的指责面前，内心感到“惭（羞愧）”，并且愿意放下身为长辈的高傲架子，亲自下车拉元方的手道歉。这说明他本质上还是一个重视礼貌、能够虚心接受批评并知错能改的人。",
            aPy: "tā jué duì bú  shì yí gè wán quán de huài rén xiāng fǎn tā de fǎn yìng zhǎn xiàn chū le gǔ... gǎi de rén",
            aPy: "tā jué duì bú  shì yí gè wán quán de huài rén xiāng fǎn tā de fǎn yìng zhǎn xiàn chū le gǔ dài dú shū rén zhī chǐ jìn hū yǒng zhī cuò néng gǎi de liáng hǎo pǐn zhì suī rán tā yǒu chí dào hé pí qi cū bào de quē diǎn dàn tā néng gòu zài yī jù jù yán mì de zhǐ zé miàn qián nèi xīn gǎn dào cán xiū kuì bì quarter yuàn yì fàng xià shēn wéi zhǎng bèi de gāo ào jià zi qīn zì xià chē lā yuán fāng de shǒu dào qiàn zhè shuō míng tā běn zhì shàng hái shì yí gè zhòng shì lǐ mào néng gòu xū xīn jiē shòu pī píng bìng zhī cuò néng gǎi de rén",
            aEn: "He is not a totally hopeless villain. His sense of shame ('惭') reveals that he still respects social norms. Dropping his senior ego to offer an apology highlights the traditional virtue of acknowledging and correcting one's errors."
        },
        {
            id: "T5",
            qZh: "结合本篇《陈太丘与友期行》一文，谈谈故事里陈太丘一家的行为，给我们现代中学生的日常生活带来了什么重要的启示？",
            qPy: "jié hé běn piān chén tài qīu yǔ yǒu qī xíng yī wén tán tán gù... qǐ shì",
            qPy: "jié hé běn piān chén tài qīu yǔ yǒu qī xíng yī wén tán tán gù shì lǐ chén tài qiū yī jiā de xíng wéi gěi wǒ men xiàn dài zhōng xué shēng de rì cháng shēng huó dài lái le shén me zhòng yào de qǐ shì",
            qEn: "Connecting this story to modern times, what critical life lessons does Chen's family behavior bring to modern students?",
            sZh: [
                "1. 第一步：陈太丘‘时间到了、朋友没来就准时离开’的行为，启示我们在和同学约好时间时，应该如何做到守时和讲信用？",
                "2. 第二步：七岁元方面对长辈的不礼貌行为时，他敢于讲道理和保持尊严，启示我们青少年在日常社交中应该如何做到有自尊、不盲目拍马屁？",
                "3. 第三步：通过在同一个大网页里无缝对比学习《论语》和《世说新语》，对于我们做人做到“言行一致”有什么深远意义？"
            ],
            sPy: [
                "dì yī bù chén tài qiū shí jiān dào le... zhè shì zūn zhòng zì jǐ... qì yuē",
                "dì èr bù qī suì yuán fāng miàn duì... táng táng zhèng zhèng zuò rén",
                "dì sān bù tōng guò zài... yǒu shén me shēn yuǎn yì yì"
            ],
            sPy: [
                "dì yī bù chén tài qiū shí jiān dào le péng you méi lái jiù zhǔn shí lí kāi de xíng wéi qǐ shì wǒ men zài hé tóng xué yuē hǎo shí jiān shí yīng gāi rú hé zuò dào shǒu shí hé jiǎng xìn yòng",
                "dì èr bù qī suì yuán fāng miàn duì zhǎng bèi de bù lǐ mào xíng wéi shí tā gǎn yú jiǎng dào lǐ hé bǎo chí zì zūn qǐ shì wǒ men qīng shào nián zài rì cháng shè jiāo zhōng yīng gāi rú hé zuò dào yǒu zì zūn bù máng mù pāi mǎ pì",
                "dì sān bù tōng guò zài tóng yí gè dà wǎng yè lǐ wú fèng duì bǐ xué xí lùn yǔ hé shì shuō xīn yǔ duì yú wǒ men zuò rén zuò dào yán xíng yī zhì yǒu shén me shēn yuǎn yì yì"
            ],
            sEn: "Step 1: Chen Shi's timely departure teaches us what about keeping appointments and values in friendships?<br>Step 2: Yuanfang's calm defense and refusal to flatter a wrong adult inspires us to maintain what boundaries in modern teenage life?<br>Step 3: What is the long-term value of learning these classical texts together regarding aligning our words with our actual actions?",
            aZh: "这篇故事带给我们两个极核心的日常启示：第一是“守时与讲信用”，陈太丘按时等候、过时不候的行为，提醒现代中学生在与同学交往、小组讨论时必须严格遵守时间，这是尊重自己也尊重他人的契约。第二是“做人要有原则与自尊”，元方的据理力争和决绝背影，启示我们在面对外界不合理的无礼对待时，应该勇敢地树立个人底线，不盲目顺从无理要求，堂堂正正做人。",
            aPy: "zhè piān gù shì dài gěi wǒ men liǎng gè jí hé xīn de rì cháng qǐ shì dì yī shì shǒu shí yǔ jiǎng xìn yòng chén tài qiū àn shí děng hòu guò shí bú hòu de xíng wéi tí xǐng xiàn dài zhōng xué shēng zài yǔ tóng xué jiāo wǎng xiǎo zǔ tǎo lùn shí bì xū yán gé zūn shǒu shí jiān zhè shì zūn zhòng zì jǐ yě zūn zhòng tā rén de qì yuē dì èr shì zuò rén yào yǒu yuán zé yǔ zì zūn yuán fāng de jù lǐ lì zhēng hé jué jué bèi yǐng qǐ shì wǒ men qīng shào nián zài miàn duì wài jiè bù hé lǐ de wú lǐ duì dài shí yīng gāi yǒng gǎn de shù lì gè rén dǐ xiàn bù máng mù shùn cóng wú lǐ yāo qiú táng táng zhèng zhèng zuò rén",
            aEn: "The story delivers two core lessons: first, punctuality forms the baseline of mutual social respect in peer projects; second, teenagers must establish authentic behavioral boundaries. yuanfang's silhouette teaches us to protect our self-worth against unfair adult treatment."
        }
    ]
};

console.log("成功装配：世说新语简答题全套 5 题本地课标优化包");
