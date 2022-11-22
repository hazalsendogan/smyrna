import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { Container, Header, List } from "semantic-ui-react";
import MetroSeferler from "./MetroSeferler";

export default function Metroİstas() {
  const [metroline, setMetroline] = useState([]);
  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/metro/istasyonlar")
      .then((res) => res.json())
      .then((data) => setMetroline(data))
      .catch((err) => console.log(err));
  }, [metroline]);
  return (
    <div>
      <Container>
        <section>
          <Link to="/metroizmir">Geri</Link>
        </section>
        <section>
          <Header as="h5">İstasyonlar</Header>
          {metroline.map((ist, key) => (
            <List key={key} horizontal bulleted>
              <List.Item>
                {ist.Adi}
                <span style={{ visibility: "hidden" }}>hid</span>
              </List.Item>
            </List>
          ))}
        </section>
      </Container>
    </div>
  );
}
