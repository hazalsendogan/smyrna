import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Header,
  Label,
  Tab,
  Table,
  TableBody,
} from "semantic-ui-react";

export default function TramSefer() {
  const { id } = useParams();
  const url = `https://openapi.izmir.bel.tr/api/tramvay/seferler/${id}`;
  const [seferler, setSeferler] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSeferler(data));
  }, [seferler]);
  return (
    <Container>
      <section>
        <Link to="/tramline">Tramvay</Link>
      </section>
      {seferler.length > 0 ? (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Sıra</Table.HeaderCell>
              <Table.HeaderCell>Başlangıç Saati</Table.HeaderCell>
              <Table.HeaderCell>Bitiş Saati</Table.HeaderCell>
              <Table.HeaderCell>Aralık</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <TableBody>
            {seferler.map((sefer, key) => (
              <Table.Row key={key}>
                <Table.Cell>
                  <p>{sefer.Sira}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>{sefer.BaslangicSaati}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>{sefer.BitisSaati}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>{sefer.Aralik}</p>
                </Table.Cell>
              </Table.Row>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Header as="h3">Sefer Bulunamadı</Header>
      )}
    </Container>
  );
}
