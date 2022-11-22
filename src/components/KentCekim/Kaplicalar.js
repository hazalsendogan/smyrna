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
} from "semantic-ui-react";

export default function Kaplicalar() {
  const [kaplicalar, setKaplicalar] = useState([]);
  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/ibb/cbs/kaplicalar")
      .then((res) => res.json())
      .then((data) => setKaplicalar(data.onemliyer));
  }, [kaplicalar]);
  return (
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          {kaplicalar.map((kaplica) => (
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>{kaplica.ADI}</Card.Header>
                  <Card.Description>{kaplica.ACIKLAMA}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    {kaplica.MAHALLE},{kaplica.ILCE}
                  </p>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
}
