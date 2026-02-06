type CardProps = {
    name?: string;
}

export default function Card({name = "Aidan"}: CardProps){
    return <h1>Hello, {name}!</h1>
}