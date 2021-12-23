import React, { useState } from "react";
import { startingCharacters } from "../objects/character";

const Mesolithica = ({ ...props }) => {
  const [characters, setCharacters] = useState({
    characters: startingCharacters()
  });
  const [camp, setCamp] = useState({});
  const [sites, setSites] = useState({});

  return <pre>{JSON.stringify({ characters, camp, sites }, null, 3)}</pre>;
};

export default Mesolithica;
