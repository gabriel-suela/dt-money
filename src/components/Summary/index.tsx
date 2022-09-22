import { Container } from "./styles";
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";





export function Summary () {

    const transactions = useContext(TransactionsContext)

    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>-R$500</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={incomeImg} alt="Total" />
                </header>
                <strong>R$500</strong>
            </div>
        </Container>
    )
}