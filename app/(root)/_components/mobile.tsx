import React from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../../../components/ui/sheet"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { navLinks } from "@/constants"
import { cn } from "@/lib/utils"

const Mobile = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger asChild className="flex md:hidden">
                <Button size={'icon'} variant={'ghost'}>
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'}>
                <Link href={'/'}>
                    <h1 className="text-4xl font-creteRound">Sammi</h1>
                </Link>
                <Separator className="my-3"/>
                <div className="flex flex-col spcae-y-3">
                    {navLinks.map(nav => (
                        <Link
                        href={nav.route}
                        key={nav.route}
                        className={cn(
                            'hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2', pathname === nav.route && "text-blue-400/20"
                        )}
                        >
                            <nav.icon className="w-5 h-5"/>
                            {nav.name}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>

    )
}

export default Mobile