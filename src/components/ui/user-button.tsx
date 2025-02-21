import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export const LoginSignupButtons = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-4 w-full max-w-sm p-4">
            {/* Log in Button */}
            <Button
                onClick={() => router.push("/sign-in")}
                className="bg-[#001F54] hover:bg-[#003366] text-white w-full py-3 text-lg"
            >
                Log in
            </Button>

            {/* Sign up Button */}
            <Button
                onClick={() => router.push("/sign-up")}
                className="bg-[#001F54] hover:bg-[#003366] text-white w-full py-3 text-lg"
            >
                Sign up
            </Button>
        </div>
    );
};

export const UserDropdown = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    // Loader while session is loading
    if (status === "loading") {
        return (
            <Loader className="size-6 mr-4 mt-4 float-right animate-spin" />
        );
    }

    const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();

    const handleSignOut = async () => {
        await signOut({
            redirect: false,
        });
        router.push("/");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none relative float-right p-4 md:p-8">
                <div className="flex gap-4 items-center">
                    <span>{session?.user?.name}</span>
                    <Avatar className="size-10 hover:opacity-75 transition">
                        <AvatarImage
                            className="size-10 hover:opacity-75 transition"
                            src={session?.user?.image || undefined}
                        />
                        <AvatarFallback className="bg-sky-800 text-white">
                            {avatarFallback}
                        </AvatarFallback>
                    </Avatar>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="bottom" className="w-50">
                <DropdownMenuItem className="h-10" onClick={() => handleSignOut()}>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
