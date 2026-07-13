import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Particle() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>
          Nested drawers
        </DrawerTrigger>
        <DrawerPopup showBar>
          <DrawerHeader className="text-center">
            <DrawerTitle>First step</DrawerTitle>
            <DrawerDescription>
              This is the first step. Tap the button below to continue to the next
              screen.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter
            className="justify-center sm:justify-center"
            variant="bare"
          >
            <DrawerClose render={<Button variant="ghost" />}>Cancel</DrawerClose>
            <Drawer>
              <DrawerTrigger render={<Button variant="outline" />}>
                Continue
              </DrawerTrigger>
              <DrawerPopup showBar>
                <DrawerHeader className="text-center">
                  <DrawerTitle>Second step</DrawerTitle>
                  <DrawerDescription>
                    You've reached the second step. Scroll down to see more items!
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerPanel className="max-h-[60vh] overflow-y-auto">
                  <div className="flex flex-col gap-4 p-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="h-16 shrink-0 rounded-xl border bg-muted flex items-center justify-center">
                        2Depth Item {i + 1}
                      </div>
                    ))}
                  </div>
                </DrawerPanel>
                <DrawerFooter
                  className="justify-center sm:justify-center"
                  variant="bare"
                >
                  <DrawerClose render={<Button variant="ghost" />}>
                    Back
                  </DrawerClose>
                  <Drawer>
                    <DrawerTrigger render={<Button variant="outline" />}>
                      Continue
                    </DrawerTrigger>
                    <DrawerPopup showBar>
                      <DrawerHeader className="text-center">
                        <DrawerTitle>Third step</DrawerTitle>
                        <DrawerDescription>
                          You've reached the final step. Scroll down or go back.
                        </DrawerDescription>
                      </DrawerHeader>
                      <DrawerPanel className="max-h-[70vh] overflow-y-auto">
                        <div className="flex flex-col gap-4 p-4">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div key={i} className="h-16 shrink-0 rounded-xl border bg-muted flex items-center justify-center">
                              3Depth Item {i + 1}
                            </div>
                          ))}
                        </div>
                      </DrawerPanel>
                    </DrawerPopup>
                  </Drawer>
                </DrawerFooter>
              </DrawerPopup>
            </Drawer>
          </DrawerFooter>
        </DrawerPopup>
      </Drawer>
    </div>
  );
}
