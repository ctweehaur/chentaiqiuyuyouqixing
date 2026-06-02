/**
 * 互动古文教学平台 - 《陈太丘与友期行》原文核心词解数据包
 */

const poemData = {
    chapter_1: [
        // 陈太丘与友期行，期日中。
        { text: "陈太丘", py: "chén tài qiū", zh: "东汉人陈寔，字仲弓。太丘是他在地方任职的官名。", en: "Chen Taiqiu (Chen Shi)" },
        { text: "与", py: "yǔ", zh: "介词，同、跟、和。", en: "with" },
        { text: "友", py: "yǒu", zh: "朋友。", en: "friend" },
        { text: "期行", py: "qī xíng", zh: "约定一起出行。期，约定。", en: "agreed to travel together", exam: true },
        { text: "，", punc: true },
        { text: "期", py: "qī", zh: "约定。", en: "agreed on" },
        { text: "日中", py: "rì zhōng", zh: "正午，中午时分。", en: "noon / midday", exam: true },
        { text: "。", punc: true },

        // 过中不至，太丘舍去。
        { text: "过中", py: "guò zhōng", zh: "过了中午。", en: "past noon" },
        { text: "不", py: "bú", zh: "副词，没有。根据新马教学变调标准，后接第四声‘至’，此处读第二声。", en: "not" },
        { text: "至", py: "zhì", zh: "到、到达。", en: "arrived" },
        { text: "，", punc: true },
        { text: "太丘", py: "tài qiū", zh: "这里指陈太丘。", en: "Taiqiu" },
        { text: "舍去", py: "shè qù", zh: "离开、走了。舍，放弃、丢下。去，离开。", en: "abandoned the wait and left", exam: true },
        { text: "。", punc: true },

        // 友人至，陈元方曰：
        { text: "友人", py: "yǒu rén", zh: "那个失约的朋友。", en: "The friend" },
        { text: "至", py: "zhì", zh: "才到。", en: "arrived" },
        { text: "，", punc: true },
        { text: "陈元方", py: "chén yuán fāng", zh: "陈太丘的儿子，名纪，字元方。当时年仅七岁，聪慧明理。", en: "Chen Yuanfang" },
        { text: "曰", py: "yuē", zh: "说。", en: "said" },
        { text: "：", punc: true },

        // “君与家君期日中，不至，已去，君为何来？”
        { text: "“", punc: true },
        { text: "君", py: "jūn", zh: "您。古代对人的尊称。", en: "You (respectful form)", exam: true },
        { text: "与", py: "yǔ", zh: "跟。", en: "and" },
        { text: "家君", py: "jiā jūn", zh: "家父。谦称自己的父亲。", en: "my father (humble form)", exam: true },
        { text: "期", py: "qī", zh: "约定。", en: "agreed on" },
        { text: "日中", py: "rì zhōng", zh: "中午。", en: "noon" },
        { text: "，", punc: true },
        { text: "不", py: "bú", zh: "变调为第二声。", en: "not" },
        { text: "至", py: "zhì", zh: "没到。", en: "arrived" },
        { text: "，", punc: true },
        { text: "已", py: "yǐ", zh: "副词，已经。", en: "already" },
        { text: "去", py: "qù", zh: "离开。", en: "left" },
        { text: "，", punc: true },
        { text: "君", py: "jūn", zh: "您。", en: "you" },
        { text: "为", py: "wèi", zh: "介词，为了、因为。此处指为了什么目的。", en: "for" },
        { text: "何", py: "hé", zh: "疑问代词，什么。", en: "what" },
        { text: "来", py: "lái", zh: "前来。", en: "come" },
        { text: "？", punc: true },
        { text: "”", punc: true },

        // 友人曰：“吾敬君，故来。”
        { text: "友人", py: "yǒu rén", zh: "朋友。", en: "The friend" },
        { text: "曰", py: "yuē", zh: "说。", en: "said" },
        { text: "：", punc: true },
        { text: "“", punc: true },
        { text: "吾", py: "wú", zh: "代词，我。", en: "I" },
        { text: "敬", py: "jìng", zh: "敬重、尊敬。", en: "respect" },
        { text: "君", py: "jūn", zh: "您的父亲（指陈太丘）。", en: "your father" },
        { text: "，", punc: true },
        { text: "故", py: "gù", zh: "连词，所以、因此。", en: "therefore / so" },
        { text: "来", py: "lái", zh: "专程前来。", en: "came" },
        { text: "。", punc: true },
        { text: "”", punc: true },

        // 元方曰：“君既若此，不敬何为？”
        { text: "元方", py: "yuán fāng", zh: "陈元方。", en: "Yuanfang" },
        { text: "曰", py: "yuē", zh: "说。", en: "said" },
        { text: "：", punc: true },
        { text: "“", punc: true },
        { text: "君", py: "jūn", zh: "您。", en: "You" },
        { text: "既", py: "jì", zh: "副词，既然。", en: "since" },
        { text: "若此", py: "ruò cǐ", zh: "像这样。这里指朋友失约、不讲信用。", en: "like this / in this manner", exam: true },
        { text: "，", punc: true },
        { text: "不", py: "bú", zh: "变调为第二声。", en: "not" },
        { text: "敬", py: "jìng", zh: "不敬重、无礼。", en: "respectful" },
        { text: "何", py: "hé", zh: "什么。", en: "what" },
        { text: "为", py: "wéi", zh: "动词，做、干。何为，即‘为什么’或‘还谈什么’。", en: "do / speak of" },
        { text: "？", punc: true },
        { text: "”", punc: true },

        // 友人曰：“非人哉！与人期行，相委而去。”（🎯 核心纠正：此处必定是友人发怒，绝非门人！）
        { text: "友人", py: "yǒu rén", zh: "那个失约的朋友。因被七岁小孩质问，感到难堪而恼羞成怒。", en: "The friend" },
        { text: "曰", py: "yuē", zh: "怒骂道。", en: "said angrily" },
        { text: "：", punc: true },
        { text: "“", punc: true },
        { text: "非人哉", py: "fēi rén zāi", zh: "真不是人啊！骂人无礼、没有君子风度。哉，表感叹语气助词。", en: "What a test of character! / Not a gentleman at all!", exam: true },
        { text: "！", punc: true },
        { text: "与", py: "yǔ", zh: "跟、和。", en: "with" },
        { text: "人", py: "rén", zh: "别人（指陈太丘）。", en: "others" },
        { text: "期行", py: "qī xíng", zh: "约定出行。", en: "agreed to travel" },
        { text: "，", punc: true },
        { text: "相委而去", py: "xiāng wěi ér qù", zh: "把别人丢下就自己走了。相，这里代指‘我’。委，丢下、舍弃。去，离开。", en: "dumped me and left on his own", exam: true },
        { text: "。", punc: true },
        { text: "”", punc: true },

        // 元方曰：“君为长，父为客，止父，非礼也。”
        { text: "元方", py: "yuán fāng", zh: "陈元方。", en: "Yuanfang" },
        { text: "曰", py: "yuē", zh: "据理力争道。", en: "replied calmly" },
        { text: "：", punc: true },
        { text: "“", punc: true },
        { text: "君", py: "jūn", zh: "您。", en: "You" },
        { text: "为长", py: "wéi zhǎng", zh: "是长辈、年长者。为，是。", en: "are the elder", exam: true },
        { text: "，", punc: true },
        { text: "父", py: "fù", zh: "我父亲。", en: "my father" },
        { text: "为客", py: "wéi kè", zh: "是客人（在这里指朋友是主人，父亲是按时赴约的客人）。", en: "is the guest", exam: true },
        { text: "，", punc: true },
        { text: "止父", py: "zhǐ fù", zh: "阻止父亲。止，使动用法，使……停止、留住父亲。", en: "detaining my father", exam: true },
        { text: "，", punc: true },
        { text: "非礼也", py: "fēi lǐ yě", zh: "是不合礼节的。也，表判断语气助词。", en: "is a violation of courtesy", exam: true },
        { text: "。", punc: true },
        { text: "”", punc: true },

        // 友人惭，下车引之。
        { text: "友人", py: "yǒu rén", zh: "朋友。", en: "The friend" },
        { text: "惭", py: "cán", zh: "感到羞愧。", en: "felt deeply ashamed / embarrassed", exam: true },
        { text: "，", punc: true },
        { text: "下车", py: "xià chē", zh: "走下车子。", en: "got down from his carriage" },
        { text: "引之", py: "xià chē yǐn zhī", zh: "拉着元方的手表示歉意。引，拉、牵拉。之，代词，代指元方。", en: "pulled his hand to apologize", exam: true },
        { text: "。", punc: true },

        // 元方入门不顾。
        { text: "元方", py: "yuán fāng", zh: "陈元方。", en: "Yuanfang" },
        { text: "入门", py: "rù mén", zh: "走进家门。", en: "walked into the house" },
        { text: "不", py: "bú", zh: "变调为第二声。", en: "not" },
        { text: "顾", py: "gù", zh: "回头看。表示坚决不理会对方的无礼失信。", en: "look back", exam: true },
        { text: "。", punc: true },
        { text: "（", punc: true },
        { text: "《世说新语》", py: "shì shuō xīn yǔ", zh: "出自南朝宋临川王刘义庆组织编写的笔记小说集。", en: "From A New Account of Tales of the World" },
        { text: "）", punc: true }
    ]
};

console.log("成功加载：世说新语·陈太丘与友期行原文词解中心");
