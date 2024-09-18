import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';

const title = "Header";
const menus_items = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/our-services" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const App = () => (
  <>
    <Header myTitle={title} menu={menus_items} />
    <Body />
  </>
);

export default App;