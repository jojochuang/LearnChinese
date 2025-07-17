// Traditional Chinese Learning Game Data
const gameData = {
    // Character Recognition - From Basic to Advanced with Zhuyin
    characterRecognition: [
        // EASY BEGINNER VOCABULARY
        {
            character: '人',
            zhuyin: 'ㄖㄣˊ',
            pinyin: 'rén',
            meaning: 'person',
            level: 'beginner'
        },
        {
            character: '大',
            zhuyin: 'ㄉㄚˋ',
            pinyin: 'dà',
            meaning: 'big',
            level: 'beginner'
        },
        {
            character: '小',
            zhuyin: 'ㄒㄧㄠˇ',
            pinyin: 'xiǎo',
            meaning: 'small',
            level: 'beginner'
        },
        {
            character: '水',
            zhuyin: 'ㄕㄨㄟˇ',
            pinyin: 'shuǐ',
            meaning: 'water',
            level: 'beginner'
        },
        {
            character: '火',
            zhuyin: 'ㄏㄨㄛˇ',
            pinyin: 'huǒ',
            meaning: 'fire',
            level: 'beginner'
        },
        {
            character: '山',
            zhuyin: 'ㄕㄢ',
            pinyin: 'shān',
            meaning: 'mountain',
            level: 'beginner'
        },
        {
            character: '日',
            zhuyin: 'ㄖˋ',
            pinyin: 'rì',
            meaning: 'sun, day',
            level: 'beginner'
        },
        {
            character: '月',
            zhuyin: 'ㄩㄝˋ',
            pinyin: 'yuè',
            meaning: 'moon, month',
            level: 'beginner'
        },
        {
            character: '好',
            zhuyin: 'ㄏㄠˇ',
            pinyin: 'hǎo',
            meaning: 'good',
            level: 'beginner'
        },
        {
            character: '我',
            zhuyin: 'ㄨㄛˇ',
            pinyin: 'wǒ',
            meaning: 'I, me',
            level: 'beginner'
        },
        {
            character: '你',
            zhuyin: 'ㄋㄧˇ',
            pinyin: 'nǐ',
            meaning: 'you',
            level: 'beginner'
        },
        {
            character: '他',
            zhuyin: 'ㄊㄚ',
            pinyin: 'tā',
            meaning: 'he, him',
            level: 'beginner'
        },
        
        // INTERMEDIATE VOCABULARY - Everyday words
        {
            character: '家',
            zhuyin: 'ㄐㄧㄚ',
            pinyin: 'jiā',
            meaning: 'home, family',
            level: 'intermediate'
        },
        {
            character: '學校',
            zhuyin: 'ㄒㄩㄝˊ ㄒㄧㄠˋ',
            pinyin: 'xué xiào',
            meaning: 'school',
            level: 'intermediate'
        },
        {
            character: '朋友',
            zhuyin: 'ㄆㄥˊ ㄧㄡˇ',
            pinyin: 'péng yǒu',
            meaning: 'friend',
            level: 'intermediate'
        },
        {
            character: '食物',
            zhuyin: 'ㄕˊ ㄨˋ',
            pinyin: 'shí wù',
            meaning: 'food',
            level: 'intermediate'
        },
        {
            character: '動物',
            zhuyin: 'ㄉㄨㄥˋ ㄨˋ',
            pinyin: 'dòng wù',
            meaning: 'animal',
            level: 'intermediate'
        },
        {
            character: '顏色',
            zhuyin: 'ㄧㄢˊ ㄙㄜˋ',
            pinyin: 'yán sè',
            meaning: 'color',
            level: 'intermediate'
        },
        {
            character: '運動',
            zhuyin: 'ㄩㄣˋ ㄉㄨㄥˋ',
            pinyin: 'yùn dòng',
            meaning: 'exercise, sports',
            level: 'intermediate'
        },
        {
            character: '音樂',
            zhuyin: 'ㄧㄣ ㄩㄝˋ',
            pinyin: 'yīn yuè',
            meaning: 'music',
            level: 'intermediate'
        },
        {
            character: '遊戲',
            zhuyin: 'ㄧㄡˊ ㄒㄧˋ',
            pinyin: 'yóu xì',
            meaning: 'game',
            level: 'intermediate'
        },
        {
            character: '電影',
            zhuyin: 'ㄉㄧㄢˋ ㄧㄥˇ',
            pinyin: 'diàn yǐng',
            meaning: 'movie',
            level: 'intermediate'
        },
        {
            character: '書',
            zhuyin: 'ㄕㄨ',
            pinyin: 'shū',
            meaning: 'book',
            level: 'intermediate'
        },
        {
            character: '車',
            zhuyin: 'ㄔㄜ',
            pinyin: 'chē',
            meaning: 'car, vehicle',
            level: 'intermediate'
        },
        
        // ADVANCED VOCABULARY - Practical everyday words
        {
            character: '工作',
            zhuyin: 'ㄍㄨㄥ ㄗㄨㄛˋ',
            pinyin: 'gōng zuò',
            meaning: 'work, job',
            level: 'advanced'
        },
        {
            character: '旅行',
            zhuyin: 'ㄌㄩˇ ㄒㄧㄥˊ',
            pinyin: 'lǚ xíng',
            meaning: 'travel',
            level: 'advanced'
        },
        {
            character: '購物',
            zhuyin: 'ㄍㄡˋ ㄨˋ',
            pinyin: 'gòu wù',
            meaning: 'shopping',
            level: 'advanced'
        },
        {
            character: '天氣',
            zhuyin: 'ㄊㄧㄢ ㄑㄧˋ',
            pinyin: 'tiān qì',
            meaning: 'weather',
            level: 'advanced'
        },
        {
            character: '醫院',
            zhuyin: 'ㄧ ㄩㄢˋ',
            pinyin: 'yī yuàn',
            meaning: 'hospital',
            level: 'advanced'
        },
        {
            character: '銀行',
            zhuyin: 'ㄧㄣˊ ㄏㄤˊ',
            pinyin: 'yín háng',
            meaning: 'bank',
            level: 'advanced'
        },
        {
            character: '餐廳',
            zhuyin: 'ㄘㄢ ㄊㄧㄥ',
            pinyin: 'cān tīng',
            meaning: 'restaurant',
            level: 'advanced'
        },
        {
            character: '超市',
            zhuyin: 'ㄔㄠ ㄕˋ',
            pinyin: 'chāo shì',
            meaning: 'supermarket',
            level: 'advanced'
        },
        {
            character: '公園',
            zhuyin: 'ㄍㄨㄥ ㄩㄢˊ',
            pinyin: 'gōng yuán',
            meaning: 'park',
            level: 'advanced'
        },
        {
            character: '生日',
            zhuyin: 'ㄕㄥ ㄖˋ',
            pinyin: 'shēng rì',
            meaning: 'birthday',
            level: 'advanced'
        },
        {
            character: '禮物',
            zhuyin: 'ㄌㄧˇ ㄨˋ',
            pinyin: 'lǐ wù',
            meaning: 'gift, present',
            level: 'advanced'
        },
        {
            character: '假期',
            zhuyin: 'ㄐㄧㄚˋ ㄑㄧˊ',
            pinyin: 'jià qī',
            meaning: 'holiday, vacation',
            level: 'advanced'
        },
        {
            character: '快樂',
            zhuyin: 'ㄎㄨㄞˋ ㄌㄜˋ',
            pinyin: 'kuài lè',
            meaning: 'happy',
            level: 'advanced'
        },
        {
            character: '健康',
            zhuyin: 'ㄐㄧㄢˋ ㄎㄤ',
            pinyin: 'jiàn kāng',
            meaning: 'healthy',
            level: 'advanced'
        },
        {
            character: '蝴蝶',
            zhuyin: 'ㄏㄨˊ ㄉㄧㄝˊ',
            meaning: 'butterfly',
            level: 'advanced'
        },
        {
            character: '氣球',
            zhuyin: 'ㄑㄧˋ ㄑㄧㄡˊ',
            meaning: 'balloon',
            level: 'advanced'
        },
        {
            character: '棒棒糖',
            zhuyin: 'ㄅㄤˋ ㄅㄤˋ ㄊㄤˊ',
            meaning: 'lollipop',
            level: 'advanced'
        },
        {
            character: '盪鞦韆',
            zhuyin: 'ㄉㄤˋ ㄑㄧㄡ ㄑㄧㄢ',
            meaning: 'swing (playground)',
            level: 'advanced'
        },
        
        // Animals & Nature for Kids
        {
            character: '小狗',
            zhuyin: 'ㄒㄧㄠˇ ㄍㄡˇ',
            meaning: 'puppy',
            level: 'advanced'
        },
        {
            character: '小貓',
            zhuyin: 'ㄒㄧㄠˇ ㄇㄠ',
            meaning: 'kitten',
            level: 'advanced'
        },
        {
            character: '蝴蝶',
            zhuyin: 'ㄏㄨˊ ㄉㄧㄝˊ',
            meaning: 'butterfly',
            level: 'advanced'
        },
        {
            character: '花朵',
            zhuyin: 'ㄏㄨㄚ ㄉㄨㄛˇ',
            meaning: 'flower',
            level: 'advanced'
        },
        {
            character: '彩虹',
            zhuyin: 'ㄘㄞˇ ㄏㄨㄥˊ',
            meaning: 'rainbow',
            level: 'advanced'
        },
        {
            character: '蛋糕',
            zhuyin: 'ㄉㄢˋ ㄍㄠ',
            meaning: 'cake',
            level: 'advanced'
        },
        {
            character: '氣球',
            zhuyin: 'ㄑㄧˋ ㄑㄧㄡˊ',
            meaning: 'balloon',
            level: 'advanced'
        },
        {
            character: '積木',
            zhuyin: 'ㄐㄧ ㄇㄨˋ',
            meaning: 'building blocks',
            level: 'advanced'
        },
        {
            character: '搖籃',
            zhuyin: 'ㄧㄠˊ ㄌㄢˊ',
            meaning: 'cradle',
            level: 'advanced'
        },
        {
            character: '故事書',
            zhuyin: 'ㄍㄨˋ ㄕˋ ㄕㄨ',
            meaning: 'storybook',
            level: 'advanced'
        },
        
        // Advanced Literary & Cultural Terms
        {
            character: '詩經',
            zhuyin: 'ㄕ ㄐㄧㄥ',
            meaning: 'Book of Poetry (Classic)',
            level: 'advanced'
        },
        {
            character: '論語',
            zhuyin: 'ㄌㄨㄣˋ ㄩˇ',
            meaning: 'Analects (Confucian)',
            level: 'advanced'
        },
        {
            character: '易經',
            zhuyin: 'ㄧˋ ㄐㄧㄥ',
            meaning: 'I Ching (Book of Changes)',
            level: 'expert'
        },
        {
            character: '春秋',
            zhuyin: 'ㄔㄨㄣ ㄑㄧㄡ',
            meaning: 'Spring and Autumn Annals',
            level: 'expert'
        },
        {
            character: '禮記',
            zhuyin: 'ㄌㄧˇ ㄐㄧˋ',
            meaning: 'Book of Rites',
            level: 'expert'
        },
        {
            character: '詞彙學',
            zhuyin: 'ㄘˊ ㄏㄨㄟˋ ㄒㄩㄝˊ',
            meaning: 'lexicology',
            level: 'expert'
        },
        {
            character: '語法學',
            zhuyin: 'ㄩˇ ㄈㄚˇ ㄒㄩㄝˊ',
            meaning: 'syntax, grammar study',
            level: 'advanced'
        },
        {
            character: '修辭學',
            zhuyin: 'ㄒㄧㄡ ㄘˊ ㄒㄩㄝˊ',
            meaning: 'rhetoric',
            level: 'advanced'
        },
        
        // Fun Daily Activities for Kids
        {
            character: '玩具',
            zhuyin: 'ㄨㄢˊ ㄐㄩˋ',
            meaning: 'toy',
            level: 'advanced'
        },
        {
            character: '糖果',
            zhuyin: 'ㄊㄤˊ ㄍㄨㄛˇ',
            meaning: 'candy',
            level: 'advanced'
        },
        {
            character: '遊戲',
            zhuyin: 'ㄧㄡˊ ㄒㄧˋ',
            meaning: 'game',
            level: 'advanced'
        },
        {
            character: '卡通',
            zhuyin: 'ㄎㄚˇ ㄊㄨㄥ',
            meaning: 'cartoon',
            level: 'advanced'
        },
        {
            character: '公園',
            zhuyin: 'ㄍㄨㄥ ㄩㄢˊ',
            meaning: 'park',
            level: 'advanced'
        },
        {
            character: '腳踏車',
            zhuyin: 'ㄐㄧㄠˇ ㄊㄚˋ ㄔㄜ',
            meaning: 'bicycle',
            level: 'advanced'
        },
        {
            character: '冰淇淋',
            zhuyin: 'ㄅㄧㄥ ㄑㄧˊ ㄌㄧㄣˊ',
            meaning: 'ice cream',
            level: 'advanced'
                  }
    ],

    // Vocabulary Building - Simple Everyday Words for Beginners
    vocabulary: [
        // BASIC GREETINGS & POLITENESS
        {
            chinese: '你好',
            zhuyin: 'ㄋㄧˇ ㄏㄠˇ',
            pinyin: 'nǐ hǎo',
            english: 'hello',
            level: 'beginner'
        },
        {
            chinese: '謝謝',
            zhuyin: 'ㄒㄧㄝˋ ㄒㄧㄝˋ',
            pinyin: 'xiè xiè',
            english: 'thank you',
            level: 'beginner'
        },
        {
            chinese: '再見',
            zhuyin: 'ㄗㄞˋ ㄐㄧㄢˋ',
            pinyin: 'zài jiàn',
            english: 'goodbye',
            level: 'beginner'
        },
        {
            chinese: '對不起',
            zhuyin: 'ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ',
            pinyin: 'duì bù qǐ',
            english: 'sorry',
            level: 'beginner'
        },
        
        // COLORS - SIMPLE AND USEFUL
        {
            chinese: '紅色',
            zhuyin: 'ㄏㄨㄥˊ ㄙㄜˋ',
            pinyin: 'hóng sè',
            english: 'red',
            level: 'beginner'
        },
        {
            chinese: '藍色',
            zhuyin: 'ㄌㄢˊ ㄙㄜˋ',
            pinyin: 'lán sè',
            english: 'blue',
            level: 'beginner'
        },
        {
            chinese: '黃色',
            zhuyin: 'ㄏㄨㄤˊ ㄙㄜˋ',
            pinyin: 'huáng sè',
            english: 'yellow',
            level: 'beginner'
        },
        {
            chinese: '綠色',
            zhuyin: 'ㄌㄩˋ ㄙㄜˋ',
            pinyin: 'lǜ sè',
            english: 'green',
            level: 'beginner'
        },
        {
            chinese: '白色',
            zhuyin: 'ㄅㄞˊ ㄙㄜˋ',
            pinyin: 'bái sè',
            english: 'white',
            level: 'beginner'
        },
        {
            chinese: '黑色',
            zhuyin: 'ㄏㄟ ㄙㄜˋ',
            pinyin: 'hēi sè',
            english: 'black',
            level: 'beginner'
        },
        
        // NUMBERS - ESSENTIAL FOR BEGINNERS
        {
            chinese: '一',
            zhuyin: 'ㄧ',
            pinyin: 'yī',
            english: 'one',
            level: 'beginner'
        },
        {
            chinese: '二',
            zhuyin: 'ㄦˋ',
            pinyin: 'èr',
            english: 'two',
            level: 'beginner'
        },
        {
            chinese: '三',
            zhuyin: 'ㄙㄢ',
            pinyin: 'sān',
            english: 'three',
            level: 'beginner'
        },
        {
            chinese: '四',
            zhuyin: 'ㄙˋ',
            pinyin: 'sì',
            english: 'four',
            level: 'beginner'
        },
        {
            chinese: '五',
            zhuyin: 'ㄨˇ',
            pinyin: 'wǔ',
            english: 'five',
            level: 'beginner'
        },
        
        // FAMILY - VERY PRACTICAL
        {
            chinese: '媽媽',
            zhuyin: 'ㄇㄚ ㄇㄚ',
            pinyin: 'mā ma',
            english: 'mom',
            level: 'beginner'
        },
        {
            chinese: '爸爸',
            zhuyin: 'ㄅㄚˋ ㄅㄚˋ',
            pinyin: 'bà ba',
            english: 'dad',
            level: 'beginner'
        },
        {
            chinese: '姐姐',
            zhuyin: 'ㄐㄧㄝˇ ㄐㄧㄝˇ',
            pinyin: 'jiě jie',
            english: 'sister',
            level: 'beginner'
        },
        {
            chinese: '弟弟',
            zhuyin: 'ㄉㄧˋ ㄉㄧˋ',
            pinyin: 'dì di',
            english: 'brother',
            level: 'beginner'
        },
        
        // BASIC ACTIONS
        {
            chinese: '吃',
            zhuyin: 'ㄔ',
            pinyin: 'chī',
            english: 'eat',
            level: 'beginner'
        },
        {
            chinese: '喝',
            zhuyin: 'ㄏㄜ',
            pinyin: 'hē',
            english: 'drink',
            level: 'beginner'
        },
        {
            chinese: '睡',
            zhuyin: 'ㄕㄨㄟˋ',
            pinyin: 'shuì',
            english: 'sleep',
            level: 'beginner'
        },
        {
            chinese: '走',
            zhuyin: 'ㄗㄡˇ',
            pinyin: 'zǒu',
            english: 'walk',
            level: 'beginner'
        },
        {
            chinese: '跑',
            zhuyin: 'ㄆㄠˇ',
            pinyin: 'pǎo',
            english: 'run',
            level: 'beginner'
        },
        
        // SIMPLE OBJECTS
        {
            chinese: '書',
            zhuyin: 'ㄕㄨ',
            pinyin: 'shū',
            english: 'book',
            level: 'beginner'
        },
        {
            chinese: '筆',
            zhuyin: 'ㄅㄧˇ',
            pinyin: 'bǐ',
            english: 'pen',
            level: 'beginner'
        },
        {
            chinese: '桌子',
            zhuyin: 'ㄓㄨㄛ ㄗˇ',
            pinyin: 'zhuō zi',
            english: 'table',
            level: 'beginner'
        },
        {
            chinese: '椅子',
            zhuyin: 'ㄧˇ ㄗˇ',
            pinyin: 'yǐ zi',
            english: 'chair',
            level: 'beginner'
        },
        {
            chinese: '杯子',
            zhuyin: 'ㄅㄟ ㄗˇ',
            pinyin: 'bēi zi',
            english: 'cup',
            level: 'beginner'
        },
        
        // BODY PARTS - USEFUL AND SIMPLE
        {
            chinese: '手',
            zhuyin: 'ㄕㄡˇ',
            pinyin: 'shǒu',
            english: 'hand',
            level: 'beginner'
        },
        {
            chinese: '腳',
            zhuyin: 'ㄐㄧㄠˇ',
            pinyin: 'jiǎo',
            english: 'foot',
            level: 'beginner'
        },
        {
            chinese: '眼睛',
            zhuyin: 'ㄧㄢˇ ㄐㄧㄥ',
            pinyin: 'yǎn jīng',
            english: 'eyes',
            level: 'beginner'
        },
        {
            chinese: '嘴巴',
            zhuyin: 'ㄗㄨㄟˇ ㄅㄚ',
            pinyin: 'zuǐ ba',
            english: 'mouth',
            level: 'beginner'
        },
        
        // SIMPLE DESCRIPTORS
        {
            chinese: '大',
            zhuyin: 'ㄉㄚˋ',
            pinyin: 'dà',
            english: 'big',
            level: 'beginner'
        },
        {
            chinese: '小',
            zhuyin: 'ㄒㄧㄠˇ',
            pinyin: 'xiǎo',
            english: 'small',
            level: 'beginner'
        },
        {
            chinese: '好',
            zhuyin: 'ㄏㄠˇ',
            pinyin: 'hǎo',
            english: 'good',
            level: 'beginner'
        },
        {
            chinese: '快',
            zhuyin: 'ㄎㄨㄞˋ',
            pinyin: 'kuài',
            english: 'fast',
            level: 'beginner'
        },
        {
            chinese: '慢',
            zhuyin: 'ㄇㄢˋ',
            pinyin: 'màn',
            english: 'slow',
            level: 'beginner'
        },
        {
            chinese: '跳繩',
            zhuyin: 'ㄊㄧㄠˋ ㄕㄥˊ',
            english: 'jump rope',
            level: 'advanced'
        },
        {
            chinese: '玩玩具',
            zhuyin: 'ㄨㄢˊ ㄨㄢˊ ㄐㄩˋ',
            english: 'play with toys',
            level: 'advanced'
        },
        {
            chinese: '吃冰淇淋',
            zhuyin: 'ㄔ ㄅㄧㄥ ㄑㄧˊ ㄌㄧㄣˊ',
            english: 'eat ice cream',
            level: 'advanced'
        },
        {
            chinese: '騎腳踏車',
            zhuyin: 'ㄑㄧˊ ㄐㄧㄠˇ ㄊㄚˋ ㄔㄜ',
            english: 'ride a bicycle',
            level: 'advanced'
        },
        {
            chinese: '堆沙堡',
            zhuyin: 'ㄉㄨㄟ ㄕㄚ ㄅㄠˇ',
            english: 'build sandcastles',
            level: 'advanced'
        },
        {
            chinese: '看卡通',
            zhuyin: 'ㄎㄢˋ ㄎㄚˇ ㄊㄨㄥ',
            english: 'watch cartoons',
            level: 'advanced'
        },
        {
            chinese: '和朋友玩遊戲',
            zhuyin: 'ㄏㄜˊ ㄆㄥˊ ㄧㄡˇ ㄨㄢˊ ㄧㄡˊ ㄒㄧˋ',
            english: 'play games with friends',
            level: 'advanced'
        },
        {
            chinese: '收集貼紙',
            zhuyin: 'ㄕㄡ ㄐㄧˊ ㄊㄧㄝ ㄓˇ',
            english: 'collect stickers',
            level: 'advanced'
        },
        {
            chinese: '畫畫',
            zhuyin: 'ㄏㄨㄚˋ ㄏㄨㄚˋ',
            english: 'draw pictures',
            level: 'advanced'
        }
    ],

    // Sentence Scramble Data - From Simple to Advanced Sentences
    sentenceScramble: [
        // EASY BEGINNER SENTENCES
        {
            sentence: '我很好',
            zhuyin: 'ㄨㄛˇ ㄏㄣˇ ㄏㄠˇ',
            english: 'I am fine',
            words: ['我', '很', '好'],
            level: 'beginner'
        },
        {
            sentence: '你好嗎',
            zhuyin: 'ㄋㄧˇ ㄏㄠˇ ㄇㄚ˙',
            english: 'How are you?',
            words: ['你', '好', '嗎'],
            level: 'beginner'
        },
        {
            sentence: '今天很熱',
            zhuyin: 'ㄐㄧㄣ ㄊㄧㄢ ㄏㄣˇ ㄖㄜˋ',
            english: 'Today is very hot',
            words: ['今天', '很', '熱'],
            level: 'beginner'
        },
        {
            sentence: '我喜歡吃飯',
            zhuyin: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄔ ㄈㄢˋ',
            english: 'I like to eat',
            words: ['我', '喜歡', '吃飯'],
            level: 'beginner'
        },
        
        // INTERMEDIATE SENTENCES
        {
            sentence: '我喜歡和同學一起玩遊戲',
            zhuyin: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄏㄜˊ ㄊㄨㄥˊ ㄒㄩㄝˊ ㄧˋ ㄑㄧˇ ㄨㄢˊ ㄧㄡˊ ㄒㄧˋ',
            english: 'I like to play games with my classmates',
            words: ['我喜歡', '和同學', '一起', '玩遊戲'],
            level: 'intermediate'
        },
        {
            sentence: '貓咪喜歡在陽台上曬太陽',
            zhuyin: 'ㄇㄠ ㄇㄧ ㄒㄧˇ ㄏㄨㄢ ㄗㄞˋ ㄧㄤˊ ㄊㄞˊ ㄕㄤˋ ㄕㄞˋ ㄊㄞˋ ㄧㄤˊ',
            english: 'The cat likes to sunbathe on the balcony',
            words: ['貓咪', '喜歡', '在陽台上', '曬太陽'],
            level: 'intermediate'
        },
        {
            sentence: '姐姐教我畫漂亮的圖畫',
            zhuyin: 'ㄐㄧㄝˇ ㄐㄧㄝˇ ㄐㄧㄠ ㄨㄛˇ ㄏㄨㄚˋ ㄆㄧㄠˋ ㄌㄧㄤˋ ㄉㄜ˙ ㄊㄨˊ ㄏㄨㄚˋ',
            english: 'My sister teaches me to draw beautiful pictures',
            words: ['姐姐', '教我', '畫', '漂亮的圖畫'],
            level: 'intermediate'
        },
        
        // NEW ADVANCED SENTENCES - Simple Topics for Kids
        {
            sentence: '我和朋友一起去公園玩',
            zhuyin: 'ㄨㄛˇ ㄏㄜˊ ㄆㄥˊ ㄧㄡˇ ㄧˋ ㄑㄧˇ ㄑㄩˋ ㄍㄨㄥ ㄩㄢˊ ㄨㄢˊ',
            english: 'I go to the park to play with my friends',
            words: ['我和朋友', '一起', '去', '公園', '玩'],
            level: 'advanced'
        },
        {
            sentence: '媽媽做的蛋糕很好吃',
            zhuyin: 'ㄇㄚ ㄇㄚ ㄗㄨㄛˋ ㄉㄜ˙ ㄉㄢˋ ㄍㄠ ㄏㄣˇ ㄏㄠˇ ㄔ',
            english: 'The cake mom made is very delicious',
            words: ['媽媽做的', '蛋糕', '很好吃'],
            level: 'advanced'
        },
        {
            sentence: '我的小狗喜歡在院子裡跑來跑去',
            zhuyin: 'ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄠˇ ㄍㄡˇ ㄒㄧˇ ㄏㄨㄢ ㄗㄞˋ ㄩㄢˋ ㄗˇ ㄌㄧˇ ㄆㄠˇ ㄌㄞˊ ㄆㄠˇ ㄑㄩˋ',
            english: 'My little dog likes to run around in the yard',
            words: ['我的小狗', '喜歡', '在院子裡', '跑來跑去'],
            level: 'advanced'
        },
        {
            sentence: '老師說明天要考數學',
            zhuyin: 'ㄌㄠˇ ㄕ ㄕㄨㄛ ㄇㄧㄥˊ ㄊㄧㄢ ㄧㄠˋ ㄎㄠˇ ㄕㄨˋ ㄒㄩㄝˊ',
            english: 'The teacher said we have a math test tomorrow',
            words: ['老師', '說', '明天', '要考', '數學'],
            level: 'advanced'
        },
        {
            sentence: '下雨天我喜歡在家裡看書',
            zhuyin: 'ㄒㄧㄚˋ ㄩˇ ㄊㄧㄢ ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄗㄞˋ ㄐㄧㄚ ㄌㄧˇ ㄎㄢˋ ㄕㄨ',
            english: 'On rainy days I like to read books at home',
            words: ['下雨天', '我喜歡', '在家裡', '看書'],
            level: 'advanced'
        },
        {
            sentence: '爸爸教我騎腳踏車',
            zhuyin: 'ㄅㄚˋ ㄅㄚˋ ㄐㄧㄠ ㄨㄛˇ ㄑㄧˊ ㄐㄧㄠˇ ㄊㄚˋ ㄔㄜ',
            english: 'Dad teaches me how to ride a bicycle',
            words: ['爸爸', '教我', '騎腳踏車'],
            level: 'advanced'
        },
        {
            sentence: '我們班有二十五個學生',
            zhuyin: 'ㄨㄛˇ ㄇㄣ˙ ㄅㄢ ㄧㄡˇ ㄦˋ ㄕˊ ㄨˇ ㄍㄜˋ ㄒㄩㄝˊ ㄕㄥ',
            english: 'There are twenty-five students in our class',
            words: ['我們班', '有', '二十五個', '學生'],
            level: 'advanced'
        },
        {
            sentence: '奶奶給我講有趣的故事',
            zhuyin: 'ㄋㄞˇ ㄋㄞˇ ㄍㄟˇ ㄨㄛˇ ㄐㄧㄤˇ ㄧㄡˇ ㄑㄩˋ ㄉㄜ˙ ㄍㄨˋ ㄕˋ',
            english: 'Grandma tells me interesting stories',
            words: ['奶奶', '給我', '講', '有趣的故事'],
            level: 'advanced'
        },
        {
            sentence: '夏天的時候我們去海邊游泳',
            zhuyin: 'ㄒㄧㄚˋ ㄊㄧㄢ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄏㄞˇ ㄅㄧㄢ ㄧㄡˊ ㄩㄥˇ',
            english: 'In summer we go swimming at the beach',
            words: ['夏天的時候', '我們', '去海邊', '游泳'],
            level: 'advanced'
        },
        {
            sentence: '我最喜歡的顏色是藍色',
            zhuyin: 'ㄨㄛˇ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄧㄢˊ ㄙㄜˋ ㄕˋ ㄌㄢˊ ㄙㄜˋ',
            english: 'My favorite color is blue',
            words: ['我最喜歡的', '顏色', '是', '藍色'],
            level: 'advanced'
        },
        {
            sentence: '弟弟喜歡玩積木和玩具車',
            zhuyin: 'ㄉㄧˋ ㄉㄧˋ ㄒㄧˇ ㄏㄨㄢ ㄨㄢˊ ㄐㄧ ㄇㄨˋ ㄏㄜˊ ㄨㄢˊ ㄐㄩˋ ㄔㄜ',
            english: 'My little brother likes to play with blocks and toy cars',
            words: ['弟弟', '喜歡玩', '積木和', '玩具車'],
            level: 'advanced'
        },
        {
            sentence: '學校的午餐今天是炒飯',
            zhuyin: 'ㄒㄩㄝˊ ㄒㄧㄠˋ ㄉㄜ˙ ㄨˇ ㄘㄢ ㄐㄧㄣ ㄊㄧㄢ ㄕˋ ㄔㄠˇ ㄈㄢˋ',
            english: 'Today\'s school lunch is fried rice',
            words: ['學校的午餐', '今天', '是', '炒飯'],
            level: 'advanced'
        }
    ],

    // Stroke Order Data - From Simple to Complex Characters
    strokeOrder: [
        // EASY CHARACTERS (1-3 strokes) - Fixed accurate stroke positioning
        {
            character: '一',
            zhuyin: 'ㄧ',
            pinyin: 'yī',
            meaning: 'one',
            strokes: ['一'],
            strokeCount: 1,
            strokeGuides: [
                { start: { x: 120, y: 200 }, end: { x: 280, y: 200 }, description: 'horizontal line from left to right' }
            ]
        },
        {
            character: '人',
            zhuyin: 'ㄖㄣˊ',
            pinyin: 'rén',
            meaning: 'person',
            strokes: ['丿', '㇏'],
            strokeCount: 2,
            strokeGuides: [
                { start: { x: 200, y: 140 }, end: { x: 160, y: 260 }, description: 'left falling stroke' },
                { start: { x: 200, y: 140 }, end: { x: 240, y: 260 }, description: 'right falling stroke' }
            ]
        },
        {
            character: '大',
            zhuyin: 'ㄉㄚˋ',
            pinyin: 'dà',
            meaning: 'big',
            strokes: ['一', '丿', '㇏'],
            strokeCount: 3,
            strokeGuides: [
                { start: { x: 150, y: 160 }, end: { x: 250, y: 160 }, description: 'top horizontal line' },
                { start: { x: 200, y: 140 }, end: { x: 140, y: 280 }, description: 'left falling stroke' },
                { start: { x: 200, y: 140 }, end: { x: 260, y: 280 }, description: 'right falling stroke' }
            ]
        },
        {
            character: '小',
            zhuyin: 'ㄒㄧㄠˇ',
            pinyin: 'xiǎo',
            meaning: 'small',
            strokes: ['丨', '丿', '丶'],
            strokeCount: 3,
            strokeGuides: [
                { start: { x: 200, y: 130 }, end: { x: 200, y: 220 }, description: 'center vertical line' },
                { start: { x: 170, y: 250 }, end: { x: 150, y: 280 }, description: 'left small stroke' },
                { start: { x: 230, y: 250 }, end: { x: 250, y: 280 }, description: 'right small stroke' }
            ]
        },
        
        // INTERMEDIATE CHARACTERS (4-6 strokes) - Fixed realistic positioning  
        {
            character: '水',
            zhuyin: 'ㄕㄨㄟˇ',
            pinyin: 'shuǐ',
            meaning: 'water',
            strokes: ['丨', '㇓', '丿', '㇏'],
            strokeCount: 4,
            strokeGuides: [
                { start: { x: 200, y: 130 }, end: { x: 200, y: 190 }, description: 'center vertical line' },
                { start: { x: 150, y: 180 }, end: { x: 250, y: 185 }, description: 'horizontal crossing stroke with slight hook' },
                { start: { x: 160, y: 220 }, end: { x: 140, y: 280 }, description: 'bottom left falling stroke' },
                { start: { x: 240, y: 220 }, end: { x: 260, y: 280 }, description: 'bottom right falling stroke' }
            ]
        },
        {
            character: '火',
            zhuyin: 'ㄏㄨㄛˇ',
            pinyin: 'huǒ',
            meaning: 'fire',
            strokes: ['丶', '丿', '丿', '㇏'],
            strokeCount: 4,
            strokeGuides: [
                { start: { x: 200, y: 130 }, end: { x: 202, y: 140 }, description: 'top center dot' },
                { start: { x: 185, y: 160 }, end: { x: 170, y: 200 }, description: 'left short diagonal' },
                { start: { x: 195, y: 170 }, end: { x: 160, y: 280 }, description: 'long left falling stroke' },
                { start: { x: 205, y: 170 }, end: { x: 240, y: 280 }, description: 'long right falling stroke' }
            ]
        },
        
        // ADVANCED CHARACTERS - Fixed realistic calligraphy positioning
        {
            character: '學',
            zhuyin: 'ㄒㄩㄝˊ',
            pinyin: 'xué',
            meaning: 'study, learn',
            strokes: ['丶', '丶', '一', '丨', '㇖', '一', '一', '一'],
            strokeCount: 8,
            strokeGuides: [
                { start: { x: 160, y: 100 }, end: { x: 162, y: 110 }, description: 'top left dot' },
                { start: { x: 240, y: 100 }, end: { x: 242, y: 110 }, description: 'top right dot' },
                { start: { x: 140, y: 130 }, end: { x: 260, y: 130 }, description: 'top horizontal line' },
                { start: { x: 200, y: 115 }, end: { x: 200, y: 170 }, description: 'center vertical line' },
                { start: { x: 170, y: 190 }, end: { x: 230, y: 195 }, description: 'middle horizontal with hook' },
                { start: { x: 150, y: 220 }, end: { x: 250, y: 220 }, description: 'lower horizontal line' },
                { start: { x: 150, y: 250 }, end: { x: 250, y: 250 }, description: 'second lower horizontal' },
                { start: { x: 150, y: 280 }, end: { x: 250, y: 280 }, description: 'bottom horizontal line' }
            ]
        },
        {
            character: '環',
            zhuyin: 'ㄏㄨㄢˊ',
            pinyin: 'huán',
            meaning: 'environment',
            strokes: ['一', '一', '丨', '一', '丨', '㇔', '丨', '㇕', '一', '一', '一'],
            strokeCount: 11,
            strokeGuides: [
                { start: { x: 120, y: 120 }, end: { x: 180, y: 120 }, description: 'top horizontal line (left)' },
                { start: { x: 220, y: 120 }, end: { x: 280, y: 120 }, description: 'top horizontal line (right)' },
                { start: { x: 150, y: 110 }, end: { x: 150, y: 190 }, description: 'left vertical line' },
                { start: { x: 120, y: 160 }, end: { x: 180, y: 160 }, description: 'middle horizontal line (left)' },
                { start: { x: 250, y: 110 }, end: { x: 250, y: 190 }, description: 'right vertical line' },
                { start: { x: 190, y: 140 }, end: { x: 240, y: 180 }, description: 'connecting diagonal' },
                { start: { x: 200, y: 200 }, end: { x: 200, y: 280 }, description: 'center bottom vertical' },
                { start: { x: 170, y: 230 }, end: { x: 230, y: 240 }, description: 'bottom left to right hook' },
                { start: { x: 140, y: 260 }, end: { x: 260, y: 260 }, description: 'bottom horizontal line' },
                { start: { x: 150, y: 280 }, end: { x: 250, y: 280 }, description: 'final horizontal line' },
                { start: { x: 180, y: 300 }, end: { x: 220, y: 300 }, description: 'bottom seal line' }
            ]
        },
        {
            character: '花',
            zhuyin: 'ㄏㄨㄚ',
            pinyin: 'huā',
            meaning: 'flower',
            strokes: ['一', '丨', '丨', '一', '一', '一', '丨'],
            strokeCount: 7,
            strokeGuides: [
                { start: { x: 120, y: 120 }, end: { x: 180, y: 120 }, description: 'top horizontal line' },
                { start: { x: 220, y: 120 }, end: { x: 280, y: 120 }, description: 'top horizontal line (right)' },
                { start: { x: 150, y: 110 }, end: { x: 150, y: 200 }, description: 'left vertical line' },
                { start: { x: 120, y: 160 }, end: { x: 180, y: 160 }, description: 'middle horizontal line (left)' },
                { start: { x: 250, y: 110 }, end: { x: 250, y: 200 }, description: 'right vertical line' },
                { start: { x: 220, y: 160 }, end: { x: 280, y: 170 }, description: 'right diagonal stroke' },
                { start: { x: 120, y: 200 }, end: { x: 180, y: 200 }, description: 'bottom horizontal line (left)' },
                { start: { x: 200, y: 180 }, end: { x: 200, y: 280 }, description: 'center vertical line' },
                { start: { x: 170, y: 280 }, end: { x: 230, y: 280 }, description: 'final bottom line' }
            ]
        },
        {
            character: '實',
            zhuyin: 'ㄕˊ',
            meaning: 'real, actual',
            strokes: ['丶', '丶', '㇔', '一', '一', '一', '一', '丨', '一', '一', '一', '一', '丶'],
            strokeCount: 13,
            strokeGuides: [
                { start: { x: 140, y: 90 }, end: { x: 145, y: 105 }, description: 'top left dot' },
                { start: { x: 180, y: 90 }, end: { x: 185, y: 105 }, description: 'top right dot' },
                { start: { x: 120, y: 120 }, end: { x: 200, y: 130 }, description: 'diagonal with hook' },
                { start: { x: 120, y: 150 }, end: { x: 280, y: 150 }, description: 'first long horizontal' },
                { start: { x: 140, y: 170 }, end: { x: 260, y: 170 }, description: 'second horizontal' },
                { start: { x: 150, y: 190 }, end: { x: 250, y: 190 }, description: 'third horizontal' },
                { start: { x: 160, y: 210 }, end: { x: 240, y: 210 }, description: 'fourth horizontal' },
                { start: { x: 200, y: 140 }, end: { x: 200, y: 250 }, description: 'center vertical line' },
                { start: { x: 130, y: 230 }, end: { x: 270, y: 230 }, description: 'bottom area horizontal' },
                { start: { x: 140, y: 250 }, end: { x: 260, y: 250 }, description: 'lower horizontal' },
                { start: { x: 150, y: 270 }, end: { x: 250, y: 270 }, description: 'second bottom horizontal' },
                { start: { x: 160, y: 290 }, end: { x: 240, y: 290 }, description: 'final horizontal' },
                { start: { x: 220, y: 300 }, end: { x: 225, y: 315 }, description: 'final dot' }
            ]
        },
        {
            character: '創',
            zhuyin: 'ㄔㄨㄤˋ',
            meaning: 'create',
            strokes: ['㇐', '一', '丨', '一', '一', '一', '一', '丨', '㇉', '丶', '一', '丿'],
            strokeCount: 12,
            strokeGuides: [
                { start: { x: 120, y: 110 }, end: { x: 160, y: 120 }, description: 'top left hook' },
                { start: { x: 120, y: 140 }, end: { x: 160, y: 140 }, description: 'left top horizontal' },
                { start: { x: 140, y: 130 }, end: { x: 140, y: 180 }, description: 'left vertical' },
                { start: { x: 120, y: 180 }, end: { x: 160, y: 180 }, description: 'left bottom horizontal' },
                { start: { x: 200, y: 120 }, end: { x: 280, y: 120 }, description: 'right top horizontal' },
                { start: { x: 210, y: 140 }, end: { x: 270, y: 140 }, description: 'right second horizontal' },
                { start: { x: 220, y: 160 }, end: { x: 260, y: 160 }, description: 'right third horizontal' },
                { start: { x: 240, y: 110 }, end: { x: 240, y: 200 }, description: 'right vertical' },
                { start: { x: 180, y: 220 }, end: { x: 220, y: 240 }, description: 'bottom diagonal hook' },
                { start: { x: 200, y: 250 }, end: { x: 205, y: 265 }, description: 'bottom dot' },
                { start: { x: 160, y: 280 }, end: { x: 240, y: 280 }, description: 'bottom horizontal' },
                { start: { x: 180, y: 300 }, end: { x: 160, y: 330 }, description: 'final falling stroke' }
            ]
        },
        {
            character: '貓',
            zhuyin: 'ㄇㄠ',
            meaning: 'cat',
            strokes: ['一', '丨', '一', '一', '丨', '一', '丶'],
            strokeCount: 7,
            strokeGuides: [
                { start: { x: 120, y: 140 }, end: { x: 160, y: 140 }, description: 'left top horizontal' },
                { start: { x: 140, y: 130 }, end: { x: 140, y: 200 }, description: 'left vertical' },
                { start: { x: 120, y: 180 }, end: { x: 160, y: 180 }, description: 'left bottom horizontal' },
                { start: { x: 200, y: 120 }, end: { x: 260, y: 120 }, description: 'right top horizontal' },
                { start: { x: 230, y: 110 }, end: { x: 230, y: 180 }, description: 'right vertical' },
                { start: { x: 210, y: 160 }, end: { x: 250, y: 160 }, description: 'right horizontal' },
                { start: { x: 240, y: 190 }, end: { x: 245, y: 205 }, description: 'final dot' }
            ]
        },
        {
            character: '團',
            zhuyin: 'ㄊㄨㄢˊ',
            meaning: 'team, group',
            strokes: ['丨', '㇕', '一', '一', '一', '一', '一', '丨', '㇕', '一', '一', '一', '丶'],
            strokeCount: 13,
            strokeGuides: [
                { start: { x: 120, y: 110 }, end: { x: 120, y: 200 }, description: 'left border vertical' },
                { start: { x: 120, y: 200 }, end: { x: 180, y: 220 }, description: 'left bottom hook' },
                { start: { x: 140, y: 130 }, end: { x: 260, y: 130 }, description: 'top horizontal inside' },
                { start: { x: 150, y: 150 }, end: { x: 250, y: 150 }, description: 'second horizontal' },
                { start: { x: 160, y: 170 }, end: { x: 240, y: 170 }, description: 'third horizontal' },
                { start: { x: 170, y: 190 }, end: { x: 230, y: 190 }, description: 'fourth horizontal' },
                { start: { x: 180, y: 210 }, end: { x: 220, y: 210 }, description: 'fifth horizontal' },
                { start: { x: 280, y: 110 }, end: { x: 280, y: 200 }, description: 'right border vertical' },
                { start: { x: 220, y: 200 }, end: { x: 280, y: 220 }, description: 'right bottom hook' },
                { start: { x: 120, y: 240 }, end: { x: 280, y: 240 }, description: 'bottom border horizontal' },
                { start: { x: 140, y: 260 }, end: { x: 260, y: 260 }, description: 'bottom inside horizontal' },
                { start: { x: 160, y: 280 }, end: { x: 240, y: 280 }, description: 'final horizontal' },
                { start: { x: 200, y: 300 }, end: { x: 205, y: 315 }, description: 'center bottom dot' }
            ]
        },
        {
            character: '責',
            zhuyin: 'ㄗㄜˊ',
            meaning: 'responsibility',
            strokes: ['一', '一', '丨', '一', '一', '一', '一', '丨', '㇕', '一', '一'],
            strokeCount: 11,
            strokeGuides: [
                { start: { x: 140, y: 110 }, end: { x: 260, y: 110 }, description: 'top horizontal line' },
                { start: { x: 150, y: 130 }, end: { x: 250, y: 130 }, description: 'second horizontal' },
                { start: { x: 200, y: 100 }, end: { x: 200, y: 160 }, description: 'top vertical line' },
                { start: { x: 160, y: 150 }, end: { x: 240, y: 150 }, description: 'third horizontal' },
                { start: { x: 170, y: 170 }, end: { x: 230, y: 170 }, description: 'fourth horizontal' },
                { start: { x: 180, y: 190 }, end: { x: 220, y: 190 }, description: 'fifth horizontal' },
                { start: { x: 140, y: 210 }, end: { x: 260, y: 210 }, description: 'wide horizontal' },
                { start: { x: 200, y: 180 }, end: { x: 200, y: 250 }, description: 'center vertical' },
                { start: { x: 170, y: 250 }, end: { x: 230, y: 270 }, description: 'bottom hook' },
                { start: { x: 150, y: 280 }, end: { x: 250, y: 280 }, description: 'bottom horizontal' },
                { start: { x: 160, y: 300 }, end: { x: 240, y: 300 }, description: 'final horizontal' }
            ]
        },
        {
            character: '想',
            zhuyin: 'ㄒㄧㄤˇ',
            meaning: 'think, thought',
            strokes: ['一', '丨', '丨', '一', '一', '一', '一', '丨', '㇕', '一', '一', '一', '丶'],
            strokeCount: 13,
            strokeGuides: [
                { start: { x: 140, y: 100 }, end: { x: 260, y: 100 }, description: 'top horizontal line' },
                { start: { x: 160, y: 90 }, end: { x: 160, y: 130 }, description: 'left top vertical' },
                { start: { x: 240, y: 90 }, end: { x: 240, y: 130 }, description: 'right top vertical' },
                { start: { x: 150, y: 120 }, end: { x: 250, y: 120 }, description: 'second horizontal' },
                { start: { x: 160, y: 140 }, end: { x: 240, y: 140 }, description: 'third horizontal' },
                { start: { x: 170, y: 160 }, end: { x: 230, y: 160 }, description: 'fourth horizontal' },
                { start: { x: 180, y: 180 }, end: { x: 220, y: 180 }, description: 'fifth horizontal' },
                { start: { x: 200, y: 130 }, end: { x: 200, y: 220 }, description: 'center vertical' },
                { start: { x: 170, y: 220 }, end: { x: 230, y: 240 }, description: 'bottom hook' },
                { start: { x: 140, y: 250 }, end: { x: 260, y: 250 }, description: 'wide bottom horizontal' },
                { start: { x: 150, y: 270 }, end: { x: 250, y: 270 }, description: 'second bottom horizontal' },
                { start: { x: 160, y: 290 }, end: { x: 240, y: 290 }, description: 'final horizontal' },
                { start: { x: 200, y: 310 }, end: { x: 205, y: 325 }, description: 'bottom center dot' }
            ]
        },
        {
            character: '困',
            zhuyin: 'ㄎㄨㄣˋ',
            meaning: 'difficult, trapped',
            strokes: ['丨', '㇕', '一', '一', '丨', '丨', '一'],
            strokeCount: 7,
            strokeGuides: [
                { start: { x: 140, y: 120 }, end: { x: 140, y: 250 }, description: 'left border vertical' },
                { start: { x: 140, y: 250 }, end: { x: 200, y: 270 }, description: 'bottom left hook' },
                { start: { x: 140, y: 140 }, end: { x: 260, y: 140 }, description: 'top horizontal' },
                { start: { x: 140, y: 250 }, end: { x: 260, y: 250 }, description: 'bottom horizontal' },
                { start: { x: 260, y: 120 }, end: { x: 260, y: 250 }, description: 'right border vertical' },
                { start: { x: 200, y: 160 }, end: { x: 200, y: 230 }, description: 'inner vertical' },
                { start: { x: 180, y: 190 }, end: { x: 220, y: 190 }, description: 'inner horizontal' }
            ]
        }
    ],

    // Similar Characters Data - Commonly confused character pairs
    similarCharacters: [
        {
            pair: ['土', '士'],
            pronunciations: {
                '土': { zhuyin: 'ㄊㄨˇ', pinyin: 'tǔ' },
                '士': { zhuyin: 'ㄕˋ', pinyin: 'shì' }
            },
            meanings: {
                '土': 'earth, soil',
                '士': 'scholar, warrior'
            },
            differences: [
                '土 has a longer horizontal line at the bottom',
                '士 has a longer horizontal line at the top',
                'Remember: 土 (earth) - ground extends below, 士 (scholar) - mind reaches above'
            ],
            examples: {
                '土': ['土地 (land)', '土壤 (soil)', '本土 (native land)'],
                '士': ['武士 (warrior)', '學士 (bachelor)', '紳士 (gentleman)']
            },
            mnemonics: 'Earth (土) grows DOWN, Scholar (士) thinks UP',
            level: 'intermediate'
        },
        {
            pair: ['日', '曰'],
            pronunciations: {
                '日': { zhuyin: 'ㄖˋ', pinyin: 'rì' },
                '曰': { zhuyin: 'ㄩㄝ', pinyin: 'yuē' }
            },
            meanings: {
                '日': 'sun, day',
                '曰': 'say, speak'
            },
            differences: [
                '日 is a perfect rectangle, like the sun',
                '曰 is slightly wider and flatter, like an open mouth',
                'The horizontal line in 曰 extends slightly beyond the vertical lines'
            ],
            examples: {
                '日': ['今日 (today)', '日本 (Japan)', '生日 (birthday)'],
                '曰': ['子曰 (Confucius said)', '古人曰 (the ancients said)']
            },
            mnemonics: 'Sun (日) is square and bright, Mouth (曰) is wide for speaking',
            level: 'beginner'
        },
        {
            pair: ['人', '入'],
            pronunciations: {
                '人': { zhuyin: 'ㄖㄣˊ', pinyin: 'rén' },
                '入': { zhuyin: 'ㄖㄨˋ', pinyin: 'rù' }
            },
            meanings: {
                '人': 'person, people',
                '入': 'enter, go into'
            },
            differences: [
                '人 has two legs standing apart (like a person)',
                '入 has two lines meeting at a point (like entering through a door)',
                'The angle in 入 is sharper and more pointed'
            ],
            examples: {
                '人': ['中國人 (Chinese person)', '家人 (family)', '人類 (humanity)'],
                '入': ['進入 (enter)', '加入 (join)', '收入 (income)']
            },
            mnemonics: 'Person (人) stands wide, Enter (入) points inward',
            level: 'beginner'
        },
        {
            pair: ['木', '本'],
            pronunciations: {
                '木': { zhuyin: 'ㄇㄨˋ', pinyin: 'mù' },
                '本': { zhuyin: 'ㄅㄣˇ', pinyin: 'běn' }
            },
            meanings: {
                '木': 'tree, wood',
                '本': 'root, origin, book'
            },
            differences: [
                '木 is just a tree trunk with branches',
                '本 has an extra horizontal line at the bottom (the roots)',
                'The bottom line in 本 represents the roots or foundation'
            ],
            examples: {
                '木': ['樹木 (trees)', '木材 (lumber)', '木頭 (wood)'],
                '本': ['課本 (textbook)', '日本 (Japan)', '根本 (fundamental)']
            },
            mnemonics: 'Tree (木) grows up, Root (本) extends down with extra foundation line',
            level: 'beginner'
        },
        {
            pair: ['王', '玉'],
            pronunciations: {
                '王': { zhuyin: 'ㄨㄤˊ', pinyin: 'wáng' },
                '玉': { zhuyin: 'ㄩˋ', pinyin: 'yù' }
            },
            meanings: {
                '王': 'king, monarch',
                '玉': 'jade, precious stone'
            },
            differences: [
                '王 has three horizontal lines connected by one vertical line',
                '玉 has a small dot or dash on the right side of the bottom line',
                'The dot in 玉 represents the precious nature of jade'
            ],
            examples: {
                '王': ['國王 (king)', '王子 (prince)', '王室 (royal family)'],
                '玉': ['白玉 (white jade)', '玉石 (jade stone)', '美玉 (beautiful jade)']
            },
            mnemonics: 'King (王) rules with straight lines, Jade (玉) has a precious dot',
            level: 'intermediate'
        },
        {
            pair: ['己', '已', '巳'],
            pronunciations: {
                '己': { zhuyin: 'ㄐㄧˇ', pinyin: 'jǐ' },
                '已': { zhuyin: 'ㄧˇ', pinyin: 'yǐ' },
                '巳': { zhuyin: 'ㄙˋ', pinyin: 'sì' }
            },
            meanings: {
                '己': 'self, oneself',
                '已': 'already, finished',
                '巳': 'the sixth earthly branch, snake'
            },
            differences: [
                '己 is completely closed with no opening',
                '已 has an opening at the top',
                '巳 has an opening at the bottom and is more enclosed'
            ],
            examples: {
                '己': ['自己 (oneself)', '知己 (close friend)', '利己 (selfish)'],
                '已': ['已經 (already)', '完已 (finished)', '而已 (that\'s all)'],
                '巳': ['巳時 (9-11 AM)', '巳蛇 (snake in zodiac)']
            },
            mnemonics: 'Self (己) closed like ego, Already (已) open at top like finished, Snake (巳) coiled at bottom',
            level: 'advanced'
        },
        {
            pair: ['千', '干'],
            pronunciations: {
                '千': { zhuyin: 'ㄑㄧㄢ', pinyin: 'qiān' },
                '干': { zhuyin: 'ㄍㄢ', pinyin: 'gān' }
            },
            meanings: {
                '千': 'thousand',
                '干': 'dry, stem, do'
            },
            differences: [
                '千 has a slanted line (丿) on the left',
                '干 has a horizontal line (一) on top',
                'The first stroke makes all the difference!'
            ],
            examples: {
                '千': ['一千 (one thousand)', '千年 (millennium)', '千萬 (ten million)'],
                '干': ['乾燥 (dry)', '樹干 (tree trunk)', '干擾 (interfere)']
            },
            mnemonics: 'Thousand (千) slants like counting, Dry (干) has a top line like dried surface',
            level: 'intermediate'
        },
        {
            pair: ['刀', '力'],
            pronunciations: {
                '刀': { zhuyin: 'ㄉㄠ', pinyin: 'dāo' },
                '力': { zhuyin: 'ㄌㄧˋ', pinyin: 'lì' }
            },
            meanings: {
                '刀': 'knife, sword',
                '力': 'strength, force'
            },
            differences: [
                '刀 has a horizontal line that connects to the hook',
                '力 has no horizontal line, just the vertical line and hook',
                'The blade of the knife (刀) is represented by the horizontal line'
            ],
            examples: {
                '刀': ['菜刀 (kitchen knife)', '刀子 (knife)', '武刀 (sword)'],
                '力': ['力量 (strength)', '努力 (effort)', '電力 (electric power)']
            },
            mnemonics: 'Knife (刀) has a blade (horizontal line), Strength (力) is just force (no blade)',
            level: 'intermediate'
        },
        {
            pair: ['末', '未'],
            pronunciations: {
                '末': { zhuyin: 'ㄇㄛˋ', pinyin: 'mò' },
                '未': { zhuyin: 'ㄨㄟˋ', pinyin: 'wèi' }
            },
            meanings: {
                '末': 'end, final',
                '未': 'not yet, future'
            },
            differences: [
                '末 has a longer bottom horizontal line (the end extends)',
                '未 has a longer top horizontal line (the future reaches ahead)',
                'Remember: End (末) extends at bottom, Not yet (未) reaches at top'
            ],
            examples: {
                '末': ['期末 (end of term)', '週末 (weekend)', '最末 (final)'],
                '未': ['未來 (future)', '未必 (not necessarily)', '尚未 (not yet)']
            },
            mnemonics: 'End (末) extends down to finish, Not yet (未) reaches up to future',
            level: 'intermediate'
        },
        {
            pair: ['開', '關'],
            pronunciations: {
                '開': { zhuyin: 'ㄎㄞ', pinyin: 'kāi' },
                '關': { zhuyin: 'ㄍㄨㄢ', pinyin: 'guān' }
            },
            meanings: {
                '開': 'open, start',
                '關': 'close, shut, checkpoint'
            },
            differences: [
                '開 has 門 (door) with 廾 (hands pushing apart)',
                '關 has 門 (door) with 丱 (barrier) inside',
                'Opening pushes apart, closing blocks with barriers'
            ],
            examples: {
                '開': ['開門 (open door)', '開始 (begin)', '開車 (drive)'],
                '關': ['關門 (close door)', '關係 (relationship)', '海關 (customs)']
            },
            mnemonics: 'Open (開) pushes hands apart, Close (關) puts barriers inside',
            level: 'advanced'
        }
    ],

    // Learning levels for 3rd grade content
    hskLevels: {
        1: ['動物', '玩具', '食物', '顏色', '家人', '玩遊戲', '和朋友一起玩'],
        2: ['畫畫', '唱歌', '跳舞', '運動', '寵物', '吃點心', '看卡通'],
        3: ['公園', '學校', '老師', '同學', '生日', '禮物', '開心的時候'],
        4: ['幫忙', '分享', '友善', '快樂', '笑容', '擁抱', '照顧']
    },

    // Fun radicals for 6th graders
    radicals: [
        {
            radical: '人',
            meaning: 'person',
            examples: ['人', '大', '小', '什', '他']
        },
        {
            radical: '口',
            meaning: 'mouth',
            examples: ['口', '吃', '唱', '名', '哪']
        },
        {
            radical: '日',
            meaning: 'sun',
            examples: ['日', '明', '時', '早', '晚']
        },
        {
            radical: '月',
            meaning: 'moon',
            examples: ['月', '朋', '明', '有', '服']
        },
        {
            radical: '木',
            meaning: 'tree/wood',
            examples: ['木', '樹', '林', '森', '桌']
        }
    ],

    // Audio pronunciation guides (phonetic descriptions) - Zhuyin only
    pronunciationGuides: {
        tones: {
            1: { name: 'First Tone', description: 'High and flat (¯)', example: 'mā (媽)' },
            2: { name: 'Second Tone', description: 'Rising (´)', example: 'má (麻)' },
            3: { name: 'Third Tone', description: 'Dipping (ˇ)', example: 'mǎ (馬)' },
            4: { name: 'Fourth Tone', description: 'Falling (`)', example: 'mà (罵)' },
            5: { name: 'Neutral Tone', description: 'Light and quick', example: 'ma (嗎)' }
        }
    },

    // Zhuyin (Bopomofo) reference guide
    zhuyinGuide: {
        initials: {
            'ㄅ': 'b', 'ㄆ': 'p', 'ㄇ': 'm', 'ㄈ': 'f',
            'ㄉ': 'd', 'ㄊ': 't', 'ㄋ': 'n', 'ㄌ': 'l',
            'ㄍ': 'g', 'ㄎ': 'k', 'ㄏ': 'h',
            'ㄐ': 'j', 'ㄑ': 'q', 'ㄒ': 'x',
            'ㄓ': 'zh', 'ㄔ': 'ch', 'ㄕ': 'sh', 'ㄖ': 'r',
            'ㄗ': 'z', 'ㄘ': 'c', 'ㄙ': 's'
        },
        finals: {
            'ㄚ': 'a', 'ㄛ': 'o', 'ㄜ': 'e', 'ㄝ': 'ê',
            'ㄞ': 'ai', 'ㄟ': 'ei', 'ㄠ': 'ao', 'ㄡ': 'ou',
            'ㄢ': 'an', 'ㄣ': 'en', 'ㄤ': 'ang', 'ㄥ': 'eng', 'ㄦ': 'er',
            'ㄧ': 'i', 'ㄨ': 'u', 'ㄩ': 'ü'
        },
        toneMarks: {
            '': '1st tone (flat)',
            'ˊ': '2nd tone (rising)',
            'ˇ': '3rd tone (dipping)',
            'ˋ': '4th tone (falling)',
            '˙': 'neutral tone'
        }
    }
};

// Game configuration - Easier and More Accessible
const gameConfig = {
    questionsPerGame: 10, // Reduced to 10 for shorter, less overwhelming sessions
    maxOptions: 4, // Reduced to 4 for simpler choices
    scorePerCorrect: 10, // Lower pressure scoring
    bonusStreakMultiplier: 1.5, // Gentler bonus system
    timePerQuestion: 60, // Increased to 60 seconds for relaxed learning
    
    difficulties: {
        beginner: {
            name: 'Easy Start',
            description: 'Simple everyday words',
            questionTime: 90,
            maxOptions: 3
        },
        intermediate: {
            name: 'Getting Better', 
            description: 'Common vocabulary',
            questionTime: 60,
            maxOptions: 4
        },
        advanced: {
            name: 'Challenge Me',
            description: 'More complex words',
            questionTime: 45,
            maxOptions: 6
        },
        expert: {
            name: 'Expert Mode',
            description: 'Academic vocabulary',
            questionTime: 30,
            maxOptions: 8
        },
        custom: {
            name: 'Custom',
            description: 'Choose your own number of options (3-25)',
            questionTime: 'variable',
            maxOptions: 'user-defined'
        }
    },

    achievements: [
        {
            id: 'first_win',
            name: 'First Victory',
            description: 'Complete your first game',
            condition: (stats) => stats.gamesCompleted >= 1
        },
        {
            id: 'perfect_score',
            name: 'Perfect Score',
            description: 'Get 100% accuracy in a game',
            condition: (stats) => stats.lastAccuracy === 100
        },
        {
            id: 'streak_master',
            name: 'Streak Master',
            description: 'Get a streak of 5 or more',
            condition: (stats) => stats.bestStreak >= 5
        },
        {
            id: 'speed_learner',
            name: 'Speed Learner',
            description: 'Complete 10 games',
            condition: (stats) => stats.gamesCompleted >= 10
        },
        {
            id: 'character_master',
            name: 'Character Master',
            description: 'Master character recognition',
            condition: (stats) => stats.characterRecognitionWins >= 5
        }
    ]
};

// Utility functions for game data
const gameUtils = {
    // Get random items from array
    getRandomItems: (array, count) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    // Get items by difficulty level
    getByLevel: (array, level) => {
        return array.filter(item => item.level === level);
    },

    // Generate wrong options for multiple choice
    generateWrongOptions: (correctAnswer, allOptions, count = 3) => {
        const wrongOptions = allOptions.filter(option => 
            option.character !== correctAnswer.character && 
            option.chinese !== correctAnswer.chinese
        );
        return gameUtils.getRandomItems(wrongOptions, count);
    },

    // Shuffle array
    shuffleArray: (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    // Get HSK level content
    getHSKContent: (level) => {
        return gameData.hskLevels[level] || [];
    },

    // Check if zhuyin is correct (allowing tone variations)
    checkZhuyin: (input, correct) => {
        // Normalize by removing tone marks and spaces for basic matching
        const normalize = (str) => str
            .replace(/[ˊˇˋ˙]/g, '') // Remove tone marks
            .replace(/\s+/g, '') // Remove spaces
            .trim();
        
        // Check exact match first
        if (input === correct) return true;
        
        // Check without tone marks
        return normalize(input) === normalize(correct);
          }
  }; 