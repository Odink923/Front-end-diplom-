import React from 'react';
import LogoBlog from "../BlogPage/components/LogoBlog/LogoBlog";
import Protezreview from "./components/protezreview/Protezreview";
import Romanlundovbio from "./components/romanlundovbio/Romanlundovbio";
import Lifewithprotez from "../BlogSuccessPage/components/lifewithprotez/lifewithprotez";

const BlogHistoryPage = () => {
    return (
        <div>
            <LogoBlog visible ={true}></LogoBlog>
            <Protezreview></Protezreview>
            <Lifewithprotez title="вас також може зацікавити"></Lifewithprotez>
        </div>
    );
};

export default BlogHistoryPage;