import React from "react";
import Panel from "../components/Panel";
import List from "../components/List";

const ResultsPage = (props) => (
    <Panel name={"Articles"}>
    
        <List articles={props.articles} handleSaveArticle={props.handleSaveArticle}/>
            
    </Panel>
);

export default ResultsPage;