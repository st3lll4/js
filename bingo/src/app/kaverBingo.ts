export default class kaverBingo {

availablePhrases : string[] = [
    'soovitab funktsionaal-program-meerimise kursust',
    'teeme uue projekti', 
    'mitte midagi ei saa aru',
    'laku panni',
    'explaining REST to my wife',
    'see on disaini küsimus',
    'program-meerimine on lihtne',
    '5min paus = 20min paus',
    'küsib Miku abi',
    'küsib Mikult mingi x projekti kohta, mida nad y aastat tagasi tegid',
    'apple promo',
    'Taavi on kohal',
    'Mikk on kohal',
    'kulutame aega mingi fun facti arutamise peale',
    'pange käed koodi',
    'mainib tunniplaani rakendust',
    'ütleb, et uus generatsioon programmeerijaid on doomed',
    'keegi ei otsi juuniorarendajaid :(',
    'Bruno teeb mänguasjaga piiksu',
    'tegin Brunole pai',
    'kohal on rohkem kui või täpselt 15 inimest',
    'kritiseerib oma autocompletei',
    'Bruno ohkab südame põhjast',
    'läheb võtab kohvi',
    "läheb WC-sse",
    'ütleb, et AI on tegelt loll',
    'keegi avab energiajoogi purgi keset loengut',
    'paneme nüüd käed koodi',
    'sellele küsimusele ei ole õiget vastust',
    'ütleb "Stella"',
    'unustab koodi pushida',
    'C# läheb 15 min üle',
    'ta enda kood läheb katki',
    'Javascript hakkab 15 min hiljem',
    'kohal on vähem kui 15 inimest',
    'unustab Teamsi alustada',
    'esipingi härra hilineb rohkem kui 35 min',
    'mainib, kui vähe meid on',
    'what the hell',
    'keegi helistab',
    'mainib Eventori',
    'autocompleteb ai-ga 20 rida koodi 3sekundiga'
]

public shufflePhrases(phrases : string[]) {
    let currentI : number = phrases.length;

    let shuffled = [...phrases];

    while (currentI != 0) {
        let randomI : number = Math.floor(Math.random() * currentI);
        currentI--;

        // knuth shuffle
        [shuffled[currentI], shuffled[randomI]] = [shuffled[randomI], shuffled[currentI]]
    }
    return shuffled;
}

getBingoBoard() : string[][] {
    let result : string[][] = [[], [], [], [], []];
    let shuffledPhrases = this.shufflePhrases(this.availablePhrases);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            result[i][j] = shuffledPhrases[i * 5 + j]
        }
    }
    return result;
}

}