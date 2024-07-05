import { Title } from "@solidjs/meta";
import Counter from "@/components/Counter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function Home() {
  return (
    <main class="dark">
      <div class="flex h-80 min-h-screen w-full items-center justify-center">
        <Card class="text-center">
          <CardHeader>
            <img
              src="/one-magenta-logo-full-no-bg.png"
              alt="ONE Logo"
              class="object-contain pb-10"
              height={237}
              width={500}
            />
            <CardTitle class="scroll-m-20 text-3xl font-semibold tracking-tight">
              Project Varuna
            </CardTitle>
            <CardDescription>
              Locally Developed Functions for ONE NA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
            // onClick={async () => {
            //   await signIn("google", { callbackUrl: "/dashboard" });
            // }}
            >
              Sign In with ONE SSO
            </Button>
          </CardContent>
          {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
        </Card>
      </div>
    </main>
  );
}
