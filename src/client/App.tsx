import './App.css';
import { BookingList } from './Booking/BookingList';
import { bookings } from './data';

function App() {
  return (
    <div className="App">
      <h1>Booking list</h1>
      <BookingList bookingList={bookings}/>
    </div>
  );
}

export default App;
