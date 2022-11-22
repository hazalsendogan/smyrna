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

export default function MetroSeferler() {
  const [saatler, setSaatler] = useState([]);
  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/metro/sefersaatleri")
      .then((res) => res.json())
      .then((data) => setSaatler(data));
  }, [saatler]);
  return (
    <Container>
      <section>
        <Link to="/metroizmir">Geri</Link>
      </section>
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
          {saatler.map((sefer, key) => (
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
    </Container>
  );
}
