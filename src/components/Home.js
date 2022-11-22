import React from "react";
import { Grid, Menu, Segment,Card,Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BannerImg from "../images/depositphotos_329460716-stock-photo-izmir-clock-tower-famous-clock.jpg"
import KentCekim from "./KentCekim";
import TarihiYerler from "./TarihiYerler";

export default function Home() {
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item name="home"  active color="violet">
          <Link to="/" className="violet">Anasayfa</Link>
        </Menu.Item>
        <Menu.Item name="tram">
          <Link to="/metroizmir">Metro İzmir</Link>
        </Menu.Item>
        <Menu.Item name="saglik">
          <Link to="/saglik">Sağlık</Link>
        </Menu.Item>
        <Menu.Item name="egitim">
          <Link to="/egitim">egitim</Link>
        </Menu.Item>
      </Menu>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <div className="banner-section">
              <img src={BannerImg} alt="Izmir Saat Kulesi"/>
              <div className="banner-content">
                <Header as="h1">Smyrna</Header>
                <Header as="h5">İzmir Bilgi Bankasına Hoşgeldiniz</Header>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <section>
       <KentCekim></KentCekim>
       <TarihiYerler/>
      </section>
    </div>
  );
}
