import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";
import { Menu, Segment } from "semantic-ui-react";
import MetroHatlar from "../Metro/MetroHatlar";
import TramHatlar from "./TramHatlar";

export default function Hatlar() {
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item name="home">
          <Link to="/">Anasayfa</Link>
        </Menu.Item>
        <Menu.Item name="tram" active color="violet">
          <Link to="/tramline" className="violet">Metro İzmir</Link>
        </Menu.Item>
        <Menu.Item name="saglik">
          <Link to="/saglik">Sağlık</Link>
        </Menu.Item>
        <Menu.Item name="egitim">
          <Link to="/egitim">Eğitim</Link>
        </Menu.Item>
      </Menu>
      <TramHatlar/>
      <MetroHatlar/>
    </div>
  );
}
