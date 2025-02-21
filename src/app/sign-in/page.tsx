"use client"
//shadcn UI

import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle
} from "@/components/ui/card"

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

//react icons
import { FaGithub

 } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {useState} from "react"
import { signIn }  from "next-auth/react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";


const SignIn = ( ) =>{

    const  [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pending, setPending] = useState(false);
    const router=useRouter()
    const [error,  setError] = useState("");


    const handleSubmit = async (e: React.FormEvent)=> {
        e.preventDefault()
        setPending(true);
        const res  = await signIn("credentials", {
            redirect: false,
            email,
            password,
            callbackUrl: "/net", //ahsan for testing
 
    })
    if(res?.ok){
        router.push(res.url || "/net");
        toast.success("login successful");
    }else if(res?.status===401){
        setError("Invalid Credentials");
        setPending(false)
    }else if(res?.status===400){
            setError("Invalid Email");
            setPending(false)
    }else {
        setError("Something  went wrong");

    }
 
}

const handleProvider=(
    event:React.MouseEvent<HTMLButtonElement>,
    value:"github"|"google"
)=>{
    event.preventDefault();
    signIn(value,{callbackUrl: "/net"});  //signIn(value,{callbackUrl: "/"}); by ahsan
}





    return (<div className="h-full flex items-center justify-center bg-[#1b0918]">
    <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
        <CardHeader>
                <CardTitle className="text-center">
                    Sign in
                </CardTitle>
            <CardDescription className="text-sm text-center text-accent-foreground"> 
                use email or service to sign in
            </CardDescription>
        
        </CardHeader>
        {!! error && (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6 "> 
            <TriangleAlert/>
            <p>{error}</p>
            </div>
        )}
<CardContent className="px-2 sm:px-6">
<form onSubmit={handleSubmit} className="space-y-3 ">

<Input 
type="email" 
disabled={pending}
placeholder="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<Input 
type="password" 
disabled={pending}
placeholder="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>


<Button 
    className="w-full"
    size="lg"
    disabled={pending}
>
 continue
</Button>
</form>
<Separator />
<div className="flex my-2 justify-evenly mx-auto items-center">
<Button 
disabled={false}
onClick={(e) => handleProvider(e, "google")}
variant="outline"
size="lg"
className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
>
    <FcGoogle className="size-8 left-2.5 top-2.5"/>
  
    </Button>

    <Button 
disabled={false}
onClick={(e) => handleProvider(e, "github")}
variant="outline"
size="lg"
className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
>
   
    <FaGithub className="size-8 left-2.5 top-2.5"/>
    </Button>
</div>
<p className="text-center text-sm mt-2 text-muted-foreground">
    Create a new account
 <Link className="text-sky-700 ml-4 hover:underline cursor-pointer" href="sign-up">Sign up</Link>

</p>
</CardContent>
</Card>


    </div> );
    
    }
    export default SignIn;