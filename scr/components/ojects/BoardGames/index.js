import CardGame from "../../CardGame";

export default function BoardGame(AmountCards){
    const Boardgame = CardGame().repeat(AmountCards)
    return Boardgame;
}