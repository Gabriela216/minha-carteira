import React from "react";
import ContentHeader from "../../components/ContentHeader";
import { Container } from "./styles";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
    const options = [
        {value:'Gabriela', label:'Gabriela'},
        {value:'Gabriela', label:'Gabriela'},
        {value:'Gabriela', label:'Gabriela'},
    ];
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;