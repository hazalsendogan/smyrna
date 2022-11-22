import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Breadcrumb } from "semantic-ui-react";


export default function AntikKentler() {
    const [kentler, setKentler] = useState([]);
    useEffect(() => {
      fetch("https://openapi.izmir.bel.tr/api/ibb/cbs/antikkentler")
        .then((res) => res.json())
        .then((data) => setKentler(data.onemliyer));
    }, [kentler]);
  return (
    <Container>
     <Breadcrumb >
          <Breadcrumb.Section>
           <Link to="/" >Anasayfa</Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider></Breadcrumb.Divider>
          <Breadcrumb.Section>Tarihi Yerler</Breadcrumb.Section>
          <Breadcrumb.Divider></Breadcrumb.Divider>
          <Breadcrumb.Section>
           <Link to="/antik">Antik Kentler</Link>
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
            {kentler.map((kent, key) => (
              <Table.Row key={key}>
                <Table.Cell>{kent.MAHALLE}</Table.Cell>
                <Table.Cell>{kent.YOL}</Table.Cell>
                <Table.Cell>{kent.ILCE}</Table.Cell>
                <Table.Cell>{kent.ADI}</Table.Cell>
                <Table.Cell>{kent.ACIKLAMA}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
    </Container>
  )
}
