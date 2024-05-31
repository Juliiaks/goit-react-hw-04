
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ submit }) {


const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
        toast('Here is your toast.');
        return
    }
    submit(topic);
    form.reset();
    }

   
    return (
      <header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
                <button type="submit">Search</button>
                <Toaster
                position='top-right'/>
  </form>
</header>)
}