import ServerlessFunction from '../components/serverless-function'
import Layout from '../components/layout'
import PersonalisationForm from '../components/personalisation-form';

export default function Home() {
    return (
        <Layout>
            <h1>Serverless, Edge functions and middleware</h1>

            <PersonalisationForm/>

            <div>
                <ServerlessFunction/>
            </div>
        </Layout>
    );
}
