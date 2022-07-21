import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import ListCard from "../components/ListCard";

export default function Places() {
  const [places, setPlaces] = useState();

  const getPlacesReq = () => {
    // setLoading(true);
    fetch("http://localhost:3000/locais", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ nome, endereco, foto }),
    }).then(
      (res) => {
        // setLoading(false);
        if (res.ok)
          res.json().then((b) => {
            console.log(b);
            setPlaces(b);
          });
      },
      (err) => {
        console.error(err);
      }
    );
  };

  useEffect(() => {
    getPlacesReq();
  }, []);

  return (
    <Container>
      <ListCard places={places} />
    </Container>
  );
}
