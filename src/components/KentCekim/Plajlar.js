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

export default function Plajlar() {
  const [plajlar, setPlajlar] = useState([]);
  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/ibb/cbs/plajlar")
      .then((res) => res.json())
      .then((data) => setPlajlar(data.onemliyer));
  }, [plajlar]);
  return (
    <Container>
      <Grid columns={3}>
        <Grid.Row>
          {plajlar.map((plaj) => (
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>{plaj.ADI}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    {plaj.MAHALLE},{plaj.ILCE}
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
