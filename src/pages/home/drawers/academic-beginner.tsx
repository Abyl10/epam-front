import React from "react";
import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useDrawer } from "@/context/drawer-context";

export const AcademicBeginner = () => {
  const { closeDrawer } = useDrawer();
  return (
    <div>
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button onClick={() => closeDrawer()}>Submit</Button>
        <DrawerClose>
          <Button variant="outline" onClick={() => closeDrawer()}>
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  );
};
