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

export default function Meydanlar() {
  const [meydanlar, setMeydanlar] = useState([]);
  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/ibb/cbs/meydanlar")
      .then((res) => res.json())
      .then((data) => setMeydanlar(data.onemliyer));
  }, [meydanlar]);
  return (
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          {meydanlar.map((meydan) => (
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>{meydan.ADI}</Card.Header>
                  <Card.Description>{meydan.ACIKLAMA}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    {meydan.MAHALLE},{meydan.ILCE}
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
