import React from "react";

export const Persons = ({ result }: any) => {
    if (result.loading) {
        return <section>loading...</section>
    };
    const persons: string[] = result.data.allPersons;
    return (
        <React.Fragment>
            <h1 className="banner">Persons</h1>
            {persons.map((person: any) => (
                <aside key={person.name}>
                    {person.name} {person.phone}
                </aside>
            ))}
        </React.Fragment>
    );
};

