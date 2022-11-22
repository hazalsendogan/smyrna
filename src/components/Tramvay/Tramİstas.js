import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { Container, Header, List } from "semantic-ui-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Tramİstas() {
  const { id } = useParams();
  const url = `https://openapi.izmir.bel.tr/api/tramvay/istasyonlar/${id}`;
  const [istasyonlar, setIstasyonlar] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setIstasyonlar(data));
  }, [istasyonlar]);

  return (
    <Container>
      <section>
        <Link to="/metroizmir">Tramvay</Link>
      </section>
      <section>
        <Header as="h5">İstasyonlar</Header>
        {istasyonlar.map((ist, key) => (
          <List key={key} horizontal bulleted>
            <List.Item>{ist.Adi}<span style={{visibility:"hidden"}}>hid</span></List.Item>
          </List>
        ))}
      </section>
    </Container>
  );
}
