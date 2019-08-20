import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="hello Next.js" />
                <PostLink title="learn Next.js" />
                <PostLink title="deploy apps with Zeit" />
            </ul>
        </Layout>
    )
}