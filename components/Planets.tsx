import React from "react";
import { useQuery } from "react-query";
import { Heading, Text, Box, Grid } from "@chakra-ui/react";
import { PlanetClass } from "./utils/Types/Planets";
import PlanetCard from "./PlanetCard";

const Planets = () => {
  const fetchPlanets = async () => {
    const res = await fetch("https://swapi.dev/api/planets/");
    return res.json();
  };

  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);

  return (
    <div>
      <Heading size="lg">Planets</Heading>

      {status === "loading" && <Text>Loading Data ....</Text>}

      {status === "error" && <Text>Error fetching data!</Text>}

      {status === "success" && (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.results.map((planet: PlanetClass) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Planets;
