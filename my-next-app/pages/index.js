
import Head from 'next/head';
import CGPACalculator from '../components/cgpa-calculator';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
     <CGPACalculator/>
    </div>
  );
}

export default HomePage;