import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-leonard-yellow">Welcome to Boise Gun Club</h1>
      <p className="mb-8">Your premier destination for shooting sports in the Treasure Valley.</p>

      <div className="mb-8">
        <Button>View Events</Button>
        <Button variant="secondary" className="ml-4">Learn More</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-xl font-bold mb-2 text-leonard-yellow">Membership</h3>
          <p className="mb-4">Join our community of shooting enthusiasts.</p>
          <Button variant="secondary">Join Now</Button>
        </Card>

        <Card>
          <h3 className="text-xl font-bold mb-2 text-leonard-yellow">Events</h3>
          <p className="mb-4">Check out our upcoming competitions and gatherings.</p>
          <Button variant="secondary">See Calendar</Button>
        </Card>

        <Card>
          <h3 className="text-xl font-bold mb-2 text-leonard-yellow">Training</h3>
          <p className="mb-4">Improve your skills with our certified instructors.</p>
          <Button variant="secondary">Learn More</Button>
        </Card>
      </div>
    </div>
  );
}