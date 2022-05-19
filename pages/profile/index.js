import Layout from '../../components/layout'
import Link from 'next/link';

const Profile = ({ animal, day }) => {
    return (
        <Layout>
            <h2 className='title'>Profile</h2>
            <p>{animal}</p>
            <p>{day}</p>
            <Link href='/'>Home</Link>
        </Layout>
    );
};

export async function getStaticProps(context) {
    const { animal, day } = context.query;

    return {
        props: {
            animal: animal,
            day: day,
        }
    }
};

export default Profile;