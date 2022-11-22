import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Breadcrumb } from "semantic-ui-react";


export default function Hanlar() {
    const [hanlar, setHanlar] = useState([]);
    useEffect(() => {
      fetch("https://openapi.izmir.bel.tr/api/ibb/cbs/tarihicarsivehanlar")
        .then((res) => res.json())
        .then((data) => setHanlar(data.onemliyer));
    }, [hanlar]);
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
           <Link to="/antik">Tarihi Çarşı ve Hanlar</Link>
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
            {hanlar.map((han, key) => (
              <Table.Row key={key}>
                <Table.Cell>{han.MAHALLE}</Table.Cell>
                <Table.Cell>{han.YOL}</Table.Cell>
                <Table.Cell>{han.ILCE}</Table.Cell>
                <Table.Cell>{han.ADI}</Table.Cell>
                <Table.Cell>{han.ACIKLAMA}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
    </Container>
  )
}
