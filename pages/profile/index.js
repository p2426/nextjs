import Layout from '../../components/layout'
import Link from 'next/link';

const Profile = ({ animal, day }) => {
    console.log(document.cookie);
    return (
        <Layout>
            <h2 className='title'>Profile</h2>
            <p>{animal}</p>
            <p>{day}</p>
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