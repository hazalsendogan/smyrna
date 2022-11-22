import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  GridRow,
  Header,
  List,
  Table,
} from "semantic-ui-react";

export default function MetroHatlar() {
  return (
    <Container>
      <section>
        <Header as="h5">Metro Hatları</Header>
        <p>Evka 3 - Fahrettin Altay Metro Hattı</p>
      </section>
      <List horizontal>
        <List.Item>
          <Link to="/metroline">İstasyonlar</Link>
        </List.Item>
        <List.Item>
          <Link to="/metrosefer">Seferler</Link>
        </List.Item>
      </List>
    </Container>
  );
}
