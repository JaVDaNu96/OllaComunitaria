export function Olla_card(props:any) {
    const {Location, NumberOfBeneficiaries, TeamInCharge, Rating} = props;
    return (
    <div className="olla-card">
        <h3 className="card-title">Location</h3>
        <p className="card-text">{Location}</p>
        <h3 className="card-title">Number of Beneficiaries</h3>
        <p className="card-text">{NumberOfBeneficiaries}</p>
        <h3 className="card-title">Team in Charge</h3>
        <p className="card-text">{TeamInCharge}</p>
        <h3 className="card-title">Performance Rating</h3>
        <p className="card-text">{Rating}</p>
    </div>
    )
}