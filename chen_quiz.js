/**
 * 互动古文教学平台 - 《陈太丘与友期行》独立客观题库 (纯数组极简版)
 */

const quizQuestions = [
    {
        id: 1,
        text: "文中“君与家君期日中”一句中，“家君”是一个核心文言词汇。关于它的意思，最准确的是哪一项？",
        py: "wén zhōng jūn yǔ jiā jūn qī rì zhōng yī jù zhōng jiā jūn ㄕˋ yí gè hé xīn wén yán cí huì guān yú tā de yì sī zuì zhǔn què de ㄕˋ nǎ yī xiàng",
        en: "The term '家君' is a specific classical expression. Which definition is correct?",
        options: [
            {
                text: "这是 对自己 父亲 的 谦称 / 意思是 “我的 父亲”",
                py: "zhè ㄕˋ duì zì jǐ fù qīn de qiān chēng yì sī ㄕˋ wǒ de fù qīn",
                en: "A humble term used to refer to one's own father / Meaning 'my father'.",
                correct: true,
                explanation: "正确！在古汉语中，‘家’字头通常用于对自己亲属的谦称，例如家君家母，这是在向别人提起自己的父亲，表现出说话者很有礼貌和教养。",
                explanationPy: "zhèng què zài gǔ hàn yǔ zhōng jiā zì tóu tōng cháng yòng yú duì zì jǐ qīn shǔ de qiān chēng lì rú jiā jūn jiā mǔ zhè ㄕˋ xiàng bié rén tí qǐ zì jǐ de fù qīn biǎo xiàn chū shuō huà zhě hěn yǒu lǐ mào hé jiào yǎng",
                enExplanation: "Correct! The prefix '家' forms a humble reference to one's own father in ancient customs."
            },
            {
                text: "这是 对别人 父亲 的 尊称 / 意思是 “您的 父亲”",
                py: "zhè ㄕˋ duì bié rén fù qīn de zūn chēng yì sī ㄕˋ nín de fù qīn",
                en: "A respectful term used to address another person's father / Meaning 'your father'.",
                correct: false,
                explanation: "错误。称呼别人的父亲应该用尊称‘令尊’。如果把‘家君’错当成尊称去称呼别人的父亲，在人际交往中属于严重的没有礼貌。",
                explanationPy: "cuò wù chēng hū bié rén de fù qīn yīng gāi yòng zūn chēng lìng zūn rú guǒ bǎ jiā jūn cuò dàng chéng zūn chēng qù chēng hū bié rén de fù qīn zài rén jì jiāo wǎng zhōng shǔ yú yán zhòng de méi yǒu lǐ mào",
                enExplanation: "Incorrect. The respectful prefix for another's father is '令' (令尊)."
            },
            {
                text: "指代 当地的 最高 官员 / 意思是 “国家的 统治者”",
                py: "zhǐ dài dāng dì de zuì gāo guān yuán yì sī ㄕˋ guó jiā de tǒng zhì zhě",
                en: "Referencing the highest local official / Meaning 'the ruler of the nation'.",
                correct: false,
                explanation: "错误。这里完全猜错字面意思了。虽然‘君’字有君王、长官的意思，幕后‘家君’组合在一起时，只能用来代表自己的父亲，和当地高官没有关系。",
                explanationPy: "cuò wù zhè lǐ wán quán cāi cuò zì miàn yì sī le suī rán jūn zì yǒu jūn wáng zhǎng guān de yì sī mù hòu jiā jūn zǔ hé zài yī qǐ ㄕˋ zhǐ néng yòng lái dài biǎo zì jǐ de fù qīn hé dāng dì gāo guān méi yǒu guān xi",
                enExplanation: "Incorrect. Confuces the single character with its compound designation."
            },
            {
                text: "专门 描写 农耕 气候 / 记录 春秋 时期 农民 采摘 芦苇 过程",
                py: "zhuān mén miáo huǐ nóng gēng qì hòu jì lù chūn qiū shí qī nóng mín cǎi zhāi lú wěi guò chéng",
                en: "Describing agricultural weather / Recording ancient peasants harvesting reeds.",
                correct: false,
                explanation: "错误。这是一个完全不相干的混淆选项。这句话是在讨论人际交往的称谓，和天气、农业耕作或者收割芦苇等劳动生产完全没有联系。",
                explanationPy: "cuò wù zhè ㄕˋ yí gè wán quán bù xiāng gān de hún xiáo xuǎn xiàng zhè jù huà ㄕˋ zài tǎo lùn rén jì jiāo wǎng de chēng wèi hé tiān qì nóng yè gēng zuò huò zhě shōu gē lú wěi děng láo dòng shēng chǎn wán quán méi yǒu lián xì",
                enExplanation: "Incorrect. This decoy recycles irrelevant themes from other text modules."
            }
        ]
    },
    {
        id: 2,
        text: "文中“太丘舍去”的“去”字，在古汉语和现代汉语中的意思大不相同。以下分析最准确的是哪一项？",
        py: "wén zhōng tài qiū shè qù de qù zì zài gǔ hàn yǔ hé xiàn dài hàn yǔ zhōng de yì sī dà bù xiāng tóng yǐ xià fēn xī zuì zhǔn què de ㄕˋ nǎ yī xiàng",
        en: "The definition of '去' has changed significantly over time. Which analysis is correct?",
        options: [
            {
                text: "古义 意思是 “离开” / 现代 汉语 常用 意思 是 “前往”",
                py: "gǔ yì yì sī ㄕˋ lí kāi xiàn dài hàn yǔ cháng yòng yì sī ㄕˋ qián wǎng",
                en: "Ancient meaning stands for 'to leave' / Modern usage means 'to go to'.",
                correct: true,
                explanation: "正确！这是中学必考的古今异义字。在文言文中，‘去’字大多代表‘离开某地’（陈太丘离开了约定的地方）；而现代汉语里我们说‘去学校’，‘去’字是指前往某地，两个意思的方向正好相反。",
                explanationPy: "zhèng què zhè ㄕˋ zhōng xué bì kǎo de gǔ jīn yí yì zì zài wén yán wén zhōng qù zì dà duō dài biǎo lí kāi mǒu dì chén tài qiū lí kāi le yuē dìng de dì fang ér xiàn dài hàn yǔ lǐ wǒ men shuō qù xué xiào qù zì ㄕˋ zhǐ qián wǎng mǒu dì liǎng gè yì sī de fāng xiàng zhèng hǎo fǎn xiāng",
                enExplanation: "Correct! In classical texts, '去' means departure (leaving), whereas modern syntax uses it to mean traveling toward a destination."
            },
            {
                text: "古义 意思是 “除掉” / 现代 汉语 常用 意思 是 “放弃”",
                py: "gǔ yì yì sī ㄕˋ chú diào xiàn dài hàn yǔ cháng yòng yì sī ㄕˋ fàng qì",
                en: "Ancient meaning maps to 'to eliminate' / Modern usage translates to 'to give up'.",
                correct: false,
                explanation: "错误。虽然‘去’在特定成语里有除掉的意思（如去粗取精），但放在课文‘太丘舍去’的句子里，是指陈太丘离开的动作，解释成除掉或者放弃根本讲不通。",
                explanationPy: "cuò wù suī rán qù zài tè dìng chéng yǔ lǐ yǒu chú diào de yì sī rú qù cū qǔ jīng dàn fàng zài kè wén tài qiū shè qù de jù zi lǐ ㄕˋ zhǐ chén tài qiū lí kāi de dòng zuò jiě ㄕˋ chéng chú diào huò zhě fàng qì gēn bǎn jiǎng bù tōng",
                enExplanation: "Incorrect. Misapplies a secondary definition to a standard movement verb."
            },
            {
                text: "古义 意思是 “过去” / 指代 已经 流逝的 历史 时间",
                py: "gǔ yì yì sī ㄕˋ guò qù zhǐ dài yǐ jīng liú ㄕˋ de lì ㄕˇ shí jiān",
                en: "Ancient meaning stands for 'the past' / Referencing historical time that has elapsed.",
                correct: false,
                explanation: "错误。陈太丘当时是迈开步子走回家了，这是一个身体移动的动作，而不是在感叹过去流逝的时光，千万不要把词性给搞混了。",
                explanationPy: "cuò wù chén tài qiū dāng ㄕˊ ㄕˋ mài kāi bù zi zǒu huí jiā le zhè ㄕˋ yí gè shēn tǐ yí dòng de dòng zuò ér bú ㄕˋ zài gǎn kǎi guò qù liú ㄕˋ de ㄕˊ guāng qiān wàn bú yào bǎ cí xìng gěi gǎo hún le",
                enExplanation: "Incorrect. Confuses a concrete movement verb with a temporal adverb."
            },
            {
                text: "指 采集 芦苇 / 描写 古人 拿着 工具 寻找 的 乐器 簧片 活动",
                py: "zhǐ cǎi jí lú wěi miáo huǐ gǔ rén ná zhe gōng jù xún zhǎo de lè qì huáng piàn huó dòng",
                en: "Refers to harvesting reeds / Describing ancient people searching for musical parts.",
                correct: false,
                explanation: "错误。课文讲的是父子关于信用守时的故事，完全不包含任何去郊外收割植物或者寻找乐器配件的劳作场景，这是个故意混淆的无关选项。",
                explanationPy: "cuò wù kè wén jiǎng de ㄕˋ fù zi guān yú xìn yòng shǒu ㄕˊ de gù ㄕˋ wán quán bù bāo hán rèn hé qù jiāo wài shōu gē zhí wù huò zhě xún zhǎo lè qì pèi jiàn de láo zuò chǎng jǐng zhè ㄕˋ gè gù yì hún xiáo de wú guān xuǎn xiàng",
                enExplanation: "Incorrect. A completely irrelevant choice that has zero factual connection with the text."
            }
        ]
    },
    {
        id: 3,
        text: "课文中失约的朋友不仅不认错，反而大骂陈太丘“非人哉”，这反映出他怎样的性格特点？",
        py: "kè wén zhōng ㄕˊ yuē de péng you bù jǐn bú rèn cuò fǎn ér dà mà chén tài qiū fēi rén zāi zhè fǎn yìng chū tā zěn yàng de xìng gé tè diǎn",
        en: "The friend breaks his word and shouts 'Not a gentleman!'. what flaw does this reveal?",
        options: [
            {
                text: "不讲信用 且 脾气粗暴 / 自己 迟到 在先 却 把 责任 推给 别人",
                py: "bù jiǎng xìn yòng qiě pí qi cū bào zì jǐ chí dào zài xiān què bǎ zé rèn tuī gěi bié rén",
                en: "Lacking trustworthiness and hot-tempered / Shifting blame after arriving late.",
                correct: true,
                explanation: "正确！这个朋友自己过了中午才到，是严重的迟到和不讲信用；但他被小孩子质问后脸上挂不住，反而发脾气骂人，暴露出他不讲道理、脾气粗暴的缺点。",
                explanationPy: "zhèng què zhè gè péng you zì jǐ guò le zhōng wǔ cái dào ㄕˋ yán zhòng de chí dào hé bù jiǎng xìn yòng dàn tā bèi xiǎo hái zi zhì wèn hòu liǎn ㄕàng guà bú zhù fǎn ér fā pí qi mà rén bào lù chū tā bù jiǎng dào lǐ pí qi cū bào de quē diǎn",
                enExplanation: "Correct! The friend breaks a contract and loses his temper, showing a lack of self-discipline."
            },
            {
                text: "做事 很有 计划 / 懂得 用 严厉的 话来 测试 华人 小孩 的 口才",
                py: "zuò ㄕˋ hěn yǒu jì huà dǒng de yòng yán lì de huà lái cè ㄕˋ huá rén xiǎo hái de kǒu cái",
                en: "Highly strategic / Using harsh words to test a young Chinese child's speech.",
                correct: false,
                explanation: "错误。这个选项完全把他的粗暴行为美化了。这个朋友大骂纯粹是因为被小孩子拆穿后感到难堪而发火，并不是什么事先计划好的口才测试。",
                explanationPy: "cuò wù zhè gè xuǎn xiàng wán quán bǎ tā de cū bào xíng wéi měi huà le zhè gè péng you dà mà chún cuì ㄕˋ yīn wéi bèi xiǎo hái zi chāi chuān hòu gǎn dào nán kān ér fā huǒ bìng bú ㄕˋ ㄕˋ xiān jì huà hǎo de kǒu cái cè ㄕˋ",
                enExplanation: "Incorrect. Over-intellectualizes a simple emotional outburst."
            },
            {
                text: "性格 极其 忍耐 / 面对 别人的 批评 能够 做到 心理 一点 都不 生气",
                py: "xìng gé jí qí rěn nài miàn duì bié rén de pī píng néng gòu zuò dào xīn lǐ yī diǎn dōu bù shēng qì",
                en: "Extremely patient / Keeping calm and harboring no anger under criticism.",
                correct: false,
                explanation: "错误。他的行为和“忍耐”正好相反。他一听到陈元方说他‘不至已去’，就立刻气得破口大骂，可见他是个很容易发脾气、不能忍耐的人。",
                explanationPy: "cuò wù tā de xíng wéi hé rěn nài zhèng hǎo fǎn xiāng tā yī tīng dào chén yuán fāng shuō tā bú zhì yǐ qù jiù lì kè qì de pò kǒu dà mà kě jiàn tā ㄕˋ gè hěn róng yì fā pí qi bù néng rěn nài de rén",
                enExplanation: "Incorrect. The choice runs completely inverse to structural facts."
            },
            {
                text: "思维 极其 随机 / 正在 四处 四处 寻找 行军 打仗的 哨笛 物资",
                py: "sī wéi jí qí suí jī zhèng zài sì chù sì chù xún zhǎo xíng jūn dǎ zhàng de ㄕào dí wù zī",
                en: "Highly randomized thinking / Searching for military parts on the battlefield.",
                correct: false,
                explanation: "错误。课文讲的是日常生活中的社交故事，完全没有提到打仗、行军或者寻找乐器配件。千万不要把别的课文里的东西乱套到这里来。",
                explanationPy: "cuò wù kè wén jiǎng de ㄕˋ rì cháng shēng huó zhōng de shè jiāo gù ㄕˋ wán quán méi yǒu tí dào dǎ zhàng xíng jūn huò zhě xún zhǎo lè qì pèi jiàn qiān wàn bú yào bǎ bié de kè wén lǐ de dōng xi luàn tào dào zhè lǐ lái",
                enExplanation: "Incorrect. An artificial distractor that doesn't belong to this context."
            }
        ]
    },
    {
        id: 4,
        text: "面对朋友的辱骂，七岁的陈元方据理力争。他的回答好在哪里？",
        py: "miàn duì péng you de rǔ mà qī suì de chén yuán fāng jù lǐ lì zhēng tā de huí dá hǎo zài nǎ lǐ",
        en: "Yuanfang retorts logically. What makes his defense brilliant?",
        options: [
            {
                text: "指出 对方 的 行为 既不讲信用 也不懂礼貌 / 站在 道理 上 让 对方 无话可说",
                py: "zhǐ chū duì fāng de xíng wéi jì bù jiǎng xìn yòng yě bù dǒng lǐ mào zhàn zài dào lǐ ㄕàng ràng duì fāng wú huà kě shuō",
                en: "Pointing out the opponent is both untrustworthy and impolite / Silence him with plain facts.",
                correct: true,
                explanation: "正确！元方用‘礼’和‘信’来反驳。他指出：您是长辈却迟到，这是不讲信用；当着小孩子的面辱骂人家的父亲，这是不懂礼貌。两句话直中要害，非常有说服力。",
                explanationPy: "zhèng què yuán fāng yòng lǐ hé xìn lái fǎn bó tā zhǐ chū nín延 ㄕˋ zhǎng bèi què chí dào zhè ㄕˋ bù jiǎng xìn yòng dāng zhe xiǎo hái zi de miàn rǔ mà rén jiā de fù qīn zhè ㄕˋ bù dǒng lǐ mào liǎng jù huà zhí zhòng yào hài fēi cháng yǒu shuō fú lì",
                enExplanation: "Correct! The child targets the dual violations of trust and politeness, making his point unanswerable."
            },
            {
                text: "非常 会 讨好 别人 / 希望 能够 获得 免费 乘坐 对方 马车 的 机会",
                py: "fēi cháng huì tǎo hǎo bié rén xī wàng néng gòu huò dé miǎn fèi chéng zuò duì fāng mǎ chē de jī huì",
                en: "Flattering the adult / Hoping to get a free carriage ride from the friend.",
                correct: false,
                explanation: "错误。元方的态度非常坚定，甚至最后连头都不回地走进了家门，根本没有想要讨好对方或者占便宜去坐对方马车的想法。",
                explanationPy: "cuò wù yuán fāng de tài dù fēi cháng jiān dìng ㄕèn zhì zuì hòu lián tóu dōu bù huí de zǒu jìn le jiā mén gēn běn méi yǒu xiǎng yào tǎo hǎo duì fāng huò zhě zhàn pián yi qù zuò duì fāng mǎ chē de xiǎng fǎ",
                enExplanation: "Incorrect. Completely misreads character motivation."
            },
            {
                text: "胆子 很小 很懦弱 / 只能 躲在 家门口 哭泣 并 害怕 面对 冲突",
                py: "dǎn zi hěn xiǎo hěn nuò ruò zhǐ nǐng duǒ zài jiā mén kǒu kū qì bìng hài pà miàn duì chōng tū",
                en: "Timid and weak / Hiding by the door crying and afraid to face the adult.",
                correct: false,
                explanation: "错误。元方虽然只有七岁，幕后面对一个正在发脾气的成年人，他能够勇敢地站出来讲道理，表现得非常有胆量和自信，一点都不懦弱。",
                explanationPy: "cuò wù yuán fāng suī rán zhǐ yǒu qī suì dàn mù hòu miàn duì yí gè zhèng zài fā pí qi de chéng nián rén tā néng gòu yǒng gǎn de zhàn chū lái jiǎng dào lǐ biǎo xiàn de fēi cháng yǒu dǎn liàng hé zì xìn yì diǎn dōu bú nuò ruò",
                enExplanation: "Incorrect. Yuanfang shows immense courage and confidence during the clash."
            },
            {
                text: "指 采集 芦苇 / 描写 古代 农民 一起 顶着 太阳 寻找 的 物资 过程",
                py: "zhǐ cǎi jí lú wěi miáo huǐ gǔ dài nóng mín yī qǐ dǐng zhe tài yáng xún zhǎo de wù zī guò chéng",
                en: "Refers to harvesting reeds / Describing peasants collecting materials under the sun.",
                correct: false,
                explanation: "错误。这个选项和故事主题完全没有关系。元方是在维护父亲和家庭的尊严，和古代农民在太阳下收割芦苇等农务劳动没有任何关联。",
                explanationPy: "cuò wù zhè gè xuǎn xiàng hé gù ㄕˋ zhǔ tí wán quán méi yǒu guān xi yuán fāng ㄕˋ zài wéi hù fù qīn hé jiā tíng de zūn yán hé gǔ dài nóng mín zài tài yáng xià shōu gē lú wěi děng nóng wù láo dòng méi yǒu rèn hé guān lián",
                enExplanation: "Incorrect. Completely irrelevant decoy that tracks agricultural themes."
            }
        ]
    },
    {
        id: 5,
        text: "故事最后，友人感到羞愧并“下车引之”，但陈元方却“入门不顾”。这个动作说明了什么？",
        py: "gù ㄕˋ zuì hòu yǒu rén gǎn dào xiū kuì bìng xià chē yǐn zhī dàn chén yuán fāng què rù mén bú gù zhè gè dòng zuò shuō míng le shén me",
        en: "The narrative concludes with 'Yuanfang walked inside without looking back'. What does this show?",
        options: [
            {
                text: "说明 他 做事 有原则 、 有自尊 / 坚决 不向 不讲信用 且 粗暴 的 人 拍马屁",
                py: "shuō míng tā zuò ㄕˋ hěn yǒu yuán zé yǒu zì zūn jiān jué bú xiàng bù jiǎng xìn yòng qiě cū bào de rén pāi mǎ pì",
                en: "Showing he has principles and self-respect / Refusing to flatter an untrustworthy person.",
                correct: true,
                explanation: "正确！这是故事最精彩的部分。元方虽然年纪小，幕后明辨是非。对方既然失信、辱骂在先，哪怕现在走下车来拉手道歉，元方也保持自己的尊严，不再理会他，表现出很有骨气。",
                explanationPy: "zhèng què zhè ㄕˋ gù ㄕˋ zuì jīng cǎi de bù fèn yuán fāng suī rán nián jì xiǎo dàn mù hòu míng biàn ㄕˋ fēi duì fāng jì rán shī xìn rǔ mà zài xiān nǎ pà xiàn zài zǒu xià chē lái lā shǒu dào qiàn yuán fāng yě bǎo chí zì jǐ de zūn yán bú zài lǐ huì tā biǎo xiàn chū hěn yǒu gǔ qì",
                enExplanation: "Correct! The refusal to look back shows the child values his family's dignity over cheap social flattery."
            },
            {
                text: "说明 他 打算 绝交 / 准备 跑回家 叫 仆人 出来 把 对方 打一顿",
                py: "shuō míng tā dǎ suàn jué jiāo zhǔn bèi pǎo huí jiā jiào pú rén chū lái bǎ duì fāng dǎ yí dùn",
                en: "Showing he wants to sever ties / Preparing to call servants out to beat up the friend.",
                correct: false,
                explanation: "错误。古代文人小说记录的是道理和态度上的交锋。元方不回头是表示态度上的冷落和拒绝，并不是要跑回家叫下人出来打架。",
                explanationPy: "cuò wù gǔ dài wén rén xiǎo shuō jì lù de ㄕˋ dào lǐ hé tài dù ㄕàng de jiāo fēng yuán fāng bù huí tóu ㄕˋ biǎo ㄕˋ tài dù ㄕàng de lěng luò hé jù jué bìng bú ㄕˋ yào pǎo huí jiā jiào xià rén chū lái dǎ jià",
                enExplanation: "Incorrect. The conflict concludes in an ethical domain, not physical violence."
            },
            {
                text: "说明 他 极其 记仇 / 暴露出 他 小家子气 、 不肯 原谅 别人的 小错误",
                py: "shuō míng tā jí qí jì chóu bào lù chū tā xiǎo jiā zi qì bù kěn yuán liàng bié rén de xiǎo cuò wù",
                en: "Showing he holds a grudge / Revealing narrow-mindedness and inability to forgive small errors.",
                correct: false,
                explanation: "错误。不能用记仇来误读元方。对方不仅是迟到，还当面用脏话辱骂他的父亲。在古代，维护父亲的尊严是至关重要的，元方的‘不顾’恰恰体现了他的自尊心。",
                explanationPy: "cuò wù bù néng yòng jì chóu lái wù dú yuán fāng duì fāng bù jǐn ㄕˋ chí dào hái dāng miàn yòng zāng huà rǔ mà tā de fù qīn zài gǔ dài wéi hù fù qīn de zūn yán ㄕˋ zhì guān zhòng yào de yuán fāng de bú gù qià qià tǐ xiàn le tā de zì zūn xīn",
                enExplanation: "Incorrect. Misinterprets the purposeful protection of family honor as petty vindictiveness."
            },
            {
                text: "指 传说 结构 / 描写 农民 采摘 乐器 簧片 过程 的 机械 劳动",
                py: "zhǐ chuán shuō jié gòu miáo huǐ nóng mín cǎi zhāi lè qì huáng piàn guò chéng de jī xiè láo dòng",
                en: "Refers to legend layout / Describing peasants collecting musical parts.",
                correct: false,
                explanation: "错误。这又是一个用来凑数的错误选项。本篇故事讲的是诚信和礼貌，和农民收割植物、制作乐器配件等体力劳动完全没有任何逻辑交叉。",
                explanationPy: "cuò wù zhè yòu ㄕˋ yí gè yòng lái còu shù de cuò wù xuǎn xiàng běn piān gù ㄕˋ jiǎng de ㄕˋ chéng xìn hé lǐ mào hé nóng mín ㄕōu gē zhí wù zhì zuò lè qì pèi jiàn děng tǐ lì láo dòng wán quán méi yǒu rèn hé luó ji jiāo chā",
                enExplanation: "Incorrect. A redundant placeholder from entirely separate frontier poetry modules."
            }
        ]
    }
];

console.log("《陈太丘与友期行》独立客观题库加载成功！");
