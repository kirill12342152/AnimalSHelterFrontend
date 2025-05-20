import { Card } from "antd";
import { CardTitle } from "./Cardtitle";
import { Button } from "antd";

interface Props {
    animals: Animal[];
    handleDelete: (id: string) => void;
    handleOpen: (animal: Animal) => void;
}

export const Animals = ({ animals, handleDelete, handleOpen }: Props) => {
    return (
        <div className="cards">
            {animals.map((animal: Animal) => (
                <Card
                    key={animal.id}
                    title={
                        <CardTitle
                            name={animal.name}
                            weight={animal.weight}
                            age={animal.age}
                        />
                    }
                    variant="borderless"
                >
                    <p>{animal.isMale}</p>
                    <p>{animal.distinctiveFeatures}</p>
                    <p>{animal.animalBreedId}</p>
                    <p>{animal.animalStatusId}</p>
                    <p>{animal.photos}</p>
                    <p>{animal.animalViewId}</p>

                    <div className="card__buttons">
                        <Button
                            onClick={() => handleOpen(animal)}
                            style={{flex: 1}}
                        >
                            Редактировать
                        </Button>
                        <Button 
                            onClick={() => handleDelete(animal.id)}
                            danger
                            style={{flex: 1}}
                        >
                            Удалить
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    );
};
