
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ submit }) {


const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.elements.search.value;
    if (form.elements.search.value.trim() === "") {
        toast('Plese, enter a word!');
        return
    }
    submit(search);
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
            name='search'
    />
                <button type="submit">Search</button>
                <Toaster
                position='top-right'/>
  </form>
</header>)
}