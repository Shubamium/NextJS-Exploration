import Counter from "./components/counter";
type Props = {};

function Home({}: Props) {
  return (
    <div>
      {/* Keep the layout to be server components */}
      <p>Welcome to my app - This is the home page</p>
      {/* Enclose any interactivity into its own component */}
      <Counter />
    </div>
  );
}

export default Home;
