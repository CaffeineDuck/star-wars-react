import React from "react";
import { Heading } from "@chakra-ui/react";
import WithBackButtonLayout from "../../layouts/WithBack";

const Person = () => {
  return (
    <div>
      <Heading size="lg">Persons</Heading>
    </div>
  );
};

Person.Layout = WithBackButtonLayout

export default Person;
