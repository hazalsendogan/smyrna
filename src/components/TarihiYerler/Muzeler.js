import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Breadcrumb } from "semantic-ui-react";

export default function Muzeler() {
  const [muzeler, setMuzeler] = useState([]);
  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/ibb/cbs/muzeler")
      .then((res) => res.json())
      .then((data) => setMuzeler(data.onemliyer));
  }, [muzeler]);
  return (
    <div>
      <Container>
        <Breadcrumb >
          <Breadcrumb.Section>
           <Link to="/" >Anasayfa</Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider></Breadcrumb.Divider>
          <Breadcrumb.Section>Tarihi Yerler</Breadcrumb.Section>
          <Breadcrumb.Divider></Breadcrumb.Divider>
          <Breadcrumb.Section>
           <Link to="/muzeler">Müzeler</Link>
          </Breadcrumb.Section>
        </Breadcrumb>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>MAHALLE</Table.HeaderCell>
              <Table.HeaderCell>YOL</Table.HeaderCell>
              <Table.HeaderCell>ILCE</Table.HeaderCell>
              <Table.HeaderCell>ADI</Table.HeaderCell>
              <Table.HeaderCell>AÇIKLAMA</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {muzeler.map((muze, key) => (
              <Table.Row key={key}>
                <Table.Cell>{muze.MAHALLE}</Table.Cell>
                <Table.Cell>{muze.YOL}</Table.Cell>
                <Table.Cell>{muze.ILCE}</Table.Cell>
                <Table.Cell>{muze.ADI}</Table.Cell>
                <Table.Cell>{muze.ACIKLAMA}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
