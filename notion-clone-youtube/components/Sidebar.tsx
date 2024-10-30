import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

// components
import NewDocumentButton from "./NewDocumentButton";

function Sidebar() {
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <NewDocumentButton />
    </div>
  )
}

export default Sidebar
