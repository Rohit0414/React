import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import MainContent from './components/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';

const title = "";
const menus_items = [
  { name: "Home", link: "/Home" },
  { name: "Services", link: "/our-services" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Mainbody ="";
const content_items = [
  { name: "grocery", link: "/grocery" },
  { name: "electronics", link: "/electronics" },
  { name: "fashion", link: "/fashion" },
  { name: "Two wheeler", link: "/Two wheeler" },
]

const App = () => (
  <>
    <Header myTitle={title} menu={menus_items} />
    <Body myMainbody={Mainbody} content={content_items} />
    <MainContent />
  </>
);

export default App;