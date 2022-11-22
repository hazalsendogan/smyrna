import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Card,
  Image,
  Grid,
  GridRow,
} from "semantic-ui-react";

const merkezler = [
  {
    id: 1,
    ad: "Fuarlar",
    imageUrl: "../images/Kulturpark.jpg",
    url: "/fuarlar",
  },
  {
    id: 2,
    ad: "Hamamlar",
    imageUrl: "../images/1352385856.jpg",
    url: "/hamamlar",
  },
  {
    id: 3,
    ad: "Kaplıcalar",
    imageUrl: "../images/izmir-kaplicalari.jpg",
    url: "/kaplicalar",
  },
  {
    id: 4,
    ad: "Meydanlar",
    imageUrl: "../images/2234144.jpg",
    url: "/meydanlar",
  },
  {
    id: 5,
    ad: "Plajlar",
    imageUrl: "../images/images.jpeg",
    url: "/plajlar",
  },
];

export default function KentCekim() {
  return (
    <Container>
      <Header as="h5">Kent Çekim Merkezleri</Header>
      <Grid columns={5}>
        <Grid.Row>
          {merkezler.map((item) => (
            <Grid.Column key={item.id}>
              <Link to={item.url}>
                <Card>
                  <Image src={item.imageUrl}></Image>
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
  );
}
