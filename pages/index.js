import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        {/* href: path to page file; as: URL displayed in browser */}
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello Next.js" />
                <PostLink id="learn Next.js" />
                <PostLink id="deploy apps with Zeit" />
            </ul>
        </Layout>
    )
}