import React from 'react';

import Layout from './../../hoc/layout/Layout';
import Title from './../Title/Title';

const main = "React APP";
const sub = "Please click on Show Cards to fetch data";

const LandingPage = (props) => {
    return (
        <Layout>
            <Title main={main} sub={sub}/> {props.children}
        </Layout>
    )
}
export default LandingPage;