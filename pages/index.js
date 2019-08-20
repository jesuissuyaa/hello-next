import Layout from '../components/MyLayout';
import Link from 'next/link';

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'hello next.js' },
        { id: 'learn-nextjs', title: 'learn next.js is awesome' },
        { id: 'deploy-nextjs', title: 'deploy apps with Zeit' }
    ];
}

const PostLink = ({ post }) => (
    <li>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog :)</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
            <style jsx>{`
                h1,
                a {
                    font-family: 'Arial';
                }

                ul {
                    padding: 0;
                }

                li {
                    list-style: none;
                    margin: 5px 0; 
                }

                a {
                    text-decoration: none;
                    color: blue;
                }

                a: hover {
                    opacity: 0.6;
                }
            `}</style>
        </Layout>
    );
}