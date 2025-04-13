export default class kaverBingo {

availablePhrases : string[] = [
    'soovitab funktsionaalprogrammeerimise kursust',
    'programmeerimine on lihtne',
    '5min paus = 20min paus',
    'küsib Miku abi',
    'küsib Mikult mingi x projekti kohta, mida nad y aastat tagasi tegid',
    'apple promo',
    'Taavi on kohal',
    'Mikk on kohal',
    'kulutame aega mingi fun facti arutamise peale',
    'page käed koodi',
    'mainib tunniplaani rakendust',
    'ütleb, et uus generatsioon programmeerijaid on doomed',
    'Bruno teeb mänguasjaga piiksu',
    'tegin Brunole pai',
    'kohal on rohkem kui või täpselt 15 inimest',
    'kritiseerib oma autocompletei',
    'Bruno ohkab südame põhjast',
    'läheb võtab kohvi',
    'läheb wcsse',
    'ütleb, et AI on tegelt loll',
    'keegi avab energiajoogi purgi keset loengut',
    'paneme nüüd käed koodi',
    'sellele küsimusele ei ole õiget vastust',
    'ütleb stella',
    'unustab koodi pushida',
    'c# läheb 15min üle',
    'ta enda kood läheb katki',
    'javascript hakkab 15min hiljem',
    'kohal on vähem kui 15 inimest',
    'unustab Teamsi alustada',
    'esipingi härra hilineb >35min',
    'mainib, kui vähe meid on',
    'what the hell',
    'keegi helistab',
    'mainib Eventori',
    'autocompleteb ai-ga 20 rida koodi 3sekundiga'
]

public shufflePhrases(phrases : string[]) {
    let currentI : number = phrases.length;

    while (currentI != 0) {
        let randomI : number = Math.floor(Math.random() * currentI);
        currentI--;

        [phrases[currentI], phrases[randomI]] = [phrases[randomI], phrases[currentI]]

    }
}

getBingoBoard() : string[][] {
    let result : string[][] = [[], [], [], [], []];
    let boardcontent = this.shufflePhrases(this.availablePhrases);
    return result;
}

}