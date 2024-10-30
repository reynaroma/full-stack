import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


// components
import NewDocumentButton from "./NewDocumentButton";

function Sidebar() {
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <div className="hidden md:inline">
        <NewDocumentButton />
      </div>
    </div>
  )
}

export default Sidebar
