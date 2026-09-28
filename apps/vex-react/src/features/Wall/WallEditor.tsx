import { Application } from "@pixi/react";
import WallEditorSidebar from "./WallEditorSidebar";
import { useRef, useState } from "react";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

const WallEditor = () => {
  const mapInputRef = useRef<HTMLInputElement | null>(null);
  const [width] = useState(window.innerWidth - 80);
  const [height] = useState(window.innerHeight);

  const handleAddMap = () => {
    mapInputRef.current?.click();
  };

  const handleMapFileChange = (evt) => {
    console.log(evt);
  };

  return (
    <div className="flex">
      <div className="absolute right-5 top-5 w-64">
        <Input
          ref={mapInputRef}
          className="absolute hidden"
          id="map-image"
          type="file"
          onChange={handleMapFileChange}
        />
        <Button className="absolute" onClick={handleAddMap}>
          Add Map
        </Button>
      </div>
      <WallEditorSidebar />
      <Application width={width} height={height}></Application>
    </div>
  );
};

export default WallEditor;
