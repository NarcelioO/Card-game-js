import CardGame from "../../CardGame";
import './style.css'
export default function BoardGame(AmountCards){

    const htmlContent = CardGame().repeat(AmountCards)


    return`
    <section class="board-game">
        ${htmlContent}
    </section>
    `
}