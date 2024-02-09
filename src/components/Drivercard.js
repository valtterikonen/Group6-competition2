import Rating from './Rating';

const DriverData = [
    {
        name: "Travis Kalanick",
        rating: 4.2,
        img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
        car: {
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
        }
    },
    {
        name: "Dara Khosrowshahi",
        rating: 4.9,
        img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
        car: {
            model: "Audi A3",
            licensePlate: "BE33ER"
        }
    }
];

const DriverCard = ({ name, rating, img, car }) => {
    return (
        <div className="DriverCard">
            <img src={img} alt="driver" />
            <div className="driverinfo">
                <h2>{name}</h2>
                <Rating stars={rating} />
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
};

const DriverCards = () => {
    return (
        <>
            {DriverData.map((driver, index) => (
                <DriverCard
                    key={index}
                    name={driver.name}
                    rating={driver.rating}
                    img={driver.img}
                    car={driver.car}
                />
            ))}
        </>
    );
};

export default DriverCards;
