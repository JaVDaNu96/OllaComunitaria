import Link from "next/link"
import { Olla_card } from "./olla-card"
import { OllasComunitarias } from "../ollas/ollasDB"


export default function Cards_container() {
    return (
        <section className="cards-container">
            {OllasComunitarias.map(({Location, NumberOfBeneficiaries, TeamInCharge, Rating}) => (
            <li key={Location}>
                <Olla_card Location={Location} NumberOfBeneficiaries={NumberOfBeneficiaries} TeamInCharge={TeamInCharge} Rating={Rating}>
                </Olla_card>
            </li>)
                )}
        </section>
    )
}
