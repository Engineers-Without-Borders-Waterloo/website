type GreetingProps = {
    name?: string;   // optional
};

export default function Greeting({ name = 'world' }: GreetingProps) {
    return <p style={{ fontSize: 18 }}>Hello, {name}!</p>;
}