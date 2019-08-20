import Link from 'next/link';

import Header from '../components/Header'
import Layout from '../components/MyLayout';
import withLayout from '../components/MyLayout';

const aboutPageContent = <p>about page</p>;
export default function About() {
    return <Layout content = {aboutPageContent} />;
}
/*
const Page = () => <p>about page</p>;
export default withLayout(Page);
*/

/*
// either code works
export default function About() {
    return (
        <Layout>
            <p>This is the about page</p>
        </Layout>
        <div>
            <Header />
            <p>This is the about page</p>
            <Link href="/">
                <a>return to home</a>
            </Link>
        </div>
    )
}
*/

/*
const About = () => (
    <div>
        <p>about</p>
    </div>
)

export default About;
*/