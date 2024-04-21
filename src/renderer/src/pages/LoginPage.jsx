import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage({ setIsLoggedIn }) {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="flex-items w-[390px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your credencial below to login</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Username</Label>
              <Input id="username" type="text" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" onClick={() => setIsLoggedIn(true)}>
              Login
            </Button>
            <Button variant="outline" className="w-full" onClick={() => setIsLoggedIn(true)}>
              Anonymous login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
