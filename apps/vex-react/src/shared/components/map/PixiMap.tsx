import { Application, extend } from "@pixi/react";
import { useEffect, useRef, useState } from "react";
import { Assets, Container, Graphics, Sprite, Texture } from "pixi.js";
import TestMap from "@shared/assets/map_test.webp";
import Token from "@shared/assets/token.png";
import { getCenter } from "@/shared/utils/getCenter";
import Player from "./Player";

extend({
  Container,
  Graphics,
  Sprite,
});

const PixiMap = () => {
  const [width] = useState(window.innerWidth);
  const [height] = useState(window.innerHeight);
  const mapRef = useRef<Sprite | null>(null);
  const [texture, setTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load(TestMap).then((result) => {
        setTexture(result);
      });
    }
  }, [texture]);

  const { x, y } = getCenter(width, height, { x: 0, y: 0 });

  return (
    <Application width={width} height={height}>
      <pixiSprite
        ref={mapRef}
        anchor={0.5}
        eventMode={"static"}
        texture={texture}
        x={x}
        y={y}
      />
      <Player tokenSrc={Token} x={x} y={y} />
    </Application>
  );
};

export default PixiMap;
