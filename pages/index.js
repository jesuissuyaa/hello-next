// Link API
import Link from 'next/link';

// Components
import Header from '../components/Header';
import withLayout from '../components/MyLayout';
import Layout from '../components/MyLayout';

const indexPageContent = <p>hello next.js</p>
export default function Index() {
    return <Layout content={indexPageContent} />;
}

/*
const Page = () => <p>Hello Next.js</p>
export default withLayout(Page);
*/

/*
export default function Index() {
    return (
        <Layout>
            <p>
                Hello Next.js
            </p>
        </Layout>
    )
}
*/
/*
const Index = () => (
    <div>
        <Link href="/about">
            
            <a title="About Page">About Page</a>
        </Link>
        <Header />
        <p>Hello Next.js</p>
    </div>
);
*/

/* make constant Index accessible from other files */
//export default Index;