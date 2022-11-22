import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, GridRow, Header, Table } from "semantic-ui-react";

export default function TramHatlar() {
  const [tramline, setTramline] = useState([]);
  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/tramvay/hatlar")
      .then((res) => res.json())
      .then((data) => setTramline(data))
      .catch((err) => console.log(err));
  }, [tramline]);
  return (
    <Container>
      <section>
        <Header as="h5">Tramvay Hatları</Header>
      </section>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Hat Baslangıç</Table.HeaderCell>
            <Table.HeaderCell>Hat Bitiş</Table.HeaderCell>
            <Table.HeaderCell>İstasyonlar</Table.HeaderCell>
            <Table.HeaderCell>Sefer Saatleri</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tramline.map((hat) => (
            <Table.Row key={hat.hatId}>
              <Table.Cell>
                <p>{hat.Aciklama}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{hat.Adi}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{hat.HatBaslangic}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{hat.HatBitis}</p>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/tramline/${hat.HatId}`}>İstasyonlar</Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/tramsefer/${hat.HatId}`}>Seferler</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}
