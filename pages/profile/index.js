import Layout from '../../components/layout'
import Link from 'next/link';

const Profile = () => {

    const getCookie = (target) => {
        return document.cookie.split('; ').find(row => row.startsWith(`${target}=`)).split('=')[1];
    };

    return (
        <Layout>
            <h2 className='title'>Profile</h2>
            <p>{`Some targeted information about super cute ${getCookie('animal')}`}</p>
            <p>{`Remember your favourite day? Here's what's going on around town on ${getCookie('day')}`}</p>
            <Link href='/'>Home</Link>
        </Layout>
    );
};

// export async function getStaticProps() {
//     return {
//         props: {
//             animal: "cat",
//             day: "friday",
//         }
//     }
// };

export default Profile;