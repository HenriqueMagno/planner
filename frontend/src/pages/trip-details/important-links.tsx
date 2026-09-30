import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function Importantlinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnb</span>
                        <a href="#" className="block text-xs max-w-70 text-zinc-100 truncate hover:text-zinc-400">
                            https://www.airbnb.com.br/rooms/1047000135838423842
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5" />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnb</span>
                        <a href="#" className="block text-xs max-w-70 text-zinc-100 truncate hover:text-zinc-400">
                            https://www.airbnb.com.br/rooms/15347000135838423842
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5" />
                </div>

            </div>

            <Button variant="secondary" size="full">
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>

        </div>
    )
}