interface Props {
    name: string;
    weight: number;
    age: number;
}

export const CardTitle = ({ name, weight, age }: Props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <p className="card__name">{name}</p>
            <p className="card__weight">{weight}</p>
            <p className="card__age">{age}</p>
        </div>
    )
}