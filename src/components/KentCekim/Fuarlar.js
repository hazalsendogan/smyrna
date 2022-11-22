import React, { useState, useEffect } from "react";
import { CardColumns } from "reactstrap";
import {
  Container,
  Header,
  Card,
  Image,
  Grid,
  GridRow,
  CardContent,
  CardHeader,
  GridColumn,
  Menu
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Fuarlar() {
  const [fuarlar, setFuarlar] = useState([]);
  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/ibb/cbs/fuar")
      .then((res) => res.json())
      .then((data) => setFuarlar(data.onemliyer));
  }, [fuarlar]);
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item name="home" active color="violet">
          <Link to="/" className="violet">
            Anasayfa
          </Link>
        </Menu.Item>
        <Menu.Item name="tram">
          <Link to="/metroizmir">Metro İzmir</Link>
        </Menu.Item>
      </Menu>
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            {fuarlar.map((fuar) => (
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Card.Header>{fuar.ADI}</Card.Header>
                    <Card.Description>{fuar.ACIKLAMA}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <p>
                      {fuar.MAHALLE},{fuar.ILCE}
                    </p>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
