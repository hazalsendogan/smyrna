import React from 'react';
import {
    Container,
    Header,
    Card,
    Image,
    Grid,
    GridRow,
  } from "semantic-ui-react";
  import { Link } from "react-router-dom";
const merkezler = [
    {
      id: 1,
      ad: "Antik Kentler",
      url: "/antik",
    },
    {
      id: 2,
      ad: "Müzeler",
      url: "/muzeler",
    },
    {
      id: 3,
      ad: "Tarihi Çarşı ve Hanlar",
      url: "/hanlar",
    }
  ];

export default function TarihiYerler() {
  return (
    <Container>
    <Header as="h5">Tarihi Yerler</Header>
    <Grid columns={5}>
      <Grid.Row>
        {merkezler.map((item) => (
          <Grid.Column key={item.id}>
            <Link to={item.url}>
              <Card>
                <Card.Content>
                  <Card.Header>{item.ad}</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </Container>
  )
}
