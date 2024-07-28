import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your App</h1>
      <p className="mb-4">This is a bare-bones application that you can build upon.</p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Home;
