import { extend } from "@pixi/react";
import { Assets, Sprite, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";

extend({
  Sprite,
});

interface PlayerProps {
  tokenSrc: string;
  x: number;
  y: number;
}

const Player = ({ tokenSrc, x, y }: PlayerProps) => {
  const playerRef = useRef<Sprite | null>(null);
  const [texture, setTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load(tokenSrc).then((resImg) => {
        setTexture(resImg);
      });
    }
  }, []);

  return (
    <pixiSprite
      ref={playerRef}
      anchor={0.5}
      eventMode={"static"}
      texture={texture}
      width={32}
      height={32}
      x={x}
      y={y}
    />
  );
};

export default Player;
