import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Persons } from "./Persons";

const APP_PERSONS: object = gql`
    {
        allPersons {
            name
            phone        
            id
        }
    }
`;

interface allPeople {
    name: string,
    phone: string,
    id: string,
};
export interface allPersonsData {
    allPersons: allPeople[];
};

export const Apollo = () => {
    return (
        <Query query={APP_PERSONS}>
            {(result: object) => <Persons result={result} />}
        </Query>
    );
};

