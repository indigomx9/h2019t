import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Persons } from "./Persons";

const APP_PERSONS = gql`
    {
        allPersons {
            name
            phone
            id
        }
    }
`;

export const Apollo = () => {
    return (
        <Query query={APP_PERSONS}>
            {(result) => <Persons result={result} />}
        </Query>
    );
};

