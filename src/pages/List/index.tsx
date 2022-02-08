import React from "react";
import { Container } from "./styles"
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const List: React.FC = () => {
    const options = [
        {value:'Gabriela', label:'Gabriela'},
        {value:'Gabriela', label:'Gabriela'},
        {value:'Gabriela', label:'Gabriela'},
    ];
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default List;