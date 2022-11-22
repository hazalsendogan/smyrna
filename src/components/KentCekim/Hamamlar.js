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

export default function Hamamlar() {
  const [hamamlar, setHamamlar] = useState([]);
  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/ibb/cbs/hamamlar")
      .then((res) => res.json())
      .then((data) => setHamamlar(data.onemliyer));
  }, [hamamlar]);
  return (
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          {hamamlar.map((hamam) => (
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>{hamam.ADI}</Card.Header>
                  <Card.Description>{hamam.ACIKLAMA}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    {hamam.MAHALLE},{hamam.ILCE}
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
